var awsIot = require('aws-iot-device-sdk');
var display = require('./DisplayControl');
var thing = require('./thing.json');
var thingShadows = awsIot.thingShadow(thing);

function generateStateUpdateForSerialNumber(serialnumber){

    return {
        state : {
            desired:{
                serialnumber: serialnumber     
            },
            reported : {
                serialnumber: serialnumber
            }
        }

    };
}

function UpdateBiosSerialNumber () {

        console.log("Updating my SN...");
        var exec = require('child_process').execFile;
        console.log("fun() start");
        exec('wmic', ['bios', 'get', 'serialnumber'], function(err, data) {
        var sn =  data.split('\n')[1].replace(/\r/g,'');
        var clientTokenIP = thingShadows.update(thing.clientId, generateStateUpdateForSerialNumber(sn));
        console.log("Update:" + clientTokenIP);
        });
}






console.log("Registering...");
thingShadows.register(thing.clientId);
thingShadows.on('connect', function(result) {

    console.log("Connected...");     
    // An update right away causes a timeout error, so we wait about 2 seconds
    setTimeout(function() {

        UpdateBiosSerialNumber();            

    }, 2500);

})


thingShadows
    .on('delta',
        function(thingName, stateObject) {
            console.log('received delta on ' + thingName + ': ' +
                JSON.stringify(stateObject));

            if (stateObject.state.monitor === 'off') {
                console.log("turn off display");
                display('off');                
                console.log("Update:" + thingShadows.update(thing.clientId, {"state": {"reported": {"monitor" : 'off'}}}));
            } else if (stateObject.state.monitor === 'on') {
                console.log("turn on display");
                display('on');          
                console.log("Update:" + thingShadows.update(thing.clientId, {"state": {"reported": {"monitor" : 'on'}}}));
            } 

        });


thingShadows
    .on('message', function(topic, payload) {
        console.log('message', topic, payload.toString());
    });

 thingShadows
    .on('close', function() {
       console.log('close');
    });

 thingShadows
    .on('offline', function() {
       console.log('offline');
    });

 thingShadows
    .on('error', function(error) {
       console.log('error', error);
    });
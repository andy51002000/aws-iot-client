var mysystem = require('../lib/SystemControl');
let expected ={
    state:{
        reported:{
            system:'shutdown'
        }
    }
}
mysystem.shutdown(function(updatereported){
    console.log('Trigger shutdown');
     
     
});
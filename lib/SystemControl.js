var spawn = require('child_process').spawn;
var path = require('path');
var spawnShutdown = function(args, callback){

    callback = callback || function(err){
        if(err) console.error('shutdown failed:',err);
    }

    var shutdownFile = path.join(process.env.SystemRoot,'System32','shutdown.exe');
    var child = spawn( shutdownFile, args, {});
    child.on('err', function(err){
        callback(err);        
    })

    child.on('exit', function(code){
        callback(null,code);
    })

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}

exports.shutdown = function(milliseconds, callback){
    
    let updatereported=
    {
        state:
        {
            reported:
            {
                system:'shutdown'
            }
        }
    }
    
    callback(updatereported);

    spawnShutdown(['/s','/t',milliseconds],function(err,code){
        if(err)
        {
            console.error('shutdown failed', err);
            return;
        }

        console.info('shutdown success', code);

            
    });

    
}

exports.reboot = function(callback){
    let updatereported=
    {
        state:
        {
            reported:
            {
                system:'reboot'
            }
        }
    }
    
    callback(updatereported);
    
    spawnShutdown(['/r','/t','2'],function(err,code){
        if(err)
        {
            console.error('reboot failed', err);
            return;
        }

        console.info('reboot success', code);
            
    });
}



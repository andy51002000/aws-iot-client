var robot = require("robotjs");
var exec = require('child_process').execFile;

function runSubProc() {
    console.log("fun() start");
    exec('cmd.exe', ['/c','C:\\Program Files (x86)\\Windows Media Player\\wmplayer.exe', '/playlist', 'playlist'], function (err, data) {
        console.log(err)
        console.log(data.toString());
    });
}

module.exports = {

    musicPlay: function (callback) {
        robot.keyTap('audio_play');

        updatereported =
            {
                state:
                {
                    reported:
                    {
                        player: 'play'
                    }
                }
            }
        callback(updatereported);
    },
    musicPause: function (callback) {
        robot.keyTap('audio_pause');
        updatereported =
            {
                state:
                {
                    reported:
                    {
                        player: 'pause'
                    }
                }
            }
        callback(updatereported);
    },
    musicNext: function (callback) {
        robot.keyTap('audio_next');
        updatereported =
            {
                state:
                {
                    reported:
                    {
                        player: 'next'
                    }
                }
            }
        callback(updatereported);
    },
    musicPre: function (callback) {
        robot.keyTap('audio_prev');
        updatereported =
            {
                state:
                {
                    reported:
                    {
                        player: 'pre'
                    }
                }
            }
        callback(updatereported);
    },
    musicOpen: function (callback) {
        
        runSubProc();
        updatereported =
            {
                state:
                {
                    reported:
                    {
                        player: 'open'
                    }
                }
            }
        callback(updatereported);
    }
}
var robot = require("robotjs");


module.exports = {

    musicPlay: function (callback) {
        robot.keyTap('audio_play');

        updatereported = 
        {
            state: 
            {
                reported: 
                {
                    player : 'play'
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
                    player : 'pause'
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
                    player : 'next'
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
                    player : 'pre'
                }
            }
        }
        callback(updatereported);
    },
}
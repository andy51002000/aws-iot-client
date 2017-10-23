var assert = require('chai').assert;
var music = require('../lib/MusicPlayerControl');
var mysystem = require('../lib/SystemControl');

Object.prototype.equals = function(x)
{
    for(p in this)
    {
        switch(typeof(this[p]))
        {
            case 'object':
                if (!this[p].equals(x[p])) { return false }; break;
            case 'function':
                if (typeof(x[p])=='undefined' || (p != 'equals' && this[p].toString() != x[p].toString())) { return false; }; break;
            default:
                if (this[p] != x[p]) { return false; }
        }
    }

    for(p in x)
    {
        if(typeof(this[p])=='undefined') {return false;}
    }

    return true;
}

describe("MusicPlayerControl", function(){


    it('updatereport should be player:play', function(){
        let expected = {
            state: {
                reported:{
                    player: "play"
                }
            }
        }
        music.musicPlay(function(updatereport){
            //console.log(updatereport)
            assert.isTrue(updatereport.equals(expected), `updateshadow is not expected:${updatereport}` )
        });


    })

    
    it('updatereport should be player:pause', function(){
        let expected = {
            state: {
                reported:{
                    player: "pause"
                }
            }
        }
        music.musicPause(function(updatereport){
            //console.log(updatereport)
            assert.isTrue(updatereport.equals(expected), `updateshadow is not expected:${updatereport}` )
        });

    })

    
    it('updatereport should be player:next', function(){
        let expected = {
            state: {
                reported:{
                    player: "next"
                }
            }
        }
        music.musicNext(function(updatereport){
            //console.log(updatereport)
            assert.isTrue(updatereport.equals(expected), `updateshadow is not expected:${updatereport}` )
        });
    })

    
    it('updatereport should be player:pre', function(){
        let expected = {
            state: {
                reported:{
                    player: "pre"
                }
            }
        }
        music.musicPre(function(updatereport){
            //console.log(updatereport)
            assert.isTrue(updatereport.equals(expected), `updateshadow is not expected:${updatereport}` )
        });
    })

    it('updatereport should be player:open', function(){
        let expected = {
            state: {
                reported:{
                    player: "open"
                }
            }
        }
        music.musicOpen(function(updatereport){
            //console.log(updatereport)
            assert.isTrue(updatereport.equals(expected), `updateshadow is not expected:${updatereport}` )
        });
    })
})

describe('System control', function(done){
    it('shutdown system',function(done){
        let expected ={
            state:{
                reported:{
                    system:'shutdown'
                }
            }
        }
        mysystem.shutdown(function(updatereported){
            console.log('Trigger shutdown');
            assert.deepEqual(expected, updatereported);
            
        });
    })
})
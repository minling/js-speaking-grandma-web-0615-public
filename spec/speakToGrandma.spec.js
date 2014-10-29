'use strict';

describe('speakToGrandma', function() {
  it('asks you to repeat yourself unless you shout', function() {
    expect(speakToGrandma('Hi Nana, how are you?')).toEqual('HUH?! SPEAK UP, SONNY!');
  });

  it('responds if you yell', function(){
    expect(speakToGrandma('WHAT DID YOU EAT TODAY?')).toEqual("NO, NOT SINCE 1938!");
  });
});

/*global jQuery */
/*!
* typey.js 1.0
*
* Copyright 2012, Michael Humphries
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
*/
(function( $ ){

  $.fn.typey = function(options) {
    
    // Setup options
    var s = $.extend({
        'words' : ['cat', 'dog', 'mouse'],
        'typingSpeed' : 100,
        'wordDelay' : 400,
        'isInfinite' : true
      }, options);


    return this.each(function(){
      // Store the object
      var $el = $(this);
      if($el.attr('data-typey-words'))
        s.words = $el.attr('data-typey-words').split(",");

      if(!$el.children().hasClass('typey'))
        $el.append('<span class="typey"></span><span class="typey-cursor blink">|</span>');

      var start = function(word){
        //Queue words 
        printLetters(word, function(){
          setTimeout(function(){
            var i = s.words.indexOf(word);
            if(i++ < s.words.length-1){
              $el.find('.typey').html('');
              start(s.words[i]);
            }else{
              if(s.isInfinite){
                //Restart whole word list
                $el.find('.typey').html('');
                start(s.words[0]);
              }
            }
          }, s.wordDelay);
        }); 
      };

      var printLetters = function(w, callback){
        var i = 0;
        var letters = w.split('');
        var typing = setInterval(function() { 
          $el.find('.typey').append(letters[i]); 
          if(i++ == letters.length-1){
            clearInterval(typing);
            callback();
          }
        }, s.typingSpeed);
      };

      //initial
      var initial = true;
      start(s.words[0]);
    });

  };

})( jQuery );
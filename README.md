Typey.js
=====

A jQuery plugin that prints out provided words like a typewriter or old console. Similar to what Google I/O 2014 used. See example here: http://thegreyspot.github.io/Typey.js

## Usage
Typey.js requires jQuery and is itself only 2KB. The CSS file contains the helper class for a blinking cursor. It's probably easier to just add it to your own CSS file and cut down on one less HTTP request.

```html
<!--Include these guys -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="jquery.typey.js"></script>
<link href="style.css" type="text/css" rel="stylesheet"> 

<!--- Gets typey going -->
<div id="intro">Hello my name is </div>
<script>
  $("#intro").typey();
</script>
```

## Options
<script>
  $("#intro").typey({
  	'words' : ['cat', 'dog', 'mouse'], //Array of words to display
    'typingSpeed' : 100, //speed at which to type
    'wordDelay' : 400, //Delay between words
    'isInfinite' : true	//Keep cylcing through the 'words' array
  });
</script>

### More options
You can set the location of where the words will be typed in the sentence.

Add '<span class="typey"></span>' where you want the words typed into.

```html
<div>This <span class="typey"></span> is typing with Typey.js</div>
```

You can also include the array of words, right in the div itself.

```html
<div data-typey-words="robot, computer, ai">I am a </div>
```

## Other things
- Created by Michael Humphries (@thegreyspot on twitter, and 'thegreyspot' everywhere else on the internet)
- Design idea from Rotem K.

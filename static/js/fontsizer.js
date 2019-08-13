
// $(document).ready(function () {
  // console.log('fontsizer ready')

//   $("#0").on("click", function() {
//     if ($(this).val() == "Comic Sans MS")
//         $(this).val("")
// })​

// $("#1").on("click", function() {
//   if ($(this).val() == "40px")
//       $(this).val("")
// })

// $("#2").on("click", function() {
//   if ($(this).val() == "e")
//       $(this).val("")
// })

// })

  var x = 0;
  var y = 0;

//   function makeCanvas(){

//     $("#main").append('<canvas id="layer2" width="400" height="200" style="cursor: pointer; position: absolute; left: 35%; top: 150px;" border: 1px solid #D0D0D0; border-radius:5px;  z-index: 1;" ></canvas>')
//     var canvas = document.getElementById('layer2'),
//     ctx = canvas.getContext('2d'),
//     rect = {},
//     drag = false;


//     init()


//     function init() {
//       canvas.addEventListener('mousedown', mouseDown, false);
//       canvas.addEventListener('mouseup', mouseUp, false);
//       canvas.addEventListener('mousemove', mouseMove, false);
//     }
    
//     function mouseDown(e) {
//       rect.startX = e.pageX - this.offsetLeft;
//       rect.startY = e.pageY - this.offsetTop;
//       drag = true;
//     }
    
//     function mouseUp() {
//       drag = false;
//         /* ctx.clearRect(0,0,canvas.width,canvas.height) */;
//     }
//     function mouseMove(e) {
//       if (drag) {
//         rect.w = (e.pageX - this.offsetLeft) - rect.startX;
//         rect.h = (e.pageY - this.offsetTop) - rect.startY ;
//         ctx.clearRect(0,0,canvas.width,canvas.height);
//         draw();
//         console.log("x =" + rect.w)
//         console.log("y =" + rect.h)
//         x = Math.abs((rect.w));
//         y = Math.abs(rect.h);
//         $("#rect_metrics").html('<span class="glyphicon glyphicon-pencil"></span>'+ " element height: " + y + "px, element width: " + x+ "px")

//       }
//     }
    
//     function draw() {
//         ctx.setLineDash([]);
//       ctx.strokeStyle = 'green';
//       ctx.fillStyle =  "rgba(90, 187, 247, 0.5)";
//       ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);

      
//     }

   
//   }
//   function returnSquMetrics(){
//     console.log("X IS =" + x)
//     console.log("Y IS =" + y)
//     $("#rect_metrics").html('<span class="glyphicon glyphicon-pencil"></span>'+" element height: " + x + ", element width: " + y)

// }
  
  
  
function getMetrics(testtext, fontSize, fontName) {
  console.log('testtext: ' + testtext)
  console.log('fontSize : ' + fontSize)
  console.log('fontName : ' + fontName)
  // var testtext = document.getElementsByTagName('input')[2].value;
  $("#main").empty()
  $("#main").append(' <canvas id="cvs" width="400" height="200" style="position: absolute; left: 35%; top: 150px;" ></canvas>')
  
  console.log('here')

  // var fontSize = document.getElementsByTagName('input')[1].value;
  fontSize.replace("px","");
  fontSize = parseInt(fontSize)
  var test = document.getElementById("Test");
  $("#Test").html(testtext);
  $("#Test").css('font-size', fontSize)
  $("#Test").css('font-family', fontName)
  test.style.fontSize = fontSize;
  var height = (test.clientHeight ) + "px";
  var __width = (test.clientWidth ) + "px"
  
  console.log("HEYOOO_________________________________"+ height, __width);


  // "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z";
  // if there is no getComputedStyle, this library won't work.
  if(!document.defaultView.getComputedStyle) {
    throw("ERROR: 'document.defaultView.getComputedStyle' not found. This library only works in browsers that can report computed CSS values.");
  }
  

  // store the old text metrics function on the Canvas2D prototype
  CanvasRenderingContext2D.prototype.measureTextWidth = CanvasRenderingContext2D.prototype.measureText;

  /**
   *  shortcut function for getting computed CSS values
   */
  var getCSSValue = function(element, property) {
    return document.defaultView.getComputedStyle(element,null).getPropertyValue(property);
  };

  // debug function
  var show = function(canvas, ctx, xstart, w, h, metrics)
  {
    document.body.appendChild(canvas);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';

    ctx.beginPath();
    ctx.moveTo(xstart,0);
    ctx.lineTo(xstart,h);
    ctx.closePath();
    ctx.stroke(); 

    ctx.beginPath();
    ctx.moveTo(xstart+metrics.bounds.maxx,0);
    ctx.lineTo(xstart+metrics.bounds.maxx,h);
    ctx.closePath();
    ctx.stroke(); 

    ctx.beginPath();
    ctx.moveTo(0,h/2-metrics.ascent);
    ctx.lineTo(w,h/2-metrics.ascent);
    ctx.closePath();
    ctx.stroke(); 

    ctx.beginPath();
    ctx.moveTo(0,h/2+metrics.descent);
    ctx.lineTo(w,h/2+metrics.descent);
    ctx.closePath();
    ctx.stroke();
  }

  /**
   * The new text metrics function
   */
  CanvasRenderingContext2D.prototype.measureText1 = function(textstring, fontSize, fontFamily) {

    
  
    var metrics = this.measureTextWidth(textstring) 

    // var metrics = { ascent: 5,
    // bounds: {minx: 0, maxx: 8, miny: 0, maxy: 4},
    // descent: -1,
    // fontsize: undefined,
    // height: 5,
    // leading: NaN,
    // width : 1
    // }
    console.log('METRICS')
    console.log(metrics)
var fontFamily = fontFamily, 
    // var    fontFamily = getCSSValue(this.canvas,"font-family"),
        fontSize = fontSize, //getCSSValue(this.canvas,"font-size").replace("px",""),
        // getCSSValue(this.canvas,"font-size").replace("px",""),
        isSpace = !(/\S/.test(textstring));
        metrics.fontsize = fontSize;
  

    // for text lead values, we meaure a multiline text container.
    var leadDiv = document.createElement("div");
    leadDiv.style.position = "absolute";
    leadDiv.style.opacity = 0;
    leadDiv.style.font = fontSize + "px " + fontFamily;
    leadDiv.innerHTML = textstring + "<br/>" + textstring;
    document.body.appendChild(leadDiv);

    // make some initial guess at the text leading (using the standard TeX ratio)
    metrics.leading = 1.2 * fontSize;

    // then we try to get the real value from the browser
    var leadDivHeight = getCSSValue(leadDiv,"height");
    leadDivHeight = leadDivHeight.replace("px","");
    if (leadDivHeight >= fontSize * 2) { metrics.leading = (leadDivHeight/2) | 0; }
    document.body.removeChild(leadDiv);

    // if we're not dealing with white space, we can compute metrics
    if (!isSpace) {
        // Have characters, so measure the text
        var canvas = document.createElement("canvas");
        var padding = 100
        var padding_ = 100; //100
        console.log('hi')
        // canvas.width=metrics.width + 0;
        canvas.width = metrics.width + padding_;
        console.log('canvas.width: ' + canvas.width)
        // canvas.height = 3*fontSize;
        canvas.height=300;
        console.log("CANVAS HEIGHTTTT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11")
        console.log(canvas.height)
        canvas.style.opacity = 1;
        canvas.style.fontFamily = fontFamily;
        canvas.style.fontSize = fontSize;
        var ctx = canvas.getContext("2d");
        console.log('loggin CTX')
        console.log(ctx)
        ctx.font = fontSize + "px " + fontFamily;

        var w = canvas.width,
            h = canvas.height,
            baseline = h/2;

        // Set all canvas pixeldata values to 255, with all the content
        // data being 0. This lets us scan for data[i] != 255.
        ctx.fillStyle = "white";
        ctx.fillRect(-1, -1, w+2, h+2);
        ctx.fillStyle = "black";
        ctx.fillText(textstring, padding/2, baseline);
        var pixelData = ctx.getImageData(0, 0, w, h).data;

        // canvas pixel data is w*4 by h*4, because R, G, B and A are separate,
        // consecutive values in the array, rather than stored as 32 bit ints.
        var i = 0,
            w4 = w * 4,
            len = pixelData.length;

        // Finding the ascent uses a normal, forward scanline
        while (++i < len && pixelData[i] === 255) {}
        var ascent = (i/w4)|0;

        // Finding the descent uses a reverse scanline
        i = len - 1;
        while (--i > 0 && pixelData[i] === 255) {}
        var descent = (i/w4)|0;

        // find the min-x coordinate
        for(i = 0; i<len && pixelData[i] === 255; ) {
          i += w4;
          if(i>=len) { i = (i-len) + 4; }}
        var minx = ((i%w4)/4) | 0;

        // find the max-x coordinate
        var step = 1;
        for(i = len-3; i>=0 && pixelData[i] === 255; ) {
          i -= w4;
          if(i<0) { i = (len - 3) - (step++)*4; }}
        var maxx = ((i%w4)/4) + 1 | 0;

        // set font metrics
        metrics.ascent = (baseline - ascent);
        metrics.descent = (descent - baseline);
        metrics.bounds = { minx: minx - (padding/2),
                           maxx: maxx - (padding/2),
                           miny: 0,
                           maxy: descent-ascent };
        metrics.height = 1+(descent - ascent);
    }

    // if we ARE dealing with whitespace, most values will just be zero.
    else {
        // Only whitespace, so we can't measure the text
        metrics.ascent = 0;
        metrics.descent = 0;
        metrics.bounds = { minx: 0,
                           maxx: metrics.width, // Best guess
                           miny: 0,
                           maxy: 0 };
        metrics.height = 0;
    }
    return metrics;
  };
  //callback();


  // var fontName = document.getElementsByTagName('input')[0].value;
  // var fontName = document.getElementsByTagName('input')[0].value;
  // var fontSize = document.getElementsByTagName('input')[1].value;
  console.log(fontSize)
  // console.log(fontSize.substring(0, fontSize.length - 2))
  // var marginratio= fontSize.substring(0, fontSize.length - 2);
  // console.log(parseInt(fontSize.substring(0, fontSize.length - 2)))

  // document.getElementsByTagName('input')[1].value;
  var WebFontConfig = {
    google: { 
      // families: [ [encodeURIComponent(fontName),'::latin'].join('') ] 
      families: ['Droid Sans', 'Droid Serif']
      
    }
  };
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
  // document.body.style.fontFamily = fontName
  // ['"'+fontName+'"', "Arial sans"].join(' ')
  var canvas = document.getElementById('cvs'),
      context = canvas.getContext("2d");

  var w=220, h=200;

  canvas.style.font = [fontSize, fontName].join(' ');
  context.font = [fontSize, fontName].join(' ');
  context.clearRect(0, 0, canvas.width, canvas.height);
  // draw bounding box and text
  var inputHeight = context.measureText1(testtext, 100, fontName).height;

  var xHeight = context.measureText1("x", 100, fontName).height;
  var capHeight = context.measureText1("H",100, fontName).height;
  var metrics = context.measureText1("Sxy",100, fontName);
  var xStart = (w - metrics.width)/2;
  context.fontFamily = fontName;
   context.fillStyle = "white";
// context.fillSt
  context.fillRect(xStart, h/2-metrics.ascent, metrics.bounds.maxx-metrics.bounds.minx, 1+metrics.bounds.maxy-metrics.bounds.miny);
  context.fillStyle = "#333333";
  context.fillText(testtext, xStart, h/2);
  metrics.fontsize = parseInt(metrics.fontsize);
  
  metrics.offset = Math.ceil((metrics.leading - metrics.height) / 2);
  metrics.width = JSON.parse(JSON.stringify(metrics.width));
  // metrics.width = __width;
  metrics.capHeight = capHeight;
  metrics.xHeight = xHeight;
  metrics.inputHeight = inputHeight;
  metrics.ascender = metrics.capHeight - metrics.xHeight;
  metrics.descender = metrics.descent;

  

  var myMetrics = {
    px: JSON.parse(JSON.stringify(metrics)),
    width: {
      width: __width
    },
    relative: {
      fontsize: 1,
      offset: (metrics.offset / metrics.fontsize),
      height: (metrics.height / metrics.fontsize),
      capHeight: (metrics.capHeight / metrics.fontsize),
      ascender: (metrics.ascender / metrics.fontsize),
      xHeight: (metrics.xHeight / metrics.fontsize),
      descender: (metrics.descender / metrics.fontsize)
    },
    descriptions: {
      ascent: 'distance above baseline',
      descent: 'distance below baseline',
      height: 'ascent + 1 for the baseline + descent',
      leading: 'distance between consecutive baselines',
      bounds: { 
        minx: 'can be negative',
        miny: 'can also be negative',
        maxx: 'not necessarily the same as metrics.width',
        maxy: 'not necessarily the same as metrics.height'
      },
      capHeight: 'height of the letter H',
      ascender: 'distance above the letter x',
      xHeight: 'height of the letter x (1ex)',
      descender: 'distance below the letter x'
    }
  }

  metrics.myMetrics = myMetrics

  // Array.prototype.slice.call(
  //   document.getElementsByTagName('canvas'), 0
  // ).forEach(function(c, i){
  //   if (i > 0) document.body.removeChild(c);
  // });

  return metrics;

//   document.getElementById('illustrationContainer').innerHTML = [
// '<div style="display: inline-block;vertical-align: bottom; margin:0; padding:0; position: relative; width: 22px;  font-size:',fontSize,'; line-height: 1em; ">',
//   testtext, '</div>',
//   // '<div class="__ascender" style="position: absolute; width:100%; top:',myMetrics.relative.offset,'em; height:',myMetrics.relative.ascender,'em; background:rgba(220,0,5,.5);"></div>',
//   //   '<div class="__xHeight" style="position: absolute; width:100%; top:',myMetrics.relative.offset + myMetrics.relative.ascender,'em; height:',myMetrics.relative.xHeight,'em; background:rgba(149,204,13,.5);"></div>',
//   //   '<div class="__xHeight" style="position: absolute; width:100%; top:',myMetrics.relative.offset + myMetrics.relative.ascender + myMetrics.relative.xHeight,'em; height:',myMetrics.relative.descender,'em; background:rgba(13,126,204,.5);"></div>',
// //   '<div id= "rect" style=" display: inline-block; vertical-align: bottom;"></div>'
  
//   ].join('');
//   myMetrics.illustrationMarkup = document.getElementById('illustrationContainer').innerHTML;
//   var logstring = ["/* metrics for", fontName, 
//                    "*/\nvar metrics =", 
//                    JSON.stringify(myMetrics, null, '  ')].join(' ');
//   var res = document.getElementById('log');
//   $(res).css('visibility', 'visible')
//   document.getElementById('log').textContent = logstring;

//   // var rectwidth= getTextWidth(testtext, "40px Comic Sans MS");
//   // console.log(rectwidth)

//   $("#rect").css('height', myMetrics.px.inputHeight + 'px')
//   // $("#rect").css('width', rectwidth + 'px')
//   // $("#rect").css('width', myMetrics.px.xHeight + 'px')
//   $("#rect").css('width', '20px')
//   // 3 px for 40, 7 for 100, 15
//   console.log(fontSize);
//   var margin = .075 * marginratio;
//   console.log(margin);
//   $("#rect").css('margin-bottom', margin +'px')
//   // $("#rect").css('width', (metrics.bounds.maxx - metrics.bounds.minx) + 'px')
// makeCanvas()

}
// var canvas = document.getElementById('canvas'),
   










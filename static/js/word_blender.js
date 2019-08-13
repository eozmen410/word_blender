//color picker : https://stackoverflow.com/questions/39322503/getcontext-is-not-a-function-when-using-variable-for-element-selector/39322509
//https://stackoverflow.com/questions/1936021/javascript-eyedropper-tell-color-of-pixel-under-mouse-cursor
//https://www.rgraph.net/canvas/reference/drawimage.html
const request = { sources: ['window', 'screen', 'tab'] };
const EXTENSION_ID = 'YOUR_EXTENSION_ID';

var fonts = ["Helvetica,sans-serif","Cambria","Georgia,serif","Rockwell","Courier","Times New Roman,serif", "Papyrus,fantasy", "Brush Script MT,cursive"]

$(document).ready(function(){
//   append_route_btn('findSymbols', 'search')
//   append_route_btn('blend_word', 'pencil')
//   append_route_btn('shape_editor', 'edit')
    console.log(input_words)
    console.log(symbols)
    // load_saved_symbols()
       // load_fonts(fonts)
    var first_one = true
    for (var i= 0 ; i< input_words.length; i++) {
        var concept = input_words[i]
        console.log(concept)
        for (var key in symbols) {
            // console.log('in here0')
            if (symbols[key]['deleted'] == "False") {
                // console.log('in here 1')
            // when we have data about whic symbol correlates to which letter: 
                if (symbols[key].hasOwnProperty('selected_files')) {
                    // console.log('in here')
                    for (var select in symbols[key]['selected_files']) {
                        for (var j = 0; j< symbols[key]['selected_files'][select]['shapes'].length; j++) {
                        
                            var _letter = symbols[key]['selected_files'][select]['shapes'][j]
                            var _img = symbols[key]
                            if ( concept.indexOf(_letter)>0) {
                                
                                var c = make_canvas_w_random_id( _img)
                                var c_id = $(c).attr('id')
                                $(c).data('letter', _letter)
                                $(c).data('image', _img)
                                $(c).data('file',symbols[key]['selected_files'][select]['file_name'] )
                                canvas_ids_dict[c_id]['file_name'] = symbols[key]['selected_files'][select]['file_name']
                                canvas_ids_dict[c_id]['word']  = concept
                                canvas_ids_dict[c_id]['font_color'] = "000000"
                                canvas_ids_dict[c_id]['back_color'] = "FFFFFF"
                                populate_canvas_for_word_letter(c, concept, $(c).data('image'), $(c).data('letter'), $(c).data('file'))
                                // add_shape_editor_btn(key, c_id) 
                                if (first_one) {
                                    console.log('first one')
                                    $(c).trigger('mouse:down');
                                    first_one = false
                                }                  
                            }
                        }
                    }
                }
            }            
        }
    }

    
});



var canvas_fabr //= new fabric.Canvas()

var active_canvas = NaN
// var last_added_img =""
var canvas_ids_dict = {}

// var font_col = active_canvas.fill;
// var back_col = active_canvas.backgroundColor;

// function add_shape_editor_btn(img_id, where) {
//     var to_edit = $("<button>")
//     var form = $("<form>")
//     $(form).css('display', 'inline')
//     $(to_edit).html("<span class='glyphicon glyphicon-edit'></span>")
//     $(form).attr('action', '/shape_editor/' + creator + '_' + uniqueID + '_' + concept + "#" + img_id)
//     $(form).attr('method', 'post')
//     $(form).attr('value', key)
//     $(form).append(to_edit)
//     $("#container_" + where).append(form)
// }

function download_canvas(canvas){
    var dataURL = canvas.toDataURL({
        format: "png",
        left: 0,
        top: 0,
        width: canvas.width ,
        height: canvas.height ,
    });

    // var link = document.createElement('a');
    //     link.innerHTML = 'download image';
    // link.addEventListener('click', function(ev) {
    //     link.href = canvas.toDataURL();
    //     link.download = "mypainting.png";
    // }, false);
    // document.body.appendChild(link);
    
}


function load_saved_symbols(){
    for (key in symbol_list) {
        if (symbol_list[key]['deleted']== 'False') {
            var symb_obj = symbol_list[key]
            var symbol_url = symb_obj['imageURL']
            var symbol_dom = $("<img>")
            $(symbol_dom).attr('src', symbol_url)
            $(symbol_dom).addClass('symbol')
            $(symbol_dom).data('imgID', key)
            $(symbol_dom).attr('id',key)
            // $("#symbol_sidebar").append(symbol_dom)
            $(symbol_dom).click(function(){
                console.log('clicked on img')
                $(".symbol").removeClass('selectedimg')
                $(this).addClass('selectedimg')
                var img_id =  $(this).data('imgID')
                console.log(img_id)
            })
        }
    }
}

function load_fonts(random_id, font_array, concept) {
     $("#font_pallete_"+random_id).empty()
     $("#font_pallete_"+random_id).prepend('Font Style')
     $("#font_pallete_"+random_id).append('<hr>')
    
    for (var i=0; i<font_array.length; i++) {
        var font_val = font_array[i]
        //make div that displays font
        var font_div = $("<div class='row'>")
        $(font_div).data('font_val', font_val)
        $(font_div).attr('id', "font_" + i)
        $(font_div).html(concept)
        $(font_div).css('font-family', font_val)
        $(font_div).addClass('font_display')
        //when you click on div it should change the font of the text box
        $(font_div).click(function(){
            change_font(active_canvas,concept, $(active_canvas).data('image'),$(active_canvas).data('letter') , $(this).data('font_val'))

         
        })
        $("#font_pallete_" +random_id).append(font_div)
    }
}
 
function make_color_picker(associated_canvas,random_id){
    // font stuff
    var img_canvas = $("<canvas class='img_canvas'>")
   


    
    
    
    // saving color options
    var color_div_encompass = $("<div>")
    // $(color_div_encompass).addClass('row')
    // $(color_div_encompass).addClass('color_container')
    // $(color_div_encompass).css('display', 'inline-block')
 
    var color_div_fonts = $("<div>")
    // $(color_div_fonts).addClass('row')
    // $(color_div_fonts).css('display', 'inline-block')
    // $(color_div_fonts).css(' vertical-align', 'top')
    // var square = $("<div style = 'height: 50px; width: 50px; background-color: #555' id = sq_" + random_id +">")
    var square = $("<div>")
    $(square).attr('id', "sq_" + random_id)
        // $(square).addClass('square')
        $(square).css('height', '50px')
        $(square).css('width', '50px')
        $(square).css('background-color', '#555')
        $(square).css('border', '1px solid black')    
        console.log("++++++++++" + square)
    
    
    
    var auto =  $("<div id= 'auto_" + random_id+"'>")
    $(auto).addClass('color')


    var search_font_colors_butt = $("<button>")
    $(search_font_colors_butt).append("<span class = 'glyphicon glyphicon-plus-sign'></span> Add colors")
    $(search_font_colors_butt).attr("id", "search_font_colors_butt_" + random_id)
    $(search_font_colors_butt).addClass('btn info-btn')
    $(search_font_colors_butt).addClass('color')
    $(search_font_colors_butt).addClass('mybutt')


    var search_back_colors_butt = $("<button>")
    $(search_back_colors_butt).append("<span class = 'glyphicon glyphicon-plus-sign'></span> Add colors")
    $(search_back_colors_butt).addClass('btn info-btn')
    $(search_back_colors_butt).addClass('color')
    $(search_back_colors_butt).attr("id", "search_back_colors_butt_" + random_id)
    $(search_back_colors_butt).addClass('mybutt')
    
    var canvas_div = $("<div>")
    $(canvas_div).attr('id', 'div_img_' +random_id)
    $(canvas_div).append(img_canvas)
    

    var done_selecting_font_color_butt = $("<button>")
    $(done_selecting_font_color_butt).addClass('donebutt')
    $(done_selecting_font_color_butt).append("<span class = 'glyphicon glyphicon-ok'></span>")
   
    


   





   
   

    //background stuff
    var img_canvas_back = $("<canvas class='img_canvas'>")
    var canvas_div_back = $("<div>")
    $(canvas_div_back).append(img_canvas_back)
    $(canvas_div_back).attr('id', 'div_img_back' +random_id)
    $(img_canvas_back).attr('id','img_back_' + random_id)

    var done_selecting_back_color_butt = $("<button>")
    $(done_selecting_back_color_butt).addClass('donebutt')
    $(done_selecting_back_color_butt).append("<span class = 'glyphicon glyphicon-ok'></span>")
    
    // $(canvas_div_back).append(done_selecting_back_color_butt)

   

    var saved = $("<div id= 'saved_" + random_id+"'>")
    $(saved).addClass('color')
    $(color_div_fonts).append(auto)
    $(color_div_fonts).append(saved)
    $(color_div_fonts).append( search_font_colors_butt)
   


    var color_div_background = $("<div>")
    // $(color_div_background).css('display', 'inline-block')
    // $(color_div_background).css('vertical-align', 'top')
    

    var auto_back = $("<div id= 'auto_back" + random_id+"'>")
    $(auto_back).addClass('color')
    var saved_back = $("<div id= 'saved_back_" + random_id+"'>")
    $(saved_back).addClass('color')
    
    $(color_div_background).append(auto_back)
    $(color_div_background).append(saved_back)
    $(color_div_background).append( search_back_colors_butt)



    $(color_div_encompass).append(color_div_fonts)
    $(color_div_encompass).append(color_div_background)
    

  

    // $(square).attr('id', "sq_" + random_id)
    //     // $(square).addClass('square')
    //     $(square).css('height', '50px')
    //     $(square).css('width', '50px')
    //     $(square).css('background-color', '#555')
    //     $(square).css('border', '1px solid black')    
    //     console.log("++++++++++" + square)
       
   
    // $("#canvas_container").append(canvas_div)
    // $( "#pallete_mixer_"+random_id).append(canvas_div)
    // $( "#pallete_mixer_"+random_id).append(canvas_div_back)

    // $('#div_img_back' +random_id).hide();
    // $(canvas_div).addClass('color')
    // $("#font_sidebar").append(canvas_div)
    //  $('#div_img_' +random_id).hide(); //hide color picker for font
    
    var hex_input_back = $("<input>")
    $(hex_input_back).addClass('ourinput')
    $(hex_input_back).attr('id', 'input_back_' + random_id)
   
    // $("#pallete_hex_"+random_id).append("Input hex value<br>")
    // $("#pallete_hex_"+random_id).append("Or input a hex value<br>")
    var hint = $("<div>Or input hex value<br></div>")
    $(hint).attr('id', 'hint_'+random_id)


    
    $("#pallete_hex_"+random_id).append(hex_input_back)
    $("#pallete_hex_"+random_id).prepend(hint)


    $('#input_back_' + random_id).hide();
    $('#hint_' + random_id).hide();
    

    $(hex_input_back).keypress(function(e){
        if(e.which == 13) {
           var hex =  $(this).val()
           if ((hex).substring(0,1)!= "#"){
               hex = "#"+hex;
           }

            change_color_back(active_canvas, random_id, "hex_back_auto_", hex)
            //add the color as a later option!
            save_color_back(random_id, hex)
            $(this).val('')

        }
        })

        var hex_input = $("<input>")
        $(hex_input).addClass('ourinput')
        $(hex_input).attr('id', 'input_font_' + random_id)

       
        $("#pallete_hex_"+random_id).append(hex_input)
        $('#input_font_' + random_id).hide();
        
        $(hex_input).keypress(function(e){
            if(e.which == 13) {
               var hex =  $(this).val()
               if ((hex).substring(0,1)!= "#"){
                   hex = "#"+hex;
                  
               }
    
                change_color(active_canvas, random_id, "hex_font_", hex)
                //add the color as a later option!
                save_color(random_id, hex)
                $(this).val('')
    
            }
            })
    
           
    
    
        
        // $("#pallete_hex_"+random_id).append(hex_input)
        // $("#pallete_hex_"+random_id).append(hex_input_back)

    $(search_font_colors_butt).click(function(){
        $( "#pallete_mixer_"+random_id).empty()
        // $("#pallete_hex_"+random_id).empty()
        //$(canvas_div).append(done_selecting_font_color_butt)
        $( "#pallete_mixer_"+random_id).append(canvas_div)
        $('#div_img_back' +random_id).hide();
        $('#div_img_' +random_id).show();
        $("#sq_" + random_id).show();
        $('#input_back_' + random_id).hide();
        $('#input_font_' + random_id).show();
        $( "#pallete_mixer_"+random_id).prepend("Select font colors from image<hr>")
        // $("#pallete_hex_"+random_id).prepend("Or input hex value<br>")
        $('#hint_' + random_id).show();
        
       
       
        // $(hex_input).keypress(function(e){
        //     if(e.which == 13) {
        //        var hex =  $(this).val()
        //        if ((hex).substring(0,1)!= "#"){
        //            hex = "#"+hex;
                  
        //        }
    
        //         change_color(active_canvas, hex)
        //         //add the color as a later option!
        //         save_color(random_id, hex)
        //         // $(this).val('')
    
        //     }
        //     })
    
           
       
    })
    $(done_selecting_font_color_butt).click(function(){
        $( "#pallete_mixer_"+random_id).empty()
        // $("#pallete_hex_"+random_id).empty()
        

    })

    $(search_back_colors_butt).click(function(){
        $( "#pallete_mixer_"+random_id).empty()
        // $("#pallete_hex_"+random_id).empty()
       // $(canvas_div_back).append(done_selecting_back_color_butt)
        $( "#pallete_mixer_"+random_id).append(canvas_div_back)
        $( "#pallete_mixer_"+random_id).prepend("Select background colors from image<hr>")
        // $("#pallete_hex_"+random_id).append("Input hex value<br>")
        $('#input_back_' + random_id).show();
        $('#input_font_' + random_id).hide();
        $('#hint_' + random_id).show();


        // $('#div_img_' +random_id).hide();
        // $('#div_img_back' +random_id ).show();
        // $("#sq_" + random_id).show();
       
        
    



       
    })
    $(done_selecting_back_color_butt).click(function(){
        $( "#pallete_mixer_"+random_id).empty()
        console.log($( "#pallete_mixer_"+random_id))
        // $("#pallete_hex_"+random_id).empty()



    })



    
    
    $("#canvas_container").append('<br>')
    $("#canvas_container").append('<br>')
    var fontheader = $("<div>")
    $(fontheader).html("Font Color<hr>")
    $(fontheader).addClass('color')
    $(fontheader).attr('id', "fontheader_"+ random_id)

    var fontbacker = $("<div>")
    $(fontbacker).html("<br>Background Color<hr>")
    $(fontbacker).addClass('color')
    $(fontbacker).attr('id', "fontbacker_"+ random_id)

    


    $("#pallete_"+random_id).append(fontheader)  
    $("#pallete_"+random_id).append(auto)
    $("#pallete_"+random_id).append(saved)
    $("#pallete_"+random_id).append(search_font_colors_butt)

    $("#pallete_"+random_id).append(fontbacker)
    $("#pallete_"+random_id).append(auto_back)
    $("#pallete_"+random_id).append(saved_back)
    $("#pallete_"+random_id).append(search_back_colors_butt)

  
    
    

    
    // $("#font_sidebar").append(color_div_encompass)
    // $("#font_sidebar").append("<span class = 'glyphicon glyphicon-text-background'></span> Background Color")
    
    
   
    $("#sq_" + random_id).hide();
    
  
    // $("#font_sidebar").append(canvas_div)
   


    // $("#canvas_container").append(color_div_encompass)
    // $("#canvas_container").append(auto)
    auto_fill(random_id)
    auto_fill_back(random_id)
    
    $("#saved_" +random_id).data("num_butts", 0)
    $("#saved_" +random_id).data("arr", "")

    $("#saved_back_" +random_id).data("num_butts", 0)
    $("#saved_back_" +random_id).data("arr", "")


    var context = img_canvas[0].getContext('2d');
    var context_back = img_canvas_back[0].getContext('2d');
    var img = new Image();
    var img_src = '../static/images/';
    img_src += canvas_ids_dict[random_id]['file_name']
    console.log("SRC SRC SRC" + img_src)
    console.log("RANDO RANDO RANDO " + random_id)
        // if (img_obj['selected_file_name']!= ""){
        // img_src += img_obj['selected_file_name']
        // }else if (img_obj['extracted_file_name'] != "") {
        //     img_src+= img_obj['extracted_file_name']
        // } else {
        //     img_src  += img_obj['file_name']
        // }
        // img.crossOrigin = "Anonymous";
        img.height = 150;
        
        img.src = img_src;


        img.onload = function (e){
            context.drawImage(img, 0, 0, img.height,150 );
            context_back.drawImage(img, 0, 0, img.height,150);

        }

    
        
        // $(img_canvas).width(img.width)
        // $(img_canvas).height(img.height)

    $(img_canvas).attr('id','img_' + random_id)

   
    //Get Mouse Position
    
    img_canvas[0].addEventListener("click", function(e) {
        
        position = getCursorPosition(random_id, e)
        var canvas = this.getContext('2d');
        var p =  canvas.getImageData(position.x, position.y, 1, 1).data;
        console.log(position.x + "," +position.y)

        // $("#maincontent").offset().top
        console.log(canvas.getImageData(0, 0, 100, 100).data)
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        if (active_canvas != NaN){
            $("#" + active_canvas.id).removeClass('active_canvas')
            $("#" + associated_canvas.id).addClass('active_canvas')
            active_canvas = associated_canvas}
        change_color(active_canvas, random_id, "hex_font_", hex)
        //add the color as a later option!
        save_color(random_id, hex)
    });
    img_canvas[0].addEventListener("mousemove", function(e) {  
        
        position = getCursorPosition(random_id, e)
        // alert(position.y)
        var canvas = this.getContext('2d');
        var p =  canvas.getImageData(position.x, position.y, 1, 1).data;
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        change_color_block(hex, random_id)
        // alert("he?")
        if (active_canvas != NaN){
            $("#" + active_canvas.id).removeClass('active_canvas')
            $("#" + associated_canvas.id).addClass('active_canvas')
            active_canvas = associated_canvas}



    });    


    img_canvas_back[0].addEventListener("click", function(e) {
        
        position = getCursorPosition_back(random_id, e)
        console.log(position.x + "," +position.y)
        var canvas = this.getContext('2d');
        var p =  canvas.getImageData(position.x, position.y, 1, 1).data;


        // $("#maincontent").offset().top
        console.log(canvas.getImageData(0, 0, 100, 100).data)
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        if (active_canvas != NaN){
            $("#" + active_canvas.id).removeClass('active_canvas')
            $("#" + associated_canvas.id).addClass('active_canvas')
            active_canvas = associated_canvas}
        change_color_back(active_canvas, random_id, "hex_back_auto_", hex)
        //add the color as a later option!
        save_color_back(random_id, hex)
    });
    img_canvas_back[0].addEventListener("mousemove", function(e) {  
        
        position = getCursorPosition_back(random_id, e)
        
        var canvas = this.getContext('2d');
        var p =  canvas.getImageData(position.x, position.y, 1, 1).data;
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        change_color_block(hex, random_id)
      
        
        // alert("he?")
        if (active_canvas != NaN){
            $("#" + active_canvas.id).removeClass('active_canvas')
            $("#" + associated_canvas.id).addClass('active_canvas')
            active_canvas = associated_canvas}



    });    



    function getCursorPosition(id, event) {
        var x = document.getElementById('img_' + id);
        var  rect = x.getBoundingClientRect()
        // alert(rect.height)
        var  i = event.clientX - rect.left 
        var j = event.clientY  - rect.top
        // alert("x: " + x + " y: " + y)
        return {x: i, y: j};
        
    }
    function getCursorPosition_back(id, event) {
        var x = document.getElementById('img_back_' + id);
        var  rect = x.getBoundingClientRect()
        // alert(rect.height)
        var  i = event.clientX - rect.left 
        var j = event.clientY  - rect.top
        
        // alert("x: " + i + " y: " + j)
        return {x: i, y: j};
       
    }
    return canvas_div

}

function auto_fill_back(random_id){
    var arr= ['#FFFFFF','#C7C7C7','#939393', '#666666' , '#000000']
    for (var i = arr.length-1; i >= 0 ; i--){
           
        var color_butt= $("<button onclick= \"change_color_back(\'" +  active_canvas +"\',\'" + random_id +"\',\'" + "hex_back_"+ "\',\'" + arr[i] + "\')\""+" class = 'save_color'></button>")
        $(color_butt).css('background-color', arr[i])
        $("#auto_back"+random_id).append(color_butt)
        $(color_butt).addClass("hex_back_")
        $(color_butt).attr('id',"hex_back_"+random_id +"_"+arr[i].substring(1) )
        $("#hex_back_"+random_id +"_"+arr[0].substring(1)).addClass('selected_butt')
    }

    


}
function auto_fill(random_id){
    var arr= ['#FFFFFF','#C7C7C7','#939393', '#666666' , '#000000']
    for (var i = arr.length-1; i >= 0 ; i--){
           
        var color_butt= $("<button onclick= \"change_color(\'" +  active_canvas +"\',\'" + random_id +"\',\'" + "hex_auto_"+ "\',\'" + arr[i] + "\')\""+" class = 'save_color' style= 'background-color:" + arr[i]+"; border: 1px solid #f0f0f0; border-radius: 50%; height: 25px; width:25px'></button>")
        $("#auto_"+random_id).append(color_butt)
        $(color_butt).addClass("hex_auto_")
        $(color_butt).attr('id',"hex_auto_"+random_id +"_"+arr[i].substring(1) )
    }
   
    $("#hex_auto_"+random_id +"_"+arr[arr.length-1].substring(1)).addClass('selected_butt')
}


function save_color(random_id, hex){
    canvas_ids_dict[active_canvas.id]['font-color'] = hex.substring(1)

    var myEle = document.getElementById("hex_font_" + random_id + "_"+hex.substring(1) );
    if(!myEle){

    var color_butt = $("<button onclick= \"change_color(\'" +  active_canvas +"\',\'" + random_id +"\',\'" + "hex_font_" + "\',\'" + hex+ "\')\""+" class = 'save_color' style= 'background-color:" + hex+"; border: 1px solid #f0f0f0; border-radius: 50%; height: 25px; width:25px'></button>")
    $(color_butt).attr('id', "hex_font_" + random_id + "_"+hex.substring(1))
    $(color_butt).addClass("hex_font_")
    $(color_butt).addClass("selected_butt")
    $("#saved_" +random_id).append(color_butt)
    //add hex to string
    var hex_str = $("#saved_"+random_id).data('arr')
    var hex_str = hex_str +  hex +",";
    
    $("#saved_"+random_id).data('arr',hex_str )
    
    // alert(arr)

    // alert(stuff[0]);
    

    var inter = $("#saved_"+random_id).data('num_butts')
    
    // alert(inter)
    if((inter)==5){
       
        $("#saved_"+random_id).data('num_butts', 0)
        var n = hex_str.indexOf(",");
      
        var res = hex_str.slice(n+1, hex_str.length-1);
        // alert(res)
       
        var arr = res.split(',');
        res = res + ","
       
        inter = 0
        console.log(arr )
        $("#saved_" +random_id).empty();
        
        for (var i = 0; i < arr.length; i++){
           
            var color_butt_2 = $("<button onclick= \"change_color(\'" +  active_canvas +"\',\'" + random_id +"\',\'" + "hex_font_" + "\',\'" + arr[i]+ "\')\""+" class = 'save_color' style= 'background-color:" + arr[i]+"; border: 1px solid #f0f0f0; border-radius: 50%; height: 25px; width:25px'></button>")
            
            // $("#saved_" +random_id).append(color_butt_2)

            $(color_butt_2).attr('id', "hex_font_" + random_id + "_"+arr[i].substring(1))
            $(color_butt_2).addClass("hex_font_")

            $("#saved_"+random_id).append(color_butt_2)
            
            
            
            


            
        }
        $(("#hex_font_" + random_id + "_"+arr[arr.length-1].substring(1))).addClass('selected_butt')
        $("#saved_"+random_id).data('num_butts',5 )
        $("#saved_"+random_id).data('arr',res )
        // $("#hex_font_"+ active_canvas.id + "_"+ arr[arr.length-1].substring(1)).addClass("selected_butt")

        
       



        // var element = document.getElementById(elementId);
        // element.parentNode.removeChild(element);
    }
    else{

        $("#saved_"+random_id).data('num_butts', inter + 1)
    }
}
else
change_color(active_canvas, random_id, "hex_font_" ,hex)
}

function save_color_back(random_id, hex){

    var myEle = document.getElementById("hex_back_auto_" + random_id + "_"+hex.substring(1) );
    if(!myEle){
        var str = "hex_back_auto_"
    var color_butt = $("<button onclick= \"change_color_back(\'" +  active_canvas +"\',\'" + random_id +"\',\'" + str + "\',\'" + hex+ "\')\""+" class = 'save_color_back' style= 'background-color:" + hex+"; border: 1px solid #f0f0f0; border-radius: 50%; height: 25px; width:25px'></button>")
   
    $(color_butt).attr('id', "hex_back_auto_" + random_id + "_"+hex.substring(1))
    $(color_butt).addClass("hex_back_auto_")
    $(color_butt).addClass("selected_butt")
    $("#saved_back_" +random_id).append(color_butt)
    //add hex to string
    var hex_str = $("#saved_back_"+random_id).data('arr')
    var hex_str = hex_str +  hex +",";
    
    $("#saved_back_"+random_id).data('arr',hex_str )


    
    // alert(arr)

    // alert(stuff[0]);
    

    var inter = $("#saved_back_"+random_id).data('num_butts')
    
    // alert(inter)
    if((inter)==5){
       
        $("#saved_back_"+random_id).data('num_butts', 0)
        var n = hex_str.indexOf(",");
      
        var res = hex_str.slice(n+1, hex_str.length-1);
        // alert(res)
       
        var arr = res.split(',');
        res = res + ","
       
        inter = 0
        console.log(arr )
        $("#saved_back_" +random_id).empty();
        
        for (var i = 0; i < arr.length; i++){
           
            var color_butt_2 = $("<button onclick= \"change_color_back(\'" +  active_canvas +"\',\'" + random_id +"\',\'" + "hex_back_auto_"+ "\',\'" + arr[i] + "\')\""+" class = 'save_color_back' style= 'background-color:" + arr[i]+"; border: 1px solid #f0f0f0; border-radius: 50%; height: 25px; width:25px'></button>")
            $(color_butt_2).attr('id', "hex_back_auto_" + random_id + "_"+arr[i].substring(1))
          
            // $("#saved_" +random_id).append(color_butt_2)
            

        // $(color_butt_2).attr('id', "hex_back_auto_" + random_id + "_"+hex.substring(1))
        $(color_butt_2).addClass("hex_back_auto_")
        $("#saved_back_"+random_id).append(color_butt_2)

            


            
        }
        $("#saved_back_"+random_id).data('num_butts',5 )
        $("#saved_back_"+random_id).data('arr',res )
        $("#hex_back_auto_" + random_id + "_"+(arr[arr.length-1]).substring(1)).addClass('selected_butt')
       



        // var element = document.getElementById(elementId);
        // element.parentNode.removeChild(element);
    }
    else{

        $("#saved_back_"+random_id).data('num_butts', inter + 1)
    }
}
else{
    change_color_back(active_canvas, random_id, "hex_back_auto_" , hex )
}
}

function change_color_block(hex, random_id ){
 console.log(hex)
 $("#sq_" +random_id).css('background-color', hex) 
}
function change_color(canvas, random_id, str, _hex){
    canvas_ids_dict[random_id]['font_color'] = _hex.substring(1)
    // font_col = _hex; 
    $(".hex_auto_").removeClass('selected_butt')
    $(".hex_font_").removeClass('selected_butt')
    console.log(str)
    $("#" + str + random_id + "_"+_hex.substring(1)).addClass('selected_butt')

   

    active_canvas.forEachObject(function(obj){
        // obj.fontFamily = "Comic Sans MS"
        obj.set({fill: _hex})
        // obj.fill = _hex;
    });
    // objects = canvas.getObjects();
    // // alert("HEX: " + hex);
    // for(var i = 0; i < objects.length ; i++){
    //     objects[i].fill = _hex;
    //     console.log( objects[i].fill)
    // }
    active_canvas.renderAll();
        //         // console.log(obj)
        //         obj.fontFamily = font_val
        //     });
        //     canvas.renderAll();

    //change color of font
}

function change_color_back(canvas, random_id, str, _hex){
    canvas_ids_dict[active_canvas.id]['back_color'] = _hex.substring(1)
    console.log(canvas_ids_dict[active_canvas.id]['back_color'])
    console.log("ABOVE")
    back_col = _hex;

    // $(color_butt_2).attr('id', "hex_back_" + random_id + "_"+hex)
   // $("."+str).removeClass('selected_butt')
    $("."+"hex_back_").removeClass('selected_butt')
    $("."+"hex_back_auto_").removeClass('selected_butt')
   
    
    
    console.log(str)
    $("#" + str + random_id + "_"+_hex.substring(1)).addClass('selected_butt')
    // $("#" + "hex_back_" + random_id + "_"+_hex).css('background-color', "green")
    // alert('yeah!')
    
    // console.log()
    console.log("#" + "hex_back_" + random_id + "_"+_hex)
    active_canvas.backgroundColor = _hex
    active_canvas.renderAll();
    
}



function findPos(obj){
    var current_left = 0, current_top = 0;
    // current_left = obj.offsetLeft;
    // current_top =  obj.offsetTop;
    // return {x: current_left, y: current_top};
    if (obj.offsetParent){
       
        do{
            current_left += obj.offsetLeft;
            
            current_top += obj.offsetTop - document.scrollTop;
            console.log("current top" + current_top)
        }while(obj = obj.offsetParent);
        return {x: current_left, y: current_top};
    }
    return undefined;
    }

    function rgbToHex(r, g, b){
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
    }


function make_canvas_w_random_id(_img) {
    var random_id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
   
    new_canvas = $("<canvas class='word_canvas'>")
    var canvas_div = $("<div>")
    $(canvas_div).addClass('col-md-5')
    $(canvas_div).append(new_canvas)
    $(canvas_div).attr('id', 'container_' +random_id)
    var row_div = $("<div>")
    $(row_div).addClass('row')
    $(canvas_div).css('display', 'inline')
    var font_pallete = $("<div>")
    $( font_pallete).css('vertical-align', 'top')
    $( font_pallete).addClass('col-md-2')
    $( font_pallete).attr('id', "font_pallete_"+random_id)
    $( font_pallete).css('display', 'inline')
    $( font_pallete).css('vertical-align', 'top')
    // $( font_pallete).css('border', '1px solid red')


    var edit_pallete = $("<div>")
    $(edit_pallete).css('vertical-align', 'top')
    $(edit_pallete).addClass('col-md-3')
    $(edit_pallete).attr('id', "pallete_"+random_id)
    $(edit_pallete).css('display', 'inline')
    $(edit_pallete).css('vertical-align', 'top')
    // $(edit_pallete).css('border', '1px solid blue')

    var pallete_mixer = $("<div>")
    $( pallete_mixer).css('vertical-align', 'top')
    $( pallete_mixer).addClass('col-md-4')
    $( pallete_mixer).attr('id', "pallete_mixer_"+random_id)
    $( pallete_mixer).css('display', 'inline')
    $( pallete_mixer).css('vertical-align', 'top')
    // $( pallete_mixer).css('border', '1px solid green')
    
    var pallete_hex = $("<div>")
    $( pallete_hex).css('vertical-align', 'top')
    $( pallete_hex).addClass('col-md-3')
    $( pallete_hex).attr('id', "pallete_hex_"+random_id)
    $( pallete_hex).css('display', 'inline')
    $( pallete_hex).css('vertical-align', 'top')
    // $( pallete_hex).css('border', '1px solid green')
    
    // $(edit_pallete).css('padding', '100px')
    // $(edit_pallete).css('width', '100px')
    $(row_div).append(canvas_div)
    var tools = $("<div>")
    $(tools).attr('id', "tools_"+random_id)

    $(tools).addClass('tools')
    $(tools).addClass('col-md-6')

    $(tools).append(font_pallete)
    $(tools).append(edit_pallete)
    $(tools).append(pallete_mixer)
    $(tools).append(pallete_hex)
    $(row_div).append(tools)


    $("#canvas_container").append(row_div)
    $("#canvas_container").append('<br>')

    $(new_canvas).attr('id',random_id)
    $(new_canvas).data('font_val', "Helvetica,sans-serif")
    $(new_canvas).data('font_id', 'font_0')
    canvas_ids_dict[random_id] = {}
    canvas_fabr = new fabric.Canvas(random_id)
    canvas_fabr.setHeight(180);
    canvas_fabr.setWidth(500);
    canvas_fabr.id = random_id

    var rect, isDown, origX, origY;
    var canvas = canvas_fabr;



    

    canvas_fabr.on('mouse:down', function(o){
        isDown = true;
        var pointer = canvas.getPointer(o.e);
        origX = pointer.x;
        origY = pointer.y;
        var pointer = canvas.getPointer(o.e);
        rect = new fabric.Rect({
            left: origX,
            top: origY,
            originX: 'left',
            originY: 'top',
            width: pointer.x-origX,
            height: pointer.y-origY,
            angle: 0,
            fill: 'rgba(255,0,0,0.5)',
            transparentCorners: false,
            selectable: false
         });
        
        //canvas.add(rect);

        

        if (active_canvas != NaN){
            $("#" + active_canvas.id).removeClass('active_canvas')
            $("#tools_" + active_canvas.id).removeClass('active_tools')
            // $("#tools_" + active_canvas.id).addClass('tools')
           
            
            
        }
        
        $("#" + this.id).addClass('active_canvas')
        
    
        active_canvas = this
        $("#tools_" + active_canvas.id).addClass('active_tools')

       
        word = canvas_ids_dict[this.id]['word']
        console.log("WORD WORD WORD: "+ word)
        load_fonts(random_id, fonts, word)
        $(".color").removeClass("ourcolor");
       

        $("#" + this.id).addClass('active_canvas')
        $("#" + "auto_"+ this.id).addClass('ourcolor')
        $("#" + "saved_"+ this.id).addClass('ourcolor')
        $("#" + "auto_back"+ this.id).addClass('ourcolor')
        $("#" + "saved_back_"+ this.id).addClass('ourcolor')
        $("#" + "fontheader_"+ this.id).addClass('ourcolor')
        $("#" + "fontbacker_"+ this.id).addClass('ourcolor')

        $("#hex_auto_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['font_color'])).addClass('selected_butt')
        console.log($("#hex_auto_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['font_color'])))
       
        $("#hex_back_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['back_color'])).addClass('selected_butt')
        console.log($("#hex_back_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['back_color'])))

        $("#" + "search_back_colors_butt_" + random_id).addClass('ourcolor')
        $("#" + "search_font_colors_butt_" + random_id).addClass('ourcolor')
        $(".color").hide();
        $(".ourcolor").show();
      

        // $("#" + "saved_" + this.id).css('visibility',"visible")
        // $("#" + "auto_back"+ this.id).css('visibility',"visible")
        // $("#" + "saved_back_" + this.id).css('visibility',"visible")


        

        
    });
    
    canvas.on('mouse:move', function(o){
        rect.selectable = false;
        if (!isDown) return;
        var pointer = canvas.getPointer(o.e);
        
        if(origX>pointer.x){
            rect.set({ left: Math.abs(pointer.x) });
        }
        if(origY>pointer.y){
            rect.set({ top: Math.abs(pointer.y) });
        }
        
        rect.set({ width: Math.abs(origX - pointer.x) });
        rect.set({ height: Math.abs(origY - pointer.y) });
        
        console.log(Math.abs(origY - pointer.y))
        $("#rect_metrics").html(" element height: " +  Math.abs(origY - pointer.y) + "px")


        canvas.renderAll();

       

    });
    
    canvas.on('mouse:up', function(o){
      isDown = false;
    //   console.log()
    });

    // var color_picker = make_color_picker(canvas, random_id,_img)
    // $(canvas_div).append(color_picker)

    return canvas_fabr
}

//fonts = ["Helvetica,sans-serif","Cambria","Georgia,serif","Rockwell","Courier","Times New Roman,serif", "Papyrus,fantasy", "Brush Script MT,cursive"]
//order of top margins: index 0 = capitals
// i / j = 1
// lowercase 2
// l / h

var Helvetica = [36, 36, 55, 36]
var Cambria = [41, 42, 63, 39]
var Georgia = [38, 35, 59, 32]
var Rockwell = [34, 34, 60, 37]
var Courier = [50, 40, 61, 46]
var Times_New_Roman = [42, 39,61, 38]
var Papyrus = [41, 39, 62, 15]
var Brush = [45, 62, 71, 49]

// var arr_top_margin = [Helvetica, Cambria, Georgia, Rockwell, Courier, Times_New_Roman, Papyrus, Brush]
var arr_top_margin = [[36, 36, 55, 36], [41, 42, 63, 39], [38, 35, 59, 32], [34, 34, 57, 37], [50, 40, 61, 46], [42, 39,61, 38], [41, 39, 62, 15], [45, 62, 71, 49]];

//4 - m
function get_top_margin(letter, font_index){

    console.log(arr_top_margin[0][0])
    console.log("font_index")

    console.log(font_index)
    var charCode = letter.charCodeAt(0)
    console.log(charCode)

    //uppercase
    if (charCode >= 65 && charCode <= 90)
      return(arr_top_margin[font_index][0])
    //lowercase
   

    // i / j
    if(charCode == 105 || charCode == 106)
        return(arr_top_margin[font_index][1])
    //l / h / t / f / d / \\ k

    if(charCode == 108 || charCode == 104 || charCode == 116 || charCode == 102 || charCode == 100|| charCode == 107)
        return(arr_top_margin[font_index][3])
    
        if (charCode >= 97 && charCode <= 122){
            return(arr_top_margin[font_index][2])
            console.log("heyo here")
            console.log(top)
            console.log("arr_top_margin[0][2]")
            console.log(arr_top_margin[font_index][2])
          
    
        }
    console.log("HEYYYYY" + top)
    
    return top
}
function populate_canvas_for_word_letter(canvas_fabr, word, img_obj, letter, file_name) {
    // canvas_fabr.set(backgroundColor("#FFFFF")
    var image_height = get_top_margin(letter, 0)

    //split the string
    var letter_index = word.indexOf(letter)
    
    console.log("_____________________"+ letter)
    console.log("_____________________"+ word)

    console.log("_____________________"+ letter_index)
    var split_word_1 = word.slice(0, letter_index)
    console.log("_____________________"+ split_word_1)
    var split_word_2 = word.slice(letter_index+1)
    console.log("_____________________" + split_word_2)
    console.log(split_word_1)
    console.log(split_word_2)
    
    //make the text boxes
    var text_1 = new fabric.Textbox(split_word_1, {
        //width:250,
        fontFamily: "Helvetica,sans-serif",
        cursorColor :"blue",
        top:20,
        left:20,
        fontSize: 100,
        fill: "black" //blue
        // isWrapping : true
    });
    console.log('logging text 1')
    console.log(text_1)
    
    canvas_fabr.add(text_1);
    
    var img_src = '../static/images/'+ file_name;

   
    var img = $("<img>")
    $(img).attr('src', img_src)
    
    
    
    //add the image
    fabric.Image.fromURL(img_src, function(myImg) {
        myImg.id = img_obj['imgID']
        console.log('logging img id')
        console.log(myImg.id)
        // canvas_fabr.add(myImg);
        //so the image is always at the back and text is in the front
        canvas_fabr.insertAt(myImg, 0) 
        myImg.set({
            left: text_1.left + text_1.width,
            top : image_height //dynamically
        })
            // myImg.scaleToWidth(text_1.width)
        console.log("LOGGING METRICS")
        var metrics = getMetrics(letter, '100px', "Helvetica,sans-serif")
        myImg.scaleToHeight(metrics.inputHeight)
        myImg.setCoords()
        console.log(myImg)
        var img_width = myImg.width * myImg.scaleX  
        
        //add second text box
        var text_2 = new fabric.Textbox(split_word_2, {
            //width:250,
            fontFamily: "Helvetica,sans-serif",
            cursorColor :"blue",
            top:20,
            left:20 + text_1.width + img_width, //+ 80,

            fontSize: 100
        });
        canvas_fabr.add(text_2);

        canvas_fabr.renderAll();

       
    })
    make_color_picker(canvas_fabr, canvas_fabr.id)
    return canvas_fabr
}



// function change_font(canvas, font_val) {

//     console.log(canvas.id)
//     var font_id = 'font_' + fonts.indexOf(font_val)
//     $("#" + canvas.id).data('font_id',font_id)
//     $('.font_display').removeClass('selected_font')
//     $('#' + font_id).addClass('selected_font')
//     console.log($("#" + font_val.split(' ').join('_')))
//     canvas.forEachObject(function(obj){
//         // console.log(obj)
//         obj.fontFamily = font_val
//     });
//     canvas.renderAll();
// }

function change_font(canvas, concept, img, letter, font_val) {
    var font_id = 'font_' + fonts.indexOf(font_val)
    $("#" + canvas.id).data('font_id',font_id)
    $('.font_display').removeClass('selected_font')
    $('#' + font_id).addClass('selected_font')
    
        populate_canvas_for_word_letter2(canvas, canvas_ids_dict[canvas.id]['word'], img, letter, font_val, canvas_ids_dict[canvas.id]['font_color'], canvas_ids_dict[canvas.id]['back_color'])

}


function populate_canvas_for_word_letter2(canvas_fabr, word, img_obj, letter, font_val, font_col, back_col) {
    canvas_fabr.clear();
    canvas_fabr.backgroundColor = "#"+back_col

    console.log("CANVAS ID : " + back_col)
    var file = canvas_ids_dict[canvas_fabr.id]['file_name'] // $("#" + canvas_fabr.id).data('file')
    console.log(file)
    var image_height = get_top_margin(letter, fonts.indexOf(font_val))

    //split the string
    var letter_index = word.indexOf(letter)
    var split_word_1 = word.slice(0, letter_index)
    var split_word_2 = word.slice(letter_index+1)
    console.log(split_word_1)
    console.log(split_word_2)
    
    //make the text boxes
    var text_1 = new fabric.Textbox(split_word_1, {
        //width:250,
        fontFamily: font_val,
        cursorColor :"blue",
        top:20,
        left:20,
        fontSize: 100,
        fill: "#"+font_col,
        // isWrapping : true
    });
    console.log('logging text 1')
    console.log(text_1)
    // console.log('logging char bounds')
    // console.log(text_1.charBounds)
    // console.log(text_1.toSVG())
    
    canvas_fabr.add(text_1);
    
    var img_src = '../static/images/'+ file;

    // if (img_obj['selected_file_name']!= ""){
    //     img_src += img_obj['selected_file_name']
    // }else if (img_obj['extracted_file_name'] != "") {
    //     img_src += img_obj['extracted_file_name']
    // } else {
    //     img_src += img_obj['file_name']
    // }
    // var img_src = img_obj['imageURL']
    var img = $("<img>")
    $(img).attr('src', img_src)


   
    var img = $("<img>")
    $(img).attr('src', img_src)
    
    
    //add the image
    fabric.Image.fromURL(img_src, function(myImg) {
        myImg.id = img_obj['imgID']
        console.log('logging img id')
        console.log(myImg.id)
        // canvas_fabr.add(myImg);
        //so the image is always at the back and text is in the front
        canvas_fabr.insertAt(myImg, 0) 
        myImg.set({
            left: text_1.left + text_1.width,
            top : image_height //dynamically
        })
            // myImg.scaleToWidth(text_1.width)
        console.log("LOGGING METRICS")
        var metrics = getMetrics(letter, '100px', font_val)
        console.log(metrics)
        console.log("_______________________________________________LOGGING METRICS uP")

        // var rect = new fabric.Rect({
        //     left: 0,
        //     top: 0,
        //     fill: 'red',
        //     width: 20,
        //     height: 100
        //   });

        //   rect.id = "1"
        //   rect.on('mouse:down',(function(){
        //    console.log("HI")
    
            
    
        // }))
     

        // //   rect.on('mouse:down',(function(){
        // //     console.log('hi friend!')
        // //     console.log(this)
        // //     console.log(this.getHeight())
        // //     // console.log(rect.getHeight())
        // // }))
            
    
       
        // canvas_fabr.add(rect)
        console.log('metrics.myMetrics.px.ascender:' + metrics.myMetrics.px.ascender)
        
        // var rect2 = new fabric.Rect({
        //     left: 30,
        //     top: 0,
        //     fill: 'blue',
        //     width: 20,
        //     height: 100
        //   });
         

        // canvas_fabr.add(rect2)

        console.log('metrics.myMetrics.px.descender:' + metrics.myMetrics.px.descender)

        myImg.scaleToHeight(metrics.inputHeight)
        myImg.setCoords()
        console.log(myImg)
        var img_width = myImg.width * myImg.scaleX  
        
        //add second text box
        var text_2 = new fabric.Textbox(split_word_2, {
            //width:250,
            fontFamily: font_val,
            cursorColor :"blue",
            top:20,
            left:20 + text_1.width + img_width, //+ 80,
            fill: "#"+font_col,
            fontSize: 100
        });
        canvas_fabr.add(text_2);

        // var rect =  new fabric.Rect({
        //     fill:'red',
        //     height:10, //131,
        //     width: 20
        // })
        // var rect2 =  new fabric.Rect({
        //     fill:'blue',
        //     height: 10, //131,
        //     width: 20
        // })
    
        // canvas_fabr.add(rect2)
    
        // canvas_fabr.add(rect)


        canvas_fabr.renderAll();

       
    })

    


    return canvas_fabr
}







function set_active_by_id(myId){
    canvas.forEachObject(function(obj) {
        if (obj.id && obj.id === myId) {
            obj.set('active', true);
            console.log('in the if!!')
        }
    });
}

function remove_object_by_id(myId) {
    if (myId != '') {
        canvas.forEachObject(function(obj) {
            if (obj.id && obj.id === myId) {
                // obj.set('active', true);
                console.log('in the if / removing!!')
                canvas.remove(obj)
            }
        });
    }
}

function get_obj_by_id(myId) {
    var answer;
    canvas.forEachObject(function(obj) {
        if (obj.id && obj.id === myId) {
            console.log('in the if')
            console.log(obj)
            answer = obj
        }
    });
    return answer
}

function append_route_btn(route, icon) {
    var form = $("<form>");
    $(form).attr('action', '../'+ route+'/' + creator + '_' + identifier);
    $(form).attr('method', 'post');
    var btn = $("<button>")
    // $(btn).addClass("btn btn-secondary");
    $(btn).html("<span class='glyphicon glyphicon-"+ icon+"'</span>");
    $(btn).attr('title', route);
    $(form).append(btn);
    $(form).css('display', 'inline-block')
    $("#forbutt").append(form)
  }
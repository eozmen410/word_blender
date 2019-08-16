//color picker : https://stackoverflow.com/questions/39322503/getcontext-is-not-a-function-when-using-variable-for-element-selector/39322509
//https://stackoverflow.com/questions/1936021/javascript-eyedropper-tell-color-of-pixel-under-mouse-cursor
//https://www.rgraph.net/canvas/reference/drawimage.html
const request = { sources: ['window', 'screen', 'tab'] };
const EXTENSION_ID = 'YOUR_EXTENSION_ID';
var anno1 = new Anno({
    target : 'pre:first',
    content: 'This is an annotation'
  })

var first_targ, second_targ, third_targ;
var fonts = ["Helvetica,sans-serif","Cambria","Georgia,serif","Rockwell","Courier","Times New Roman,serif", "Papyrus,fantasy", "Brush Script MT,cursive"]
var background_cols = ['#FF0000',
'#F08080',
'#FFD700',
'#FF8C00',
'#FFDAB9',
'#BDB76B',
'#00FF00',
'#008000',
'#00FFFF',
'#008080',
'#00BFFF',
'#7B68EE',
'#191970',
'#B0E0E6',
'#E6E6FA',
'#FF00FF',
'#8B008B',
'#4B0082',
'#FFC0CB',
'#FF1493',
'#FFF8DC',
'#F4A460',
'#8B4513',
'#800000'

]


background_cols_backup = ['#0C090A',
'#2C3539',
'#2B1B17',
'#34282C',
'#25383C',
'#3B3131',
'#413839',
'#3D3C3A',
'#463E3F',
'#4C4646',
'#504A4B',
'#565051',
'#5C5858',
'#625D5D',
'#666362',
'#6D6968',
'#726E6D',
'#736F6E',
'#837E7C',
'#848482',
'#B6B6B4',
'#D1D0CE',
'#E5E4E2',
'#BCC6CC',
'#98AFC7',
'#6D7B8D',
'#657383',
'#616D7E',
'#646D7E',
'#566D7E',
'#737CA1',
'#4863A0',
'#2B547E',
'#2B3856',
'#151B54',
'#000080',
'#342D7E',
'#15317E',
'#151B8D',
'#0000A0',
'#0020C2',
'#0041C2',
'#2554C7',
'#1569C7',
'#2B60DE',
'#1F45FC',
'#6960EC',
'#736AFF',
'#357EC7',
'#368BC1',
'#488AC7',
'#3090C7',
'#659EC7',
'#87AFC7',
'#95B9C7',
'#728FCE',
'#2B65EC',
'#306EFF',
'#157DEC',
'#1589FF',
'#6495ED',
'#6698FF',
'#38ACEC',
'#56A5EC',
'#5CB3FF',
'#3BB9FF',
'#79BAEC',
'#82CAFA',
'#82CAFF',
'#A0CFEC',
'#B7CEEC',
'#B4CFEC',
'#C2DFFF',
'#C6DEFF',
'#AFDCEC',
'#ADDFFF',
'#BDEDFF',
'#CFECEC',
'#E0FFFF',
'#EBF4FA',
'#F0F8FF',
'#F0FFFF',
'#CCFFFF',
'#93FFE8',
'#9AFEFF',
'#7FFFD4',
'#00FFFF',
'#7DFDFE',
'#57FEFF',
'#8EEBEC',
'#50EBEC',
'#4EE2EC',
'#81D8D0',
'#92C7C7',
'#77BFC7',
'#78C7C7',
'#48CCCD',
'#43C6DB',
'#46C7C7',
'#7BCCB5',
'#43BFC7',
'#3EA99F',
'#3B9C9C',
'#438D80',
'#348781',
'#307D7E',
'#5E7D7E',
'#4C787E',
'#008080',
'#4E8975',
'#78866B',
'#848b79',
'#617C58',
'#728C00',
'#667C26',
'#254117',
'#306754',
'#347235',
'#437C17',
'#387C44',
'#347C2C',
'#347C17',
'#348017',
'#4E9258',
'#6AA121',
'#4AA02C',
'#41A317',
'#3EA055',
'#6CBB3C',
'#6CC417',
'#4CC417',
'#52D017',
'#4CC552',
'#54C571',
'#99C68E',
'#89C35C',
'#85BB65',
'#8BB381',
'#9CB071',
'#B2C248',
'#9DC209',
'#A1C935',
'#7FE817',
'#59E817',
'#57E964',
'#64E986',
'#5EFB6E',
'#00FF00',
'#5FFB17',
'#87F717',
'#8AFB17',
'#6AFB92',
'#98FF98',
'#B5EAAA',
'#C3FDB8',
'#CCFB5D',
'#B1FB17',
'#BCE954',
'#EDDA74',
'#EDE275',
'#FFE87C',
'#FFFF00',
'#FFF380',
'#FFFFC2',
'#FFFFCC',
'#FFF8C6',
'#FFF8DC',
'#F5F5DC',
'#FBF6D9',
'#FAEBD7',
'#F7E7CE',
'#FFEBCD',
'#F3E5AB',
'#ECE5B6',
'#FFE5B4',
'#FFDB58',
'#FFD801',
'#FDD017',
'#EAC117',
'#F2BB66',
'#FBB917',
'#FBB117',
'#FFA62F',
'#E9AB17',
'#E2A76F',
'#DEB887',
'#FFCBA4',
'#C9BE62',
'#E8A317',
'#EE9A4D',
'#C8B560',
'#D4A017',
'#C2B280',
'#C7A317',
'#C68E17',
'#B5A642',
'#ADA96E',
'#C19A6B',
'#CD7F32',
'#C88141',
'#C58917',
'#AF9B60',
'#AF7817',
'#B87333',
'#966F33',
'#806517',
'#827839',
'#827B60',
'#786D5F',
'#493D26',
'#483C32',
'#6F4E37',
'#835C3B',
'#7F5217',
'#7F462C',
'#C47451',
'#C36241',
'#C35817',
'#C85A17',
'#CC6600',
'#E56717',
'#E66C2C',
'#F87217',
'#F87431',
'#E67451',
'#FF8040',
'#F88017',
'#FF7F50',
'#F88158',
'#F9966B',
'#E78A61',
'#E18B6B',
'#E77471',
'#F75D59',
'#E55451',
'#E55B3C',
'#FF0000',
'#FF2400',
'#F62217',
'#F70D1A',
'#F62817',
'#E42217',
'#E41B17',
'#DC381F',
'#C34A2C',
'#C24641',
'#C04000',
'#C11B17',
'#9F000F',
'#990012',
'#8C001A',
'#954535',
'#7E3517',
'#8A4117',
'#7E3817',
'#800517',
'#810541',
'#7D0541',
'#7E354D',
'#7D0552',
'#7F4E52',
'#7F5A58',
'#7F525D',
'#B38481',
'#C5908E',
'#C48189',
'#C48793',
'#E8ADAA',
'#ECC5C0',
'#EDC9AF',
'#FDD7E4',
'#FCDFFF',
'#FFDFDD',
'#FBBBB9',
'#FAAFBE',
'#FAAFBA',
'#F9A7B0',
'#E7A1B0',
'#E799A3',
'#E38AAE',
'#F778A1',
'#E56E94',
'#F660AB',
'#FC6C85',
'#F6358A',
'#F52887',
'#E45E9D',
'#E4287C',
'#F535AA',
'#FF00FF',
'#E3319D',
'#F433FF',
'#D16587',
'#C25A7C',
'#CA226B',
'#C12869',
'#C12267',
'#C25283',
'#C12283',
'#B93B8F',
'#7E587E',
'#571B7E',
'#583759',
'#4B0082',
'#461B7E',
'#4E387E',
'#614051',
'#5E5A80',
'#6A287E',
'#7D1B7E',
'#A74AC7',
'#B048B5',
'#6C2DC7',
'#842DCE',
'#8D38C9',
'#7A5DC7',
'#7F38EC',
'#8E35EF',
'#893BFF',
'#8467D7',
'#A23BEC',
'#B041FF',
'#C45AEC',
'#9172EC',
'#9E7BFF',
'#D462FF',
'#E238EC',
'#C38EC7',
'#C8A2C8',
'#E6A9EC',
'#E0B0FF',
'#C6AEC7',
'#F9B7FF',
'#D2B9D3',
'#E9CFEC',
'#EBDDE2',
'#E3E4FA',
'#FDEEF4',
'#FFF5EE',
'#FEFCFF'	]
var simulateClick = function (elem) {
	// Create our event (with options)
	var evt = new MouseEvent('mouse:down', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	// var canceled = !elem.dispatchEvent(evt);
};

$(document).ready(function(){

    // function download(random_id) {
    //     var download = document.getElementById("download");
    //     var image = document.getElementById("myCanvas").toDataURL("image/png")
    //         .replace("image/png", "image/octet-stream");
    //     download.setAttribute("href", image);
    //     //download.setAttribute("download","archive.png");
    //     }

$("#toggle_tutorial").data('open', 'true')

$("#toggle_tutorial").click(function(){
    if ($("#toggle_tutorial").data('open') == 'true'){
        $( "#collapsible_tutorial").hide()
        $( "#toggle_tutorial").data('open', 'false')
        $("#toggle_tutorial").html("View Tutorial")
        $("#toggle_tutorial").css('margin-bottom', '12px')


    }
   else{
    $( "#collapsible_tutorial").show()
    $( "#toggle_tutorial").data('open', 'true')
    $("#toggle_tutorial").html("Hide Tutorial")
    $("#toggle_tutorial").css('margin-bottom', '2px')
   }
   
   
    
 })

    
    // intro.show();

//   append_route_btn('findSymbols', 'search')
//   append_route_btn('blend_word', 'pencil')
//   append_route_btn('shape_editor', 'edit')
    console.log(input_words)
    console.log(symbols)
    // load_saved_symbols()
       // load_fonts(fonts)
    var first_one = true
    var our_sum = 0;
    for (var i= 0 ; i< input_words.length; i++) {
        var concept = input_words[i]
        var curr_sum = 0;
        // $("#our_information").append(" " + concept)
        // if(i < input_words.length-1)
        //      $("#our_information").append(" and")

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
                           if (symbols[key]['selected_files'][select]['deleted']== "True") {

                            continue;
                           }
                        
                            var _letter = symbols[key]['selected_files'][select]['shapes'][j]
                            var _img = symbols[key]

                            console.log('********************************************')
                            console.log(concept.indexOf(_letter) + " LETTER : " + _letter)

                            if ( concept.indexOf(_letter)>=0) {
                                
                                var c = make_canvas_w_random_id( _img)
                                var c_id = $(c).attr('id')
                                $(c).data('letter', _letter)
                                $(c).data('image', _img)
                                $(c).data('file',symbols[key]['selected_files'][select]['file_name'] )
                                canvas_ids_dict[c_id]['file_name'] = symbols[key]['selected_files'][select]['file_name']
                                canvas_ids_dict[c_id]['word']  = concept
                                canvas_ids_dict[c_id]['font_color'] = "000000"
                                canvas_ids_dict[c_id]['back_color'] = "FFFFFF"
                                canvas_ids_dict[c_id]['active_font'] = "font_0"
                               
                                populate_canvas_for_word_letter(c, concept, $(c).data('image'), $(c).data('letter'), $(c).data('file'))
                               curr_sum++;
                                // add_shape_editor_btn(key, c_id) 
                                if (first_one) {
                                    var first_id = c_id;
                                    active_canvas = c;
                                    // $(c).addClass()
                                    // console.log('first one')
                                    // $(c).trigger('mouse:down');
                                    // first_one = false

                                    // var e = jQuery.Event("mouse:down", {
                                    //     pageX: 700,
                                    //     pageY: 300
                                    //   });
                                    //   $(c).trigger(e);
                                    //   first_one = false;

                                    $("#" + c.id).addClass('active_canvas')
        
                                    // var someLink = document.getElementById("#"+ c.id);
                                    // simulateClick(someLink);
                                    first_one = false;
                                    // active_canvas = this 
                                    make_color_picker(active_canvas, active_canvas.id)

                                    $("#tools_" + active_canvas.id).addClass('active_tools')
                                    $("#tools_" + active_canvas.id).show()
                                     var word = concept
                                    console.log("WORD WORD WORD: "+ word)
                                    load_fonts(c_id, fonts, word)
                                    $(".color").removeClass("ourcolor");
                                   
                            
                                    $("#" + active_canvas.id).addClass('active_canvas')
                                    $("#" + "auto_"+ active_canvas.id).addClass('ourcolor')
                                    $("#" + "saved_"+ active_canvas.id).addClass('ourcolor')
                                    $("#" + "auto_back"+ active_canvas.id).addClass('ourcolor')
                                    $("#" + "saved_back_"+ active_canvas.id).addClass('ourcolor')
                                    $("#" + "fontheader_"+ active_canvas.id).addClass('ourcolor')
                                    $("#" + "fontbacker_"+ active_canvas.id).addClass('ourcolor')
                            
                                    $("#hex_font_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['font_color'])).addClass('selected_butt')
                                    $("#hex_auto_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['font_color'])).addClass('selected_butt')
                                    console.log($("#hex__"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['font_color'])))
                                   
                                    $("#hex_back_auto_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['back_color'])).addClass('selected_butt')
                                   
                                    console.log(canvas_ids_dict[active_canvas.id]['back_color'])
                                    $("#hex_back_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['back_color'])).addClass('selected_butt')
                                    // console.log($("#hex_back_auto_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['back_color'])))
                                    $('#' +(canvas_ids_dict[active_canvas.id]['active_font']) + "_" + active_canvas.id ).addClass('selected_font')
                                    
                                  
                                    console.log($('#' +(canvas_ids_dict[active_canvas.id]['active_font']) ).addClass('selected_font'))
                                    $("#" + "search_back_colors_butt_" + active_canvas.id).addClass('ourcolor')
                                    $("#" + "search_font_colors_butt_" + active_canvas.id).addClass('ourcolor')
                                    $(".color").hide();
                                    $(".ourcolor").show();

                                    first_targ = "#container_" +active_canvas.id
                                  //  "#tools_" + active_canvas.id
                                    second_targ = "#auto_"+ active_canvas.id
                                    third_targ = "#auto_back" + active_canvas.id
                                    

                                }
                                else{
                                    make_color_picker(c, c.id)  
                                }                
                            }
                        }
                    }
                }
            }            
        }
        // $("#our_information").append("<h2>" + curr_sum +" word blends for: " + "</h2>" )
        $("#our_information").append('<div style="display: inline-block; vertical-align: center;" class = "bolder">' + curr_sum + '</div>')
        if(curr_sum != 1)
            $("#our_information").append('<div class = "boldish"  style="display: inline-block; vertical-align: center;">&nbspword blends for&nbsp</div>')
        else
            $("#our_information").append('<div class = "boldish"  style="display: inline-block; vertical-align: center;">&nbspword blend for&nbsp</div>')


        $("#our_information").append('<div style="display: inline-block; vertical-align: center;" class = "bolder">' + concept + '</div>')
        $("#our_information").append('<div class = "boldish" style="display: inline-block; vertical-align: center;"> &nbspand&nbsp </div>')
        $("#our_information").append('<div style="display: inline-block; vertical-align: center;" class = "bolder">' + symbols[Object.keys(symbols)[0]]['initialSearchTerm'] + '</div>')
        $("#our_information").append('<br>')

        // var word_info = $('<div> word blends for </div>')
        // var name_info = $('<div class = "bolder">' + concept + '</div>')
        // var  word_info = $('<div> word blends for </div>')
        // var img_info = $('<div class = "bolder">' + symbols[Object.keys(symbols)[0]]['initialSearchTerm'] + '</div>')

        window.scrollTo(0, 0)
    }
   
    // for (var i= 0 ; i< input_words.length; i++) {
    //     var concept = input_words[i]
    //     $("#our_information").append(concept + " + " + symbols[Object.keys(symbols)[0]]['initialSearchTerm']) 
    //     // $("#our_information").append(" " + concept)
    //     if(i < input_words.length-1)
    //          $("#our_information").append(" and")
    // }
    var intro =   new Anno([
   
        { 
          target: "#container_" +active_canvas.id,
          content: "Pick your favorite Word Blend"
        },
        {
          target: "#auto_"+ active_canvas.id,
          content: "Change the font color"
        },
        {
          target:   "#auto_back" + active_canvas.id,
          content: "Change the background color",
          position: 'right',
          buttons:[{
            text:'Get Started',
            className: 'anno-btn-skip',
            }]
          }
        

    ]);

    // $("#tour").onclick{

       
    

    $("#tour").click(function(){
        onclick = intro.show()
    })
 

    
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
        $(font_div).attr('id', "font_" + i + "_" + random_id)
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
    $(search_font_colors_butt).append("<span class = 'glyphicon glyphicon-plus'></span> More font colors")
    $(search_font_colors_butt).attr("id", "search_font_colors_butt_" + random_id)
    $(search_font_colors_butt).data("toggle", "more")

    $(search_font_colors_butt).addClass('btn info-btn')
    $(search_font_colors_butt).addClass('color')
    $(search_font_colors_butt).addClass('mybutt')
    $(search_font_colors_butt).addClass('donebutt')


    var search_back_colors_butt = $("<button>")
    $(search_back_colors_butt).append("<span class = 'glyphicon glyphicon-plus'></span> More background colors")
    $(search_back_colors_butt).addClass('btn info-btn')
    $(search_back_colors_butt).addClass('color')
    $(search_back_colors_butt).attr("id", "search_back_colors_butt_" + random_id)
    $(search_back_colors_butt).addClass('mybutt')
    $(search_back_colors_butt).addClass('donebutt')
    $(search_back_colors_butt).data("toggle", "more")
    var canvas_div = $("<div>")
    $(canvas_div).attr('id', 'div_img_' +random_id)
    $(canvas_div).append(img_canvas)
    

    var done_selecting_font_color_butt = $("<button>")
    $(done_selecting_font_color_butt).addClass('donebutt')
    $(done_selecting_font_color_butt).append("<span class = 'glyphicon glyphicon-ok'></span> Hide color palette")
   
    


   





   
   

    //background stuff
    var img_canvas_back = $("<canvas class='img_canvas'>")
    var canvas_div_back = $("<div>")
    $(canvas_div_back).append(img_canvas_back)
    $(canvas_div_back).attr('id', 'div_img_back' +random_id)
    $(img_canvas_back).attr('id','img_back_' + random_id)

    var done_selecting_back_color_butt = $("<button>")
    $(done_selecting_back_color_butt).addClass('donebutt')
    $(done_selecting_back_color_butt).append("<span class = 'glyphicon glyphicon-ok'></span> Hide color palette")
    
    var more_f_cols= $("<div>")
    
    $(more_f_cols).attr('id', "auto_font_more_" + random_id)
    $(more_f_cols).append("<br>Or from the color palette<hr>")
    $(canvas_div).append(more_f_cols)
    $(canvas_div).append("<br>")


    var more_cols= $("<div>")
    
    $(more_cols).attr('id', "auto_back_more_" + random_id)
    $(more_cols).append("<br>Or from the color palette<hr>")
    $(canvas_div_back).append(more_cols)
    $(canvas_div_back).append("<br>")
    // $("#auto_back_more_"+random_id).append(color_butt)

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



    // $(color_div_encompass).append(color_div_fonts)
    // $(color_div_encompass).append(color_div_background)
    

    
    var hex_input_back = $("<input>")
    $(hex_input_back).addClass('ourinput')
    $(hex_input_back).attr('id', 'input_back_' + random_id)
   
    // $("#pallete_hex_"+random_id).append("Input hex value<br>")
    // $("#pallete_hex_"+random_id).append("Or input a hex value<br>")
    var hint = $("<div>Or input hex value<br></div>")
    $(hint).attr('id', 'hint_'+random_id)


    var hint2 = $("<div>Or input hex value<br></div>")
    $(hint2).attr('id', 'hint_2_'+random_id)


    
    // $("#pallete_hex_b_"+random_id).append(hex_input_back)
    // $("#pallete_hex_b_"+random_id).prepend(hint2)

    $( "#pallete_mixer_b_"+random_id).append("Select background colors by clicking on the image<hr>")
    $( "#pallete_mixer_b_"+random_id).append(canvas_div_back)

    //HERE
    $( "#pallete_mixer_"+random_id).append("Select font colors by clicking on the image<hr>")
    $( "#pallete_mixer_"+random_id).append(canvas_div)

    $("#pallete_mixer_"+random_id).hide()
    $("#pallete_mixer_b_"+random_id).hide() 



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

       
    //    style="display: inline-block; vertical-align: center;" $("#pallete_hex_"+random_id).append(hex_input)
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
    //    $(canvas_div).append(done_selecting_font_color_butt)

    $(search_font_colors_butt).click(function(){
        if ($(search_font_colors_butt).data("toggle") ==  "more"){
        $( "#pallete_mixer_"+random_id).show()
        $(search_font_colors_butt).html("<span class = 'glyphicon glyphicon-minus'></span> Less font colors")
        $(search_font_colors_butt).data("toggle", "less")
        }
        else {
            $( "#pallete_mixer_"+random_id).hide()
            $(search_font_colors_butt).html("<span class = 'glyphicon glyphicon-plus'></span> More font colors")
            $(search_font_colors_butt).data("toggle", "more")
           

        }
       
           
       
    })
    // $(done_selecting_font_color_butt).click(function(){

    //     $( "#pallete_mixer_"+random_id).hide()
    //     $(search_font_colors_butt).show()
    //     // $("#pallete_hex_"+random_id).empty()
        

    // })

    $(search_back_colors_butt).click(function(){
        if ($(search_back_colors_butt).data("toggle") ==  "more"){
              $( "#pallete_mixer_b_"+random_id).show()
        $(search_back_colors_butt).html("<span class = 'glyphicon glyphicon-minus'></span> Less background colors")
        $(search_back_colors_butt).data("toggle", "less")
        }
        else {
            $( "#pallete_mixer_b_"+random_id).hide()
            $(search_back_colors_butt).html("<span class = 'glyphicon glyphicon-plus'></span> More background colors")
            $(search_back_colors_butt).data("toggle", "more")
           

        }
       
        
    



       
    })
    $(done_selecting_back_color_butt).click(function(){
        $( "#pallete_mixer_b_"+random_id).hide()
        $(search_back_colors_butt).show()
        // console.log($( "#pallete_mixer_"+random_id))
        // $("#pallete_hex_"+random_id).empty()



    })



    
    
   
   
    var fontheader = $("<div>")
    $(fontheader).html("Font Color<hr>")
    $(fontheader).addClass('color')
    $(fontheader).attr('id', "fontheader_"+ random_id)

    var fontbacker = $("<div>")
    $(fontbacker).html("Background Color<hr>")
    $(fontbacker).addClass('color')
    $(fontbacker).attr('id', "fontbacker_"+ random_id)


    $("#pallete_"+random_id).prepend(search_font_colors_butt)
    $("#pallete_"+random_id).prepend(saved)
    $("#pallete_"+random_id).prepend(auto)
    $("#pallete_"+random_id).prepend(fontheader)  
 
   
    $("#pallete_b_"+random_id).prepend(search_back_colors_butt)
    $("#pallete_b_"+random_id).prepend(saved_back)
    $("#pallete_b_"+random_id).prepend(auto_back)
    $("#pallete_b_"+random_id).prepend(fontbacker)
    
    
    

  
    
    

    
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

    //var arr= [ '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000']
    var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen","#ffffff"];
 
    for (var i = arr.length-1; i >= 0 ; i--){
            
        var color_butt= $("<button onclick= \"change_color_back(\'" +  active_canvas +"\',\'" + random_id +"\',\'" + "hex_back_"+ "\',\'" + arr[i] + "\')\""+" class = 'save_color'></button>")
        $(color_butt).css('background-color', arr[i])
        $("#auto_back"+random_id).append(color_butt)
        $(color_butt).addClass("hex_back_")
        $(color_butt).attr('id',"hex_back_"+random_id +"_"+arr[i].substring(1))
    }
    
    for (var i = background_cols.length-1; i >= 0 ; i--){
           
        var color_butt= $("<button onclick= \"change_color_back(\'" +  active_canvas +"\',\'" + random_id +"\',\'" + "hex_back_"+ "\',\'" + background_cols[i] + "\')\""+" class = 'save_color'></button>")
        $(color_butt).css('background-color', background_cols[i])
        $("#auto_back_more_"+random_id).append(color_butt)
        $(color_butt).addClass("hex_back_")
        $(color_butt).attr('id',"hex_back_"+random_id +"_"+background_cols[i].substring(1) )
        
    }
    $("#hex_back_"+random_id +"_"+"FFFFFF").addClass('selected_butt')

    


}
function auto_fill(random_id){
    var arr= ['#FFFFFF','#C7C7C7','#939393', '#666666' , '#000000']
    for (var i = arr.length-1; i >= 0 ; i--){
           
        var color_butt= $("<button onclick= \"change_color(\'" +  active_canvas +"\',\'" + random_id +"\',\'" + "hex_auto_"+ "\',\'" + arr[i] + "\')\""+" class = 'save_color' style= 'background-color:" + arr[i]+"; border: 1px solid #f0f0f0; border-radius: 50%; height: 25px; width:25px'></button>")
        $("#auto_"+random_id).append(color_butt)
        $(color_butt).addClass("hex_auto_")
        $(color_butt).attr('id',"hex_auto_"+random_id +"_"+arr[i].substring(1) )
    }
    for (var i = background_cols.length-1; i >= 0 ; i--){
           
        var color_butt= $("<button onclick= \"change_color(\'" +  active_canvas +"\',\'" + random_id +"\',\'" + "hex_auto_"+ "\',\'" + background_cols[i] + "\')\""+" class = 'save_color'></button>")
        $(color_butt).css('background-color', background_cols[i])
        $("#auto_font_more_"+random_id).append(color_butt)
        $(color_butt).addClass("hex_font_")
        $(color_butt).attr('id',"hex_auto_"+random_id +"_"+background_cols[i].substring(1) )
        
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
    canvas_ids_dict[active_canvas.id]['font_color'] = _hex.substring(1)
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
    $(canvas_div).css('padding-left', '10px' )
    $(canvas_div).css('margin-right', '70px' )
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
    $(edit_pallete).addClass('col-md-4')
    
    $(edit_pallete).attr('id', "pallete_"+random_id)
    $(edit_pallete).css('display', 'inline')
    $(edit_pallete).css('vertical-align', 'top')
    // $(edit_pallete).css('border', '1px solid blue')

    var pallete_mixer = $("<div>")
    // $( pallete_mixer).css('vertical-align', 'top')
    $( pallete_mixer).addClass('col-md-12')
    $(pallete_mixer).addClass('nopad')
    $( pallete_mixer).attr('id', "pallete_mixer_"+random_id)
    // $( pallete_mixer).css('display', 'inline')
    // $( pallete_mixer).css('vertical-align', 'top')
    // $( pallete_mixer).css('border', '1px solid green')
    
    var pallete_hex = $("<div>")
    $( pallete_hex).css('vertical-align', 'top')
    $( pallete_hex).addClass('col-md-2')
    $( pallete_hex).attr('id', "pallete_hex_"+random_id)
    $( pallete_hex).css('display', 'inline')
    $( pallete_hex).css('vertical-align', 'top')
    // $( pallete_hex).css('border', '1px solid green')

    var edit_pallete_b = $("<div>")
    $(edit_pallete_b).css('vertical-align', 'top')
    $(edit_pallete_b).addClass('col-md-4')
    $(edit_pallete_b).attr('id', "pallete_b_"+random_id)
    $(edit_pallete_b).css('display', 'inline')
    $(edit_pallete_b).css('vertical-align', 'top')
   
    var pallete_mixer_b = $("<div>")
    $( pallete_mixer_b).css('vertical-align', 'top')
    $( pallete_mixer_b).addClass('col-md-12')
    $( pallete_mixer_b).addClass('nopad')
    $( pallete_mixer_b).attr('id', "pallete_mixer_b_"+random_id)
    $( pallete_mixer_b).css('display', 'inline')
    $( pallete_mixer_b).css('vertical-align', 'top')
    // $(edit_pallete).css('border', '1px solid blue')
    
    // $(edit_pallete).css('padding', '100px')
    // $(edit_pallete).css('width', '100px')

    var down_butt_out = $("<div>") 
    $(down_butt_out).addClass('col-md-2')
    var down_butt = $("<button>Download</button>")
    //<span class = 'glyphicon glyphicon-arrow-down'></span>
    $(down_butt_out).append(down_butt)

    $(down_butt ).css('vertical-align', 'top')
    // $(down_butt ).addClass('col-md-2')
    $(down_butt).addClass('donebutt')
    $(down_butt).addClass('btn info-btn mybutt donebutt')

    $(down_butt ).attr('id', "down_"+random_id)
    $(down_butt ).css('display', 'inline')
    $(down_butt ).css('vertical-align', 'bottom')
   


   
 
   


    $(row_div).append(canvas_div)
    var tools = $("<div>")
    $(tools).attr('id', "tools_"+random_id)

    $(tools).addClass('tools')
    
    $(tools).addClass('col-md-6')
    $(edit_pallete).append("<br>")
    $(edit_pallete).append(pallete_mixer)


    $(tools).append(font_pallete)
    $(tools).append(edit_pallete)

    $(edit_pallete_b).append("<br>")
    $(edit_pallete_b).append(pallete_mixer_b)
    
    // $(tools).append(pallete_mixer)
    $(tools).append(edit_pallete_b)
   
    
    // $(tools).append(pallete_hex)
    $(tools).append(down_butt_out)
    $(row_div).append(tools)

    $(tools).hide()


    $("#canvas_container").append(row_div)
    $("#canvas_container").append('<br>')

    $(new_canvas).attr('id',random_id)
    $(new_canvas).data('font_val', "Helvetica,sans-serif")
    $(new_canvas).data('font_id', 'font_0')
    canvas_ids_dict[random_id] = {}
    canvas_fabr = new fabric.Canvas(random_id)
    canvas_fabr.setHeight(250);
    canvas_fabr.setWidth(653.78);
    canvas_fabr.id = random_id

    var rect, isDown, origX, origY;
    var canvas = canvas_fabr;

    $(down_butt).click(function(){
        function downloadFabric(canvas,name){
            //  convert the canvas to a data url and download it.
              download(canvas.toDataURL(), name+'.png');
            }

        function download(url,name){
        // make the link. set the href and download. emulate dom click
            $('<a>').attr({href:url,download:name})[0].click();
        }
        downloadFabric(active_canvas, "wordblend_"+ active_canvas.id)
        
    })


    

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
            $("#tools_" + active_canvas.id).hide()
            $("#tools_" + active_canvas.id).removeClass('active_tools')
            // $("#tools_" + active_canvas.id).addClass('tools')
           
            
            
        }
        
        $("#" + this.id).addClass('active_canvas')


       
        
    
        active_canvas = this

      $("#" + this.id)[0].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        // var yes = document.getElementById( this.id)
        // (yes).scrollIntoView();
        $("#tools_" + active_canvas.id).show()
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

        $("#hex_font_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['font_color'])).addClass('selected_butt')
        $("#hex_auto_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['font_color'])).addClass('selected_butt')
        console.log($("#hex__"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['font_color'])))
       
        $("#hex_back_auto_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['back_color'])).addClass('selected_butt')
       
        console.log(canvas_ids_dict[active_canvas.id]['back_color'])
        $("#hex_back_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['back_color'])).addClass('selected_butt')
        // console.log($("#hex_back_auto_"+active_canvas.id +"_"+(canvas_ids_dict[active_canvas.id]['back_color'])))
        $('#' +(canvas_ids_dict[active_canvas.id]['active_font']) + "_" + random_id ).addClass('selected_font')

      
        console.log($('#' +(canvas_ids_dict[active_canvas.id]['active_font']) ).addClass('selected_font'))
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

    var word_width = getMetrics(word,'100px', "Helvetica,sans-serif")
    console.log("WORD METRICS ALLLLLLLLLL")
    console.log(word_width)
    console.log(word_width.myMetrics.width.width)
    var word_width_val = word_width.myMetrics.width.width;
    console.log(word_width_val)
    word_width_val = word_width_val.substring(0, word_width_val.length - 2);
    word_width_val = parseInt(word_width_val);
    // alert("hi " + word_width)
    var  pos_left = (653 - word_width_val)/2.0 - 20
    if (pos_left < 0)
        pos_left = 0;

    console.log("POS_LEFT")
    console.log(pos_left)


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
    // alert(pos_left)
    // canvas_fabr.add(new fabric.Textbox(split_word_1, {
    //     //width:250,
    //     fontFamily: "Helvetica,sans-serif",
    //     cursorColor :"blue",
    //     top:60,
    //     left:pos_left,
    //     fontSize: 100,
    //     fill: "black" //blue
    //     // isWrapping : true
    // }));
  

    var text_1 = new fabric.Textbox(split_word_1, {
        //width:250,
        fontFamily: "Helvetica,sans-serif",
        cursorColor :"blue",
        top:60,
        left:pos_left,
        fontSize: 100,
        fill: "black" //blue
        // isWrapping : true
    });
    console.log('logging text 1')
    // console.log(text_1)
    
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
            top : image_height + 40//dynamically
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
            top:60,
            left:pos_left + text_1.width + img_width, //+ 80,

            fontSize: 100
        });
        canvas_fabr.add(text_2);


        
        // canvas_fabr.renderAll();

        // var group = new fabric.Group([
        //     canvas_fabr.item(0).clone(),
        //     canvas_fabr.item(1).clone(),
        //     canvas_fabr.item(2).clone()
        //   ]);
          
        //   // remove all objects and re-render
        //   canvas_fabr.clear().renderAll();
          
        //   // add group onto canvas
        //   canvas_fabr.add(group);

       
    })

    // metrics.myMetrics.width
   
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
    $('#' + font_id + "_" + canvas.id).addClass('selected_font')
    canvas_ids_dict[canvas.id]['active_font'] = font_id;
    
        populate_canvas_for_word_letter2(canvas, canvas_ids_dict[canvas.id]['word'], img, letter, font_val, canvas_ids_dict[canvas.id]['font_color'], canvas_ids_dict[canvas.id]['back_color'])
   
    

}


function populate_canvas_for_word_letter2(canvas_fabr, word, img_obj, letter, font_val, font_col, back_col) {
   

    
    canvas_fabr.clear();
    canvas_fabr.backgroundColor = "#"+back_col

    var word_width = getMetrics(word,'100px', font_val)
    console.log("WORD METRICS ALLLLLLLLLL")
    console.log(word_width)
    console.log(word_width.myMetrics.width.width)
    var word_width_val = word_width.myMetrics.width.width;
    console.log(word_width_val)
    word_width_val = word_width_val.substring(0, word_width_val.length - 2);
    word_width_val = parseInt(word_width_val);
    // alert("hi " + word_width)
    var  pos_left = (653 - word_width_val)/2.0 - 20
    if (pos_left < 0)
        pos_left = 0;


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
        top:60,
        left:pos_left,
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
            left: pos_left + text_1.width,
            top : 40 + image_height //dynamically
        })
            // myImg.scaleToWidth(text_1.width)
        console.log("LOGGING METRICS")
        var metrics = getMetrics(letter, '100px', font_val)
        
        
        
        console.log(metrics)
        console.log("_______________________________________________LOGGING METRICS uP")

       
    
       
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
            top:60,
            left:pos_left + text_1.width + img_width, //+ 80,
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
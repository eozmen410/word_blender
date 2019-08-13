$(document).ready(function(){
	console.log("word_blend_input page ready")
    populate_concepts(all_concepts)
    append_add_word_btn()
    append_done_btn()
    
})

var word_inputs = []
var concept_choice = ""

function populate_concepts(all_concepts) {
    for (var k in all_concepts){
        console.log(all_concepts[k])
        let concept_name = all_concepts[k]['concept_name']
        let user = all_concepts[k]['user']
        let concept_id = all_concepts[k]['id']
        var c_div = $("<div>")
        $(c_div).addClass('concept_div')
        $(c_div).html(concept_name)
        $(c_div).data('id', concept_id)
        $(c_div).attr('id', concept_id)
        $(c_div).data('user', user)
        $(c_div).click(function(){
            let id =$(this).attr("id")
            console.log($(this).attr("id"))
            console.log(all_concepts[id])
            update_concept_choice(id)
        })
        $("#concepts").append(c_div)
    }
}


function append_add_word_btn(){
    var btn = $("<button>")
    $(btn).append("<span class='glyphicon glyphicon-plus'></span>")
    $(btn).click(function(){
        console.log('clicked add word')
        let input = $("#word_in").val()
        if (!word_inputs.includes(input))
            word_inputs.push(input)
        display_added_words(word_inputs)
        $("#word_in").val("")
    })
    $("#word_in_div").append(btn)
}

function append_done_btn() {
    // var get_string = 
    var form = $("<form id='word_blender_form'>");
    $(form).attr('action', '../word_blender/');
    $(form).attr('method', 'post');
    var btn = $("<button>")
    // $(btn).addClass("btn btn-secondary");
    $(btn).html("<span class='glyphicon glyphicon-check'</span>");
    $(btn).click(function(){
        console.log('clicked butn')
        $("#word_blender_form").attr('action',  '../word_blender/' +construct_get_str())
    })
    // $(btn).attr('title', route);
    $(form).append(btn);
    $(form).css('display', 'inline-block')
    // $("#forbutt").append(form)
    $("#done_btn_div").append(form)
}

function construct_get_str() {
    user = all_concepts[concept_choice]['user']
    concept_name =  all_concepts[concept_choice]['concept_name']
    concept_id =  concept_choice
    words = word_inputs.join('+')
    let get_str = user + '_' + concept_id + '_' + concept_name + '_' + words
    console.log(get_str)
    return get_str
}


function display_added_words(arr) {
    $("#added_words").empty()
    for(var i in arr) {
        $("#added_words").append( "<span> " +arr[i] + "&nbsp &nbsp </span>")
    }
}

function update_concept_choice(id) {
    $("#" + concept_choice).removeClass('selected')
    concept_choice = id
    $("#"+ concept_choice).addClass('selected')
    $("#selected_concept").html(all_concepts[id]['concept_name'])
}
function get_input(){
    console.log('getting input')
}


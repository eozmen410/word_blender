var state = 'on';

function hide(){
    var image = document.getElementById('hide');
    if(state=='on'){
        image.src="../static/images/WordsInspire_Dark.jpg";
        state = 'off';
        console.log('off');
    }
    else{
        image.src="../static/images/WordsInspire_Light.jpg"
        state = 'on';
        console.log('on');
    }
    
}



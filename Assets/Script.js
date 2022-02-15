var slider = 1;
setInterval(function(){
    document.getElementById('radio' + slider).checked = true;
    slider++;

    if(slider > 3){
        slider = 1;
    }
}, 5000);
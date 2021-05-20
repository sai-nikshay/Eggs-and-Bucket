$(document).on('mousemove',function(e){

 basket.css('left',e.pageX);
});
function egg_down(egg){
    egg_current_position=parseInt(egg.css('top'))
    egg.css('top',egg_current_position+speed)
    
}
function egg_hit_floor(egg){
    if(collision(egg,floor)){
        show_break(egg);
        life--;
        life_span.text(life);
        return true;
    }
    return false;
}
function egg_hit_basket(egg){
    if(collision(egg,basket)){
        egg_top=parseInt(egg.css('top'));
        if(egg_top<basket_top){
            score++;
            if(score%10===0 && speed<max_speed)
            speed=speed+2;
            score_span.text(score);
            score_1.text(score);
            return true;
        }
        
    }
    return false;
}
function egg_initial_pos(egg){
    egg.css('top',egg_initial_position)
}
function show_break(egg){
    bullseye_num=egg.data('bullseye');
    console.log(bullseye_num);
    $("#bullseye"+bullseye_num).show();
    setTimeout(function(){
        $("#bullseye"+bullseye_num).hide();
    },1000)

}
restart.click(function () {
    location.reload();
});
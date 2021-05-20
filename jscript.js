
$(function(){
    
    game_anim=function(){
        if(egg_hit_floor(egg1) || egg_hit_basket(egg1)){
            egg_initial_pos(egg1);
        }
        else{
        egg_down(egg1);
        }
        setTimeout(function(){
            if(egg_hit_floor(egg2) || egg_hit_basket(egg2)){
                egg_initial_pos(egg2);
            }
            else{
            egg_down(egg2);
            }
        },800)
        setTimeout(function(){
            if(egg_hit_floor(egg3) || egg_hit_basket(egg3)){
                egg_initial_pos(egg3);
            }
            else{
            egg_down(egg3);
            }
        },1600)
        
        if(life>0){
        game_anim_id=requestAnimationFrame(game_anim);
        }
        else{
        
        cancelAnimationFrame(game_anim_id);
        restart.slideDown();
       
        }
    }
    game_anim_id=requestAnimationFrame(game_anim);
});
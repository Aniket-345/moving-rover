canvas=document.getElementById("my_canvas");
ctx= canvas.getContext("2d");



rover_width=100;
rovar_height=90;

rover_x=10;
rover_y=10;

nasa_mars_images=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];

random_number=Math.floor(Math.random()*4);

background_image=nasa_mars_images[random_number];
rover_image="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=upload_background();
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=upload_rover();
    rover_imgTag.src=rover_image;
}

function upload_background(){
 ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function upload_rover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rovar_height);

}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    Key_pressed=e.keyCode;
    console.log(Key_pressed);
    console.log(e);
    if(Key_pressed== "38"){
    up();
    console.log("up");
    }
    if(Key_pressed== "40"){
        down();
        console.log("down");
    }
    if(Key_pressed== "37"){
        left();
        console.log("left");
    }
    if(Key_pressed== "39"){
        right();
        console.log("right");
    }

}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        upload_background();
        upload_rover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        upload_background();
        upload_rover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        upload_background();
        upload_rover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        upload_background();
        upload_rover();
    }
}

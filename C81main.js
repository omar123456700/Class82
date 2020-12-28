
var mouseEvent="empty";
var lastposition_x , lastposition_y;
canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");
color="aqua";
width_of_line=1; 
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
mouseEvent="mouseDown";     
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
currentmouse_x = e.clientX - canvas.offsetLeft;
currentmouse_y = e.clientY - canvas.offsetTop;
if(mouseEvent=="mouseDown")
{ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
console.log("Last position of x and y coordinates = ");
console.log("x = " + lastposition_x + "y = " + lastposition_y);
ctx.moveTo(lastposition_x, lastposition_y); 
console.log("Current position of x and y coordinates = ");
console.log("x = " + currentmouse_x + "y = " + currentmouse_y);
 ctx.lineTo(currentmouse_x, currentmouse_y);
 ctx.stroke(); 
}
lastposition_x=currentmouse_x;
lastposition_y=currentmouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp";  
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseLeave";  
}
function clear1()
{
    console.log("enteredtoclear")
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function setup(){
canvas=createCanvas(400,300);
canvas.position(435,200);
chimera=createCapture(VIDEO);
chimera.hide();
tint_color="";
}

function apply_filter(){
    tint_color=document.getElementById("color").value;
}

function draw(){
image(chimera,0,0,400,300);
tint(tint_color);
fill(0,150,255);
circle(25,25,50);
fill(0,150,255);
circle(375,25,50);
fill(0,150,255);
circle(375,275,50);
fill(0,150,255);
circle(25,275,50);


fill(0,255,0);
rect(0,50,50,200)
fill(0,255,0);
rect(50,0,300,50)
fill(0,255,0);
rect(350,50,50,200)
fill(0,255,0);
rect(50,250,300,50)
}

function take_snapshot(){
    save("thing.png");
}
var button1 = document.getElementById("content-btn-1");
var button2 = document.getElementById("content-btn-2");
var button3 = document.getElementById("content-btn-3");
var content1 = document.getElementById("content-1");
var content2 = document.getElementById("content-2");
var content3 = document.getElementById("content-3");

//I am creating a function for each button on click event but I know there is a better way to do this. Just haven't thought of it yet.


function changeContentBtn1(){
    if (content1.className == "col-md-8 pb-2 px-4 py-5 hide") {
        content1.className = "col-md-8 pb-2 px-4 py-5";
        content2.className = "col-md-8 pb-2 px-4 py-5 hide";
        content3.className = "col-md-8 pb-2 px-4 py-5 hide";
    }
}

function changeContentBtn2() {
    if (content2.className == "col-md-8 pb-2 px-4 py-5 hide") {
        content2.className = "col-md-8 pb-2 px-4 py-5";
        content1.className = "col-md-8 pb-2 px-4 py-5 hide";
        content3.className = "col-md-8 pb-2 px-4 py-5 hide";
    }    
}

function changeContentBtn3() {
    if (content3.className == "col-md-8 pb-2 px-4 py-5 hide") {
        content3.className = "col-md-8 pb-2 px-4 py-5";
        content2.className = "col-md-8 pb-2 px-4 py-5 hide";
        content1.className = "col-md-8 pb-2 px-4 py-5 hide";
    }    
}
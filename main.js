// document.getElementById("body1").addEventListener("scroll", abc);
function abc() {
    var tag1=document.getElementById("na1");
    var tag2=document.getElementById("na2");
    var tag3=document.getElementById("na3");
    var tag4=document.getElementById("na4");
    var tag5=document.getElementById("na5");
    var tag=document.getElementsByClassName("active")
    if(scrollY>0){
        document.getElementById("headerId").style.transition = "0.6s";
        document.getElementById("headerId").style.backgroundColor = "red";
        tag1.style.setProperty('--tagAfterBackColor','white');
        tag2.style.setProperty('--tagAfterBackColor','white');
        tag3.style.setProperty('--tagAfterBackColor','white');
        tag4.style.setProperty('--tagAfterBackColor','white');
        tag5.style.setProperty('--tagAfterBackColor','white');
        tag.style.setProperty('--tagAfterBackColor','white');
    }
    else{
        document.getElementById("headerId").style.backgroundColor = "transparent";
        tag1.style.setProperty('--tagAfterBackColor','red');
        tag2.style.setProperty('--tagAfterBackColor','red');
        tag3.style.setProperty('--tagAfterBackColor','red');
        tag4.style.setProperty('--tagAfterBackColor','red');
        tag5.style.setProperty('--tagAfterBackColor','red');
        tag.style.setProperty('--tagAfterBackColor','red');
    }
}
// console.log(scrollY);
// function def(){
//     document.getElementById("main").style.backgroundColor="white";
// }
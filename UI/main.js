<<<<<<< HEAD
window.onload = function(){
    var mRequest = document.querySelector("#mtn-btn");
    var rRequest = document.querySelector("#rep-btn");
    var display = document.querySelector(".display");
    var mtext = document.querySelector("#mtn-txt");
    var rtext = document.querySelector("#rep-txt");

    rRequest.addEventListener("click",rCast,false);
    mRequest.addEventListener("click",mCast,false);

    function rCast(){
        var message;
        message = rtext.value+" (repair request)";
        display.innerHTML = message;
    }

    function mCast(){
        var message;
        message = mtext.value+" (maintenance request)";
        display.innerHTML = message;
    }
}
=======
window.onload = function(){
    var mRequest = document.querySelector("#mtn-btn");
    var rRequest = document.querySelector("#rep-btn");
    var display = document.querySelector(".display");
    var mtext = document.querySelector("#mtn-txt");
    var rtext = document.querySelector("#rep-txt");

    rRequest.addEventListener("click",rCast,false);
    mRequest.addEventListener("click",mCast,false);

    function rCast(){
        var message;
        message = rtext.value+" (repair request)";
        display.innerHTML = message;
    }

    function mCast(){
        var message;
        message = mtext.value+" (maintenance request)";
        display.innerHTML = message;
    }
}
>>>>>>> gh-pages

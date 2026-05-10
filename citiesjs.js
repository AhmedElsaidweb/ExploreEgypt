 function openpage(){
    let city=document.getElementById('x').value;
    let frame=document.getElementById('fram');
    if(city=="القاهرة"){
        frame.src="cairo1.html";
    }

    else if(city=="الإسكندرية"){
        frame.src="Alex1.html";
    }

     else if(city=="البحر الأحمر"){
        frame.src="redsea1.html";
    }

    else if(city=="الجيزة"){
        frame.src="Giza1.html";
    }

    else if(city=="أسوان"){
        frame.src="Aswan1.html";
    }

    else if(city=="الأقصر"){
        frame.src="Aoxur1.html";
    }

    else if(city=="الفيوم"){
        frame.src="fayom1.html";
    }

    // else {
    //     document.getElementById('s')
    // }
}

function press(value){
    document.getElementById("x").value=value;
}
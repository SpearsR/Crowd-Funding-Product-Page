el = document.getElementById("check1").style.display = 'none';
el = document.getElementById("check2").style.display = 'none';
el = document.getElementById("check3").style.display = 'none';

function showProjects(){
    let main = document.getElementById('hide-this');
    let modal = document.getElementById('showed-projs');
    modal.style.display = 'block';
    main.style.display = 'none';
}

function closeModal(){
    let main = document.getElementById('hide-this');
    let modal = document.getElementById('showed-projs');
    modal.style.display = 'none';
    main.style.display = 'block';
}

function checkBox(string){
    console.log(string);
    el = document.getElementById(string);
    if(el.style.display === 'none'){
        el.style.display = 'block';
    }

    else{
        el.style.display = 'none';
    }
}
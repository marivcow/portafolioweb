let botonmodal = document.getElementById('botonmodal');
let vmodal = document.getElementById('vmodal');
let ocultobtn6 = document.getElementById('ocultobtn6');

botonmodal.addEventListener('click', toggleH4);

function toggleH4() {
    vmodal.classList.add('vmodal-show');

    ocultobtn6.addEventListener('click', toggleH5);
}

    function toggleH5(){
        vmodal.classList.remove('vmodal-show');

}

let botonmodal2 = document.getElementById('botonmodal2');
let vmodal2 = document.getElementById('vmodal2');
let ocultobtn7 = document.getElementById('ocultobtn7');

botonmodal2.addEventListener('click', toggleH6);

function toggleH6() {
    vmodal2.classList.add('vmodal-show2');

    ocultobtn7.addEventListener('click', toggleH7);
}

    function toggleH7(){
        vmodal2.classList.remove('vmodal-show2');

}

let botonmodal3 = document.getElementById('botonmodal3');
let vmodal3 = document.getElementById('vmodal3');
let ocultobtn8 = document.getElementById('ocultobtn8');

botonmodal3.addEventListener('click', toggleH8);

function toggleH8() {
    vmodal3.classList.add('vmodal-show3');

    ocultobtn8.addEventListener('click', toggleH9);
}

    function toggleH9(){
        vmodal3.classList.remove('vmodal-show3');

}

let botonmodal4 = document.getElementById('botonmodal4');
let vmodal4 = document.getElementById('vmodal4');
let ocultobtn9 = document.getElementById('ocultobtn9');

botonmodal4.addEventListener('click', toggleH10);

function toggleH10() {
    vmodal4.classList.add('vmodal-show4');

    ocultobtn9.addEventListener('click', toggleH11);
}

    function toggleH11(){
        vmodal4.classList.remove('vmodal-show4');

}

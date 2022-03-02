var back = document.querySelector('.back');
var array = [];


load()
function load(){
    let cont = document.querySelectorAll('.button_c');
    let des = document.querySelectorAll('.descricao-produto');
    let apag = document.querySelectorAll('.excluir');
    let check = document.querySelectorAll('.check');
    let editar = document.querySelectorAll('.editar');
    let p = document.querySelector('.p');

    for(let i = 0; i < cont.length; i++) {
        des[i].innerText = array[i];
        apag[i].addEventListener('click', function() {
            back.removeChild(cont[i]);
            array.splice(i, 1);
            let container = document.querySelectorAll('.button_c');
            if(container.length == 0) {
                p.style.display = 'block';
            }
        })
        check[i].addEventListener('click', function() {
            check[i].classList.toggle('check_active');
        })
        editar[i].addEventListener('click', function() {
            array[i] = prompt('Digite o nome da tarefa');
            des[i].innerText = array[i];
        })
    }
    if(cont.length > 0) {
        p.style.display = 'none';
    }
}
function add() {
    var nome = document.getElementById('Nome');
    if(nome.value.length <= 0){
        alert('Digite o nome do produto')
    }else{
        array.push(nome.value);
        back.innerHTML += '<div class="button_c"><span class="container-produtos"><div class="desc"><div class="descricao-produto"></div><div class="excluir"></div><div class="editar"></div><div class="check "></div></div></span></div>';
        nome.value = '';
        nome.focus();
        load()
    }
}

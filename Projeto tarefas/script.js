

let input = document.getElementById('input');
let button = document.getElementById('button');
let main = document.getElementById('main');
let contador = 0

function addTarefa() {

    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== undefined) && (valorInput !== null)) {

        ++contador

        let content = `<div id='` + contador + `' class="item" style="display:flex;justify-content: space-between;flex-direction: row;flex-wrap: nowrap;align-content: center;align-items: center; margin-left:50%;transform:translate(-50%);" >
        <div id='img` + contador + `' class="mdi mdi-circle-outline" style="cursor:pointer;" onclick="tarefa(` + contador + `)"></div>
        `+ valorInput + `
        <button id="delete" onclick='deletar(`+ contador + `)'>Delete</button>
        </div>`

        main.innerHTML += content

    }

}

function deletar(id) {
    var deletar = document.getElementById(id);
    deletar.remove()
}

function tarefa(id) {

    var click = document.getElementById(id);
    var classe = click.getAttribute('class');
    var div = document.getElementById('img' + id);

    if (classe == 'item') {
        click.classList.add('clicado');
        console.log(div)
        div.classList.add('mdi-checkbox-marked-circle')
        div.classList.remove('mdi-circle-outline')
        click.parentNode.append(click)
    }
    else {
        click.classList.remove('clicado');
        div.classList.remove('mdi-checkbox-marked-circle')
        div.classList.add('mdi-circle-outline')
    }
}
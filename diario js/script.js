function addNote() {

    var titulo = document.getElementById('titulo').value;
    var texto = document.getElementById('texto').value;
    var data = document.getElementById('data').value;

    var box = ` <div class="note" id="note">
    <div id='nulle'>
    <p style='margin-left:90%;color:red;' id='botao' onclick='deletar(id)'>X</p>
    <div class='date'>`+ data + `</div>
<div class="title"><p>`+ titulo + `</p></div>
<div class="text" id='text'>`+ texto + `</div>
<button class="mais" onclick="adicionar(id)"> + </button>   
</div>
</div>
`
    var boxMaior = `
   
    <p style='margin-left:90%;color:red;' id='botao2' onclick='deletar(id)'>X</p>`

    if (titulo == '' || titulo == null || titulo == undefined) {

        alert('Digite um titulo valido!');

    } else if (texto == '' || texto == null || texto == undefined) {

        alert('Digite um texto valido!');

    } else {
        var flex = document.getElementById('flex');

        flex.innerHTML += box
    }
}
function adicionar(id) {
    var note = document.getElementById('note')
    var text = document.getElementById('text')
    var open = document.getElementById('open')

    if (open == undefined) {
        note.id = 'open';
        text.classList.remove('text')
        text.classList.add('textopen')
    } else {
        text.classList.add('text')
        text.classList.remove('textopen')
        open.id = 'note'
    }

}


function deletar(id) {
    if (open == undefined) {
    var open = document.getElementById('open')
    open.remove()}else{
        var note = document.getElementById('note')
        note.remove()
    }
}

function deletarG(id) {
}

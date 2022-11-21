

function addNumber(number) {

    var input = document.getElementById('result').value += number


}

function clean() {
    var input = document.getElementById('result')

    input.value = ""

}


function result() {
    var input = document.getElementById('result').value

    if(input){
    document.getElementById('result').value = eval(input)}
}

function corrigir() {
    var input = document.getElementById('result').value
    document.getElementById('result').value = input.substring(0, input.length -1)
}
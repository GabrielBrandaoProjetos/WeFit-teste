//Muda a direção do menu e seta um espaçamento.
const btnGroupVertical = document.querySelector('.btn-group-vertical')
btnGroupVertical.style.flexDirection = "row";
btnGroupVertical.style.gap = "5px";

//Permite que os botões se ajustem ao seu tamanho e set borda em todos
const btnGroupVertical_btn = document.querySelectorAll('.btn-group-vertical > .btn')
btnGroupVertical_btn.forEach(el => {
  el.style.width = "auto"
  el.style.borderRadius = "0.25rem"
})

//Seta a cor de fundo, cor do texto e alinha a direita
const jumbotron = document.querySelector('.jumbotron')
jumbotron.style.backgroundColor = "#6c757d"
jumbotron.style.color = "#fff"
jumbotron.style.textAlign = "right"

//Seta a cor de fundo e borda
const button_learnMore = document.querySelector('[role="button"]')
button_learnMore.style.backgroundColor = "#27a844"
button_learnMore.style.borderColor = "#27a844"

//Seta a cor de fundo e borda do terceiro filho do elemento
const cardBody = document.querySelectorAll('.card-body')[1].children[2]
cardBody.style.backgroundColor = "#27a844"
cardBody.style.borderColor = "#27a844"

//Remove a classe "active" do primeiro elemento
const listGroupItem = document.querySelectorAll('.list-group-item')[0]
listGroupItem.classList.remove("active")

//Insere dois novos elementos
const listGroup = document.querySelector('.list-group')
listGroup.innerHTML += '<li class="list-group-item active">Quarto item</li>'
listGroup.innerHTML += '<li class="list-group-item">Quinto item</li>'

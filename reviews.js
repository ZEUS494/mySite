// Создание константных переменных
const name1 = document.getElementById('name')
const email = document.getElementById('email')
const tel = document.getElementById('tel')
const message = document.getElementById('message')
const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    const name2 = document.getElementById('name').value
    const message2 = document.getElementById('message').value
    //Создаем новый элемент
    const review = document.createElement('div')
    review.className = 'review'
    review.innerHTML = `<div class="row"><div class="col"><div class="reviewImage"></div></div><div class="col"><h1>${name2}</h1></div></div><div class="row"><p>${message2}</p></div>`;
    document.getElementById('rs').appendChild(review)
    name1.value = ''
    email.value = ''
    tel.value = ''
    message.value = ''
    alert('Спасибо за ваше мнение!')
})

function createCircles(){
    const colors = ['red', 'blue', 'yellow', 'pink']
    for (let i = 0; i < 50; i++){
        createCirlce(colors)
    }
}

function createCirlce(colors){
    const dot = document.createElement('div')
    dot.classList.add('circle')
    const size = Math.random() * 30 + 10
    const posX = Math.random() * window.innerWidth
    const delay = Math.random() * 5
    const duration = Math.random() * 10 + 5
    const color = colors[Math.floor(Math.random() * colors.length)]
    //Применяем параметры
    dot.style.width = `${size}px`
    dot.style.height = `${size}px`
    dot.style.left = `${posX}px`
    dot.style.top = `-${size}px`
    dot.style.animationDuration = `${duration}s`
    dot.style.animationDelay = `${delay}s`
    dot.style.backgroundColor = color
    //Добавляем круг на сайт
    document.body.appendChild(dot)
    // Удаляем кружочек после завершения анимации
    dot.addEventListener('animationend', function(){
        this.remove()
        createCirlce(colors)
    })
}
// Запускаем при загрузке и изменении окна
window.onload = createCircles
window.onresize = function(){
    document.querySelectorAll('.circle').forEach(dot => dot.remove())
    createCircles()
}
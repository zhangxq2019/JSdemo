var time = 0
var minute = 0
var second = 0
var canUse = true
var timer = null
number = document.querySelector('.number')
start = document.querySelector('.start')
stop = document.querySelector('.stop')
cancel = document.querySelector('.cancel')
start.addEventListener('click',function(){
    if(canUse) {
        timer = setInterval(() => {
            time++
            second = time%60
            minute = Math.floor(time/60)
            second = second < 10 ? ('0' + second):second
            minute = minute < 10 ? ('0' + minute):minute
            number.textContent = minute + ':'+ second
        }, 1000)
        canUse = false
    }
})
stop.addEventListener('click',function (){
    clearTimeout(timer)
})
cancel.addEventListener('click',function (){
    clearTimeout(timer)
    number.textContent = '00:00'
})

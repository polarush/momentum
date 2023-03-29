const dateElement = document.querySelector('.date')
const timeElement = document.querySelector('.time')
const greetingElement = document.querySelector('.greeting')

const date = new Date();
const options = {weekday: 'long', month: 'long', day: 'numeric'};
const currentDate = date.toLocaleDateString('ru', options);

function startTime() {
    let tm = new Date();
    let h = tm.getHours();
    let m = tm.getMinutes();
    let s = tm.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    timeElement.textContent = h+":"+m+":"+s;
    t = setTimeout('startTime()',500);
    d = setTimeout('getDate()',0);
    g = setTimeout('greetings()',0);
}

function checkTime(i) {
    if (i < 10) i = "0" + i; 
    return i;
}

function getDate() {
    dateElement.textContent = currentDate
}


startTime();

function greetings() {
    
    let hour = new Date().getHours();
    let greeting;
    if (hour >= 6 && hour < 12)
        greeting = "Доброе утро, ";
    else if (hour >= 12 && hour < 18)
        greeting = "Добрый день, ";
    else if (hour >= 18 && hour < 24)
        greeting = "Добрый вечер, ";
    else if (hour >= 0 && hour < 6)
        greeting = "Доброй ночи, ";
    
    greetingElement.textContent = greeting
    
}

document.addEventListener('DOMContentLoaded', function() {
    let inputGreetings = document.querySelector('.name');
    inputGreetings.textContent = ''
    if (inputGreetings) {
        inputGreetings.value = localStorage.getItem("inputGreetings") || "";
  
        inputGreetings.addEventListener('input', function() {
        localStorage.setItem("inputGreetings", this.value);
        inputGreetings.textContent = this.value
      });
    }
  });

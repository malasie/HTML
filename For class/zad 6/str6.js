window.setInterval(function () {
    const date = new Date();
    const hours = document.querySelector('.hours');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360}deg)`;
    const minutes = document.querySelector('.minutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.querySelector('.seconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

    gmt0=date.getTimezoneOffset();
    const date2= new Date(date.getTime()+(gmt0*60*1000));
    const hours2 = document.querySelector('.hours2');
    hours2.style.transform = `rotate(${(date2.getHours()) / 12 * 360}deg)`;
    const minutes2 = document.querySelector('.minutes2');
    minutes2.style.transform = `rotate(${date2.getMinutes() / 60 * 360}deg)`;
    const seconds2 = document.querySelector('.seconds2');
    seconds2.style.transform = `rotate(${date2.getSeconds() / 60 * 360}deg)`;

    const hours3 = document.querySelector('.hours3');
    hours3.style.transform = `rotate(${(date2.getHours()+9) / 12 * 360}deg)`;
    const minutes3 = document.querySelector('.minutes3');
    minutes3.style.transform = `rotate(${date2.getMinutes() / 60 * 360}deg)`;
    const seconds3 = document.querySelector('.seconds3');
    seconds3.style.transform = `rotate(${date2.getSeconds() / 60 * 360}deg)`;

    const hours4 = document.querySelector('.hours4');
    hours4.style.transform = `rotate(${(date2.getHours()-4) / 12 * 360}deg)`;
    const minutes4 = document.querySelector('.minutes4');
    minutes4.style.transform = `rotate(${date2.getMinutes() / 60 * 360}deg)`;
    const seconds4 = document.querySelector('.seconds4');
    seconds4.style.transform = `rotate(${date2.getSeconds() / 60 * 360}deg)`;

    const hours5 = document.querySelector('.hours5');
    hours5.style.transform = `rotate(${(date2.getHours()-7) / 12 * 360}deg)`;
    const minutes5 = document.querySelector('.minutes5');
    minutes5.style.transform = `rotate(${date2.getMinutes() / 60 * 360}deg)`;
    const seconds5 = document.querySelector('.seconds5');
    seconds5.style.transform = `rotate(${date2.getSeconds() / 60 * 360}deg)`;

    const alarmHours = date2.getHours()+9;
    const alarmMinutes = date2.getMinutes();
    const alarmSeconds = date2.getSeconds();

    const sound = new Audio('sound.mp3');

    if(alarmHours == 23 && alarmMinutes == 59 && alarmSeconds == 59){
        sound.play();
        alert("IT'S TIME!!")
    }

}, 1000);
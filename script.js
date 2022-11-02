let faqContant = document.getElementById('faq-Contant');
let faqContant1 = document.getElementById('faq-Contant1');
let faqContant2 = document.getElementById('faq-Contant2');
let faqContant3 = document.getElementById('faq-Contant3');
let faqContant4 = document.getElementById('faq-Contant4');
let faqContant5 = document.getElementById('faq-Contant5');

let icon = document.getElementById('faq-icon');
let icon1 = document.getElementById('faq-icon1');
let icon2 = document.getElementById('faq-icon2');
let icon3 = document.getElementById('faq-icon3');
let icon4 = document.getElementById('faq-icon4');
let icon5 = document.getElementById('faq-icon5');

let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');

btn.addEventListener('click',() => {
    if (faqContant.getAttribute('class') === 'faqContant') {
        faqContant.setAttribute('class','faqContant-open');
        icon.style.transform = 'rotate(40deg)';
    } else {
        faqContant.setAttribute('class','faqContant');
        icon.style.transform = 'rotate(-5deg)';
    }
});
btn1.addEventListener('click',() => {
    if (faqContant1.getAttribute('class') === 'faqContant') {
        faqContant1.setAttribute('class','faqContant-open');
        icon1.style.transform = 'rotate(40deg)';
    } else {
        faqContant1.setAttribute('class','faqContant');
        icon1.style.transform = 'rotate(-5deg)';
    }
});
btn2.addEventListener('click',() => {
    if (faqContant2.getAttribute('class') === 'faqContant') {
        faqContant2.setAttribute('class','faqContant-open');
        icon2.style.transform = 'rotate(40deg)';
    } else {
        faqContant2.setAttribute('class','faqContant');
        icon2.style.transform = 'rotate(-5deg)';
    }
});
btn3.addEventListener('click',() => {
    if (faqContant3.getAttribute('class') === 'faqContant') {
        faqContant3.setAttribute('class','faqContant-open');
        icon3.style.transform = 'rotate(40deg)';
    } else {
        faqContant3.setAttribute('class','faqContant');
        icon3.style.transform = 'rotate(-5deg)';
    }
});
btn4.addEventListener('click',() => {
    if (faqContant4.getAttribute('class') === 'faqContant') {
        faqContant4.setAttribute('class','faqContant-open');
        icon4.style.transform = 'rotate(40deg)';
    } else {
        faqContant4.setAttribute('class','faqContant');
        icon4.style.transform = 'rotate(-5deg)';
    }
});
btn5.addEventListener('click',() => {
    if (faqContant5.getAttribute('class') === 'faqContant') {
        faqContant5.setAttribute('class','faqContant-open');
        icon5.style.transform = 'rotate(40deg)';
    } else {
        faqContant5.setAttribute('class','faqContant');
        icon5.style.transform = 'rotate(-5deg)';
    }
});
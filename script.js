const time01 = document.getElementById('time01');
const time02 = document.getElementById('time02');
const btn = document.getElementById('btn');
const balloon = document.getElementById('balloon');
const container = document.getElementById('countContainer');
let intro = document.querySelector('.intro');
let logoImg = document.querySelector('.logoImg');


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoImg.classList.add('active');

    }, 400);


    setTimeout(() => {
        logoImg.classList.remove('active');
        logoImg.classList.add('fade');
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh';

    }, 3000);
})



// gerar um numero aleatorio entre min e max
function getRandomDecimal(min, max) {
    return Math.random() * (max - min) + min;
}

// formatar um numero com duas casas decimais
function formatDecimal(number) {
    return number.toFixed(2);
}

// executar o contador
function runDecimalCounter() {
    const valorInicial = 1; // valor inicial
    const valorFinal = getRandomDecimal(1.50, 3.00); // valor final aleatório
    const passo = 0.05; // passa (0.01 para manter duas casas decimais)

    let valorAtual = valorInicial;

    const intervalo = setInterval(() => {
            time01.innerHTML = (formatDecimal(valorAtual) + "X");
            setTimeout(() =>{
                balloon.classList.add('active');
            }, 500)

            setTimeout(() =>{
                balloon.classList.add('active02');
            }, 1500)

            setTimeout(() =>{
                balloon.classList.add('active03');

            }, 2500)


            setTimeout(() => {
                time01.innerHTML = "";
                balloon.classList.remove('active');
                balloon.classList.remove('active02');
                balloon.classList.remove('active03');
            }, (valorFinal) + 9800)

        if (valorAtual >= valorFinal) {
            clearInterval(intervalo);
            container.style.display = 'block'
            time02.innerHTML = `MULTIPLICADOR FINAL: ${(valorFinal.toFixed(2))}X`;
        }

        valorAtual += passo;
    }, 100); // intervalo de 100ms entre cada incremento
}

let countdown = 15;

let countdownTimer = null;

const atualizarBotao = () => {
    countdown--;
    btn.innerText = countdown;
    if (countdown === 0) {
        finishCountdownTimer();
    }
}

const finishCountdownTimer = () => {
    clearInterval(countdownTimer);
    btn.innerText = "";
    btn.disabled = false;
    countdown = 15;
}

btn.addEventListener('click', function(e){
    e.preventDefault;
    btn.disabled = true;
    runDecimalCounter();

    countdownTimer = setInterval(atualizarBotao, 1000)
});

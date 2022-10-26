const btn = document.querySelector(".dice");
const text = document.querySelector(".main-text");
const header = document.querySelector(".header-text");

const susApi = 	"https://api.adviceslip.com/advice";

const fetchNewAdvice = async () => {
    const response = await fetch(susApi);
    const advice = await response.json();
    return advice
};

const renderAdvice = (adviceObj) => {
    const {id, advice} = adviceObj;
    header.textContent = `ADVICE #${id}`;
    text.textContent = advice;
}

const generateNewAdvice  = async () => {
    const data = await fetchNewAdvice()
    const advice = data.slip;

    renderAdvice(advice)
}

window.addEventListener('DOMContentLoaded', ()=> {
    btn.addEventListener('click', generateNewAdvice)
});
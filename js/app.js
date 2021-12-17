window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    console.log('kiong is here')
    let cp = parseFloat(document
        .querySelector("#cp").value);
    let slp = parseFloat(document
        .querySelector("#slp").value);
    let account = parseFloat(document.querySelector('#account').value);
    let risk = parseFloat(document.querySelector('#risk').value);
    let percent = (account * risk) / 100;
    let q = percent / (Math.abs(cp - slp));
    console.log(q);
    let result = document.querySelector("#result");
    result.innerHTML = `<p>lee dhek le teri aukatt<h1>${q}</h1></p>`;
}
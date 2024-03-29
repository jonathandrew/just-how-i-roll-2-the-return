const d6Button = document.querySelector('.d6-roll')
d6Button.onclick = rollD6;
const doubleD6Button1 = document.querySelector('.double-d6-roll-1')
doubleD6Button1.onclick = rollDoubleD6;
const doubleD6Button2 = document.querySelector('.double-d6-roll-2')
doubleD6Button2.onclick = rollDoubleD6;
const d12Button = document.querySelector('.d12-roll')
d12Button.onclick = rollD12;
const d20Button = document.querySelector('.d20-roll')
d20Button.onclick = rollD20;
const d8Button = document.querySelector('.d8-roll')
d8Button.onclick = undefined;
const d4Button = document.querySelector('.d4-roll')
d4Button.onclick = undefined;
const tripleD6Button1 = document.querySelector('.triple-d6-roll-1')
tripleD6Button1.onclick = undefined;
const tripleD6Button2 = document.querySelector('.triple-d6-roll-2')
tripleD6Button2.onclick = undefined;
const tripleD6Button3 = document.querySelector('.triple-d6-roll-3')
tripleD6Button3.onclick = undefined;




function rollD6() {
    const randomFloatUnderOne = Math.random();
    const randomFloat = randomFloatUnderOne * 6;
    const roll = Math.ceil(randomFloat);

    const newSrc = `./images/d6/${roll}.png`;
    const rollImage = document.querySelector('.d6-roll');
    rollImage.src = newSrc;
}

function rollD12() {
    const randomFloatUnderOne = Math.random();
    const randomFloat = randomFloatUnderOne * 12;
    const roll = Math.ceil(randomFloat);

    const newSrc = `./images/numbers/${roll}.png`;
    const rollImage = document.querySelector('.d12-roll');
    rollImage.src = newSrc;
}

function rollD20() {
    const randomFloatUnderOne = Math.random();
    const randomFloat = randomFloatUnderOne * 20;
    const roll = Math.ceil(randomFloat);

    const newSrc = `./images/numbers/${roll}.png`;
    const rollImage = document.querySelector('.d20-roll');
    rollImage.src = newSrc;
}

function rollDoubleD6() {
    const randomFloatUnderOne1 = Math.random();
    const randomFloat1 = randomFloatUnderOne1 * 6;
    const roll1 = Math.ceil(randomFloat1);

    const randomFloatUnderOne2 = Math.random();
    const randomFloat2 = randomFloatUnderOne2 * 6;
    const roll2 = Math.ceil(randomFloat2);

    const newSrc1 = `./images/d6/${roll1}.png`;
    const newSrc2 = `./images/d6/${roll2}.png`;
    const rollImage1 = document.querySelector('.double-d6-roll-1');
    const rollImage2 = document.querySelector('.double-d6-roll-2');
    rollImage1.src = newSrc1;
    rollImage2.src = newSrc2;
}
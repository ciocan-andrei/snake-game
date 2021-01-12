const score = document.querySelector("#points");
export let SNAKE_SPEED = 3;

export function update() {
    score.innerHTML = Number(score.innerHTML) + 1;
    if (score.innerHTML >= 50) SNAKE_SPEED = 10;
    else if (score.innerHTML >= 30) SNAKE_SPEED = 7;
    else if (score.innerHTML >= 15) SNAKE_SPEED = 5;
    else if (score.innerHTML >= 5) SNAKE_SPEED = 4;
    console.log(SNAKE_SPEED);
}

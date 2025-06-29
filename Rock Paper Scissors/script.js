/* const score={
    wins:0,
    losses: 0,
    ties:0
}; */
let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses: 0,
    ties:0
};

updateScoreElement();

/* the above is same as follows
if(!score){ //shortcut for score===null
    score={
    wins:0,
    losses: 0,
    ties:0
    };
}
*/
function pickComputerMove(){
    const randomNumber=Math.random(); // generates a random number between 0 and 1
    let compmove='';
    if(randomNumber>=0 && randomNumber<1/3)
        compmove='rock';
    else if(randomNumber>=1/3 && randomNumber<2/3)
        compmove='paper';
    else if(randomNumber>=2/3 && randomNumber<1)
        compmove='scissors';

    return compmove;
}

let isAutoPlay = false;
let intervalId;  //setInterval() returns a number we can use it to stop the interval

function autoPlay() {
    if(!isAutoPlay) {
        intervalId = setInterval(function() {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 2000);
        isAutoPlay = true;
    }
    else {
        clearInterval(intervalId);
        isAutoPlay = false;
    }

}

document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock');
    } );

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('paper');
    } );
document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('scissors');
    } );

document.body.addEventListener('keydown', (event) =>{
    if(event.key === 'r'){
        playGame('rock');
    }
    else if(event.key === 'p'){
        playGame('paper');
    }
    else if(event.key === 's'){
        playGame('scissors');
    }
});
function playGame(playerMove){
    const compmove=pickComputerMove();

    let result='';
    if(playerMove==='scissors'){
        if(compmove==='rock')
            result='You lost!';
        else if(compmove==='paper')
            result='You won!';
        else if(compmove==='scissors')
            result='Tie!!';
    }

    else if(playerMove==='paper'){
        if(compmove==='rock')
            result='You won!';
        else if(compmove==='paper')
            result='Tie!!';
        else if(compmove==='scissors')
            result='You lost!';

    }

    else{
        if(compmove==='rock')
            result='Tie!!';
        else if(compmove==='paper')
            result='You lost!';
        else if(compmove==='scissors')
            result='You won!';
    }

    if(result==='You won!'){
        score.wins+=1;
    }
    else if(result==='You lost!'){
        score.losses+=1;
    }
    else if(result==='Tie!!'){
        score.ties+=1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    const resultElement = document.querySelector('.js-result');
    resultElement.innerHTML = result;
    resultElement.classList.add('animate');
    setTimeout(() => resultElement.classList.remove('animate'), 300);


    document.querySelector('.js-moves').innerHTML = `You<img class="move-icon" src="${playerMove}.svg">
        <img class="move-icon" src="${compmove}.svg">
        Computer`;

}

function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML= `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
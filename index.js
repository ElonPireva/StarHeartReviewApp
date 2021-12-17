const getStars = document.querySelectorAll('.fa-star');
const getHearts = document.querySelectorAll('.fa-heart');
const getStarScore = document.getElementById('starScore');
const getHeartScore =  document.getElementById('heartScore');

// Loop through getStars Icons
let starCounter = 0;
for(let i = 0; i < getStars.length; i++){
    getStars[i].addEventListener('click', (e) => {
        //check if element has not yellow color
        if(e.target.style.color !== 'yellow'){
            e.target.style.color = 'yellow';
            starCounter++;
            getStarScore.innerHTML = `Yellow Stars: ${starCounter}/5`;
        }
        else {
            e.target.style.color = 'white';
            starCounter--;
            getStarScore.innerHTML = `Yellow Stars: ${starCounter}/5`;
        }
    });
};

// Loop through getHearts Icons
let heartCounter = 0;
for(let i = 0; i < getHearts.length; i++){
    getHearts[i].addEventListener('click', (e) => {
        //check if element has not black color
        if(e.target.style.color !== 'black'){
            e.target.style.color = 'black';
            heartCounter++;
            getHeartScore.innerHTML = `Black Hearts: ${heartCounter}/5`;
        }
        else {
            e.target.style.color = 'white';
            heartCounter--;
            getHeartScore.innerHTML = `Black Hearts: ${heartCounter}/5`;
        }
    });
};
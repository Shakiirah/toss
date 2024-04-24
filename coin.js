const coinIcon = document.getElementById('coin');
const tossBtn = document.getElementById('toss-button');
const result = document.querySelector('.result');

coinIcon.insertAdjacentElement('afterend', result);
tossBtn.addEventListener('click', tossCoinFunction);

function tossCoinFunction() {
    const randomVal = Math.random();
    if (randomVal < 0.5) {
     faceCoin = 'Heads';
    } else {
     faceCoin = 'Tails';
    }

    if (faceCoin === 'Heads') { 
        imageUrl = "https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-200x200.jpg";
    } else {    
        imageUrl = "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg";
    }
    coinIcon.innerHTML = "<img src='" + imageUrl + "' alt='" + faceCoin +"'>'";
    result.textContent = "Result:" + faceCoin;
}

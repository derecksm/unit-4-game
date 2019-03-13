//Variables needed to set up the game
let goalNum
let myNum
let wins = 0
let losses = 0
let isFinished = false 


//Funtion to reset game when it's over
const init = () => {
    isFinished = false
    document.querySelector('#message').textContent = ''
    goalNum = Math.floor(Math.random() * 120) + 1
    document.querySelector('#goalNum').textContent = `Treasure Number: ${goalNum}`
    //Resets players score
    myNum = 0
    document.getElementById('myNum').textContent = `My Number : ${myNum}`

    //Gives buttons 1-3 random numbers when game starts...credit: Quintons Panopto
     document.querySelector('#buttons').innerHTML = ''
     for (let i = 0; i < 4; i++) {
         let btnElem = document.createElement('button')
         btnElem.textContent = '???'
         btnElem.className='numBtn'
        btnElem.setAttribute('data-value', Math.floor(Math.random() * 15) + 1)
        document.querySelector('#buttons').append(btnElem)
    }
}

document.addEventListener('click', e => {
    if (e.target.className === 'numBtn' && isFinished !== true) {
        let buttonVal = parseInt(e.target.dataset.value)    
        myNum += buttonVal
        document.getElementById('myNum').textContent = `My Number : ${myNum}`
        
        if (myNum < goalNum){
            document.querySelector('#message').textContent = 'Keep on diggin!'
            isFinished = false
        }
        else if (myNum === goalNum) {
            wins++
            document.querySelector('#wins').innerHTML = `Wins: ${wins}`
            document.querySelector('#message').textContent = 'Winner Winner Chicken Dinner'
            isFinished = true
        } 
        else  {
            losses++
            document.querySelector('#losses').innerHTML = `Losses: ${losses}`
            document.querySelector('#message').textContent = 'Sorry Chump You Lose'
            isFinished = true
        }
    }
})


init()

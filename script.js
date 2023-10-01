let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let answer = Math.ceil(Math.random()*50);
// let answer = 39;
let no_of_guesses = 0;
let guessed_nums = [];

function play(){
    let user_guess = document.getElementById("guess").value;

    if(user_guess < 1 || user_guess > 50){
        alert("please enter a number between 1 and 50")
    } else {
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
            msg1.textContent = "YOUR GUESS IS TOO LOW";
            msg1.style.color = "red";
            msg2.textContent = "TRY AGAIN";
            msg2.style.color = "red";
            msg2.style.fontSize = "25px";
            // msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " + guessed_nums;
        } else if (user_guess > answer){
            msg1.textContent = "YOUR GUESS IS TOO HIGH";
            msg1.style.color = "red";
            msg2.textContent = "TRY AGAIN";
            msg2.style.fontSize = "25px";
            msg2.style.color = "red";
            // msg2.textContent = "No. of guesses:" + no_of_guesses;
            msg3.textContent = "guessed numbers are: " +    guessed_nums;

        } else if(user_guess == answer){
            msg1.textContent = "CONGRATS YOU WIN";
            msg1.style.color = "green";
            msg1.style.fontSize = "30px";
            msg2.textContent = "HURRAY!!";
            msg2.style.color = "green";
            msg3.textContent = "You got it with " + no_of_guesses + " guesses";
            document.getElementById("my_btn").disabled = true;
        }
    }
}
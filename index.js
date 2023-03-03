const userChoice = confirm('Voce quer jogar?');

var userScore = [{ user: 0, computer: 0 }];
let gamerOver = false;

function userQuestion () {
    if (userChoice === true) {
        startGame();
    } else {
        alert('O jogo acabou');
    }
}

userQuestion()


function startGame () {
    let userPlay = prompt('Escolha uma opcao: pedra,  papel,  tesoura');
    console.log("jogadausuario", userPlay);

    if (!validateUserChoice(userPlay)) {
        return startGame();
    }

    let computerPlay = getComputerChoice();
    console.log("jogadacomputador:", computerPlay);

    let result = determineWinner(userPlay, computerPlay);
    console.log("resultado:", result);

    const resultScore = userScore.push(result);
    console.log("score:", resultScore );

    console.log("score:", userScore[0]);

    if (resultScore <= 3) {
        startGame();
    }

    if (resultScore) {
        scoreResult()
    }
}


function scoreResult () {

    if (gamerOver) {
        return;
    }

    const userWins = userScore[0].user > userScore[0].computer;
    const computerWins = userScore[0].computer > userScore[0].user;
    const tie = userScore[0].user === userScore[0].computer;

    if (userWins) {
        alert('Usuário ganhou');
        gamerOver = true;
    } else if (computerWins) {
        alert('Computador ganhou');
        gamerOver = true;
    } else if (tie) {
        alert('Empate');
        gamerOver = true;
    }
}


function validateUserChoice (userChoice) {
    if (userChoice === 'pedra' || userChoice === 'papel' || userChoice === 'tesoura') {
        return true;
    } else {
        alert('Escolha invalida, digite novamente');
        return false;
    }
}

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'pedra';
        case 1:
            return 'papel';
        case 2:
            return 'tesoura';
    }
    return randomNumber;
}

function determineWinner (userChoice, computerChoice) {

    if (userChoice === computerChoice) {       
        return userScore[0];
    }

    else if (userChoice === 'pedra') {
        if (computerChoice === 'papel') {
            return userScore[0].computer = userScore[0].computer + 1;
        } else {
            return userScore[0].user = userScore[0].user + 1;
        }
    }

    else if (userChoice === 'papel') {
        if (computerChoice === 'tesoura') {
            return userScore[0].computer = userScore[0].computer + 1;
        } else {
            return userScore[0].user = userScore[0].user + 1;
        }
    }

    else if (userChoice === 'tesoura') {
        if (computerChoice === 'pedra') {
            return userScore[0].computer = userScore[0].computer + 1;
        } else {
            return userScore[0].user = userScore[0].user + 1;
        }
    }
}


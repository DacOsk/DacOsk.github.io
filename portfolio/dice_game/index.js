const turn = document.getElementById('message');
const rollButton = document.getElementById('btnRoll');
let player = 'player1';
const score = {
    player1: 0,
    player2: 0
};

const roll = () => {
    const roll = Math.ceil(Math.random() * 6);
    return roll;
};

const win = player => {
    document.getElementById(player + 'Dice').classList.add('display-win');
    turn.textContent = (player === 'player1' ? 'Player 1' : 'Player 2') + ' Wins!';
    rollButton.classList.add('btn-reset');
    rollButton.textContent = 'New Game';
};

const capitalize = player => player.replace(/\b\w/g, l => l.toUpperCase()).replace(/\d/, l => ' ' + l);

const switchPlayer = player => player === 'player1' ? 'player2' : 'player1';

rollButton.addEventListener('click', () => {
    if (rollButton.classList.contains('btn-reset')) {
        location.reload(true);
    } else {
        let dieRoll = roll();
        document.getElementById(player + 'Dice').textContent = dieRoll;
        if (dieRoll === 1) {
            player = switchPlayer(player);
            win(player);
            return;
        }
        score[player] += dieRoll;
        document.getElementById(player + 'Score').textContent = score[player];
        if (score[player] >= 20) {
            win(player);
            return;
        }
        document.getElementById(player + 'Dice').classList.remove('active')
        player = switchPlayer(player);
        turn.textContent = capitalize(player) + ' Turn';
        document.getElementById(player + 'Dice').classList.add('active')
    }
});

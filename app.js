/*
Логика игры: 
- Игрок должен угадать число, которое находится указанном промежутке
- У игрока есть несколько попыток
- После каждого ответа показывать сколько попыток осталось
- Сообщать игроку правильный ответ в случае проигрыша
- Поле окончания игры дается возможность начать сначала
*/

//Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;
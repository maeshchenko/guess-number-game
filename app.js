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
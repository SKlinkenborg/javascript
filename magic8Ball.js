let userName = 'Sam';
let userQuestion = 'Will it rain on Sunday'
let randomNumber = Math.floor(Math.random() * 8)
let eightBall = '';
userName.length === 0 ? console.log('Hello!') : console.log(`Hello ${userName}`);
console.log(`${userName} beseechs the almighty Magic 8 Ball. Lend us your wisdom! \"${userQuestion}\"?`);
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'The Magic 8 Ball does not favor you this day.'
}
console.log(eightBall)
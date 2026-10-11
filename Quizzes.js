 // quizzes.js
const QUIZ_BANK = [
  {q:'What letter starts "Apple"?', opts:['B','A','C'], ans:1},
  {q:'How many fingers are on one hand?', opts:['3','5','4'], ans:1},
  {q:'Which is a color?', opts:['🐕Dog','🔵Blue','🏃‍♀️Run'], ans:1},
  {q:'Which is an animal?', opts:['⛩Table','🐈Cat','🪑Chair'], ans:1},
  {q:'Which shape has 3 sides?', opts:['□ Square','△ Triangle','◯ Circle'], ans:1},
  {q:'Which is a fruit?', opts:['🚗Car','🍌Banana','🏡House'], ans:1},
  {q:'Which vehicle runs on rails?', opts:['🚗Car','✈️Plane','🚆Train'], ans:2},
  {q:'Which planet do we live on?', opts:['Mars','Earth','Jupiter'], ans:1},
  {q:'Which day comes after Monday?', opts:['Sunday','Tuesday','Friday'], ans:1},
  {q:'Opposite of big?', opts:['🤏Tiny','🐘Large','↔️Wide'], ans:0},
  {q:'Which weather shows rain?', opts:['☀️','🌧️','❄️'], ans:1},
  {q:'Which shows happy?', opts:['😢','😡','😊'], ans:2},
  {q:'Which number is even?', opts:['3','4','7'], ans:1},
  {q:'Which animal barks?', opts:['🐈Cat','🐕Dog','🐟Fish'], ans:1},
  {q:'Which is a triangle?', opts:['🔺','⚪','◼️'], ans:0},
  {q:'Which is healthy to eat?', opts:['🍬Candy','🍎Apple','🍟Chips'], ans:1},
  {q:'Which goes in the sky?', opts:['🐟Fish','🐦Bird','🚗Car'], ans:1},
  {q:'Which is daytime?', opts:['🌙','🌞','⭐'], ans:1},
  {q:'How many wheels on a bicycle?', opts:['1','2','4'], ans:1},
  {q:'Which is cold?', opts:['🍦Ice cream','🍲Hot soup','☀️Sun'], ans:0},
  {q:'Mix red + blue makes?', opts:['💜Purple','💚Green','🧡Orange'], ans:0},
  {q:'Animal with long trunk?', opts:['🐕Dog','🐘Elephant','🐈Cat'], ans:1},
  {q:'Not a planet?', opts:['🔴Mars','🟣Pluto','🏡House'], ans:2},
  {q:'Which day is weekend?', opts:['Wednesday','Saturday','Tuesday'], ans:1},
  {q:'Which feels wet?', opts:['🌧️Rain','☀️Sun','💨Wind'], ans:0},
  {q:'Yellow fruit?', opts:['🍇Grapes','🍌Banana','🫐Blueberry'], ans:1},
  {q:'Blow instrument?', opts:['🎸Guitar','🎹Piano','🪈Flute'], ans:2},
  {q:'Which animal swims?', opts:['🦜Bird','🐟Fish','🐎Horse'], ans:1},
  {q:'Which shows night?', opts:['🌙','🌞','☁️'], ans:0},
  {q:'4 equal sides?', opts:['▭ Rectangle','□ Square','△ Triangle'], ans:1},
   {q: 'Which one is a vegetable?',opts: ['🍎 Apple', '🥕 Carrot', '🍇 Grapes'], ans:1 },
  {q: 'Which one is a Thumb?',opts: ['✋', '🤌', '👍'], ans:2 },
  {q:'Which one is a red color?', opts:['🟣','🔵','🔴'], ans:2},
  {q:'What is 5+9=?', opts:['13','14','10'], ans:1},
  {q:'What is 3+6=?', opts:['9','10','12'], ans:0},
  {q:'What is 2×3=?', opts:['15','2','6'], ans:2},
  {q:'What is 10%2=?', opts:['5','12','14'], ans:0},
  {q:'What is 15-13=?', opts:['13','2','10'], ans:1},
  {q:'What is 6*2=?', opts:['13','12','10'], ans:1},
  {q:'What is 8+6=?', opts:['13','14','10'], ans:1},
  {q:'What is 2 + 3=?',opts: ['4', '5', '6'],ans: 1},
{q: 'What is 5 + 4=?' ,opts: ['8', '9', '10'],ans: 1},
{q: 'What is 6 − 2=?',opts: ['3', '4', '5'],ans: 1},
{q: 'What is 9 − 5=?',opts: ['3', '4', '5'],ans: 1},
{q: 'What is 2 × 3=?',opts: ['5', '6', '7'],ans: 1},
{q: 'What is 4 × 2=?',opts: ['6', '8', '10'],ans: 1},
{q: 'What is 8 ÷ 4=?',opts: ['1', '2', '3'],ans: 1},
{q: 'Which number is bigger?',opts: ['3', '7', '5'],ans: 1},
{q: 'Which number is smallest?',opts: ['9', '4', '6'],ans: 1},
{q: 'How many sides does a triangle have?',opts: ['2', '3', '4'],ans: 1},
{q: 'Which shape is round?',opts: ['Square', 'Circle', 'Triangle'],ans: 1},
{q: 'How many fingers do you have on one hand?',opts: [' 4', '5 ', ' 6'],ans: 1},
{q: 'How many days are in a week?',opts: [' 5', '7', '10'],ans: 1},
 {q: 'What is  2 + 3=?',opts: ['4', '6', '5'],ans: 2},
 {q: 'What is   5 − 2 =?',opts: ['3', '2', '4'],ans: 0},
 {q: 'Triangle has ___ sides?',opts: ['3', '5', '4'],ans: 0},
  {q: '🍎🍎+🍎 = ?',opts: ['🍎🍎','🍎🍎🍎','🍎🍎🍎🍎'],ans: 1},
  {
  q: '🐶🐶 + 🐶 = ?',
  opts: ['🐶🐶', '🐶🐶🐶', '🐶🐶🐶🐶'],
  ans: 1
},
{
  q: '🐥🐥🐥-🐥 = ?',
  opts: ['🐥', '🐥🐥', '🐥🐥🐥'],
  ans: 1
},
{
  q: '🍌🍌🍌 − 🍌🍌 = ?',
  opts: ['🍌', '🍌🍌', '🍌🍌🍌'],
  ans: 0
},
{
  q: '⭐ × 3 = ?',
  opts: ['⭐', '⭐⭐', '⭐⭐⭐'],
  ans: 2
},
{
  q: "🍭🍭 (2 groups of 🍭) = ?",
  opts: ["🍭🍭", "🍭🍭🍭", "🍭🍭🍭🍭"],
  ans: 0
},
{
  q: "How many 🐱 are there? 🐱🐱🐱",
  opts: ["2", "3", "4"],
  ans: 1
},
{
  q: "Count the 🍓 : 🍓🍓🍓🍓",
  opts: ["3", "4", "5"],
  ans: 1
},
{
  q: "Which one is a circle?",
  opts: ["⬛", "🔺", "⚪"],
  ans: 2
},
{
  q: "Which one has 3 sides?",
  opts: ["⚪", "🔺", "⬛"],
  ans: 1
},
{
  q: "🍬🍬 + 🍬🍬 = ?",
  opts: ["🍬🍬🍬", "🍬🍬🍬🍬", "🍬🍬🍬🍬🍬"],
  ans: 1
},
{
  q: "🐘 is ___ than 🐭",
  opts: ["Smaller", "Bigger", "Same"],
  ans: 1
},
];

let currentQuiz = null;
let attemptCount = 0;

function startQuiz(){
  attemptCount = 0;
  pickQuestion();
}

function pickQuestion(){
  currentQuiz = QUIZ_BANK[Math.floor(Math.random()*QUIZ_BANK.length)];
  renderQuestion(currentQuiz);
}
function handleAnswer(i){
  if(i === currentQuiz.ans){
    alert('Correct! 🎉');
    pickQuestion();
  } else {
    alert('Try again!');
  }
}


 function renderQuestion(q){
   const wrap = document.getElementById('quizWrap');

   wrap.innerHTML = `
     <div class="quiz-question">${q.q}</div>
     <div id="opts"></div>
   `;

   const opts = document.getElementById('opts');

   q.opts.forEach((o,i)=>{
     const d = document.createElement('div');
     d.className='quiz-option fade-in';
     d.textContent = o;
     d.onclick = function(){
       handleAnswer(i);
     };
     opts.appendChild(d);
   });
 }

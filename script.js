// document.querySelector("")
const birthDay = document.querySelector("#birth-day");
const birthMonth = document.querySelector("#birth-month");
const birthYear = document.querySelector("#birth-year");
const submit = document.querySelector("#btn");
const resultDay = document.querySelector(".day");
const resultMonth = document.querySelector(".month");
const resultYear = document.querySelector(".year");

const err1 = document.querySelector('.error1');



const form = document
  .querySelector("form")
  .addEventListener("submit", (e) => e.preventDefault());

birthDay.addEventListener("input", (e) => {
  // if (e.target.value)) {
    
  // }
  if ( birthDay.value.trim() === '' ) {
    // err1.style.disply = 'block';
    console.log('empty')
  }
  console.dir(e.target.value);
});



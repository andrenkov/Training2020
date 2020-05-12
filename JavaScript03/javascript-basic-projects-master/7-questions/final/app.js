// traversing the dom

const btns = document.querySelectorAll(".question-btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;/*<article class="question">*/
    /* parent-1 on the button is "question-title"; parent-2 is the actual "question" class*/
    console.log(question);
    
    question.classList.toggle("show-text");
  });
});

//using selectors inside the element

// const questions = document.querySelectorAll(".question");/*array of .question classes in the .questions*/
// questions.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");
//   // console.log(btn);

//   btn.addEventListener("click", function () {
//     // console.log(question);

//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });

//     question.classList.toggle("show-text");
//   });
// });
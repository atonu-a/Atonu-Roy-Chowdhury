
// Working with buttons

//explore works
let visit = document.querySelector(".view-works");

visit.addEventListener("click" , () =>{
  window.location.href = "#project-section-container";
});

//cv download
let cvBtn = document.querySelector("#button");
cvBtn.addEventListener("click", () =>{
  window.location.href="https://drive.google.com/file/d/15NHHyEb-An9u1KfJyjtGBjn95h-NOXgW/view?usp=drive_link";
});

// project 1 button
let project1 = document.querySelector("#project1btn");
project1.addEventListener("click", () =>{
  window.location.href = "https://travelo-49wj.onrender.com";
});

// project 1 button
let project2 = document.querySelector("#project2btn");
project2.addEventListener("click", () =>{
  window.location.href = "https://career-io.onrender.com";
});

// project 1 button
let project3 = document.querySelector("#project3btn");
project3.addEventListener("click", () =>{
  window.location.href = "https://goodspanda.vercel.app/";
});


// message button
let msg = document.querySelector("#msg");
msg.addEventListener("click",() =>{
  window.location.href =
    "https://wa.me/qr/VDWAZBCZGFDOA1";
})

// Custom cursor
const cursor = Cursorly.init({
  cursor: 21,
  effect: { name: "trail", color: "aqua" },
});
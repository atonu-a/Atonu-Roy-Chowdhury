// Working with buttons

//explore works
let visit = document.querySelector(".view-works");

if (visit) {
  visit.addEventListener("click", function () {
    const slug = this.getAttribute("data-slug");
    scrollToProject(slug);
  });
}

function scrollToProject(slug) {
  if (!slug) return;

  const container = document.getElementById(slug);
  if (container) {
    container.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", "/" + slug + "/");
  }
}

//cv download

let cvBtn = document.querySelector("#button");
if (cvBtn) {
  cvBtn.addEventListener("click", () => {
    window.location.href =
      "https://drive.google.com/file/d/15NHHyEb-An9u1KfJyjtGBjn95h-NOXgW/view?usp=drive_link";
  });
}

// message button
let msg = document.querySelector("#msg");
msg.addEventListener("click", () => {
  window.location.href = "https://wa.me/qr/VDWAZBCZGFDOA1";
});

// Custom cursor
const cursor = Cursorly.init({
  cursor: 16,
  effect: { name: "trail", color: "aqua" },
});

// Mail submit button
let submit = document.querySelector("#submit");
if (submit) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    sendMail();
  });
}

// // Projects loading
// window.addEventListener("load", () =>{
//   loadProject();
// })

// let projectContainer = document.querySelector(".project-container");

// async function loadProject() {
//   try{
//     let res = await fetch("projects.json");
//     console.log(res);
//     let data = await res.json();
//     console.log(data);

//     data.forEach(project => {
//       const card = document.createElement("div");

//       card.innerHTML = `<div id=${project.id} class='project fadeIn'>
//           <div class='img-frame bg-${project.image_bg}'>
//               <img src='${project.image}'>
//           </div>
//           <div class='desc'>
//             <h4>${project.title}</h4>
//             <p>${project.working_date}</p>
//             <p>${project.desc}</p>
//             <button class='button visit'>Visit website</button>
//           </div>
//       </div>`;
//       let visitBtn = card.querySelector(".visit");
//       console.log(project.link);
//       visitBtn.addEventListener("click" , () =>{
//         window.location.href = project.link;

//       })

//       projectContainer.append(card);

//     });
//   }
//   catch(error){
//     console.log(error);
//   }
// }

function filterProjects(category) {
  // Active class toggle
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Filter logic
  document.querySelectorAll(".project").forEach((card) => {
    card.style.display =
      category === "All" || card.dataset.category === category
        ? "flex"
        : "none";
  });
}


const bar = document.getElementById("bar");
const pct = document.getElementById("pct");
const loader = document.getElementById("loader");

let current = 0;

function setProgress(target) {
  current = target;
  bar.style.width = target + "%";
  pct.textContent = target + "%";
}


function hideLoader() {
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 500);
}


setTimeout(() => setProgress(Math.floor(Math.random() * 20)+40), 100);
setTimeout(() => setProgress(100), 500);
setTimeout(() => hideLoader(), 600);
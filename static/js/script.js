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

// Filtering projects in projects page

function filterProjects(category) {
  const container = document.querySelector(".project-container"); // ✅
  const subloader = document.querySelector(".subloader"); // ✅

  // Active class toggle
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Fade out
  container.style.opacity = "0.3";


  subloader.classList.remove("hidden");
  subloader.classList.add("flex");

  setTimeout(() => {
    document.querySelectorAll(".project").forEach((card) => {
      card.style.display =
        category === "All" || card.dataset.category === category
          ? "flex"
          : "none";
    });

    subloader.classList.remove("flex");
    subloader.classList.add("hidden");

    // Fade in
    container.style.opacity = "1";
  }, 300);
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

setTimeout(() => setProgress(Math.floor(Math.random() * 40) + 40), 100);
setTimeout(() => setProgress(100), 300);
setTimeout(() => hideLoader(), 500);

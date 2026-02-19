
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

// Mail submit button
let submit = document.querySelector("#submit");
submit.addEventListener("click", (e) =>{
  e.preventDefault();
  sendMail();
})

// All projects display button

let showMore = document.querySelector("#show-more");
showMore.addEventListener("click", ()=>{
  window.location.href="projects.html";
})



// Projects loading
window.addEventListener("load", () =>{
  loadProject();
})

let projectContainer = document.querySelector(".project-container");


async function loadProject() {
  try{
    let res = await fetch("projects.json");
    console.log(res);
    let data = await res.json();
    console.log(data);


    data.forEach(project => {
      const card = document.createElement("div");
      
      card.innerHTML = `<div id=${project.id} class='project fadeIn'>
          <div class='img-frame bg-${project.image_bg}'>
              <img src='${project.image}'>
          </div>
          <div class='desc'>
            <h4>${project.title}</h4>
            <p>${project.working_date}</p>
            <p>${project.desc}</p>
            <button class='button visit'>Visit website</button>
          </div>
      </div>`;
      let visitBtn = card.querySelector(".visit");
      console.log(project.link);
      visitBtn.addEventListener("click" , () =>{
        window.location.href = project.link;
        
      })
      
      projectContainer.append(card);
      
    });
  }
  catch(error){
    console.log(error);
  }
}


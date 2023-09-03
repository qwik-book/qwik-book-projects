/**
 * Function to expand / no expand info about selection with click with "+" or "-"
 * @param {*} faq 
 */
function implementExpandOptions(faq) {
  console.log(faq)
  let i;
  for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("item-active");

      /* Toggle between hiding and showing the active panel */
      let body = this.nextElementSibling;
      if (body.style.display === "block") {
        body.style.display = "none";
      } else {
        body.style.display = "block";
      }
    });
  }
}


// Chapters Info
const chaptersData = [
  {
    "question": "1.- Introducción a Qwik",
    "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ..."
  },
  {
    "question": "2.- Enrutamiento",
    "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ..."
  },
  {
    "question": "3.- Componentes",
    "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ..."
  },
  {
    "question": "4.- Layouts / Plantillas",
    "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ..."
  },
  {
    "question": "5.- Estilos",
    "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ..."
  },
  {
    "question": "6.- SSR - Server Side Rendering",
    "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ..."
  },
  {
    "question": "7.- Gestión de Estado",
    "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ..."
  },
  {
    "question": "8.- Consumiendo APIs REST / GraphQL",
    "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ..."
  }
];

// Get accordion container element
const accordionContainer = document.getElementById("accordion-container");

// Iterate JSON info and create Accordion
chaptersData.forEach((item, index) => {
  const accordionItem = document.createElement("div");
  accordionItem.classList.add(`accordion-${index + 1}`);

  const questionHeader = document.createElement("h1");
  questionHeader.classList.add("accordion-page");
  questionHeader.textContent = item.question;

  const answerBody = document.createElement("div");
  answerBody.classList.add("accordion-body");
  const answerParagraph = document.createElement("p");
  answerParagraph.textContent = item.answer;
  answerBody.appendChild(answerParagraph);

  accordionItem.appendChild(questionHeader);
  accordionItem.appendChild(answerBody);

  accordionContainer.appendChild(accordionItem);

  // Add horizontal line after section, except last item
  if (index < chaptersData.length - 1) {
    const hrLine = document.createElement("hr");
    hrLine.classList.add("hr-line");
    accordionContainer.appendChild(hrLine);
  }
});

// Con esto podemos abrir la informa
implementExpandOptions(document.getElementsByClassName("accordion-page"))
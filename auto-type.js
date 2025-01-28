const dynamicText = document.querySelector(".auto-type");
const services = [
  "Brand Building",
  "Differentiation",
  "Customer Experience",
  "Customer Acquisition",
  "Sales Growth",
  "New Market Entry",
  "New Product Launch",
];

let servicesWordIndex = 0;
let wordCharIndex = 1;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = services[servicesWordIndex];
  const currentChar = currentWord.substring(0, wordCharIndex);
  dynamicText.textContent = currentChar;

  if (!isDeleting && wordCharIndex < currentWord.length) {
    wordCharIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && wordCharIndex > 0) {
    wordCharIndex--;
    setTimeout(typeEffect, 100);
  }else {
    isDeleting = !isDeleting;
    servicesWordIndex = !isDeleting ? (servicesWordIndex + 1) % services.length : servicesWordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();

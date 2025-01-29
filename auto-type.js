const dynamicText = document.querySelector(".auto-type");
const services = [
  "Sales Growth",
  "Customer Acquisition",
  "Brand Building",
  "New Product Launch",
  "Differentiation",
  "New Market Entry",
  "Customer Experience"
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
    setTimeout(typeEffect, 50);
  } else if (isDeleting && wordCharIndex > 0) {
    wordCharIndex--;
    setTimeout(typeEffect, 25);
  } else {
    isDeleting = !isDeleting;
    servicesWordIndex = !isDeleting
      ? (servicesWordIndex + 1) % services.length
      : servicesWordIndex;
    
    if (isDeleting) {
       
        setTimeout(typeEffect, 1500);
    } else {
        setTimeout(typeEffect, 300);
    }
  }
};

typeEffect();

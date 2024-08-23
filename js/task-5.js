const widget = document.querySelector(`.widget`)
const bgText = widget.querySelector(`p`)
bgText.style.fontWeight =`400`;
bgText.style.fontSize = `16px`;


const btn = document.querySelector(`.change-color`)
btn.style.background = `#4e75ff`;
btn.style.borderRadius = `8px`;
btn.style.padding = `8px 16px`;
btn.style.color= `#fff`;
btn.style.border = `none`


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const colorSpan = document.querySelector('span.color');

  
  btn.addEventListener('click', () => {
    const newColor = getRandomHexColor(); 
    document.body.style.backgroundColor = newColor; 
    colorSpan.textContent = newColor; 
  });
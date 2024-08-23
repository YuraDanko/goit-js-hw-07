const nameInput = document.querySelector(`#name-input`)
const nameOutput = document.querySelector(`#name-output`)

nameInput.style.padding = '10px';
nameInput.style.fontSize = '16px';
nameInput.style.border = '2px solid #ccc';
nameInput.style.borderRadius = '4px';       
nameOutput.style.fontWeight = 'bold';
nameOutput.style.color = '#333';
nameOutput.style.fontSize = '24px';

nameInput.addEventListener(`input`, () => {
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
})
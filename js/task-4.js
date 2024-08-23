const form = document.querySelector('.login-form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.alignItems = 'flex-start';
form.style.justifyContent = 'center'; 
form.style.maxWidth = '300px';
form.style.margin = '0 auto';
form.style.padding = '20px';
form.style.border = '1px solid #ccc';
form.style.borderRadius = '8px';
form.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
form.style.backgroundColor = '#f9f9f9'; 

const labels = form.querySelectorAll('label');
labels.forEach(label => {
label.style.marginBottom = '8px'; 
});

const inputs = form.querySelectorAll('input');
inputs.forEach(input => {
input.style.display = 'block';
input.style.width = '100%';
input.style.padding = '8px';
input.style.border = '1px solid #ccc';
input.style.borderRadius = '4px';
input.style.marginBottom = '8px'; 
});

const button = form.querySelector('button');
button.style.padding = '10px 15px';
button.style.backgroundColor = '#007bff'; 
button.style.color = '#fff'; 
button.style.border = 'none';
button.style.borderRadius = '4px';
button.style.cursor = 'pointer';
button.style.fontSize = '16px';
button.style.fontWeight = 'bold';
button.style.marginTop = '12px'; 

button.addEventListener('hover', () => {
button.style.backgroundColor = '#0056b3'; 
});




form.addEventListener('submit', event => {
event.preventDefault(); 
            
const formData = new FormData(form);
const formObject = {};
let allFieldsFilled = true;

formData.forEach((value, key) => {
const trimmedValue = value.trim();
if (!trimmedValue) {
allFieldsFilled = false;
}
formObject[key] = trimmedValue;
});

if (!allFieldsFilled) {
alert('All form fields must be filled in');
} else {
console.log(formObject);
form.reset(); 
}
});

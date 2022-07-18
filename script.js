const email = document.getElementById('email');
const password = document.getElementById('password');
const send = document.getElementById('send');
const checkbox = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const evalForm = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputHouse = document.getElementById('house');
const nome = document.getElementById('nome');
const mail = document.getElementById('mail');
const house = document.getElementById('house-data');
const family = document.getElementById('family');
const inputSubject = document.getElementsByClassName('subject');
const subject = document.getElementById('subject');
const rate = document.getElementById('rate');
const comment = document.getElementById('comments');

function verify() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function checkAgree() {
  if (checkbox.checked !== true) {
    submit.setAttribute('disabled', true);
  } else {
    submit.removeAttribute('disabled');
  }
}
function maxLengthText() {
  const lengthText = textArea.maxLength - textArea.textLength;
  counter.innerHTML = `Você ainda pode digitar ${lengthText} caracteres`;
}

function insertDataForm() {
  const { value } = inputHouse.options[inputHouse.selectedIndex];
  nome.innerText = `Nome:
  ${inputName.value} ${inputLastName.value}`;
  mail.innerText = `Email:
  ${inputEmail.value}`;
  house.innerText = `Casa:
  ${value}`;
  family.innerText = `Família:
  ${evalForm.family.value}`;
  for (let index = 0; index < inputSubject.length; index += 1) {
    if (inputSubject[index].checked) {
      subject.innerText += ` ${inputSubject[index].value},`;
    }
  }
  rate.innerText = `Avaliação:
  ${evalForm.rate.value}`;
  comment.innerText = `Observações:
  ${textArea.value}`;
}

function changeForm(e) {
  e.preventDefault();
  evalForm.style.display = 'none';
  formData.style.display = 'inherit';
  insertDataForm();
}

textArea.addEventListener('keyup', maxLengthText);
send.addEventListener('click', verify);
checkbox.addEventListener('click', checkAgree);
submit.addEventListener('click', changeForm);

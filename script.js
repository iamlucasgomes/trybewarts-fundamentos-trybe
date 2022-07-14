const email = document.getElementById('email');
const password = document.getElementById('password');
const send = document.getElementById('send');
const checkbox = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

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
  counter.innerHTML = `Você ainda pode escrever ${lengthText} caracteres`;
}

textArea.addEventListener('keyup', maxLengthText);
send.addEventListener('click', verify);
checkbox.addEventListener('click', checkAgree);

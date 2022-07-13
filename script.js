const email = document.getElementById('email');
const password = document.getElementById('password');
const send = document.getElementById('send');
const checkbox = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');

function verify() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
send.addEventListener('click', verify);

function checkAgree() {
  if (checkbox.checked !== true) {
    submit.setAttribute('disabled', true);
  } else {
    submit.removeAttribute('disabled');
  }
}

checkbox.addEventListener('click', checkAgree);

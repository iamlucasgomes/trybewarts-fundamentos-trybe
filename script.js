const email = document.getElementById('email');
const password = document.getElementById('password');
const send = document.getElementById('send');

function verify() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
  alert('Olá, Tryber!');
  } else {
  alert('Email ou senha inválidos.');
} 
}
send.addEventListener('click', verify);

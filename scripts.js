// Manipulação de login
const loginForm = document.getElementById('login-form');
const mainContainer = document.getElementById('main-container');
const loginContainer = document.getElementById('login-container');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '1234') {
    loginContainer.classList.add('hidden');
    mainContainer.classList.remove('hidden');
  } else {
    alert('Usuário ou senha incorretos!');
  }
});

// Manipulação de pedidos
const orderForm = document.getElementById('order-form');
const ordersList = document.getElementById('orders-list');

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Captura os valores do formulário
  const clientName = document.getElementById('client-name').value;
  const phone = document.getElementById('phone').value;
  const description = document.getElementById('description').value;

  // Cria um novo item na lista de pedidos
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <strong>Cliente:</strong> ${clientName}<br>
    <strong>Telefone:</strong> ${phone}<br>
    <strong>Descrição:</strong> ${description}
  `;

  // Adiciona o item à lista
  ordersList.appendChild(listItem);

  // Limpa o formulário
  orderForm.reset();
});

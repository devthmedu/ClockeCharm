// Dados dos produtos
const products = [
  {
    id: 1,
    name: 'Smartwatch Amazfit Bip U Pro',
    price: 599,
    img: './src/img/relogios/Smartwatch_Amazfit_Bip_U_Pro-removebg-preview.png',
  },
  {
    id: 2,
    name: 'Apple Watch Ultra 2 GPS',
    price: 950,
    img: './src/img/relogios/Apple_Watch_Ultra_2_GPS_+_Cellular___Caixa_de_titânio___49_mm___Pulseira_Oceano_laranja-removebg-preview.png',
  },
  {
    id: 3,
    name: 'Smartwatch Amazfit GTS 2 Mini',
    price: 709,
    img: './src/img/relogios/Relógio_Smartwatch_Amazfit_GTS_2_Mini__GPS__Bluetooth__Compatível_com_Android_e_iOS-removebg-preview.png',
  },
];

// Adiciona eventos de clique aos botões "Adicionar ao Carrinho"
document.querySelectorAll('.feature__card .btn').forEach((button, index) => {
  button.addEventListener('click', () => {
    addItemToCart(products[index]);
  });
});

// Adiciona um item ao carrinho
function addItemToCart(product) {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Cria o item do carrinho
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div>
                <h4>${product.name}</h4>
                <p>R$${product.price}</p>
                <button class="btn remove-item" onclick="removeItem(this, ${product.price})">Remover</button>
            </div>
        `;
  cartItems.appendChild(cartItem);

  // Atualiza o total
  updateTotal(product.price);
}

// Remove um item do carrinho
function removeItem(button, price) {
  const cartItems = document.getElementById('cart-items');
  cartItems.removeChild(button.parentElement.parentElement);

  // Atualiza o total
  updateTotal(-price);
}

// Atualiza o total do carrinho
let total = 0;
function updateTotal(amount) {
  total += amount;
  document.getElementById('cart-total').innerText = `R$${total.toFixed(2)}`;
}

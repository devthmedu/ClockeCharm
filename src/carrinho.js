
// Seletores para o carrinho
const cartIcon = document.getElementById('cart-btn'); // Botão do carrinho
const cartMenu = document.getElementById('cart-menu'); // Menu do carrinho
const closeCart = document.getElementById('close-cart'); // Botão de fechar o carrinho
const cartCount = document.querySelector('.cart-count'); // Contagem de itens do carrinho
const addToCartButtons = document.querySelectorAll('.add-to-cart'); // Botões "Adicionar ao Carrinho"

// Contador de itens no carrinho
let cartItemCount = 0;

// Função para atualizar a contagem de itens no ícone do carrinho
function updateCartCount() {
  cartCount.textContent = cartItemCount;
}

// Função para adicionar um item ao carrinho
function addItemToCart(id, name, price, img) {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Cria o item do carrinho
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.dataset.id = id;
    cartItem.innerHTML = `
        <img src="${img}" alt="${name}">
        <div>
            <h4>${name}</h4>
            <p>R$${price.toFixed(2)}</p>
            <button class="btn remove-item" onclick="removeItem(this, ${price})">Remover</button>
        </div>
    `;
    cartItems.appendChild(cartItem);

    // Atualiza o total
    updateTotal(price);

    // Atualiza a contagem de itens
    cartItemCount += 1;
    updateCartCount();
}

// Função para remover um item do carrinho
function removeItem(button, price) {
    const cartItems = document.getElementById('cart-items');
    cartItems.removeChild(button.parentElement.parentElement);

    // Atualiza o total
    updateTotal(-price);

    // Atualiza a contagem de itens
    cartItemCount -= 1;
    updateCartCount();
}

// Função para atualizar o total do carrinho
let total = 0;
function updateTotal(amount) {
    total += amount;
    document.getElementById('cart-total').innerText = `R$${total.toFixed(2)}`;
}

// Adiciona eventos de clique aos botões "Adicionar ao Carrinho"
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const img = button.getAttribute('data-img');
        addItemToCart(id, name, price, img);
    });
});

// Eventos do menu do carrinho
cartIcon.addEventListener('click', () => {
  cartMenu.classList.toggle('active');
});

closeCart.addEventListener('click', () => {
  cartMenu.classList.remove('active');
});


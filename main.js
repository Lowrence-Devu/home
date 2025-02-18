document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});

function addToCart(event) {
    const product = event.target.parentElement;
    const productName = product.querySelector('h3').innerText;
    const productDescription = product.querySelector('p:nth-of-type(1)').innerText;
    const productPrice = product.querySelector('p:nth-of-type(2)').innerText;
    const productImage = product.querySelector('img').src;

    console.log('Adding to cart:', { productName, productDescription, productPrice, productImage });

    const cartItem = {
        name: productName,
        description: productDescription,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(item => item.name === productName);

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} has been added to your cart at ${productPrice}`);
}
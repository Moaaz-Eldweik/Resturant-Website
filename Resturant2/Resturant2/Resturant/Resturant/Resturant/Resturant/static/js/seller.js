let cart = [];
const addToCartButtons = document.querySelectorAll('.s-btn a');

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        
        const productRow = button.closest('.row');
        const productName = productRow.querySelector('h5').innerText;
        const productPrice = productRow.querySelector('h6').innerText;
        const productImage = productRow.querySelector('img').src;

        const product = {
            name: productName,
            price: productPrice,
            image: productImage
        };
   
        cart.push(product);

        localStorage.setItem('cart', JSON.stringify(cart)); 
        alert(`${productName} `);
        alert(`${productPrice} `);

    });
});

window.onload = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        console.log('Cart loaded:', cart);
    }
};

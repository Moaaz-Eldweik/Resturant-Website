// HOME PAGE
 // Feature: Change hero text dynamically
 const heroText = document.querySelector('.hero-text h1');
 const phrases = ['Burger Delicious', 'Tasty Meals', 'Food Lovers Paradise'];
 let index = 0;

 setInterval(() => {
     heroText.textContent = phrases[index];
     index = (index + 1) % phrases.length;
 }, 3000);

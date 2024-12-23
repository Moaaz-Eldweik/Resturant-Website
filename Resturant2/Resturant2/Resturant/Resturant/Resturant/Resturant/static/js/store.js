
document.addEventListener('DOMContentLoaded', () => {
    const storeItems = document.querySelectorAll('.Col');

    
    storeItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemName = item.querySelector('.Col-text h4').innerText;
            alert(`You selected: ${itemName}`);
        });
    });

    
    const storeSection = document.querySelector('.Store-content');
    window.addEventListener('scroll', () => {
        const sectionPosition = storeSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPosition < screenHeight - 100) {
            storeSection.style.opacity = '1';
            storeSection.style.transform = 'translateY(0)';
        }
    });

    
    if (storeSection) {
        storeSection.style.opacity = '0';
        storeSection.style.transform = 'translateY(50px)';
        storeSection.style.transition = 'all 0.8s ease-in-out';
    }
});

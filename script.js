function answer(choice) {
    const cat = document.getElementById('cat');
    const message = document.getElementById('message');
    const heart = document.getElementById('heart');

    if(choice === 'yes' || choice === 'love') {
        heart.classList.remove('hidden');
        message.innerText = 'Ես էլ քեզ շատ սիրում, կյանքս 💖';
        cat.src = 'images/cat_happy.png';
        cat.style.transform = 'translateY(-20px)';
    } else if(choice === 'no') {
        heart.classList.add('hidden');
        message.innerText = '';
        cat.style.transform = 'translateY(100px)';
        setTimeout(() => {
            cat.style.transform = 'translateY(0)';
        }, 500);
    }
}

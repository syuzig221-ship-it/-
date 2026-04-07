function answer(choice) {
    const cat = document.getElementById('cat');
    const message = document.getElementById('message');
    const heart = document.getElementById('heart');

    if(choice === 'yes' || choice === 'love') {
        heart.classList.remove('hidden');
        message.innerText = 'Ես էլ քեզ շատ սիրում, կյանքս 💖';
        cat.src = 'https://www.dreamstime.com/funny-pink-cartoon-cat-green-eyes-illustration-has-big-curly-tail-image226809283';
        cat.style.transform = 'translateY(-20px)';
    } else if(choice === 'no') {
        heart.classList.add('hidden');
        message.innerText = '';
        cat.src = 'https://www.freepik.com/premium-ai-image/adorable-cartoon-cat-with-big-green-eyes-pink-nose_308859846';
        cat.style.transform = 'translateY(100px)';
        setTimeout(() => {
            cat.style.transform = 'translateY(0)';
        }, 500);
    }
}

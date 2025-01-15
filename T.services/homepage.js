window.addEventListener('load', function() {
    alert('Welcome to our website!');
});
document.querySelectorAll('a[href="products.html"], a[href="banks.html"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const msg = new SpeechSynthesisUtterance('Going to start soon, thank you for your kind cooperation');
        msg.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Male'));
        msg.pitch = 1; // Calm and confident
        msg.rate = 0.9; // Slightly slower for calmness
        speechSynthesis.speak(msg);
    });
});
document.querySelector('a[href="customercare.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    const msg = new SpeechSynthesisUtterance('Welcome to our customer care center');
    msg.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Male'));
    msg.pitch = 1; // Calm and confident
    msg.rate = 0.9; // Slightly slower for calmness
    speechSynthesis.speak(msg);
    setTimeout(() => window.location.href = 'customercare.html', 1000);
});
document.querySelector('a[href=""]').addEventListener('click', function(event) {
    event.preventDefault();
    const msg = new SpeechSynthesisUtterance('To know deep insight you must login to access your details');
    msg.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Male'));
    msg.pitch = 1; // Calm and confident
    msg.rate = 0.9; // Slightly slower for calmness
    speechSynthesis.speak(msg);
});
document.querySelector('a[href="login.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    const msg = new SpeechSynthesisUtterance('Going to deploy soon, thank you for your kind cooperation');
    msg.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Male'));
    msg.pitch = 1; // Calm and confident
    msg.rate = 0.9; // Slightly slower for calmness
    speechSynthesis.speak(msg);
    alert('You can see the list of users without logging in');
});
document.querySelector('.showUsers').addEventListener('click', function() {
    const users = ['John Doe', 'Jane Doe', 'Alice', 'Bob'];
    const list = document.createElement('ol');
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user;
        list.appendChild(listItem);
    });
    document.body.appendChild(list);
});
    document.querySelector('.hideUsers').addEventListener('click', function() {
    document.querySelector('ol').remove();
});

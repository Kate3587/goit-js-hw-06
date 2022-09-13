const formInputEl = document.querySelector('.login-form');

formInputEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (!email.value.trim() || !password.value.trim()) {
        alert('Please fill in all fields.');
    }

    const userData = {
        email: email.value.trim(),
        password: password.value.trim(),
    }
    console.dir(userData);
    event.currentTarget.reset();
})

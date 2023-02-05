const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const objectValues = {};
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email: mail,
        password: password
    }

    if (mail === "" || password === "") {
        alert("все поля должны быть заполнены")
    }
    else {
        console.log(formData);
        form.reset()
    }
}
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    clearErrors();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const birthDate = document.getElementById('birthDate').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const identityFile = document.getElementById('identityFile').files[0];

    let valid = true;

    if (fullName.length < 3 || fullName.length > 50) {
        showError('fullName', 'ФИО должно содержать от 3 до 50 символов');
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!emailPattern.test(email) || email.length > 100) {
        showError('email', 'Введите корректный адрес почты (не более 100 символов)');
        valid = false;
    }

    if (password.length < 6 || password.length > 20) {
        showError('password', 'Пароль должен содержать от 6 до 20 символов');
        valid = false;
    }

    if (!birthDate) {
        showError('birthDate', 'Выберите дату рождения');
        valid = false;
    }

    if (!gender) {
        showError('gender', 'Выберите пол');
        valid = false;
    }

    if (!identityFile) {
        showError('identityFile', 'Загрузите файл для подтверждения личности');
        valid = false;
    } else if (identityFile.size > 2 * 1024 * 1024) {
        showError('identityFile', 'Файл должен быть менее 2 МБ');
        valid = false;
    }

    if (valid) {
        showModal();
        setTimeout(function() {
            window.location.href = "https://kait20.mskobr.ru/teacher-card/gevorgyan-arsen-armanovich";
        }, 3000); // Через 3 секунды после показа модального окна
    }
});

function showModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';

    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        window.location.href = "https://kait20.mskobr.ru/teacher-card/gevorgyan-arsen-armanovich";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            window.location.href = "https://kait20.mskobr.ru/teacher-card/gevorgyan-arsen-armanovich";
        }
    });
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    field.parentNode.insertBefore(error, field.nextSibling);
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
}

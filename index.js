
const claim_btn = document.getElementById('claim_btn');

const first_label = document.getElementById('first_label');
const first_input = document.getElementById('first_input');
const first_image = document.getElementById('first_image');
const first_error = document.getElementById('first_error');

const last_label = document.getElementById('last_label');
const last_input = document.getElementById('last_input');
const last_image = document.getElementById('last_image');
const last_error = document.getElementById('last_error');

const email_label = document.getElementById('email_label');
const email_input = document.getElementById('email_input');
const email_image = document.getElementById('email_image');
const email_error = document.getElementById('email_error');

const password_label = document.getElementById('password_label');
const password_input = document.getElementById('password_input');
const password_image = document.getElementById('password_image');
const password_error = document.getElementById('password_error');

claim_btn.addEventListener('click', ()=> {
    var first_form = first_input.value;
    var last_form = last_input.value;
    var email_form = email_input.value;
    var password_form = password_input.value;

    console.log(first_form);
    console.log(last_form);
    console.log(email_form);
    console.log(password_form);

    let err = 0;

    if (first_form == '') {
        first_label.style.borderWidth = '2px';
        first_label.style.borderColor = 'hsl(0, 100%, 74%)';
        first_label.style.marginBottom = '6px';

        first_input.placeholder = '';

        first_image.style.display = 'grid';

        first_error.style.display = 'grid';

        err++;
    } else {
        first_label.style.borderWidth = '1px';
        first_label.style.borderColor = '#DEDEDE';
        first_label.style.marginBottom = '16px';

        first_input.placeholder = 'First Name';

        first_image.style.display = 'none';

        first_error.style.display = 'none';
    }

    if (last_form == '') {
        last_label.style.borderWidth = '2px';
        last_label.style.borderColor = 'hsl(0, 100%, 74%)';
        last_label.style.marginBottom = '6px';

        last_input.placeholder = '';

        last_image.style.display = 'grid';

        last_error.style.display = 'grid';

        err++;
    } else {
        last_label.style.borderWidth = '1px';
        last_label.style.borderColor = '#DEDEDE';
        last_label.style.marginBottom = '16px';

        last_input.placeholder = 'Last Name';

        last_image.style.display = 'none';

        last_error.style.display = 'none';
    }
//////////
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//////////
    if (!expr.test(email_form)) {
        email_label.style.borderWidth = '2px';
        email_label.style.borderColor = 'hsl(0, 100%, 74%)';
        email_label.style.marginBottom = '6px';

        email_input.placeholder = 'email@example.com';
        email_input.classList.add('red');

        email_image.style.display = 'grid';

        email_error.style.display = 'grid';

        err++;
    } else {
        email_label.style.borderWidth = '1px';
        email_label.style.borderColor = '#DEDEDE';
        email_label.style.marginBottom = '16px';

        email_input.placeholder = 'Email Address';

        email_image.style.display = 'none';

        email_error.style.display = 'none';
    }

    if (password_form == '') {
        password_label.style.borderWidth = '2px';
        password_label.style.borderColor = 'hsl(0, 100%, 74%)';
        password_label.style.marginBottom = '6px';

        password_input.placeholder = '';

        password_image.style.display = 'grid';

        password_error.style.display = 'grid';

        err++;
    } else {
        password_label.style.borderWidth = '1px';
        password_label.style.borderColor = '#DEDEDE';
        password_label.style.marginBottom = '16px';

        password_input.placeholder = 'Password';

        password_image.style.display = 'none';

        password_error.style.display = 'none';
    }

    if (err == 0) {     
        document.location.reload();
    }
});
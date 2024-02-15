// step 1. add click event handler with the submit button
document.getElementById('btn-login').addEventListener('click', function () {
    //  step 2. get email address insider the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    // step 3. get password
    // 3a. st id on the html element
    //  3b. get the element 
    //  3c. get the value from the element 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);

    // verify email and Password
    if(email === 'tuhin@gmail.com'&& password=== 'tuhin'){
        window.location.href ='bank.html';
    }
    else{
        alert('invalid user or Password');
    }
    

    
})

let sumbitBtn = document.querySelector('.sumbit')

sumbitBtn.addEventListener('click', () => {

    let userInp = document.getElementById('user').value
    let emailInp = document.getElementById('email').value
    let passowordInp = document.getElementById('pass').value
    let confPassowordInp = document.getElementById('con-pass').value
    let phoneInp = document.getElementById('phone').value
    let addressInp = document.getElementById('address').value

    if (userInp.length == 0) {
        userError.innerHTML = "Name is required"
        user.style.border = '1px solid red'
     }

    else if (userInp.length < 5) {
        userError.innerHTML = "Your name should be ten characters"
        user.style.border = '1px solid red'
    }

    else if (userInp.length > 20) {
        userError.innerHTML = "Your name should is too long"
        user.style.border = '1px solid red'
    }

    else {
         userError.innerHTML = "";
         user.style.border = '2px solid green';
    }
})






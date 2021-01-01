let signinBtn = document.querySelector('#signin-btn');
let signupBtn = document.querySelector('#signup-btn');

let container = document.querySelector('.container');

signupBtn.addEventListener('click', function(){
  container.classList.add('signin-animate')
})

signinBtn.addEventListener('click', function(){
  container.classList.remove('signin-animate')
})

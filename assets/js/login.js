"use strict"

const loginForm = document.forms.LoginForm

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(loginForm)

  console.log(formData.get('username'));
})
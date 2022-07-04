"use strict"

const loginForm = document.forms.LoginForm

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(loginForm)
  const users = JSON.parse(localStorage.getItem('users'))
  
  // search user by username
  const validation = users.find(user => user.username === formData.get('username'))

  if (validation) {
    if(validation.password === formData.get('password')) {
      sessionStorage.setItem('current_user', JSON.stringify(validation));
      alert(`Selamat, Anda berhasil masuk`);
      location.href = `${location.protocol}//${location.host}`
    }else {
      alert(`Nama Pengguna atau Katasandi Salah`)
    }
  }else {
    alert(`Nama Pengguna atau Katasandi Salah`)
  }
})
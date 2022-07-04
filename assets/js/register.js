"use strict"

if (userLogin) {
    console.clear()
    location.href = `${location.protocol}//${location.host}`
} else {
    const regisForm = document.forms.RegisterForm

    regisForm.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(regisForm)
        const users = JSON.parse(localStorage.getItem('users'))

        // search user by username
        const validation = users.find(user => user.username === formData.get('username') || user.email === formData.get('email'))

        if (validation) {
            alert(`Nama Pengguna atau Surel telah terdaftar.`)
        } else {
            users.push({
                "id": new Date().getTime(),
                "name": formData.get('name'),
                "username": formData.get('username'),
                "email": formData.get('email'),
                "password": formData.get('password'),
            });

            localStorage.setItem('users', JSON.stringify(users));
            alert(`Selamat, Akun anda berhasil didaftarkan!`)
            location.href = `${location.protocol}//${location.host}/pages/login.html`
        }
    })
}
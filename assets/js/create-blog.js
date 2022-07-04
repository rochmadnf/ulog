"use strict"

if (userLogin) {
    const blogForm = document.forms.BlogForm

    blogForm.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(blogForm)

        const articles = JSON.parse(localStorage.getItem('articles'))

        articles.unshift({
            "id": (new Date().getTime() + 3),
            "title": formData.get('title'),
            "body": formData.get('body'),
            "unixtime": new Date().getTime(),
            "user_id": JSON.parse(sessionStorage.getItem('current_user')).id,
        });

        localStorage.setItem('articles', JSON.stringify(articles));

        alert(`Selamat, artikel berhasil dibuat!`)
        location.href = `${location.protocol}//${location.host}/pages/blog.html`
    })
} else {
    alert("Silakan masuk terlebih dahulu")
    location.href = `${location.protocol}//${location.host}/pages/login.html`
}
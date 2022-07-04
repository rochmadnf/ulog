const getUsers = async() => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users === null) {
        const response = await fetch('../../data/users.json').then(res => res.json());
        localStorage.setItem('users', JSON.stringify((response)));
    }
}

const getArticles = async() => {
    const articles = JSON.parse(localStorage.getItem('articles'));
    if (articles === null) {
        const response = await fetch('../../data/articles.json').then(res => res.json());
        localStorage.setItem('articles', JSON.stringify((response.reverse())));
        location.href = `${location.protocol}//${location.host}`
    }
}

getUsers()
getArticles()

const btnLogout = document.getElementById('logout');
if (btnLogout) {
    btnLogout.addEventListener('click', e => {
        sessionStorage.removeItem('current_user')
        location.href = `${location.protocol}//${location.host}`
    })
}

const userLogin = JSON.parse(sessionStorage.getItem('current_user'));
if (userLogin) {
    document.querySelector('#user-name').textContent = userLogin.name;
    document.querySelector('.auth-menu').style.display = 'none'
    document.querySelector('.islogin-menu').style.display = 'flex'

    // tambah element di bagian main menu
    document.querySelector('.main-menu').insertAdjacentHTML('beforeend',
        `
  <li>
    <a href="/pages/blog.html">Daftar ArtikelKu</a>
  </li>
  <li>
    <a href="/pages/create-blog.html">Buat Artikel</a>
  </li>
  `)
}
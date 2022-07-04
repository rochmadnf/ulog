let articles;
if (userLogin) {
    articles = JSON.parse(localStorage.getItem('articles')).filter(article => article.user_id === userLogin.id);
} else {
    alert("Silakan masuk terlebih dahulu")
    location.href = `${location.protocol}//${location.host}/pages/login.html`
}

const timeConvert = (unix) => {
    const dateTime = new Date(unix);
    return (new Intl.DateTimeFormat('id-Id', { dateStyle: 'full', timeStyle: 'long' }).format(dateTime))
}

const authorSearch = (authorId) => {
    const users = JSON.parse(localStorage.getItem('users'));

    const author = users.find(user => user.id === authorId)
    return author.name;
}

const Article = (props) => {
    return `
  <article class="article">
    <h1>${props.title}</h1>
    <p>
      ${props.body}
    </p>
    <div class="info">
      <h5 class="author">
        ${authorSearch(props.user_id)}
      </h5>

      <div class="time">
        ${timeConvert(props.unixtime)}
      </div>
    </div>
  </article>
  `
}

if (articles) {
    if (articles.length > 0) {
        articles.map(
            article => {
                document.querySelector(".content").insertAdjacentHTML('beforeend',
                    Article(article)
                );
            }
        )
    } else {
        document.querySelector(".content").insertAdjacentHTML('beforeend',
            `<div class="alert alert-info">
          Kamu belum membuat satupun blog
        </div>`
        );
    }
}
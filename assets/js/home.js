const articles = JSON.parse(localStorage.getItem('articles'));
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

if(articles) {
  articles.map(
    article => {
      document.querySelector(".content").insertAdjacentHTML('beforeend', 
      Article(article)
      );
    }
  )
}
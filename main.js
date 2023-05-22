window.onload = function() {
    const date = new Date();
    document.getElementById('title').innerText = date.toDateString();
  
    fetch('https://bbc-news-api.herokuapp.com/')  // 需要找到BBC真实的API接口
    .then(response => response.json())
    .then(data => {
      const news = data.articles[0];  // 假设第一篇就是最热门的新闻
      document.getElementById('content').innerText = news.title + '\n' + news.description;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
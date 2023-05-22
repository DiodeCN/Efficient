import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const date = new Date();
    setTitle(date.toDateString());

    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        const data = await response.json();
        const news = data.articles[0];
        setContent(news.title + "\n" + news.description);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '297mm',
      width: '210mm',
      margin: '0 auto',
      padding: '25mm',
      boxSizing: 'border-box',
      background: 'white',
    }}>
      <h2 style={{textAlign: 'center'}}>{title}</h2>
      <div style={{
        marginTop: '20px',
        textAlign: 'justify'
      }}>{content}</div>
    </div>
  );
}

export default App;

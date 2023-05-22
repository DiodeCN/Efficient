import React, { useEffect, useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const date = new Date();
    setTitle(date.toDateString());

    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=965d031b6cc041abb0534c1a9335709c`
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
    <>
      <h2>{title}</h2>
      <div>{content}</div>
    </>
  );
}

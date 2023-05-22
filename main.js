import { createSignal, onMount } from "solid-js";

function App() {
  const [title, setTitle] = createSignal("");
  const [content, setContent] = createSignal("");

  onMount(async () => {
    const date = new Date();
    setTitle(date.toDateString());

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
      );
      const data = await response.json();
      const news = data.articles[0];
      setContent(news.title + "\n" + news.description);
    } catch (error) {
      console.error("Error:", error);
    }
  });

  return (
    <>
      <h2>{title()}</h2>
      <div>{content()}</div>
    </>
  );
}

export default App;

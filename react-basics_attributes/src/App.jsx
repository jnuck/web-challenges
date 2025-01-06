import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hi there</h2>
      <label htmlFor="input">Enter something:</label>
      <input type="text" id="input" />
      <a href="#" className="article__link">
        Link
      </a>
    </article>
  );
}

import {
  html,
  useEffect,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";

// This will import the page list from service which extracts it from a database
// import { placeholder1 } from "./Placeholder1.js";

export function PageList({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  // const [pages, setPages] = useState([]);

  // useEffect(() => {
  //   console.log("render");
  //   placeholder1().then((data) => {
  //     setPlaceholder(data);
  //   });
  // }, []);
  // Creates an unordered list of the pages on the wiki, linking to each page
  return html`
    <header>
      <h3>${title}</h3>
      <ul>
        ${placeholder.map(
          (page) =>
            html` <li key="${page}">
              <link href="${page.url}">${page.text}</link>
            </li>`
        )}
      </ul>
    </header>
  `;
}

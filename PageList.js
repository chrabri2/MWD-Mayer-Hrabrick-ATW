import {
  html,
  useEffect,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";

// This will import the page list from service which extracts it from a database
import { getPageList } from "./PageList.js";

export function PageList({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const [pages, setPages] = useState([]);

  useEffect(() => {
    console.log("render");
    getPageList().then((data) => {
      setPages(data);
    });
  }, []);
  // Creates an unordered list of the pages on the wiki, linking to each page
  return html`
    <h3>${title}</h3>
    <ul>
      ${pages.map(
        (page) =>
          html` <li key="${page.id}">
            <link href="${page.url}">${page.urlText}</link>
          </li>`
      )}
    </ul>
  `;
}

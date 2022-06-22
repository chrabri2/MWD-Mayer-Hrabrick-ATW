import {
  html,
  useEffect,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { getPageList } from "./PageList-Service.js";

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
          html` <li key="${page}">
            <a href="${page.url}">${page.urlText}</a>
          </li>`
      )}
    </ul>
  `;
}

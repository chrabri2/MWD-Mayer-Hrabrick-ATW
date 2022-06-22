import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Header } from "./Header.js";

import { TopBanner } from "./TopBanner.js";
import { PageList } from "./PageList.js";

// TODO: look at common wikis to see how they are formatted
function App() {
  return html`
    <${TopBanner} />

    <${Header} title="Welcome to Axiom Tree Wiki!">
      Please select a page to navigate
    </${Header}>
    <${PageList} title="List of Pages"/>
    
  `;
}

render(html` <${App} /> `, document.getElementById("app"));

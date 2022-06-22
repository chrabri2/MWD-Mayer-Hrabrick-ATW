import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Header } from "./Header.js";
// import { PageList } from "./PageList.js";
import { TopBanner } from "./TopBanner.js";

// TODO: look at common wikis to see how they are formatted
function App() {
  return html`
    <${TopBanner} />

    <${Header} title="Welcome to Axiom Tree Wiki!">
      Please select a page to navigate
    </${Header}>

    
  `;
}

render(html` <${App} /> `, document.getElementById("app"));
// This will be added back in once the axios is received from Carter
// <${PageList} title="List of Pages">

//     </${PageList}>

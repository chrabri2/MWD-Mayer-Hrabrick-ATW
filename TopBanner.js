import {
  html,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

import ToggleTheme from "./ToggleTheme.js";

// TODO: Introduce navigation up here
export function TopBanner({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  // Placeholder function for a future service
  function clickAlert() {
    alert("In future, this will change the theme to light or dark");
  }

  return html`
    <div class="topBannerDark">
      <p><b>Axiom Tree Wiki</b></p>
      <${ToggleTheme}
        onDarkClick="${clickAlert}"
        onLightClick="${clickAlert}"
      />
      <br />
      <form action="/search.php" class="Search">
        <input type="search" name="search" placeholder="Enter a keyword" />
        <input type="submit" value="search" />
      </form>
    </div>
  `;
}

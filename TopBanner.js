import {
  html,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

// TODO: Introduce navigation up here
export function TopBanner({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return html`
    <div class="topBannerDark">
      <p><b>Axiom Tree Wiki</b></p>
      <form action="/light_dark.php">
        <!-- Allows the user to switch between a light mode and a dark mode for the display 
      I imagine this would require use of css to implement.-->
        <p>Select lighting mode</p>
        <input type="radio" name="lighting" value="light" />Light
        <input
          type="radio"
          name="lighting"
          value="dark"
          checked="checked"
        />Dark
      </form>
      <br />
      <form action="/search.php" class="Search">
        <input type="search" name="search" placeholder="Enter a keyword" />
        <input type="submit" value="search" />
      </form>
    </div>
  `;
}

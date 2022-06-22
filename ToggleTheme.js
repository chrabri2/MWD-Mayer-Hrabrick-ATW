import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export default function ToggleTheme({ onDarkClick, onLightClick }) {
  return html`
    <form action="/light_dark.php">
      <p>Select lighting mode</p>
      <input
        type="radio"
        name="lighting"
        value="light"
        onClick=${onLightClick}
      />Light
      <input
        type="radio"
        name="lighting"
        value="dark"
        checked="checked"
        onClick=${onDarkClick}
      />Dark
    </form>
  `;
}

import { Link } from "@builder.io/qwik-city";

export const Menu = () => {
  return (
    <div class="column menu-items">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
    
export default component$(() => {
  return (
    <div>
      <h1>Ruta "/blog"</h1>
      Esta es la página <code>blog</code> con la plantilla <code>only-header</code>
      <br />
      <Link href={"/"}>Volver a la página principal</Link>
    </div>
  );
});
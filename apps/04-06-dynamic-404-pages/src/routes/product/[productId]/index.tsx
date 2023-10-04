import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { products } from '../../../data/products';

export const useProductLoader = routeLoader$(async ({ params, status }) => {
  // Ejemplo de llamada a la base de datos (local) utilizando el parámetro id

  // Como he mencionado, haremos una búsqueda en el mock

  // El resultado podría devolverse como null si no se encuentra el producto

  const data = products.find((item) => item.id === params.productId);

  // Verifica si hemos encontrado el producto
  if (!data) {
    // No se encontraron datos del producto
    // Establecer el código de estado en 404 (por defecto 200)
    status(404);
  }

  // Devolver los datos (que pueden ser null) y su código estado 200
  return data;
});

export default component$(() => {
  // Obtener los datos del producto desde el hook creado que funciona como un useSignal
  const product = useProductLoader();

  // Evaluamos si existe ese producto
  if (!product.value) {
    // No se encontraron datos del producto
    // Por lo tanto, renderizamos nuestra propia página personalizada de producto 404
    // y está notificado al navegador que su estado es el 404 que se ha especificado en el routeLoader$
    return <p>Lo sentimos, parece que no tenemos este producto.</p>;
  }

  // Se encontraron los datos del producto (código estado 200), así que los renderizamos
  return (
    <div>
      <h1>{product.value?.name}</h1>
      <p>{product.value?.price}</p>
      <p>{product.value?.description}</p>
    </div>
  );
});

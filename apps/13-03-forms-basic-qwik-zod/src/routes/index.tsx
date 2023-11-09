import { component$, useStore, useStyles$ } from '@builder.io/qwik';

import formStyles from './index.css?inline';
import {
  DocumentHead,
  Form,
  routeAction$,
  z,
  zod$,
} from '@builder.io/qwik-city';
import { SubmitButton } from '../components/button/submit';
import { InputElement } from '../components/input';
import { InvalidMessage } from '../components/message';

export const useNewsletterAddEmail = routeAction$(
  async (data) => {
    // Esto solo se ejecutará en el servidor cuando el usuario envíe el formulario
    // (o cuando la acción se llame programáticamente).
    console.log('(FORMULARIO) Datos a enviar', data);

    // SI ES VÁLIDO devuelve esto
    return {
      success: true,
      data,
    };
  },
  // SI NO ES VÁLIDO
  // Zod schema es usado para validar datos de un formulario
  // En este caso vamos a validar que sea de tipo string, de tipo email
  zod$({
    email: z.string().email({
      message: `
        El e-mail introducido no es correcto. Debe de seguir el siguiente formato:
        contacto@qwik-book.es
      `,
    }),
  }),
);

export default component$(() => {
  const action = useNewsletterAddEmail();
  useStyles$(formStyles);

  return (
    <div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">
        <Form action={action}>
          <div class="formbold-email-subscription-form">
            <InputElement
              type="email"
              name="email"
              placeholder=""
              error={action.value?.fieldErrors?.email?.length ? true : false}
            />

            <SubmitButton />
          </div>
          {action.value?.failed && action.value.fieldErrors.email?.length && (
            <InvalidMessage message={action.value.fieldErrors.email[0]} />
          )}

          <p>¿Enviado? {action.value?.success ? 'OK' : 'Pendiente'}</p>
        </Form>
        <p>
          Email registrado:{' '}
          {action.value?.data ? JSON.stringify(action.value.data.email) : '-'}
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Book - Proyectos',
  meta: [
    {
      name: 'description',
      content:
        'Trabajando con los diferentes proyectos del libro de Qwik en Español',
    },
    {
      name: 'keywords',
      content: 'qwik, qwik-book',
    },
    {
      name: 'author',
      content: 'Anartz Mugika Ledo',
    },
    {
      name: 'og:image',
      content:
        'https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png',
    },
    {
      name: 'og:url',
      content: 'https://github.com/qwik-book/qwik-book-projects',
    },
    {
      name: 'twitter:image',
      content:
        'https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Qwik - El libro',
    },
    {
      name: 'twitter:description',
      content:
        'Aprende Qwik desde 0 paso a paso aplicando conceptos teórico-prácticas hasta publicar nuestros proyectos',
    },
  ],
};

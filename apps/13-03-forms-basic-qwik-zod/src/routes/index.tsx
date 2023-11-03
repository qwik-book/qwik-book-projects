import {
  component$,
  useStore,
  useStyles$,
} from '@builder.io/qwik';

import formStyles from './index.css?inline';
import {
  DocumentHead,
  Form,
  routeAction$,
  z,
  zod$,
} from '@builder.io/qwik-city';

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
    email: z.string().email({message: 'El correo electrónico es incorrecto'}),
  }),
);

export default component$(() => {
  const formContainer = useStore({ email: '' });
  const action = useNewsletterAddEmail();
  useStyles$(formStyles);

  return (
    <div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">
        <Form action={action}>
          <div class="formbold-email-subscription-form">
            <input
              type="email"
              name="email"
              placeholder="Introduzca su correo electrónico"
              class="formbold-form-input invalid-field"
              required
            />

            <button class="formbold-btn">
              Suscribirme
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1661_1158)">
                  <path
                    d="M2.494 0.937761L14.802 7.70709C14.8543 7.73587 14.8978 7.77814 14.9282 7.8295C14.9586 7.88087 14.9746 7.93943 14.9746 7.99909C14.9746 8.05875 14.9586 8.11732 14.9282 8.16868C14.8978 8.22005 14.8543 8.26232 14.802 8.29109L2.494 15.0604C2.44325 15.0883 2.3861 15.1026 2.32818 15.1017C2.27027 15.1008 2.21358 15.0848 2.16372 15.0553C2.11385 15.0258 2.07253 14.9839 2.04382 14.9336C2.01511 14.8833 2.00001 14.8264 2 14.7684V1.22976C2.00001 1.17184 2.01511 1.11492 2.04382 1.06461C2.07253 1.0143 2.11385 0.97234 2.16372 0.942865C2.21358 0.913391 2.27027 0.897419 2.32818 0.896524C2.3861 0.895629 2.44325 0.909842 2.494 0.937761ZM3.33333 8.66576V13.0771L12.5667 7.99909L3.33333 2.92109V7.33243H6.66667V8.66576H3.33333Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1661_1158">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          {action.value?.failed && (
            <div class="invalid-message">
              El e-mail introducido no es correcto. Debe de seguir el siguiente
              formato: contacto@qwik-book.es
              {JSON.stringify(action.value)}
            </div>
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

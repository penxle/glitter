import { createClient, errorExchange } from '@glitter/gql';
import { error } from '@sveltejs/kit';
import { GlitterError } from '@/errors';
import { env } from '$env/dynamic/public';

// eslint-disable-next-line import/no-default-export
export default createClient({
  url: `${env.PUBLIC_API_URL}/graphql`,
  exchanges: [
    errorExchange((error) => {
      if (error.extensions.type === 'GlitterError') {
        return new GlitterError({
          code: error.extensions.code as string,
          message: error.message,
          status: error.extensions.status as number,
        });
      }

      return error;
    }),
  ],
  onError: (err) => {
    if (err instanceof GlitterError) {
      error(err.status, { message: err.message });
    }
  },
});

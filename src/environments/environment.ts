// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
import {API_BASE_URL, API_PORT} from '../app/config-files/api.server';

export const environment = {
  production: false,
  origin: `http://${API_BASE_URL}:${API_PORT}`
};

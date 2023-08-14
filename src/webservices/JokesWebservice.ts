import axios from 'axios';

import { apiPrefix } from './consts';

import { JokesData } from '@/models/user/JokesData';
import { JokesRequest } from './models/jokes/JokesRequest';

/* `const baseUrl: string = apiPrefix('/jokes');` is defining a constant variable `baseUrl` with a
string value that is obtained by calling the `apiPrefix` function with the argument `'/jokes'`. The
`apiPrefix` function is likely used to add a prefix to the base URL of the API endpoint, which can
be useful for managing different environments (e.g. development, staging, production) with different
base URLs. */
const baseUrl: string = apiPrefix('/jokes');

export const jokesService: (
  params: JokesRequest
) => Promise<JokesData> = async params => {
  const response = await axios.get<JokesData>(`${baseUrl}?${params.limit}`);
  return response.data;
};

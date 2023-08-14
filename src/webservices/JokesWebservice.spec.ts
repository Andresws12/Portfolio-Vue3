import * as JokesWebservice from './JokesWebservice';

import { createRandomJokeData } from '@/utils/mocks/user/mockJokeData';

const jokesServiceMock = jest.spyOn(JokesWebservice, 'jokesService');

describe('JokesWebservice: Check jokesService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should succeed on jokes request', async () => {
    const successResponseData = createRandomJokeData();

    jokesServiceMock.mockResolvedValue(successResponseData);

    const response = await JokesWebservice.jokesService({ limit: 1 });

    expect(response.joke).toEqual(successResponseData.joke);
  });
});

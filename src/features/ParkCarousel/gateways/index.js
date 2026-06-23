import { API_KEY, BASE_URL } from '@common/constants';

export const fetchParksFromServer = async () => {
  const url = `${BASE_URL}/parks?limit=10&api_key=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`NPS API error: Server returned status ${response.status}`);
  }

  const result = await response.json();
  return result.data;
};

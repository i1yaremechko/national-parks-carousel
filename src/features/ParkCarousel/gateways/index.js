export const fetchParks = async () => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/parks?limit=10`;
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': import.meta.env.VITE_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`NPS API error: Server returned status ${response.status}`);
  }

  const result = await response.json();
  return result.data;
};

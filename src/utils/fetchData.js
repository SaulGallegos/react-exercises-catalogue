export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'key',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export async function fetchData(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

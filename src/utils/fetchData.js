export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9304435731msh3f1cc01032f0718p11690ajsn743f8a8b1aa5',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export async function fetchData(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

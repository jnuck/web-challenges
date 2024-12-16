console.clear();

async function fetchData() {
  const url = await fetch("https://swapi.py4e.com/api/people");
  const data = await url.json();
  return data;
}

fetchData().then((data) => {
  console.log(data);
});

fetchData().then((data) => {
  console.log(data.count);
  console.log(data.results);
});

fetchData().then((data) => {
  console.log(data.results[2].eye_color);
});

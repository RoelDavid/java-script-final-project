async function getData() {
  const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=87422d08",
  );
  const data = await response.json();
  console.log(data);
}

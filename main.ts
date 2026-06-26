async function getData() {
  const response = await fetch("http://localhost:3000/quizzes");
  const data = await response.json();
  console.log(data);
}

getData();

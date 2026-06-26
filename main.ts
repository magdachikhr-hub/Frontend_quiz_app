//https://www.figma.com/design/SSnh6UYTeWG7BdfCq7JkDL/frontend-quiz-app?node-id=249-2527&t=GytLk8O17cjxbxm7-0

interface Quiz {
  title: string;
  icon: string;
  questions: Question[];
  id: string;
}

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const categoryWrapper = document.querySelector(".category_wrapper");

async function getData() {
  const response = await fetch("http://localhost:3000/quizzes");
  const data: Quiz[] = await response.json();
  console.log(data);
  const newQuiz = new mainQuiz(data);
  //   newQuiz.scoreIncrease();
  //   console.log(newQuiz.score);
  //   newQuiz.questionsTotalNumber();
  //   console.log(newQuiz.questionsTotalNumber());
  renderCategory(newQuiz.data);
}

getData();

class mainQuiz {
  data: Quiz[];
  score: number;
  currentQuestionIndex: number;
  category: string | null;
  categoryObj: Quiz | null;
  constructor(data: Quiz[]) {
    this.data = data;
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.category = null;
    this.categoryObj = null;
    console.log(this.data);
  }

  scoreIncrease(): void {
    this.score++;
  }
  getNextQuestion(): void {
    this.currentQuestionIndex++;
  }

  getCategory(chosenCat: any) {
    this.category = chosenCat.title;
    this.categoryObj = chosenCat;
    return this.categoryObj;
  }

  //   getCatTitle() {}

  //   getCategory(choosen) {
  //     this.data.forEach((cat) => {
  //       this.category = cat;
  //       //   console.log(this.category);
  //     });
  //   }

  questionsTotalNumber() {
    return this.categoryObj?.questions.length;
  }
}

function renderCategory(quizzes: any) {
  quizzes.forEach((quiz: any) => {
    console.log(quiz);

    const button = document.createElement("button");
    button.classList.add("category_btn");
    button.textContent = quiz.title;

    const img = document.createElement("img");
    img.setAttribute("src", quiz.icon);

    button.append(img);

    categoryWrapper?.append(button);

    button.addEventListener("click", () => {
      quizzes.getCategory(quiz);
    });
  });
}

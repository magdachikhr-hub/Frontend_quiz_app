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

async function getData() {
  const response = await fetch("http://localhost:3000/quizzes");
  const data: Quiz[] = await response.json();
  console.log(data);
  const newQuiz = new mainQuiz(data);
  //   newQuiz.scoreIncrease();
  //   console.log(newQuiz.score);
  newQuiz.questionsTotalNumber();
  console.log(newQuiz.questionsTotalNumber());
}

getData();

class mainQuiz {
  data: Quiz[];
  score: number;
  currentQuestionIndex: number;
  category: Quiz | null;
  constructor(data: Quiz[]) {
    this.data = data;
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.category = null;

    console.log(this.data);
  }

  scoreIncrease(): void {
    this.score++;
  }
  getNextQuestion(): void {
    this.currentQuestionIndex++;
  }

  //   getCategory(choosen) {
  //     this.data.forEach((cat) => {
  //       this.category = cat;
  //       //   console.log(this.category);
  //     });
  //   }

  questionsTotalNumber() {
    return this.category?.questions.length;
  }
}

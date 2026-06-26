//https://www.figma.com/design/SSnh6UYTeWG7BdfCq7JkDL/frontend-quiz-app?node-id=249-2527&t=GytLk8O17cjxbxm7-0
async function getData() {
    const response = await fetch("http://localhost:3000/quizzes");
    const data = await response.json();
    console.log(data);
    const newQuiz = new mainQuiz(data);
    //   newQuiz.scoreIncrease();
    //   console.log(newQuiz.score);
    newQuiz.questionsTotalNumber();
    console.log(newQuiz.questionsTotalNumber());
}
getData();
class mainQuiz {
    data;
    score;
    currentQuestionIndex;
    category;
    constructor(data) {
        this.data = data;
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.category = null;
        console.log(this.data);
    }
    scoreIncrease() {
        this.score++;
    }
    getNextQuestion() {
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
export {};
//# sourceMappingURL=main.js.map
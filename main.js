//https://www.figma.com/design/SSnh6UYTeWG7BdfCq7JkDL/frontend-quiz-app?node-id=249-2527&t=GytLk8O17cjxbxm7-0
const categoryWrapper = document.querySelector(".category_wrapper");
async function getData() {
    const response = await fetch("http://localhost:3000/quizzes");
    const data = await response.json();
    console.log(data);
    const newQuiz = new mainQuiz(data);
    //   newQuiz.scoreIncrease();
    //   console.log(newQuiz.score);
    //   newQuiz.questionsTotalNumber();
    //   console.log(newQuiz.questionsTotalNumber());
    renderCategory(newQuiz);
}
getData();
class mainQuiz {
    data;
    score;
    currentQuestionIndex;
    category;
    categoryObj;
    constructor(data) {
        this.data = data;
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.category = null;
        this.categoryObj = null;
        console.log(this.data);
    }
    scoreIncrease() {
        this.score++;
    }
    getNextQuestion() {
        this.currentQuestionIndex++;
    }
    getCategory(chosenCat) {
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
function renderCategory(instance) {
    instance.data.forEach((quiz) => {
        console.log(quiz);
        const button = document.createElement("button");
        button.classList.add("category_btn");
        button.textContent = quiz.title;
        const img = document.createElement("img");
        img.setAttribute("src", quiz.icon);
        button.append(img);
        categoryWrapper?.append(button);
        button.addEventListener("click", () => {
            instance.getCategory(quiz);
        });
    });
}
export {};
//# sourceMappingURL=main.js.map
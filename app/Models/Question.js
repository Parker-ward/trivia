export class Question {

  constructor(data) {

    // this.amount = data.amount
    this.question = data.question
    this.category = data.category
    this.difficulty = data.difficulty
    this.type = data.type
  }

  get QuestionCard() {

    return /*html*/`
    <div class="col-md-8">
      <div class="card"
    <h1>${this.question}</h1>
    </div>
    </div>
    `
  }
}
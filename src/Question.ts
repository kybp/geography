export enum QuestionState {
  RIGHT, WRONG, UNANSWERED
}

class Question {
  constructor(public displayName: string,
              public elementId:   string,
              public drawnState = QuestionState.UNANSWERED) {
  }

  getRight() {
    return new Question(this.displayName, this.elementId, QuestionState.RIGHT)
  }

  getWrong() {
    return new Question(this.displayName, this.elementId, QuestionState.WRONG)
  }
}

export default Question

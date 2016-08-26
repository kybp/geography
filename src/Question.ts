export const RIGHT      = 'RIGHT'
export const WRONG      = 'WRONG'
export const UNANSWERED = 'UNANSWERED'

class Question {
  constructor(public displayName: string,
              public elementId:   string,
              public drawnState = UNANSWERED) {
  }

  getRight() {
    return new Question(this.displayName, this.elementId, RIGHT)
  }

  getWrong() {
    return new Question(this.displayName, this.elementId, WRONG)
  }
}

export default Question

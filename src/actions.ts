import Question from './Question'

enum Actions {
  SELECT_CLICKABLE,
  ADD_QUESTION,
  REMOVE_QUESTION,

  LOAD_QUIZ,
  RESET_QUIZ,
  START_QUIZ,

  RESET_TIMER,
  START_TIMER,
  STOP_TIMER
}
export default Actions

export const selectClickable = (elementId: string) => ({
  type: Actions.SELECT_CLICKABLE,
  elementId
})

export const addQuestion = (question: Question) => ({
  type: Actions.ADD_QUESTION,
  question
})

export const removeQuestion = (id: string) => ({
  type: Actions.REMOVE_QUESTION,
  id
})

export const loadQuiz = () => ({
  type: Actions.LOAD_QUIZ
})

export const resetQuiz = () => ({
  type: Actions.RESET_QUIZ
})

export const startQuiz = () => ({
  type: Actions.START_QUIZ
})

export const resetTimer = () => ({
  type: Actions.RESET_TIMER
})

export const startTimer = () => ({
  type: Actions.START_TIMER,
  time: Date.now()
})

export const stopTimer = () => ({
  type: Actions.STOP_TIMER,
  time: Date.now()
})

import Question from './Question'

export const SELECT_CLICKABLE = 'SELECT_CLICKABLE'
export const ADD_QUESTION     = 'ADD_QUESTION'
export const LOAD_QUIZ        = 'LOAD_QUIZ'
export const START_QUIZ       = 'START_QUIZ'
export const START_TIMER      = 'START_TIMER'
export const STOP_TIMER       = 'STOP_TIMER'

export const addQuestion = (question: Question) => ({
  type: ADD_QUESTION,
  question
})

export const loadQuiz = () => ({
  type: LOAD_QUIZ
})

export const selectClickable = (elementId: string) => ({
  type: SELECT_CLICKABLE,
  elementId
})

export const startQuiz = () => ({
  type: START_QUIZ
})

export const startTimer = () => ({
  type: START_TIMER,
  time: Date.now()
})

export const stopTimer = () => ({
  type: STOP_TIMER,
  time: Date.now()
})

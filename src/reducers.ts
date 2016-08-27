import * as _ from 'lodash'
import { combineReducers } from 'redux'
import Question, { UNANSWERED } from './Question'
import { NOT_STARTED, LOADING, RUNNING, FINISHED } from './QuizDisplay'
import { ADD_QUESTION, SELECT_CLICKABLE } from './actions'
import { LOAD_QUIZ, START_QUIZ } from './actions'

interface ProvinceQuizState {
  currentQuestion: Question,
  otherQuestions:  Question[],
  phase:           string,
}

const initialQuizState: ProvinceQuizState = {
  currentQuestion: null,
  otherQuestions:  [],
  phase: NOT_STARTED,
}

const nextQuestion = (questions: Question[] = []) => {
  const unanswered = _.filter(questions, (question: Question) => (
    question.drawnState === UNANSWERED
  ))
  const selected = _.sample(unanswered)
  const phase = unanswered.length === 0 ? FINISHED : RUNNING
  return { otherQuestions:  _.without(questions, selected),
           currentQuestion: selected,
           phase }
}

const provinceQuiz = (state = initialQuizState, action: any) => {
  const { currentQuestion, otherQuestions } = state

  switch (action.type) {

  case ADD_QUESTION:
    return Object.assign({}, state, {
      otherQuestions: otherQuestions.concat(action.question)
    })

  case LOAD_QUIZ:
    return Object.assign({}, state, { phase: LOADING })

  case SELECT_CLICKABLE:
    const wasCorrect = action.elementId === currentQuestion.elementId
    return nextQuestion(otherQuestions.concat(
      wasCorrect ? currentQuestion.getRight() : currentQuestion.getWrong()
    ))

  case START_QUIZ:
    return nextQuestion(otherQuestions)

  default:
    return state
  }
}

export default combineReducers({ provinceQuiz })

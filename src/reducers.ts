import * as _ from 'lodash'
import { combineReducers } from 'redux'
import Question, { UNANSWERED } from './Question'
import { NOT_STARTED, LOADING, RUNNING, FINISHED } from './QuizDisplay'
import { ADD_QUESTION, REMOVE_QUESTION } from './actions'
import { SELECT_CLICKABLE } from './actions'
import { LOAD_QUIZ, RESET_QUIZ, START_QUIZ } from './actions'
import { RESET_TIMER, START_TIMER, STOP_TIMER } from './actions'

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

  case REMOVE_QUESTION:
    return Object.assign({}, state, {
      otherQuestions: otherQuestions.filter((question) => (
        question.elementId == action.id
      ))
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

  case RESET_QUIZ:
    const allQuestions = currentQuestion
      ? otherQuestions.concat(currentQuestion)
      : otherQuestions
    return {
      currentQuestion: null,
      otherQuestions:  allQuestions,
      phase:           NOT_STARTED
    }

  default:
    return state
  }
}

interface TimerState {
  startTime: number,
  stopTime:  number,
}

const initialTimerState: TimerState = {
  startTime: null,
  stopTime:  null
}

const timer = (state = initialTimerState, action: any) => {
  switch (action.type) {
  case RESET_TIMER:
    return initialTimerState
  case START_TIMER:
    return Object.assign({}, state, { startTime: action.time })
  case STOP_TIMER:
    return Object.assign({}, state, { stopTime:  action.time })
  default:
    return state
  }
}

export default combineReducers({ provinceQuiz, timer })

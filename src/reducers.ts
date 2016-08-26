import { List, Map } from 'immutable'
import * as _ from 'lodash'
import { combineReducers } from 'redux'
import Question, { UNANSWERED } from './Question'
import QuizDisplay from './QuizDisplay'
import { SELECT_CLICKABLE } from './actions'

interface ProvinceQuizState {
  currentQuestion: Question,
  otherQuestions:  Question[],
  finished:        boolean,
}

const fullQuestionList = [
  new Question('Alberta',                   'ab'),
  new Question('British Columbia',          'bc'),
  new Question('Manitoba',                  'mb'),
  new Question('Ontario',                   'on'),
  new Question('New Brunswick',             'nb'),
  new Question('Newfoundland and Labrador', 'nl'),
  new Question('Northwest Territories',     'nt'),
  new Question('Nova Scotia',               'ns'),
  new Question('Nunavut',                   'nu'),
  new Question('Prince Edward Island',      'pe'),
  new Question('Québec',                    'qc'),
  new Question('Saskatchewan',              'sk'),
  new Question('Yukon',                     'yt')
]

const nextQuestion = (questions = fullQuestionList) => {
  const selected = _.sample(_.filter(questions, (question: Question) => (
    question.drawnState === UNANSWERED
  )))
  return { otherQuestions:  _.without(questions, selected),
           currentQuestion: selected,
           finished:        selected === undefined }
}

const provinceQuiz = (state = nextQuestion(), action: any) => {
  const { currentQuestion, otherQuestions } = state

  switch (action.type) {

  case SELECT_CLICKABLE:
    const wasCorrect = action.elementId === currentQuestion.elementId
    return nextQuestion(otherQuestions.concat(
      wasCorrect ? currentQuestion.getRight() : currentQuestion.getWrong()
    ))

  default:
    return state
  }
}

export default combineReducers({ provinceQuiz })

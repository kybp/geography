import { List, Map } from 'immutable'
import * as _ from 'lodash'
import { combineReducers } from 'redux'
import { UNANSWERED, fullProvinceList } from './Province'
import Province from './Province'
import QuizDisplay from './QuizDisplay'
import { SELECT_PROVINCE } from './actions'

interface ProvinceQuizState {
  provinces: Province[],
  answer:    Province
}

const nextAnswer = (provinces = fullProvinceList()) => {
  const answer = _.sample(_.filter(provinces, (province: Province) => (
    province.drawnState === UNANSWERED
  )))
  return { answer, provinces: _.without(provinces, answer) }
}

const provinceQuiz = (state = nextAnswer(), action: any) => {
  const { answer, provinces } = state

  switch (action.type) {
  case SELECT_PROVINCE:
    const answerIndex = provinces.indexOf(answer)
    const wasCorrect  = action.elementId === answer.elementId
    return nextAnswer(provinces.slice(0, answerIndex).concat(
      [wasCorrect ? answer.getRight() : answer.getWrong()],
      provinces.slice(answerIndex)
    ))

  default:
    return state
  }
}

export default combineReducers({ provinceQuiz })

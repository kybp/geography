// -*- typescript -*-
import * as _ from 'lodash'
import * as React from 'react'
import { connect } from 'react-redux'
import { selectClickable } from './actions'
import { UNANSWERED } from './Question'
import { makePointString, Point } from './Point'
import points from './points'
import Question from './Question'

const Clickable = (state: any) => {
  const { id, xOffset, yOffset, dispatch, provinceStates } = state
  const drawnState = provinceStates[id]
  const className = "clickable " + drawnState.toLowerCase()

  const onClick = () => {
    if (drawnState === UNANSWERED) {
      dispatch(selectClickable(id))
    }
  }

  return (
    <g id={ id } onClick={ onClick } className={ className }>
      { points[id].map((points, index) => (
          <polygon points={ makePointString(xOffset, yOffset, points) } 
                   key={ id + index} />
      )) }
    </g>
  )
}

const mapStateToProps = ({ provinceQuiz }) => {
  let allQuestions = provinceQuiz.otherQuestions.slice()
  if (! provinceQuiz.finished) {
    allQuestions.push(provinceQuiz.currentQuestion)
  }

  const result: { [key: string]: string } = {}

  _.forEach(allQuestions, (question: Question) => {
    result[question.elementId] = question.drawnState
  })

  return { provinceStates: result }
}

export default connect(mapStateToProps)(Clickable)

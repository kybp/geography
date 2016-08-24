// -*- typescript -*-
import * as React from 'react'
import { connect } from 'react-redux'
import { selectProvince } from '../../../actions'
import { UNANSWERED } from '../../../Province'
import { makePointString, Point } from '../../Point'
import points from './points'

const makeProvince = (id: string) => (
  connect()(({ xOffset, yOffset, dispatch, drawnState }) => {
    const className = "province " + (drawnState || UNANSWERED).toLowerCase()

    const onClick = () => {
      if (drawnState === undefined || drawnState === UNANSWERED) {
        dispatch(selectProvince(id))
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
  })
)

export const AB = makeProvince('ab')
export const BC = makeProvince('bc')
export const MB = makeProvince('mb')
export const SK = makeProvince('sk')
export const ON = makeProvince('on')
export const QC = makeProvince('qc')
export const NU = makeProvince('nu')
export const YT = makeProvince('yt')
export const NB = makeProvince('nb')
export const NT = makeProvince('nt')
export const NS = makeProvince('ns')
export const NL = makeProvince('nl')
export const PE = makeProvince('pe')

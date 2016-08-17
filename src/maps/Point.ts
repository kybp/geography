import { List } from 'immutable'

export class Point {
  constructor(public x: number, public y: number) {}
}

export type PointSet = List<Point>

export const makePointString =
  (points: PointSet, xOffset: number, yOffset: number) => (
    points
      .map(({ x, y }) => (x + xOffset) + ' ' + (y + yOffset))
      .join(', ')
)

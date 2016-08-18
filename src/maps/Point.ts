export class Point {
  constructor(public x: number, public y: number) {}
}

export const makePointString =
  (xOffset: number, yOffset: number, points: Point[]) => (
    points
      .map(({ x, y }) => (x + xOffset) + ' ' + (y + yOffset))
      .join(', ')
)

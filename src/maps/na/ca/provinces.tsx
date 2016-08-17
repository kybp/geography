import * as React from 'react'
import { List } from 'immutable'
import { Point, PointSet, makePointString } from '../../Point'

const makePolygon =
  (fill: string, xOffset: number, yOffset: number, points: PointSet) => (
    <polygon points={ makePointString(points, xOffset, yOffset) } 
             fill={ fill } />
)

export const Alberta = ({ fill }) => {
  const xOffset = 188.65698 // fullsize: 1160
  const yOffset = 120.52698 // fullsize: 706.319
  const points: PointSet = List.of(
    new Point( 99.500, 321.702), new Point( 48.563, 302.641),
    new Point( 45.884, 296.673), new Point( 48.056, 285.621),
    new Point( 47.167, 264.937), new Point( 40.674, 251.997),
    new Point( 33.948, 236.497), new Point( 28.934, 225.787),
    new Point( 25.376, 217.787), new Point( 21.857, 210.896),
    new Point( 19.000, 206.551), new Point( 16.923, 202.573),
    new Point( 13.893, 192.929), new Point( 10.526, 182.692),
    new Point(  7.094, 176.465), new Point(  2.550, 171.465),
    new Point(  0.000, 164.181), new Point(  1.000, 158.010),
    new Point( 52.175,  11.091), new Point( 56.209,   0.000),
    new Point( 78.355,   7.365), new Point(119.500,  20.297),
    new Point(160.424,  32.279), new Point(182.594,  38.942),
    new Point(178.634,  54.940), new Point(175.088,  56.339),
    new Point(162.029,  69.246), new Point(165.571,  72.013),
    new Point(172.012,  71.673), new Point(175.532,  67.580),
    new Point(176.641,  65.989), new Point(173.162,  82.814),
    new Point(154.997, 158.681), new Point(146.503, 194.181),
    new Point(130.667, 260.181), new Point(114.183, 325.540),
    new Point( 99.500, 321.702))
  return makePolygon(fill, xOffset, yOffset, points)
}

export const BC = ({ fill }) => {
  const xOffset = 0 // fullsize: 971.343
  const yOffset = 0 // fullsize: 585.792
  return <g>
    { makePolygon(fill, xOffset, yOffset, List.of(
      new Point(75.657, 389.948), new Point(59.657, 369.021),
      new Point(56.721, 364.926), new Point(50.169, 353.708),
      new Point(47.279, 347.208), new Point(43.274, 339.208),
      new Point(37.466, 327.941), new Point(32.142, 314.941),
      new Point(29.537, 305.429), new Point(31.177, 299.715),
      new Point(36.079, 297.244), new Point(53.657, 314.144),
      new Point(60.171, 321.623), new Point(64.646, 327.208),
      new Point(68.683, 332.208), new Point(73.255, 348.096),
      new Point(78.892, 361.018), new Point(86.11, 377.579),
      new Point(88.168, 387.239), new Point(88.914, 391.618),
      new Point(75.657, 389.948))) }

    { makePolygon(fill, xOffset, yOffset, List.of(
      new Point(234.157, 427.643), new Point(196.657, 415.988),
      new Point(108.657, 382.996), new Point( 98.157, 378.978),
      new Point( 93.672, 371.948), new Point( 91.557, 366.448),
      new Point( 83.657, 357.307), new Point( 82.793, 355.208),
      new Point( 76.26,  345.270), new Point( 66.028, 325.297),
      new Point( 61.274, 315.047), new Point( 60.344, 310.208),
      new Point( 58.490, 309.421), new Point( 53.407, 305.879),
      new Point( 48.581, 301.916), new Point( 48.090, 298.708),
      new Point( 47.633, 283.501), new Point( 50.805, 271.737),
      new Point( 52.750, 266.045), new Point( 51.657, 258.968),
      new Point( 47.616, 249.266), new Point( 44.143, 240.107),
      new Point( 46.760, 234.986), new Point( 45.368, 224.708),
      new Point( 43.367, 207.754), new Point( 45.945, 192.254),
      new Point( 53.804, 187.708), new Point( 66.657, 176.060),
      new Point( 72.538, 163.278), new Point( 75.657, 153.693),
      new Point( 72.673, 144.880), new Point( 61.619, 123.969),
      new Point( 63.188, 108.264), new Point( 64.794,  91.360),
      new Point( 63.143,  76.208), new Point( 62.135,  64.606),
      new Point( 61.126,  58.606), new Point( 57.586,  42.208),
      new Point( 54.118,  27.464), new Point( 49.948,  23.685),
      new Point( 40.088,  24.055), new Point( 32.233,  29.260),
      new Point( 22.219,  33.330), new Point( 18.050,  35.208),
      new Point( 18.699,  31.958), new Point( 17.225,  11.952),
      new Point( 17.580,   0.000), new Point( 40.032,  14.114),
      new Point(123.157,  64.681), new Point(139.157,  73.212),
      new Point(184.157,  95.999), new Point(218.657, 110.246),
      new Point(240.955, 119.215), new Point(240.740, 122.306),
      new Point(229.119, 154.208), new Point(214.657, 194.208),
      new Point(186.657, 276.547), new Point(185.164, 283.895),
      new Point(187.962, 293.708), new Point(199.390, 314.910),
      new Point(202.820, 325.126), new Point(205.657, 330.599),
      new Point(208.010, 334.153), new Point(211.647, 341.484),
      new Point(213.813, 346.805), new Point(220.071, 359.708),
      new Point(227.896, 377.132), new Point(235.033, 394.632),
      new Point(233.299, 407.082), new Point(234.424, 424.974),
      new Point(234.157, 427.643))) }
  
    { makePolygon(fill, xOffset, yOffset, List.of(
      new Point( 4.897, 238.941), new Point( 0.000, 202.349),
      new Point( 1.860, 186.463), new Point( 3.142, 183.322),
      new Point(11.487, 183.529), new Point(22.657, 194.634),
      new Point(13.657, 205.208), new Point( 7.145, 231.715),
      new Point( 9.645, 242.458), new Point( 4.897, 238.941))) }
  </g>
}

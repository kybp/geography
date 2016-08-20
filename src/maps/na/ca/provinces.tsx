// -*- web -*-
import * as React from 'react'
import { connect } from 'react-redux'
import { selectProvince } from '../../../actions'
import { Point, makePointString } from '../../Point'
import { UNANSWERED } from '../../../Province'

export const AB = connect()(
  ({ xOffset, yOffset, dispatch, drawnState }) => (
    <polygon
        className={ "province " + (drawnState || UNANSWERED).toLowerCase() }
        id="ab" onClick={ () => dispatch(selectProvince("ab")) }
        points={ makePointString(xOffset, yOffset, [
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
            new Point( 99.500, 321.702)
          ]) } />
  ))

export const BC = connect()(
  ({ fill, xOffset, yOffset, dispatch, drawnState}) => (
    <g id="bc" onClick={ () => dispatch(selectProvince("bc")) }
       className={ "province " + (drawnState || UNANSWERED).toLowerCase() }>
      <polygon points={ makePointString(xOffset, yOffset, [
          new Point( 75.657, 389.948), new Point( 59.657, 369.021),
          new Point( 56.721, 364.926), new Point( 50.169, 353.708),
          new Point( 47.279, 347.208), new Point( 43.274, 339.208),
          new Point( 37.466, 327.941), new Point( 32.142, 314.941),
          new Point( 29.537, 305.429), new Point( 31.177, 299.715),
          new Point( 36.079, 297.244), new Point( 53.657, 314.144),
          new Point( 60.171, 321.623), new Point( 64.646, 327.208),
          new Point( 68.683, 332.208), new Point( 73.255, 348.096),
          new Point( 78.892, 361.018), new Point( 86.110, 377.579),
          new Point( 88.168, 387.239), new Point( 88.914, 391.618),
          new Point( 75.657, 389.948)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(234.157, 427.643), new Point(196.657, 415.988),
          new Point(108.657, 382.996), new Point( 98.157, 378.978),
          new Point( 93.672, 371.948), new Point( 91.557, 366.448),
          new Point( 83.657, 357.307), new Point( 82.793, 355.208),
          new Point( 76.260, 345.270), new Point( 66.028, 325.297),
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
          new Point(234.157, 427.643)
        ]) } />
      
      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(  4.897, 238.941), new Point(  0.000, 202.349),
          new Point(  1.860, 186.463), new Point(  3.142, 183.322),
          new Point( 11.487, 183.529), new Point( 22.657, 194.634),
          new Point( 13.657, 205.208), new Point(  7.145, 231.715),
          new Point(  9.645, 242.458), new Point(  4.897, 238.941)
        ]) } />
    </g>
  ))

export const MB = connect()(
  ({ fill, xOffset, yOffset, dispatch, drawnState}) => (
    <polygon
        className={ "province " + (drawnState || UNANSWERED).toLowerCase() }
        id="mb" onClick={ () => dispatch(selectProvince("mb")) }
        points={ makePointString(xOffset, yOffset, [
            new Point( 26.719,   0.000), new Point( 26.000,   6.312),
            new Point( 25.000,  14.156), new Point( 24.000,  21.156),
            new Point( 23.000,  28.156), new Point( 21.000,  42.562),
            new Point( 20.969,  58.375), new Point( 19.844,  64.812),
            new Point( 15.875,  70.031), new Point( 14.031,  84.656),
            new Point( 13.031, 101.656), new Point( 12.063, 114.656),
            new Point( 11.000, 129.656), new Point(  9.000, 156.656),
            new Point(  8.000, 169.656), new Point(  6.969, 184.656),
            new Point(  6.000, 198.656), new Point(  5.000, 213.156),
            new Point(  4.000, 227.156), new Point(  2.969, 242.156),
            new Point(  2.000, 255.156), new Point(  0.063, 287.156),
            new Point(  0.000, 293.656), new Point(  6.000, 294.25),
            new Point( 27.500, 296.656), new Point( 35.500, 297.625),
            new Point( 53.500, 299.719), new Point( 68.500, 301.031),
            new Point( 88.156, 301.969), new Point( 98.281, 302.281),
            new Point( 98.906, 297.469), new Point(100.031, 280.656),
            new Point(101.000, 261.656), new Point(102.000, 239.656),
            new Point(105.813, 204.125), new Point(121.594, 186.031),
            new Point(139.594, 166.687), new Point(145.000, 160.562),
            new Point(164.438, 138.187), new Point(177.594, 123.062),
            new Point(187.938, 111.531), new Point(196.406, 102.156),
            new Point(201.500,  95.594), new Point(191.750,  91.562),
            new Point(181.781,  88.125), new Point(174.469,  86.500),
            new Point(167.719,  87.750), new Point(153.094,  89.562),
            new Point(152.406,  86.906), new Point(150.188,  70.156),
            new Point(146.938,  52.156), new Point(133.125,  41.719),
            new Point(123.281,  37.781), new Point(123.344,  16.906),
            new Point(124.156,  10.156), new Point(118.813,  10.031),
            new Point(112.750,   9.719), new Point(104.500,   8.750),
            new Point( 95.500,   7.687), new Point( 87.063,   6.687),
            new Point( 78.063,   5.625), new Point( 70.000,   4.687),
            new Point( 56.000,   3.187), new Point( 42.000,   1.719),
            new Point( 31.344,   0.562), new Point( 26.719,   0.000)
          ]) } />
  ))

export const SK = connect()(
  ({ fill, xOffset, yOffset, dispatch, drawnState}) => (
    <polygon
        className={ "province " + (drawnState || UNANSWERED).toLowerCase() }
        id="sk" onClick={ () => dispatch(selectProvince("sk")) }
        points={ makePointString(xOffset, yOffset, [
            new Point(141.472, 312.220), new Point(133.055, 311.158),
            new Point(122.555, 310.113), new Point(113.555, 309.107),
            new Point(104.555, 308.117), new Point( 95.555, 307.102),
            new Point( 64.555, 300.938), new Point( 38.555, 295.116),
            new Point( 25.555, 292.181), new Point( 17.055, 290.307),
            new Point(  7.272, 288.175), new Point(  0.000, 284.749),
            new Point(  9.040, 247.607), new Point( 12.498, 233.107),
            new Point( 19.209, 205.107), new Point( 27.759, 169.607),
            new Point( 33.135, 147.117), new Point( 36.548, 132.617),
            new Point( 44.106, 101.107), new Point( 52.025,  68.107),
            new Point( 59.052,  38.935), new Point( 62.705,  23.764),
            new Point( 67.880,  24.192), new Point( 77.963,  25.364),
            new Point( 90.637,  25.186), new Point(104.482,  26.994),
            new Point(112.555,  27.615), new Point( 86.055,  14.710),
            new Point( 79.805,  13.613), new Point( 75.555,  11.607),
            new Point( 67.489,  10.642), new Point( 66.646,   4.618),
            new Point( 69.396,   0.000), new Point( 84.627,   3.133),
            new Point( 89.055,   4.009), new Point(136.555,  13.257),
            new Point(151.055,  16.084), new Point(167.055,  18.852),
            new Point(170.903,  22.671), new Point(168.180,  44.607),
            new Point(164.978,  68.107), new Point(161.466,  75.607),
            new Point(152.642,  85.398), new Point(152.404,  91.798),
            new Point(150.818, 105.836), new Point(148.506, 110.527),
            new Point(152.542, 109.271), new Point(157.189, 106.607),
            new Point(157.052, 129.607), new Point(156.032, 144.107),
            new Point(155.042, 157.607), new Point(154.029, 172.107),
            new Point(153.043, 185.607), new Point(152.023, 200.107),
            new Point(151.044, 213.607), new Point(150.007, 228.107),
            new Point(149.050, 241.607), new Point(148.055, 255.607),
            new Point(147.055, 269.607), new Point(146.055, 283.607),
            new Point(144.994, 297.886), new Point(144.449, 306.136),
            new Point(141.472, 312.220)
          ]) } />
  ))

export const ON = connect()(
  ({ fill, xOffset, yOffset, dispatch, drawnState}) => (
    <polygon
        className={ "province " + (drawnState || UNANSWERED).toLowerCase() }
        id="on" onClick={ () => dispatch(selectProvince("on")) }
        points={ makePointString(xOffset, yOffset, [
            new Point(219.865, 386.556), new Point(225.100, 383.135),
            new Point(230.179, 381.670), new Point(231.438, 372.527),
            new Point(231.159, 369.877), new Point(232.802, 364.279),
            new Point(235.296, 359.279), new Point(241.707, 347.381),
            new Point(241.230, 335.884), new Point(244.666, 321.341),
            new Point(248.259, 314.916), new Point(246.468, 310.958),
            new Point(242.535, 305.095), new Point(241.160, 300.500),
            new Point(247.782, 306.470), new Point(263.894, 316.867),
            new Point(268.342, 303.325), new Point(251.995, 285.589),
            new Point(243.495, 283.420), new Point(231.426, 281.081),
            new Point(211.233, 279.500), new Point(195.064, 277.440),
            new Point(188.343, 272.652), new Point(182.948, 267.245),
            new Point(179.954, 261.562), new Point(178.735, 257.923),
            new Point(178.357, 251.448), new Point(174.368, 244.173),
            new Point(168.574, 239.145), new Point(151.525, 230.994),
            new Point(149.895, 225.845), new Point(148.875, 219.127),
            new Point(148.116, 216.255), new Point(140.041, 216.784),
            new Point(126.182, 214.393), new Point(120.397, 211.473),
            new Point(116.272, 214.077), new Point(113.722, 218.256),
            new Point(108.595, 224.199), new Point( 98.274, 232.436),
            new Point( 79.394, 234.448), new Point( 64.815, 233.013),
            new Point( 51.394, 228.284), new Point( 48.827, 227.500),
            new Point( 42.577, 224.009), new Point( 29.715, 220.509),
            new Point( 19.109, 219.072), new Point( 13.788, 216.942),
            new Point(  6.941, 208.222), new Point(  3.077, 200.397),
            new Point(  0.000, 192.897), new Point(  1.900, 150.000),
            new Point(  2.909, 128.108), new Point( 25.826,  86.500),
            new Point( 41.428,  69.609), new Point( 48.929,  61.109),
            new Point( 61.923,  46.000), new Point( 78.888,  26.464),
            new Point(100.232,   2.500), new Point(102.235,   0.000),
            new Point(105.565,   1.888), new Point(116.394,  12.007),
            new Point(119.682,  16.295), new Point(128.932,  20.630),
            new Point(137.911,  24.609), new Point(147.944,  28.426),
            new Point(155.444,  33.348), new Point(160.894,  38.196),
            new Point(179.632,  38.821), new Point(202.504,  41.556),
            new Point(206.638,  43.665), new Point(205.960,  52.333),
            new Point(204.422,  61.865), new Point(205.450,  65.833),
            new Point(207.954,  73.467), new Point(210.154,  84.162),
            new Point(210.764,  90.598), new Point(213.422,  99.883),
            new Point(230.485, 120.500), new Point(240.949, 134.031),
            new Point(242.878, 139.706), new Point(249.061, 139.240),
            new Point(255.244, 138.774), new Point(255.878, 143.887),
            new Point(257.880, 161.500), new Point(258.860, 169.500),
            new Point(259.898, 178.000), new Point(260.869, 186.500),
            new Point(262.935, 204.000), new Point(263.887, 212.500),
            new Point(266.904, 237.885), new Point(270.525, 250.486),
            new Point(279.336, 261.297), new Point(303.894, 270.008),
            new Point(314.482, 273.569), new Point(320.982, 276.521),
            new Point(325.630, 280.411), new Point(328.366, 284.280),
            new Point(337.001, 283.805), new Point(351.946, 279.861),
            new Point(363.471, 276.230), new Point(364.861, 282.396),
            new Point(361.730, 287.770), new Point(342.894, 307.735),
            new Point(334.894, 316.488), new Point(329.777, 321.311),
            new Point(316.281, 326.431), new Point(283.483, 339.923),
            new Point(283.663, 348.968), new Point(289.022, 349.887),
            new Point(292.623, 352.854), new Point(287.187, 357.500),
            new Point(269.394, 364.217), new Point(270.369, 367.472),
            new Point(272.845, 369.349), new Point(270.099, 370.038),
            new Point(262.931, 369.614), new Point(239.394, 380.645),
            new Point(228.394, 388.587), new Point(221.659, 389.008),
            new Point(218.425, 389.342), new Point(219.865, 386.556)
          ]) } />
  ))

export const QC = connect()(
  ({ fill, xOffset, yOffset, dispatch, drawnState}) => (
    <g id="qc" onClick={ () => dispatch(selectProvince("qc")) }
       className={ "province " + (drawnState || UNANSWERED).toLowerCase() }>
      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(134.112, 462.212), new Point(132.086, 455.962),
          new Point(127.570, 452.173), new Point(112.160, 458.108),
          new Point(102.038, 459.977), new Point( 92.193, 456.484),
          new Point( 87.925, 452.984), new Point( 80.972, 449.862),
          new Point( 70.361, 446.275), new Point( 46.771, 438.492),
          new Point( 38.540, 428.198), new Point( 34.856, 414.977),
          new Point( 33.812, 405.477), new Point( 32.309, 392.977),
          new Point( 30.786, 379.977), new Point( 29.823, 371.977),
          new Point( 26.292, 341.477), new Point( 22.758, 312.862),
          new Point( 25.346, 309.621), new Point( 27.803, 305.925),
          new Point( 29.888, 298.686), new Point( 32.639, 291.997),
          new Point( 28.571, 280.977), new Point( 23.438, 268.477),
          new Point( 20.657, 262.048), new Point( 19.207, 254.787),
          new Point( 13.225, 241.929), new Point( 11.292, 238.192),
          new Point(  9.314, 232.977), new Point(  7.336, 229.474),
          new Point( 17.834, 220.168), new Point( 25.987, 213.286),
          new Point( 33.620, 204.593), new Point( 41.746, 190.745),
          new Point( 45.226, 173.327), new Point( 42.283, 156.675),
          new Point( 38.924, 145.819), new Point( 22.494, 128.154),
          new Point(  8.529, 114.215), new Point(  9.985, 107.362),
          new Point( 11.939, 101.978), new Point( 14.262,  98.818),
          new Point( 16.314,  92.381), new Point( 18.275,  85.518),
          new Point( 18.811,  79.294), new Point( 16.938,  72.687),
          new Point( 10.743,  60.477), new Point(  8.459,  46.130),
          new Point(  7.064,  33.130), new Point(  2.840,  24.622),
          new Point(  0.000,  17.768), new Point(  2.574,  12.520),
          new Point(  9.871,   6.624), new Point( 28.090,   7.398),
          new Point( 45.002,   8.906), new Point( 51.726,   3.920),
          new Point( 56.761,   0.000), new Point( 84.258,  14.477),
          new Point( 90.093,  20.977), new Point( 91.596,  26.028),
          new Point(103.548,  29.822), new Point(118.665,  32.635),
          new Point(123.516,  34.205), new Point(122.833,  39.670),
          new Point(127.529,  61.477), new Point(128.494,  67.222),
          new Point(130.919,  72.492), new Point(135.426,  79.496),
          new Point(137.408,  83.977), new Point(142.334,  83.377),
          new Point(152.554,  87.299), new Point(160.581,  92.508),
          new Point(163.314,  94.085), new Point(169.682,  90.727),
          new Point(174.766,  82.357), new Point(177.689,  77.216),
          new Point(181.304,  71.835), new Point(181.009,  53.488),
          new Point(180.178,  50.498), new Point(181.479,  44.044),
          new Point(186.440,  36.555), new Point(187.775,  40.716),
          new Point(194.720,  52.977), new Point(198.279,  65.477),
          new Point(204.064,  68.189), new Point(209.814,  67.772),
          new Point(209.662,  74.125), new Point(208.445,  83.855),
          new Point(208.335,  89.015), new Point(218.528,  95.498),
          new Point(222.841, 108.957), new Point(224.766, 123.438),
          new Point(226.744, 132.048), new Point(230.417, 137.895),
          new Point(238.304, 152.072), new Point(240.175, 155.352),
          new Point(243.774, 160.889), new Point(243.417, 169.478),
          new Point(241.322, 174.214), new Point(236.068, 173.668),
          new Point(227.753, 172.463), new Point(222.253, 175.383),
          new Point(215.230, 177.401), new Point(207.386, 174.567),
          new Point(198.924, 178.261), new Point(195.786, 182.172),
          new Point(193.314, 186.647), new Point(190.214, 193.236),
          new Point(187.667, 200.522), new Point(189.586, 207.201),
          new Point(201.929, 219.580), new Point(205.000, 229.825),
          new Point(206.738, 235.665), new Point(218.924, 236.510),
          new Point(221.721, 240.989), new Point(224.923, 248.677),
          new Point(232.957, 250.502), new Point(240.443, 251.593),
          new Point(244.112, 253.685), new Point(260.129, 254.091),
          new Point(261.860, 248.885), new Point(263.243, 236.207),
          new Point(267.447, 238.045), new Point(275.697, 239.601),
          new Point(312.814, 226.980), new Point(360.241, 209.559),
          new Point(368.034, 206.795), new Point(370.179, 206.569),
          new Point(377.314, 216.312), new Point(371.064, 221.629),
          new Point(355.809, 238.977), new Point(350.797, 251.477),
          new Point(345.408, 262.977), new Point(317.814, 277.801),
          new Point(298.814, 283.334), new Point(237.968, 306.238),
          new Point(235.201, 313.609), new Point(232.225, 325.227),
          new Point(227.766, 331.977), new Point(209.753, 352.477),
          new Point(204.721, 362.505), new Point(201.067, 371.005),
          new Point(176.607, 410.606), new Point(151.415, 437.407),
          new Point(160.314, 428.399), new Point(175.390, 414.049),
          new Point(192.962, 395.477), new Point(204.314, 372.973),
          new Point(205.458, 368.661), new Point(220.314, 350.348),
          new Point(228.788, 342.571), new Point(239.788, 334.317),
          new Point(253.314, 325.466), new Point(267.351, 318.672),
          new Point(279.751, 318.876), new Point(287.396, 324.083),
          new Point(285.010, 343.751), new Point(271.531, 352.429),
          new Point(247.379, 359.213), new Point(232.075, 364.453),
          new Point(222.838, 375.507), new Point(223.481, 383.695),
          new Point(219.626, 384.311), new Point(213.105, 384.444),
          new Point(208.843, 386.219), new Point(201.847, 408.977),
          new Point(200.309, 419.977), new Point(198.906, 430.787),
          new Point(191.179, 447.908), new Point(185.290, 453.743),
          new Point(180.924, 457.434), new Point(162.628, 461.418),
          new Point(141.094, 464.977), new Point(134.112, 462.212)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(297.327, 309.182), new Point(292.327, 307.048),
          new Point(284.112, 304.088), new Point(279.956, 296.386),
          new Point(289.314, 293.892), new Point(317.064, 297.236),
          new Point(326.314, 303.594), new Point(314.814, 308.504),
          new Point(297.327, 309.182)
        ]) } />
    </g>
  ))

export const NU = connect()(
  ({ fill, xOffset, yOffset, dispatch, drawnState}) => (
    <g id="nu" onClick={ () => dispatch(selectProvince("nu")) }
       className={ "province " + (drawnState || UNANSWERED).toLowerCase() }>
      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(177.508, 500.410), new Point(159.950, 490.248),
          new Point(153.028, 485.846), new Point(148.883, 482.685),
          new Point(148.633, 480.087), new Point(143.523, 480.290),
          new Point(130.593, 486.107), new Point(123.308, 487.894),
          new Point(100.621, 490.922), new Point( 72.957, 486.112),
          new Point( 72.496, 480.837), new Point( 71.630, 470.948),
          new Point( 64.030, 460.831), new Point( 46.008, 448.181),
          new Point( 45.844, 446.587), new Point( 43.870, 437.837),
          new Point( 42.034, 429.158), new Point( 85.367, 441.282),
          new Point(116.572, 450.107), new Point(128.021, 405.299),
          new Point(139.628, 359.345), new Point(144.116, 367.845),
          new Point(147.680, 387.568), new Point(151.716, 398.629),
          new Point(153.409, 389.227), new Point(152.627, 369.437),
          new Point(152.166, 357.036), new Point(155.337, 353.716),
          new Point(162.415, 351.296), new Point(168.720, 355.017),
          new Point(169.529, 355.210), new Point(167.081, 349.591),
          new Point(175.008, 340.600), new Point(188.434, 346.828),
          new Point(184.348, 364.449), new Point(178.863, 371.237),
          new Point(179.098, 383.767), new Point(182.256, 411.879),
          new Point(181.183, 421.180), new Point(179.361, 430.126),
          new Point(195.714, 451.509), new Point(207.836, 473.401),
          new Point(201.148, 475.774), new Point(194.558, 474.239),
          new Point(192.415, 473.337), new Point(193.532, 481.807),
          new Point(189.857, 499.616), new Point(177.508, 500.410)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(456.120, 953.571), new Point(450.008, 948.700),
          new Point(457.446, 944.934), new Point(465.240, 947.597),
          new Point(464.870, 955.881), new Point(456.120, 953.571)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(246.925, 763.950), new Point(238.509, 762.855),
          new Point(230.009, 761.857), new Point(221.509, 760.857),
          new Point(213.009, 759.862), new Point(206.008, 758.926),
          new Point(195.008, 757.772), new Point(171.008, 755.270),
          new Point(158.392, 752.518), new Point(159.516, 742.337),
          new Point(160.505, 731.337), new Point(161.444, 721.337),
          new Point(162.515, 710.337), new Point(163.496, 700.837),
          new Point(165.541, 678.337), new Point(166.464, 668.837),
          new Point(169.547, 636.837), new Point(170.349, 628.547),
          new Point(162.508, 622.005), new Point(119.008, 599.022),
          new Point(103.508, 590.789), new Point( 89.903, 573.650),
          new Point( 86.298, 567.811), new Point( 74.878, 565.415),
          new Point( 63.458, 563.018), new Point( 57.895, 555.428),
          new Point( 31.975, 519.837), new Point(  5.813, 483.910),
          new Point(  0.000, 474.910), new Point( 13.564, 437.506),
          new Point( 28.386, 450.877), new Point( 43.132, 463.351),
          new Point( 47.945, 463.371), new Point( 54.522, 465.795),
          new Point( 60.823, 472.114), new Point( 67.008, 486.036),
          new Point( 58.996, 490.839), new Point( 49.008, 495.640),
          new Point( 51.211, 499.929), new Point( 63.461, 506.204),
          new Point( 89.539, 510.332), new Point( 98.644, 508.093),
          new Point(102.902, 509.335), new Point(110.508, 519.667),
          new Point(120.349, 538.781), new Point(120.946, 540.337),
          new Point(121.364, 528.643), new Point(120.760, 518.448),
          new Point(131.319, 513.197), new Point(142.327, 506.227),
          new Point(138.642, 506.272), new Point(129.252, 509.378),
          new Point(121.252, 508.670), new Point(130.346, 493.418),
          new Point(139.346, 491.477), new Point(147.280, 490.130),
          new Point(153.535, 498.693), new Point(155.432, 505.195),
          new Point(168.232, 517.452), new Point(171.508, 517.800),
          new Point(173.640, 518.185), new Point(178.917, 524.697),
          new Point(183.061, 531.058), new Point(189.181, 531.697),
          new Point(201.908, 532.337), new Point(215.508, 534.337),
          new Point(222.505, 536.337), new Point(222.708, 532.690),
          new Point(224.458, 525.170), new Point(226.008, 518.681),
          new Point(230.609, 516.696), new Point(249.288, 522.956),
          new Point(254.853, 525.886), new Point(249.457, 546.119),
          new Point(251.404, 548.298), new Point(255.027, 552.516),
          new Point(256.292, 555.837), new Point(256.971, 552.837),
          new Point(256.122, 546.837), new Point(254.551, 537.052),
          new Point(259.149, 529.084), new Point(272.972, 522.071),
          new Point(276.008, 512.295), new Point(274.008, 504.837),
          new Point(273.239, 493.506), new Point(263.103, 484.368),
          new Point(255.337, 477.502), new Point(251.876, 466.224),
          new Point(252.956, 458.435), new Point(251.322, 450.275),
          new Point(248.636, 444.081), new Point(250.572, 438.469),
          new Point(256.714, 430.546), new Point(259.840, 425.867),
          new Point(262.134, 419.329), new Point(272.868, 410.948),
          new Point(277.368, 414.305), new Point(282.273, 420.275),
          new Point(290.443, 438.062), new Point(295.899, 455.348),
          new Point(297.592, 469.369), new Point(295.823, 471.531),
          new Point(294.934, 478.562), new Point(295.814, 484.381),
          new Point(301.710, 485.154), new Point(316.558, 487.922),
          new Point(318.900, 490.841), new Point(313.008, 492.827),
          new Point(310.096, 502.232), new Point(314.955, 518.337),
          new Point(317.456, 511.837), new Point(323.923, 496.599),
          new Point(327.441, 495.129), new Point(334.159, 502.483),
          new Point(341.942, 514.030), new Point(341.008, 526.337),
          new Point(339.008, 531.188), new Point(341.955, 541.337),
          new Point(345.895, 547.087), new Point(349.890, 552.337),
          new Point(355.995, 546.872), new Point(357.455, 538.723),
          new Point(359.480, 529.837), new Point(362.926, 519.783),
          new Point(367.959, 508.283), new Point(368.901, 497.723),
          new Point(364.609, 479.930), new Point(373.682, 474.337),
          new Point(384.668, 477.337), new Point(392.281, 480.337),
          new Point(397.474, 483.732), new Point(405.023, 489.344),
          new Point(412.975, 496.727), new Point(411.362, 498.820),
          new Point(411.808, 502.930), new Point(414.541, 509.459),
          new Point(412.173, 514.130), new Point(408.050, 517.258),
          new Point(404.973, 519.337), new Point(405.489, 524.719),
          new Point(408.587, 530.908), new Point(412.470, 536.452),
          new Point(412.483, 563.431), new Point(399.171, 577.959),
          new Point(392.665, 575.848), new Point(390.016, 574.112),
          new Point(391.586, 577.870), new Point(388.634, 582.708),
          new Point(381.914, 582.976), new Point(376.914, 582.928),
          new Point(372.008, 579.369), new Point(366.508, 577.909),
          new Point(360.736, 579.500), new Point(362.581, 583.841),
          new Point(365.487, 591.462), new Point(359.414, 601.991),
          new Point(353.422, 610.824), new Point(351.650, 613.342),
          new Point(353.353, 615.624), new Point(355.893, 621.869),
          new Point(353.982, 628.337), new Point(350.390, 633.837),
          new Point(343.955, 644.565), new Point(327.514, 654.337),
          new Point(317.836, 661.337), new Point(313.008, 664.775),
          new Point(305.774, 664.094), new Point(305.246, 667.437),
          new Point(308.885, 669.973), new Point(309.054, 681.698),
          new Point(297.069, 687.925), new Point(291.267, 690.587),
          new Point(289.139, 696.371), new Point(275.514, 714.337),
          new Point(271.014, 720.835), new Point(266.008, 729.998),
          new Point(260.833, 742.707), new Point(255.766, 758.996),
          new Point(255.874, 764.337), new Point(251.608, 764.337),
          new Point(246.925, 763.950)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(448.865, 708.644), new Point(449.287, 689.578),
          new Point(457.258, 690.110), new Point(454.771, 708.344),
          new Point(448.865, 708.644)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(397.071, 697.454), new Point(402.906, 679.948),
          new Point(415.637, 677.222), new Point(422.001, 680.321),
          new Point(420.090, 688.210), new Point(403.355, 699.138),
          new Point(397.071, 697.454)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(374.758, 675.572), new Point(373.008, 670.464),
          new Point(371.808, 664.537), new Point(365.058, 663.237),
          new Point(357.966, 653.382), new Point(362.223, 641.837),
          new Point(366.128, 600.657), new Point(370.952, 594.820),
          new Point(376.730, 597.000), new Point(380.755, 604.083),
          new Point(385.508, 608.387), new Point(397.008, 614.376),
          new Point(411.737, 624.572), new Point(417.992, 630.337),
          new Point(420.482, 635.837), new Point(422.977, 641.596),
          new Point(428.258, 642.753), new Point(437.202, 644.994),
          new Point(440.553, 651.337), new Point(435.241, 659.952),
          new Point(427.008, 660.119), new Point(418.833, 658.649),
          new Point(413.014, 656.843), new Point(411.189, 652.782),
          new Point(400.517, 647.329), new Point(399.008, 650.894),
          new Point(394.212, 661.404), new Point(389.284, 667.044),
          new Point(381.306, 675.465), new Point(374.758, 675.572)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(243.403, 517.993), new Point(231.508, 510.124),
          new Point(227.662, 507.342), new Point(221.008, 501.237),
          new Point(238.726, 477.337), new Point(253.125, 492.501),
          new Point(260.008, 511.592), new Point(256.166, 516.851),
          new Point(243.403, 517.993)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(614.754, 668.750), new Point(600.665, 667.825),
          new Point(584.817, 665.536), new Point(579.551, 661.147),
          new Point(571.444, 658.740), new Point(552.268, 653.249),
          new Point(543.912, 646.045), new Point(544.314, 641.185),
          new Point(544.984, 638.337), new Point(538.989, 634.918),
          new Point(530.996, 630.834), new Point(526.506, 627.333),
          new Point(513.547, 619.341), new Point(506.342, 621.087),
          new Point(499.759, 623.337), new Point(491.130, 627.337),
          new Point(486.840, 631.337), new Point(478.546, 631.337),
          new Point(460.348, 616.544), new Point(462.928, 608.900),
          new Point(466.008, 602.185), new Point(467.758, 597.478),
          new Point(481.379, 596.401), new Point(496.379, 593.914),
          new Point(508.075, 588.337), new Point(509.574, 586.087),
          new Point(508.085, 580.220), new Point(503.889, 576.877),
          new Point(500.286, 570.304), new Point(502.257, 563.647),
          new Point(508.886, 550.666), new Point(514.059, 540.495),
          new Point(512.100, 533.427), new Point(499.471, 513.306),
          new Point(495.352, 508.090), new Point(488.035, 501.576),
          new Point(482.263, 495.337), new Point(478.466, 492.179),
          new Point(474.008, 493.813), new Point(468.356, 497.191),
          new Point(463.023, 497.855), new Point(466.346, 489.113),
          new Point(467.485, 484.895), new Point(459.868, 484.909),
          new Point(454.008, 482.521), new Point(456.039, 478.736),
          new Point(453.289, 473.171), new Point(439.258, 462.065),
          new Point(438.008, 465.920), new Point(438.008, 469.337),
          new Point(427.758, 469.572), new Point(410.886, 469.674),
          new Point(404.386, 471.189), new Point(396.008, 472.731),
          new Point(377.008, 471.858), new Point(362.918, 472.088),
          new Point(353.437, 466.169), new Point(349.404, 463.089),
          new Point(334.035, 461.857), new Point(322.008, 444.505),
          new Point(326.648, 441.973), new Point(335.362, 441.337),
          new Point(337.972, 439.968), new Point(325.466, 436.337),
          new Point(320.507, 434.587), new Point(317.558, 417.585),
          new Point(323.495, 382.145), new Point(340.008, 352.192),
          new Point(365.147, 354.762), new Point(362.524, 361.451),
          new Point(358.414, 369.027), new Point(356.217, 375.125),
          new Point(352.690, 389.631), new Point(353.567, 397.933),
          new Point(356.959, 407.337), new Point(359.477, 404.587),
          new Point(361.794, 400.028), new Point(362.214, 396.528),
          new Point(358.581, 384.999), new Point(360.557, 378.499),
          new Point(363.275, 375.087), new Point(364.977, 373.337),
          new Point(366.008, 371.312), new Point(377.774, 354.588),
          new Point(394.747, 351.436), new Point(404.304, 365.837),
          new Point(410.444, 382.735), new Point(416.331, 390.331),
          new Point(422.306, 389.271), new Point(425.481, 386.252),
          new Point(437.574, 376.416), new Point(447.074, 377.236),
          new Point(453.008, 379.369), new Point(461.509, 386.337),
          new Point(467.075, 392.337), new Point(469.508, 396.337),
          new Point(471.052, 400.337), new Point(477.487, 405.859),
          new Point(483.604, 409.609), new Point(485.575, 404.566),
          new Point(496.767, 403.993), new Point(503.150, 410.445),
          new Point(508.062, 417.028), new Point(511.990, 420.804),
          new Point(519.461, 423.195), new Point(530.920, 425.388),
          new Point(534.549, 431.167), new Point(534.134, 439.127),
          new Point(537.238, 436.087), new Point(547.683, 437.587),
          new Point(554.570, 448.837), new Point(558.463, 456.614),
          new Point(563.466, 461.255), new Point(565.014, 464.249),
          new Point(560.448, 466.925), new Point(553.545, 468.536),
          new Point(551.688, 470.971), new Point(551.525, 481.485),
          new Point(558.892, 488.184), new Point(566.614, 491.981),
          new Point(574.008, 494.793), new Point(580.008, 495.997),
          new Point(588.305, 496.603), new Point(594.101, 496.165),
          new Point(599.468, 501.751), new Point(608.922, 507.462),
          new Point(614.217, 507.712), new Point(616.101, 511.138),
          new Point(617.427, 515.089), new Point(625.024, 513.331),
          new Point(631.971, 510.923), new Point(635.739, 513.071),
          new Point(639.817, 520.474), new Point(637.027, 532.315),
          new Point(636.659, 536.503), new Point(637.219, 540.774),
          new Point(636.679, 546.698), new Point(630.373, 556.337),
          new Point(628.569, 558.587), new Point(633.994, 568.828),
          new Point(630.884, 574.168), new Point(623.264, 574.334),
          new Point(614.854, 571.201), new Point(606.533, 564.809),
          new Point(593.576, 552.337), new Point(590.829, 551.046),
          new Point(580.008, 547.176), new Point(577.363, 549.221),
          new Point(574.719, 550.426), new Point(577.441, 553.267),
          new Point(577.413, 562.829), new Point(576.092, 565.852),
          new Point(576.938, 567.074), new Point(585.609, 571.178),
          new Point(590.909, 577.491), new Point(606.652, 585.276),
          new Point(611.414, 588.818), new Point(614.034, 592.351),
          new Point(618.495, 597.317), new Point(628.005, 608.404),
          new Point(635.057, 615.597), new Point(634.851, 629.520),
          new Point(633.931, 643.884), new Point(605.067, 634.651),
          new Point(593.425, 628.349), new Point(581.758, 626.230),
          new Point(583.799, 629.251), new Point(588.403, 633.772),
          new Point(597.861, 640.044), new Point(616.260, 649.894),
          new Point(627.012, 656.837), new Point(626.760, 662.837),
          new Point(626.508, 668.837), new Point(620.799, 668.961),
          new Point(614.754, 668.750)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(469.263, 665.025), new Point(466.048, 657.789),
          new Point(473.104, 658.405), new Point(474.808, 666.137),
          new Point(469.263, 665.025)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(480.199, 653.624), new Point(478.199, 650.510),
          new Point(481.086, 647.537), new Point(487.462, 652.596),
          new Point(480.199, 653.624)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(464.017, 542.500), new Point(467.517, 509.740),
          new Point(480.126, 512.627), new Point(483.008, 526.886),
          new Point(474.857, 543.672), new Point(464.017, 542.500)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(491.508, 524.146), new Point(487.024, 517.311),
          new Point(497.758, 518.064), new Point(496.258, 523.684),
          new Point(491.508, 524.146)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(431.675, 497.670), new Point(433.381, 493.080),
          new Point(436.429, 485.220), new Point(441.016, 475.337),
          new Point(441.825, 480.659), new Point(440.861, 486.109),
          new Point(431.675, 497.670)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(227.322, 426.285), new Point(222.494, 420.628),
          new Point(210.916, 400.914), new Point(204.574, 392.790),
          new Point(202.818, 382.337), new Point(206.670, 376.004),
          new Point(214.447, 378.203), new Point(221.446, 380.405),
          new Point(224.132, 374.851), new Point(223.189, 368.982),
          new Point(218.264, 355.539), new Point(224.704, 345.337),
          new Point(231.512, 348.339), new Point(237.964, 349.890),
          new Point(253.758, 346.555), new Point(255.008, 352.852),
          new Point(253.258, 358.801), new Point(253.258, 360.769),
          new Point(250.508, 369.337), new Point(246.008, 375.422),
          new Point(249.008, 377.487), new Point(252.023, 381.185),
          new Point(253.480, 386.337), new Point(257.643, 401.015),
          new Point(255.630, 412.144), new Point(244.581, 420.337),
          new Point(243.456, 421.252), new Point(235.575, 429.055),
          new Point(227.322, 426.285)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(268.643, 407.264), new Point(266.008, 400.830),
          new Point(264.976, 393.754), new Point(267.938, 356.762),
          new Point(270.644, 348.215), new Point(285.628, 339.707),
          new Point(293.838, 341.250), new Point(300.000, 343.337),
          new Point(312.704, 348.918), new Point(314.387, 354.638),
          new Point(311.343, 359.464), new Point(309.405, 363.964),
          new Point(305.526, 371.837), new Point(300.903, 382.688),
          new Point(298.576, 388.864), new Point(291.078, 389.743),
          new Point(283.904, 391.067), new Point(282.066, 405.061),
          new Point(273.692, 409.337), new Point(268.643, 407.264)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(413.172, 374.087), new Point(402.384, 350.799),
          new Point(427.629, 351.129), new Point(443.850, 368.018),
          new Point(435.491, 373.239), new Point(425.095, 375.175),
          new Point(413.172, 374.087)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(313.508, 326.811), new Point(306.449, 324.342),
          new Point(299.462, 315.570), new Point(298.127, 307.558),
          new Point(297.182, 293.011), new Point(298.460, 285.398),
          new Point(295.911, 276.337), new Point(292.835, 270.837),
          new Point(284.998, 268.232), new Point(275.885, 266.924),
          new Point(263.747, 251.563), new Point(264.140, 245.821),
          new Point(275.674, 241.728), new Point(290.456, 251.085),
          new Point(300.508, 253.994), new Point(311.993, 260.426),
          new Point(314.523, 264.162), new Point(317.734, 274.005),
          new Point(319.668, 281.352), new Point(323.008, 286.850),
          new Point(327.258, 289.708), new Point(340.008, 291.992),
          new Point(348.508, 293.650), new Point(354.105, 290.993),
          new Point(360.760, 288.337), new Point(366.066, 284.789),
          new Point(378.410, 281.432), new Point(397.508, 286.933),
          new Point(407.016, 302.929), new Point(407.217, 307.079),
          new Point(406.788, 312.037), new Point(404.805, 317.337),
          new Point(399.620, 323.244), new Point(377.355, 323.188),
          new Point(374.934, 322.456), new Point(368.982, 326.051),
          new Point(349.508, 328.647), new Point(328.512, 324.348),
          new Point(323.008, 325.837), new Point(318.562, 329.306),
          new Point(313.508, 326.811)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(279.508, 323.612), new Point(263.581, 312.767),
          new Point(265.929, 299.198), new Point(273.679, 290.517),
          new Point(287.233, 293.571), new Point(290.624, 307.491),
          new Point(288.695, 321.741), new Point(279.508, 323.612)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(240.348, 305.254), new Point(231.008, 295.483),
          new Point(234.211, 290.972), new Point(237.414, 288.161),
          new Point(228.106, 288.465), new Point(216.008, 281.580),
          new Point(209.024, 271.442), new Point(204.008, 267.751),
          new Point(205.697, 264.286), new Point(211.947, 262.021),
          new Point(220.008, 265.693), new Point(224.491, 271.658),
          new Point(231.882, 276.337), new Point(235.213, 272.703),
          new Point(228.758, 263.544), new Point(226.008, 260.645),
          new Point(230.989, 255.446), new Point(238.739, 251.905),
          new Point(246.916, 252.808), new Point(254.744, 254.900),
          new Point(257.164, 256.486), new Point(256.609, 275.031),
          new Point(254.972, 294.881), new Point(254.540, 299.656),
          new Point(248.723, 307.253), new Point(240.348, 305.254)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(167.625, 298.889), new Point(158.098, 298.755),
          new Point(155.286, 299.509), new Point(160.876, 276.087),
          new Point(162.008, 270.997), new Point(168.618, 237.587),
          new Point(176.858, 241.618), new Point(176.752, 245.713),
          new Point(176.179, 257.110), new Point(175.405, 262.837),
          new Point(177.905, 267.176), new Point(184.727, 266.276),
          new Point(191.066, 266.951), new Point(192.459, 288.796),
          new Point(188.897, 294.055), new Point(167.625, 298.889)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(194.970, 298.738), new Point(195.712, 293.541),
          new Point(197.486, 290.640), new Point(200.739, 289.884),
          new Point(205.981, 294.009), new Point(207.134, 299.611),
          new Point(201.066, 300.880), new Point(194.970, 298.738)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(389.511, 267.346), new Point(389.378, 264.548),
          new Point(385.528, 260.084), new Point(380.230, 261.043),
          new Point(375.709, 262.860), new Point(371.008, 261.655),
          new Point(366.327, 258.556), new Point(362.577, 257.280),
          new Point(361.008, 261.219), new Point(353.800, 265.791),
          new Point(338.443, 264.969), new Point(323.317, 262.724),
          new Point(320.209, 255.029), new Point(321.477, 246.397),
          new Point(332.419, 236.337), new Point(333.900, 230.757),
          new Point(329.158, 215.021), new Point(337.508, 211.354),
          new Point(349.148, 219.880), new Point(352.584, 226.003),
          new Point(357.023, 227.329), new Point(354.597, 221.662),
          new Point(348.956, 214.211), new Point(350.439, 207.839),
          new Point(353.110, 204.337), new Point(346.281, 204.337),
          new Point(335.008, 197.740), new Point(337.078, 190.200),
          new Point(338.618, 185.613), new Point(347.507, 176.262),
          new Point(354.117, 172.872), new Point(360.747, 176.354),
          new Point(368.722, 179.115), new Point(369.496, 176.087),
          new Point(369.365, 174.238), new Point(365.613, 173.885),
          new Point(352.462, 159.176), new Point(347.352, 149.443),
          new Point(344.008, 144.261), new Point(342.092, 142.864),
          new Point(338.911, 130.112), new Point(347.256, 120.870),
          new Point(363.051, 132.393), new Point(369.529, 140.149),
          new Point(364.710, 129.283), new Point(365.508, 117.805),
          new Point(373.490, 113.055), new Point(379.240, 110.337),
          new Point(381.008, 108.297), new Point(385.075, 102.271),
          new Point(389.142,  98.285), new Point(386.575,  95.234),
          new Point(383.977,  90.510), new Point(381.659,  93.337),
          new Point(363.173, 109.920), new Point(352.782, 111.371),
          new Point(341.204, 107.167), new Point(342.403,  99.935),
          new Point(343.324,  96.337), new Point(339.008, 102.038),
          new Point(336.454, 105.799), new Point(331.081, 107.358),
          new Point(321.980,  96.871), new Point(321.130,  95.337),
          new Point(318.258,  95.186), new Point(315.040,  88.471),
          new Point(319.008,  81.450), new Point(321.508,  76.337),
          new Point(318.008,  74.337), new Point(313.699,  72.337),
          new Point(317.008,  59.303), new Point(324.142,  54.142),
          new Point(332.000,  50.337), new Point(335.619,  47.924),
          new Point(338.011,  42.988), new Point(341.008,  38.524),
          new Point(345.542,  34.817), new Point(348.618,  35.260),
          new Point(353.293,  37.755), new Point(358.008,  35.002),
          new Point(361.508,  27.908), new Point(365.008,  21.203),
          new Point(368.971,  15.255), new Point(375.565,  11.593),
          new Point(379.175,   9.289), new Point(388.231,   4.860),
          new Point(402.650,   3.608), new Point(418.405,   1.571),
          new Point(426.158,   0.792), new Point(434.261,   0.000),
          new Point(442.008,   0.631), new Point(452.770,   4.135),
          new Point(461.439,   9.783), new Point(468.058,  16.946),
          new Point(467.078,  35.859), new Point(461.866,  45.587),
          new Point(457.399,  48.337), new Point(447.590,  60.360),
          new Point(445.008,  65.966), new Point(450.980,  60.332),
          new Point(455.025,  55.832), new Point(458.005,  53.087),
          new Point(463.520,  53.357), new Point(464.151,  59.950),
          new Point(461.716,  69.202), new Point(455.269,  82.622),
          new Point(450.973,  94.297), new Point(445.267, 107.337),
          new Point(441.443, 126.831), new Point(431.711, 136.153),
          new Point(427.913, 139.152), new Point(424.994, 144.851),
          new Point(413.748, 149.743), new Point(411.419, 151.450),
          new Point(411.758, 155.078), new Point(412.353, 163.508),
          new Point(412.103, 165.452), new Point(414.508, 165.800),
          new Point(417.357, 166.185), new Point(422.107, 169.443),
          new Point(423.008, 182.569), new Point(423.508, 187.516),
          new Point(426.008, 191.391), new Point(423.508, 193.926),
          new Point(421.008, 197.765), new Point(411.991, 207.506),
          new Point(408.508, 207.837), new Point(408.849, 215.359),
          new Point(406.849, 225.359), new Point(402.578, 234.804),
          new Point(407.407, 239.042), new Point(411.631, 242.177),
          new Point(410.218, 254.572), new Point(389.511, 267.346)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(202.501, 229.921), new Point(201.106, 217.486),
          new Point(206.873, 217.148), new Point(206.989, 231.347),
          new Point(202.501, 229.921)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(276.126, 228.554), new Point(273.604, 216.521),
          new Point(288.588, 215.387), new Point(288.849, 227.817),
          new Point(276.126, 228.554)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(267.353, 211.886), new Point(263.430, 204.582),
          new Point(260.973, 199.332), new Point(257.285, 186.567),
          new Point(264.397, 178.912), new Point(272.414, 183.435),
          new Point(279.004, 187.337), new Point(282.008, 199.338),
          new Point(282.008, 206.245), new Point(277.364, 209.791),
          new Point(267.353, 211.886)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(245.712, 210.013), new Point(240.008, 203.690),
          new Point(224.505, 195.217), new Point(215.983, 192.466),
          new Point(214.043, 182.271), new Point(216.543, 180.337),
          new Point(219.945, 178.400), new Point(220.841, 172.650),
          new Point(216.404, 166.014), new Point(220.931, 152.337),
          new Point(231.008, 159.367), new Point(234.740, 162.968),
          new Point(244.059, 172.043), new Point(248.007, 178.106),
          new Point(250.428, 187.843), new Point(252.008, 198.684),
          new Point(255.008, 203.672), new Point(250.352, 211.226),
          new Point(245.712, 210.013)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(303.098, 199.190), new Point(298.435, 193.109),
          new Point(295.326, 188.555), new Point(288.008, 173.325),
          new Point(295.740, 165.337), new Point(302.008, 160.486),
          new Point(295.508, 156.983), new Point(289.771, 157.773),
          new Point(279.294, 155.066), new Point(279.655, 150.042),
          new Point(280.040, 147.337), new Point(277.008, 145.337),
          new Point(276.106, 133.486), new Point(281.173, 130.337),
          new Point(284.430, 128.092), new Point(280.748, 123.254),
          new Point(278.457, 117.568), new Point(284.869, 111.592),
          new Point(286.496, 105.030), new Point(282.983, 101.306),
          new Point(285.005,  97.342), new Point(289.957,  91.863),
          new Point(293.197,  86.593), new Point(297.040,  82.540),
          new Point(308.093,  88.337), new Point(313.008, 100.122),
          new Point(321.621, 113.544), new Point(326.008, 121.354),
          new Point(331.008, 129.743), new Point(336.008, 139.261),
          new Point(345.965, 152.203), new Point(350.008, 159.860),
          new Point(344.036, 172.060), new Point(335.536, 181.322),
          new Point(333.008, 185.147), new Point(329.303, 192.478),
          new Point(320.325, 196.906), new Point(317.825, 199.541),
          new Point(312.342, 203.136), new Point(303.098, 199.190)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(179.316, 183.337), new Point(180.551, 177.087),
          new Point(182.147, 173.337), new Point(180.295, 184.337),
          new Point(179.316, 183.337)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(254.984, 140.055), new Point(249.749, 131.075),
          new Point(254.953, 126.337), new Point(260.330, 130.427),
          new Point(261.008, 139.337), new Point(254.984, 140.055)
        ]) } />
    </g>
))

export const YT = connect()(
  ({ fill, xOffset, yOffset, dispatch, drawnState}) => (
    <polygon
        className={ "province " + (drawnState || UNANSWERED).toLowerCase() }
        id="yt" onClick={ () => dispatch(selectProvince("yt")) }
        points={ makePointString(xOffset, yOffset, [
            new Point(185.979, 342.524), new Point(176.539, 337.878),
            new Point(112.865, 304.826), new Point( 29.289, 252.885),
            new Point( 13.539, 240.735), new Point( 19.854, 230.816),
            new Point( 10.906, 222.948), new Point(  7.242, 220.820),
            new Point(  5.875, 219.018), new Point(  0.000, 215.727),
            new Point(  9.313, 199.029), new Point( 68.180, 111.849),
            new Point(131.393,  18.175), new Point(143.674,   0.000),
            new Point(146.856,   1.097), new Point(156.057,  12.007),
            new Point(159.077,  22.523), new Point(162.063,  30.988),
            new Point(166.792,  38.334), new Point(169.376,  43.587),
            new Point(154.786,  67.349), new Point(151.038,  76.849),
            new Point(147.030,  86.849), new Point(152.989, 102.915),
            new Point(162.539, 112.422), new Point(158.962, 121.599),
            new Point(154.862, 133.953), new Point(157.983, 142.239),
            new Point(160.604, 156.020), new Point(157.612, 157.333),
            new Point(151.539, 164.757), new Point(149.515, 170.165),
            new Point(150.913, 179.744), new Point(151.997, 185.020),
            new Point(153.727, 192.113), new Point(156.099, 200.809),
            new Point(157.992, 209.759), new Point(157.700, 220.246),
            new Point(153.087, 246.003), new Point(151.399, 256.821),
            new Point(152.795, 262.667), new Point(159.031, 275.872),
            new Point(163.489, 287.541), new Point(165.013, 293.221),
            new Point(163.236, 298.529), new Point(162.009, 306.147),
            new Point(170.539, 314.430), new Point(179.885, 319.599),
            new Point(186.385, 322.301), new Point(189.039, 322.349),
            new Point(188.760, 332.795), new Point(188.200, 343.522),
            new Point(185.979, 342.524)
          ]) } />
  ))

export const NB = connect()(
  ({ fill, xOffset, yOffset, dispatch, drawnState}) => (
    <polygon
        className={ "province " + (drawnState || UNANSWERED).toLowerCase() }
        id="nb" onClick={ () => dispatch(selectProvince("nb")) }
        points={ makePointString(xOffset, yOffset, [
            new Point( 38.815,  81.027), new Point( 32.162,  73.487),
            new Point( 28.766,  70.167), new Point( 18.237,  42.750),
            new Point( 15.975,  36.137), new Point(  3.581,  29.754),
            new Point(  0.420,  29.750), new Point(  0.030,  23.500),
            new Point(  0.000,  16.500), new Point(  6.551,  15.674),
            new Point( 22.154,  10.499), new Point( 32.666,   5.707),
            new Point( 43.834,   5.224), new Point( 49.548,   4.652),
            new Point( 65.207,   0.000), new Point( 63.742,   3.750),
            new Point( 64.112,  18.865), new Point( 66.703,  24.552),
            new Point( 72.065,  32.302), new Point( 82.808,  36.750),
            new Point( 89.487,  37.329), new Point( 85.073,  43.079),
            new Point( 77.544,  53.594), new Point( 57.606,  73.750),
            new Point( 53.492,  76.547), new Point( 38.815,  81.027)
          ]) } />
  ))

export const NS = connect()(
  ({ fill, xOffset, yOffset, dispatch, drawnState}) => (
    <g id="ns" onClick={ () => dispatch(selectProvince("ns")) }
       className={ "province " + (drawnState || UNANSWERED).toLowerCase() }>
      <polygon points={ makePointString(xOffset, yOffset, [
          new Point( 11.709, 116.678), new Point(  0.658, 103.828),
          new Point(  0.000,  95.630), new Point( 12.434,  77.279),
          new Point( 17.661,  71.143), new Point( 21.522,  68.596),
          new Point( 33.049,  60.832), new Point( 23.242,  64.637),
          new Point( 25.448,  49.733), new Point( 34.044,  44.058),
          new Point( 57.767,  40.287), new Point( 62.928,  38.580),
          new Point( 69.178,  39.443), new Point( 80.286,  45.621),
          new Point( 74.991,  54.569), new Point( 67.049,  62.589),
          new Point( 52.632,  73.569), new Point( 47.466,  79.117),
          new Point( 41.422,  83.633), new Point( 37.172,  85.630),
          new Point( 36.049,  89.117), new Point( 33.040,  97.366),
          new Point( 23.491, 111.297), new Point( 16.750, 117.862),
          new Point( 11.709, 116.678)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point( 79.024,  40.718), new Point( 72.645,  34.258),
          new Point( 68.815,  27.758), new Point( 72.927,  17.243),
          new Point( 81.013,   0.000), new Point( 85.063,   7.973),
          new Point( 88.893,  16.487), new Point( 97.049,  24.349),
          new Point( 93.945,  31.162), new Point( 88.513,  36.000),
          new Point( 84.049,  39.000), new Point( 79.024,  40.718)
        ]) } />
    </g>
  ))

export const NL = connect()(
  ({ fill, xOffset, yOffset, dispatch, drawnState}) => (
    <g id="nl" onClick={ () => dispatch(selectProvince("nl")) }
        className={ "province " + (drawnState || UNANSWERED).toLowerCase() }>
      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(187.710, 294.170), new Point(187.920, 282.427),
          new Point(188.600, 272.247), new Point(188.712, 265.047),
          new Point(190.184, 252.929), new Point(191.087, 206.244),
          new Point(192.052, 196.274), new Point(201.965, 178.184),
          new Point(208.204, 175.839), new Point(212.274, 194.699),
          new Point(211.290, 207.421), new Point(210.093, 214.279),
          new Point(209.448, 220.244), new Point(211.983, 217.244),
          new Point(214.554, 213.561), new Point(222.086, 212.879),
          new Point(225.615, 219.494), new Point(225.437, 222.744),
          new Point(230.455, 222.744), new Point(236.005, 221.881),
          new Point(241.314, 219.699), new Point(251.090, 216.073),
          new Point(264.708, 215.840), new Point(266.340, 224.773),
          new Point(267.113, 228.711), new Point(274.141, 229.904),
          new Point(281.590, 232.605), new Point(276.243, 241.994),
          new Point(275.437, 243.744), new Point(276.590, 247.162),
          new Point(277.197, 252.162), new Point(279.590, 252.588),
          new Point(286.101, 244.744), new Point(288.708, 248.744),
          new Point(295.618, 250.565), new Point(299.328, 249.154),
          new Point(300.323, 256.583), new Point(300.720, 266.973),
          new Point(292.710, 278.538), new Point(288.416, 276.261),
          new Point(284.590, 276.244), new Point(278.455, 267.581),
          new Point(274.468, 256.744), new Point(273.590, 260.399),
          new Point(269.656, 267.796), new Point(264.715, 278.810),
          new Point(253.128, 291.267), new Point(251.090, 284.883),
          new Point(254.590, 277.628), new Point(252.451, 274.819),
          new Point(243.106, 276.757), new Point(230.148, 282.557),
          new Point(221.858, 286.307), new Point(215.663, 287.323),
          new Point(202.163, 291.932), new Point(190.960, 296.414),
          new Point(187.710, 294.170)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point( 63.411, 222.253), new Point( 59.282, 221.451),
          new Point( 53.548, 219.206), new Point( 45.856, 217.963),
          new Point( 37.064, 214.421), new Point( 35.667, 206.065),
          new Point( 34.055, 203.352), new Point( 29.305, 203.776),
          new Point( 23.995, 205.740), new Point( 19.525, 201.284),
          new Point( 19.986, 191.095), new Point( 15.250, 187.334),
          new Point(  2.614, 167.698), new Point(  4.650, 165.744),
          new Point(  7.946, 158.491), new Point( 10.368, 154.877),
          new Point( 13.479, 150.587), new Point( 18.780, 148.872),
          new Point( 25.590, 151.536), new Point( 35.112, 149.630),
          new Point( 42.090, 147.305), new Point( 48.857, 147.936),
          new Point( 50.241, 151.337), new Point( 49.474, 155.067),
          new Point( 41.163, 162.493), new Point( 37.599, 166.244),
          new Point( 36.550, 172.208), new Point( 46.811, 170.884),
          new Point( 57.819, 166.912), new Point( 68.239, 162.029),
          new Point( 68.663, 151.417), new Point( 65.690, 152.644),
          new Point( 60.172, 154.744), new Point( 56.590, 144.084),
          new Point( 59.590, 136.186), new Point( 54.227, 123.857),
          new Point( 52.590, 120.864), new Point( 44.364, 106.545),
          new Point( 40.530,  99.545), new Point( 38.614,  88.744),
          new Point( 37.396,  75.744), new Point( 31.679,  63.376),
          new Point( 25.840,  60.798), new Point( 24.094,  52.042),
          new Point( 24.732,  47.569), new Point( 25.063,  38.868),
          new Point( 16.160,  35.605), new Point( 12.761,  35.240),
          new Point( 11.597,  27.476), new Point(  7.961,  19.953),
          new Point(  4.919,  17.900), new Point(  0.000,   0.000),
          new Point( 16.731,  14.825), new Point( 22.748,  20.744),
          new Point( 26.540,  23.674), new Point( 31.988,  28.681),
          new Point( 37.498,  35.751), new Point( 41.368,  40.756),
          new Point( 45.257,  44.115), new Point( 51.491,  48.112),
          new Point( 57.760,  53.003), new Point( 60.526,  61.212),
          new Point( 65.703,  66.481), new Point( 72.020,  69.667),
          new Point( 72.264,  76.469), new Point( 72.135,  83.816),
          new Point( 73.995,  88.744), new Point( 85.307,  94.995),
          new Point( 97.880,  98.745), new Point(103.499, 102.890),
          new Point(107.327, 107.036), new Point(116.208, 107.446),
          new Point(128.886, 109.310), new Point(138.265, 107.212),
          new Point(146.786, 107.991), new Point(154.689, 110.930),
          new Point(151.574, 117.751), new Point(143.425, 124.956),
          new Point(135.090, 134.175), new Point(127.417, 142.299),
          new Point(122.977, 154.339), new Point(136.106, 140.510),
          new Point(144.417, 128.929), new Point(155.804, 120.744),
          new Point(161.804, 124.056), new Point(166.590, 126.656),
          new Point(178.705, 127.606), new Point(187.090, 132.782),
          new Point(193.377, 136.290), new Point(192.468, 139.112),
          new Point(197.057, 153.144), new Point(204.590, 165.752),
          new Point(194.340, 181.442), new Point(191.299, 184.640),
          new Point(187.219, 179.442), new Point(182.177, 173.569),
          new Point(177.653, 174.683), new Point(168.850, 177.706),
          new Point(156.350, 181.731), new Point(138.090, 188.686),
          new Point(122.314, 194.836), new Point( 88.090, 206.668),
          new Point( 78.523, 204.632), new Point( 71.928, 202.572),
          new Point( 70.773, 207.244), new Point( 69.029, 221.628),
          new Point( 63.411, 222.253)
        ]) } />
    </g>
  ))

export const PE = connect()(
  ({ fill, xOffset, yOffset, dispatch, drawnState}) => (
    <polygon
        className={ "province " + (drawnState || UNANSWERED).toLowerCase() }
        id="pe" onClick={ () => dispatch(selectProvince("pe")) }
        points={ makePointString(xOffset, yOffset, [
            new Point( 34.701,  17.337), new Point( 25.854,  16.454),
            new Point( 12.031,  14.480), new Point(  2.031,  12.061),
            new Point(  0.000,   5.066), new Point(  3.684,   0.000),
            new Point(  9.524,   4.339), new Point( 15.165,   7.339),
            new Point( 21.219,   6.000), new Point( 27.847,   5.106),
            new Point( 40.458,   1.882), new Point( 39.524,   5.350),
            new Point( 37.891,  12.492), new Point( 34.701,  17.337)
          ]) } />
  ))

export const NT = connect()(
  ({ fill, xOffset, yOffset, dispatch, drawnState}) => (
    <g id="nt" onClick={ () => dispatch(selectProvince("nt")) }
       className={ "province " + (drawnState || UNANSWERED).toLowerCase() }>
      <polygon points={ makePointString(xOffset, yOffset, [
          new Point( 48.625, 196.294), new Point( 41.000, 197.013),
          new Point( 29.906, 198.732), new Point( 29.062, 204.075),
          new Point( 26.000, 207.575), new Point( 23.656, 205.044),
          new Point(  4.593, 239.544), new Point(  0.000, 250.763),
          new Point(  4.843, 259.763), new Point( 13.468, 282.044),
          new Point(  9.312, 293.732), new Point( 12.718, 301.044),
          new Point( 16.156, 304.919), new Point( 15.437, 311.450),
          new Point(  9.968, 320.669), new Point(  5.562, 327.482),
          new Point(  4.656, 330.044), new Point(  3.125, 332.669),
          new Point(  4.500, 337.482), new Point(  6.562, 344.107),
          new Point(  8.968, 353.482), new Point( 10.843, 361.700),
          new Point( 12.375, 368.919), new Point( 12.625, 378.794),
          new Point(  7.156, 408.544), new Point(  6.031, 417.575),
          new Point(  7.593, 422.075), new Point( 13.531, 436.044),
          new Point( 19.843, 449.794), new Point( 21.906, 452.044),
          new Point( 19.750, 454.357), new Point( 17.562, 460.419),
          new Point( 16.500, 466.138), new Point( 21.750, 470.982),
          new Point( 31.906, 476.482), new Point( 39.156, 478.450),
          new Point( 43.000, 492.888), new Point( 43.062, 505.232),
          new Point( 54.062, 509.669), new Point(172.562, 550.044),
          new Point(208.562, 560.544), new Point(226.062, 565.482),
          new Point(244.062, 569.044), new Point(261.812, 572.575),
          new Point(274.812, 575.107), new Point(288.062, 577.638),
          new Point(305.062, 581.013), new Point(326.625, 582.794),
          new Point(327.062, 579.669), new Point(328.062, 569.169),
          new Point(329.093, 558.044), new Point(330.031, 549.044),
          new Point(333.062, 517.544), new Point(334.062, 505.544),
          new Point(335.093, 495.044), new Point(336.062, 485.044),
          new Point(337.656, 468.263), new Point(338.093, 459.075),
          new Point(323.312, 450.763), new Point(277.125, 426.325),
          new Point(268.218, 421.544), new Point(262.062, 411.544),
          new Point(255.906, 401.544), new Point(244.593, 399.138),
          new Point(233.281, 396.700), new Point(223.593, 383.638),
          new Point(204.906, 358.044), new Point(183.187, 328.200),
          new Point(168.937, 308.482), new Point(170.906, 296.825),
          new Point(177.000, 256.232), new Point(173.562, 250.888),
          new Point(172.468, 250.044), new Point(168.718, 248.169),
          new Point(162.062, 245.825), new Point(153.937, 248.732),
          new Point(147.187, 251.075), new Point(147.531, 245.575),
          new Point(149.812, 241.638), new Point(149.093, 235.357),
          new Point(139.000, 235.388), new Point(130.875, 243.044),
          new Point(126.937, 238.857), new Point(126.687, 225.200),
          new Point(124.000, 211.200), new Point(115.781, 212.075),
          new Point(108.406, 213.919), new Point(104.468, 212.607),
          new Point(105.812, 208.732), new Point(101.687, 203.607),
          new Point( 83.562, 202.325), new Point( 70.562, 203.544),
          new Point( 59.281, 205.607), new Point( 55.500, 207.044),
          new Point( 52.562, 202.794), new Point( 48.625, 196.294)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(272.062, 273.025), new Point(247.062, 265.653),
          new Point(227.062, 259.810), new Point(222.562, 256.987),
          new Point(237.062, 256.857), new Point(252.633, 259.594),
          new Point(270.180, 264.759), new Point(264.606, 258.668),
          new Point(248.844, 250.024), new Point(223.172, 243.331),
          new Point(216.436, 235.455), new Point(214.577, 228.336),
          new Point(232.562, 221.955), new Point(237.062, 220.728),
          new Point(233.562, 219.921), new Point(227.224, 218.860),
          new Point(221.948, 211.480), new Point(221.246, 209.320),
          new Point(218.223, 205.730), new Point(221.027, 193.787),
          new Point(226.562, 184.297), new Point(256.207, 168.132),
          new Point(270.691, 165.525), new Point(276.356, 167.884),
          new Point(273.442, 183.050), new Point(271.913, 187.728),
          new Point(277.051, 184.607), new Point(281.590, 180.887),
          new Point(287.826, 184.454), new Point(296.488, 190.085),
          new Point(298.914, 192.150), new Point(296.883, 196.958),
          new Point(294.851, 201.766), new Point(298.957, 200.848),
          new Point(303.729, 199.237), new Point(302.909, 194.198),
          new Point(301.742, 189.645), new Point(307.924, 186.820),
          new Point(285.737, 276.179), new Point(272.062, 273.025)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(173.123, 207.902), new Point(171.665, 197.919),
          new Point(165.114, 180.041), new Point(159.584, 169.666),
          new Point(165.562, 162.837), new Point(173.553, 152.401),
          new Point(180.933, 141.544), new Point(190.192, 129.723),
          new Point(197.681, 114.223), new Point(197.614, 107.196),
          new Point(201.906, 102.556), new Point(206.761, 103.371),
          new Point(215.761, 105.910), new Point(225.241, 109.047),
          new Point(230.530, 113.313), new Point(237.030, 121.998),
          new Point(248.241, 127.298), new Point(262.168, 142.588),
          new Point(252.154, 166.254), new Point(236.562, 173.048),
          new Point(233.009, 174.891), new Point(227.504, 178.334),
          new Point(218.331, 185.544), new Point(208.036, 197.286),
          new Point(202.262, 205.205), new Point(200.062, 206.079),
          new Point(191.562, 207.629), new Point(181.322, 208.720),
          new Point(173.123, 207.902)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(289.183, 132.967), new Point(284.562, 126.082),
          new Point(294.799, 119.919), new Point(299.671, 114.544),
          new Point(293.581, 112.070), new Point(289.766, 111.359),
          new Point(278.852, 112.669), new Point(265.926,  97.254),
          new Point(270.217,  91.044), new Point(271.639,  90.294),
          new Point(274.991,  83.118), new Point(277.562,  78.467),
          new Point(285.520,  69.044), new Point(288.970,  66.544),
          new Point(295.450,  64.044), new Point(305.562,  71.602),
          new Point(309.384,  77.545), new Point(317.069,  93.932),
          new Point(323.503, 103.059), new Point(325.241, 117.294),
          new Point(320.652, 130.044), new Point(313.447, 134.044),
          new Point(300.774, 138.044), new Point(293.803, 138.044),
          new Point(289.183, 132.967)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(258.340,  88.360), new Point(255.594,  84.226),
          new Point(263.982,  73.448), new Point(274.303,  72.294),
          new Point(271.751,  79.884), new Point(264.710,  85.794),
          new Point(260.604,  88.928), new Point(258.340,  88.360)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(249.133,  71.473), new Point(247.562,  67.473),
          new Point(242.062,  65.044), new Point(234.812,  54.006),
          new Point(241.576,  49.522), new Point(250.893,  45.690),
          new Point(256.536,  43.528), new Point(264.580,  37.296),
          new Point(282.847,  28.081), new Point(291.562,  27.771),
          new Point(299.941,  31.589), new Point(294.943,  44.850),
          new Point(292.803,  50.887), new Point(287.955,  58.554),
          new Point(282.582,  63.008), new Point(276.014,  65.004),
          new Point(276.562,  54.312), new Point(278.562,  51.832),
          new Point(264.968,  63.794), new Point(249.133,  71.473)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(326.908,  44.088), new Point(320.751,  37.044),
          new Point(318.562,  30.419), new Point(316.505,  27.802),
          new Point(313.426,  15.044), new Point(318.562,  19.986),
          new Point(321.812,  20.547), new Point(345.065,  19.407),
          new Point(345.387,  24.228), new Point(344.003,  30.544),
          new Point(339.550,  43.554), new Point(326.908,  44.088)
        ]) } />

      <polygon points={ makePointString(xOffset, yOffset, [
          new Point(344.562,  15.165), new Point(341.634,  13.074),
          new Point(336.945,   9.915), new Point(332.468,   8.565),
          new Point(329.116,   8.131), new Point(337.681,   0.617),
          new Point(340.115,   0.000), new Point(350.023,   0.210),
          new Point(345.842,  16.044), new Point(344.562,  15.165)
        ]) } />
    </g>
))

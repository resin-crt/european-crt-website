
// ================================================================================
//  University of Manchester. UK.
//  School of Environment, Education, and Development.
//
//  Name:            RadarDiagrams.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 20/09/2018.
//
//  Description:     Provides radar diagram rendering functionality.
// ================================================================================

/**
 * The RadarDiagrams object provides properties and methods related to data visualization using radar diagrams.
 */
let RadarDiagrams = {

  /**
   * The labels on the radar diagrams.
   */
  // labels: [
  //   // I001
  //   '1. Mean temperature (RCP 8.5)',
  //   // I002
  //   //'Minimum temperature (RCP 8.5)',
  //   // I003
  //   // 'Maximum temperature (RCP 8.5)',
  //   // I004
  //   // 'Frost days (RCP 8.5)',
  //   // I005
  //   '5. Summer days (RCP 8.5)',
  //   // I006
  //   // 'Tropical nights (RCP 8.5)',
  //   // I007
  //   '7. Ice days (RCP 8.5)',
  //   // I008
  //   '8. Heat wave days (RCP 8.5)',
  //   // I009
  //   // 'Total wet-day precipitation (RCP 8.5)',
  //   // I010
  //   '10. Consecutive dry days (RCP 8.5)',
  //   // I011
  //   '11. Consecutive wet days (RCP 8.5)',
  //   // I012
  //   '12. Heavy precipitation days (RCP 8.5)',
  //   // I013
  //   '13. Very heavy precipitation days (RCP 8.5)',
  //   // I014
  //   '14. Coastal hazard',
  //   // I015
  //   '15. Drought hazard',
  //   // I016
  //   '16. Wildfire hazard',
  //   // I017
  //   '17. Length of major road network in NUTS3 unit',
  //   // I018
  //   '18. Length of railway network in NUTS3 unit',
  //   // I019
  //   '19. Density of major road intersections per km2 of the NUTS3 unit',
  //   // I020
  //   '20. Density of transport nodes per km2 of the NUTS3 unit',
  //   // I021
  //   '21. Number of airports per head of population in the NUTS3 unit',
  //   // I022
  //   '22. Number of ports per head of population in the NUTS3 unit',
  //   // I023
  //   '23. Number of hospitals per head of population in the NUTS3 unit',
  //   // I024
  //   '24. Number of power plants per head of population in the NUTS3 unit',
  //   // I025
  //   '25. Fixed broadband coverage',
  //   // I026
  //   '26. Next Generation Access (NGA) - broadband',
  //   // I027
  //   // 'I027',
  //   // I028
  //   // 'I028',
  //   // I029
  //   // 'I029',
  //   // I030
  //   '30. Population in settlements exposed to fluvial flooding',
  //   // I031
  //   // 'I031',
  //   // I032
  //   '32. Road infrastructure exposed to fluvial flooding',
  //   // I033
  //   '33. Rail network exposed to fluvial flooding',
  //   // I034
  //   // 'I034',
  //   // I035
  //   '35. Transport nodes exposed to fluvial flooding',
  //   // I036
  //   // 'Airports exposed to fluvial flooding',
  //   // I037
  //   // 'Ports exposed to fluvial flooding',
  //   // I038
  //   // 'Hospitals exposed to fluvial flooding',
  //   // I039
  //   // 'Power plants exposed to fluvial flooding',
  //   // I040
  //   '40. Population in settlements exposed to coastal hazard',
  //   // I041
  //   // 'I041',
  //   // I042
  //   '42. Road infrastructure exposed to coastal hazard',
  //   // I043
  //   '43. Rail network exposed to coastal hazard',
  //   // I044
  //   // 'I044',
  //   // I045
  //   '45. Transport nodes exposed to coastal hazard',
  //   // I046
  //   // 'Airports exposed to coastal hazard',
  //   // I047
  //   // 'Ports exposed to coastal hazard',
  //   // I048
  //   // 'Hospitals exposed to coastal hazard',
  //   // I049
  //   // 'Power plants exposed to coastal hazard',
  //   // I050
  //   '50. Population in settlements exposed to landslide',
  //   // I051
  //   // 'I051',
  //   // I052
  //   '52. Road infrastructure exposed to landslide',
  //   // I053
  //   '53. Rail network exposed to landslide',
  //   // I054
  //   // 'I054',
  //   // I055
  //   '55. Transport nodes exposed to landslide',
  //   // I056
  //   // 'Airports exposed to landslide',
  //   // I057
  //   // 'Ports exposed to landslide',
  //   // I058
  //   // 'Hospitals exposed to landslide',
  //   // I059
  //   // 'Power plants exposed to landslide',
  //   // I060
  //   // 'Average population density',
  //   // I061
  //   '61. Total population living in urban areas /area in km2',
  //   // I062
  //   '62. % of total urban area in NUTS3 unit that is classified as green space (2012 data)',
  //   // I063
  //   '63. % of total land in the NUTS3 unit that is covered by continuous and/or discontinuous urban fabric (2012 data)',
  //   // I064
  //   '64. Change in % of total urban area in NUTS3 unit that is classified as green space (2009-2012 data)',
  //   // I065
  //   '65. Change in % of total land in the NUTS3 unit that is covered by continuous and/or discontinuous urban fabric (2012 data)',
  //   // I066
  //   '66. Soil Moisture Stress',
  //   // I067
  //   '67. Water Consumption Pressure (2030)',
  //   // I068
  //   '68. Priority Allocations (Euros, 2013 - 2015)',
  //   // I069
  //   '69. At Risk of Poverty (ARoP)',
  //   // I070
  //   '70. % change in population less than 15 years in NUTS3 unit between 2017-2050',
  //   // I071
  //   // 'I071',
  //   // I072
  //   // 'I072',
  //   // I073
  //   '73. % change in population more than 70 years in NUTS3 unit between 2017-2050',
  //   // I074
  //   // 'I074',
  //   // I075
  //   '75. % change in population through migration in NUTS3 unit between 2017-2050',
  //   // I076
  //   '76. % change in population density in NUTS3 unit between 2017-2050',
  //   // I077
  //   '77. % of total employment in NUTS1 unit',
  //   // I078
  //   '78. Number of patent applications to the EPO per 1000 population in the NUTS3 unit',
  //   // I079
  //   '79. GVA at basic prices per head of population (2012-2015 data)',
  //   // I080
  //   // 'I080',
  //   // I081
  //   '81. Fluvial hazard',
  //   // I082
  //   '82. Landslide hazard',
  //   // // V1.1
  //   // 'Mean temperature (RCP 4.5)',
  //   // // V10.1
  //   // 'Consecutive dry days (RCP 4.5)',
  //   // // V11.1
  //   // 'Consecutive wet days (RCP 4.5)',
  //   // // V12.1
  //   // 'Heavy precipitation days (RCP 4.5)',
  //   // // V13.1
  //   // 'Very heavy precipitation days (RCP 4.5)',
  //   // // V2.1
  //   // 'Minimum temperature (RCP 4.5)',
  //   // // V3.1
  //   // 'Maximum temperature (RCP 4.5)',
  //   // // V4.1
  //   // 'Frost days (RCP 4.5)',
  //   // // V5.1
  //   // 'Summer days (RCP 4.5)',
  //   // // V6.1
  //   // 'Tropical nights (RCP 4.5)',
  //   // // V7.1
  //   // 'Ice days (RCP 4.5)',
  //   // // V8.1
  //   // 'Heat wave days (RCP 4.5)',
  //   // // V9.1
  //   // 'Total wet-day precipitation (RCP 4.5)',
  // ],

  // labels: [
  //   // I001
  //   '1. Mean temperature\r\n\r\n\r\n',
  //   // I002
  //   //'Minimum temperature (RCP 8.5)',
  //   // I003
  //   // 'Maximum temperature (RCP 8.5)',
  //   // I004
  //   // 'Frost days (RCP 8.5)',
  //   // I005
  //   '5. --------Summer days',
  //   // I006
  //   // 'Tropical nights (RCP 8.5)',
  //   // I007
  //   '7. --------Ice days',
  //   // I008
  //   '8. ----Heat wave days',
  //   // I009
  //   // 'Total wet-day precipitation (RCP 8.5)',
  //   // I010
  //   '10. Consecutive dry days',
  //   // I011
  //   '11. Consecutive wet days',
  //   // I012
  //   '12. Heavy precipitation days',
  //   // I013
  //   '13. Very heavy precipitation days',
  //   // I014
  //   '14. Coastal hazard',
  //   // I015
  //   '15. Drought hazard',
  //   // I016
  //   '16. Wildfire hazard',
  //   // I017
  //   '17.',
  //   // I018
  //   '18',
  //   // I019
  //   '19',
  //   // I020
  //   '20',
  //   // I021
  //   '21',
  //   // I022
  //   '22',
  //   // I023
  //   '23',
  //   // I024
  //   '24',
  //   // I025
  //   '25. Fixed broadband coverage',
  //   // I026
  //   '26. Next Generation Access (NGA) - broadband',
  //   // I027
  //   // 'I027',
  //   // I028
  //   // 'I028',
  //   // I029
  //   // 'I029',
  //   // I030
  //   '30',
  //   // I031
  //   // 'I031',
  //   // I032
  //   '32',
  //   // I033
  //   '33',
  //   // I034
  //   // 'I034',
  //   // I035
  //   '35',
  //   // I036
  //   // 'Airports exposed to fluvial flooding',
  //   // I037
  //   // 'Ports exposed to fluvial flooding',
  //   // I038
  //   // 'Hospitals exposed to fluvial flooding',
  //   // I039
  //   // 'Power plants exposed to fluvial flooding',
  //   // I040
  //   '40',
  //   // I041
  //   // 'I041',
  //   // I042
  //   '42',
  //   // I043
  //   '43',
  //   // I044
  //   // 'I044',
  //   // I045
  //   '45',
  //   // I046
  //   // 'Airports exposed to coastal hazard',
  //   // I047
  //   // 'Ports exposed to coastal hazard',
  //   // I048
  //   // 'Hospitals exposed to coastal hazard',
  //   // I049
  //   // 'Power plants exposed to coastal hazard',
  //   // I050
  //   '50',
  //   // I051
  //   // 'I051',
  //   // I052
  //   '52',
  //   // I053
  //   '53',
  //   // I054
  //   // 'I054',
  //   // I055
  //   '55',
  //   // I056
  //   // 'Airports exposed to landslide',
  //   // I057
  //   // 'Ports exposed to landslide',
  //   // I058
  //   // 'Hospitals exposed to landslide',
  //   // I059
  //   // 'Power plants exposed to landslide',
  //   // I060
  //   // 'Average population density',
  //   // I061
  //   '61',
  //   // I062
  //   '62',
  //   // I063
  //   '63',
  //   // I064
  //   '64',
  //   // I065
  //   '65',
  //   // I066
  //   '66',
  //   // I067
  //   '67',
  //   // I068
  //   '68',
  //   // I069
  //   '69',
  //   // I070
  //   '70',
  //   // I071
  //   // 'I071',
  //   // I072
  //   // 'I072',
  //   // I073
  //   '73',
  //   // I074
  //   // 'I074',
  //   // I075
  //   '75',
  //   // I076
  //   '76',
  //   // I077
  //   '77',
  //   // I078
  //   '78',
  //   // I079
  //   '79',
  //   // I080
  //   // 'I080',
  //   // I081
  //   '81. Fluvial hazard',
  //   // I082
  //   '82. Landslide hazard',
  //   // // V1.1
  //   // 'Mean temperature (RCP 4.5)',
  //   // // V10.1
  //   // 'Consecutive dry days (RCP 4.5)',
  //   // // V11.1
  //   // 'Consecutive wet days (RCP 4.5)',
  //   // // V12.1
  //   // 'Heavy precipitation days (RCP 4.5)',
  //   // // V13.1
  //   // 'Very heavy precipitation days (RCP 4.5)',
  //   // // V2.1
  //   // 'Minimum temperature (RCP 4.5)',
  //   // // V3.1
  //   // 'Maximum temperature (RCP 4.5)',
  //   // // V4.1
  //   // 'Frost days (RCP 4.5)',
  //   // // V5.1
  //   // 'Summer days (RCP 4.5)',
  //   // // V6.1
  //   // 'Tropical nights (RCP 4.5)',
  //   // // V7.1
  //   // 'Ice days (RCP 4.5)',
  //   // // V8.1
  //   // 'Heat wave days (RCP 4.5)',
  //   // // V9.1
  //   // 'Total wet-day precipitation (RCP 4.5)',
  // ],

  labels: [
    // I001
    '1',
    // I002
    //'Minimum temperature (RCP 8.5)',
    // I003
    // 'Maximum temperature (RCP 8.5)',
    // I004
    // 'Frost days (RCP 8.5)',
    // I005
    '5',
    // I006
    // 'Tropical nights (RCP 8.5)',
    // I007
    '7',
    // I008
    '8',
    // I009
    // 'Total wet-day precipitation (RCP 8.5)',
    // I010
    '10',
    // I011
    '11',
    // I012
    '12',
    // I013
    '13',
    // I014
    '14',
    // I015
    '15',
    // I016
    '16',
    // I017
    '17',
    // I018
    '18',
    // I019
    '19',
    // I020
    '20',
    // I021
    '21',
    // I022
    '22',
    // I023
    '23',
    // I024
    '24',
    // I025
    '25',
    // I026
    '26',
    // I027
    // 'I027',
    // I028
    // 'I028',
    // I029
    // 'I029',
    // I030
    '30',
    // I031
    // 'I031',
    // I032
    '32',
    // I033
    '33',
    // I034
    // 'I034',
    // I035
    '35',
    // I036
    // 'Airports exposed to fluvial flooding',
    // I037
    // 'Ports exposed to fluvial flooding',
    // I038
    // 'Hospitals exposed to fluvial flooding',
    // I039
    // 'Power plants exposed to fluvial flooding',
    // I040
    '40',
    // I041
    // 'I041',
    // I042
    '42',
    // I043
    '43',
    // I044
    // 'I044',
    // I045
    '45',
    // I046
    // 'Airports exposed to coastal hazard',
    // I047
    // 'Ports exposed to coastal hazard',
    // I048
    // 'Hospitals exposed to coastal hazard',
    // I049
    // 'Power plants exposed to coastal hazard',
    // I050
    '50',
    // I051
    // 'I051',
    // I052
    '52',
    // I053
    '53',
    // I054
    // 'I054',
    // I055
    '55',
    // I056
    // 'Airports exposed to landslide',
    // I057
    // 'Ports exposed to landslide',
    // I058
    // 'Hospitals exposed to landslide',
    // I059
    // 'Power plants exposed to landslide',
    // I060
    // 'Average population density',
    // I061
    '61',
    // I062
    '62',
    // I063
    '63',
    // I064
    '64',
    // I065
    '65',
    // I066
    '66',
    // I067
    '67',
    // I068
    '68',
    // I069
    '69',
    // I070
    '70',
    // I071
    // 'I071',
    // I072
    // 'I072',
    // I073
    '73',
    // I074
    // 'I074',
    // I075
    '75',
    // I076
    '76',
    // I077
    '77',
    // I078
    '78',
    // I079
    '79',
    // I080
    // 'I080',
    // I081
    '81',
    // I082
    '82',
    // // V1.1
    // 'Mean temperature (RCP 4.5)',
    // // V10.1
    // 'Consecutive dry days (RCP 4.5)',
    // // V11.1
    // 'Consecutive wet days (RCP 4.5)',
    // // V12.1
    // 'Heavy precipitation days (RCP 4.5)',
    // // V13.1
    // 'Very heavy precipitation days (RCP 4.5)',
    // // V2.1
    // 'Minimum temperature (RCP 4.5)',
    // // V3.1
    // 'Maximum temperature (RCP 4.5)',
    // // V4.1
    // 'Frost days (RCP 4.5)',
    // // V5.1
    // 'Summer days (RCP 4.5)',
    // // V6.1
    // 'Tropical nights (RCP 4.5)',
    // // V7.1
    // 'Ice days (RCP 4.5)',
    // // V8.1
    // 'Heat wave days (RCP 4.5)',
    // // V9.1
    // 'Total wet-day precipitation (RCP 4.5)',
  ],

  /**
   * The typology data.
   */
  typologyData: {
    '1':  [ -0.23372, 0.80715, 0.67835, 0.02955, 0.81648, -0.11817, -0.40057, -0.46146, 0.19476, -0.69376, -0.70600, -0.90788, -1.20715, 0.02074, 0.21218, 0.64634, 0.94188, -0.35566, -0.38937, -0.28963, -0.67704, -0.94726, -1.03020, -1.07401, -0.79683, 1.18974, 0.93161, 0.01063, 1.14389, 0.25725, -0.00940, -0.37474, 0.08798, 0.00910, -0.42966, 0.11301, -0.33125, -0.04789, 0.75436, -0.32082, -0.69395, -0.69395, 0.49461, 0.48231, -0.00450, 0.54815, -0.10717, -0.44477, -0.08514, -1.00262, 0.56681 ],
    '11': [  ],
    '12': [  ],
    '13': [  ],
    '14': [  ],
    '2':  [ -0.29641, -0.40730, 0.03745, -0.20113, -0.73001, 0.69965, 0.49262, 0.55685, 0.50372, -0.01108, -0.06576, 0.07878, 0.60921, 0.42197, 0.50261, -0.22046, 0.27360, 0.20535, -0.31975, 0.82521, 0.90893, -0.02959, 0.18073, 0.17820, -0.09991, 0.33470, 0.27719, 0.60759, 0.12475, 0.17279, 0.23037, 0.27279, 0.20667, -0.10303, 0.10868, 0.51424, 0.03499, -0.17463, -0.12659, 0.48969, 0.16908, 0.16908, 0.47022, 0.17694, 0.81420, 0.29283, -0.18422, 0.61099, 0.51357, -0.13406, 0.06085 ],
    '21': [  ],
    '22': [  ],
    '23': [  ],
    '24': [  ],
    '3':  [ -0.27047, 0.54056, 0.57487, 0.27441, 0.68838, -1.14279, -0.84737, -0.76606, -0.00744, 0.84115, 0.65814, 1.12776, 0.45473, 0.07817, -0.25484, -0.08766, -0.40006, 0.19926, 0.49462 , -0.49632, -0.08504, 0.33005, 0.15409, 0.04486, 0.41681, -0.47817, -0.38556, -0.23503, -0.33001, -0.62318, -0.49458, -0.19798, -0.52590, 0.28118, 0.45145, -0.36923, 0.85517, 0.71761, 0.34861, -0.26603, 0.68083, 0.68083, -0.56762, 0.29494, -0.92942, -0.23247, 0.24144, 0.30535, 0.21397, 0.59535, -0.54273 ],
    '31': [  ],
    '32': [  ],
    '33': [  ],
    '34': [  ],
    '4':  [ 0.71040, -0.50530, -0.95486, -0.01522, -0.26561, 0.21695, 0.39449, 0.29464, -0.69322, -0.22362, -0.00378, -0.42074, -0.27786, -0.55699, -0.50088, -0.09885, -0.59723, -0.16467, 0.21235, -0.34295, -0.52220, 0.38073, 0.33974, 0.46053, 0.29165, -0.76424, -0.60649, -0.50507, -0.61702, 0.14593, 0.14899, 0.09615, 0.13811, -0.11891, -0.21294, -0.35590, -0.52363, -0.35748, -0.63285, -0.12979, -0.29706, -0.29706, -0.39217, -0.75661, -0.16187, -0.49970, 0.08162 -0.65437, -0.70319, 0.31846, 0.00562 ],
    '41': [  ],
    '42': [  ],
    '43': [  ],
    '44': [  ],
    '5':  [  ],
    '51': [  ],
    '52': [  ],
    '53': [  ],
    '54': [  ],
    '55': [  ],
    '6':  [  ],
    '61': [  ],
    '62': [  ],
    '63': [  ],
    '7':  [  ],
    '71': [  ],
    '72': [  ],
    '73': [  ],
    '74': [  ],
    '8':  [  ],
    '81': [  ],
    '82': [  ],
    '83': [  ]
  },

  /**
   * The colors of the radar diagram.
   */
  colors: {
    dataSeries: {
      backgroundColor: "rgba(213, 58, 53, 0.2)",
      borderColor: "rgba(213, 58, 53, 1)",
      pointBackgroundColor: "rgba(166, 28, 24, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(166, 28, 24, 1)"
    },
    average: {
      backgroundColor: "rgba(0, 74, 127, 0.2)",
      borderColor: "rgba(0, 74, 127, 1)",
      pointBackgroundColor: "rgba(166, 28, 24, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(166, 28, 24, 1)",
    }
  },

  /**
   * The configuration object of the radar diagram.
   */
  config: {
    type: 'radar',
    data: null,
    options: null
  },

  /**
   * The radar diagram.
   */
  radarDiagram: null,

  /**
   * Creates a radar diagram.
   *
   * @param code - The typology code used to create the radar diagram.
   */
  createRadarDiagram: function(code) {

    // Any of the following formats may be used
    // var ctx = document.getElementById("myChart");
    // var ctx = document.getElementById("myChart").getContext("2d");
    // var ctx = "myChart";

    let dataDiagram = $('#radar-diagram');

    let dataProperties = {
      labels: this.labels,
      datasets: [
        {
          label: radarDiagramModalViewModel.title,
          backgroundColor: this.colors.dataSeries.backgroundColor,
          borderColor: this.colors.dataSeries.borderColor,
          pointBackgroundColor: this.colors.dataSeries.pointBackgroundColor,
          pointBorderColor: this.colors.dataSeries.pointBorderColor,
          pointHoverBackgroundColor: this.colors.dataSeries.pointHoverBackgroundColor,
          pointHoverBorderColor: this.colors.dataSeries.pointHoverBorderColor,
          data: this.typologyData[code]
        },
        {
          label: 'European Average', //'Average',
          // backgroundColor: this.colors.average.backgroundColor,
          borderColor: this.colors.average.borderColor,
          // pointBackgroundColor: this.colors.average.pointBackgroundColor,
          // pointBorderColor: this.colors.average.pointBorderColor,
          // pointHoverBackgroundColor: this.colors.average.pointHoverBackgroundColor,
          // pointHoverBorderColor: this.colors.average.pointHoverBorderColor,
          data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        }
      ]
    };

    let options = {
      scale: {
        reverse: false, // TODO: Decide whether to use reverse or not.
        ticks: {
          beginAtZero: true
        }
      }
    };

    this.config.data = dataProperties;
    this.config.options = options;

    this.radarDiagram = new Chart(dataDiagram, this.config);

  },

  /**
   * Updates a radar diagram.
   *
   * @param code - The typology code used to update the radar diagram.
   */
  updateRadarDiagram(code) {

    this.config.data.datasets[0].label = radarDiagramModalViewModel.title;
    this.config.data.datasets[0].data = this.typologyData[code];

    this.radarDiagram.update();

  }

};

export { RadarDiagrams };

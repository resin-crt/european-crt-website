
// ================================================================================
//  University of Manchester. UK.
//  School of Environment, Education, and Development.
//
//  Name:            symbologyViewModel.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 20/09/2018.
//
//  Description:     The view model of the symbology panel.
// ================================================================================

import Vue from "../../../libs/vue-2.5.16/vue.esm.js";

/**
 * The symbologyViewModel provides tha data and logic
 * to allow a user to setup the NUTS3 layer symbology.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let symbologyViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#symbologyVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * Indicates whether the view is visible or not.
     */
    isVisible: true,

    /**
     * The current tab panel.
     */
    currentTab: 'supergroups',

    /**
     * The current domain in the indicators tab panel.
     */
    currentDomain: 'hazard',

    /**
     * Provides a dictionary of objects to allow the rendering of the view.
     */
    dictionary: {
      'supergroups': {
        name: 'Classes',
        '1': { isInformationPanelVisible: false, icon: 'far fa-building',     isRadarDiagramVisible: false },
        '2': { isInformationPanelVisible: false, icon: 'fas fa-leaf',         isRadarDiagramVisible: false },
        '3': { isInformationPanelVisible: false, icon: 'fas fa-snowflake',    isRadarDiagramVisible: false },
        '4': { isInformationPanelVisible: false, icon: 'fas fa-sun',          isRadarDiagramVisible: false },
        '5': { isInformationPanelVisible: false, icon: 'fab fa-servicestack', isRadarDiagramVisible: false },
        '6': { isInformationPanelVisible: false, icon: 'far fa-image',        isRadarDiagramVisible: false },
        '7': { isInformationPanelVisible: false, icon: 'fas fa-tint',         isRadarDiagramVisible: false },
        '8': { isInformationPanelVisible: false, icon: 'fab fa-firstdraft',   isRadarDiagramVisible: false }
      },
      'groups': {
        name: 'Subclasses',
        '1':  { isInformationPanelVisible: false, icon: 'far fa-building',     isRadarDiagramVisible: false },
        '11': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '12': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '13': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '14': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '2':  { isInformationPanelVisible: false, icon: 'fas fa-leaf',         isRadarDiagramVisible: false },
        '21': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '22': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '23': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '24': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '3':  { isInformationPanelVisible: false, icon: 'fas fa-snowflake',    isRadarDiagramVisible: false },
        '31': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '32': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '33': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '34': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '4':  { isInformationPanelVisible: false, icon: 'fas fa-sun',          isRadarDiagramVisible: false },
        '41': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '42': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '43': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '44': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '5':  { isInformationPanelVisible: false, icon: 'fab fa-servicestack', isRadarDiagramVisible: false },
        '51': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '52': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '53': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '54': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '55': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '6':  { isInformationPanelVisible: false, icon: 'far fa-image',        isRadarDiagramVisible: false },
        '61': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '62': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '63': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '7':  { isInformationPanelVisible: false, icon: 'fas fa-tint',         isRadarDiagramVisible: false },
        '71': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '72': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '73': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '74': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '8':  { isInformationPanelVisible: false, icon: 'fab fa-firstdraft',   isRadarDiagramVisible: false },
        '81': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '82': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false },
        '83': { isInformationPanelVisible: false, icon: 'fab fa-leanpub',      isRadarDiagramVisible: false }
      },
      'indicators': {
        name: 'Indicators',
        'I001': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I002': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I003': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I004': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I005': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I006': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I007': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I008': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I009': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I010': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I011': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I012': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I013': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I014': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I015': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I016': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I017': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I018': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I019': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I020': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I021': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I022': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I023': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I024': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I025': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I026': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I030': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I032': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I033': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I035': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I036': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I037': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I038': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I039': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I040': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I042': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I043': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I045': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I046': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I047': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I048': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I049': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I050': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I052': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I053': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I055': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I056': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I057': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I058': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I059': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I060': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I061': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I062': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I063': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I064': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I065': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I066': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I067': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I068': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I069': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I070': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I073': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I075': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I076': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I077': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I078': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I079': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I081': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' },
        'I082': { isInformationPanelVisible: false, icon: 'fab fa-leanpub' }
      },
      'domains': [
        { key: 'hazard',      name: 'Hazard', },
        { key: 'exposure',    name: 'Exposure', },
        { key: 'sensitivity', name: 'Sensitivity', },
        { key: 'adaptivity',  name: 'Adapt. Capacity', }
      ]
    },

    /**
     * The supergroups metadata in the form of a dictionary whose keys are the values of supergroups.
     */
    supergroups: MapLayers.nuts3.supergroups,

    /**
     * The groups metadata in the form of a dictionary whose keys are the values of groups.
     */
    groups: MapLayers.nuts3.groups,

    /**
     * The array of domain objects used to render portions of the view based on indicator domains.
     */
    domains: AppData.domains,

    /**
     * The dictionary of indicator objects used to render portions of the view based on indicators grouped per domain.
     */
    domainDictionaryIndicators: AppData.domainDictionaryIndicators,

    /**
     * The icon used on the information buttons.
     */
    infoIconName: 'help_outline', // help, help_outline, live_help, announcement, feedback, info

    /**
     * The icon used on the radar diagram buttons.
     */
    radarIconName: 'timeline', // timeline, bar_chart, track_changes, equalizer, trending_up, insert_chart_outlined, show_chart,

    /**
     * The array of selected supergroups used by the list of supergroup checkboxes.
     */
    checkedSupergroups: [ '1', '2', '3', '4', '5', '6', '7', '8' ],

    /**
     * The array of selected groups used by the list of group checkboxes.
     */
    // TODO: RESIN - Checked Groups need to be updated depending on the final typology.
    checkedGroups: [
      '11', '12', '13', '14',
      '21', '22', '23', '24',
      '31', '32', '33', '34',
      '41', '42', '43', '44',
      '51', '52', '53', '54', '55',
      '61', '62', '63',
      '71', '72', '73', '74',
      '81', '82', '83'
    ],

    /**
     * The selected indicators used by the list of the radio buttons in the indicators tab panel.
     */
    selectedIndicators: {
      hazard: [ 'I001' ],
      exposure: [ 'I030' ],
      sensitivity: [ 'I060' ],
      adaptivity: [ 'I077' ]
    },

    /**
     * Gradients used to render the positive values of indicators.
     */
    positiveGradients: [
      {
        name: 'Alizarin',
        value: 'alizarin',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.alizarin300.hex,
          ColorPalettes.FlatDesign.alizarin500.hex,
          ColorPalettes.FlatDesign.alizarin700.hex,
          ColorPalettes.FlatDesign.alizarin900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Amber',
        value: 'amber',
        OneStDevGradient: [
          ColorPalettes.Material.orange300.hex,
          ColorPalettes.Material.orange500.hex,
          ColorPalettes.Material.orange700.hex,
          ColorPalettes.Material.orange900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Amethyst',
        value: 'amethyst',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.amethyst300.hex,
          ColorPalettes.FlatDesign.amethyst500.hex,
          ColorPalettes.FlatDesign.amethyst700.hex,
          ColorPalettes.FlatDesign.amethyst900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Brown',
        value: 'brown',
        OneStDevGradient: [
          ColorPalettes.Material.brown300.hex,
          ColorPalettes.Material.brown500.hex,
          ColorPalettes.Material.brown700.hex,
          ColorPalettes.Material.brown900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Carrot',
        value: 'carrot',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.carrot300.hex,
          ColorPalettes.FlatDesign.carrot500.hex,
          ColorPalettes.FlatDesign.carrot700.hex,
          ColorPalettes.FlatDesign.carrot900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Deep Orange',
        value: 'deepOrange',
        OneStDevGradient: [
          ColorPalettes.Material.deepOrange300.hex,
          ColorPalettes.Material.deepOrange500.hex,
          ColorPalettes.Material.deepOrange700.hex,
          ColorPalettes.Material.deepOrange900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Gold',
        value: 'gold',
        OneStDevGradient: [
          ColorPalettes.PatternFly.gold400.hex,
          ColorPalettes.PatternFly.gold500.hex,
          ColorPalettes.PatternFly.gold600.hex,
          ColorPalettes.PatternFly.gold700.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Orange',
        value: 'orange',
        OneStDevGradient: [
          ColorPalettes.Material.orange300.hex,
          ColorPalettes.Material.orange500.hex,
          ColorPalettes.Material.orange700.hex,
          ColorPalettes.Material.orange900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Orange (FD)',
        value: 'orangeFlatDesign',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.orange300.hex,
          ColorPalettes.FlatDesign.orange500.hex,
          ColorPalettes.FlatDesign.orange700.hex,
          ColorPalettes.FlatDesign.orange900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Orange (PF)',
        value: 'orangePatternFly',
        OneStDevGradient: [
          ColorPalettes.PatternFly.orange200.hex,
          ColorPalettes.PatternFly.orange400.hex,
          ColorPalettes.PatternFly.orange600.hex,
          ColorPalettes.PatternFly.orange700.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Pink',
        value: 'pink',
        OneStDevGradient: [
          ColorPalettes.Material.pink300.hex,
          ColorPalettes.Material.pink500.hex,
          ColorPalettes.Material.pink700.hex,
          ColorPalettes.Material.pink900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Pomegranate',
        value: 'pomegranate',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.pomegranate300.hex,
          ColorPalettes.FlatDesign.pomegranate500.hex,
          ColorPalettes.FlatDesign.pomegranate700.hex,
          ColorPalettes.FlatDesign.pomegranate900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Pumpkin',
        value: 'pumpkin',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.pumpkin300.hex,
          ColorPalettes.FlatDesign.pumpkin500.hex,
          ColorPalettes.FlatDesign.pumpkin700.hex,
          ColorPalettes.FlatDesign.pumpkin900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Purple',
        value: 'purple',
        OneStDevGradient: [
          ColorPalettes.Material.purple300.hex,
          ColorPalettes.Material.purple500.hex,
          ColorPalettes.Material.purple700.hex,
          ColorPalettes.Material.purple900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Red',
        value: 'red',
        OneStDevGradient: [
          ColorPalettes.Material.red300.hex,
          ColorPalettes.Material.red500.hex,
          ColorPalettes.Material.red700.hex,
          ColorPalettes.Material.red900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Sunflower',
        value: 'sunflower',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.sunflower300.hex,
          ColorPalettes.FlatDesign.sunflower500.hex,
          ColorPalettes.FlatDesign.sunflower700.hex,
          ColorPalettes.FlatDesign.sunflower900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Wisteria',
        value: 'wisteria',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.wisteria300.hex,
          ColorPalettes.FlatDesign.wisteria500.hex,
          ColorPalettes.FlatDesign.wisteria700.hex,
          ColorPalettes.FlatDesign.wisteria900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Yellow',
        value: 'yellow',
        OneStDevGradient: [
          ColorPalettes.Material.yellow300.hex,
          ColorPalettes.Material.yellow500.hex,
          ColorPalettes.Material.yellow700.hex,
          ColorPalettes.Material.yellow900.hex
        ],
        HalfStDevGradient: []
      }
    ],

    /**
     * The selected positive gradient.
     */
    selectedPositiveGradient: 'amber',

    /**
     * Gradients used to render the negative values of indicators.
     */
    negativeGradients: [
      {
        name: 'Belize Hole',
        value: 'belizeHole',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.belizeHole300.hex,
          ColorPalettes.FlatDesign.belizeHole500.hex,
          ColorPalettes.FlatDesign.belizeHole700.hex,
          ColorPalettes.FlatDesign.belizeHole900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Blue',
        value: 'blue',
        OneStDevGradient: [
          ColorPalettes.Material.blue300.hex,
          ColorPalettes.Material.blue500.hex,
          ColorPalettes.Material.blue700.hex,
          ColorPalettes.Material.blue900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Blue (PF)',
        value: 'bluePatternFly',
        OneStDevGradient: [
          ColorPalettes.PatternFly.blue200.hex,
          ColorPalettes.PatternFly.blue400.hex,
          ColorPalettes.PatternFly.blue600.hex,
          ColorPalettes.PatternFly.gold700.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Blue Gray',
        value: 'blueGray',
        OneStDevGradient: [
          ColorPalettes.Material.blueGray300.hex,
          ColorPalettes.Material.blueGray500.hex,
          ColorPalettes.Material.blueGray700.hex,
          ColorPalettes.Material.blueGray900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Cyan',
        value: 'cyan',
        OneStDevGradient: [
          ColorPalettes.Material.cyan300.hex,
          ColorPalettes.Material.cyan500.hex,
          ColorPalettes.Material.cyan700.hex,
          ColorPalettes.Material.cyan900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Cyan (PF)',
        value: 'cyanPatternFly',
        OneStDevGradient: [
          ColorPalettes.PatternFly.cyan300.hex,
          ColorPalettes.PatternFly.cyan400.hex,
          ColorPalettes.PatternFly.cyan600.hex,
          ColorPalettes.PatternFly.cyan700.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Deep Purple',
        value: 'deepPurple',
        OneStDevGradient: [
          ColorPalettes.Material.deepPurple300.hex,
          ColorPalettes.Material.deepPurple500.hex,
          ColorPalettes.Material.deepPurple700.hex,
          ColorPalettes.Material.deepPurple900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Emerald',
        value: 'emerald',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.emerald300.hex,
          ColorPalettes.FlatDesign.emerald500.hex,
          ColorPalettes.FlatDesign.emerald700.hex,
          ColorPalettes.FlatDesign.emerald900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Green',
        value: 'green',
        OneStDevGradient: [
          ColorPalettes.Material.green300.hex,
          ColorPalettes.Material.green500.hex,
          ColorPalettes.Material.green700.hex,
          ColorPalettes.Material.green900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Green (PF)',
        value: 'greenPatternFly',
        OneStDevGradient: [
          ColorPalettes.PatternFly.green300.hex,
          ColorPalettes.PatternFly.green400.hex,
          ColorPalettes.PatternFly.green600.hex,
          ColorPalettes.PatternFly.green700.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Green Sea',
        value: 'greenSea',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.greenSea300.hex,
          ColorPalettes.FlatDesign.greenSea500.hex,
          ColorPalettes.FlatDesign.greenSea700.hex,
          ColorPalettes.FlatDesign.greenSea900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Indigo',
        value: 'indigo',
        OneStDevGradient: [
          ColorPalettes.Material.indigo200.hex,
          ColorPalettes.Material.indigo400.hex,
          ColorPalettes.Material.indigo600.hex,
          ColorPalettes.Material.indigo900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Light Blue',
        value: 'lightBlue',
        OneStDevGradient: [
          ColorPalettes.Material.lightBlue300.hex,
          ColorPalettes.Material.lightBlue500.hex,
          ColorPalettes.Material.lightBlue700.hex,
          ColorPalettes.Material.lightBlue900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Light Green',
        value: 'lightGreen',
        OneStDevGradient: [
          ColorPalettes.Material.lightGreen300.hex,
          ColorPalettes.Material.lightGreen500.hex,
          ColorPalettes.Material.lightGreen700.hex,
          ColorPalettes.Material.lightGreen900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Light Green (PF)',
        value: 'lightGreenPatternFly',
        OneStDevGradient: [
          ColorPalettes.PatternFly.lightGreen300.hex,
          ColorPalettes.PatternFly.lightGreen500.hex,
          ColorPalettes.PatternFly.lightGreen600.hex,
          ColorPalettes.PatternFly.lightGreen700.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Lime',
        value: 'lime',
        OneStDevGradient: [
          ColorPalettes.Material.lime300.hex,
          ColorPalettes.Material.lime500.hex,
          ColorPalettes.Material.lime700.hex,
          ColorPalettes.Material.lime900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Nephritis',
        value: 'nephritis',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.nephritis300.hex,
          ColorPalettes.FlatDesign.nephritis500.hex,
          ColorPalettes.FlatDesign.nephritis700.hex,
          ColorPalettes.FlatDesign.nephritis900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Peter River',
        value: 'peterRiver',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.peterRiver300.hex,
          ColorPalettes.FlatDesign.peterRiver500.hex,
          ColorPalettes.FlatDesign.peterRiver700.hex,
          ColorPalettes.FlatDesign.peterRiver900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Teal',
        value: 'teal',
        OneStDevGradient: [
          ColorPalettes.Material.teal300.hex,
          ColorPalettes.Material.teal500.hex,
          ColorPalettes.Material.teal700.hex,
          ColorPalettes.Material.teal900.hex
        ],
        HalfStDevGradient: []
      },
      {
        name: 'Turquoise',
        value: 'turquoise',
        OneStDevGradient: [
          ColorPalettes.FlatDesign.turquoise300.hex,
          ColorPalettes.FlatDesign.turquoise500.hex,
          ColorPalettes.FlatDesign.turquoise700.hex,
          ColorPalettes.FlatDesign.turquoise900.hex
        ],
        HalfStDevGradient: []
      }
    ],

    /**
     * The selected negative gradient.
     */
    selectedNegativeGradient: 'indigo'

  },

  /**
   * The computed properties of the model of the view model.
   */
  computed: {

    /**
     * Gets the fill colors used to render the NUTS3 layer.
     * The colors are displayed on the supergroups toggle buttons.
     */
    supergroupFillColors: function() {

      let fillColors = {};

      let currentBasemap = toggleBaseMapViewModel.currentBaseMap;
      let supergroupStyles = MapLayers.nuts3.namedBasemapLayers[currentBasemap].supergroupStyles;

      for (let sg in supergroupStyles) {
        if (supergroupStyles.hasOwnProperty(sg)) {
          fillColors[sg] = {
            fillColor: supergroupStyles[sg].fillColor,
            fillOpacity: supergroupStyles[sg].fillOpacity
          };
        }
      }

      return fillColors;

    },

    /**
     * Gets the fill colors used to render the NUTS3 layer.
     * The colors are displayed on the groups toggle buttons.
     */
    groupFillColors: function() {

      let fillColors = {};

      let currentBasemap = toggleBaseMapViewModel.currentBaseMap;
      let groupStyles = MapLayers.nuts3.namedBasemapLayers[currentBasemap].groupStyles;

      for (let g in groupStyles) {
        if (groupStyles.hasOwnProperty(g)) {
          fillColors[g] = {
            fillColor: groupStyles[g].fillColor,
            fillOpacity: groupStyles[g].fillOpacity
          };
        }
      }

      return fillColors;

    }

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Determines if a number is odd.
     *
     * @param number - The number to check.
     */
    isOdd(number) {
      return number % 2;
    },

    /**
     * Sets the current tab.
     *
     * @param tabName - The name of the tab to activate.
     */
    setCurrentTab(tabName) {
      this.currentTab = tabName;

      MapLayers.nuts3.renderLayer();
    },

    /**
     * Sets the current domain.
     *
     * @param tabIndex - The index of the tab.
     */
    setCurrentDomain(tabIndex) {
      this.currentDomain = this.dictionary.domains[tabIndex].key;
      MapLayers.nuts3.renderLayer();
    },

    /**
     * Selects all the supergroups or groups depending on the currently selected tab.
     */
    selectAll() {

      if (this.currentTab === 'supergroups') {
        this.checkedSupergroups = [];

        for (let sg in this.supergroups) {
          if (this.supergroups.hasOwnProperty(sg)) {
            this.supergroups[sg].visible = true;
            this.checkedSupergroups.push(sg.toString());
          }
        }
      }
      else if (this.currentTab === 'groups') {
        this.checkedGroups = [];

        for (let g in this.groups) {
          if (this.groups.hasOwnProperty(g)) {
            this.groups[g].visible = true;
            this.checkedGroups.push(g.toString());
          }
        }
      }

      MapLayers.nuts3.renderLayer();

    },

    /**
     * Selects all the supergroups or groups depending on the currently selected tab.
     */
    deselectAll() {

      if (this.currentTab === 'supergroups') {
        for (let sg in this.supergroups) {
          if (this.supergroups.hasOwnProperty(sg)) {
            this.supergroups[sg].visible = false;
          }
        }
        this.checkedSupergroups = [];
      }
      else if (this.currentTab === 'groups') {
        for (let g in this.groups) {
          if (this.groups.hasOwnProperty(g)) {
            this.groups[g].visible = false;
          }
        }
        this.checkedGroups = [];
      }

      MapLayers.nuts3.renderLayer();

    },

    /**
     * Toggles the groups associated with the specified supergroup.
     *
     * @param supergroup - The supergroup whose associated groups will be toggled on/off.
     */
    toggleGroups(supergroup) {

      let areGroupsVisible = true;

      // Loop through all the associated groups.
      let groups = this.supergroups[supergroup].groups;

      for (let i = 0; i < groups.length; i++) {
        // Check the visibility of the associated groups.
        if (this.groups[groups[i].toString()].visible) {
          // A group was found visible. Make all invisible.
          areGroupsVisible = false;
          break;
        }
      }

      // Loop through all the associated groups and set their visibility.
      for (let i = 0; i < groups.length; i++) {
        this.groups[groups[i].toString()].visible = areGroupsVisible;
      }

      // Toggle the groups associated with the specified supergroup.
      this.checkedGroups = [];

      for (let g in this.groups) {
        if (this.groups.hasOwnProperty(g)) {
          if (this.groups[g].visible) {
            this.checkedGroups.push(g.toString());
          }
        }
      }

      MapLayers.nuts3.renderLayer();

    },

    /**
     * Renders the regions of the NUTS3 layer having the specified typology class after toggling it on/off.
     *
     * @param typologyClass - The typology class that is toggled on/off.
     */
    renderNuts3TypologyClass(typologyClass) {

      this[this.currentTab][typologyClass].visible = !this[this.currentTab][typologyClass].visible;

      MapLayers.nuts3.changeTypologyClassStyle(typologyClass);

    },

    /**
     * Renders the NUTS 3 layer.
     */
    renderNuts3Layer() {
      MapLayers.nuts3.renderLayer();
    },

    /**
     * Toggles on/off the information panel of a supergroup, group or indicator.
     *
     * @param code - The code [ie: supergroup, group, indicator] that will be used to toggle
     *               the information of a supergroup, group or indicator.
     */
    toggleInfo(code) {
      this.dictionary[this.currentTab][code].isInformationPanelVisible =
        !this.dictionary[this.currentTab][code].isInformationPanelVisible;

      // //TODO: RESIN - This code is needed if we need to show a tooltip over the help button.
      // let l = (this.currentTab === 'supergroups' ? 'sg' : (this.currentTab === 'groups' ? 'g' : 'i'));
      //
      // let element = '#toggle-' + l + '-info-' + code;
      //
      // this.destroyTooltip(element);
      //
      // $('#' + element).tooltip();
    },

    /**
     * Toggles on/off the radar diagram modal window.
     *
     * @param code - The code [ie: supergroup, group] that will be used to toggle
     *               the radar diagram modal window of a supergroup or group.
     */
    toggleRadarDiagram(code) {

      // Dynamic Heights
      // If the height of a modal changes while it is open, you should call
      // $('#myModal').modal('handleUpdate')
      // to readjust the modal’s position in case a scrollbar appears.

      this.dictionary[this.currentTab][code].isRadarDiagramVisible =
        !this.dictionary[this.currentTab][code].isRadarDiagramVisible;

      radarDiagramModalViewModel.toggleModal(code);

    },


    showRadarDiagram(code) {
      this.dictionary[this.currentTab][code].isRadarDiagramVisible =
        !this.dictionary[this.currentTab][code].isRadarDiagramVisible;

      radarContainerViewModel.show(code);
    }

  }

});

export { symbologyViewModel };

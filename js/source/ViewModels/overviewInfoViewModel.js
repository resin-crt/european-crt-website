
// ================================================================================
//  University of Manchester. UK.
//  School of Environment, Education, and Development.
//
//  Name:            overviewInfoViewModel.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 20/09/2018.
//
//  Description:     The view model of the overview information panel.
// ================================================================================

import Vue from "../../../libs/vue-2.5.16/vue.esm.js";

/**
 * The overviewInfoViewModel provides the data and logic
 * to display overview information about a NUTS3 region.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let overviewInfoViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#overviewInfoVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * Indicates whether the view is visible or not.
     */
    isVisible: false,

    /**
     * The name of the NUTS 3 region used to be displayed on the view.
     */
    nuts3Name: '',

    /**
     * The name of the NUTS 3 region, in the native language spoken in the region, used to be displayed on the view.
     */
    nuts3NativeName: '',

    /**
     * The language used to display the NUTS 3 region.
     */
    language: 'en',

    /**
     * The name of the supergroup of the selected NUTS 3 region.
     */
    supergroupName: null,

    /**
     * The name of the group of the selected NUTS 3 region.
     */
    groupName: null,

    /**
     * The supergroup's fill colour of the selected NUTS 3 region.
     */
    supergroupFillColor: { fillColor: '#ffffff', fillOpacity: 0.01 },

    /**
     * The group's fill colour of the selected NUTS 3 region.
     */
    groupFillColor: { fillColor: '#ffffff', fillOpacity: 0.01 },

    /**
     * Provides a dictionary of objects to allow the rendering of the view.
     */
    dictionary: {
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
      }
    },

    /**
     * The indicator domains.
     */
    domains: AppData.domains,

    // TODO: RESIN - Remove this ???
    //domainSortedIndicators: AppData.domainSortedIndicators,

    /**
     * The dictionary of indicators grouped by their domain.
     */
    domainDictionaryIndicators: AppData.domainDictionaryIndicators,

    /**
     * The dictionary of indicator values grouped ny their domain.
     */
    domainDictionaryIndicatorValues: undefined,

    /**
     * The name of the icon used on the information button.
     */
    infoIconName: 'help_outline' // help, help_outline, live_help, announcement, feedback, info

  },

  /**
   * The computed properties of the model of the view model.
   */
  computed: {

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Toggles the language from en to other and vice versa.
     */
    toggleLanguage() {
      if (this.language === 'en') {
        this. language = 'other';
      }
      else {
        this.language = 'en';
      }
      if (AppState.bootstrapMaterialTooltipEnabled) {
        $('#toggle-lang').tooltip('hide');
      }
    },

    /**
     * Toggles the indicators of the specified domain.
     *
     * @param index - The index of the domain.
     */
    toggleDomain(index) {
      this.domains[index].isOverviewVisible = !this.domains[index].isOverviewVisible;
    },

    /**
     * Toggles the details view of an indicator on/off.
     *
     * @param domain - The domain in which the indicator belong to.
     * @param index - The index of the indicator in the specified domain.
     */
    toggleDetails(domain, index) {
      this.domainDictionaryIndicators[domain][index].isDetailsVisible =
        !this.domainDictionaryIndicators[domain][index].isDetailsVisible;
    },

    /**
     * Updates the view with the information of the selected feature.
     *
     * @param feature - The feature that will be used to retrieve the information.
     */
    updateView(feature) {

      let properties = feature.properties;

      let nuts3id = properties.NUTS_ID;
      let sg = properties.SG;
      let g = properties.G;

      this.nuts3Name = AppData.nuts3[nuts3id].nameAscii;
      this.nuts3NativeName = AppData.nuts3[nuts3id].nutsName;

      let currentLevel = symbologyViewModel.currentTab;

      if (currentLevel === 'supergroups') {
        if (MapLayers.nuts3.supergroups[sg].visible) {
          this.supergroupName = MapLayers.nuts3.supergroups[sg].name;
          this.supergroupFillColor = symbologyViewModel.supergroupFillColors[sg];
          this.groupName = MapLayers.nuts3.groups[g].name;
          this.groupFillColor = symbologyViewModel.groupFillColors[g];
        }
        else {
          this.supergroupName = null;
          this.supergroupFillColor = AppState.transparentColor;
          this.groupName = null;
          this.groupFillColor = AppState.transparentColor;
        }
      }
      else if (currentLevel === 'groups') {
        if (MapLayers.nuts3.groups[g].visible) {
          this.supergroupName = MapLayers.nuts3.supergroups[sg].name;
          this.supergroupFillColor = symbologyViewModel.supergroupFillColors[sg];
          this.groupName = MapLayers.nuts3.groups[g].name;
          this.groupFillColor = symbologyViewModel.groupFillColors[g];
        }
        else {
          this.supergroupName = null;
          this.supergroupFillColor = AppState.transparentColor;
          this.groupName = null;
          this.groupFillColor = AppState.transparentColor;
        }
      }
      else {
        this.supergroupName = MapLayers.nuts3.supergroups[sg].name;
        this.supergroupFillColor = symbologyViewModel.supergroupFillColors[sg];
        this.groupName = MapLayers.nuts3.groups[g].name;
        this.groupFillColor = symbologyViewModel.groupFillColors[g];
      }

      this.domainDictionaryIndicatorValues = {};

      for (let domain in AppData.domainDictionaryIndicators) {
        if (AppData.domainDictionaryIndicators.hasOwnProperty(domain)) {

          this.domainDictionaryIndicatorValues[domain] = [];

          for (let i = 0; i < AppData.domainDictionaryIndicators[domain].length; i++) {
            let im = AppData.domainDictionaryIndicators[domain][i];
            let value = im.type === 'double' ? properties[im.name].toFixed(3) : properties[im.name].toFixed(0); // TODO: RESIN - toFixed(0) MUST be removed once I have the correct data.

            this.domainDictionaryIndicatorValues[domain].push({
              name: im.name,
              value: value,
              unit: im.unit,
              zscore: properties[im.name + 'Z'].toFixed(3)
            })
          }

        }
      }

      // TODO: RESIN - Should this be removed?
      // Make sure that the html content of the tooltip will be displayed
      // by explicitly calling the tooltip jquery method.
      //$('[data-toggle="tooltip"]').tooltip();

    },

    /**
     * Closes the overview information panel.
     */
    close() {

      // Set the current panel.
      AppState.currentNuts3Panel = 'symbology';

      // Set the panels visibility.
      AppState.setPanelsVisibility();

      // Deselect the NUTS3 feature.
      MapLayers.nuts3.deselectNuts3();

    },

    /**
     * Toggles on/off the information panel of a supergroup, group or indicator.
     *
     * @param code - The code [ie: supergroup, group, indicator] that will be used to toggle
     *               the information of a supergroup, group or indicator.
     */
    toggleInfo(code) {
      this.dictionary.indicators[code].isInformationPanelVisible =
        !this.dictionary.indicators[code].isInformationPanelVisible;

      // TODO: RESIN - This code is needed if we need to show a tooltip over the help button.
      // let l = (this.currentTab === 'supergroups' ? 'sg' : (this.currentTab === 'groups' ? 'g' : 'i'));
      //
      // let element = '#toggle-' + l + '-info-' + code;
      //
      // this.destroyTooltip(element);

      // $('#' + element).tooltip();
    }

  }

});

export { overviewInfoViewModel };

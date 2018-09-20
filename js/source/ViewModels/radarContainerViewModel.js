
// ================================================================================
//  University of Manchester. UK.
//  School of Environment, Education, and Development.
//
//  Name:            radarContainerViewModel.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 20/09/2018.
//
//  Description:     The view model of the container of radar diagrams.
// ================================================================================

import Vue from "../../../libs/vue-2.5.16/vue.esm.js";

/**
 * The radarContainerViewModel provides the data and logic to display
 * the radar diagram of the selected typology class or subclass rendered on it..
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let radarContainerViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#radarContainerVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * The current typology code.
     */
    currentTypologyCode: '1',

    /**
     * Indicates whether the container of the radar diagram is visible or not.
     */
    isVisible: false,

  },

  /**
   * The computed properties of the model of the view model.
   */
  computed: {

    /**
     * Gets the title of the radar diagram.
     *
     * @returns {string} - A string with the title of the radar diagram.
     */
    title: function() {
      if (symbologyViewModel.currentTab === 'supergroups') {
        return MapLayers.nuts3.supergroups[this.currentTypologyCode].name;
      }
      else {
        return MapLayers.nuts3.groups[this.currentTypologyCode].name;
      }
    }

  },

  /**
   * The methods of the view model.
   */
  methods: {

    show(code) {

      this.currentTypologyCode = code;
      this.isVisible = true;
      $('#radarContainerVM').removeClass('collapse');

      if (RadarDiagrams.config.data === null) {
        RadarDiagrams.createRadarDiagram(code);
      }
      else {
        RadarDiagrams.updateRadarDiagram(code);
      }

      Spatial.sidebar.close('map-controls');

    },

    hide() {

      this.isVisible = false;
      $('#radarContainerVM').addClass('collapse');

      Spatial.sidebar.open('map-controls');

    }

  }

});

export { radarContainerViewModel };

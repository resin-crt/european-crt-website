
// ================================================================================
//  University of Manchester. UK.
//  School of Environment, Education, and Development.
//
//  Name:            radarDiagramModalViewModel.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 20/09/2018.
//
//  Description:     The view model of the radar diagram modal window.
// ================================================================================

import Vue from "../../../libs/vue-2.5.16/vue.esm.js";

/**
 * The radarDiagramModalViewModel provides the data and logic to display the modal window
 * with the radar diagram of the selected typology class or subclass rendered on it..
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let radarDiagramModalViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#radarDiagramModalVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * The current typology code.
     */
    currentTypologyCode: '1'

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

    /**
     * Binds elements to events.
     */
    bindEvents() {

      let svm = symbologyViewModel;
      let vm = this;

      $('#radarDiagramModalVM').on('hidden.bs.modal', function(e) {
        svm.dictionary[svm.currentTab][vm.currentTypologyCode].isRadarDiagramVisible =
          !svm.dictionary[svm.currentTab][vm.currentTypologyCode].isRadarDiagramVisible;
      });

    },

    /**
     * Toggles the modal window with the radar diagram.
     *
     * @param code - The typology code whose radar diagram will be rendered.
     */
    toggleModal(code) {
      this.currentTypologyCode = code;

      $('#radarDiagramModalVM').modal('toggle');
      $('#radarDiagramModalVM').modal('handleUpdate');

      if (RadarDiagrams.config.data === null) {
        RadarDiagrams.createRadarDiagram(code);
      }
      else {
        RadarDiagrams.updateRadarDiagram(code);
      }

    }

  }

});

export { radarDiagramModalViewModel };

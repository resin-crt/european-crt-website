
// ================================================================================
//  University of Manchester. UK.
//  School of Environment, Education, and Development.
//
//  Name:            MapLayers.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 20/09/2018.
//
//  Description:     Provides map layers functionality.
// ================================================================================

import { AppState } from './AppState.js';

/**
 * The MapLayers object provides properties and methods related to map layers.
 */
let MapLayers = {
  // TODO: Update the documentation.

  /**
   * The NUTS3 polygons layer.
   */
  nuts3: {

    /**
     * The name of the layer.
     */
    name: 'nuts3',

    /**
     * The attribution to add on the map related to the NUTS3 layer.
     *
     * Official attribution string. The version used on the map omits UN-FAO and Turkstat.
     * Data source: GISCO - Eurostat (European Commission)
     * Administrative boundaries: © EuroGeographics © UN-FAO © Turkstat.
     */
    attribution: 'Data source: ' +
      '<a href="http://ec.europa.eu/eurostat/web/gisco/" target="_cf">GISCO</a> - ' +
      '<a href="http://ec.europa.eu/eurostat/" target="_cf">Eurostat</a> ' +
      '(<a href="https://ec.europa.eu/commission/index_en/" target="_cf">European Commission</a>) - ' +
      'Administrative boundaries: ' +
      '© <a href="https://eurogeographics.org/" target="_cf">EuroGeographics</a>',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * Object light is used to define the styles used to render the NUTS3 layer on top of the Light Basemap.
       */
      light: {

        /**
         * The default style used to render NUTS3 polygons on top of the Light Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Light Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: '#4169e1',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The styles used to render the NUTS3 polygons based on their supergroup on top of the Light Basemap.
         */
        supergroupStyles: {
          // '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          // '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          // '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          // '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          // '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          // '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          // '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          // '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          // '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }

          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray.hex, fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Light Basemap.
         */
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple800.hex, fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple600.hex, fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple400.hex, fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple200.hex, fillOpacity: 0.7 },
          '21': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green800.hex, fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green600.hex, fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green400.hex, fillOpacity: 0.7 },
          '24': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green200.hex, fillOpacity: 0.7 },
          '31': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal800.hex, fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal600.hex, fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal400.hex, fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal200.hex, fillOpacity: 0.7 },
          '41': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange800.hex, fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange600.hex, fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange400.hex, fillOpacity: 0.7 },
          '44': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange200.hex, fillOpacity: 0.7 },
          '51': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo900.hex, fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo700.hex, fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo500.hex, fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo300.hex, fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '61': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber800.hex, fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber600.hex, fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber400.hex, fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber200.hex, fillOpacity: 0.7 },
          '71': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue800.hex, fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue600.hex, fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue400.hex, fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue200.hex, fillOpacity: 0.7 },
          '81': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray800.hex, fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray600.hex, fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray400.hex, fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray200.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object dark is used to define the styles used to render the NUTS3 layer on top of the Dark Basemap.
       */
      dark: {

        /**
         * The default style used to render NUTS3 polygons on top of the Dark Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#d3d3d3',
          weight: 0.1,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Dark Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: '#ff4500',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The styles used to render the NUTS3 polygons based on their supergroup on top of the Dark Basemap.
         */
        supergroupStyles: {
          // '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          // '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          // '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          // '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          // '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          // '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          // '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          // '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          // '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }

          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.pink.hex, fillOpacity: 0.6 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green.hex, fillOpacity: 0.6 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lime.hex, fillOpacity: 0.6 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange.hex, fillOpacity: 0.6 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue900.hex, fillOpacity: 0.6 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber.hex, fillOpacity: 0.6 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan.hex, fillOpacity: 0.6 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.gray.hex, fillOpacity: 0.6 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Dark Basemap.
         */
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.pink800.hex, fillOpacity: 0.6 },
          '12': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.pink600.hex, fillOpacity: 0.6 },
          '13': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.pink400.hex, fillOpacity: 0.6 },
          '14': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.pink200.hex, fillOpacity: 0.6 },
          '21': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green800.hex, fillOpacity: 0.6 },
          '22': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green600.hex, fillOpacity: 0.6 },
          '23': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green400.hex, fillOpacity: 0.6 },
          '24': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green200.hex, fillOpacity: 0.6 },
          '31': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lime800.hex, fillOpacity: 0.6 },
          '32': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lime600.hex, fillOpacity: 0.6 },
          '33': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lime400.hex, fillOpacity: 0.6 },
          '34': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lime200.hex, fillOpacity: 0.6 },
          '41': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange800.hex, fillOpacity: 0.6 },
          '42': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange600.hex, fillOpacity: 0.6 },
          '43': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange400.hex, fillOpacity: 0.6 },
          '44': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange200.hex, fillOpacity: 0.6 },
          '51': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue900.hex, fillOpacity: 0.6 },
          '52': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue700.hex, fillOpacity: 0.6 },
          '53': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue500.hex, fillOpacity: 0.6 },
          '54': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue300.hex, fillOpacity: 0.6 },
          '55': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue100.hex, fillOpacity: 0.6 },
          '61': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber800.hex, fillOpacity: 0.6 },
          '62': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber600.hex, fillOpacity: 0.6 },
          '63': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber400.hex, fillOpacity: 0.6 },
          '64': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber200.hex, fillOpacity: 0.6 },
          '71': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan800.hex, fillOpacity: 0.6 },
          '72': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan600.hex, fillOpacity: 0.6 },
          '73': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan400.hex, fillOpacity: 0.6 },
          '74': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.cyan200.hex, fillOpacity: 0.6 },
          '81': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.gray800.hex, fillOpacity: 0.6 },
          '82': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.gray600.hex, fillOpacity: 0.6 },
          '83': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.gray400.hex, fillOpacity: 0.6 },
          '84': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.gray200.hex, fillOpacity: 0.6 }
        }

      },

      /**
       * Object roads is used to define the styles used to render the NUTS3 layer on top of the Roads Basemap.
       */
      roads: {

        /**
         * The default style used to render NUTS3 polygons on top of the Roads Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#2f4f4f', //'#2e8b57', //'#4b0082',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Roads Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: '#2f4f4f',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The styles used to render the NUTS3 polygons based on their supergroup on top of the Roads Basemap.
         */
        supergroupStyles: {
          // '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          // '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          // '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          // '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          // '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          // '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          // '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          // '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          // '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }

          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.red.hex, fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Roads Basemap.
         */
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple800.hex, fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple600.hex, fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple400.hex, fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple200.hex, fillOpacity: 0.7 },
          '21': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green800.hex, fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green600.hex, fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green400.hex, fillOpacity: 0.7 },
          '24': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green200.hex, fillOpacity: 0.7 },
          '31': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal800.hex, fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal600.hex, fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal400.hex, fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal200.hex, fillOpacity: 0.7 },
          '41': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange800.hex, fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange600.hex, fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange400.hex, fillOpacity: 0.7 },
          '44': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange200.hex, fillOpacity: 0.7 },
          '51': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo900.hex, fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo700.hex, fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo500.hex, fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo300.hex, fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '61': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber800.hex, fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber600.hex, fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber400.hex, fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber200.hex, fillOpacity: 0.7 },
          '71': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue800.hex, fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue600.hex, fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue400.hex, fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue200.hex, fillOpacity: 0.7 },
          '81': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.red800.hex, fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.red600.hex, fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.red400.hex, fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.red200.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object physical is used to define the styles used to render the NUTS3 layer on top of the Physical Basemap.
       */
      physical: {

        /**
         * The default style used to render NUTS3 polygons on top of the Physical Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Physical Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: '#4169e1',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The styles used to render the NUTS3 polygons based on their supergroup on top of the Physical Basemap.
         */
        supergroupStyles: {
          // '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          // '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          // '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          // '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          // '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          // '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          // '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          // '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          // '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }

          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray.hex, fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Physical Basemap.
         */
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple800.hex, fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple600.hex, fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple400.hex, fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple200.hex, fillOpacity: 0.7 },
          '21': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green800.hex, fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green600.hex, fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green400.hex, fillOpacity: 0.7 },
          '24': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green200.hex, fillOpacity: 0.7 },
          '31': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal800.hex, fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal600.hex, fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal400.hex, fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal200.hex, fillOpacity: 0.7 },
          '41': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange800.hex, fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange600.hex, fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange400.hex, fillOpacity: 0.7 },
          '44': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange200.hex, fillOpacity: 0.7 },
          '51': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo900.hex, fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo700.hex, fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo500.hex, fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo300.hex, fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '61': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber800.hex, fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber600.hex, fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber400.hex, fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber200.hex, fillOpacity: 0.7 },
          '71': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue800.hex, fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue600.hex, fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue400.hex, fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue200.hex, fillOpacity: 0.7 },
          '81': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray800.hex, fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray600.hex, fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray400.hex, fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray200.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object terrain is used to define the styles used to render the NUTS3 layer on top of the Terrain Basemap.
       */
      terrain: {

        /**
         * The default style used to render NUTS3 polygons on top of the Terrain Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Terrain Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: '#4169e1',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The styles used to render the NUTS3 polygons based on their supergroup on top of the Terrain Basemap.
         */
        supergroupStyles: {
          // '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          // '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          // '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          // '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          // '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          // '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          // '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          // '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          // '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }

          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray.hex, fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Terrain Basemap.
         */
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple800.hex, fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple600.hex, fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple400.hex, fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple200.hex, fillOpacity: 0.7 },
          '21': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green800.hex, fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green600.hex, fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green400.hex, fillOpacity: 0.7 },
          '24': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green200.hex, fillOpacity: 0.7 },
          '31': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal800.hex, fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal600.hex, fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal400.hex, fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal200.hex, fillOpacity: 0.7 },
          '41': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange800.hex, fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange600.hex, fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange400.hex, fillOpacity: 0.7 },
          '44': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange200.hex, fillOpacity: 0.7 },
          '51': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo900.hex, fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo700.hex, fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo500.hex, fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo300.hex, fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '61': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber800.hex, fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber600.hex, fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber400.hex, fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber200.hex, fillOpacity: 0.7 },
          '71': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue800.hex, fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue600.hex, fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue400.hex, fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue200.hex, fillOpacity: 0.7 },
          '81': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray800.hex, fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray600.hex, fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray400.hex, fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray200.hex, fillOpacity: 0.7 }
        }

      },

      /**
       * Object satellite is used to define the styles used to render the NUTS3 layer on top of the Satellite Basemap.
       */
      satellite: {

        /**
         * The default style used to render NUTS3 polygons on top of the Satellite Basemap.
         */
        defaultStyle: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillColor: '#515151',
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The default style used to highlight the current NUTS3 polygon on top of the Satellite Basemap.
         */
        defaultHighlightingStyle: {
          stroke: true,
          color: '#4169e1',
          dashArray: '',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.4
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The styles used to render the NUTS3 polygons based on their supergroup on top of the Satellite Basemap.
         */
        supergroupStyles: {
          // '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          // '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          // '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          // '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          // '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          // '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          // '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          // '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          // '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }

          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple.hex, fillOpacity: 0.7 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green.hex, fillOpacity: 0.7 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal.hex, fillOpacity: 0.7 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange.hex, fillOpacity: 0.7 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo.hex, fillOpacity: 0.7 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber.hex, fillOpacity: 0.7 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue.hex, fillOpacity: 0.7 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray.hex, fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Satellite Basemap.
         */
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple800.hex, fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple600.hex, fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple400.hex, fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.purple200.hex, fillOpacity: 0.7 },
          '21': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green800.hex, fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green600.hex, fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green400.hex, fillOpacity: 0.7 },
          '24': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.green200.hex, fillOpacity: 0.7 },
          '31': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal800.hex, fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal600.hex, fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal400.hex, fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.teal200.hex, fillOpacity: 0.7 },
          '41': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange800.hex, fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange600.hex, fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange400.hex, fillOpacity: 0.7 },
          '44': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.deepOrange200.hex, fillOpacity: 0.7 },
          '51': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo900.hex, fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo700.hex, fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo500.hex, fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo300.hex, fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.indigo100.hex, fillOpacity: 0.7 },
          '61': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber800.hex, fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber600.hex, fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber400.hex, fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.amber200.hex, fillOpacity: 0.7 },
          '71': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue800.hex, fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue600.hex, fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue400.hex, fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.lightBlue200.hex, fillOpacity: 0.7 },
          '81': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray800.hex, fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray600.hex, fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray400.hex, fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: ColorPalettes.Material.blueGray200.hex, fillOpacity: 0.7 }
        }

      }

    },

    /**
     * The leaflet map layer.
     */
    mapLayer: null,

    /**
     * The GeoJSON used to create the leaflet map layer.
     */
    geoJSON: null,

    /**
     * The dictionary used to retrieve an internal feature layer based on a feature key.
     * The key used in this case is the NUTS3 feature code.
     */
    featureToInternalLayerDictionary: {},

    /**
     * The NUTS3 feature selected by the user.
     */
    selectedFeature: null,

    /**
     * The internal layer of the selected NUTS3 feature.
     */
    selectedInternalLayer: null,

    /**
     * The dictionary that associates the typology levels to style names and attribute names.
     */
    typologyLevelDictionary: {
      'supergroups': { styleName: 'supergroupStyles', attributeName: 'SG' },
      'groups': { styleName: 'groupStyles', attributeName: 'G' }
    },

    /**
     * The supergroups metadata in the form of a dictionary whose keys are the values of supergroups.
     */
    supergroups: {
      '1': {
        sg: 1, groups: [11, 12, 13, 14],     visible: true, name: 'Inland and Urbanised',
        keywords: 'Central and western Europe, major cities, inland, fluvial flooding, affluent and innovative, high critical infrastructure provision',
        description: 'Cities and NUTS3 regions in this class are predominantly located in Central and Western Europe. A number of capital cities are included. Fluvial flooding from rivers is the key climate hazard facing these areas. There is also the potential for greater surface water flooding arising from projected increase in heavy rainfall events over the coming decades. Exposure of people, settlements and critical infrastructure to fluvial flooding is currently relatively high in a European context. Due to their low lying topography, exposure to landslides is relatively low. These are relatively affluent and innovative areas and are projected to experience increases in migration and numbers of young people. They also have well developed road networks and high broadband access and bandwidth capacity. For reasons such as these, they have relatively low sensitivity to climate change hazards and high adaptive capacity, and their vulnerability to climate change is therefore relatively low. However, given that exposure to fluvial flooding is high, climate change and extreme weather remains an important risk. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the Inland and Urbanised typology class.'
      },
      '2': {
        sg: 2, groups: [21, 22, 23, 24],     visible: true, name: 'Inland Hinterlands',
        keywords: 'Eastern Europe and central France, multiple climate hazards, exposure to fluvial flooding, peri-urban and rural, relatively low GDP (in a European context), low projected migration',
        description: 'The majority of the cities and NUTS3 regions in this class are concentrated in Eastern Europe and Central France. They face a wide range of climate change hazards including fluvial flooding, rising temperatures and heat waves and wild fires. These areas show relatively high exposure of people, settlements and critical infrastructure to fluvial flooding from rivers, but less so to landslide hazards. They have relatively low provision of critical infrastructure and broadband/bandwidth capacity compared to other parts of Europe. This is related to their peri-urban and rural locations, which also reflects in their relatively low population densities and proportions of built up area. In a European context, they have lower levels of GDP and employment opportunities, and as a result are in receipt of high levels of European funding via priority allocation schemes. This economic situation can also help to explain the projections for low levels of migration and numbers of young people in the population in the future. Due to the range of hazards faced, the notable exposure to fluvial flooding and relatively high levels of vulnerability, climate change risk is an important issue. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the Inland Hinterlands typology class.'
      },
      '3': {
        sg: 3, groups: [31, 32, 33, 34],     visible: true, name: 'Northern Lands',
        keywords: 'Northern Europe, coastal hazard exposure, cool and wet, projected increase in very heavy rainfall events, affluent and dynamic, high projected migration',
        description: 'As suggested by the name of this class, these cities and NUTS3 regions are located in Northern Europe. Aside from Denmark, much of Scandinavia falls within this class. Parts of Western Scotland, the Baltic States and Iceland (aside from Reykjavik) are also encompassed. These are cool and wet areas, although temperatures are nevertheless rising at a higher than average rate for Europe, with the number of ice days projected to fall significantly. They are also projected to experience a large increase in heavy and very heavy precipitation days compared to other European locations, which may increase the chance of surface water flooding in some areas. Coastal hazards are a threat , which results in high exposure of people, settlements and critical infrastructure to this hazard. These are often large areas with relatively low urban population densities and many smaller rural settlements. Urban areas have high levels of green space, and are not densely built up. Broadband and bandwidth capacity are relatively low, as is the density of transport networks with low numbers of road intersections and transport nodes.  Due to low population densities, the number of critical infrastructure assets per 1000 people (e.g. airports, hospitals etc.) is high from a European perspective. Socio-economically, these are affluent and dynamic places with projected increases in migration and numbers of young people over the coming decades. This increases their capacity to adapt to the changing climate, and lessens their level of climate risk. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the Northern Lands typology class.'
      },
      '4': {
        sg: 4, groups: [41, 42, 43, 44],     visible: true, name: 'Southern Lands',
        keywords: 'Mediterranean, increasingly hot and dry, landslides and coastal hazards, relatively low critical infrastructure provision, economic challenges (from a European perspective)',
        description: 'This class is principally Mediterranean. It\'s cities and NUTS3 regions cover the majority of Portugal and Spain, France\'s Mediterranean coast, Italy, Croatia and Greece. These areas are hot and dry, and are projected to become increasingly so over the coming decades with climate change. Landslides and coastal hazards are a feature, with people, settlements and infrastructure currently exposed to both of these hazards, particularly landslides. High soil moisture stress and projected water consumption pressure increase the threat of water shortages and drought. Critical infrastructure provision and broadband/bandwidth capacity is relatively low from a European perspective. Urban population density is above the average for Europe, although the coverage of built up areas and green spaces in urban areas is relatively low. Socio-economic indicators highlight that these areas face challenges, with higher than average levels of poverty risk, and lower than average GDP, employment prospects and patent applications. These factors combine to increase vulnerability to climate change hazards and increase overall levels of climate risk. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the Southern Lands typology class.'
      },
      '5': {
        sg: 5, groups: [51, 52, 53, 54, 55], visible: true, name: 'North West Coasts',
        keywords: 'Atlantic and North Sea coasts, areas of high population density, high exposure to coastal hazards but not to other climate hazards, projected increases in migration',
        description: 'This class covers the majority of the coastal zones of the UK, northern France and Denmark. Parts of the Belgium, Netherlands and northern Germany are also include. However, this class does not encompass the Scandinavian or Baltic coasts. Coastal hazards are a particular feature of these cities and NUTS3 regions. Given the relatively high urban population densities and numbers of transport nodes in these areas, this translates into high levels of exposure of people, settlements and infrastructure to coastal hazards in comparison to other parts of Europe. Conversely, exposure to fluvial flooding and landslide hazards is relatively low from a European perspective.  Socio-economic indicators do not suggest that these are amongst Europe\'s most affluent and dynamic locations, although they also highlight that they are not amongst the poorest. The number of young people is projected to increase as is migration, and there is relatively good access to broadband and high internet bandwidths. These factors can help to moderate levels of vulnerability to coastal hazards, although the high degree of exposure to this hazard places climate change as a key risk to economic development and health and wellbeing. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the North West Coasts typology class.'
      },
      '6': {
        sg: 6, groups: [61, 62, 63],         visible: true, name: 'Landlocked and Elevated',
        keywords: 'Alpine and central European mountains and uplands, high landslide and fluvial flooding exposure, projected increase in very heavy rainfall, dense transport infrastructure, relatively affluent and innovative',
        description: 'This class covers the Alps, upland areas of Germany, parts of the Carpathian Mountains and France\'s Massif Central and Eastern mountain ranges. Aside from several areas in Italy, all cities and NUTS 3 regions are inland. The topography and high rainfall levels contribute to landslides standing out as a key hazard. Climate change is projected to increase the frequency and intensity of heavy and very heavy rainfall days, which could result in an even greater threat of landslides. It is therefore understandable that the exposure of people, settlements and critical infrastructure to landslides is high from a European perspective. Here, high transport infrastructure densities (road intersections, transport nodes) stand out as a particular issue, although population densities are relatively low. Exposure to fluvial flooding is also relatively high. Projections for climate change induced intensification of extreme rainfall may drive exposure levels higher still. These areas are relatively affluent and innovative compared to others in Europe, and are projected to experience increasing migration in the future. It is clear that climate change poses a range of risks to these regions over the coming decades, although their relatively high levels of adaptive capacity may help to lessen levels of risk. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the Landlocked and Elevated typology class.'
      },
      '7': {
        sg: 7, groups: [71, 72, 73, 74],     visible: true, name: 'North West Urban',
        keywords: 'North west Europe, predominantly inland, urbanised, relatively low hazard exposure, projected increase in very heavy rainfall, GDP and employment prospects above European average',
        description: 'England, Belgium and Germany dominate this class, although there are outliers in France, Poland and Austria. These are predominantly inland cities and NUTS3 regions. Projections highlight that they will experience an increasing number of consecutive wet days and days with heavy and very heavy rainfall.  Aside from this, their hazard profile is relatively benign. As a result, exposure to hazards including fluvial flooding, landslides and coastal hazards is low in relation to other parts of Europe. These are generally urbanised areas with above average population densities, urban built environment coverage and numbers of road intersections and transport nodes (reflecting dense transport networks). GDP, employment prospects and patent applications indicators are at a level above the European average, suggesting higher levels of adaptive capacity to climate change hazards. This can help to moderate risks associated with increasing rainfall (and potential fluvial and surface water flood risk) that these areas may face in the future. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the North West Urban typology class.'
      },
      '8': {
        sg: 8, groups: [81, 82, 83],         visible: true, name: 'Lowlands and Estuaries',
        keywords: 'Low lying and estuarine locations, high exposure to fluvial flooding and coastal hazards, good critical infrastructure provision, relatively strong economies',
        description: 'This class encompasses a relatively small number of cities and NUTS3 regions sited in low lying and estuarine locations, particularly in the Netherlands and Denmark. Other regions sharing these characteristics, for example in North Eastern Italy and Northern Germany, also fall within this class. The key hazards that they face are fluvial flooding and coastal hazards, to a degree that is well above the European average. Exposure of people, settlements and critical infrastructure to these hazards is also particularly high in a European context. There are relatively few people at risk of poverty, and migration levels are projected to increase. GDP, employment prospects and patent applications indicators show values that from an Economic perspective, these areas sit above the average for Europe\'s cities and NUTS3 regions. These locations also have relatively high critical infrastructure provision and access to broadband and high bandwidths. This suggests that capacity to adapt to hazards is relatively high and sensitivity relatively low. However, the severity of the hazards faced by these areas, and the high level of exposure to fluvial flooding and coastal hazards, highlights that climate change stands out as a major risk factor. The radial diagram for this class, the related sub-classes and the indicator data contained within this online portal can be used to develop a richer picture of the climate risk characteristics of cities and NUTS 3 regions falling within the Lowlands and Estuaries typology class.'
      }
    },

    /**
     * The groups metadata in the form of a dictionary whose keys are the values of groups.
     */
    groups: {
      '11': {
        g: 11, sg: 1, visible: true, name: 'Inland and Urbanised 1',
        keywords: 'Cities and their surrounding hinterland areas, landslide hazard exposure, higher incidence of wildfire and future heat waves (in comparison to regions in other Inland and Urbanised sub-classes), growing population.',
        description: 'This sub-class encompasses a number of widely dispersed major cities (e.g. Milan, Vienna, Budapest, Lyon, Zurich, Prague) and NUTS 3 regions immediately surrounding major cities (e.g. Paris and Frankfurt). Relative to cities and NUTS3 regions within the three other Inland and Urbanised sub-classes, IU1 has the following distinguishing features and characteristics: higher landslide and wildfire hazard; higher projected increase in the number of heat wave days; lower projected increase in the number of wet days; high exposure of infrastructure to landslides; higher soil moisture stress and pressure on water resources; longer and less dense road and rail networks; higher projected increase in total population, migration and the number of older and younger people; higher number of patent applications. Other indicators are around the average for the Inland and Urbanised class. The radial diagram for IU1, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the IU1 sub-class in relation to the Inland and Urbanised typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
      },
      '12': {
        g: 12, sg: 1, visible: true, name: 'Inland and Urbanised 2',
        keywords: 'Capital cities and key urban centres, high flood hazard, built up, densely populated, dense transport infrastructure networks, affluent.',
        description: 'This sub-class is almost entirely made up of the urban centres of major cities in northern and western Europe, particularly the UK and Germany. Other countries are also represented, for example Paris, Brussels and Geneva all fall within this sub-class. Relative to cities and NUTS3 regions within the three other Inland and Urbanised sub-classes,  IU2 has the following distinguishing features and characteristics: higher flood hazard (which is itself the key hazard facing the Inland and Urbanised class, and is high in a European context); lower projected number of continuous wet days; lower projected number of heat wave days; lower exposure to landslides; higher urban population density and proportion of urban green and built up area; lower green urban and built up urban change; higher numbers of people at risk of poverty; higher performance on economic indicators. Other indicators are around the average for the Inland and Urbanised class. The radial diagram for IU2, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the IU2 sub-class in relation to the Inland and Urbanised typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
      },
      '13': {
        g: 13, sg: 1, visible: true, name: 'Inland and Urbanised 3',
        keywords: 'German and Polish cities, high flood hazard exposure, projected to become wetter, relatively wealthy but lower projected population growth.',
        description: 'This sub-class picks up a number of German cities, particularly in the south and the east (including Munich, Frankfurt and Leipzig), and also several of Poland\'s major cities (including Warsaw and Krakow). A cluster of connected NUTS 3 regions to the north of Munich (including the city itself) are also included. Relative to cities and NUTS3 regions within the three other Inland and Urbanised sub-classes, IU3 has the following distinguishing features and characteristics: higher projected increase in mean temperature; higher projected increase in the number of consecutive wet days and wet days; lower reduction in the projected number of ice days; lower soil moisture stress and pressure on water resources; higher exposure to fluvial flooding (cities and NUTS 3 regions in the Inland and Urbanised class are already themselves highly exposed to flooding in a European context); lower length of road and rail networks; lower broadband coverage and NGA provision; lower projected population growth; higher employment-population balance. Other indicators are around the average for the Inland and Urbanised class. The radial diagram for IU3, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the IU3 sub-class in relation to the Inland and Urbanised typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
      },
      '14': {
        g: 14, sg: 1, visible: true, name: 'Inland and Urbanised 4',
        keywords: 'Hinterlands surrounding major cities, large NUTS 3 regions, less densely populated, lower flood hazard exposure (than other sub-classes within the Inland and Urbanised Class).',
        description: 'NUTS3 regions immediately surrounding major cities in England (e.g. Birmingham), Belgium (e.g. Brussels) and Germany (e.g. Berlin) form this basis of this sub-class. A cluster of regions in the south east of the Netherlands, which includes the city of Eindhoven, are also represented. Relative to cities and NUTS3 regions within the three other Inland and Urbanised sub-classes, IU4 has the following distinguishing features and characteristics: lower fluvial flooding and landslide hazard; higher drought and wildfire hazard; lower projected increase in heat and rainfall related extremes; lower exposure to fluvial flooding and landslide hazards; higher increase in green urban and built up urban change; lower projected change in total population; lower performance on economic indicators (including GVA and employment-population balance). Other indicators are around the average for the Inland and Urbanised class. The radial diagram for IU4, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the IU4 sub-class in relation to the Inland and Urbanised typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
      },
      '21': {
        g: 21, sg: 2, visible: true, name: 'Inland Hinterlands 1',
        keywords: 'Baltic states and north east Poland',
        description: 'Inland cities and NUTS 3 regions of the Baltic States of Lithuania, Latvia and Estonia are a key feature of this sub-class, as is a cluster within north east Poland. Although they are largely inland, several areas do have coastlines. Relative to cities and NUTS3 regions within the three other Inland Hinterlands sub-classes, IH1 has the following distinguishing features and characteristics: lower incidence of landslides and fluvial flooding hazards; lower projected increase in the number of heat wave days and high temperature extremes; higher projected increase in the number of wet days; lower exposure of people and settlements to fluvial flooding; lower exposure of infrastructure to fluvial flooding and landslides; higher urban population density; higher proportion of urban green space; lower projected increase in population with lower migration and increases in young people; lower performance on economic indicators. Other indicators are around the average for the Inland Hinterlands class. The radial diagram for IH1, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the IH1 sub-class in relation to the Inland Hinterlands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
      },
      '22': {
        g: 22, sg: 2, visible: true, name: 'Inland Hinterlands 2',
        keywords: 'South eastern Europe',
        description: 'This sub-class is located in south eastern Europe, and covers much of Romania and Eastern Hungary in addition to regions of Croatia, Slovakia and Bulgaria. Only one of these regions has a coastline. Relative to cities and NUTS3 regions within the three other Inland and Hinterlands sub-classes, IH2 has the following distinguishing features and characteristics: higher landslide and wildfire hazard; higher soil moisture stress and pressure on water resources; higher projected increase in the number of heat wave days and high temperature extremes; higher projected increase the number of in continuous dry days; lower projected increase in the number of continuous wet days and heavy rainfall extremes; lower provision of transport infrastructure; higher exposure of people and infrastructure to flooding and landslide; higher urban population density; lower urban green space cover; lower performance on economic indicators. Other indicators are around the average for the Inland Hinterlands class. The radial diagram for IH2, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the IH2 sub-class in relation to the Inland Hinterlands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
      },
      '23': {
        g: 23, sg: 2, visible: true, name: 'Inland Hinterlands 3',
        keywords: 'Widely dispersed',
        description: 'Cities and NUTS 3 regions falling within this sub-class are widely dispersed across different European countries and do not form a defined geographic cluster like some of the sub-classes. Nevertheless two countries do house the majority, France and the Czech Republic, although cities and NUTS 3 regions falling within this sub-class are also found in Hungary, Poland, Croatia, Italy and Ireland. Relative to cities and NUTS3 regions within the three other Inland Hinterlands sub-classes, IH3 has the following distinguishing features and characteristics: higher landslide hazard and exposure of infrastructure to this hazard; higher reduction in ice days; higher critical infrastructure provision (including transport and broadband coverage); higher projected increase in population via migration and growth in the number of young people; higher performance on economic indicators (including GVA and patent applications). Other indicators are around the average for the Inland Hinterlands class. The radial diagram for IH3, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the IH3 sub-class in relation to the Inland Hinterlands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
      },
      '24': {
        g: 24, sg: 2, visible: true, name: 'Inland Hinterlands 4',
        keywords: 'Poland',
        description: 'Poland dominates this sub-class, with the majority of the country falling within it (aside from the major cities and the north eastern region). Cities and regions in north eastern Germany (aside from those surrounding Berlin) also fall within this sub-class, as do several in Croatia, Hungary and Slovenia. Relative to cities and NUTS3 regions within the three other Inland Hinterlands sub-classes, IH4 has the following distinguishing features and characteristics: higher flood hazard (Inland Hinterland is already high in this respect from a European perspective); higher increase in the number of projected continuous wet days and wet days; lower projected increase in the number of heat wave days and high temperature extremes; lower exposure of critical infrastructure to landslides; higher transport infrastructure density; lower urban population density; higher proportion of built up land in urban areas; higher GVA. Other indicators are around the average for the Inland Hinterlands class. The radial diagram for IH4, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the IH4 sub-class in relation to the Inland Hinterlands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
      },
      '31': {
        g: 31, sg: 3, visible: true, name: 'Northern Lands 1',
        keywords: 'Norway, coastal, mountainous',
        description: 'This sub-class encompasses Iceland (aside from Reykjavik), much of Norway (aside from the south eastern region) and parts of the west coast of Scotland. These are coastal and mountainous areas. Relative to cities and NUTS3 regions within the three other Northern Lands sub-classes, NL1 has the following distinguishing features and characteristics: higher landslide and coastal hazard; lower fluvial flooding and wildfire hazard; higher projected increase in the number of days associated with wet weather extremes; lower exposure to fluvial flooding; higher exposure to coastal and landslide hazards; lower road infrastructure density; higher critical infrastructure provision (e.g. airports, hospitals) per head of population (due to low population numbers); higher GDP and employment prospects; higher population growth. This appears to be a very distinct sub-class with climate risk indicators generally diverging significantly from the average for the Northern Lands class. The radial diagram for NL1, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the NL1 sub-class in relation to the Northern Lands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
      },
      '32': {
        g: 32, sg: 3, visible: true, name: 'Northern Lands 2',
        keywords: 'Sweden, sparsely populated',
        description: 'The majority of Sweden is covered by this sub-class, aside from its larger metropolitan areas. Other areas include south eastern Norway and Lapland (in Finland). These are generally sparsely populated areas, with significant forest cover punctuated by numerous lakes. Relative to cities and NUTS3 regions within the three other Northern Lands sub-classes, NL2 has the following distinguishing  features and characteristics: higher fluvial flooding; drought and wildfire hazard; lower projected increase in the number of continuous dry days; higher exposure of people and infrastructure to fluvial flooding; lower exposure of people and infrastructure to coastal hazard; higher proportion of people at risk of poverty; higher performance on economic indicators (including GVA and patent applications). In contrast to NL1, many of the climate risk indicators are around the average for the Northern Lands class. The radial diagram for NL2, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the NL2 sub-class in relation to the Northern Lands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
      },
      '33': {
        g: 33, sg: 3, visible: true, name: 'Northern Lands 3',
        keywords: 'Finland, Baltic coast',
        description: 'Finland (aside from Lapland and the coastal regions to the south of the country) forms a key part of this sub-class. Several Baltic coast cities and NUTS 3 regions in Sweden, Germany, Latvia and Estonia are also represented. Relative to cities and NUTS3 regions within the three other Northern Lands sub-classes, NL3 has the following distinguishing features and characteristics: lower fluvial flooding, coastal, drought and landslide hazard; higher projected increase in the number of summer days and continuous dry days; lower exposure of people and infrastructure to landslide, fluvial flooding and coastal hazard; lower critical infrastructure provision; lower projected population growth and increases in older and younger people; lower performance on economic indicators (including GVA and patent applications). Other indicators are around the average for the Northern Lands class. The radial diagram for NL3, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the NL3 sub-class in relation to the Northern Lands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
      },
      '34': {
        g: 34, sg: 3, visible: true, name: 'Northern Lands 4',
        keywords: 'Major cities, Urbanised (relatively), coastal',
        description: 'This sub-class picks up cities and NUTS 3 regions covering several Scandinavian capitals (including Stockholm and Helsinki) and key urban areas (including Malmo and  Stavanger). Although some capital cities are not included in this sub-class (including Oslo and Riga), their adjoining hinterland NUTS 3 regions are. All regions are coastal. Relative to cities and NUTS3 regions within the three other Northern Lands sub-classes, NL4 has the following features and characteristics: higher fluvial flood and coastal hazard; higher projected increase in the number of summer days and continuous dry days; higher projected increase in the number of very wet days; higher exposure of people and infrastructure to coastal hazard; higher density of transport infrastructure; higher broadband coverage and NGA provision; higher proportion of built up urban area; higher projected increase in older and younger people and migration; higher performance on economic indicators. Other indicators are around the average for the Northern Lands class. The radial diagram for NL4, and the indicator data contained within this online portal, can be used to develop a richer picture of the climate risk characteristics of this typology sub-class. It is also important to consider the NL4 sub-class in relation to the Northern Lands typology class, which identifies the climate risk characteristics of this broader group of cities and NUTS 3 regions in a European context.'
      },
      '41': {
        g: 41, sg: 4, visible: true, name: 'Southern Lands 1',
        keywords: 'Mediterranean islands, coastal',
        description: 'To be completed'
      },
      '42': {
        g: 42, sg: 4, visible: true, name: 'Southern Lands 2',
        keywords: 'Mediterranean coastline, hills and mountains',
        description: 'To be completed'
      },
      '43': {
        g: 43, sg: 4, visible: true, name: 'Southern Lands 3',
        keywords: 'Iberian Peninsula, diverse landscapes',
        description: 'To be completed'
      },
      '44': {
        g: 44, sg: 4, visible: true, name: 'Southern Lands 4',
        keywords: 'Widely dispersed, inland, mountainous',
        description: 'To be completed'
      },
      '51': {
        g: 51, sg: 5, visible: true, name: 'North West Coasts 1',
        keywords: 'British Isles, rural, coastal, upland',
        description: 'To be completed'
      },
      '52': {
        g: 52, sg: 5, visible: true, name: 'North West Coasts 2',
        keywords: 'North Sea coast, Denmark, peri-urban',
        description: 'To be completed'
      },
      '53': {
        g: 53, sg: 5, visible: true, name: 'North West Coasts 3',
        keywords: 'Scottish Islands, coastal',
        description: 'To be completed'
      },
      '54': {
        g: 54, sg: 5, visible: true, name: 'North West Coasts 4',
        keywords: 'Atlantic',
        description: 'To be completed'
      },
      '55': {
        g: 55, sg: 5, visible: true, name: 'North West Coasts 5',
        keywords: 'Major coastal cities, urbanised',
        description: 'To be completed'
      },
      '61': {
        g: 61, sg: 6, visible: true, name: 'Landlocked and Elevated 1',
        keywords: 'North side of the Alps',
        description: 'To be completed'
      },
      '62': {
        g: 62, sg: 6, visible: true, name: 'Landlocked and Elevated 2',
        keywords: 'German uplands, rural',
        description: 'To be completed'
      },
      '63': {
        g: 63, sg: 6, visible: true, name: 'Landlocked and Elevated 3',
        keywords: 'South side of the Alps',
        description: 'To be completed'
      },
      '71': {
        g: 71, sg: 7, visible: true, name: 'North West Urban 1',
        keywords: 'Germany',
        description: 'To be completed'
      },
      '72': {
        g: 72, sg: 7, visible: true, name: 'North West Urban 2',
        keywords: 'Widely dispersed',
        description: 'To be completed'
      },
      '73': {
        g: 73, sg: 7, visible: true, name: 'North West Urban 3',
        keywords: 'Cities',
        description: 'To be completed'
      },
      '74': {
        g: 74, sg: 7, visible: true, name: 'North West Urban 4',
        keywords: 'To be completed',
        description: 'To be completed'
      },
      '81': {
        g: 81, sg: 8, visible: true, name: 'Lowlands and Estuaries 1',
        keywords: 'Cities',
        description: 'To be completed'
      },
      '82': {
        g: 82, sg: 8, visible: true, name: 'Lowlands and Estuaries 2',
        keywords: 'To be completed',
        description: 'To be completed'
      },
      '83': {
        g: 83, sg: 8, visible: true, name: 'Lowlands and Estuaries 3',
        keywords: 'To be completed',
        description: 'To be completed'
      }
    },

    /**
     * Creates the NUTS3 layer.
     */
    createLayer: function() {

      // TODO: RESIN - Check next line.
      // spinnerViewModel.isVisible = true;

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      this.geoJSON = AppData.nuts3Polygons;

      this.mapLayer = L.geoJSON(this.geoJSON, {

        /**
         * The NUTS3 layer attribution to insert on the map.
         */
        attribution: MapLayers.nuts3.attribution,

        // TODO: RESIN - Correct rendering code to allow the use of the current basemap and the current rendering method (typology supergroups / groups or indicators)
        style: function(feature) {
          // TODO: RESIN - Change next line.

          let isVisible = MapLayers.nuts3.supergroups[feature.properties.SG].visible;

          if (isVisible) {
            return MapLayers.nuts3.namedBasemapLayers[namedBaseMap].supergroupStyles[feature.properties.SG];
          }
          else {
            return MapLayers.nuts3.namedBasemapLayers[namedBaseMap].defaultStyle;
          }
        },

        /**
         * Define the behaviour of each feature.
         *
         * @param feature - The feature whose behaviour will be defined.
         * @param layer - The internal layer of each feature.
         */
        onEachFeature: function(feature, layer) {
          layer.on({

            /**
             * Raised when the mouse is over a feature.
             */
            mouseover: function() {
              MapLayers.nuts3.showTooltip(layer);
              MapLayers.nuts3.highlightNuts3(feature, layer);
            },

            /**
             * Raised when the mouse is going out of a feature.
             */
            mouseout: function() {
              MapLayers.nuts3.hideTooltip(layer);
              MapLayers.nuts3.resetNuts3Style(feature, layer, false);
              MapLayers.nuts3.reselectNuts3();
            },

            /**
             * Raised when a feature is clicked.
             */
            click: function() {
              MapLayers.nuts3.selectNuts3(feature, layer);
              MapLayers.nuts3.updateInfo(feature);
            },

            /**
             * Raised when a feature is double clicked.
             */
            dblclick: function() {
              //MapLayers.nuts3.resetNuts3Style(feature, layer);
              //alert('double clicked');
              //map.doubleClickZoom.disable();
              //map.doubleClickZoom.enable()
              // TODO: This is a problem. A click event is fired before the double click. We need to change this behaviour.
              //Spatial.map.fitBounds(layer.getBounds());
            }

          });
        }
      });

      // Add the layer in to the map and make sure it is visible.
      this.mapLayer.addTo(Spatial.map);
      this.mapLayer.bringToFront();

      // Loop through all the internal layers.
      // Create the feature to internal layer dictionary and bind the layer tooltips.
      this.mapLayer.eachLayer(function(layer) {
        MapLayers.nuts3.featureToInternalLayerDictionary[layer.feature.properties.NUTS_ID] = layer._leaflet_id;

        layer.bindTooltip('', {
          // TODO: RESIN - Check here the final tooltip options.
          direction: 'top', // TODO: RESIN - APPVAR
          offset: [0, -30], // TODO: RESIN - APPVAR
          sticky: true
        });
      });

    },

    /**
     * Renders the NUTS3 layer.
     */
    renderLayer: function() {

      // Get the current basemap. This is used to decide the symbology of the NUTS3 polygons.
      let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Get the current tab.
      let currentTab = symbologyViewModel.currentTab;

      // Check whether NUTS3 features exist or not.
      if (this.geoJSON !== undefined || this.geoJSON !== null) {

        // Loop through the NUTS3 features.
        for (i = 0; i < this.geoJSON.features.length; i++) {

          // Get the NUTS3 feature, attribute name and the class value.
          let feature = this.geoJSON.features[i];

          if (currentTab !== 'indicators') {
            // Render the layer based on typology classes (supergroups or groups).
            let attributeName = this.typologyLevelDictionary[currentTab].attributeName;
            let classValue = feature.properties[attributeName].toString();

            // Render the NUTS3 polygon having the specified typology class.
            this.renderNuts3PolygonByTypologyClass(feature, classValue, currentTab, currentBaseMap);
          }
          else {
            let indicator = symbologyViewModel.selectedIndicators[symbologyViewModel.currentDomain][0];
            let zscore = feature.properties[indicator + 'Z'];

            // Render the layer based on the selected indicator.
            this.renderNuts3PolygonByIndicator(feature, indicator, zscore);
          }

        }

      }

      MapLayers.nuts3.reselectNuts3();

    },

    /**
     * Renders the specified NUTS3 polygon.
     *
     * @param feature - The feature whose style will be changed.
     * @param typologyClass - The typology class of the NUTS3 polygon.
     * @param currentTypologyLevel - The level of the typology class (ie: supergroup or group).
     * @param currentBaseMap - The current basemap.
     */
    renderNuts3PolygonByTypologyClass: function(feature, typologyClass, currentTypologyLevel, currentBaseMap) {

      // Get the associated feature layer.
      let internalLayerKey = this.featureToInternalLayerDictionary[feature.properties.NUTS_ID];
      let featureLayer = this.mapLayer._layers[internalLayerKey];

      let basemap = this.namedBasemapLayers[currentBaseMap];

      // Set the style of the feature layer based on its typology class.
      if (this[currentTypologyLevel][typologyClass].visible) {
        let styleName = this.typologyLevelDictionary[currentTypologyLevel].styleName;
        featureLayer.setStyle(basemap[styleName][typologyClass]);
      }
      else {
        featureLayer.setStyle(basemap.defaultStyle);
      }

    },

    /**
     * Renders the specified NUTS3 polygon based on the z-score value of a specified indicator.
     * The z-score is classified by the function according to its distance from the mean (0).
     * Classes have the size of a standard deviation.
     *
     * @param feature - The feature that will be rendered.
     * @param indicator - The indicator name used to render the feature.
     * @param zscore - The z-score of the indicator whose class will be computed to allow a colour to be assigned to it.
     */
    renderNuts3PolygonByIndicator: function(feature, indicator, zscore) {

      // Get the associated feature layer.
      let internalLayerKey = this.featureToInternalLayerDictionary[feature.properties.NUTS_ID];
      let featureLayer = this.mapLayer._layers[internalLayerKey];

      // Get the standard deviation.
      let stdev = AppData.indicatorZScoresStatistics[indicator].stdev;

      let i = -1;
      let gradient = null;

      // Check if zscore is positive or negative.
      if (zscore > 0) {
        // Find out how many standard deviations away lies the zscore from the mean (0).
        while (stdev * (i + 1) < zscore) {
          i++;
        }

        // Get the gradient.
        gradient = symbologyViewModel.positiveGradients.filter(
          g => g.value === symbologyViewModel.selectedPositiveGradient
        )[0];
      }
      else {
        zscore = zscore * (-1);

        // Find out how many standard deviations away lies the zscore from the mean (0).
        while (stdev * (i + 1) < zscore) {
          i++;
        }

        // Get the gradient.
        gradient = symbologyViewModel.negativeGradients.filter(
          g => g.value === symbologyViewModel.selectedNegativeGradient
        )[0];
      }

      // Make sure that classes with a distance more than 4 standard deviations
      // are drawn using the fill colour of the 4th class.
      if (i > 3) {
        i = 3;
      }

      // Create the z-score class style and set it to the feature.
      let style = {
        stroke: true,
        color: '#282828',
        weight: 0.4,
        opacity: 1,
        fill: true,
        fillColor: gradient.OneStDevGradient[i],
        fillOpacity: 0.7
      };

      featureLayer.setStyle(style);

    },

    /**
     * Changes the style of a specified typology class.
     * @param typologyClass - The typology class whose style will be changed.
     */
    changeTypologyClassStyle: function(typologyClass) {

      // Get the current basemap. This is used to decide the symbology of the NUTS3 polygons.
      let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Get the current typology level.
      let currentTypologyLevel = symbologyViewModel.currentTab;

      // Check whether NUTS3 features exist or not.
      if (this.geoJSON !== undefined || this.geoJSON !== null) {

        // Loop through the NUTS3 features.
        for (i = 0; i < this.geoJSON.features.length; i++) {

          // Get the NUTS3 feature, attribute name and the class value.
          let feature = this.geoJSON.features[i];
          let attributeName = this.typologyLevelDictionary[currentTypologyLevel].attributeName;
          let classValue = feature.properties[attributeName].toString();

          // Render the NUTS3 polygon having the specified typology class.
          if (classValue === typologyClass) {
            this.renderNuts3PolygonByTypologyClass(feature, typologyClass, currentTypologyLevel, currentBaseMap);
          }

        }

      }

    },

    /**
     * Highlights a NUTS3 polygon.
     *
     * @param feature - The feature that will be highlighted.
     * @param layer - The internal layer of the feature that will be highlighted.
     */
    highlightNuts3: function(feature, layer) {

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Highlight the current NUTS3.
      layer.setStyle(this.namedBasemapLayers[namedBaseMap].defaultHighlightingStyle);

      if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
      }

    },

    /**
     * Resets the NUTS3 style. This is called once a mouseout event has been fired.
     *
     * @param feature - The feature that whose style will be reset.
     * @param layer - The internal layer of the feature whose style will be reset.
     * @param forceReset - Forces the function to reset the NUTS3 style.
     */
    resetNuts3Style: function(feature, layer, forceReset) {

      // Get the current basemap. This is used to decide the symbology of the NUTS3 polygons.
      let currentBaseMap = toggleBaseMapViewModel.currentBaseMap;

      // Get the current tab.
      let currentTab = symbologyViewModel.currentTab;

      if (currentTab !== 'indicators') {
        // Get the NUTS3 attribute name and the class value.
        let attributeName = this.typologyLevelDictionary[currentTab].attributeName;
        let classValue = feature.properties[attributeName].toString();

        // Make sure styles of only the non selected NUTS3 polygons are reset.
        if (this.selectedFeature !== feature || forceReset) {
          // Render the NUTS3 polygon having the specified typology class.
          this.renderNuts3PolygonByTypologyClass(feature, classValue, currentTab, currentBaseMap);
        }

        // // Render the layer based on typology classes (supergroups or groups).
        // let attributeName = this.typologyLevelDictionary[currentTab].attributeName;
        // let classValue = feature.properties[attributeName].toString();
        //
        // // Render the NUTS3 polygon having the specified typology class.
        // this.renderNuts3PolygonByTypologyClass(feature, classValue, currentTab, currentBaseMap);
      }
      else {
        let indicator = symbologyViewModel.selectedIndicators[symbologyViewModel.currentDomain][0];
        let zscore = feature.properties[indicator + 'Z'];

        // Make sure styles of only the non selected NUTS3 polygons are reset.
        if (this.selectedFeature !== feature || forceReset) {
          // Render the layer based on the selected indicator.
          this.renderNuts3PolygonByIndicator(feature, indicator, zscore);
        }
      }

    },

    /**
     * Select the specified NUTS3 feature.
     *
     * @param feature - The feature that will be selected.
     * @param layer - The internal layer that will be selected.
     */
    selectNuts3: function(feature, layer) {

      // Set the current NUTS3 Panel.
      if (AppState.currentNuts3Panel === 'symbology') {
        AppState.currentNuts3Panel = 'overview';
      }

      // Unselect the NUTS3 feature if a selected one exists.
      if (this.selectedFeature !== null) {
        this.deselectNuts3();
      }

      // Select the NUTS3 feature.
      this.selectedFeature = feature;
      this.selectedInternalLayer = layer;

      // Highlight the NUTS3 feature.
      this.highlightNuts3(this.selectedFeature, this.selectedInternalLayer);

      AppState.setPanelsVisibility();

    },

    /**
     * Deselects the selected NUTS3 feature.
     */
    deselectNuts3: function() {
      this.resetNuts3Style(this.selectedFeature, this.selectedInternalLayer, true);

      this.selectedFeature = null;
      this.selectedInternalLayer = null;
    },

    /**
     * Reselects the NUTS3 feature.
     */
    reselectNuts3: function() {
      if (this.selectedFeature !== null) {
        this.highlightNuts3(this.selectedFeature, this.selectedInternalLayer);
      }
    },

    /**
     * Updates the information displayed on the web page based on the selected feature.
     *
     * @param feature - The features whose attributes will be displayed on the web page.
     */
    updateInfo: function(feature) {
      overviewInfoViewModel.updateView(feature);
    },

    /**
     * Shows an information tooltip (name, supergroup, group) over a NUTS3 region.
     *
     * @param layer - The internal layer whose information will be displayed over using the tooltip.
     */
    showTooltip: function(layer) {

      // TODO: RESIN - This is what needs to change to support name of NUTS3 in native language.
      //this.nuts3Name = AppData.nuts3[nuts3id].nameAscii;
      //this.nuts3NativeName = AppData.nuts3[nuts3id].nutsName;

      let properties = layer.feature.properties;

      let nuts3id = properties.NUTS_ID;
      let sg = properties.SG;
      let g = properties.G;

      let html = '<div>' +

        // ASCII Name
        '<div>' +
        '<h5 class="text-danger">' + AppData.nuts3[nuts3id].nameAscii + '</h5>' +
        '</div>' +

        '<table class="table table-sm mt-4">' +
        '<tbody>' +

        // Supergroup
        '<tr>' +
        '<td class="pb-3">' +
        '<div class="typology-class-header">Class:</div>' +
        '<h6>' + MapLayers.nuts3.supergroups[sg].name + '</h6>' +
        '</td>' +
        '</tr>' +

        // Group
        '<tr>' +
        '<td>' +
        '<div class="typology-class-header">Subclass:</div>' +
        '<h6>' + MapLayers.nuts3.groups[g].name + '</h6>' +
        '</td>' +
        '</tr>' +

        '</tbody>' +
        '</table>' +

        '</div>';

      layer.setTooltipContent(html);

      if (!layer.isTooltipOpen()) {
        layer.openTooltip();
      }

    },

    /**
     * Hides the information tooltip over a NUTS3 region.
     *
     * @param layer - The internal layer whose tooltip will be hidden.
     */
    hideTooltip: function(layer) {
      if (layer.isTooltipOpen()) {
        layer.closeTooltip();
      }

      layer.setTooltipContent('');
    }

  }

};

export { MapLayers };

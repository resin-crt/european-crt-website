
// ================================================================================
//  University of Manchester. UK.
//  School of Environment, Education, and Development.
//
//  Name:            map.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 31/08/2018.
//
//  Description:     Provides the mapping functionality for the
//                   The European Climate Risk Typology.
// ================================================================================

// TODO: APPVAR

/**
 * The AppState object holds the application state.
 */
let AppState = {

  /**
   * Indicates whether the bootstrap material tooltip is enabled or not.
   */
  bootstrapMaterialTooltipEnabled: false,

  /**
   * The transparent color is used in those cases that a highly transparent color needs to be rendered.
   */
  transparentColor: { fillColor: '#ffffff', fillOpacity: 0.01 },

  /**
   * The NUTS3 panel displayed currently on the sidebar.
   */
  currentNuts3Panel: 'symbology', // ['symbology' | 'overview' | 'details']

  // Overview
  // 1.blur_on, 2.local_library, 3.center_focus_weak, all_out, language, wallpaper, calendar_today, 360, trip_origin, fullscreen, public
  //
  // Details
  // 1.blur_circular, 2.event_note, 3.[center_focus_strong, crop_free], book, class, extension, pageview, library_books, menu



  /**
   * Sets the visibility of the panels of the web page.
   */
  setPanelsVisibility: function() {
    symbologyViewModel.isVisible = (AppState.currentNuts3Panel === 'symbology');
    overviewInfoViewModel.isVisible = (AppState.currentNuts3Panel === 'overview');
    // TODO: RESIN - UNCOMMENT THIS !!!
    // detailsInfoViewModel.isVisible = (AppState.currentNuts3Panel === 'details');
  }

};

/**
 * The BaseMapLayers object provides properties and methods related to basemap layers.
 */
let BaseMapLayers = {

  /**
   * All the names of the basemap layers that are defined by the leaflet providers plugin.
   */
  leafletProviderBaseLayers: {
    OpenStreetMap: {
      Mapnik: ['OpenStreetMap.Mapnik', undefined],
      BlackAndWhite: ['OpenStreetMap.BlackAndWhite', undefined],
      DE: ['OpenStreetMap.DE', undefined],
      CH: ['OpenStreetMap.CH', undefined],
      France: ['OpenStreetMap.France', undefined],
      HOT: ['OpenStreetMap.HOT', undefined],
      BZH: ['OpenStreetMap.BZH', undefined]
    },
    OpenTopoMap: ['OpenTopoMap', undefined],
    Thunderforest: {
      OpenCycleMap: ['Thunderforest.OpenCycleMap', { apikey: '' }],
      Transport: ['Thunderforest.Transport', { apikey: '' }],
      TransportDark: ['Thunderforest.TransportDark', { apikey: '' }],
      SpinalMap: ['Thunderforest.SpinalMap', { apikey: '' }],
      Landscape: ['Thunderforest.Landscape', { apikey: '' }],
      Outdoors: ['Thunderforest.Outdoors', { apikey: '' }],
      Pioneer: ['Thunderforest.Pioneer', { apikey: '' }],
    },
    OpenMapSurfer: {
      Roads: ['OpenMapSurfer.Roads', undefined],
      Grayscale: ['OpenMapSurfer.Grayscale', undefined]
    },
    Hydda: {
      Full: ['Hydda.Full', undefined],
      Base: ['Hydda.Base', undefined]
    },
    MapBox: ['MapBox', undefined],
    Stamen: {
      Toner: ['Stamen.Toner', undefined],
      TonerBackground: ['Stamen.TonerBackground', undefined],
      TonerLite: ['Stamen.TonerLite', undefined],
      Watercolor: ['Stamen.Watercolor', undefined],
      Terrain: ['Stamen.Terrain', undefined],
      TerrainBackground: ['Stamen.TerrainBackground', undefined],
      TopOSMRelief: ['Stamen.TopOSMRelief', undefined],
      TonerHybrid: ['Stamen.TonerHybrid', undefined],
      TonerLines: ['Stamen.TonerLines', undefined],
      TonerLabels: ['Stamen.TonerLabels', undefined],
      TopOSMFeatures: ['Stamen.TopOSMFeatures', undefined]
    },
    Esri: {
      WorldStreetMap: ['Esri.WorldStreetMap', undefined],
      DeLome: ['Esri.DeLome', undefined],
      WorldTopoMap: ['Esri.WorldTopoMap', undefined],
      WorldImagery: ['Esri.WorldImagery', undefined],
      WorldTerrain: ['Esri.WorldTerrain', undefined],
      WorldShadedRelief: ['Esri.WorldShadedRelief', undefined],
      WorldPhysical: ['Esri.WorldPhysical', undefined],
      OceanBaseMap: ['Esri.OceanBasemap', undefined],
      NatGeoWorldMap: ['Esri.NatGeoWorldMap', undefined],
      WorldGrayCanvas: ['Esri.WorldGrayCanvas', undefined]
    },
    HERE: {
      normalDay: ['HERE.normalDay', {app_id: '', app_code: ''}],
      basicMap: ['HERE.basicMap', {app_id: '', app_code: ''}],
      hybridDay: ['HERE.hybridDay', {app_id: '', app_code: ''}]
    },
    FreeMapSK: 'FreeMapSK',
    MtbMap: ['MtbMap', undefined],
    CartoDB: {
      Positron: ['CartoDB.Positron', undefined],
      PositronNoLabels: ['CartoDB.PositronNoLabels', undefined],
      PositronOnlyLabels: ['CartoDB.PositronOnlyLabels', undefined],
      DarkMatter: ['CartoDB.DarkMatter', undefined],
      DarkMatterNoLabels: ['CartoDB.DarkMatterNoLabels', undefined],
      DarkMatterOnlyLabels: ['CartoDB.DarkMatterOnlyLabels', undefined]
    },
    HikeBike: {
      HikeBike: ['HikeBike.HikeBike', undefined],
      HillShading: ['HikeBike.HillShading', undefined]
    },
    BasemapAT: {
      basemap: ['BasemapAT.basemap', undefined],
      grau: ['BasemapAT.grau', undefined],
      overlay: ['BasemapAT.overlay', undefined],
      highdpi: ['BasemapAT.highdpi', undefined],
      orthophoto: ['BasemapAT.orthophoto', undefined]
    },
    nlmaps: {
      standaard: ['nlmaps.standaard', undefined],
      pastel: ['nlmaps.pastel', undefined],
      grijs: ['nlmaps.grijs', undefined],
      luchtfoto: ['nlmaps.luchtfoto', undefined]
    },
    NASAGIBS: {
      ModisTerraTrueColorCR: ['NASAGIBS.ModisTerraTrueColorCR', undefined],
      ModisTerraBands367CR: ['NASAGIBS.ModisTerraBands367CR', undefined],
      ViirsEarthAtNight2012: ['NASAGIBS.ViirsEarthAtNight2012', undefined]
    },
    NLS: ['NLS', undefined],
    Wikimedia: ['Wikimedia', undefined]
  },

  /**
   * All the names of the overlay layers that are defined by the leaflet providers plugin.
   */
  leafletProviderOverlayLayers: {
    OpenInfraMap: {
      Power: ['OpenInfraMap.Power', undefined],
      Telecom: ['OpenInfraMap.Telecom', undefined],
      Petroleum: ['OpenInfraMap.Petroleum', undefined],
      Water: ['OpenInfraMap.Water', undefined]
    },
    OpenSeaMap: ['OpenSeaMap', undefined],
    OpenPtMap: ['OpenPtMap', undefined],
    OpenRailwayMap: ['OpenRailwayMap', undefined],
    OpenFireMap: ['OpenFireMap', undefined],
    SafeCast: ['SafeCast', undefined],
    OpenMapSurfer: {
      AdminBounds: ['OpenMapSurfer.AdminBounds', undefined]
    },
    Hydda: {
      RoadsAndLabels: ['Hydda.RoadsAndLabels', undefined]
    },
    Stamen: {
      TonerHybrid: ['Stamen.TonerHybrid', undefined],
      TonerLines: ['Stamen.TonerLines', undefined],
      TonerLabels: ['Stamen.TonerLabels', undefined],
      TopOSMFeatures: ['Stamen.TopOSMFeatures', undefined]
    },
    OpenWeatherMap: {
      Clouds: ['OpenWeatherMap.Clouds', undefined],
      Pressure: ['OpenWeatherMap.Pressure', undefined],
      Wind: ['OpenWeatherMap.Wind', undefined]
    },
    NASAGIBS: {
      ModisTerraLSTDay: ['NASAGIBS.ModisTerraLSTDay', undefined],
      ModisTerraSnowCover: ['NASAGIBS.ModisTerraSnowCover', undefined],
      ModisTerraAOD: ['NASAGIBS.ModisTerraAOD', undefined],
      ModisTerraChlorophyll: ['NASAGIBS.ModisTerraChlorophyll', undefined]
    },
    JusticeMap: {
      income: ['JusticeMap.income', undefined],
      americanIndian: ['JusticeMap.americanIndian', undefined],
      asian: ['JusticeMap.asian', undefined],
      black: ['JusticeMap.black', undefined],
      hispanic: ['JusticeMap.hispanic', undefined],
      multi: ['JusticeMap.multi', undefined],
      nonWhite: ['JusticeMap.nonWhite', undefined],
      white: ['JusticeMap.white', undefined],
      plurality: ['JusticeMap.plurality', undefined]
    }
  },

  /**
   * The named base map layers.
   */
  namedBasemapLayers: {

    /**
     * The basemap layer named Light.
     */
    light: {
      name: 'Light',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Dark.
     */
    dark: {
      name: 'Dark',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Roads.
     */
    roads: {
      name: 'Roads',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Physical.
     */
    physical: {
      name: 'Physical',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Terrain.
     */
    terrain: {
      name: 'Terrain',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Satellite.
     */
    satellite: {
      name: 'Satellite',
      leafletProvider: null,
      mapLayer: null
    }

  },

  /**
   * Sets the the named base map layers.
   */
  setNamedBasemapLayers: function() {

    // Light
    //this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.BlackAndWhite;
    //this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Grayscale;
    //this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.Toner;
    // this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerBackground;
    this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.Positron;
    // this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.PositronNoLabels;
    // this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.PositronOnlyLabels;
    // this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldGrayCanvas;

    // Dark
    this.namedBasemapLayers.dark.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatter;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatterOnlyLabels;

    // Roads
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.Mapnik
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.HOT;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Roads;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.Full;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.RoadsAndLabels;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerLite;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldStreetMap;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldGrayCanvas;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.HikeBike.HikeBike;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.RoadsAndLabels;
    this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Wikimedia;

    // Physical
    this.namedBasemapLayers.physical.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.Base;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldPhysical;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldTopoMap;

    // Terrain
    this.namedBasemapLayers.terrain.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.Terrain;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.TerrainBackground;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldTerrain;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldShadedRelief;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.HikeBike.HillShading;

    // Satellite
    this.namedBasemapLayers.satellite.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldImagery;

  },

  /**
   * Creates the BaseMap layers.
   */
  createBaseMapLayers: function() {

    // Loop through all the named basemap layers and instantiate them.
    for (let namedLayer in this.namedBasemapLayers) {
      if (this.namedBasemapLayers.hasOwnProperty(namedLayer)) {

        const nameIndex = 0;
        const optionsIndex = 1;

        let baseLayer = this.namedBasemapLayers[namedLayer];

        if (baseLayer.leafletProvider[optionsIndex] === undefined) {
          baseLayer.mapLayer = L.tileLayer.provider(baseLayer.leafletProvider[nameIndex]);
        }
        else {
          baseLayer.mapLayer = L.tileLayer.provider(
            baseLayer.leafletProvider[nameIndex],
            baseLayer.leafletProvider[optionsIndex]
          );
        }

      }
    }

  }

};

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

/**
 * The Spatial object provides properties and methods related to spatial operations.
 */
let Spatial = {
  // TODO: Update the documentation here.

  /**
   * The member variables of this application.
   */
  Members: {

    /**
     * The web page sidebar name.
     */
    sidebarName: 'sidebar',

    /**
     * The webpage sidebar position.
     */
    sidebarPosition: 'right',

  },

  /**
   * The sidebar of the map.
   */
  sidebar: null,

  /**
   * The map of the application.
   */
  map: null,

  /**
   * The options used to create the map.
   */
  mapOptions: {
    //54.5
    center: [55, 31],
    zoom: 4,
    minZoom: 3,
    maxZoom: 18
  },

  /**
   * Initializes the map.
   */
  initializeMap: function() {

    spinnerViewModel.isVisible = true;

    Spatial.map = L.map('map', {
      center: Spatial.mapOptions.center,
      zoom: Spatial.mapOptions.zoom,
      minZoom: Spatial.mapOptions.minZoom,
      maxZoom: Spatial.mapOptions.maxZoom
    });

    // Move the attribution control to the bottom-left.
    Spatial.map.attributionControl.setPosition('bottomleft');

    // Create the sidebar and add it on the map.
    // TODO: RESIN
    Spatial.sidebar = L.control.sidebar(Spatial.Members.sidebarName, { position: Spatial.Members.sidebarPosition });
    Spatial.sidebar.addTo(Spatial.map);

    BaseMapLayers.setNamedBasemapLayers();
    BaseMapLayers.createBaseMapLayers();

    MapLayers.nuts3.createLayer();

    Spatial.setInitialBaseMapLayer();

    spinnerViewModel.isVisible = false;

  },

  /**
   * Sets the initial basemap layer.
   */
  setInitialBaseMapLayer: function() {

    // Get the current basemap that has been selected by the user.
    let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;
    let baseLayer = BaseMapLayers.namedBasemapLayers[namedBaseMap].mapLayer;

    // Add the basemap layer in to the map.
    baseLayer.addTo(Spatial.map);
    baseLayer.bringToBack();

  }

};

/**
 * The RadarDiagrams object provides properties and methods related to data visualization using radar diagrams.
 */
let RadarDiagrams = {

  /**
   * The labels on the radar diagrams.
   */
  labels: [
    // I001
    'Mean temperature (RCP 8.5)',
    // I002
    'Minimum temperature (RCP 8.5)',
    // I003
    'Maximum temperature (RCP 8.5)',
    // I004
    'Frost days (RCP 8.5)',
    // I005
    'Summer days (RCP 8.5)',
    // I006
    'Tropical nights (RCP 8.5)',
    // I007
    'Ice days (RCP 8.5)',
    // I008
    'Heat wave days (RCP 8.5)',
    // I009
    'Total wet-day precipitation (RCP 8.5)',
    // I010
    'Consecutive dry days (RCP 8.5)',
    // I011
    'Consecutive wet days (RCP 8.5)',
    // I012
    'Heavy precipitation days (RCP 8.5)',
    // I013
    'Very heavy precipitation days (RCP 8.5)',
    // I014
    'Coastal hazard',
    // I015
    'Drought hazard',
    // I016
    'Wildfire hazard',
    // I017
    'Length of major road network in NUTS3 unit',
    // I018
    'Length of railway network in NUTS3 unit',
    // I019
    'Density of major road intersections per km2 of the NUTS3 unit',
    // I020
    'Density of transport nodes per km2 of the NUTS3 unit',
    // I021
    'Number of airports per head of population in the NUTS3 unit',
    // I022
    'Number of ports per head of population in the NUTS3 unit',
    // I023
    'Number of hospitals per head of population in the NUTS3 unit',
    // I024
    'Number of power plants per head of population in the NUTS3 unit',
    // I025
    'Fixed broadband coverage',
    // I026
    'Next Generation Access (NGA) - broadband',
    // I027
    'I027',
    // I028
    'I028',
    // I029
    'I029',
    // I030
    'Population in settlements exposed to fluvial flooding',
    // I031
    'I031',
    // I032
    'Road infrastructure exposed to fluvial flooding',
    // I033
    'Rail network exposed to fluvial flooding',
    // I034
    'I034',
    // I035
    'Transport nodes exposed to fluvial flooding',
    // I036
    'Airports exposed to fluvial flooding',
    // I037
    'Ports exposed to fluvial flooding',
    // I038
    'Hospitals exposed to fluvial flooding',
    // I039
    'Power plants exposed to fluvial flooding',
    // I040
    'Population in settlements exposed to coastal hazard',
    // I041
    'I041',
    // I042
    'Road infrastructure exposed to coastal hazard',
    // I043
    'Rail network exposed to coastal hazard',
    // I044
    'I044',
    // I045
    'Transport nodes exposed to coastal hazard',
    // I046
    'Airports exposed to coastal hazard',
    // I047
    'Ports exposed to coastal hazard',
    // I048
    'Hospitals exposed to coastal hazard',
    // I049
    'Power plants exposed to coastal hazard',
    // I050
    'Population in settlements exposed to landslide',
    // I051
    'I051',
    // I052
    'Road infrastructure exposed to landslide',
    // I053
    'Rail network exposed to landslide',
    // I054
    'I054',
    // I055
    'Transport nodes exposed to landslide',
    // I056
    'Airports exposed to landslide',
    // I057
    'Ports exposed to landslide',
    // I058
    'Hospitals exposed to landslide',
    // I059
    'Power plants exposed to landslide',
    // I060
    'Average population density',
    // I061
    'Total population living in urban areas /area in km2',
    // I062
    '% of total urban area in NUTS3 unit that is classified as green space (2012 data)',
    // I063
    '% of total land in the NUTS3 unit that is covered by continuous and/or discontinuous urban fabric (2012 data)',
    // I064
    'Change in % of total urban area in NUTS3 unit that is classified as green space (2009-2012 data)',
    // I065
    'Change in % of total land in the NUTS3 unit that is covered by continuous and/or discontinuous urban fabric (2012 data)',
    // I066
    'Soil Moisture Stress',
    // I067
    'Water Consumption Pressure (2030)',
    // I068
    'Priority Allocations (Euros, 2013 - 2015)',
    // I069
    'At Risk of Poverty (ARoP)',
    // I070
    '% change in population less than 15 years in NUTS3 unit between 2017-2050',
    // I071
    'I071',
    // I072
    'I072',
    // I073
    '% change in population more than 70 years in NUTS3 unit between 2017-2050',
    // I074
    'I074',
    // I075
    '% change in population through migration in NUTS3 unit between 2017-2050',
    // I076
    '% change in population density in NUTS3 unit between 2017-2050',
    // I077
    '% of total employment in NUTS1 unit',
    // I078
    'Number of patent applications to the EPO per 1000 population in the NUTS3 unit',
    // I079
    'GVA at basic prices per head of population (2012-2015 data)',
    // I080
    'I080',
    // I081
    'Fluvial hazard',
    // I082
    'Landslide hazard',
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
    g1: {
      name: '1. Consumer Services',
      data: [ -0.2898335, -0.5652861, 0.9686828, 0.0054915, -0.4538302, -0.2901564, -0.0189297, 0.8382217, -0.6310537, 0.2251787, 0.7129810, -0.2821526, -0.5806601, -0.6897176, -0.0081818, 0.0553240, -0.0946947, 0.2490915, -0.0380303, 0.9262800, 0.2125665, -0.2480418, -0.1612248, 1.1801495, 0.0466582, 0.6508536, 0.0567176, -0.2260128, 0.1362883, -0.1332603, -0.2018477, -0.1527481, -0.1707232, -0.7810907, -0.4459161, -0.0758261, -0.0518984, 0.1609955, 1.5060163, -0.0470359, 0.6210566, 0.8823794, 0.7680842, -0.7551477, -0.4587101, -0.6757754, -0.0836405, 0.0983691, 0.8167342 ]
    },
    g11: {
      name: '1.1 Budding Sales Execs',
      data: [ 0.097915664, 0.57959298, 0.706875838, -0.447232982, -0.359680058, -0.159121669, -0.09446929, -0.576972453, 0.651773768, -0.390806546, -0.424866545, 0.011663025, 0.131154183, 0.145909125, 0.358716504, -0.169955063, -0.315079346, -0.31015201, -0.265371358, -0.553277282, -0.497424845, -0.185679916, -0.112938595, 0.407079628, -0.432803333, -0.152417569, -0.250338222, -0.082599965, -0.341249475, -0.325456809, -0.208322119, -0.400640547, 0.512245614, 0.193058001, 0.137009282, -0.225127316, -0.199442116, -0.518722027, 0.213343872, -0.413623413, -0.344627465, 0.545636694, -0.557652932, -0.208661179, 0.283080177, 0.528435362, 0.498480784, -0.341942786, -0.881851982 ]
    },
    g12: {
      name: '1.2 Established in Sales &amp; Customer Care',
      data: [ -0.432538164, 0.764477437, 0.005006809, -0.34539784, 0.101292639, 0.27654857, -0.483970302, -0.160825821, 0.262701119, -0.049156861, 0.164773545, -0.284295745, -0.421334392, -0.366347923, -0.268725596, 0.040170485, -0.337940222, 0.131393646, 0.022494764, 0.81181182, 0.259607087, 0.032522654, 0.033836768, 0.502948499, -0.210401706, -0.163447087, -0.407909077, -0.339741738, -0.144188857, -0.308161597, -0.022651083, 0.230791684, -0.395650555, -0.381337476, -0.407188056, -0.397979876, 0.130494913, 0.336718696, 0.459870873, 0.068079583, 0.181714501, -0.064941169, 0.513670019, -0.264923602, -0.252834275, -0.452855064, -0.585866931, 0.435373142, 0.532701794 ]
    },
    g13: {
      name: '1.3 Back Office Functions',
      data: [ -0.135935734, 0.369299724, -0.142889177, -0.08106263, 0.142065721, 0.317144324, 0.159553084, -0.148040845, 0.116387377, 0.500934395, 0.431236425, 0.47873929, 0.357820562, 0.176912324, 0.147632814, 0.34306202, 0.43244911, 0.176660701, 0.373809271, -0.12767749, 0.151340432, 0.465094077, 0.405609268, -0.289814475, 0.390604692, 0.012754398, 0.637979531, 0.452037655, 0.28876304, 0.586734185, 0.179063329, 0.152599165, 0.085461574, 0.15670528, 0.293482757, 0.469660166, 0.189615896, 0.084999607, -0.232992697, 0.319709079, 0.004092429, -0.123338481, -0.123238787, 0.320750706, 0.113242975, 0.170827333, 0.172315526, 0.207374677, -0.221870014 ]
    },
    g14: {
      name: '1.4 Multicultural Hospitality',
      data: [ 0.275179335, -0.842773405, -0.149053319, 0.361224314, 0.035999623, -0.311719124, -0.049592695, 0.510022643, -0.595359767, -0.051529681, 0.157598831, -0.276662824, -0.17243043, -0.04837015, -0.249146174, -0.357878417, -0.230390501, 0.020212391, -0.051799591, -0.231017172, 0.529625925, -0.257320236, -0.247596013, -0.804905493, 0.062548736, 0.75782858, -0.288028198, -0.173046738, 0.195901139, -0.224131326, 0.180383279, 0.090361194, -0.238502601, -0.007082482, -0.173202058, -0.253762919, 0.090701703, 0.201983323, -0.760868986, 0.002384798, 0.760755892, 0.119136648, 0.214757092, -0.297563773, -0.05948348, -0.265194185, -0.236567775, -0.190953078, 0.488488662 ]
    },
    g15: {
      name: '1.5 On the Shop Floor',
      data: [ 0.28697942, -1.033129337, -0.228547239, 0.501784589, -0.065650662, -0.360273554, 0.329113366, 0.399090966, -0.420543364, -0.430432317, -0.705638161, -0.284941641, -0.153872029, -0.032410106, -0.056250914, -0.116577998, 0.092266979, -0.183666229, -0.388578005, 0.1660012, -0.630609013, -0.41502283, -0.386767516, 0.496847674, -0.160442016, -0.519669701, -0.198353389, -0.208008158, -0.267369396, -0.205617471, -0.295718747, -0.231239366, 0.029132991, -0.067498644, -0.058935116, 0.029706515, -0.378202117, -0.227375786, 0.565892088, -0.262360761, -0.673654189, -0.331272473, -0.012760796, 0.192650591, -0.142294699, -0.051601161, 0.072717776, -0.285750701, 0.145062424 ]
    },
    g2: {
      name: '2. Typical Blue Collar Traits',
      data: [ 0.6921886, -0.2179667, 0.0822853, 0.0976481, -0.0576619, -0.0329160, -0.2770772, 0.2928897, -0.1487155, 0.1406652, 0.1331504, -0.3063253, -0.6367453, -0.7997461, -0.3110026, -0.2215988, -0.4063652, 0.5122560, 0.3179224, 0.5589849, 1.3628863, 0.7685182, 0.1976581, 0.2944021, 0.8399924, 0.1424404, -0.3265282, -0.4115332, 0.3272479, -0.3264130, -0.4612495, -0.3919847, -0.4605616, -0.8942234, -0.5429719, -0.3464534, 0.3863276, -0.1571611, -0.0314337, 1.3034280, 1.1361079, -0.1752512, -0.1604380, 0.3242213, -0.1271104, -0.9773783, -0.6692093, 0.5131781, 1.2242827 ]
    },
    g21: {
      name: '2.1 Multicultural Routine Logistics',
      data: [ 0.109199266, -1.111683106, -0.258132326, 0.289482191, 0.04450136, -0.229267593, 0.297946222, 0.524939605, -0.468768005, -0.185756359, -0.209173677, -0.192700247, -0.000139342, 0.028627942, -0.040358991, -0.16724806, 0.012279337, -0.200829038, -0.255274761, -0.198288238, -0.014497101, -0.54429088, -0.316226464, -0.154864614, 0.416205297, 0.151522751, -0.070504407, -0.10304502, 0.136403317, -0.081341591, -0.051368437, -0.115900957, -0.013530584, 0.063669893, -0.035482771, -0.01464993, -0.346128686, -0.103581153, -0.067833285, -0.132892283, 0.155296267, -0.05225491, 0.215191629, -0.123961613, -0.125982983, 0.032213403, 0.019060307, -0.16754609, 0.027629162 ]
    },
    g22: {
      name: '2.2 On the Production Line',
      data: [ 0.506125023, 0.492209024, -0.217802908, -0.050497956, 0.068866441, 0.039645823, -0.192049255, -0.56282258, 0.535902671, -0.361362517, -0.447791053, -0.135621727, -0.120838181, -0.12733679, -0.186464783, -0.255625627, -0.373404313, 0.052625926, -0.23054832, -0.007864145, 0.376554024, 0.322880937, -0.162912239, 0.049092002, -0.056855965, -0.478364512, -0.263008022, -0.208668921, -0.210071488, -0.276374381, -0.345575176, -0.422587027, -0.141478367, -0.134535551, -0.12039723, -0.324108464, -0.262067219, -0.486649496, -0.35807107, 0.490825576, 0.111187557, -0.423057046, -0.57016862, 0.425491991, 0.149663326, -0.144369142, -0.302955773, -0.1887831, 0.403631361 ]
    },
    g23: {
      name: '2.3 Skilled Trades in Mixed Economies',
      data: [ -0.366874853, 0.355423803, 0.281352721, -0.139055065, -0.067254354, 0.110338946, -0.059258453, 0.029977606, -0.046709666, 0.324976255, 0.390415119, 0.19388667, 0.072426948, 0.059494652, 0.135237693, 0.250848312, 0.216375149, 0.085937042, 0.287312269, 0.120666419, -0.216963933, 0.124991295, 0.282463062, 0.061172978, -0.209355715, 0.197785512, 0.198692824, 0.185189786, 0.046001057, 0.213032765, 0.236934895, 0.320780024, 0.092615312, 0.043312135, 0.09283165, 0.20261, 0.359313557, 0.351929463, 0.254044727, -0.216140938, -0.157384305, 0.283841467, 0.215515051, -0.182248535, -0.01592864, 0.067595108, 0.170232333, 0.211004175, -0.257810327 ]
    },
    g3: {
      name: '3. Sustainable Sorts',
      data: [ -0.1383337, -1.1176567, 0.0945963, 0.7689261, -0.3402549, -0.5478919, 0.4941188, 0.9284404, -1.1090853, 0.6150350, 0.2717948, -0.1099024, 0.2844357, 0.3522773, -0.0484586, -0.0922282, 0.0930132, -0.0276900, -0.2942923, -0.1770289, -0.2468847, -0.5057908, -0.3081932, -0.1748507, -0.0645648, 0.4210545, 0.1265434, 0.3608892, 0.2169626, 0.0057368, 0.0487506, 0.1198899, -0.1145679, 0.3284165, 0.2758764, 0.1654425, -0.3432391, -0.0459711, 0.1055633, -0.3726837, 0.0833680, 0.0131419, -0.1267229, 0.1773345, -0.0876224, 0.2310285, 0.2599061, -0.4200608, -0.0466512 ]
    },
    g31: {
      name: '3.1 Professionals Who Cycle',
      data: [ 0.133103563, 0.388933882, -0.083168464, 0.570493714, -0.289125891, -0.373336861, -0.436205526, 0.093391211, -0.441174081, 0.709721084, -0.063781051, 0.114624639, 0.571123029, 0.456587876, 0.01564556, -0.077994917, -0.41101603, -0.190085427, -0.144744058, -0.406511283, -0.33508678, -0.042042697, -0.092606538, -0.078886549, -0.255926098, -0.221623365, -0.127757022, 0.559967848, -0.113498414, -0.195923361, -0.012347897, -0.222786071, 0.083158192, 0.542206431, 0.512188846, -0.367684407, -0.200287192, -0.401684282, -0.17125445, -0.25635045, -0.41601985, -0.220762214, -0.443845368, 0.134299867, 0.425610811, 0.79485208, -0.124603865, -0.500363972, -0.520102398 ]
    },
    g32: {
      name: '3.2 Sustainable Hospitality',
      data: [ 0.443033, -0.177271267, -0.031933869, 0.232584697, -0.09471452, -0.211547105, 0.117878438, -0.139630928, -0.064129295, -0.320346431, -0.455181593, -0.111541744, -0.154709065, -0.362155974, 0.35013766, -0.267806148, -0.551557308, 0.434703257, 0.147002464, 0.00119069, 0.408711666, -0.083726807, 0.022906186, 0.046890417, -0.027229534, 0.941261884, -0.226454865, -0.147113012, 0.12818316, -0.336587732, -0.249449698, -0.472277915, 0.292420416, -0.323738332, -0.212120214, -0.462028911, 0.441200827, -0.256499107, -0.170113672, -0.031968348, 0.724415924, -0.099975584, -0.036646631, -0.083193285, 0.165857736, -0.082276422, -0.43049866, 0.257320237, 0.361755343 ]
    },
    g33: {
      name: '3.3 Welfare Workers on the Bus',
      data: [ -0.52229018, -0.516192406, -0.317337554, -0.319696259, 0.316458229, 0.251069069, -0.159172836, 0.501986593, 0.212900086, -0.318943308, -0.228377061, -0.259487537, -0.309615513, 0.419181203, -0.442252694, -0.108108261, 0.046216616, -0.276711433, -0.229368462, 0.229107281, -0.025480433, -0.189932745, -0.213085761, -0.351001473, -0.142686882, -0.510112499, -0.459463279, -0.612771477, -0.288910016, -0.0820948, 0.108699638, 1.113807638, -0.444161188, 0.376293987, -0.332069467, -0.076308715, -0.253345628, 0.625398213, -0.344097186, -0.032580284, -0.182048569, -0.124615408, 0.232863496, 0.08989193, -0.387931322, -0.448375868, 0.175129305, 0.137950515, 0.179762178 ]
    },
    g34: {
      name: '3.4 Active Mixed Commuters',
      data: [ -0.134090997, 0.512278783, 0.197312635, -0.380657143, 0.042444977, 0.354057333, -0.336893306, -0.037046662, 0.280078462, 0.421369018, 1.078169599, 0.295485213, 0.093980895, -0.077458989, 0.14619726, 0.193291053, -0.001468599, 0.059372253, 0.176940698, 0.081273221, 0.142178639, 0.256041006, 0.174483084, 0.094552286, 0.077864339, 0.122709411, 0.244318264, 0.086111135, 0.004604494, 0.151550772, 0.552611216, -0.014336064, 0.218621057, 0.076965018, -0.071416245, 0.01195218, 0.107450589, 0.229619648, 0.124394596, 0.172582897, 0.079271814, 0.480062019, 0.338688261, -0.508872023, 0.185709657, 0.262027542, -0.08816482, -0.039108808, -0.064802801 ]},
    g35: {
      name: '3.5 All Aboard',
      data: [ 0.118978359, -0.246030764, 0.1601289, -0.001194778, 0.001311291, -0.089679864, 0.71149018, -0.344667616, -0.043608739, -0.468424276, -0.456021406, -0.079020758, -0.175807231, -0.361195464, -0.052199017, 0.164780447, 0.701433868, -0.00374522, 0.023380632, 0.057299591, -0.153593023, 0.005748056, 0.06347924, 0.223877579, 0.265692679, -0.226237541, 0.411604846, 0.082522807, 0.226229383, 0.328506873, -0.422240025, -0.366852948, -0.130643582, -0.570736749, 0.090550926, 0.68748145, -0.065602036, -0.220196919, 0.424811387, 0.088933439, -0.136438622, -0.107952411, -0.134397496, 0.369139215, -0.322934467, -0.455226026, 0.361286499, 0.130740958, 0.059054685 ]
    },
    g4: {
      name: '4. Supporting Society',
      data: [ -0.1095386, 0.3446663, -0.0540398, -0.0390868, 0.1020836, 0.0438033, -0.0209371, -0.2074652, 0.4025716, -0.1658626, -0.2813606, 0.0442326, -0.1238970, 0.0151416, 0.0071637, 0.6050119, 0.9862203, -0.1771114, -0.0781881, -0.3003612, -0.3770784, -0.1979887, -0.0495727, -0.1117021, -0.0578071, -0.2558921, 0.3970735, 0.0337406, 0.0397453, 1.0803257, -0.2424297, -0.1440021, -0.0168772, -0.3006862, 0.6993775, 0.8452230, -0.2238220, -0.1956955, 0.1235428, -0.2383630, -0.3646593, -0.1952320, -0.1089420, 0.3849601, -0.2656536, -0.2120123, 0.9244299, -0.2170127, -0.3795964 ]
    },
    g41: {
      name: '4.1 Civic Duties',
      data: [ 0.468661972, 0.104858244, -0.439546568, 0.044609551, 0.278647848, -0.105106849, -0.087747865, -0.373675889, 0.179568305, -0.086354396, -0.178402432, -0.090673295, -0.166418456, 0.015882406, -0.36466084, 0.515219614, 0.058538586, -0.192659972, -0.059481589, -0.364303555, -0.217510089, -0.209560362, -0.1909183, -0.498955568, -0.208720939, -0.28024621, -0.616624295, -0.385310297, -0.332607067, 0.907414954, -0.154506487, -0.235954704, -0.272128935, -0.136411351, 0.769281614, -0.35049801, -0.123623576, -0.262911377, -0.475996628, -0.185790062, -0.248558128, -0.346676127, -0.441446052, 0.359241033, 0.082136794, -0.24231083, 0.538768624, -0.278260307, -0.352354936 ]
    },
    g42: {
      name: '4.2 Professional Support Services',
      data: [ -0.185639587, -0.053370206, 0.12260210, -0.20704710, -0.02845143, 0.2427138, 0.094444787, 0.27696247, -0.14343344, 0.220401369, 0.26778797, 0.216094124, 0.20303456, 0.040869455, 0.16002030, -0.02759570, -0.29532332, 0.202196939, 0.16384942, 0.256791765, 0.24381903, 0.160926331, 0.14706178, 0.16705009, 0.170657136, 0.27821462, 0.067734932, 0.22100059, 0.129084901, 0.03101222, 0.251249541, 0.26376089, 0.172005745, 0.26986472, -0.28926990, -0.03379561, 0.152506459, 0.22603379, 0.151426111, 0.21480586, 0.267952612, 0.34008594, 0.34212038, -0.37398213, 0.082693271, 0.29023660, -0.41563690, 0.176548294, 0.192074649 ]
    },
    g43: {
      name: '4.3 Young Clericals',
      data: [ -0.162175515, -0.016265044, 0.239223569, 0.304905249, -0.234999691, -0.303767838, -0.070600344, -0.088815226, 0.060171043, -0.285078885, -0.271708365, -0.273404613, -0.174350921, -0.085270695, 0.099839109, -0.476821689, 0.440076529, -0.146270706, -0.216722842, -0.064218312, -0.191427269, -0.05928709, -0.054776139, 0.224401234, -0.076600212, -0.18586479, 0.511958602, 0.017668885, 0.119599075, -0.974459897, -0.268012725, -0.206418951, -0.014454228, -0.317887368, -0.292330854, 0.41329919, -0.132362555, -0.115211458, 0.227502097, -0.174579747, -0.200703463, -0.223025889, -0.130173983, 0.267596346, -0.223337419, -0.244745815, 0.15564437, -0.015908278, 0.033113659 ]
    },
    g5: {
      name: '5. Friendly Faces',
      data: [ -0.8066910, 0.1338176, 0.2756893, -0.3428722, -0.0541734, 0.2540122, -0.3319610, 0.2308739, -0.1093251, 0.1632835, 0.6909768, -0.2253850, -0.5042127, -0.1618568, -0.1537298, 0.0602273, 0.1816937, 0.2320642, -0.0122877, 0.6864039, 0.2791192, -0.2053144, 0.0167518, -0.1038595, -0.1244135, 0.4702802, -0.1720812, -0.2729487, 0.0048873, -0.1554605, 0.5995690, 0.7102548, -0.2975045, -0.2476269, -0.4545134, 0.0119751, 0.1231673, 1.2035224, 0.0330400, -0.1103047, 0.4353290, 0.6052734, 0.8394410, -0.7037885, -0.2963621, -0.3896853, -0.2354561, 0.5288084, 0.4015905 ]
    },
    g51: {
      name: '5.1 Routine Care &amp; Leisure',
      data: [ -0.164655486, 0.434413978, -0.056468521, 0.154789249, -0.030064196, -0.146966428, -0.181560539, -0.142893866, 0.544541252, -0.483618474, -0.717913899, -0.267048031, -0.420621276, -0.327182209, -0.196820643, -0.132093721, -0.004623979, -0.105843948, -0.165893788, 0.662470826, -0.392990304, -0.17603407, -0.117508656, -0.085632567, -0.284224228, -0.63847615, -0.288527834, -0.288363467, -0.304869166, -0.264715921, -0.530566581, 0.652739637, -0.213165629, -0.466927798, -0.150121829, -0.122721075, -0.055761334, 0.786514645, -0.129390208, -0.142852568, -0.692305845, -0.673119527, 0.089573577, 0.389355527, -0.307292938, -0.550655527, -0.132796031, 0.426617891, 0.102576611 ]
    },
    g52: {
      name: '5.2 Multicultural Workers in Welfare',
      data: [ -0.46061511, -1.087245793, -0.352277777, 0.236764503, 0.16176348, -0.131886949, 0.019201677, 0.914077457, -0.723338595, -0.083063554, 0.073222851, -0.270899016, -0.114830182, 0.502595988, -0.407287203, -0.128710092, 0.304167262, -0.307284997, -0.432598156, -0.073464439, -0.163005704, -0.480227265, -0.45839876, -0.577730867, -0.187814009, -0.28980903, -0.271030992, -0.317360316, -0.111373261, -0.124943284, 0.318928762, 0.492531072, -0.442854335, 0.48700935, -0.074663892, 0.026641216, -0.535739243, 0.409278639, -0.417684506, -0.327050007, -0.082834016, -0.188192079, 0.20281404, 0.055989022, -0.309758823, -0.097907897, 0.119818384, -0.24447839, 0.170100713 ]
    },
    g53: {
      name: '5.3 Mixed Roles in Hospitality',
      data: [ 0.205117997, 0.424835819, 0.267750577, -0.236420811, -0.135742554, 0.057005097, -0.161812841, -0.57459729, 0.667184646, -0.273720927, -0.410986265, -0.079564118, 0.14939261, 0.302567104, 0.219872191, -0.155472584, -0.284499783, 0.000644857, -0.044038742, -0.470165975, -0.087327947, -0.114048554, 0.041319186, 0.10758046, -0.221499979, 0.372029681, -0.242579758, -0.012439526, -0.134908412, -0.322511015, 0.364827465, -0.627457015, 0.286979251, 0.405131118, -0.016653177, -0.148243016, 0.157220063, -0.484371654, -0.083971624, -0.20038902, 0.106443317, 0.378718646, -0.210605586, -0.350045451, 0.479693935, 0.647118319, -0.041049923, -0.17342008, -0.473904576 ]
    },
    g54: {
      name: '5.4 Here to Help',
      data: [ -0.171809973, -0.004819704, 0.117903621, -0.012508502, -0.000771816, -0.041002331, 0.023934756, 0.049780226, -0.752547329, 0.295805483, 0.883061434, -0.11101427, -0.261392469, -0.602314193, -0.067853954, 0.020746744, -0.195391097, 0.285889744, 0.123307284, 0.312797029, 0.711995408, 0.046278648, 0.074316308, 0.018717842, 0.142848946, 0.56100329, -0.035104266, -0.100245287, 0.24437176, -0.043048922, 0.137420633, -0.105231033, -0.207014652, -0.607955105, -0.280164247, -0.322792019, 0.194910574, 0.239840747, 0.138252919, 0.146010386, 0.836277492, 0.45154672, 0.316104593, -0.414368418, -0.194453283, -0.503693422, -0.414965335, 0.2692363, 0.634909761 ]},
    g55: {
      name: '5.5 Established in Mixed Service Economies',
      data: [ 0.364742849, 0.086839125, -0.022783229, -0.062896898, 0.022603878, 0.167442732, 0.222321839, -0.079897755, 0.080866427, 0.399862808, 0.171314114, 0.49506225, 0.414035819, 0.051740789, 0.270069438, 0.283286358, 0.160615158, 0.081250507, 0.348242369, -0.231874909, -0.035362945, 0.493614645, 0.297438859, 0.338788557, 0.395306843, -0.051913774, 0.588654614, 0.479242511, 0.222122145, 0.545678521, -0.235217455, -0.192194766, 0.344039353, 0.078015627, 0.35059819, 0.398958628, 0.133756742, -0.572199176, 0.335715046, 0.372774636, -0.124228694, -0.027481825, -0.237089854, 0.25738058, 0.158026092, 0.255984605, 0.320810938, -0.168205675, -0.227859937 ]
    },
    g6: {
      name: '6. The Nurturers',
      data: [ -0.8364380, 0.2209645, -0.3876986, -0.1547229, 0.1092002, 0.2868450, -0.3207544, -0.3210237, 0.6320914, -0.2436658, -0.3421073, -0.2158200, 0.3236253, 1.2175987, -0.4532189, -0.1611447, -0.1155475, -0.4046916, -0.4584408, -0.4210402, -0.6141827, -0.5407315, -0.3924519, -0.6531226, -0.5261400, -0.4304750, -0.3713757, -0.3073041, -0.4568249, -0.2099109, 0.9686500, 0.9382419, -0.4255680, 1.3197721, -0.1743819, -0.1963083, -0.5224782, 0.2399035, -0.5319696, -0.5739635, -0.6040223, -0.0017715, 0.3070976, -0.2816310, 0.0442447, 0.7225477, -0.0421280, -0.3467375, -0.5860279 ]
    },
    g61: {
      name: '6.1 Early Career Educators',
      data: [ 0.479925892, 0.20832717, -0.093184005, 0.228378642, -0.138543974, -0.088698688, 0.055831794, -0.162690397, -0.041033882, 0.061458861, -0.091622182, -0.28039926, 0.106927466, 0.489027327, -0.167154428, -0.17834209, -0.465258808, -0.101617382, 0.015226363, -0.395268042, -0.063373214, 0.005377622, 0.011254072, -0.089837836, -0.027249697, -0.038625547, -0.102720259, -0.024652122, -0.081965938, -0.14941973, 0.941088044, -1.089787135, -0.256358088, 0.611590922, 0.040106853, -0.391435285, 0.052262682, -0.600909113, -0.129318837, -0.02385253, -0.06773412, -0.093971483, -0.47730188, 0.035279136, 0.46036948, 0.725559736, -0.516602921, -0.302776251, -0.276513098 ]
    },
    g62: {
      name: '6.2 Helping Hands in Education',
      data: [ -0.37188622, -0.054470797, 0.200321283, -0.002646323, -0.038144141, -0.073055392, -0.129698968, 0.273926641, -0.279131888, 0.062732932, 0.239243879, -0.315081031, -0.569964708, -0.082548851, -0.141029474, 0.043259068, 0.324320517, 0.113978042, -0.064730544, 0.543186161, 0.145052138, -0.157280417, -0.077206942, -0.010060557, -0.020440437, 0.066800843, -0.145121094, -0.26376874, -0.047776055, -0.233480393, 0.740418849, -0.359735828, -0.296903193, -0.426255637, -0.248287964, -0.011734322, 0.024744446, 0.914894423, 0.047236172, -0.024661209, 0.121182594, 0.246466917, 0.376748215, -0.425584819, 0.010599755, -0.164523372, -0.320475511, 0.46891615, 0.277793311 ]
    },
    g63: {
      name: '6.3 Supporting Health &amp; Wellbeing',
      data: [ -0.419554165, -0.105741003, -0.061941937, 0.029686843, 0.188253627, -0.097298023, 0.009531718, 0.16231372, 0.005944493, -0.081944736, -0.046435565, 0.093524325, -0.3442025, 0.341395884, -0.179719276, 0.105491597, 0.313310899, -0.006883135, 0.020963659, -0.008544307, -0.017307251, -0.025505331, -0.102498208, -0.20065377, -0.037238622, -0.107231303, -0.063935775, -0.224905653, -0.009654127, 0.039649663, -0.942630507, 0.946168008, -0.17637752, -0.059190507, 0.093043005, 0.225513654, -0.066015903, 0.151497286, -0.093369324, 0.007726027, 0.003096989, -0.245120467, 0.078331453, 0.498289279, -0.650404838, -0.905520366, 0.734778664, 0.204004329, 0.205389592 ]
    },
    g64: {
      name: '6.4 Established Nurturers',
      data: [ 0.162281277, 0.282179095, 0.056987644, -0.389226639, -0.032707727, 0.373086954, -0.057406794, -0.199459817, 0.27259896, -0.047309864, -0.00950762, 0.296130499, 0.027361734, -0.451682621, 0.467948835, 0.12974525, 0.143413853, 0.122888086, 0.122320647, 0.129736217, 0.108581443, 0.210570625, 0.223461085, 0.380043575, 0.129649537, 0.179038879, 0.290062757, 0.38138815, 0.176291201, 0.319670962, -0.053886168, -0.177122896, 0.575561538, -0.603000374, 0.215770037, 0.343160034, 0.164165142, -0.070861148, 0.262634698, 0.127377187, 0.102385035, 0.227220223, 0.182786618, -0.219095784, 0.05038179, -0.036130559, 0.13517679, -0.002775168, 0.005589681 ]
    },
    g65: {
      name: '6.5 Health &amp; Wellbeing Professionals',
      data: [ 0.2245462, -0.622456815, -0.187538887, 0.445898641, 0.014684113, -0.385057053, 0.21912944, -0.029111624, -0.102010973, 0.050852423, -0.134751559, 0.094001329, 1.194532879, -0.166672514, -0.23958992, -0.254980302, -0.6368425, -0.27214859, -0.211715452, -0.515135703, -0.325018519, -0.168686817, -0.199205962, -0.325915558, -0.140624354, -0.244697711, -0.140007207, -0.002825475, -0.164951861, -0.171227404, -0.782658826, 0.895201944, -0.112366472, 1.130060461, -0.282228393, -0.512231687, -0.343337628, -0.624164084, -0.285261998, -0.20641658, -0.303349599, -0.313982075, -0.403039088, 0.239094827, 0.284510051, 0.765562491, -0.265209593, -0.599105485, -0.370792962 ]
    },
    g7: {
      name: '7. Traders, Movers & Makers',
      data: [ 0.8118140, 0.5647489, -0.1202079, -0.2569240, 0.0965638, 0.2704365, -0.4000961, -0.5043332, 0.7142068, -0.2416887, -0.3652387, 0.0557403, -0.2629691, -0.3531495, 0.0744140, -0.0905067, -0.2585494, 0.2634966, 0.9492904, -0.0245353, 0.4698080, 0.9250227, 0.6703313, 0.1616322, 0.2767232, -0.2586319, -0.3233533, -0.2570401, -0.0710186, -0.2733666, -0.3285085, -0.4442048, 0.1123581, -0.4263343, -0.1700432, -0.2077403, 1.1180310, -0.3344422, -0.2382526, 0.7605151, -0.1046744, -0.3371610, -0.4806472, 0.3586286, 0.2818674, -0.3540266, -0.2002235, 0.7913983, 0.0237753 ]
    },
    g71: {
      name: '7.1 Retail Relations',
      data: [ 0.021374241, 0.004497438, 0.050585896, -0.036658363, 0.014858167, -0.084139, 0.009846328, -0.114056613, 0.096719735, -0.208964442, -0.17608601, 0.198070425, -0.425616182, -0.453287786, 1.044909616, -0.069896432, 0.08064636, -0.181353037, -0.101792642, -0.132867151, -0.298004177, -0.233003056, 0.04312873, 0.757476355, -0.304449241, -0.005559355, -0.028186797, -0.162688659, -0.023580865, -0.205892315, -0.394281087, -0.231096974, 1.072107485, -0.619307035, -0.217124606, 0.160097609, 0.013163553, -0.244261933, 0.241934579, -0.452415509, -0.133978312, -0.026416243, -0.011197717, -0.17313636, 0.206303597, -0.033730476, 0.449953382, -0.26788045, -0.225636122 ]
    },
    g72: {
      name: '7.2 Factory Settings',
      data: [ 0.594601031, 0.027422995, -0.341135853, -0.065902725, 0.210524952, 0.063945077, -0.099675081, -0.144593652, 0.11776985, -0.057040999, -0.187344885, 0.040712791, 0.266924449, 0.114829495, -0.552282044, -0.079611732, -0.380988602, 0.136421528, 0.323624832, 0.226992492, -0.208179803, 1.078476686, -0.492710674, -0.506805847, -0.425462235, -0.307037167, -0.183507189, -0.051959131, -0.222774961, -0.029618069, -0.266250055, -0.283795569, -0.409878296, 0.19303435, 0.20195557, -0.384116007, 0.207219605, -0.380692361, -0.353318317, 0.425181047, -0.187860833, -0.387619324, -0.531164997, 0.795003738, -0.467680935, -0.042341083, -0.223547064, -0.012292886, 0.252135596 ]
    },
    g73: {
      name: '7.3 Young Construction Crews',
      data: [ 0.057153787, -0.021462814, 0.293004684, 0.303125652, -0.247553629, -0.306554542, 0.018008929, -0.000491301, -0.147929302, -0.170150088, -0.080376789, -0.510777781, -0.115081281, 0.111038985, -0.51000151, -0.107953784, -0.027878262, -0.146168738, 0.457888195, -0.171844064, -0.106406728, -0.541064724, 0.757955098, -0.28470332, -0.501822865, 0.003908133, -0.138696863, -0.15361538, -0.084394871, -0.061707737, 0.113691411, 0.089907912, -0.700653296, 0.124893934, -0.098882889, -0.197695989, 0.917544077, 0.136490318, -0.15756055, -0.685971768, -0.173025649, -0.12215135, -0.065170775, 0.178354242, -0.221733915, -0.207690922, -0.328883778, 0.664678963, -0.346520969 ]
    },
    g74: {
      name: '7.4 Mixed Warehousing & Distribution',
      data: [ 0.405435617, 0.11116836, -0.383511685, -0.127362251, 0.175296718, 0.157078723, -0.031653049, -0.268729464, 0.353902721, -0.234939155, -0.257612685, -0.127981907, -0.094101232, -0.113859535, 0.015129172, -0.104393727, -0.075347839, -0.005569976, -0.30468057, -0.335618856, 0.728085439, -0.385461325, -0.151967443, -0.095188308, 1.244015551, -0.271844892, -0.140276094, -0.166522047, -0.015378875, -0.089851354, -0.212559434, -0.292873502, -0.031701004, -0.19142076, -0.020903546, -0.082706685, -0.53067119, -0.235786861, -0.280309539, 0.843711865, -0.000183645, -0.292959983, -0.262784352, -0.235786753, 0.593791342, -0.190342827, -0.051767867, 0.166989172, 0.022701844 ]
    },
    g75: {
      name: '7.5 Part-Time Traders, Movers & Makers',
      data: [ -0.58142498, -0.063410285, 0.203695719, -0.03951038, -0.083478395, 0.09235028, 0.056855689, 0.280466117, -0.220904569, 0.355947752, 0.37458246, 0.208281597, 0.190795405, 0.180119991, 0.007351128, 0.193214055, 0.222157244, 0.102655974, -0.212490878, 0.209406788, -0.040864172, 0.011705468, -0.074578234, 0.073881367, 0.028973028, 0.311598336, 0.263362891, 0.284163254, 0.189608558, 0.206676513, 0.409750294, 0.385395177, 0.03901634, 0.258682254, 0.068175544, 0.275250408, -0.33839257, 0.392286675, 0.294136862, -0.060860803, 0.269155318, 0.445716806, 0.471554169, -0.322931417, -0.038129085, 0.250252607, 0.083382363, -0.28845088, 0.154320762 ]
    },
    g8: {
      name: '8. High Flyers',
      data: [ 0.5177105, 0.4463158, -0.5017661, -0.2271079, 0.3715427, 0.1453184, -0.3762668, -0.6825343, 0.9900446, -0.3863205, -0.5352035, 0.7070847, 0.8151897, 0.1600526, 0.6390176, -0.2071901, -0.4403506, -0.3773281, -0.2579754, -0.6915248, -0.5546372, 0.3299886, 0.0579094, 0.0235790, -0.2132989, -0.4366328, -0.0437310, 0.3314703, -0.1630259, -0.1360111, -0.2157281, -0.4376039, 1.0285703, 0.5592542, 0.2901612, -0.3308067, -0.3095334, -0.6503084, -0.4117499, -0.3154305, -0.6205056, -0.4113380, -0.5599638, 0.2445526, 0.5039491, 0.9573235, -0.0082092, -0.6272999, -0.7401815 ]
    },
    g81: {
      name: '8.1 Mixed Mid-Career Professionals',
      data: [ -0.134968644, 0.026849359, -0.320079915, -0.16018846, 0.318715473, -0.009758568, 0.056317633, -0.086930577, 0.15657318, -0.088178307, -0.127150316, 0.242328425, 0.626250635, 0.083634429, 0.049702286, -0.074670427, -0.265909235, -0.296858858, -0.38757635, -0.43000917, -0.476284968, -0.510145541, -0.213442336, -0.498143484, -0.269773094, -0.145709428, 0.287112782, 0.349097405, -0.079855351, 0.239171186, 0.095477559, 0.207105452, 0.209335453, 0.703999945, -0.052635449, -0.196145565, -0.52220692, -0.213871974, -0.317545232, -0.478466571, -0.37070549, -0.169350148, -0.032203083, -0.085112538, 0.182376556, 0.929492816, -0.462149362, -0.545072714, -0.455257817 ]
    },
    g82: {
      name: '8.2 Managing the High Street',
      data: [ 0.082013805, -0.142567507, 0.023186987, 0.135904919, -0.020664484, -0.180781628, -0.000656036, 0.009184232, -0.067768964, -0.10185449, -0.052186022, -0.259912486, -0.680909942, -0.231611167, 0.975916692, -0.021570905, 0.015475017, -0.078661395, -0.205943403, 0.017379336, -0.01719075, -0.378057519, -0.043597154, 0.966367778, 0.101871851, 0.021566122, -0.107912061, -0.403398684, 0.013252237, -0.201936919, -0.317934451, -0.174343547, 0.781003897, -0.859101764, 0.005621838, 0.014945879, -0.210180308, -0.121386332, 0.218970339, -0.084583798, -0.008540586, -0.096691079, -0.082195053, -0.15446979, 0.244103657, -0.531204583, 0.604522838, -0.177161321, 0.041919141 ]
    },
    g83: {
      name: '8.3 Manufacturing Execs',
      data: [ 0.350718666, 0.2061687, -0.18522338, -0.262271618, 0.124251034, 0.220236664, -0.065739547, -0.140777671, 0.123806885, -0.041122882, -0.095525802, 0.930275684, -0.281979994, -0.176090788, -0.347863916, 0.062215515, -0.036231859, 0.089365079, 0.274021034, -0.020859182, 0.102291404, 0.884084655, 0.042979771, -0.297519813, 0.057395071, -0.175629019, -0.26548837, -0.304925179, -0.088101494, 0.118179468, -0.200273644, -0.073993, 0.424375284, -0.361969909, -0.031557786, -0.059383392, 0.275964241, -0.102235169, -0.213492172, 0.293244941, -0.057047881, -0.182028321, -0.204931666, 0.156236493, 0.041690827, -0.205790951, 0.115263086, 0.152559057, 0.035727742 ]
    },
    g84: {
      name: '8.4 Early Career Professionals',
      data: [ 0.299689444, -0.135463815, -0.022851642, 0.519739598, -0.108645356, -0.359458128, -0.052206073, -0.02968061, 0.044832515, 0.020543768, -0.065838548, -0.641614972, 0.660931536, 0.307427178, -0.71146223, -0.035238496, -0.05616806, 0.021347943, 0.128490675, -0.089426493, -0.01542428, 0.178796858, -0.049088526, -0.279015052, -0.002074467, -0.127022896, -0.063757691, 0.234598426, -0.034400745, -0.066412859, -0.186598205, -0.280416194, -1.202061187, 0.587245081, 0.42668347, -0.186503843, 0.110785499, -0.174280358, -0.084298853, 0.07008166, -0.02982363, -0.298350611, -0.392696753, 0.729684468, -0.52411317, 0.080260354, -0.116615456, 0.060901326, -0.002743054 ]
    },
    g85: {
      name: '8.5 Aspiring Flyers',
      data: [ -0.46793031, 0.035548771, 0.368519538, -0.200689835, -0.218231281, 0.257149047, 0.051994081, 0.185209047, -0.19173678, 0.15033634, 0.252416052, -0.176540188, -0.269109094, -0.005170572, 0.095196673, 0.049464024, 0.249553511, 0.18216597, 0.112589106, 0.379381253, 0.284729674, -0.178700439, 0.189219689, 0.106814603, 0.076209884, 0.322060106, 0.125853136, 0.085747663, 0.14118883, -0.060813888, 0.461214993, 0.258369367, -0.070451141, -0.076862007, -0.283577999, 0.322094842, 0.22368886, 0.455227474, 0.296568943, 0.121923758, 0.335765239, 0.565389383, 0.550471073, -0.529625382, 0.082435313, -0.185453908, -0.100804456, 0.349377232, 0.267615332 ]
    },
    g9: {
      name: '9. Techs & the City Types',
      data: [ 0.3693717, -0.2173867, -0.4305840, 0.5077542, 0.2015630, -0.4660718, 1.8972009, -0.4743537, -1.3264320, -0.0343119, -0.4302274, 0.4960191, 1.1778595, 0.4004408, 0.4010174, -0.0358538, -0.1113047, -0.4739118, -0.4897096, -0.8872223, -0.8497859, -0.5995931, -0.2907638, -0.6155724, -0.2019198, -0.3745621, 0.9805290, 1.1766927, 0.0322346, 0.1735944, -0.4378472, -0.4991378, 0.5652018, 0.7461606, 0.8060592, 0.0928370, -0.6566640, -0.7453708, -0.4848267, -0.6584131, -0.7312058, -0.5575926, -0.7974066, 0.4449221, 0.5554111, 1.1443854, 0.0976747, -0.9250956, -0.9181678 ]
    },
    g91: {
      name: '9.1 Early Career Innovators',
      data: [ -0.171659349, -0.485313766, 0.109195715, 0.706218582, -0.48375291, -0.456439304, -1.065183165, 0.569435944, -0.356748006, 0.910288827, 0.379879454, 0.197497061, 0.039750926, 0.246132257, 0.152733833, -0.163961472, -0.338484488, 0.103395017, -0.032361352, 0.069747919, 0.131621732, 0.007530156, -0.078829655, 0.102024179, -0.105891635, 0.39029961, 0.134672185, 0.285500932, 0.185726838, -0.343445799, -0.024571192, 0.035385211, 0.241199541, 0.046922099, 0.198238629, -0.316732144, -0.016256109, 0.071448866, 0.116357973, -0.037817989, 0.171148412, 0.082022847, -0.051249457, -0.333121126, 0.432527544, 0.33186782, -0.287105813, -0.177402062, 0.085899557 ]
    },
    g92: {
      name: '9.2 Administering the City',
      data: [ -0.196959875, -0.003289161, 0.16873176, -0.118002588, 0.027084403, 0.120536524, 0.288195733, -0.021345703, 0.079658955, -0.245796668, -0.074729164, -0.101444932, -0.539534591, -0.201112963, -0.002584217, 0.372102549, 0.796010174, 0.150352323, 0.16819061, 0.206646957, 0.114549256, 0.027018485, 0.095748647, 0.08878637, 0.218592189, 0.054285392, 0.159614215, -0.210226576, 0.119869534, 0.445909138, -0.136625806, -0.062107382, -0.12560198, -0.640593199, 0.04816756, 0.806659946, 0.177289755, 0.15495004, 0.195127415, 0.155797244, 0.14316396, 0.040811304, 0.107572582, 0.334653276, -0.399658413, -0.795770171, 0.670303028, 0.343641442, 0.209408508 ]
    },
    g93: {
      name: '9.3 Financial Execs',
      data: [ 0.527572447, 0.520467913, -0.302109824, -0.752936036, 0.623111845, 0.38214105, 0.585894872, -0.328930752, -0.143802482, -0.310476522, -0.092529783, 0.540481883, 0.245077859, -0.24396656, 0.539299244, -0.178660891, -0.498708684, -0.175868593, -0.174953531, -0.287823484, -0.232570671, -0.094141034, 0.039769836, -0.144488086, -0.114262657, -0.21798345, 0.467409422, 0.145403238, -0.092502453, -0.210011496, -0.202953496, -0.27900236, 0.803357512, 0.086961085, -0.170750673, -0.406886151, -0.181678682, -0.273240425, -0.287428691, -0.174736595, -0.244926645, -0.102928969, -0.096947508, -0.618116638, 0.717729764, 0.642564336, -0.46554484, -0.29649292, -0.336669413 ]
    },
    g94: {
      name: '9.4 Techs & Professionals in Welfare',
      data: [ -0.055787862, -0.050497055, -0.055753542, 0.241352506, -0.187611207, -0.123038856, -0.01889712, -0.161425647, 0.326182147, -0.157346023, -0.138294455, -0.518978838, 0.498478958, 0.291335505, -0.617778489, -0.217502912, -0.369996454, -0.139715399, -0.048670328, -0.087858793, -0.062375612, 0.041216902, -0.102324638, -0.080852369, -0.111077271, -0.213911223, -0.763997695, -0.083519686, -0.243640675, -0.13786223, 0.39679853, 0.309955487, -0.761588407, 0.777429948, -0.082942911, -0.487046255, -0.069161676, -0.030196335, -0.112208999, -0.026820239, -0.125232511, -0.034227384, -0.018414313, 0.379755722, -0.464806793, 0.244668007, -0.268360188, -0.059043084, -0.061252371 ]
    }
  },

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

  createRadarDiagram: function(group) {

    // Any of the following formats may be used
    // var ctx = document.getElementById("myChart");
    // var ctx = document.getElementById("myChart").getContext("2d");
    // var ctx = "myChart";

    let dataDiagram = $('#dataDiagram-' + group);

    let dataProperties = {
      labels: this.labels,
      datasets: [
        {
          label: this.groupData[group].name,
          backgroundColor: this.colors.dataSeries.backgroundColor,
          borderColor: this.colors.dataSeries.borderColor,
          pointBackgroundColor: this.colors.dataSeries.pointBackgroundColor,
          pointBorderColor: this.colors.dataSeries.pointBorderColor,
          pointHoverBackgroundColor: this.colors.dataSeries.pointHoverBackgroundColor,
          pointHoverBorderColor: this.colors.dataSeries.pointHoverBorderColor,
          data: this.groupData[group].data
        },
        {
          label: 'England & Wales mean', //'Average',
          // backgroundColor: this.colors.average.backgroundColor,
          borderColor: this.colors.average.borderColor,
          // pointBackgroundColor: this.colors.average.pointBackgroundColor,
          // pointBorderColor: this.colors.average.pointBorderColor,
          // pointHoverBackgroundColor: this.colors.average.pointHoverBackgroundColor,
          // pointHoverBorderColor: this.colors.average.pointHoverBorderColor,
          data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
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

    let radarDiagram = new Chart(dataDiagram, {
      type: 'radar',
      data: dataProperties,
      options: options
    });

  }

};

// ================================================================================
//  View Models.

/**
 * The spinnerViewModel provides the data and logic to toggle the visibility of spinner.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let spinnerViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#spinnerVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * Indicates whether the spinner is visible or not.
     */
    isVisible: false

  }

});

/**
 * The sidebarTabsViewModel provides tha data and logic to toggle the sidebar itself or its contents.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let sidebarTabsViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#sidebarTabsVM',

  /**
   * The model of the view model.
   */
  data: {

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Hides the tooltip that is displayed on the specified element.
     * @param element - The element from which the tooltip will be hidden.
     */
    hideTooltip(element) {
      if (AppState.bootstrapMaterialTooltipEnabled) {
        $(element).tooltip('hide');
      }
    }

  }

});

/**
 * The toggleBaseMapViewModel provides tha data and logic to toggle the BaseMap layer.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let toggleBaseMapViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#toggleBaseMapButtonsVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * The current base map.
     */
    currentBaseMap: 'light',

    /**
     * The dictionary whose keys are the names of basemaps and items are objects providing the
     * names, icon names and descriptions of the buttons.
     * The descriptions can be used in aria-labels or as tooltips.
     */
    dictionary: {
      'light':     { name: 'Light',     iconName: 'map',            description: 'Light Basemap' },
      'dark':      { name: 'Dark',      iconName: 'map',            description: 'Dark Basemap' },
      'roads':     { name: 'Roads',     iconName: 'directions_car', description: 'Roads Basemap' },
      'physical':  { name: 'Physical',  iconName: 'panorama',       description: 'Physical Basemap' }, /* 'image, panorama, photo' */
      'terrain':   { name: 'Terrain',   iconName: 'terrain',        description: 'Terrain Basemap' },  /* 'terrain, landscape' */
      'satellite': { name: 'Satellite', iconName: 'healing',        description: 'Satellite Basemap' } /* 'satellite, cast, healing, photo_camera, local_see' */
    }

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Sets the current basemap.
     *
     * @param namedBaseMap - The named basemap.
     */
    setCurrentBaseMap(namedBaseMap) {

      // Remove the current basemap layer.
      Spatial.map.removeLayer(BaseMapLayers.namedBasemapLayers[this.currentBaseMap].mapLayer);

      this.currentBaseMap = namedBaseMap;

      if (AppState.bootstrapMaterialTooltipEnabled) {
        let element = '#' + namedBaseMap + 'Button';
        $(element).tooltip('hide');
      }

      // Add the new current basemap layer.
      let baseLayer = BaseMapLayers.namedBasemapLayers[this.currentBaseMap].mapLayer;

      baseLayer.addTo(Spatial.map);
      baseLayer.bringToBack();

      MapLayers.nuts3.renderLayer();

    }

  }

});

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

      areGroupsVisible = true;

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

    }

  }

});

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

/**
 * The detailsInfoViewModel provides the data and logic
 * to display detailed information about a NUTS3 region.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
// let detailsInfoViewModel = new Vue({
//
//   /**
//    * The name of the view model.
//    */
//   el: '#detailsInfoVM',
//
//   /**
//    * The model of the view model.
//    */
//   data: {
//
//     isVisible: false,
//
//     isPinned: false
//
//   },
//
//   /**
//    * The computed properties of the model of the view model.
//    */
//   computed: {
//
//   },
//
//   /**
//    * The methods of the view model.
//    */
//   methods: {
//
//     /**
//      * Shows the details view.
//      */
//     showView() {
//
//       // Hide the Nuts3LayerSetup panel if it is visible.
//       if (toggleNuts3LayerSetupViewModel.isNuts3LayerSetupVisible) {
//         // Mark the 'layer setup' view as 'hidden while hovering'.
//         symbologyViewModel.keepHiddenWhileHovering = true;
//         toggleNuts3LayerSetupViewModel.hideNuts3LayerSetup();
//       }
//       else {
//         // Hide the overview info panel if it is visible.
//         if (overviewInfoViewModel.isVisible) {
//           overviewInfoViewModel.isVisible = false;
//         }
//       }
//
//       // Show the details info panel.
//       this.isVisible = true;
//
//     },
//
//     /**
//      * Hide the details View.
//      */
//     hideView() {
//
//       // Hide the details info panel.
//       this.isVisible = false;
//
//       // Show the 'Layer Setup' view if it is marked as 'hidden while hovering'.
//       if (symbologyViewModel.keepHiddenWhileHovering) {
//         symbologyViewModel.keepHiddenWhileHovering = false;
//         toggleNuts3LayerSetupViewModel.showNuts3LayerSetup();
//       }
//
//     },
//
//
//     updateView(feature) {
//
//
//     },
//
//
//     Pin() {
//       this.isPinned = true;
//       if (AppState.bootstrapMaterialTooltipEnabled) {
//         $('#details-pin').tooltip('show');
//       }
//     },
//
//     unPin() {
//       this.isPinned = false;
//       this.isVisible = false;
//
//       MapLayers.nuts3.deselectNuts3();
//     }
//
//
//   }
//
// });

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
    }

  }

});

//
// ================================================================================


// ================================================================================
//  Main Body

$(document).ready(function(){
  AppState.bootstrapMaterialTooltipEnabled = true;
  $('[data-toggle="tooltip"]').tooltip();
});

Spatial.initializeMap();

radarDiagramModalViewModel.bindEvents();

Spatial.sidebar.open('map-controls');

//
// ================================================================================

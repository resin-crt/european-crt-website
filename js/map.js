
// ================================================================================
//  University of Manchester. UK.
//  School of Environment, Education, and Development.
//
//  Name:            map.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 01/06/2018.
//
//  Description:     The European Climate Risk Typology web mapping functionality.
// ================================================================================


/**
 * The AppState object holds the application state.
 */
let AppState = {

  bootstrapMaterialTooltipEnabled: false,
  isLayerRenderingSetup: false

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
     * The basemap layer named Dark.
     */
    dark: {
      name: 'Dark',
      leafletProvider: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Light.
     */
    light: {
      name: 'Light',
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
    }

  },

  /**
   * Sets the the named base map layers.
   */
  setNamedBasemapLayers() {

    // Dark
    this.namedBasemapLayers.dark.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatter;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatterOnlyLabels;

    // Light
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.BlackAndWhite;
    this.namedBasemapLayers.light.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Grayscale;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.Toner;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerBackground;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.Positron;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.PositronNoLabels;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.CartoDB.PositronOnlyLabels;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldGrayCanvas;

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
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.Base;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldPhysical;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldTopoMap;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Hydda.Base;

    // Terrain
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.Terrain;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Stamen.TerrainBackground;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldTerrain;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldShadedRelief;
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.HikeBike.HillShading;

    // Satellite
    //this.namedBasemapLayers.roads.leafletProvider = BaseMapLayers.leafletProviderBaseLayers.Esri.WorldImagery;

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
     * The named basemap layers.
     */
    namedBasemapLayers: {

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
          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }
        },

        /**
         * The styles used to highlight the current NUTS3 polygon based on its supergroup on top of the Dark Basemap.
         */
        // TODO: RESIN - Styles of Highlighted supergroups are not used at all.
        supergroupHighlightingStyles: {
          '1': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '2': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '3': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '4': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '5': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '6': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '7': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '8': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '9': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Dark Basemap.
         */
        //TODO: RESIN - Styles of groups are not used so far.
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '12': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '21': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '22': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '31': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '32': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '41': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '42': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '51': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '52': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '61': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '62': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '71': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '72': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '81': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '82': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '91': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 },
          '92': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 }
        },

        /**
         * The styles used to highlight the current NUTS3 polygon based on its group on top of the Dark Basemap.
         */
        // TODO: RESIN - Styles of Highlighted groups are not used at all.
        groupHighlightingStyles: {
          '11': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '12': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '21': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '22': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '31': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '32': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '41': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '42': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '51': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '52': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '61': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '62': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '71': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '72': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '81': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '82': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '91': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 },
          '92': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 }
        },

      },

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
          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }
        },

        /**
         * The styles used to highlight the current NUTS3 polygon based on its supergroup on top of the Light Basemap.
         */
        // TODO: RESIN - Styles of Highlighted supergroups are not used at all.
        supergroupHighlightingStyles: {
          '1': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '2': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '3': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '4': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '5': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '6': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '7': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '8': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '9': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Light Basemap.
         */
        //TODO: RESIN - Styles of groups are not used so far.
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '12': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '21': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '22': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '31': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '32': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '41': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '42': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '51': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '52': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '61': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '62': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '71': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '72': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '81': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '82': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '91': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 },
          '92': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 }
        },

        /**
         * The styles used to highlight the current NUTS3 polygon based on its group on top of the Light Basemap.
         */
        // TODO: RESIN - Styles of Highlighted groups are not used at all.
        groupHighlightingStyles: {
          '11': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '12': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '21': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '22': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '31': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '32': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '41': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '42': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '51': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '52': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '61': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '62': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '71': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '72': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '81': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '82': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '91': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 },
          '92': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 }
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
          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 },
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 },
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 },
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 },
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 },
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 },
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 },
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 },
          '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 }
        },

        /**
         * The styles used to highlight the current NUTS3 polygon based on its supergroup on top of the Roads Basemap.
         */
        // TODO: RESIN - Styles of Highlighted supergroups are not used at all.
        supergroupHighlightingStyles: {
          '1': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '2': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '3': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '4': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '5': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '6': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '7': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '8': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '9': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group on top of the Roads Basemap.
         */
        //TODO: RESIN - Styles of groups are not used so far.
        groupStyles: {
          '11': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '12': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '21': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '22': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '31': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '32': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '41': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '42': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '51': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '52': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '61': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '62': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '71': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '72': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '81': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '82': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '91': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 },
          '92': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 }
        },

        /**
         * The styles used to highlight the current NUTS3 polygon based on its group on top of the Roads Basemap.
         */
        // TODO: RESIN - Styles of Highlighted groups are not used at all.
        groupHighlightingStyles: {
          '11': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '12': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 },
          '21': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '22': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 },
          '31': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '32': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 },
          '41': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '42': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 },
          '51': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '52': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 },
          '61': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '62': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 },
          '71': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '72': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 },
          '81': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '82': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 },
          '91': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 },
          '92': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 }
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
    featureToLayerDictionary: {},

    /**
     * The supergroups metadata in the form of a dictionary whose keys are the values of supergroups.
     */
    supergroups: {
      '1': { sg: 1, groups: [11, 12], visible: true, name: 'This is the name for sg 1', description: 'This indicator shows the percentage of the total length of the major road network in the NUTS3 unit that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. Although this indicator does not highlight the specific elements of the road network that would be flooded the statistical data provided for this indicator, particularly the Z-score, can be used to better understand whether fluvial flooding to the major road network is a significant issue for the NUTS3 area.' },
      '2': { sg: 2, groups: [21, 22], visible: true, name: 'This is the name for sg 2', description: 'The road network was sourced from open street map (2017). Major roads are defined as ‘Highways’ and include ‘motorway’, ‘trunk’, ‘primary’, ‘secondary’ and ‘tertiary’ segments of the network. The road network was intersected with JRC 1-100 year return period flood maps.' },
      '3': { sg: 3, groups: [31, 32], visible: true, name: 'This is the name for sg 3', description: 'This is the description of supergroup sg 3' },
      '4': { sg: 4, groups: [41, 42], visible: true, name: 'This is the name for sg 4', description: 'This is the description of supergroup sg 4' },
      '5': { sg: 5, groups: [51, 52], visible: true, name: 'This is the name for sg 5', description: 'This is the description of supergroup sg 5' },
      '6': { sg: 6, groups: [61, 62], visible: true, name: 'This is the name for sg 6', description: 'This is the description of supergroup sg 6' },
      '7': { sg: 7, groups: [71, 72], visible: true, name: 'This is the name for sg 7', description: 'This is the description of supergroup sg 7' },
      '8': { sg: 8, groups: [81, 82], visible: true, name: 'This is the name for sg 8', description: 'This is the description of supergroup sg 8' },
      '9': { sg: 9, groups: [91, 92], visible: true, name: 'This is the name for sg 9', description: 'This is the description of supergroup sg 9' }
    },

    /**
     * The groups metadata in the form of a dictionary whose keys are the values of groups.
     */
    groups: {
      '11': { g: 11, sg: 1, visible: true, name: 'This is the name of g 11', description: 'This is the description of g 11' },
      '12': { g: 12, sg: 1, visible: true, name: 'This is the name of g 12', description: 'This is the description of g 12' },
      '21': { g: 21, sg: 2, visible: true, name: 'This is the name of g 21', description: 'This is the description of g 21' },
      '22': { g: 22, sg: 2, visible: true, name: 'This is the name of g 22', description: 'This is the description of g 22' },
      '31': { g: 31, sg: 3, visible: true, name: 'This is the name of g 31', description: 'This is the description of g 31' },
      '32': { g: 32, sg: 3, visible: true, name: 'This is the name of g 32', description: 'This is the description of g 32' },
      '41': { g: 41, sg: 4, visible: true, name: 'This is the name of g 41', description: 'This is the description of g 41' },
      '42': { g: 42, sg: 4, visible: true, name: 'This is the name of g 42', description: 'This is the description of g 42' },
      '51': { g: 51, sg: 5, visible: true, name: 'This is the name of g 51', description: 'This is the description of g 51' },
      '52': { g: 52, sg: 5, visible: true, name: 'This is the name of g 52', description: 'This is the description of g 52' },
      '61': { g: 61, sg: 6, visible: true, name: 'This is the name of g 61', description: 'This is the description of g 61' },
      '62': { g: 62, sg: 6, visible: true, name: 'This is the name of g 62', description: 'This is the description of g 62' },
      '71': { g: 71, sg: 7, visible: true, name: 'This is the name of g 71', description: 'This is the description of g 71' },
      '72': { g: 72, sg: 7, visible: true, name: 'This is the name of g 72', description: 'This is the description of g 72' },
      '81': { g: 81, sg: 8, visible: true, name: 'This is the name of g 81', description: 'This is the description of g 81' },
      '82': { g: 82, sg: 8, visible: true, name: 'This is the name of g 82', description: 'This is the description of g 82' },
      '91': { g: 91, sg: 9, visible: true, name: 'This is the name of g 91', description: 'This is the description of g 91' },
      '92': { g: 92, sg: 9, visible: true, name: 'This is the name of g 92', description: 'This is the description of g 92' }
    },

    /**
     * Creates the NUTS3 layer.
     */
    createLayer: function() {

      // loaderViewModel.isVisible = true;

      this.geoJSON = AppData.nuts3Polygons;

      this.mapLayer = L.geoJSON(this.geoJSON, {
        // style: this.namedBasemapLayers[toggleBaseMapViewModel.currentBaseMap].style,
        // style: this.namedBasemapLayers['dark'].supergroupStyles,

        // TODO: RESIN - Correct rendering code to allow the use of the current basemap and the current rendering method (typology supergroups / groups or indicators)
        style: function(feature) {
          let isVisible = MapLayers.nuts3.supergroups[feature.properties.SG].visible;

          if (isVisible) {
            return MapLayers.nuts3.namedBasemapLayers['dark'].supergroupStyles[feature.properties.SG];
          }
          else {
            return MapLayers.nuts3.namedBasemapLayers['dark'].defaultStyle;
          }

          // return MapLayers.nuts3.namedBasemapLayers[toggleBaseMapViewModel.currentBaseMap].supergroupStyles[feature.properties.SG];
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
              MapLayers.nuts3.highlightNuts3(feature, layer);
            },

            /**
             * Raised when the mouse is going out of a feature.
             */
            mouseout: function() {
              MapLayers.nuts3.resetNuts3Style(feature, layer);
            },

            /**
             * Raised when a feature is clicked.
             */
            click: function() {
              //MapLayers.nuts3.getCommuteFlows(feature);
            },

            /**
             * Raised when a feature is double clicked.
             */
            dblclick: function() {
              // TODO: This is a problem. A click event is fired before the double click. We need to change this behaviour.
              //Spatial.map.fitBounds(layer.getBounds());
            }

          });
        }
      });

      // Add the layer in to the map and make sure it is visible.
      this.mapLayer.addTo(Spatial.map);
      this.mapLayer.bringToFront();

      // Loop through all the features and create the feature to layer dictionary.
      // TODO: RESIN - Do we need this?
      // for (let key in this.mapLayer._layers) {
      //   if (this.mapLayer._layers.hasOwnProperty(key)) {
      //     this.featureToLayerDictionary[this.mapLayer._layers[key].feature.properties.C] = key;
      //   }
      // }

      // loaderViewModel.isVisible = false;

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

      // TODO: RESIN - It seems this line is not needed anymore after using the new version of Leaflet.
      //MapLayers.nuts3.mapLayer.bringToFront();

      // Update the NUTS3 information on the page.
      // TODO: RESIN - Implement this functionality
      // currentMsoaViewModel.updateView(feature.properties.C, feature.properties.NM, feature.properties.NMW);
      // currentMsoaViewModel.show();

    },

    /**
     * Resets the NUTS3 style. This is called once a mouseout event has been fired.
     *
     * @param feature - The feature that whose style will be reset.
     * @param layer - The internal layer of the feature whose style will be reset.
     */
    resetNuts3Style: function(feature, layer) {

      // Get the named basemap layer.
      let namedBaseMap = toggleBaseMapViewModel.currentBaseMap;
      // TODO: RESIN
      //let namedBaseMap = 'dark';

      // Reset the style of the NUTS3 polygon.
      layer.defaultOptions.style = this.namedBasemapLayers[namedBaseMap].defaultStyle;
      this.mapLayer.resetStyle(layer);

      //MapLayers.CommuteFlows.mapLayer.bringToFront();

      // Update the MSOA information on the page.
      // TODO: RESIN - Implement this functionality.
      // currentMsoaViewModel.updateView(null, '', '');
      // currentMsoaViewModel.hide();

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
    center: [54.5, 10],
    zoom: 4,
    minZoom: 3,
    maxZoom: 18
  },

  /**
   * Initializes the map.
   */
  initializeMap: function() {

    loaderViewModel.isVisible = true;

    Spatial.map = L.map('map', {
      center: Spatial.mapOptions.center,
      zoom: Spatial.mapOptions.zoom,
      minZoom: Spatial.mapOptions.minZoom,
      maxZoom: Spatial.mapOptions.maxZoom
    });

    // Create the sidebar and add it on the map.
    // TODO: RESIN
    Spatial.sidebar = L.control.sidebar(Spatial.Members.sidebarName, {position: Spatial.Members.sidebarPosition});
    Spatial.sidebar.addTo(Spatial.map);

    BaseMapLayers.setNamedBasemapLayers();
    BaseMapLayers.createBaseMapLayers();

    MapLayers.nuts3.createLayer();

    //Spatial.createMSOAsChoroplethLayer();

    // MapLayers.CommuteFlows.createLayer();
    // MapLayers.CommuteFlows.clearLayer();
    // MapLayers.CommuteFlows.geoJSON = null;

    // MapLayers.MSOAs.createInternalCommuteFlowsMsoaLayer();
    //MapLayers.CommuteFlows.createInternalCommuteFlowsMsoaLayer();

    Spatial.setInitialBaseMapLayer();

    loaderViewModel.isVisible = false;

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

  },

};


/**
 * The HTML templates used in the web app.
 */
let HtmlTemplates = {

  /**
   * The HTML template used to display a tooltip with metadata about supergroups or groups.
   */
  // TODO: RESIN - Change src and alt in img tag.
  typologyMetadataTooltip: '<div class="card">' +
                             '<img class="card-img-top" src="https://placeimg.com/320/240/arch" alt="Card image cap">' +
                             '<div class="card-body">' +
                               '<h5 class="card-title">@@name@@</h5>' +
                               '<p class="card-text">@@description@@</p>' +
                             '</div>' +
                           '</div>'

};




// ================================================================================
//  View Models.

/**
 * The loaderViewModel provides the data and logic to toggle the visibility of loader.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let loaderViewModel = new Vue({

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
    currentBaseMap: 'dark',

    /**
     * The basemap names.
     */
    baseMapNames: [ 'Dark', 'Light', 'Roads' ],

    /**
     * The basemap icon names.
     */
    baseMapIconNames: {
      'dark': 'map', //'fas fa-map',
      'light': 'map', //'far fa-map',
      'roads': 'directions_car' //'fas fa-road'
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

      // Make sure the associated styles for MSOAs layer is applied.
      //MapLayers.MSOAs.mapLayer.options.style = MapLayers.MSOAs.namedBasemapLayers[namedBaseMap].style;
      //MapLayers.MSOAs.mapLayer.setStyle(MapLayers.MSOAs.namedBasemapLayers[namedBaseMap].style);

      //MapLayers.MSOAs.renderCommuteFlowPolygons();
      //Spatial.renderCommuteFlows();

    }

  }

});

/**
 * The toggleNuts3LayerSetupButtonViewModel provides tha data and logic
 * to toggle the layer rendering setup button and panel.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let toggleNuts3LayerSetupButtonViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#toggleNuts3LayerSetupButtonVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * Indicates whether the layer rendering setup is displayed or not.
     */
    isNuts3LayerSetupVisible: false,

    /**
     * Button name.
     */
    description: 'NUTS3 Layer Setup',

    /**
     * The basemap icon names.
     */
    buttonIconName: 'layers' //'fas fa-puzzle-piece'

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Toggles the NUTS3 layer setup button and panel area.
     *
     */
    toggleNuts3LayerSetup() {

      this.isNuts3LayerSetupVisible = !this.isNuts3LayerSetupVisible;

      nuts3LayerSetupViewModel.isVisible = this.isNuts3LayerSetupVisible;

      if (AppState.bootstrapMaterialTooltipEnabled) {
        $('#nuts3LayerSetupButton').tooltip('hide');
      }

    }

  }

});

/**
 * The nuts3LayerSetupViewModel provides tha data and logic
 * to allow a user to setup the NUTS3 layer rendering.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let nuts3LayerSetupViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#nuts3LayerSetupVM',

  /**
   * The model of the view model.
   */
  data: {

    isVisible: true,

    currentTab: 'supergroups',

    supergroups: MapLayers.nuts3.supergroups,

    groups: MapLayers.nuts3.groups,

    tooltipIconName: 'announcement', // feedback, info

    /**
     * The array of selected supergroups used by the list of supergroup checkboxes.
     */
    checkedSupergroups: [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ],

    /**
     * The array of selected groups used by the list of group checkboxes.
     */
    checkedGroups: []

  },

  computed: {

    /**
     * Return the tooltips of the supergroups.
     */
    supergroupTooltips: function() {

      let tooltips = {
        '1': '', '2': '', '3': '', '4': '', '5': '', '6': '', '7': '', '8': '', '9': ''
      };

      for (let sg in this.supergroups) {
        if (this.supergroups.hasOwnProperty(sg)) {
          tooltips[sg] = HtmlTemplates.typologyMetadataTooltip
                          .replace('@@name@@', MapLayers.nuts3.supergroups[sg].name)
                          .replace('@@description@@', MapLayers.nuts3.supergroups[sg].description);
        }
      }

      return tooltips;

    },


    // supergroupFillColors: function() {
    //
    //   let fillColors = {};
    //
    //   let currentBasemap = toggleBaseMapViewModel.currentBaseMap;
    //   let supergroups = MapLayers.nuts3.namedBasemapLayers[currentBasemap][this.currentTab];
    //
    //   for (let c in supergroups) {
    //     if (supergroups.hasOwnProperty(c)) {
    //       classes[c] = {
    //         visible: supergroups[c].visible,
    //         fillColor: supergroups[c].style.fillColor,
    //         fillOpacity: supergroups[c].style.fillOpacity
    //       };
    //     }
    //   }
    //
    //   return classes;
    //
    // },
    //
    // groupFillColors: function() {
    //
    // },





    // typologyClasses: function() {
    //
    //   let classes = {};
    //
    //   let currentBasemap = toggleBaseMapViewModel.currentBaseMap;
    //   let supergroupStyles = MapLayers.nuts3.namedBasemapLayers[currentBasemap][this.currentTab];
    //
    //   for (let c in supergroupStyles) {
    //     if (supergroupStyles.hasOwnProperty(c)) {
    //       classes[c] = {
    //         fillColor: supergroupStyles[c].fillColor,
    //         fillOpacity: supergroupStyles[c].fillOpacity
    //       };
    //     }
    //   }
    //
    //   return classes;
    //
    // //
    // //   <!--<div id='example-3'>-->
    // //   <!--<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">-->
    // // <!--<label for="jack">Jack</label>-->
    // //     <!--<input type="checkbox" id="john" value="John" v-model="checkedNames">-->
    // //     <!--<label for="john">John</label>-->
    // //     <!--<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">-->
    // //     <!--<label for="mike">Mike</label>-->
    // //     <!--<br>-->
    // //     <!--<span>Checked names: {{ checkedNames }}</span>-->
    // //   <!--</div>-->
    //
    // }


  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Sets the current tab.
     * @param tabName - The name of the tab to activate.
     */
    setCurrentTab(tabName) {
      this.currentTab = tabName;
    },

    /**
     * Toggles the visibility of the specified supergroup in the NUTS3 layer.
     * @param sg - The supergroup whose visibility will be toggled on or off.
     */
    toggleSupergroup(sg) {

      if (this.supergroups.hasOwnProperty(sg)) {
        this.supergroups[sg].visible = !this.supergroups[sg].visible;
      }

      let a = this.checkedSupergroups;

    },

    /**
     * Toggles the visibility of the specified supergroup in the NUTS3 layer.
     * @param g - The supergroup whose visibility will be toggled on or off.
     */
    toggleGroup(g) {

      if (this.groups.hasOwnProperty(g)) {
        this.groups[g].visible = !this.groups[g].visible;
      }

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

      // TODO: RESIN - Render Layer
      // Spatial.renderCommuteFlows();

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

      // TODO: RESIN - Render Layer
      // Spatial.renderCommuteFlows();

    },



    renderNuts3(typologyClass) {
      
      alert(typologyClass);
      

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

//
// ================================================================================



















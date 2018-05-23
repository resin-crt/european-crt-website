
// ================================================================================
//  University of Manchester. UK.
//  School of Environment, Education, and Development.
//
//  Name:            map.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 17/05/2018.
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
  NUTS3: {

    /**
     * The name of the layer.
     */
    name: 'NUTS3',

    /**
     * The named basemap layers.
     */
    namedBasemapLayers: {

      /**
       * The basemap layer named Dark.
       */
      dark: {

        /**
         * The style used to render NUTS3 polygons.
         */
        style: {
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
         * The style used to highlight the current NUTS3 polygon.
         */
        highlightedStyle: {
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
         * The styles used to render the NUTS3 polygons based on their supergroup.
         */
        supergroups: {
          '1': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 } },
          '2': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 } },
          '3': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 } },
          '4': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 } },
          '5': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 } },
          '6': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 } },
          '7': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 } },
          '8': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 } },
          '9': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 } }
        },

        /**
         * The styles used to highlight the NUTS3 polygons based on their supergroup.
         */
        // TODO: RESIN - Styles of Highlighted supergroups are not used at all.
        highlightedSupergroups: {
          '1': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          '2': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          '3': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          '4': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          '5': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          '6': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          '7': { visible: true, style: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          '8': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          '9': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group.
         */
        //TODO: RESIN - Sstyles of groups are not used so far.
        groups: {
          //'#d53e4f'
          '11': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          '12': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          //'#f46d43'
          '21': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          '22': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          //'#fdae61'
          '31': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          '32': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          //'#fee08b'
          '41': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          '42': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          //'#ffffbf'
          '51': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          '52': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          //'#e6f598'
          '61': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          '62': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          //'#abdda4'
          '71': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          '72': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          //'#66c2a5'
          '81': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          '82': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          //'#3288bd'
          '91': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } },
          '92': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } }
        },

        /**
         * The styles used to highlight the NUTS3 polygons based on their group.
         */
        highlightedGroups: {
          //'#d53e4f'
          '11': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          '12': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          //'#f46d43'
          '21': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          '22': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          //'#fdae61'
          '31': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          '32': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          //'#fee08b'
          '41': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          '42': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          //'#ffffbf'
          '51': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          '52': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          //'#e6f598'
          '61': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          '62': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          //'#abdda4'
          '71': { visible: true, style: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          '72': { visible: true, style: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          //'#66c2a5'
          '81': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          '82': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          //'#3288bd'
          '91': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } },
          '92': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } }
        },

      },

      /**
       * The basemap layer named Light.
       */
      light: {

        /**
         * The style used to render NUTS3 polygons.
         */
        style: {
          stroke: true,
          color: '#282828', //'#4169E1',
          weight: 0.5,
          opacity: 1,
          fill: true,
          fillOpacity: 0.01
          //lineCap: 'round',  // butt | round | square | inherit
          //lineJoin: 'round'  // miter | round | bevel | inherit
        },

        /**
         * The style used to highlight the current NUTS3 polygon.
         */
        highlightedStyle: {
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
         * The styles used to render the NUTS3 polygons based on their supergroup.
         */
        supergroups: {
          '1': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 } },
          '2': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 } },
          '3': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 } },
          '4': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 } },
          '5': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 } },
          '6': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 } },
          '7': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 } },
          '8': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 } },
          '9': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 } }
        },

        /**
         * The styles used to highlight the NUTS3 polygons based on their supergroup.
         */
        // TODO: RESIN - Styles of Highlighted supergroups are not used at all.
        highlightedSupergroups: {
          '1': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          '2': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          '3': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          '4': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          '5': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          '6': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          '7': { visible: true, style: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          '8': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          '9': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group.
         */
        // TODO: RESIN - Styles of groups are not used so far.
        groups: {
          //'#d53e4f'
          '11': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          '12': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          //'#f46d43'
          '21': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          '22': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          //'#fdae61'
          '31': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          '32': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          //'#fee08b'
          '41': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          '42': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          //'#ffffbf'
          '51': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          '52': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          //'#e6f598'
          '61': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          '62': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          //'#abdda4'
          '71': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          '72': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          //'#66c2a5'
          '81': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          '82': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          //'#3288bd'
          '91': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } },
          '92': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } }
        },

        /**
         * The styles used to highlight the NUTS3 polygons based on their group.
         */
        // TODO: RESIN - Styles of Highlighted groups are not used at all.
        highlightedGroups: {
          //'#d53e4f'
          '11': { visible: true, style: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          '12': { visible: true, style: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          //'#f46d43'
          '21': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          '22': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          //'#fdae61'
          '31': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          '32': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          //'#fee08b'
          '41': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          '42': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          //'#ffffbf'
          '51': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          '52': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          //'#e6f598'
          '61': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          '62': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          //'#abdda4'
          '71': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          '72': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          //'#66c2a5'
          '81': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          '82': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          //'#3288bd'
          '91': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } },
          '92': { visible: true, style: { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } }
        }

      },

      /**
       * The basemap layer named roads.
       */
      roads: {

        /**
         * The style used to render NUTS3 polygons.
         */
        style: {
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
         * The style used to highlight the current NUTS3 polygon.
         */
        highlightedStyle: {
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
         * The styles used to render the NUTS3 polygons based on their supergroup.
         */
        supergroups: {
          '1': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.6 } },
          '2': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.6 } },
          '3': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.6 } },
          '4': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.6 } },
          '5': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.6 } },
          '6': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.6 } },
          '7': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.6 } },
          '8': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.6 } },
          '9': { visible: true, style: { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.6 } }
        },

        /**
         * The styles used to highlight the NUTS3 polygons based on their supergroup.
         */
        // TODO: RESIN - Styles of Highlighted supergroups are not used at all.
        highlightedSupergroups: {
          '1': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          '2': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          '3': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          '4': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          '5': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          '6': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          '7': { visible: true, style: { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          '8': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          '9': { visible: true, style: { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group.
         */
        // TODO: RESIN - Styles of groups are not used so far.
        groups: {
          //'#d53e4f'
          '11': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          '12': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          //'#f46d43'
          '21': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          '22': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          //'#fdae61'
          '31': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          '32': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          //'#fee08b'
          '41': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          '42': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          //'#ffffbf'
          '51': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          '52': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          //'#e6f598'
          '61': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          '62': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          //'#abdda4'
          '71': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          '72': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          //'#66c2a5'
          '81': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          '82': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          //'#3288bd'
          '91': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } },
          '92': { visible: true, style: { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } }
        },

        /**
         * The styles used to highlight the NUTS3 polygons based on their group.
         */
        // TODO: RESIN - Styles of Highlighted groups are not used at all.
        highlightedGroups: {
          //'#d53e4f'
          '11': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          '12': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.6 } },
          //'#f46d43'
          '21': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          '22': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.6 } },
          //'#fdae61'
          '31': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          '32': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.6 } },
          //'#fee08b'
          '41': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          '42': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.6 } },
          //'#ffffbf'
          '51': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          '52': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.6 } },
          //'#e6f598'
          '61': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          '62': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.6 } },
          //'#abdda4'
          '71': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          '72': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.6 } },
          //'#66c2a5'
          '81': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          '82': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.6 } },
          //'#3288bd'
          '91': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } },
          '92': { visible: true, style: { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.6 } }
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
          let supergroup = MapLayers.NUTS3.namedBasemapLayers['dark'].supergroups[feature.properties.SG];

          if (supergroup.visible) {
            return supergroup.style;
          }
          else {
            return MapLayers.NUTS3.namedBasemapLayers['dark'].style;
          }

          // return MapLayers.NUTS3.namedBasemapLayers[toggleBaseMapViewModel.currentBaseMap].supergroupStyles[feature.properties.SG];
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
              MapLayers.NUTS3.highlightNuts3(feature, layer);
            },

            /**
             * Raised when the mouse is going out of a feature.
             */
            mouseout: function() {
              MapLayers.NUTS3.resetNuts3Style(feature, layer);
            },

            /**
             * Raised when a feature is clicked.
             */
            click: function() {
              //MapLayers.NUTS3.getCommuteFlows(feature);
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
      layer.setStyle(this.namedBasemapLayers[namedBaseMap].highlightedStyle);

      if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
      }

      // TODO: RESIN - It seems this line is not needed anymore after using the new version of Leaflet.
      //MapLayers.NUTS3.mapLayer.bringToFront();

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
      layer.defaultOptions.style = this.namedBasemapLayers[namedBaseMap].style;
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
 *
 * @type {}
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

    MapLayers.NUTS3.createLayer();

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
    baseMapIconNames: [ 'fas fa-map', 'far fa-map', 'fas fa-road' ]

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
 * The toggleLayerRenderingSetupButtonViewModel provides tha data and logic
 * to toggle the layer rendering setup button and panel.
 *
 * @type {Vue} - A Vue object with the model and methods used in the view model.
 */
let toggleLayerRenderingSetupButtonViewModel = new Vue({

  /**
   * The name of the view model.
   */
  el: '#toggleLayerRenderingSetupButtonVM',

  /**
   * The model of the view model.
   */
  data: {

    /**
     * Indicates whether the layer rendering setup is displayed or not.
     */
    isLayerRenderingSetupVisible: false,

    /**
     * Button name.
     */
    description: 'Layer Rendering Setup',

    /**
     * The basemap icon names.
     */
    buttonIconName: 'fas fa-puzzle-piece'

  },

  /**
   * The methods of the view model.
   */
  methods: {

    /**
     * Toggles the layer rendering setup button and panel area.
     *
     */
    toggleLayerRenderingSetup() {

      this.isLayerRenderingSetupVisible = !this.isLayerRenderingSetupVisible;

      let onOff = (this.isLayerRenderingSetupVisible === true) ? 'on' : 'off';

      // TODO: RESIN - Add functionality here.
      //alert('Toggle Layer Rendering Setup ' + onOff);

      if (AppState.bootstrapMaterialTooltipEnabled) {
        $('#layerRenderingSetupButton').tooltip('hide');
      }

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






















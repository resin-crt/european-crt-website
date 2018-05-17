
// ================================================================================
//  University of Manchester. UK.
//  School of Environment, Education, and Development.
//
//  Name:            map.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 17/05/2018.
//
//  Description:     The European Climate Risk Typology web mapping functionality.
// ================================================================================

let AppObj = {

  bootstrapMaterialTooltipEnabled: false

};

let BaseMapLayers = {

  /**
   * All the names of the basemap layers that are defined by the leaflet providers plugin.
   */
  leafletProviderBaseLayers: {
    OpenStreetMap: {
      Mapnik: 'OpenStreetMap.Mapnik',
      BlackAndWhite: 'OpenStreetMap.BlackAndWhite',
      DE: 'OpenStreetMap.DE',
      France: 'OpenStreetMap.France',
      HOT: 'OpenStreetMap.HOT'
    },
    OpenTopoMap: 'OpenTopoMap',
    Thunderforest: {
      OpenCycleMap: 'Thunderforest.OpenCycleMap',
      Transport: 'Thunderforest.Transport',
      TransportDark: 'Thunderforest.TransportDark',
      SpinalMap: 'Thunderforest.SpinalMap',
      Landscape: 'Thunderforest.Landscape',
      Outdoors: 'Thunderforest.Outdoors',
      Pioneer: 'Thunderforest.Pioneer',
    },
    OpenMapSurfer: {
      Roads: 'OpenMapSurfer.Roads',
      Grayscale: 'OpenMapSurfer.Grayscale',
      AdminBounds: 'OpenMapSurfer.AdminBounds'
    },
    Hydda: {
      Full: 'Hydda.Full',
      Base: 'Hydda.Base',
      RoadsAndLabels: 'Hydda.RoadsAndLabels'
    },
    MapBox: 'MapBox',
    Stamen: {
      Toner: 'Stamen.Toner',
      TonerBackground: 'Stamen.TonerBackground',
      TonerLite: 'Stamen.TonerLite',
      Watercolor: 'Stamen.Watercolor',
      Terrain: 'Stamen.Terrain',
      TerrainBackground: 'Stamen.TerrainBackground',
      TopOSMRelief: 'Stamen.TopOSMRelief',
      TonerHybrid: 'Stamen.TonerHybrid',
      TonerLines: 'Stamen.TonerLines',
      TonerLabels: 'Stamen.TonerLabels',
      TopOSMFeatures: 'Stamen.TopOSMFeatures'
    },
    Esri: {
      WorldStreetMap: 'Esri.WorldStreetMap',
      DeLome: 'Esri.DeLome',
      WorldTopoMap: 'Esri.WorldTopoMap',
      WorldImagery: 'Esri.WorldImagery',
      WorldTerrain: 'Esri.Terrain',
      WorldShadedRelief: 'Esri.WorldShadedRelief',
      WorldPhysical: 'Esri.WorldPhysical',
      OceanBaseMap: 'Esri.OceanBaseMap',
      NatGeoWorldMap: 'Esri.NatGeoWorldMap',
      WorldGrayCanvas: 'Esri.WorldGrayCanvas'
    },
    HERE: {
      normalDay: 'HERE.normalDay',
      basicMap: 'HERE.basicMap',
      hybridDay: 'HERE.hybridDay'
    },
    MtbMap: 'MtbMap',
    CartoDB: {
      Positron: 'CartoDB.Positron',
      PositronNoLabels: 'CartoDB.PositronNoLabels',
      PositronOnlyLabels: 'CartoDB.PositronOnlyLabels',
      DarkMatter: 'CartoDB.DarkMatter',
      DarkMatterNoLabels: 'CartoDB.DarkMatterNoLabels',
      DarkMatterOnlyLabels: 'CartoDB.DarkMatterOnlyLabels'
    },
    HikeBike: {
      HikeBike: 'HikeBike.HikeBike',
      HillShading: 'HikeBike.HillShading'
    },
    BasemapAT: {
      basemap: 'BasemapAT.basemap',
      grau: 'BasemapAT.grau',
      overlay: 'BasemapAT.overlay',
      highdpi: 'BasemapAT.highdpi',
      orthophoto: 'BasemapAT.orthophoto'
    },
    NASAGIBS: {
      ModisTerraTrueColorCR: 'NASAGIBS.ModisTerraTrueColorCR',
      ModisTerraBands367CR: 'NASAGIBS.ModisTerraBands367CR',
      ViirsEarthAtNight2012: 'NASAGIBS.ViirsEarthAtNight2012',
      ModisTerraLSTDay: 'NASAGIBS.ModisTerraLSTDay',
      ModisTerraSnowCover: 'NASAGIBS.ModisTerraSnowCover',
      ModisTerraAOD: 'NASAGIBS.ModisTerraAOD',
      ModisTerraChlorophyll: 'NASAGIBS.ModisTerraChlorophyll'
    },
    NLS: 'NLS',
    OpenSeaMap: 'OpenSeaMap',
    OpenWeatherMap: {
      Clouds: 'OpenWeatherMap.Clouds',
      Pressure: 'OpenWeatherMap.Pressure',
      Wind: 'OpenWeatherMap.Wind'
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
      leafletProviderName: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Light.
     */
    light: {
      name: 'Light',
      leafletProviderName: null,
      mapLayer: null
    },

    /**
     * The basemap layer named Roads.
     */
    roads: {
      name: 'Roads',
      leafletProviderName: null,
      mapLayer: null
    }

  },

  /**
   * Sets the the named base map layers.
   */
  setNamedBasemapLayers() {

    this.namedBasemapLayers.dark.leafletProviderName = BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatter;
    this.namedBasemapLayers.light.leafletProviderName = BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Grayscale;
    //this.namedBasemapLayers.roads.leafletProviderName = BaseMapLayers.leafletProviderBaseLayers.Thunderforest.Transport;
    this.namedBasemapLayers.roads.leafletProviderName = BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.HOT;

    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.BasemapAT.basemap);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.BasemapAT.grau);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.BasemapAT.highdpi);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.BasemapAT.orthophoto);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.BasemapAT.overlay);
    //
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatter);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatterNoLabels);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.CartoDB.DarkMatterOnlyLabels);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.CartoDB.Positron);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.CartoDB.PositronNoLabels);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.CartoDB.PositronOnlyLabels);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.DeLome);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.NatGeoWorldMap);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.OceanBaseMap);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldGrayCanvas);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldImagery);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldPhysical);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldShadedRelief);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldStreetMap);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldTerrain);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Esri.WorldTopoMap);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.HERE.basicMap);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.HERE.hybridDay);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.HERE.normalDay);
    //
    // --??BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.HikeBike.HikeBike);
    // --??BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.HikeBike.HillShading);
    //
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Hydda.Full);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Hydda.Base);
    // --------BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Hydda.RoadsAndLabels);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.MapBox);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.MtbMap);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ModisTerraTrueColorCR);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ModisTerraAOD);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ModisTerraBands367CR);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ModisTerraChlorophyll);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ModisTerraLSTDay);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ModisTerraSnowCover);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NASAGIBS.ViirsEarthAtNight2012);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.NLS);
    //
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Roads);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.AdminBounds);
    // --------BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenMapSurfer.Grayscale);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenSeaMap);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.Mapnik);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.BlackAndWhite);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.DE);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.France);
    // --??BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.HOT);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenTopoMap);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenWeatherMap.Clouds);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenWeatherMap.Pressure);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.OpenWeatherMap.Wind);
    //
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.Toner);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerBackground);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerLite);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.Watercolor);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.Terrain);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TerrainBackground);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TopOSMRelief);
    // --------BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerHybrid);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerLines);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TonerLabels);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Stamen.TopOSMFeatures);
    //
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.OpenCycleMap);
    // --------BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.Transport);
    // --------BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.TransportDark);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.SpinalMap);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.Landscape);
    // BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.Outdoors);
    // ----BaseMapLayers.LeafletProvidersBaseMap.createBaseMapLayer(BaseMapLayers.leafletProviderBaseLayers.Thunderforest.Pioneer);

  },

  /**
   * Creates the BaseMap layers.
   */
  createBaseMapLayers: function() {

    // Loop through all the named basemap layers and instantiate them.
    for (let namedLayer in this.namedBasemapLayers) {
      if (this.namedBasemapLayers.hasOwnProperty(namedLayer)) {

        let baseLayer = this.namedBasemapLayers[namedLayer];
        baseLayer.mapLayer = L.tileLayer.provider(baseLayer.leafletProviderName);

      }
    }

  }

};

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
        supergroupStyles: {
          //'#d53e4f'
          '1': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#004358', fillOpacity: 0.7 },
          //'#f46d43'
          '2': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#1F8A70', fillOpacity: 0.7 },
          //'#fdae61'
          '3': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FD7400', fillOpacity: 0.7 },
          //'#fee08
          '4': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FFE11A', fillOpacity: 0.7 },
          //'#ffffbf'
          '5': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF8C00', fillOpacity: 0.7 },
          //'#e6f598'
          '6': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#35478C', fillOpacity: 0.7 },
          //'#abdda4'
          '7': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#FF2D00', fillOpacity: 0.7 },
          //'#66c2a5'
          '8': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#167F39', fillOpacity: 0.7 },
          //'#3288bd'
          '9': { stroke: true, color: '#282828', weight: 0.4, opacity: 1, fill: true, fillColor: '#00A388', fillOpacity: 0.7 }
        },

        /**
         * The styles used to highlight the NUTS3 polygons based on their supergroup.
         */
        highlightedSupergroupStyles: {
          //'#d53e4f'
          '1': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '2': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '3': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '4': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '5': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '6': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '7': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '8': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '9': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group.
         */
        groupStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        },

        /**
         * The styles used to highlight the NUTS3 polygons based on their group.
         */
        highlightedGroupStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#e1de00', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
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
        supergroupStyles: {
          //'#d53e4f'
          '1': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '2': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '3': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '4': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '5': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '6': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '7': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '8': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '9': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        },

        /**
         * The styles used to highlight the NUTS3 polygons based on their supergroup.
         */
        highlightedSupergroupStyles: {
          //'#d53e4f'
          '1': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '2': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '3': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '4': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '5': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '6': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '7': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '8': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '9': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group.
         */
        groupStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        },

        /**
         * The styles used to highlight the NUTS3 polygons based on their group.
         */
        highlightedGroupStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#ff4500', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#4169e1', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
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
        supergroupStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '15': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '35': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '65': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '75': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '85': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '93': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '94': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        },

        /**
         * The styles used to highlight the NUTS3 polygons based on their supergroup.
         */
        highlightedSupergroupStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '15': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '35': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '65': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '75': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '85': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '93': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '94': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        },

        /**
         * The styles used to render the NUTS3 polygons based on their group.
         */
        groupStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '15': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '35': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '65': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '75': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '85': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '93': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '94': { stroke: true, color: '#282828', weight: 0.5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
        },

        /**
         * The styles used to highlight the NUTS3 polygons based on their group.
         */
        highlightedGroupStyles: {
          //'#d53e4f'
          '11': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '12': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '13': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '14': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          '15': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1705d6', fillOpacity: 0.7 },
          //'#f46d43'
          '21': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '22': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          '23': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#11ea44', fillOpacity: 0.7 },
          //'#fdae61'
          '31': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '32': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '33': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '34': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          '35': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#cc4704', fillOpacity: 0.7 },
          //'#fee08b'
          '41': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '42': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          '43': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#6b2ed4', fillOpacity: 0.7 },
          //'#ffffbf'
          '51': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '52': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '53': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '54': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          '55': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#d60003', fillOpacity: 0.7 },
          //'#e6f598'
          '61': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '62': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '63': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '64': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          '65': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#23cfb8', fillOpacity: 0.7 },
          //'#abdda4'
          '71': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '72': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '73': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '74': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          '75': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#e1de00', fillOpacity: 0.7 },
          //'#66c2a5'
          '81': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '82': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '83': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '84': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          '85': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#de079a', fillOpacity: 0.7 },
          //'#3288bd'
          '91': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '92': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '93': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 },
          '94': { stroke: true, color: '#282828', weight: 5, opacity: 1, fill: true, fillColor: '#1fcd5f', fillOpacity: 0.7 }
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

      // TODO: RESIN - Decide which polygon features will be used in the last version.
      // this.geoJSON = AppData.nuts3PolygonsTypologyOnlyP6;
      this.geoJSON = AppData.nuts3PolygonsP6;

      this.mapLayer = L.geoJSON(this.geoJSON, {
        // style: this.namedBasemapLayers[toggleBaseMapViewModel.currentBaseMap].style,
        // style: this.namedBasemapLayers['dark'].supergroupStyles,

        // TODO: RESIN - We need to find a way to render based on supergroups or groups
        style: function(feature) {
          return MapLayers.NUTS3.namedBasemapLayers['dark'].supergroupStyles[feature.properties.SG];
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
      // TODO: RESIN
      //let namedBaseMap = 'dark';

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
    minZoom: 1,
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
    // let namedBaseMap = 'dark'; // TODO: RESIN - Change this !!!
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
   * The model of the view model.
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

      if (AppObj.bootstrapMaterialTooltipEnabled) {
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








//
// ================================================================================


// ================================================================================
//  Main Body

$(document).ready(function(){
  AppObj.bootstrapMaterialTooltipEnabled = true;
  $('[data-toggle="tooltip"]').tooltip();
});

Spatial.initializeMap();

//
// ================================================================================





















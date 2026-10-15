
// ================================================================================
//  University of Manchester. UK.
//  School of Environment, Education, and Development.
//
//  Name:            BaseMapLayers.js
//  Original coding: Vasilis Vlastaras (@gisvlasta), 20/09/2018.
//
//  Description:     Provides basemap layers functionality.
// ================================================================================

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
      DE: ['OpenStreetMap.DE', undefined],
      CH: ['OpenStreetMap.CH', undefined],
      France: ['OpenStreetMap.France', undefined],
      HOT: ['OpenStreetMap.HOT', undefined],
      BZH: ['OpenStreetMap.BZH', undefined],
      CAT: ['OpenStreetMap.CAT', undefined]
    },
    MapTilesAPI: {
      OSMEnglish: ['MapTilesAPI.OSMEnglish', { apikey: '' }],
      OSMFrancais: ['MapTilesAPI.OSMFrancais', { apikey: '' }],
      OSMEspagnol: ['MapTilesAPI.OSMEspagnol', { apikey: '' }]
    },
    OPNVKarte: ['OPNVKarte', undefined],
    OpenTopoMap: ['OpenTopoMap', undefined],
    Stadia: {
      AlidadeSmooth: ['Stadia.AlidadeSmooth', undefined],
      AlidadeSmoothDark: ['Stadia.AlidadeSmoothDark', undefined],
      AlidadeSatellite: ['Stadia.AlidadeSatellite', undefined],
      OSMBright: ['Stadia.OSMBright', undefined],
      Outdoors: ['Stadia.Outdoors', undefined],
      StamenToner: ['Stadia.StamenToner', undefined],
      StamenTonerBackground: ['Stadia.StamenTonerBackground', undefined],
      StamenTonerLines: ['Stadia.StamenTonerLines', undefined],
      StamenTonerLabels: ['Stadia.StamenTonerLabels', undefined],
      StamenTonerLite: ['Stadia.StamenTonerLite', undefined],
      StamenTonerDark: ['Stadia.StamenTonerDark', undefined],
      StamenTonerBlacklite: ['Stadia.StamenTonerBlacklite', undefined],
      StamenWatercolor: ['Stadia.StamenWatercolor', undefined],
      StamenTerrain: ['Stadia.StamenTerrain', undefined],
      StamenTerrainBackground: ['Stadia.StamenTerrainBackground', undefined],
      StamenTerrainLabels: ['Stadia.StamenTerrainLabels', undefined],
      StamenTerrainLines: ['Stadia.StamenTerrainLines', undefined]
    },
    Thunderforest: {
      OpenCycleMap: ['Thunderforest.OpenCycleMap', { apikey: '' }],
      Transport: ['Thunderforest.Transport', { apikey: '' }],
      TransportDark: ['Thunderforest.TransportDark', { apikey: '' }],
      SpinalMap: ['Thunderforest.SpinalMap', { apikey: '' }],
      Landscape: ['Thunderforest.Landscape', { apikey: '' }],
      Outdoors: ['Thunderforest.Outdoors', { apikey: '' }],
      Pioneer: ['Thunderforest.Pioneer', { apikey: '' }],
      MobileAtlas: ['Thunderforest.MobileAtlas', { apikey: '' }],
      Neighbourhood: ['Thunderforest.Neighbourhood', { apikey: '' }],
      Atlas: ['Thunderforest.Atlas', { apikey: '' }]
    },
    BaseMapDE: {
      Color: ['BaseMapDE.Color', undefined],
      Grey: ['BaseMapDE.Grey', undefined]
    },
    CyclOSM: ['CyclOSM', undefined],
    Jawg: {
      Streets: ['Jawg.Streets', { accessToken: '' }],
      Terrain: ['Jawg.Terrain', { accessToken: '' }],
      Lagoon: ['Jawg.Lagoon', { accessToken: '' }],
      Sunny: ['Jawg.Sunny', { accessToken: '' }],
      Dark: ['Jawg.Dark', { accessToken: '' }],
      Light: ['Jawg.Light', { accessToken: '' }],
      Matrix: ['Jawg.Matrix', { accessToken: '' }]
    },
    MapBox: ['MapBox', { accessToken: '' }],
    MapTiler: {
      Streets: ['MapTiler.Streets', { key: '' }],
      Basic: ['MapTiler.Basic', { key: '' }],
      Bright: ['MapTiler.Bright', { key: '' }],
      Pastel: ['MapTiler.Pastel', { key: '' }],
      Positron: ['MapTiler.Positron', { key: '' }],
      Hybrid: ['MapTiler.Hybrid', { key: '' }],
      Toner: ['MapTiler.Toner', { key: '' }],
      Topo: ['MapTiler.Topo', { key: '' }],
      Voyager: ['MapTiler.Voyager', { key: '' }],
      Ocean: ['MapTiler.Ocean', { key: '' }],
      Backdrop: ['MapTiler.Backdrop', { key: '' }],
      Dataviz: ['MapTiler.Dataviz', { key: '' }],
      DatavizLight: ['MapTiler.DatavizLight', { key: '' }],
      DatavizDark: ['MapTiler.DatavizDark', { key: '' }],
      Aquarelle: ['MapTiler.Aquarelle', { key: '' }],
      Landscape: ['MapTiler.Landscape', { key: '' }],
      Openstreetmap: ['MapTiler.Openstreetmap', { key: '' }],
      Outdoor: ['MapTiler.Outdoor', { key: '' }],
      Satellite: ['MapTiler.Satellite', { key: '' }],
      Winter: ['MapTiler.Winter', { key: '' }]
    },
    TomTom: {
      Basic: ['TomTom.Basic', { apikey: '' }],
      Hybrid: ['TomTom.Hybrid', { apikey: '' }],
      Labels: ['TomTom.Labels', { apikey: '' }]
    },
    Esri: {
      WorldStreetMap: ['Esri.WorldStreetMap', undefined],
      WorldTopoMap: ['Esri.WorldTopoMap', undefined],
      WorldImagery: ['Esri.WorldImagery', undefined],
      WorldTerrain: ['Esri.WorldTerrain', undefined],
      WorldShadedRelief: ['Esri.WorldShadedRelief', undefined],
      WorldPhysical: ['Esri.WorldPhysical', undefined],
      OceanBasemap: ['Esri.OceanBasemap', undefined],
      NatGeoWorldMap: ['Esri.NatGeoWorldMap', undefined],
      WorldGrayCanvas: ['Esri.WorldGrayCanvas', undefined]
    },
    HERE: {
      exploreDay: ['HERE.exploreDay', { apiKey: '' }],
      liteDay: ['HERE.liteDay', { apiKey: '' }],
      logisticsDay: ['HERE.logisticsDay', { apiKey: '' }],
      topoDay: ['HERE.topoDay', { apiKey: '' }],
      logisticsNight: ['HERE.logisticsNight', { apiKey: '' }],
      exploreNight: ['HERE.exploreNight', { apiKey: '' }],
      topoNight: ['HERE.topoNight', { apiKey: '' }],
      liteNight: ['HERE.liteNight', { apiKey: '' }],
      exploreSatelliteDay: ['HERE.exploreSatelliteDay', { apiKey: '' }],
      liteSatelliteDay: ['HERE.liteSatelliteDay', { apiKey: '' }],
      logisticsSatelliteDay: ['HERE.logisticsSatelliteDay', { apiKey: '' }],
      basicMap: ['HERE.basicMap', { apiKey: '' }],
      mapLabels: ['HERE.mapLabels', { apiKey: '' }],
      trafficFlow: ['HERE.trafficFlow', { apiKey: '' }],
      carnavDayGrey: ['HERE.carnavDayGrey', { apiKey: '' }],
      hybridDay: ['HERE.hybridDay', { apiKey: '' }],
      hybridDayMobile: ['HERE.hybridDayMobile', { apiKey: '' }],
      hybridDayTransit: ['HERE.hybridDayTransit', { apiKey: '' }],
      hybridDayGrey: ['HERE.hybridDayGrey', { apiKey: '' }],
      pedestrianDay: ['HERE.pedestrianDay', { apiKey: '' }],
      pedestrianNight: ['HERE.pedestrianNight', { apiKey: '' }],
      satelliteDay: ['HERE.satelliteDay', { apiKey: '' }],
      terrainDay: ['HERE.terrainDay', { apiKey: '' }],
      terrainDayMobile: ['HERE.terrainDayMobile', { apiKey: '' }]
    },
    FreeMapSK: ['FreeMapSK', undefined],
    MtbMap: ['MtbMap', undefined],
    CartoDB: {
      Positron: ['CartoDB.Positron', { apikey: '' }],
      PositronNoLabels: ['CartoDB.PositronNoLabels', { apikey: '' }],
      PositronOnlyLabels: ['CartoDB.PositronOnlyLabels', { apikey: '' }],
      DarkMatter: ['CartoDB.DarkMatter', { apikey: '' }],
      DarkMatterNoLabels: ['CartoDB.DarkMatterNoLabels', { apikey: '' }],
      DarkMatterOnlyLabels: ['CartoDB.DarkMatterOnlyLabels', { apikey: '' }],
      Voyager: ['CartoDB.Voyager', { apikey: '' }],
      VoyagerNoLabels: ['CartoDB.VoyagerNoLabels', { apikey: '' }],
      VoyagerOnlyLabels: ['CartoDB.VoyagerOnlyLabels', { apikey: '' }],
      VoyagerLabelsUnder: ['CartoDB.VoyagerLabelsUnder', { apikey: '' }]
    },
    HikeBike: {
      HikeBike: ['HikeBike.HikeBike', undefined],
      HillShading: ['HikeBike.HillShading', undefined]
    },
    BasemapAT: {
      basemap: ['BasemapAT.basemap', undefined],
      grau: ['BasemapAT.grau', undefined],
      overlay: ['BasemapAT.overlay', undefined],
      terrain: ['BasemapAT.terrain', undefined],
      surface: ['BasemapAT.surface', undefined],
      highdpi: ['BasemapAT.highdpi', undefined],
      orthofoto: ['BasemapAT.orthofoto', undefined]
    },
    nlmaps: {
      standaard: ['nlmaps.standaard', undefined],
      pastel: ['nlmaps.pastel', undefined],
      grijs: ['nlmaps.grijs', undefined],
      water: ['nlmaps.water', undefined],
      luchtfoto: ['nlmaps.luchtfoto', undefined]
    },
    NASAGIBS: {
      ModisTerraTrueColorCR: ['NASAGIBS.ModisTerraTrueColorCR', undefined],
      ModisTerraBands367CR: ['NASAGIBS.ModisTerraBands367CR', undefined],
      ViirsEarthAtNight2012: ['NASAGIBS.ViirsEarthAtNight2012', undefined],
      ModisTerraLSTDay: ['NASAGIBS.ModisTerraLSTDay', undefined],
      ModisTerraSnowCover: ['NASAGIBS.ModisTerraSnowCover', undefined],
      ModisTerraAOD: ['NASAGIBS.ModisTerraAOD', undefined],
      ModisTerraChlorophyll: ['NASAGIBS.ModisTerraChlorophyll', undefined]
    },
    NLS: {
      osgb63k1885: ['NLS.osgb63k1885', { apikey: '' }],
      osgb1888: ['NLS.osgb1888', { apikey: '' }],
      osgb10k1888: ['NLS.osgb10k1888', { apikey: '' }],
      osgb1919: ['NLS.osgb1919', { apikey: '' }],
      osgb25k1937: ['NLS.osgb25k1937', { apikey: '' }],
      osgb63k1955: ['NLS.osgb63k1955', { apikey: '' }],
      oslondon1k1893: ['NLS.oslondon1k1893', { apikey: '' }]
    },
    GeoportailFrance: {
      plan: ['GeoportailFrance.plan', undefined],
      parcels: ['GeoportailFrance.parcels', undefined],
      orthos: ['GeoportailFrance.orthos', undefined]
    },
    OneMapSG: {
      Default: ['OneMapSG.Default', undefined],
      Night: ['OneMapSG.Night', undefined],
      Original: ['OneMapSG.Original', undefined],
      Grey: ['OneMapSG.Grey', undefined],
      LandLot: ['OneMapSG.LandLot', undefined]
    },
    USGS: {
      USTopo: ['USGS.USTopo', undefined],
      USImagery: ['USGS.USImagery', undefined],
      USImageryTopo: ['USGS.USImageryTopo', undefined]
    },
    AzureMaps: {
      MicrosoftImagery: ['AzureMaps.MicrosoftImagery', { subscriptionKey: '' }],
      MicrosoftBaseDarkGrey: ['AzureMaps.MicrosoftBaseDarkGrey', { subscriptionKey: '' }],
      MicrosoftBaseRoad: ['AzureMaps.MicrosoftBaseRoad', { subscriptionKey: '' }],
      MicrosoftBaseHybridRoad: ['AzureMaps.MicrosoftBaseHybridRoad', { subscriptionKey: '' }],
      MicrosoftTerraMain: ['AzureMaps.MicrosoftTerraMain', { subscriptionKey: '' }],
      MicrosoftWeatherInfraredMain: ['AzureMaps.MicrosoftWeatherInfraredMain', { subscriptionKey: '' }],
      MicrosoftWeatherRadarMain: ['AzureMaps.MicrosoftWeatherRadarMain', { subscriptionKey: '' }]
    },
    SwissFederalGeoportal: {
      NationalMapColor: ['SwissFederalGeoportal.NationalMapColor', undefined],
      NationalMapGrey: ['SwissFederalGeoportal.NationalMapGrey', undefined],
      SWISSIMAGE: ['SwissFederalGeoportal.SWISSIMAGE', undefined]
    },
    TopPlusOpen: {
      Color: ['TopPlusOpen.Color', undefined],
      Grey: ['TopPlusOpen.Grey', undefined]
    }
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

    // All selected providers are usable without an API key.
    this.namedBasemapLayers.light.leafletProvider = [
      BaseMapLayers.leafletProviderBaseLayers.Esri.WorldGrayCanvas[0],
      { maxNativeZoom: 16, maxZoom: Spatial.mapOptions.maxZoom }
    ];

    this.namedBasemapLayers.dark.leafletProvider = [
      BaseMapLayers.leafletProviderBaseLayers.Esri.WorldGrayCanvas[0],
      {
        className: 'dark-basemap',
        maxNativeZoom: 16,
        maxZoom: Spatial.mapOptions.maxZoom
      }
    ];

    this.namedBasemapLayers.roads.leafletProvider =
      BaseMapLayers.leafletProviderBaseLayers.OpenStreetMap.Mapnik;

    this.namedBasemapLayers.physical.leafletProvider = [
      BaseMapLayers.leafletProviderBaseLayers.Esri.WorldPhysical[0],
      { maxNativeZoom: 8, maxZoom: Spatial.mapOptions.maxZoom }
    ];

    this.namedBasemapLayers.terrain.leafletProvider = [
      BaseMapLayers.leafletProviderBaseLayers.OpenTopoMap[0],
      { maxNativeZoom: 17, maxZoom: Spatial.mapOptions.maxZoom }
    ];

    this.namedBasemapLayers.satellite.leafletProvider =
      BaseMapLayers.leafletProviderBaseLayers.Esri.WorldImagery;

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

export { BaseMapLayers };

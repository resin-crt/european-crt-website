
var AppData = AppData || {};


AppData.indicatorMetadata = {
  "I001": {
    "name": "I001",
    "description": "Mean temperature (RCP 8.5)",
    "unit": "°C",
    "details": "Mean temperature is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference in daily mean temperature between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Projected change in daily mean temperature is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can be used to enhance understanding of how the climate of the NUTS3 area is projected to change over the coming decades.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 2,
    "group": "Heat Stress",
    "groupSort": 2,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I002": {
    "name": "I002",
    "description": "Minimum temperature (RCP 8.5)",
    "unit": "°C",
    "details": "Minimum temperature is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference in minimum temperature between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Projected change in minimum temperature is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can be considered alongside other low temperature related indicators (e.g. frost days and ice days) to demonstrate how low temperature related hazards may evolve in the NUTS3 area over the coming decades.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 12,
    "group": "Extreme cold",
    "groupSort": 12,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I003": {
    "name": "I003",
    "description": "Maximum temperature (RCP 8.5)",
    "unit": "°C",
    "details": "Maximum temperature is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference in maximum temperature between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Projected change in maximum temperature is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can be considered alongside other high temperature related indicators (e.g. heat wave days) to demonstrate how high temperature related hazards may evolve in the NUTS3 area over the coming decades.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 4,
    "group": "Heat Stress",
    "groupSort": 4,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I004": {
    "name": "I004",
    "description": "Frost days (RCP 8.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of days with a minimum temperature of less than 0°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). The 0°C temperature threshold for frost days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of frost days is a potentially significant issue for the NUTS3 area. The number of frost days is decreasing across Europe, and the impacts of this shift may be positive or negative depending on the location being considered and related factors including the nature of dominant industries and land uses.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "int",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 14,
    "group": "Extreme cold",
    "groupSort": 14,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I005": {
    "name": "I005",
    "description": "Summer days (RCP 8.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of days with a maximum temperature more than 25°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). The 25°C temperature threshold for summer days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The supporting statistical data (the Z-Score) provides further information on this indicator in the context of the NUTS3 area. Although the summer days threshold of 25°C does not pose a threat to the majority of people and infrastructure, it can be considered alongside other heat-related indicators to better understand projected changes in temperature and related hazards in the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "int",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 6,
    "group": "Heat Stress",
    "groupSort": 6,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I006": {
    "name": "I006",
    "description": "Tropical nights (RCP 8.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of nights where the minimum temperature does not drop below 20°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). The 20°C temperature threshold for tropical nights is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of tropical nights is a potentially significant issue for the NUTS3 area. The tropical nights indicator is used by the <a href=\"https://www.eea.europa.eu/publications/urban-adaptation-to-climate-change\" target=\"_cf\">European Environment Agency</a> who note that their occurrence is a crucial factor influencing the degree of health impacts associated with high temperatures in urban areas. The level of risk to people in the NUTS3 area from tropical nights (and associated heat wave days) will depend on factors including the proportion of elderly and young people in the population, groups who are particularly susceptible to harm from high temperatures. Indicator data on these factors is available within the typology portal.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "int",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 8,
    "group": "Heat Stress",
    "groupSort": 8,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I007": {
    "name": "I007",
    "description": "Ice days (RCP 8.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of days with a maximum temperature of less than 0°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). The 0°C temperature threshold for ice days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of ice days is a potentially significant issue for the NUTS3 area. The number of ice days is decreasing across Europe, and the impacts of this shift may be positive or negative depending on the location being considered and related factors including the nature of dominant industries and land uses.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "int",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 16,
    "group": "Extreme cold",
    "groupSort": 16,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I008": {
    "name": "I008",
    "description": "Heat waves (RCP 8.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of days with a maximum temperature of more than 35°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). There is no universal standard definition for a heat wave, although they are generally regarded as periods of extremely high temperature that exceeds a certain threshold (which varies depending on location and sector being considered) for a set number of days. Heat waves can negatively impact on people, ecosystems and infrastructure. The severity of impacts will depend on factors including the degree to which they are exposed to high temperatures and their vulnerability to this hazard. Vulnerability to heat waves is influenced by factors including the proportion of elderly and young people in the population and the extent of green space cover in urban areas. Indicator data on both of these factors is available within the typology portal. The severity and duration of the heat wave will also influence levels of associated risks. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of heat waves is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "int",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 10,
    "group": "Heat Stress",
    "groupSort": 10,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I009": {
    "name": "I009",
    "description": "Total wet-day precipitation (RCP 8.5)",
    "unit": "mm",
    "details": "Total wet-day precipitation is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the cumulated precipitation for days with precipitation greater than or equal to 1mm. The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Projected change in total wet day precipitation is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can enhance understanding of how the climate of the NUTS3 area is projected to change over the coming decades.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "int",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 18,
    "group": "Fluvial and Pluvial Flooding",
    "groupSort": 38,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I010": {
    "name": "I010",
    "description": "Consecutive dry days (RCP 8.5)",
    "unit": "Number of days",
    "details": "Consecutive dry days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of consecutive dry days with precipitation less than 1mm. The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of consecutive dry days is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "int",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 26,
    "group": "Drought",
    "groupSort": 18,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I011": {
    "name": "I011",
    "description": "Consecutive wet days (RCP 8.5)",
    "unit": "Number of days",
    "details": "Consecutive wet days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of consecutive wet days with precipitation greater than or equal to 1mm. The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Projected change in consecutive wet days is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can enhance understanding of how the climate of the NUTS3 area is projected to change over the coming decades. Considering this indicator alongside other related indicators can support this process. For example, where consecutive wet days are projected to increase, in addition to increases in heavy and very heavy precipitation days, this indicates that flood hazards may become more common within the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "int",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 20,
    "group": "Fluvial and Pluvial Flooding",
    "groupSort": 40,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I012": {
    "name": "I012",
    "description": "Heavy precipitation days (RCP 8.5)",
    "unit": "Number of days",
    "details": "Heavy precipitation days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of days with precipitation greater than or equal to 10mm. The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Where the frequency of heavy precipitation days is projected to increase, this indicates that flood hazards may also increase (although flooding is driven by multiple other factors including land use change). The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of heavy precipitation days is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "int",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 22,
    "group": "Fluvial and Pluvial Flooding",
    "groupSort": 42,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I013": {
    "name": "I013",
    "description": "Very heavy precipitation days (RCP 8.5)",
    "unit": "Number of days",
    "details": "Very heavy precipitation days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of days with precipitation greater than or equal to 20mm. The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Where the frequency of very heavy precipitation days is projected to increase, this indicates that flood hazards may also increase (although flooding is driven by multiple other factors including land use change). The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of very heavy precipitation days is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "type": "int",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 24,
    "group": "Fluvial and Pluvial Flooding",
    "groupSort": 44,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I014": {
    "name": "I014",
    "description": "Coastal hazard",
    "unit": "%",
    "details": "% of total length of NUTS3 unit coastline in km that is exposed to a 1 in 100 year coastal storm surge and exposed to 1 meter sea level rise.",
    "source": "1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 28,
    "group": "Coastal Flooding",
    "groupSort": 20,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I015": {
    "name": "I015",
    "description": "Drought hazard",
    "unit": "%",
    "details": "To be completed",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 29,
    "group": "Drought",
    "groupSort": 19,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I016": {
    "name": "I016",
    "description": "Wildfire hazard",
    "unit": "%",
    "details": "% of total area of the NUTS3 unit covered by burning.",
    "source": "Use Corine land cover data 2012 to identify the percentage of land in each NUTS 3 area that is classified as ‘burnt areas’.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 27,
    "group": "Other",
    "groupSort": 56,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I017": {
    "name": "I017",
    "description": "Length of major road network in NUTS3 unit.",
    "unit": "Km",
    "details": "This indicator shows the length of major road network in NUTS3 unit.  Major roads are defined as ‘Highways’ and include ‘motorway’, ‘trunk’, ‘primary’, ‘secondary’ and ‘tertiary’ segments of the network. Redundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. Where road length is higher than average in a NUTS 3 area, this may signal that there is redundancy in the road network and alternative routes can be found.  This is also important from an emergency management point of view as during an extreme event, alternative means of providing key services and moving people may be found.\n",
    "source": "The road network was sourced from open street map (2017). Major roads are defined as ‘Highways’ and include ‘motorway’, ‘trunk’, ‘primary’, ‘secondary’ and ‘tertiary’ segments of the network.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 67,
    "group": "Other",
    "groupSort": 64,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I018": {
    "name": "I018",
    "description": "Length of railway network in NUTS3 unit.",
    "unit": "Km",
    "details": "Length of railway network in NUTS3 unit. The rail network was sourced from open street map (2017) and includes standard gauge rail, subways, trams and light rail segments of the network.\nRedundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. Where rail length is higher than average in a NUTS 3 area, this may signal that there is redundancy in the rail network and alternative routes can be found.  This is also important from an emergency management point of view as during an extreme event, alternative means of providing key services and moving people may be found.\n",
    "source": "The rail network was sourced from open street map (2017) and includes standard gauge rail, subways, trams and light rail segments of the network.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 68,
    "group": "Other",
    "groupSort": 65,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I019": {
    "name": "I019",
    "description": "Density of major road intersections per km2 of the NUTS3 unit.",
    "unit": "Ratio",
    "details": "This indicator shows the density of major road intersections per km2 of the NUTS3 unit. Redundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. Where there are more road intersections than the EU average  in a NUTS 3 area, this may signal that there is redundancy in the road network and alternative routes can be found.  This is also important from an emergency management point of view as during an extreme event, alternative means of providing key services and moving people may be found.",
    "source": "Calculated as intersections in ArcGIS Network Analyst using open street map road data (2017).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 69,
    "group": "Other",
    "groupSort": 66,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I020": {
    "name": "I020",
    "description": "Density of transport nodes per km2 of the NUTS3 unit.",
    "unit": "Ratio",
    "details": "This indicator shows the density of transport nodes per km2 of the NUTS3 unit. Redundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. Where there are more transport nodes than the EU average  in a NUTS 3 area, this may signal that there is redundancy in the overall transport network and alternative routes/modes of travel can be found.  This is also important from an emergency management point of view as during an extreme event, alternative means of providing key services and moving people may be found.",
    "source": "Transport nodes were sourced from open street map (2017) and excluded taxis, airports and ports.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 70,
    "group": "Other",
    "groupSort": 67,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I021": {
    "name": "I021",
    "description": "Number of airports per head of population in the NUTS3 unit.",
    "unit": "Number of airports per 1000 head of population",
    "details": "This indicator shows the number of airports per head of population in the NUTS3 unit.  Redundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. Where there are more transport nodes than the EU average  in a NUTS 3 area, this may signal that other airports can help to provide alternative routes/modes of travel.  This is also important from an emergency management point of view as during an extreme event, alternative means of providing key services and moving people may be found. \n",
    "source": "Airport nodes were sourced from the GISCO repository (Eurostat 2013). These were weighted by population data sourced from EUROSTAT (demo_r_d3dens).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 71,
    "group": "Other",
    "groupSort": 68,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I022": {
    "name": "I022",
    "description": "Number of ports per head of population in the NUTS3 unit.",
    "unit": "Number of ports per 1000 head of population",
    "details": "This indicator shows the number of ports per head of population in the NUTS3 unit. Redundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. Where there are more ports than the EU average  in a NUTS 3 area, this may signal that there is redundancy and alternative routes/methods of moving goods around can be found.  ",
    "source": "Port nodes were sourced from the GISCO repository (Eurostat 2013). These were weighted by population data sourced from EUROSTAT (demo_r_d3dens).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 72,
    "group": "Other",
    "groupSort": 69,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I023": {
    "name": "I023",
    "description": "Number of hospitals per head of population in the NUTS3 unit.",
    "unit": "Number of hospitals per 1000 head of population",
    "details": "This indicator shows the number of hospitals per head of population in the NUTS3 unit.The ability for the population to access hospitals and other medical units during an extreme weather event is of paramount importance. Where there are lower than average numbers of hospitals per head of the population, this may indicate that an area will experience intense pressure in ensuring that the population receive necessary medical support during, for example, a flood or a heatwave.  ",
    "source": "Hospital locations were sourced from open street map (2017). These were weighted by population data sourced from EUROSTAT (demo_r_d3dens).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 73,
    "group": "Other",
    "groupSort": 70,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I024": {
    "name": "I024",
    "description": "Power plants per head of population in the NUTS3 unit.",
    "unit": "Power plants per head of population",
    "details": "This indicator shows the power plants per head of population in the NUTS3 unit. Redundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. If there are more powerplants in a NUTS3 area than the EU average, this may mean that alternative ways of providing energy to a given population may be found. ",
    "source": "Power plant facility locations were sourced from Enipedia and does not distinguish between different types of power generation (e.g. coal, renewable). These were weighted by population data sourced from EUROSTAT (demo_r_d3dens).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 74,
    "group": "Other",
    "groupSort": 71,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I025": {
    "name": "I025",
    "description": "Fixed broadband coverage",
    "unit": "To be completed",
    "details": "This indicator shows fixed broadband coverage. Fixed broadband data has been sourced from Point Topic’s Point Topic’s European Broadband Markets Service ocial media is becoming an increasingly common way of sharing risk information and warnings.  Therefore,  access to decent broadband is important in order to support the adaptive capacity of a given area. There may be more locally specific measures available that will give a greater insight into what this indicator is measuring e.g. % of population with access to a smart phone, and so on. ",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 75,
    "group": "Other",
    "groupSort": 72,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I026": {
    "name": "I026",
    "description": "Next Generation Access (NGA) - broadband",
    "unit": "To be completed",
    "details": "Next Generation Access (NGA) provision has been sourced from Point Topic’s European Broadband Markets Service  . NGA are access networks which consist wholly or in part of optical elements and which are capable of delivering broadband access services with enhanced characteristics (such as higher throughput) as compared to those provided over already existing copper networks. In most cases NGAs are the result of an upgrade of an already existing copper or co-axial access network .Next Generation Access (NGA) provision has been variable across Europe dependent on a country’s need. Essentially NGA provides the infrastructure to allow superfast broadband speeds of up to 100MB. Increasing population densities, for example, are thought to indicate a need for faster broadband access in the future. Therefore, given the reliance on social media for weather, risk and crisis information, superfast broadband may increase an area’s adaptive capacity. Low NGA provision may indicate that policies should be put in place to prioritise NGA provision in the future. ",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Other",
    "domainSort": 82,
    "group": "Other",
    "groupSort": 73,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I030": {
    "name": "I030",
    "description": "Population in settlements exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total population of the NUTS3 area living in settlements that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight the specific elements of the population living in settlements that would be affected in the event of a flood. Further, it does not account for flood defences that may protect certain locations. More localised flood risk assessments would therefore be needed to establish which specific locations would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of populations living in settlements to fluvial flooding is a significant issue for the NUTS3 area.",
    "source": "GHSL Population Source 100m resolution / Settlement defined through GHSL Urban Centres data / JRC flood maps 100 year return period.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 32,
    "group": "Fluvial Flooding",
    "groupSort": 29,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I032": {
    "name": "I032",
    "description": "Road infrastructure exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total length of road infrastructure in the NUTS3 area (major roads and major road intersections) that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight the specific elements of road infrastructure that would be affected in the event of a flood. Further, it does not account for flood defences that may protect certain stretches of road infrastructure. More localised flood risk assessments would therefore be needed to establish which specific infrastructure elements would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to road infrastructure is a significant issue for the NUTS3 area.",
    "source": "The road network was sourced from open street map (2017). Major roads are defined as ‘Highways’ and include ‘motorway’, ‘trunk’, ‘primary’, ‘secondary’ and ‘tertiary’ segments of the network. Calculated as intersections in ArcGIS Network Analyst using open street map road data (2017). The road network was intersected with JRC 1-100 year return period flood maps.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 35,
    "group": "Fluvial Flooding",
    "groupSort": 30,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I033": {
    "name": "I033",
    "description": "Rail network exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total length of the rail network in the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight the specific elements of the rail network that would be affected in the event of a flood. Further, it does not account for flood defence infrastructure that may protect certain stretches of rail line. More localised flood risk assessments would therefore be needed to establish which specific elements of the rail network would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to the rail network is a significant issue for the NUTS3 area.",
    "source": "The rail network was sourced from open street map (2017) and includes standard gauge rail, subways, trams and light rail segments of the network. The rail network was intersected with JRC 1-100 year return period flood maps.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 36,
    "group": "Fluvial Flooding",
    "groupSort": 31,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I035": {
    "name": "I035",
    "description": "Transport nodes exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total number of transport nodes in the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. Transport nodes include tram, rail and bus stations, airports and ports. This indicator does not highlight specific transport nodes that would be affected in the event of a flood. Further, it does not account for flood defence infrastructure that may protect certain transport nodes. More localised flood risk assessments would therefore be needed to establish which transport nodes would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to transport nodes is a significant issue for the NUTS3 area.",
    "source": "Transport nodes calculated from Open Street Map (2017) and intersected with JRC 1-100 year return period flood maps.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 41,
    "group": "Fluvial Flooding",
    "groupSort": 32,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I036": {
    "name": "I036",
    "description": "Airports exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total number of airports in the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight specific airports that would be affected in the event of a flood. Further, it does not account for flood defence infrastructure that may protect certain airports. More localised flood risk assessments would therefore be needed to establish which airports would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to airports is a significant issue for the NUTS3 area.",
    "source": "Airport nodes were sourced from the GISCO repository (Eurostat 2013). The nodes were intersected with JRC 1-100 year return period flood maps.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 44,
    "group": "Fluvial Flooding",
    "groupSort": 33,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I037": {
    "name": "I037",
    "description": "Ports exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total number of ports in the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight specific ports that would be affected in the event of a flood. Further, it does not account for flood defence infrastructure that may protect certain ports. More localised flood risk assessments would therefore be needed to establish which ports would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to ports is a significant issue for the NUTS3 area.",
    "source": "Port nodes were sourced from the GISCO repository (Eurostat 2013). The nodes were intersected with JRC 1-100 year return period flood maps.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 50,
    "group": "Fluvial Flooding",
    "groupSort": 35,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I038": {
    "name": "I038",
    "description": "Hospitals exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total number of hospitals in the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight specific hospitals that would be affected in the event of a flood. Further, it does not account for flood defence infrastructure that may protect certain hospitals. More localised flood risk assessments would therefore be needed to establish which hospitals would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to hospitals is a significant issue for the NUTS3 area.",
    "source": "Hospital locations were sourced from open street map (2017). The nodes were intersected with JRC 1-100 year return period flood maps.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 53,
    "group": "Fluvial Flooding",
    "groupSort": 36,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I039": {
    "name": "I039",
    "description": "Power plants exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total number of power plants in the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight specific power plants that would be affected in the event of a flood. Further, it does not account for flood defence infrastructure that may protect certain power plants. More localised flood risk assessments would therefore be needed to establish which power plants would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to power plants is a significant issue for the NUTS3 area.",
    "source": "Power plant facility locations were sourced from Enipedia and does not distinguish between different types of power generation (e.g. coal, renewable). The nodes were intersected with JRC 1-100 year return period flood maps.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 47,
    "group": "Fluvial Flooding",
    "groupSort": 34,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I040": {
    "name": "I040",
    "description": "Population in settlements exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the proportion of the total population of the NUTS3 area living in settlements located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific elements of the population living in settlements that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain locations from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific locations would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of populations living in settlements to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "GHSL Population grids / Settlement defined through GHSL Urban Centres data / These were intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 33,
    "group": "Coastal Flooding",
    "groupSort": 21,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I042": {
    "name": "I042",
    "description": "Road infrastructure exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the proportion of the total length of road infrastructure in the NUTS3 area (major roads and major road intersections) that is located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific elements of the road infrastructure that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain road infrastructure from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific infrastructure elements would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of road infrastructure to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "The road network was sourced from open street map (2017). Major roads are defined as ‘Highways’ and include ‘motorway’, ‘trunk’, ‘primary’, ‘secondary’ and ‘tertiary’ segments of the network. Calculated as intersections in ArcGIS Network Analyst using open street map road data (2017). The road network was intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 37,
    "group": "Coastal Flooding",
    "groupSort": 22,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I043": {
    "name": "I043",
    "description": "Rail network exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the proportion of the total length of the rail network in the NUTS3 area (major roads and major road intersections) that is located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific elements of the rail network that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain elements of the rail network from coastal hazards. More localised flood risk assessments would therefore be needed to establish which parts of the rail network would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of the rail network to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "The rail network was sourced from open street map (2017) and includes standard gauge rail, subways, trams and light rail segments of the network. The rail network was intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 39,
    "group": "Coastal Flooding",
    "groupSort": 23,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I045": {
    "name": "I045",
    "description": "Transport nodes exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of transport nodes in the NUTS3 area that are located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. Transport nodes include tram, rail and bus stations, airports and ports. This indicator does not highlight the specific transport nodes that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain transport nodes from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific transport nodes would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of transport nodes to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "Transport nodes were sourced from open street map (2017). The intersections were intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). ections in ArcGIS Network Analyst using open street map road data (2017). The road network was intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 42,
    "group": "Coastal Flooding",
    "groupSort": 24,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I046": {
    "name": "I046",
    "description": "Airports exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of airports in the NUTS3 area that are located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific airports that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain airports from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific airports would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of airports to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "Airport nodes were sourced from the GISCO repository (Eurostat 2013). The nodes were intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 45,
    "group": "Coastal Flooding",
    "groupSort": 25,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I047": {
    "name": "I047",
    "description": "Ports exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of ports in the NUTS3 area that are located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific ports that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain ports from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific ports would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of ports to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "Port nodes were sourced from the GISCO repository (Eurostat 2013). The nodes were intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 51,
    "group": "Coastal Flooding",
    "groupSort": 27,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I048": {
    "name": "I048",
    "description": "Hospitals exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of hospitals in the NUTS3 area that are located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific hospitals that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain hospitals from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific hospitals would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of hospitals to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "Hospital locations were sourced from open street map (2017). The nodes were intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps).  GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 54,
    "group": "Coastal Flooding",
    "groupSort": 28,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I049": {
    "name": "I049",
    "description": "Power plants exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of power plants in the NUTS3 area that are located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific power plants that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain power plants from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific power plants would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of power plants to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "Power plant facility locations were sourced from Enipedia and does not distinguish between different types of power generation (e.g. coal, renewable). The nodes were intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 48,
    "group": "Coastal Flooding",
    "groupSort": 26,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I050": {
    "name": "I050",
    "description": "Population in settlements exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total population of the NUTS3 area living in settlements located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of population in settlements to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 34,
    "group": "Other - Landslide",
    "groupSort": 47,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I052": {
    "name": "I052",
    "description": "Road infrastructure exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total length of road infrastructure in the NUTS3 area (major roads and major road intersections) that is located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of road infrastructure to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 38,
    "group": "Other - Landslide",
    "groupSort": 48,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I053": {
    "name": "I053",
    "description": "Rail network exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total length of the rail network in the NUTS3 area that is located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of the rail network to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 40,
    "group": "Other - Landslide",
    "groupSort": 49,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I055": {
    "name": "I055",
    "description": "Transport nodes exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of transport nodes in the NUTS3 area that are located in areas that are susceptible to landslide hazard. Transport nodes include tram, rail and bus stations, airports and ports. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of transport nodes to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 43,
    "group": "Other - Landslide",
    "groupSort": 50,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I056": {
    "name": "I056",
    "description": "Airports exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number airports in the NUTS3 area that are located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of airports to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 46,
    "group": "Other - Landslide",
    "groupSort": 51,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I057": {
    "name": "I057",
    "description": "Ports exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of ports in the NUTS3 area that are located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of ports to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 52,
    "group": "Other - Landslide",
    "groupSort": 53,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I058": {
    "name": "I058",
    "description": "Hospitals exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of hospitals in the NUTS3 area that are located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of hospitals to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 55,
    "group": "Other - Landslide",
    "groupSort": 54,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I059": {
    "name": "I059",
    "description": "Power plants exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of power plants in the NUTS3 area that are located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of power plants to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainSort": 49,
    "group": "Other - Landslide",
    "groupSort": 52,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I060": {
    "name": "I060",
    "description": "Average population density",
    "unit": "Ratio",
    "details": "Averaged population density for the NUTS3 unit calculated over period 2010-2015.",
    "source": "Population data sourced from Eurostat (demo_r_d3dens). Calculated as total population/area in km2",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainSort": 56,
    "group": "Other",
    "groupSort": 55,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I061": {
    "name": "I061",
    "description": "Total population living in urban areas /area in km2",
    "unit": "Ratio",
    "details": "Population density measures the concentration of individuals living in a particular spatial unit. Population density may be considered in tandem with hazard indicators relating to temperature and heatwaves as population density (which can be used as a proxy for the density of the built environment) may indicate more intense urban heat island effects (Swart et al. 2012).  On the other hand, where dense urban populations are supported by good infrastructure and resources, their climate resilience may be increased (UCCRN 2011) ",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainSort": 57,
    "group": "Other",
    "groupSort": 57,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I062": {
    "name": "I062",
    "description": "% of total urban area in NUTS3 unit that is classified as green space (2012 data)",
    "unit": "%",
    "details": "This indicator shows the % of total urban area in NUTS3 unit that is classified as green space (2012 data). There is robust evidence that green spaces can help city’s resilience to the effects of climate change and extreme weather events (Swart et al. 2012).  A lack of green space, as a % of the overall urban area, may indicate that a city is more sensitive to the effects of climate change and extreme weather events as it may lack the absorptive effects of green spaces in a flood, or the evapotranspiration effects of green spaces during a heatwave. Therefore, this indicator should be considered alongside these hazards. In addition, this indicator can also be considered alongside % total change in green space since an existing lack of green space, combined with a decreasing trend, may signal to city planners that more should be done in terms of increasing urban greening.",
    "source": "Corine (2012) green space area as percentage of total urban area (km2). Urban area defined using GHSL Urban Centres.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 77,
    "group": "Other",
    "groupSort": 75,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I063": {
    "name": "I063",
    "description": "% of total land in the NUTS3 unit that is covered by continuous and/or discontinuous urban fabric (2012 data).",
    "unit": "%",
    "details": "This indicator shows the built up urban area based on CORINE data. This includes continuous urban fabric (more than 80% of the land is covered by artificial surface cover), discontinuous urban fabric (where50% - 80% of the land is covered by artificial surface cover) and industrial, commercial and  transport units. There is robust evidence that the amount of artificial areas, such as buildings and other structures, intensifies heat and can exacerbate the urban heat island (UHI) effect. This will make an area more sensitive to the effects of high temperatures and heatwaves",
    "source": "Corine (2012) continuous and discontinuous urban fabric as a percentage of total NUTS 3 area (km2).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 80,
    "group": "Other",
    "groupSort": 78,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I064": {
    "name": "I064",
    "description": "Change in % of total urban area in NUTS3 unit that is classified as green space (2009-2012 data).",
    "unit": "%",
    "details": "This indicator shows the change in % of total urban area in NUTS3 unit that is classified as green space (2009-2012 data).There is robust evidence that green spaces can help city’s resilience to the effects of climate change and extreme weather events (Swart et al. 2012).  Green spaces can help to absorb runoff during a flood. Green spaces can also help to reduce temperature due to evapotranspiration effects. Therefore, this indicator should be considered alongside hazards relating to flood and heat. A decreasing trend in green space, compared to the European average, may indicate increased sensitivity to the effects of these hazards and may signal to city planners that more should be done in terms of increasing urban greening.",
    "source": "Change in Corine (2009-2012) green space area measured as percentage of total urban area (km2). Urban area defined using GHSL Urban Centres.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 79,
    "group": "Other",
    "groupSort": 77,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I065": {
    "name": "I065",
    "description": "Change in % of total land in the NUTS3 unit that is covered by continuous and/or discontinuous urban fabric (2012 data).",
    "unit": "%",
    "details": "This indicator shows the change in the % of the built up urban area based on CORINE data. This  includes continuous urban fabric (more than 80% of the land is covered by artificial surface cover), discontinuous urban fabric (where50% - 80% of the land is covered by artificial surface cover) and industrial, commercial and  transport units. There is robust evidence that the amount of artificial areas, such as buildings and other structures, intensifies heat and can exacerbate the urban heat island (UHI) effect. This will make an area more sensitive to the effects of high temperatures and heatwaves. An increasing trend in built-up areas that is above the European average may indicate that a city is increasing in its sensitivity to high temperatures and heatwaves. ",
    "source": "Change in Corine (2009-2012) continuous and discontinuous urban fabric as a percentage of total NUTS 3 area (km2).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 81,
    "group": "Other",
    "groupSort": 79,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I066": {
    "name": "I066",
    "description": "Soil Moisture Stress",
    "unit": "To be completed",
    "details": "Sensitivity to drought also includes a measure of soil moisture stress. When soil moisture is depleted, e.g. through reduced precipitation, this lack of soil moisture inhibits the effective functioning of natural and managed ecosystems.  The EEA use information on soil moisture content as a proxy for agricultural droughts. This indicator can be used in tandem with historic drought and projected water consumption in order to give an overall sense of the risk of drought to a NUTS 3 region. If soil moisture stress is higher than the European average, then a NUTS 3 region may be more sensitive to drought.",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainSort": 63,
    "group": "Other",
    "groupSort": 80,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I067": {
    "name": "I067",
    "description": "Water Consumption Pressure (2030)",
    "unit": "To be completed",
    "details": "Drought occurs not only because of natural processes, but also because of pressures on the demand for water by users. Water consumption can be increased by a number of factors including a dense population and a period of hot and dry weather. It is important to understand the potential  water consumption pressure  in order to understand the risk of drought (in combination with soil moisture stress and historic instances of drought. If water consumption is higher than the EU average, policy makers may want to consider ‘softer’ measures to reduce user demand in greater detail. ",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainSort": 64,
    "group": "Other",
    "groupSort": 81,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I068": {
    "name": "I068",
    "description": "Priority Allocations (Euros, 2013 - 2015)",
    "unit": "To be completed",
    "details": "Priority allocations and expenditure on EU projects. Sourced from EU InfoRegion.\nThis indicator refers to the amount of Euros received in a NUTS3 region. More details to follow. \n",
    "source": "EU InfoRegio.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 78,
    "group": "Other",
    "groupSort": 76,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I069": {
    "name": "I069",
    "description": "At Risk of Poverty (ARoP)",
    "unit": "To be completed",
    "details": "This indicator shows those living in a household with an 'equivalised disposable income' below 60 % of the national median, after taxes and social transfers (ESPON 2013). This is the European definition of poverty. This indicator is a proxy for deprivation. Those living in deprived areas may be more sensitive to climate change because of poor accommodation and an inability to prepare for an extreme event e.g. lack of insurance (ClimateJust 2014)",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainSort": 65,
    "group": "Other",
    "groupSort": 82,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I070": {
    "name": "I070",
    "description": "% change in population less than 15 years in NUTS3 unit between 2017-2050.",
    "unit": "%",
    "details": "This indicator show projected change in population less than 15 years. This indicator shows how the % of population under 15 may change between 2017 and 2050. This indicator could be considered in the context of heat and flood indicators. Children and babies may be more sensitive during heat waves but there is less evidence about the significance of child deaths during heat waves (Swart et al. 2012). Children are also emotionally impacted upon after a flood and may lose out due to the subsequent instability in place of residence and education (Walker et al. 2010).  Additionally, this indicator may be considered alongside Projected Change in Population over 70 in terms of understanding the age-dependency. For example, if there is a projected decrease in the younger population combined with a projected increase in the older population, there may be differential effects in terms of the impacts of climate change e.g. more sensitivity to heat (ESPON 2011). \n",
    "source": "Sourced from Eurostat (proj_13rpms3).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainSort": 60,
    "group": "Other",
    "groupSort": 60,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I073": {
    "name": "I073",
    "description": "% change in population more than 64 years in NUTS3 unit between 2017-2050.",
    "unit": "%",
    "details": "This indicator shows projected change in population more than 70 years. The relationship between age and heatwaves is well-evidenced. Older people, for example, may have pre-existing health conditions which heighten their sensitivity during a heatwave (Kovats & Kristie 2006). Similarly, older people are more sensitive to the effects of flooding due to a number of reasons. Often, they are socially isolated or tend to live in properties that are sensitive to floods. For this reason, older age is often correlated with increased sensitivity to flood (see Green et al. 1994; Climate Just 2014).  This means that older age is a high confidence indicator across a range of hazards. That said, there is some discrepancy over the precise age when, for example, mortality during a heatwave begins to be significant. For example, Kovats and Hajat (2006, cited in Swart et al. 2012) found that mortality was pronounced in the over-75’s and not significant between 65 and 74. Owing to data availability, this indicator shows over-70s.\n ",
    "source": "Sourced from Eurostat (proj_13rpms3).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainSort": 61,
    "group": "Other",
    "groupSort": 61,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I075": {
    "name": "I075",
    "description": "% change in population through migration in NUTS3 unit between 2017-2050.",
    "unit": "%",
    "details": "This indicator shows the % change in population through migration in NUTS3 unit between 2017-2050.  There is some debate in the literature over the extent to which a population with a high number of recent migrants may indicate increased sensitivity to extreme weather events and climate change because, for example, they may live in sub-standard housing or to communicate ill-health (e.g. Cutter 2003; Kazmierczak and Cavan 2011; Tapia et al. 2015). \nDecreases in migration, when combined with other population indicators such as age, may indicate that there is an aging population.\n",
    "source": "Sourced from Eurostat (proj_13rdbims3).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainSort": 59,
    "group": "Other",
    "groupSort": 59,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I076": {
    "name": "I076",
    "description": "% change in population density in NUTS3 unit between 2017-2050.",
    "unit": "%",
    "details": "Projected Change in Total Population and NUTS 3 Density. Increasing population and density will interact with the effects of climate change and may render a NUTS 3 region more sensitive to the effects of climate change. For example, increased density may interact with high temperatures to increase the urban heat island (UHI) effect. Increased population may put pressure on resources in order to devise strategies for dealing with the effects of climate change. ",
    "source": "Population data sourced from Eurostat (proj_13rpms3) and used to calculate change in population density of NUTS3 areas between 2017 and 2050.",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainSort": 58,
    "group": "Other",
    "groupSort": 58,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I077": {
    "name": "I077",
    "description": "% of total employment in NUTS1 unit.",
    "unit": "%",
    "details": "This indicator shows the employment-population balance. The ratio of jobs to people can be an important indication of economic concerns within an area. When thinking about the way that the employment-population balance works in a given area, there may be particular interactions with climate resilience. For example, where there are more jobs than people (e.g. central London) this may indicate a high number of commuters, which may put pressure on a city’s resources, particularly its transport infrastructure, to deal with extreme weather events. In addition, there may be issues with getting supporting people to fill vacant jobs (e.g. in a hospital) during an extreme weather event when existing staff cannot travel. (Description to be enhanced in the future).",
    "source": "Calculated as percentage of total employment in NUTS1 unit (nama_10r_3empers). Switzerland (Economic activity rate of the permanent resident population aged 15 and above by canton, in 2016 (T 40.02.03.02.03).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 66,
    "group": "Other",
    "groupSort": 63,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I078": {
    "name": "I078",
    "description": "Number of patent applications to the EPO per 1000 population in the NUTS3 unit.",
    "unit": "Number of patent applications to the EPO per 1000 population",
    "details": "This indicator shows the number  of patent applications to the European Patent Office per 1000 population.  Technology and innovation are important in helping a city to adapt to climate change e.g. investment in new flood technologies or building technologies that can help to mitigate heat. The ability of a country or urban area to invest in technological solutions, is thought to be an indicator of its adaptive capacity (Grieving et al. 2011; Swart et al. 2012; Acosta et al. 2013). Therefore, number of patents per year is used as a proxy indicator reflecting this issue. Ideally, the availability of adaptation solutions would be a direct indicator; however, such data is not typically collected on a city-by-city basis.\n",
    "source": "As nominal GDP in billion euros weighted by population data sourced from EUROSTAT (demo_r_d3dens).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainSort": 76,
    "group": "Other",
    "groupSort": 74,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I079": {
    "name": "I079",
    "description": "GVA at basic prices per head of population (2012-2015 data).",
    "unit": "Euro",
    "details": "Gross Value Added (GVA) is defined as output value at basic prices less intermediate consumption valued at purchasers' prices. GVA is calculated before consumption of fixed capital.  The resources that a city has can be a good indicator of a city’s sensitivity in terms of extreme weather events and climate change. If a city has a lower than average GVA, then it may have be more susceptible to damage from all types of extreme weather events. A city with low resources may not be able to adequately address climate change adaptation due to other pressures. ",
    "source": "GVA data sourced from EUROSTAT (nama_10r_3gva) except Switzerland which was sourced from Knoema (https://knoema.com/nama_r_e3gdp/gross-domestic-product-gdp-at-current-market-prices-by-nuts-3-regions?geo=1027030-switzerland).",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainSort": 62,
    "group": "Other",
    "groupSort": 62,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I081": {
    "name": "I081",
    "description": "Fluvial hazard",
    "unit": "%",
    "details": "This indicator shows the percentage of the total area of the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether fluvial flooding is a significant issue for the NUTS3 area. Also, this indicator can be considered alongside others included in the typology portal that show the extent of exposure of people and infrastructure to fluvial flooding in the NUTS3 area.",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 30,
    "group": "Fluvial and Pluvial Flooding",
    "groupSort": 45,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "I082": {
    "name": "I082",
    "description": "Landslide hazard",
    "unit": "%",
    "details": "This indicator draws on NASA’s Global Landslide Susceptibility Map, which identifies the potential for landslides across the Earth’s surface on a scale from slight to severe. This indicator calculates the proportion of all areas that are susceptible to landslide in the NUTS3 area where the potential for landslide is moderate or higher. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether landslide hazard is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas. This can be used alongside the landslide hazard indicator, and also other indicators related to the exposure of people and infrastructure to landslides, to better understand this hazard in the NUTS3 area.",
    "source": "To be completed",
    "type": "double",
    "mIcon": "description",
    "faIcon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainSort": 31,
    "group": "Other - Landslide",
    "groupSort": 46,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": true
  },
  "V1.1": {
    "name": "V1.1",
    "description": "Mean temperature (RCP 4.5)",
    "unit": "°C",
    "type": "double",
    "details": "Mean temperature is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference in daily mean temperature between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Projected change in daily mean temperature is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can enhance understanding of how the climate of the NUTS3 area is projected to change over the coming decades. ",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 1,
    "group": "Heat Stress",
    "groupSort": 1,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  },
  "V10.1": {
    "name": "V10.1",
    "description": "Consecutive dry days (RCP 4.5)",
    "unit": "Number of days",
    "type": "int",
    "details": "Consecutive dry days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of consecutive dry days with precipitation less than 1mm. The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Where the frequency of consecutive dry days is projected to increase this highlights that drought may become more of a threat in the NUTS3 area. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of consecutive dry days is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 25,
    "group": "Drought",
    "groupSort": 17,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  },
  "V11.1": {
    "name": "V11.1",
    "description": "Consecutive wet days (RCP 4.5)",
    "unit": "Number of days",
    "type": "int",
    "details": "Consecutive wet days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of consecutive wet days with precipitation greater than or equal to 1mm. The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Projected change in consecutive wet days is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can enhance understanding of how the climate of the NUTS3 area is projected to change over the coming decades. Considering this indicator alongside other related indicators can support this process. For example, where consecutive wet days are projected to increase, in addition to increases in heavy and very heavy precipitation days, this indicates that flood hazards may become more common within the NUTS3 area. ",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 19,
    "group": "Fluvial and Pluvial Flooding",
    "groupSort": 39,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  },
  "V12.1": {
    "name": "V12.1",
    "description": "Heavy precipitation days (RCP 4.5)",
    "unit": "Number of days",
    "type": "int",
    "details": "Heavy precipitation days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of days with precipitation greater than or equal to 10mm. The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Where the frequency of heavy precipitation days is projected to increase, this indicates that flood hazards may also increase (although flooding is driven by multiple other factors including land use change). The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of heavy precipitation days is a potentially significant issue for the NUTS3 area. ",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 21,
    "group": "Fluvial and Pluvial Flooding",
    "groupSort": 41,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  },
  "V13.1": {
    "name": "V13.1",
    "description": "Very heavy precipitation days (RCP 4.5)",
    "unit": "Number of days",
    "type": "int",
    "details": "Very heavy precipitation days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of days with precipitation greater than or equal to 20mm. The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Where the frequency of very heavy precipitation days is projected to increase, this indicates that flood hazards may also increase (although flooding is driven by multiple other factors including land use change). The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of very heavy precipitation days is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 23,
    "group": "Fluvial and Pluvial Flooding",
    "groupSort": 43,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  },
  "V2.1": {
    "name": "V2.1",
    "description": "Minimum temperature (RCP 4.5)",
    "unit": "°C",
    "type": "double",
    "details": "Minimum temperature is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference in minimum temperature between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Projected change in minimum temperature is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can be considered alongside other low temperature related indicators (e.g. frost days and ice days) to demonstrate how low temperature related hazards may evolve in the NUTS3 area over the coming decades.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 11,
    "group": "Extreme cold",
    "groupSort": 11,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  },
  "V3.1": {
    "name": "V3.1",
    "description": "Maximum temperature (RCP 4.5)",
    "unit": "°C",
    "type": "double",
    "details": "Maximum temperature is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference in maximum temperature between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Projected change in maximum temperature is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can be considered alongside other high temperature related indicators (e.g. heat wave days) to demonstrate how high temperature related hazards may evolve in the NUTS3 area over the coming decades.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 3,
    "group": "Heat Stress",
    "groupSort": 3,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  },
  "V4.1": {
    "name": "V4.1",
    "description": "Frost days (RCP 4.5)",
    "unit": "Number of days",
    "type": "int",
    "details": "This indicator shows the difference in the number of days with a minimum temperature of less than 0°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). The 0°C temperature threshold for frost days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of frost days is a potentially significant issue for the NUTS3 area. The number of frost days is decreasing across Europe, and the impacts of this shift may be positive or negative depending on the location being considered and related factors including the nature of dominant industries and land uses.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 13,
    "group": "Extreme cold",
    "groupSort": 13,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  },
  "V5.1": {
    "name": "V5.1",
    "description": "Summer days (RCP 4.5)",
    "unit": "Number of days",
    "type": "int",
    "details": "This indicator shows the difference in the number of days with a maximum temperature more than 25°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). The 25°C temperature threshold for summer days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The supporting statistical data (the Z-Score) provides further information on this indicator in the context of the NUTS3 area. Although the summer days threshold of 25°C does not pose a threat to the majority of people and infrastructure, it can be considered alongside other heat-related indicators to better understand projected changes in temperature and related hazards in the NUTS3 area. ",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 5,
    "group": "Heat Stress",
    "groupSort": 5,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  },
  "V6.1": {
    "name": "V6.1",
    "description": "Tropical nights (RCP 4.5)",
    "unit": "Number of days",
    "type": "int",
    "details": "This indicator shows the difference in the number of nights where the minimum temperature does not drop below 20°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). The 20°C temperature threshold for tropical nights is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of tropical nights is a potentially significant issue for the NUTS3 area. The tropical nights indicator is used by the <a href=\"https://www.eea.europa.eu/publications/urban-adaptation-to-climate-change\" target=\"_cf\">European Environment Agency</a> who note that their occurrence is a crucial factor influencing the degree of health impacts associated with high temperatures in urban areas. The level of risk to people in the NUTS3 area from tropical nights (and associated heat wave days) will depend on factors including the proportion of elderly and young people in the population, groups who are particularly susceptible to harm from high temperatures. Indicator data on these factors is available within the typology portal.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 7,
    "group": "Heat Stress",
    "groupSort": 7,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  },
  "V7.1": {
    "name": "V7.1",
    "description": "Ice days (RCP 4.5)",
    "unit": "Number of days",
    "type": "int",
    "details": "This indicator shows the difference in the number of days with a maximum temperature of less than 0°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). The 0°C temperature threshold for ice days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of ice days is a potentially significant issue for the NUTS3 area. The number of ice days is decreasing across Europe, and the impacts of this shift may be positive or negative depending on the location being considered and related factors including the nature of dominant industries and land uses.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 15,
    "group": "Extreme cold",
    "groupSort": 15,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  },
  "V8.1": {
    "name": "V8.1",
    "description": "Heat waves (RCP 4.5)",
    "unit": "Number of days",
    "type": "int",
    "details": "This indicator shows the difference in the number of days with a maximum temperature of more than 35°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). There is no universal standard definition for a heat wave, although they are generally regarded as periods of extremely high temperature that exceeds a certain threshold (which varies depending on location and sector being considered) for a set number of days. Heat waves can negatively impact on people, ecosystems and infrastructure. The severity of impacts will depend on factors including the degree to which they are exposed to high temperatures and their vulnerability to this hazard. Vulnerability to heat waves is influenced by factors including the proportion of elderly and young people in the population and the extent of green space cover in urban areas. Indicator data on both of these factors is available within the typology portal. The severity and duration of the heat wave will also influence levels of associated risks. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of heat waves is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 9,
    "group": "Heat Stress",
    "groupSort": 9,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  },
  "V9.1": {
    "name": "V9.1",
    "description": "Total wet-day precipitation (RCP 4.5)",
    "unit": "mm",
    "type": "int",
    "details": "Total wet-day precipitation is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the cumulated precipitation for days with precipitation greater than or equal to 1mm. The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Projected change in total wet day precipitation is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can enhance understanding of how the climate of the NUTS3 area is projected to change over the coming decades. ",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainSort": 17,
    "group": "Fluvial and Pluvial Flooding",
    "groupSort": 37,
    "isOverviewVisible": true,
    "isDetailsVisible": true,
    "isPinned": true,
    "isValid": false
  }
};

AppData.domains = null;
AppData.domainSortedIndicators = [];

AppData.groups = null;
AppData.groupSortedIndicators = [];

AppData.domainDictionaryIndicators = {};
AppData.groupDictionaryIndicators = {};

AppData.indicatorValuesStatistics = {
  "I001": {
    "name": "I001",
    "mean": 2.3872228474672688,
    "stderr": 0.1908000167218512,
    "median": 0.730592120675,
    "mode": 100,
    "stdev": 7.082768012090956,
    "samplevariance": 50.165602713098885,
    "kurtosis": 127.90691535673834,
    "skewness": 10.215875370781099,
    "range": 99.96645098533,
    "min": 0.03354901467,
    "max": 100,
    "sum": 3289.593083809896,
    "count": 1378
  },
  "I002": {
    "name": "I002",
    "mean": 581.3656277212134,
    "stderr": 38.66507730523034,
    "median": 140.0583333335,
    "mode": 45.4333333333,
    "stdev": 1435.3026662557224,
    "samplevariance": 2060093.7437607856,
    "kurtosis": 53.223710717091016,
    "skewness": 6.126014153604328,
    "range": 21157.1,
    "min": 1.2,
    "max": 21158.3,
    "sum": 801121.8349998321,
    "count": 1378
  },
  "I003": {
    "name": "I003",
    "mean": 25.2103664135021,
    "stderr": 0.6595966541138437,
    "median": 23.073122470199998,
    "mode": 0,
    "stdev": 24.485166002109292,
    "samplevariance": 599.5233541508487,
    "kurtosis": 266.4786550619619,
    "skewness": 12.936975351393585,
    "range": 607.252825769,
    "min": 0,
    "max": 607.252825769,
    "sum": 34739.884917805895,
    "count": 1378
  },
  "I004": {
    "name": "I004",
    "mean": 3.763226366614202,
    "stderr": 0.1728788132951345,
    "median": 1.69590623479,
    "mode": 0,
    "stdev": 6.4175074500126765,
    "samplevariance": 41.1844018709682,
    "kurtosis": 35.15117875561617,
    "skewness": 4.7986165541397945,
    "range": 72.8540840578,
    "min": 0,
    "max": 72.8540840578,
    "sum": 5185.725933194371,
    "count": 1378
  },
  "I005": {
    "name": "I005",
    "mean": 3.439767779390421,
    "stderr": 0.057609291506054504,
    "median": 3,
    "mode": 1,
    "stdev": 2.1385388433856276,
    "samplevariance": 4.5733483846691385,
    "kurtosis": -0.1904815937592148,
    "skewness": 0.764170299162312,
    "range": 8,
    "min": 1,
    "max": 9,
    "sum": 4740,
    "count": 1378
  },
  "I006": {
    "name": "I006",
    "mean": 4.354136429608127,
    "stderr": 0.07787407502204141,
    "median": 4,
    "mode": 1,
    "stdev": 2.890796431854395,
    "samplevariance": 8.356704010422101,
    "kurtosis": -1.237435978612337,
    "skewness": 0.0611579700997811,
    "range": 9,
    "min": 0,
    "max": 9,
    "sum": 6000,
    "count": 1378
  },
  "I007": {
    "name": "I007",
    "mean": 4.522496371552975,
    "stderr": 0.0754355590388568,
    "median": 4,
    "mode": 4,
    "stdev": 2.800275250046267,
    "samplevariance": 7.841541476021683,
    "kurtosis": -1.1604180042161212,
    "skewness": -0.005299247350704032,
    "range": 9,
    "min": 0,
    "max": 9,
    "sum": 6232,
    "count": 1378
  },
  "I008": {
    "name": "I008",
    "mean": 2.54644412191582,
    "stderr": 0.06275831024160661,
    "median": 2,
    "mode": 2,
    "stdev": 2.3296777427442716,
    "samplevariance": 5.427398385038045,
    "kurtosis": 555.0919862357322,
    "skewness": 19.734593457803513,
    "range": 71,
    "min": 0,
    "max": 71,
    "sum": 3509,
    "count": 1378
  },
  "I009": {
    "name": "I009",
    "mean": 2.0478955007256894,
    "stderr": 0.39714388266073836,
    "median": 1,
    "mode": 1,
    "stdev": 14.742545816480213,
    "samplevariance": 217.34265715101824,
    "kurtosis": 1081.4770503851,
    "skewness": 31.917351982519065,
    "range": 515,
    "min": 0,
    "max": 515,
    "sum": 2822,
    "count": 1378
  },
  "I010": {
    "name": "I010",
    "mean": 1.8563134978229319,
    "stderr": 0.07397438305779559,
    "median": 1,
    "mode": 1,
    "stdev": 2.746034319272225,
    "samplevariance": 7.540704482620873,
    "kurtosis": 182.01406526967557,
    "skewness": 9.3357734202951,
    "range": 63,
    "min": 0,
    "max": 63,
    "sum": 2558,
    "count": 1378
  },
  "I011": {
    "name": "I011",
    "mean": 1.004354136429608,
    "stderr": 0.06838604598927145,
    "median": 0,
    "mode": 0,
    "stdev": 2.538587298513175,
    "samplevariance": 6.44442547217242,
    "kurtosis": 30.490294744381103,
    "skewness": 4.797586473866775,
    "range": 26,
    "min": 0,
    "max": 26,
    "sum": 1384,
    "count": 1378
  },
  "I012": {
    "name": "I012",
    "mean": 6.358388652798257,
    "stderr": 0.26607511643060827,
    "median": 3.0595657377750003,
    "mode": 0,
    "stdev": 9.87708678356873,
    "samplevariance": 97.55684333014807,
    "kurtosis": 17.60147807593148,
    "skewness": 3.5253488688173213,
    "range": 90.1987593298,
    "min": 0,
    "max": 90.1987593298,
    "sum": 8761.859563555998,
    "count": 1378
  },
  "I013": {
    "name": "I013",
    "mean": 4.513788098693759,
    "stderr": 0.07704079789226947,
    "median": 5,
    "mode": 6,
    "stdev": 2.8598639995550856,
    "samplevariance": 8.178822095951212,
    "kurtosis": -1.233411647020489,
    "skewness": -0.031780268102350656,
    "range": 9,
    "min": 0,
    "max": 9,
    "sum": 6220,
    "count": 1378
  },
  "I014": {
    "name": "I014",
    "mean": 4.309869375907112,
    "stderr": 0.07847240085809105,
    "median": 4,
    "mode": 0,
    "stdev": 2.9130071379391738,
    "samplevariance": 8.485610585684578,
    "kurtosis": -1.2366278812799176,
    "skewness": 0.1011475710113486,
    "range": 9,
    "min": 0,
    "max": 9,
    "sum": 5939,
    "count": 1378
  },
  "I015": {
    "name": "I015",
    "mean": 4.533381712626996,
    "stderr": 0.07594787003753742,
    "median": 5,
    "mode": 6,
    "stdev": 2.8192929630215606,
    "samplevariance": 7.94841281134289,
    "kurtosis": -1.1710064192181555,
    "skewness": -0.03276733709829075,
    "range": 9,
    "min": 0,
    "max": 9,
    "sum": 6247,
    "count": 1378
  },
  "I016": {
    "name": "I016",
    "mean": 4.325834542815675,
    "stderr": 0.07591224985556133,
    "median": 4,
    "mode": 4,
    "stdev": 2.8179706912009412,
    "samplevariance": 7.940958816467512,
    "kurtosis": -1.172277144697457,
    "skewness": 0.06541080449646099,
    "range": 9,
    "min": 0,
    "max": 9,
    "sum": 5961,
    "count": 1378
  },
  "I017": {
    "name": "I017",
    "mean": 4.000725689404935,
    "stderr": 0.07676243289404244,
    "median": 4,
    "mode": 0,
    "stdev": 2.8495306948782715,
    "samplevariance": 8.119825181053445,
    "kurtosis": -1.1404184247956692,
    "skewness": 0.21596091996872668,
    "range": 9,
    "min": 0,
    "max": 9,
    "sum": 5513,
    "count": 1378
  },
  "I018": {
    "name": "I018",
    "mean": 4.55732946298984,
    "stderr": 0.07970939593428886,
    "median": 5,
    "mode": 9,
    "stdev": 2.958926154652784,
    "samplevariance": 8.75524398868831,
    "kurtosis": -1.292059185776291,
    "skewness": -0.024985200901633996,
    "range": 9,
    "min": 0,
    "max": 9,
    "sum": 6280,
    "count": 1378
  },
  "I019": {
    "name": "I019",
    "mean": 4.554426705370101,
    "stderr": 0.07649220991017575,
    "median": 5,
    "mode": 4,
    "stdev": 2.8394996333556044,
    "samplevariance": 8.062758167826612,
    "kurtosis": -1.1858564563389957,
    "skewness": 0.014190915556666015,
    "range": 9,
    "min": 0,
    "max": 9,
    "sum": 6276,
    "count": 1378
  },
  "I020": {
    "name": "I020",
    "mean": 4.000725689404935,
    "stderr": 0.07676243289404244,
    "median": 4,
    "mode": 0,
    "stdev": 2.8495306948782715,
    "samplevariance": 8.119825181053445,
    "kurtosis": -1.1404184247956692,
    "skewness": 0.21596091996872668,
    "range": 9,
    "min": 0,
    "max": 9,
    "sum": 5513,
    "count": 1378
  },
  "I021": {
    "name": "I021",
    "mean": 48.055152394775035,
    "stderr": 0.7804603734821044,
    "median": 48,
    "mode": 7,
    "stdev": 28.971799179986874,
    "samplevariance": 839.3651477254882,
    "kurtosis": -1.2209068309492086,
    "skewness": 0.06393804223302572,
    "range": 99,
    "min": 0,
    "max": 99,
    "sum": 66220,
    "count": 1378
  },
  "I022": {
    "name": "I022",
    "mean": 47.62119013062409,
    "stderr": 0.785447535605681,
    "median": 46,
    "mode": 16,
    "stdev": 29.15692973168632,
    "samplevariance": 850.1265513784937,
    "kurtosis": -1.2061706259952931,
    "skewness": 0.11412910130280644,
    "range": 99,
    "min": 0,
    "max": 99,
    "sum": 65622,
    "count": 1378
  },
  "I023": {
    "name": "I023",
    "mean": 50.17416545718432,
    "stderr": 0.7978556177310918,
    "median": 51,
    "mode": 95,
    "stdev": 29.617535389270586,
    "samplevariance": 877.1984025346956,
    "kurtosis": -1.2696664187554636,
    "skewness": -0.018364325622785196,
    "range": 99,
    "min": 0,
    "max": 99,
    "sum": 69140,
    "count": 1378
  },
  "I024": {
    "name": "I024",
    "mean": 50.03265602322206,
    "stderr": 0.7676763682262376,
    "median": 50,
    "mode": 49,
    "stdev": 28.49723872109208,
    "samplevariance": 812.0926147269098,
    "kurtosis": -1.1633188057578205,
    "skewness": 0.01861566827319742,
    "range": 99,
    "min": 0,
    "max": 99,
    "sum": 68945,
    "count": 1378
  },
  "I025": {
    "name": "I025",
    "mean": 49.8911465892598,
    "stderr": 0.7606516173478902,
    "median": 50,
    "mode": 46,
    "stdev": 28.236469976576718,
    "samplevariance": 797.2982367381184,
    "kurtosis": -1.1452761251453278,
    "skewness": -0.030927363858837688,
    "range": 99,
    "min": 0,
    "max": 99,
    "sum": 68750,
    "count": 1378
  },
  "I026": {
    "name": "I026",
    "mean": 41.66400580551524,
    "stderr": 0.7021286951088416,
    "median": 36,
    "mode": 10,
    "stdev": 26.06401586084629,
    "samplevariance": 679.332922794447,
    "kurtosis": -1.0043737657357172,
    "skewness": 0.4924332886067626,
    "range": 89,
    "min": 10,
    "max": 99,
    "sum": 57413,
    "count": 1378
  },
  "I027": {
    "name": "I027",
    "mean": 10.606635177363671,
    "stderr": 0.3969415685873753,
    "median": 5.137197294545,
    "mode": 42,
    "stdev": 14.73503563030816,
    "samplevariance": 217.12127502645097,
    "kurtosis": 8.016936523944853,
    "skewness": 2.7457205787116026,
    "range": 95.20500184095,
    "min": 0.05201254795,
    "max": 95.2570143889,
    "sum": 14615.943274407138,
    "count": 1378
  },
  "I028": {
    "name": "I028",
    "mean": 1.766981132075489,
    "stderr": 0.006373834761562826,
    "median": 1.8,
    "mode": 1.7,
    "stdev": 0.23660581240599257,
    "samplevariance": 0.05598231046429975,
    "kurtosis": 1.6100228406678134,
    "skewness": 0.5627132144167978,
    "range": 2,
    "min": 1.1,
    "max": 3.1,
    "sum": 2434.9000000000237,
    "count": 1378
  },
  "I029": {
    "name": "I029",
    "mean": 1.8261248185776504,
    "stderr": 0.006962319653724354,
    "median": 1.8,
    "mode": 1.9,
    "stdev": 0.2584512086560188,
    "samplevariance": 0.06679702725575695,
    "kurtosis": 3.827398621926746,
    "skewness": 1.1602881459844177,
    "range": 2.2,
    "min": 1.2,
    "max": 3.4,
    "sum": 2516.4000000000024,
    "count": 1378
  },
  "I030": {
    "name": "I030",
    "mean": 1.72264150943398,
    "stderr": 0.006556668028377613,
    "median": 1.7,
    "mode": 1.6,
    "stdev": 0.24339284332973546,
    "samplevariance": 0.05924007618413315,
    "kurtosis": 0.08117614596317813,
    "skewness": 0.339518343071415,
    "range": 1.7999999999999998,
    "min": 1.1,
    "max": 2.9,
    "sum": 2373.8000000000243,
    "count": 1378
  },
  "I031": {
    "name": "I031",
    "mean": 47.961190130622384,
    "stderr": 0.7854475356057595,
    "median": 46.34,
    "mode": 16.34,
    "stdev": 29.156929731689235,
    "samplevariance": 850.1265513786637,
    "kurtosis": -1.2061706259952676,
    "skewness": 0.11412910130298333,
    "range": 99,
    "min": 0.34,
    "max": 99.34,
    "sum": 66090.51999999765,
    "count": 1378
  },
  "I032": {
    "name": "I032",
    "mean": 13.554252539912628,
    "stderr": 0.19161327844801143,
    "median": 12.42,
    "mode": 11.42,
    "stdev": 7.112957444138559,
    "samplevariance": 50.59416360212614,
    "kurtosis": -0.4695331003311414,
    "skewness": 0.40601684505678143,
    "range": 37,
    "min": 0.42,
    "max": 37.42,
    "sum": 18677.759999999602,
    "count": 1378
  },
  "I033": {
    "name": "I033",
    "mean": 7.209172714078315,
    "stderr": 0.23180245196978047,
    "median": 3.58,
    "mode": 2.58,
    "stdev": 8.604836729806143,
    "samplevariance": 74.0432151466209,
    "kurtosis": 2.3225950845255934,
    "skewness": 1.8073457574360499,
    "range": 45,
    "min": 0.58,
    "max": 45.58,
    "sum": 9934.239999999918,
    "count": 1378
  },
  "I034": {
    "name": "I034",
    "mean": 10.2759361393323,
    "stderr": 0.19258914702408794,
    "median": 9.58,
    "mode": 4.58,
    "stdev": 7.1491830737448465,
    "samplevariance": 51.11081862191981,
    "kurtosis": 0.4662076473603207,
    "skewness": 0.8266354083973376,
    "range": 39,
    "min": 0.58,
    "max": 39.58,
    "sum": 14160.239999999909,
    "count": 1378
  },
  "I035": {
    "name": "I035",
    "mean": 28.41091436865107,
    "stderr": 1.160153782752432,
    "median": 10.08,
    "mode": 10.08,
    "stdev": 43.06655860289655,
    "samplevariance": 1854.7284698967228,
    "kurtosis": 4.690964577895769,
    "skewness": 2.145363675175828,
    "range": 250,
    "min": 0.08,
    "max": 250.08,
    "sum": 39150.24000000118,
    "count": 1378
  },
  "I036": {
    "name": "I036",
    "mean": 40.31740203192956,
    "stderr": 1.1818758060074377,
    "median": 53.21,
    "mode": 69.21,
    "stdev": 43.872911003235885,
    "samplevariance": 1924.8323198978565,
    "kurtosis": 1.930637958463091,
    "skewness": -1.3841097953905865,
    "range": 273,
    "min": -156.79,
    "max": 116.21,
    "sum": 55557.379999998935,
    "count": 1378
  },
  "I037": {
    "name": "I037",
    "mean": 2.6272228474672934,
    "stderr": 0.19080001672185154,
    "median": 0.970592120675,
    "mode": 100.24,
    "stdev": 7.08276801209097,
    "samplevariance": 50.16560271309906,
    "kurtosis": 127.90691535673814,
    "skewness": 10.21587537078109,
    "range": 99.96645098533,
    "min": 0.27354901467,
    "max": 100.24,
    "sum": 3620.31308380993,
    "count": 1378
  },
  "I038": {
    "name": "I038",
    "mean": 582.1456277212161,
    "stderr": 38.66507730523033,
    "median": 140.8383333335,
    "mode": 46.2133333333,
    "stdev": 1435.302666255722,
    "samplevariance": 2060093.7437607846,
    "kurtosis": 53.22371071709096,
    "skewness": 6.12601415360432,
    "range": 21157.100000000002,
    "min": 1.98,
    "max": 21159.08,
    "sum": 802196.6749998358,
    "count": 1378
  },
  "I039": {
    "name": "I039",
    "mean": 4.293226366614245,
    "stderr": 0.1728788132951369,
    "median": 2.22590623479,
    "mode": 0.53,
    "stdev": 6.417507450012766,
    "samplevariance": 41.18440187096935,
    "kurtosis": 35.15117875561383,
    "skewness": 4.798616554139592,
    "range": 72.8540840578,
    "min": 0.53,
    "max": 73.3840840578,
    "sum": 5916.06593319443,
    "count": 1378
  },
  "I040": {
    "name": "I040",
    "mean": 25.570366413502104,
    "stderr": 0.6595966541138436,
    "median": 23.433122470199997,
    "mode": 0.36,
    "stdev": 24.48516600210929,
    "samplevariance": 599.5233541508486,
    "kurtosis": 266.4786550619615,
    "skewness": 12.936975351393569,
    "range": 607.252825769,
    "min": 0.36,
    "max": 607.612825769,
    "sum": 35235.9649178059,
    "count": 1378
  },
  "I041": {
    "name": "I041",
    "mean": 3.763226366614202,
    "stderr": 0.1728788132951345,
    "median": 1.69590623479,
    "mode": 0,
    "stdev": 6.4175074500126765,
    "samplevariance": 41.1844018709682,
    "kurtosis": 35.15117875561617,
    "skewness": 4.7986165541397945,
    "range": 72.8540840578,
    "min": 0,
    "max": 72.8540840578,
    "sum": 5185.725933194371,
    "count": 1378
  },
  "I042": {
    "name": "I042",
    "mean": 10.606635177363671,
    "stderr": 0.3969415685873753,
    "median": 5.137197294545,
    "mode": 42,
    "stdev": 14.73503563030816,
    "samplevariance": 217.12127502645097,
    "kurtosis": 8.016936523944853,
    "skewness": 2.7457205787116026,
    "range": 95.20500184095,
    "min": 0.05201254795,
    "max": 95.2570143889,
    "sum": 14615.943274407138,
    "count": 1378
  },
  "I043": {
    "name": "I043",
    "mean": 1.8261248185776504,
    "stderr": 0.006962319653724354,
    "median": 1.8,
    "mode": 1.9,
    "stdev": 0.2584512086560188,
    "samplevariance": 0.06679702725575695,
    "kurtosis": 3.827398621926746,
    "skewness": 1.1602881459844177,
    "range": 2.2,
    "min": 1.2,
    "max": 3.4,
    "sum": 2516.4000000000024,
    "count": 1378
  },
  "I044": {
    "name": "I044",
    "mean": 581.3656277212134,
    "stderr": 38.66507730523034,
    "median": 140.0583333335,
    "mode": 45.4333333333,
    "stdev": 1435.3026662557224,
    "samplevariance": 2060093.7437607856,
    "kurtosis": 53.223710717091016,
    "skewness": 6.126014153604328,
    "range": 21157.1,
    "min": 1.2,
    "max": 21158.3,
    "sum": 801121.8349998321,
    "count": 1378
  },
  "I045": {
    "name": "I045",
    "mean": 581.3656277212134,
    "stderr": 38.66507730523034,
    "median": 140.0583333335,
    "mode": 45.4333333333,
    "stdev": 1435.3026662557224,
    "samplevariance": 2060093.7437607856,
    "kurtosis": 53.223710717091016,
    "skewness": 6.126014153604328,
    "range": 21157.1,
    "min": 1.2,
    "max": 21158.3,
    "sum": 801121.8349998321,
    "count": 1378
  },
  "I046": {
    "name": "I046",
    "mean": 25.2103664135021,
    "stderr": 0.6595966541138437,
    "median": 23.073122470199998,
    "mode": 0,
    "stdev": 24.485166002109292,
    "samplevariance": 599.5233541508487,
    "kurtosis": 266.4786550619619,
    "skewness": 12.936975351393585,
    "range": 607.252825769,
    "min": 0,
    "max": 607.252825769,
    "sum": 34739.884917805895,
    "count": 1378
  },
  "I047": {
    "name": "I047",
    "mean": 3.763226366614202,
    "stderr": 0.1728788132951345,
    "median": 1.69590623479,
    "mode": 0,
    "stdev": 6.4175074500126765,
    "samplevariance": 41.1844018709682,
    "kurtosis": 35.15117875561617,
    "skewness": 4.7986165541397945,
    "range": 72.8540840578,
    "min": 0,
    "max": 72.8540840578,
    "sum": 5185.725933194371,
    "count": 1378
  },
  "I048": {
    "name": "I048",
    "mean": 37.73740203192957,
    "stderr": 1.1818758060074381,
    "median": 50.63,
    "mode": 66.63,
    "stdev": 43.8729110032359,
    "samplevariance": 1924.8323198978578,
    "kurtosis": 1.9306379584630946,
    "skewness": -1.3841097953905879,
    "range": 273,
    "min": -159.37,
    "max": 113.63,
    "sum": 52002.13999999895,
    "count": 1378
  },
  "I049": {
    "name": "I049",
    "mean": 32.117402031930226,
    "stderr": 1.1818758060074253,
    "median": 45.01,
    "mode": 61.01,
    "stdev": 43.87291100323542,
    "samplevariance": 1924.832319897816,
    "kurtosis": 1.930637958463179,
    "skewness": -1.384109795390635,
    "range": 273,
    "min": -164.99,
    "max": 108.01,
    "sum": 44257.77999999985,
    "count": 1378
  },
  "I050": {
    "name": "I050",
    "mean": 17.36740203192953,
    "stderr": 1.1818758060074301,
    "median": 30.26,
    "mode": 46.26,
    "stdev": 43.87291100323561,
    "samplevariance": 1924.8323198978321,
    "kurtosis": 1.930637958463091,
    "skewness": -1.3841097953905845,
    "range": 273,
    "min": -179.74,
    "max": 93.26,
    "sum": 23932.27999999889,
    "count": 1378
  },
  "I051": {
    "name": "I051",
    "mean": 30.976635177364706,
    "stderr": 0.3969415685874264,
    "median": 25.50719729455,
    "mode": 42,
    "stdev": 14.735035630310058,
    "samplevariance": 217.12127502650694,
    "kurtosis": 8.016936523953405,
    "skewness": 2.7457205787125694,
    "range": 95.2050018411,
    "min": 20.4220125479,
    "max": 115.627014389,
    "sum": 42685.803274408565,
    "count": 1378
  },
  "I052": {
    "name": "I052",
    "mean": 7.196124818577819,
    "stderr": 0.006962319653725363,
    "median": 7.17,
    "mode": 7.27,
    "stdev": 0.25845120865605625,
    "samplevariance": 0.06679702725577634,
    "kurtosis": 3.8273986219235514,
    "skewness": 1.1602881459824435,
    "range": 2.1999999999999993,
    "min": 6.57,
    "max": 8.77,
    "sum": 9916.260000000235,
    "count": 1378
  },
  "I053": {
    "name": "I053",
    "mean": 32.57091436864991,
    "stderr": 1.1601537827524544,
    "median": 14.24,
    "mode": 14.24,
    "stdev": 43.06655860289738,
    "samplevariance": 1854.7284698967944,
    "kurtosis": 4.690964577895902,
    "skewness": 2.1453636751758807,
    "range": 250,
    "min": 4.24,
    "max": 254.24,
    "sum": 44882.71999999957,
    "count": 1378
  },
  "I054": {
    "name": "I054",
    "mean": 6.5472228474675545,
    "stderr": 0.1908000167218548,
    "median": 4.890592120675,
    "mode": 104.16,
    "stdev": 7.08276801209109,
    "samplevariance": 50.16560271310076,
    "kurtosis": 127.90691535672688,
    "skewness": 10.215875370780457,
    "range": 99.96645098533,
    "min": 4.19354901467,
    "max": 104.16,
    "sum": 9022.07308381029,
    "count": 1378
  },
  "I055": {
    "name": "I055",
    "mean": 588.9556277212137,
    "stderr": 38.66507730523031,
    "median": 147.6483333335,
    "mode": 53.0233333333,
    "stdev": 1435.3026662557215,
    "samplevariance": 2060093.7437607832,
    "kurtosis": 53.22371071709117,
    "skewness": 6.126014153604343,
    "range": 21157.1,
    "min": 8.79,
    "max": 21165.89,
    "sum": 811580.8549998325,
    "count": 1378
  },
  "I056": {
    "name": "I056",
    "mean": 37.950366413502415,
    "stderr": 0.6595966541138517,
    "median": 35.8131224702,
    "mode": 12.74,
    "stdev": 24.485166002109587,
    "samplevariance": 599.5233541508632,
    "kurtosis": 266.47865506194654,
    "skewness": 12.936975351393183,
    "range": 607.252825769,
    "min": 12.74,
    "max": 619.992825769,
    "sum": 52295.604917806326,
    "count": 1378
  },
  "I057": {
    "name": "I057",
    "mean": 10.09322636661374,
    "stderr": 0.17287881329513086,
    "median": 8.02590623479,
    "mode": 6.33,
    "stdev": 6.4175074500125415,
    "samplevariance": 41.18440187096647,
    "kurtosis": 35.15117875562196,
    "skewness": 4.798616554140437,
    "range": 72.85408405780001,
    "min": 6.33,
    "max": 79.1840840578,
    "sum": 13908.465933193733,
    "count": 1378
  },
  "I058": {
    "name": "I058",
    "mean": 13.967222847468207,
    "stderr": 0.1908000167218611,
    "median": 12.31059212065,
    "mode": 111.58,
    "stdev": 7.082768012091323,
    "samplevariance": 50.16560271310407,
    "kurtosis": 127.90691535670909,
    "skewness": 10.215875370779361,
    "range": 99.9664509853,
    "min": 11.6135490147,
    "max": 111.58,
    "sum": 19246.83308381119,
    "count": 1378
  },
  "I059": {
    "name": "I059",
    "mean": 586.7556277212148,
    "stderr": 38.66507730523031,
    "median": 145.4483333335,
    "mode": 50.8233333333,
    "stdev": 1435.3026662557215,
    "samplevariance": 2060093.7437607835,
    "kurtosis": 53.223710717090974,
    "skewness": 6.126014153604323,
    "range": 21157.1,
    "min": 6.59,
    "max": 21163.69,
    "sum": 808549.254999834,
    "count": 1378
  },
  "I060": {
    "name": "I060",
    "mean": 28.50036641350221,
    "stderr": 0.6595966541138557,
    "median": 26.3631224702,
    "mode": 3.29,
    "stdev": 24.485166002109736,
    "samplevariance": 599.5233541508705,
    "kurtosis": 266.4786550619415,
    "skewness": 12.936975351392974,
    "range": 607.2528257690001,
    "min": 3.29,
    "max": 610.542825769,
    "sum": 39273.50491780604,
    "count": 1378
  },
  "I061": {
    "name": "I061",
    "mean": 21.30322636661379,
    "stderr": 0.17287881329512117,
    "median": 19.235906234749997,
    "mode": 17.54,
    "stdev": 6.417507450012182,
    "samplevariance": 41.18440187096186,
    "kurtosis": 35.15117875562147,
    "skewness": 4.798616554140368,
    "range": 72.85408405780001,
    "min": 17.54,
    "max": 90.3940840578,
    "sum": 29355.845933193803,
    "count": 1378
  },
  "I062": {
    "name": "I062",
    "mean": 8.417222847467944,
    "stderr": 0.19080001672185554,
    "median": 6.760592120675,
    "mode": 106.03,
    "stdev": 7.082768012091118,
    "samplevariance": 50.16560271310117,
    "kurtosis": 127.90691535672237,
    "skewness": 10.215875370780156,
    "range": 99.96645098533,
    "min": 6.06354901467,
    "max": 106.03,
    "sum": 11598.933083810825,
    "count": 1378
  },
  "I063": {
    "name": "I063",
    "mean": 11.127222847468948,
    "stderr": 0.1908000167218591,
    "median": 9.470592120675,
    "mode": 108.74,
    "stdev": 7.0827680120912495,
    "samplevariance": 50.165602713103034,
    "kurtosis": 127.90691535671088,
    "skewness": 10.21587537077942,
    "range": 99.96645098533,
    "min": 8.77354901467,
    "max": 108.74,
    "sum": 15333.31308381221,
    "count": 1378
  },
  "I064": {
    "name": "I064",
    "mean": 597.8356277212068,
    "stderr": 38.66507730523035,
    "median": 156.5283333335,
    "mode": 61.9033333333,
    "stdev": 1435.3026662557227,
    "samplevariance": 2060093.7437607863,
    "kurtosis": 53.22371071709132,
    "skewness": 6.126014153604354,
    "range": 21157.100000000002,
    "min": 17.67,
    "max": 21174.77,
    "sum": 823817.494999823,
    "count": 1378
  },
  "I065": {
    "name": "I065",
    "mean": 34.56036641350241,
    "stderr": 0.659596654113851,
    "median": 32.4231224702,
    "mode": 9.35,
    "stdev": 24.485166002109562,
    "samplevariance": 599.5233541508619,
    "kurtosis": 266.4786550619466,
    "skewness": 12.936975351393185,
    "range": 607.252825769,
    "min": 9.35,
    "max": 616.602825769,
    "sum": 47624.18491780632,
    "count": 1378
  },
  "I066": {
    "name": "I066",
    "mean": 655.0756277212076,
    "stderr": 38.66507730523027,
    "median": 213.7683333335,
    "mode": 119.143333333,
    "stdev": 1435.30266625572,
    "samplevariance": 2060093.7437607786,
    "kurtosis": 53.22371071709134,
    "skewness": 6.126014153604356,
    "range": 21157.1,
    "min": 74.91,
    "max": 21232.01,
    "sum": 902694.2149998241,
    "count": 1378
  },
  "I067": {
    "name": "I067",
    "mean": 9.14322636661362,
    "stderr": 0.1728788132951319,
    "median": 7.075906234790001,
    "mode": 5.38,
    "stdev": 6.417507450012581,
    "samplevariance": 41.18440187096697,
    "kurtosis": 35.15117875562221,
    "skewness": 4.798616554140484,
    "range": 72.85408405780001,
    "min": 5.38,
    "max": 78.2340840578,
    "sum": 12599.365933193569,
    "count": 1378
  },
  "I068": {
    "name": "I068",
    "mean": 594.1056277212094,
    "stderr": 38.665077305230284,
    "median": 152.7983333335,
    "mode": 58.1733333333,
    "stdev": 1435.3026662557204,
    "samplevariance": 2060093.7437607797,
    "kurtosis": 53.223710717091365,
    "skewness": 6.126014153604355,
    "range": 21157.100000000002,
    "min": 13.94,
    "max": 21171.04,
    "sum": 818677.5549998266,
    "count": 1378
  },
  "I069": {
    "name": "I069",
    "mean": 33.42036641350234,
    "stderr": 0.6595966541138533,
    "median": 31.2831224702,
    "mode": 8.21,
    "stdev": 24.485166002109644,
    "samplevariance": 599.5233541508659,
    "kurtosis": 266.47865506194626,
    "skewness": 12.936975351393178,
    "range": 607.252825769,
    "min": 8.21,
    "max": 615.462825769,
    "sum": 46053.26491780623,
    "count": 1378
  },
  "I070": {
    "name": "I070",
    "mean": 6.05722284746729,
    "stderr": 0.190800016721855,
    "median": 4.400592120675,
    "mode": 103.67,
    "stdev": 7.082768012091098,
    "samplevariance": 50.16560271310088,
    "kurtosis": 127.90691535672887,
    "skewness": 10.21587537078058,
    "range": 99.96645098533,
    "min": 3.70354901467,
    "max": 103.67,
    "sum": 8346.853083809925,
    "count": 1378
  },
  "I071": {
    "name": "I071",
    "mean": 586.1056277212149,
    "stderr": 38.665077305230334,
    "median": 144.7983333335,
    "mode": 50.1733333333,
    "stdev": 1435.3026662557222,
    "samplevariance": 2060093.7437607849,
    "kurtosis": 53.223710717090995,
    "skewness": 6.126014153604327,
    "range": 21157.100000000002,
    "min": 5.94,
    "max": 21163.04,
    "sum": 807653.554999834,
    "count": 1378
  },
  "I072": {
    "name": "I072",
    "mean": 28.790366413502348,
    "stderr": 0.6595966541138524,
    "median": 26.6531224702,
    "mode": 3.58,
    "stdev": 24.48516600210961,
    "samplevariance": 599.5233541508643,
    "kurtosis": 266.4786550619466,
    "skewness": 12.936975351393167,
    "range": 607.252825769,
    "min": 3.58,
    "max": 610.832825769,
    "sum": 39673.124917806235,
    "count": 1378
  },
  "I073": {
    "name": "I073",
    "mean": 17.61322636661369,
    "stderr": 0.1728788132951342,
    "median": 15.54590623475,
    "mode": 13.85,
    "stdev": 6.417507450012666,
    "samplevariance": 41.184401870968074,
    "kurtosis": 35.151178755621686,
    "skewness": 4.798616554140413,
    "range": 72.85408405780001,
    "min": 13.85,
    "max": 86.7040840578,
    "sum": 24271.025933193665,
    "count": 1378
  },
  "I074": {
    "name": "I074",
    "mean": 587.5856277212127,
    "stderr": 38.665077305230355,
    "median": 146.2783333335,
    "mode": 51.6533333333,
    "stdev": 1435.3026662557231,
    "samplevariance": 2060093.7437607874,
    "kurtosis": 53.22371071709104,
    "skewness": 6.12601415360433,
    "range": 21157.100000000002,
    "min": 7.42,
    "max": 21164.52,
    "sum": 809692.9949998312,
    "count": 1378
  },
  "I075": {
    "name": "I075",
    "mean": 29.780366413502485,
    "stderr": 0.659596654113872,
    "median": 27.643122470199998,
    "mode": 4.57,
    "stdev": 24.48516600211034,
    "samplevariance": 599.5233541509,
    "kurtosis": 266.47865506191584,
    "skewness": 12.936975351392238,
    "range": 607.252825769,
    "min": 4.57,
    "max": 611.822825769,
    "sum": 41037.344917806426,
    "count": 1378
  },
  "I076": {
    "name": "I076",
    "mean": 1.8261248185776504,
    "stderr": 0.006962319653724354,
    "median": 1.8,
    "mode": 1.9,
    "stdev": 0.2584512086560188,
    "samplevariance": 0.06679702725575695,
    "kurtosis": 3.827398621926746,
    "skewness": 1.1602881459844177,
    "range": 2.2,
    "min": 1.2,
    "max": 3.4,
    "sum": 2516.4000000000024,
    "count": 1378
  },
  "I077": {
    "name": "I077",
    "mean": 37.950366413502415,
    "stderr": 0.6595966541138517,
    "median": 35.8131224702,
    "mode": 12.74,
    "stdev": 24.485166002109587,
    "samplevariance": 599.5233541508632,
    "kurtosis": 266.47865506194654,
    "skewness": 12.936975351393183,
    "range": 607.252825769,
    "min": 12.74,
    "max": 619.992825769,
    "sum": 52295.604917806326,
    "count": 1378
  },
  "I078": {
    "name": "I078",
    "mean": 13.967222847468207,
    "stderr": 0.1908000167218611,
    "median": 12.31059212065,
    "mode": 111.58,
    "stdev": 7.082768012091323,
    "samplevariance": 50.16560271310407,
    "kurtosis": 127.90691535670909,
    "skewness": 10.215875370779361,
    "range": 99.9664509853,
    "min": 11.6135490147,
    "max": 111.58,
    "sum": 19246.83308381119,
    "count": 1378
  },
  "I079": {
    "name": "I079",
    "mean": 40.31740203192956,
    "stderr": 1.1818758060074377,
    "median": 53.21,
    "mode": 69.21,
    "stdev": 43.872911003235885,
    "samplevariance": 1924.8323198978565,
    "kurtosis": 1.930637958463091,
    "skewness": -1.3841097953905865,
    "range": 273,
    "min": -156.79,
    "max": 116.21,
    "sum": 55557.379999998935,
    "count": 1378
  },
  "I080": {
    "name": "I080",
    "mean": 581.3656277212134,
    "stderr": 38.66507730523034,
    "median": 140.0583333335,
    "mode": 45.4333333333,
    "stdev": 1435.3026662557224,
    "samplevariance": 2060093.7437607856,
    "kurtosis": 53.223710717091016,
    "skewness": 6.126014153604328,
    "range": 21157.1,
    "min": 1.2,
    "max": 21158.3,
    "sum": 801121.8349998321,
    "count": 1378
  },
  "I081": {
    "name": "I081",
    "mean": 4.293226366614245,
    "stderr": 0.1728788132951369,
    "median": 2.22590623479,
    "mode": 0.53,
    "stdev": 6.417507450012766,
    "samplevariance": 41.18440187096935,
    "kurtosis": 35.15117875561383,
    "skewness": 4.798616554139592,
    "range": 72.8540840578,
    "min": 0.53,
    "max": 73.3840840578,
    "sum": 5916.06593319443,
    "count": 1378
  },
  "I082": {
    "name": "I082",
    "mean": 10.606635177363671,
    "stderr": 0.3969415685873753,
    "median": 5.137197294545,
    "mode": 42,
    "stdev": 14.73503563030816,
    "samplevariance": 217.12127502645097,
    "kurtosis": 8.016936523944853,
    "skewness": 2.7457205787116026,
    "range": 95.20500184095,
    "min": 0.05201254795,
    "max": 95.2570143889,
    "sum": 14615.943274407138,
    "count": 1378
  }
};

AppData.indicatorZScoresStatistics = {
  "I001": {
    "name": "I001",
    "mean": -0.0010673555878090277,
    "stderr": 0.026927228361686092,
    "median": 0.164678,
    "mode": -0.260216,
    "stdev": 0.9995770177130004,
    "samplevariance": 0.9991542143400161,
    "kurtosis": -0.03612956048361804,
    "skewness": 0.03952127251330298,
    "range": 6.513724,
    "min": -3.249159,
    "max": 3.264565,
    "sum": -1.4708160000008401,
    "count": 1378
  },
  "I002": {
    "name": "I002",
    "mean": -0.0009243258345424082,
    "stderr": 0.02693251871154758,
    "median": -0.085613,
    "mode": 0.384068,
    "stdev": 0.9997734030247813,
    "samplevariance": 0.9995468573957518,
    "kurtosis": -0.03405770273959696,
    "skewness": 0.05636102781248783,
    "range": 6.513757,
    "min": -3.250381,
    "max": 3.263376,
    "sum": -1.2737209999994386,
    "count": 1378
  },
  "I003": {
    "name": "I003",
    "mean": -0.0014312111756164874,
    "stderr": 0.026910324822815367,
    "median": -0.019559,
    "mode": -0.418299,
    "stdev": 0.9989495343067529,
    "samplevariance": 0.9979001720916786,
    "kurtosis": -0.04966919014000126,
    "skewness": 0.03127442907155005,
    "range": 6.271796,
    "min": -3.034717,
    "max": 3.237079,
    "sum": -1.9722089999995198,
    "count": 1378
  },
  "I004": {
    "name": "I004",
    "mean": 0.000009656023222291088,
    "stderr": 0.026948401962349714,
    "median": -0.013279,
    "mode": -0.730899,
    "stdev": 1.0003630118866786,
    "samplevariance": 1.000726155550987,
    "kurtosis": -0.07095489938006416,
    "skewness": 0.019665188480523378,
    "range": 6.068143,
    "min": -3.204645,
    "max": 2.863498,
    "sum": 0.01330600000031712,
    "count": 1378
  },
  "I005": {
    "name": "I005",
    "mean": -0.0008536277213352537,
    "stderr": 0.026934863987911818,
    "median": 0.022858,
    "mode": -0.183165,
    "stdev": 0.9998604630193113,
    "samplevariance": 0.9997209455091915,
    "kurtosis": -0.10833982220115246,
    "skewness": 0.04227819390446603,
    "range": 5.935119,
    "min": -2.708426,
    "max": 3.226693,
    "sum": -1.1762989999999796,
    "count": 1378
  },
  "I006": {
    "name": "I006",
    "mean": -0.000637701015965403,
    "stderr": 0.026940839629092488,
    "median": 0.058994,
    "mode": -0.426148,
    "stdev": 1.0000822873196094,
    "samplevariance": 1.0001645814104216,
    "kurtosis": -0.281560286143931,
    "skewness": 0.18993783462348526,
    "range": 4.964333,
    "min": -1.764506,
    "max": 3.199827,
    "sum": -0.8787520000003253,
    "count": 1378
  },
  "I007": {
    "name": "I007",
    "mean": -0.00019149346879523767,
    "stderr": 0.02694772382279171,
    "median": -0.01022,
    "mode": -0.671542,
    "stdev": 1.000337838381709,
    "samplevariance": 1.00067579089819,
    "kurtosis": -0.27948026771261913,
    "skewness": 0.13082718849686356,
    "range": 5.120201,
    "min": -1.880214,
    "max": 3.239987,
    "sum": -0.2638779999998375,
    "count": 1378
  },
  "I008": {
    "name": "I008",
    "mean": -0.000879256894049311,
    "stderr": 0.026934023551652142,
    "median": -0.088545,
    "mode": -0.088545,
    "stdev": 0.999829264829927,
    "samplevariance": 0.9996585588103521,
    "kurtosis": -0.2910340592004812,
    "skewness": 0.5424126523574515,
    "range": 4.854803,
    "min": -1.146344,
    "max": 3.708459,
    "sum": -1.2116159999999505,
    "count": 1378
  },
  "I009": {
    "name": "I009",
    "mean": 0.000776280841799444,
    "stderr": 0.026937202133364282,
    "median": -0.002072,
    "mode": 0.597161,
    "stdev": 0.9999472583042535,
    "samplevariance": 0.9998945193901934,
    "kurtosis": -0.05753721922131261,
    "skewness": 0.009506135933033583,
    "range": 6.1946200000000005,
    "min": -3.191756,
    "max": 3.002864,
    "sum": 1.0697149999996338,
    "count": 1378
  },
  "I010": {
    "name": "I010",
    "mean": -0.0010562394775039024,
    "stderr": 0.026927651676966882,
    "median": -0.261112,
    "mode": -0.261112,
    "stdev": 0.9995927317783413,
    "samplevariance": 0.9991856294240871,
    "kurtosis": 0.17540184931552183,
    "skewness": 0.36331004644482245,
    "range": 5.193525,
    "min": -1.642107,
    "max": 3.551418,
    "sum": -1.4554980000003774,
    "count": 1378
  },
  "I011": {
    "name": "I011",
    "mean": 0.00004810812772050803,
    "stderr": 0.02694835951902889,
    "median": -0.06666,
    "mode": -0.06666,
    "stdev": 1.0003614363302389,
    "samplevariance": 1.0007230032966985,
    "kurtosis": 2.3024923868227347,
    "skewness": -0.09660883234151144,
    "range": 5.839214999999999,
    "min": -3.759985,
    "max": 2.07923,
    "sum": 0.06629299999886007,
    "count": 1378
  },
  "I012": {
    "name": "I012",
    "mean": 0.0007421872278668913,
    "stderr": 0.0269381627680005,
    "median": 0.601051,
    "mode": 0.601051,
    "stdev": 0.9999829184283436,
    "samplevariance": 0.9999658371484673,
    "kurtosis": 0.11231099550176982,
    "skewness": -0.1746293607491535,
    "range": 6.345423,
    "min": -3.037925,
    "max": 3.307498,
    "sum": 1.0227340000005762,
    "count": 1378
  },
  "I013": {
    "name": "I013",
    "mean": -0.000060923802613188706,
    "stderr": 0.026948332841790087,
    "median": 0.084047,
    "mode": 0.084047,
    "stdev": 1.0003604460331892,
    "samplevariance": 1.0007210219877212,
    "kurtosis": 1.4005213931940288,
    "skewness": -0.11508257216154096,
    "range": 6.593109,
    "min": -3.512589,
    "max": 3.08052,
    "sum": -0.08395300000097404,
    "count": 1378
  },
  "I014": {
    "name": "I014",
    "mean": 0.0004381719883882085,
    "stderr": 0.026944835213283815,
    "median": -0.603442,
    "mode": -0.603442,
    "stdev": 1.0002306090880566,
    "samplevariance": 1.0004612713566645,
    "kurtosis": 0.8899790880448415,
    "skewness": 1.4058943369607415,
    "range": 4.725785,
    "min": -0.603442,
    "max": 4.122343,
    "sum": 0.6038009999989513,
    "count": 1378
  },
  "I015": {
    "name": "I015",
    "mean": 0.0008008193033380655,
    "stderr": 0.026936483808159318,
    "median": -0.000508,
    "mode": -0.165874,
    "stdev": 0.9999205930509091,
    "samplevariance": 0.9998411924072818,
    "kurtosis": -0.03833113194529281,
    "skewness": 0.015611309586894702,
    "range": 6.396696,
    "min": -3.189439,
    "max": 3.207257,
    "sum": 1.1035289999998543,
    "count": 1378
  },
  "I016": {
    "name": "I016",
    "mean": -0.0007969970972427575,
    "stderr": 0.02693659700648082,
    "median": -0.009104,
    "mode": -1.67945,
    "stdev": 0.9999247951336149,
    "samplevariance": 0.9998495959230016,
    "kurtosis": -0.17679588424667347,
    "skewness": 0.07698634127563266,
    "range": 5.411071,
    "min": -2.180043,
    "max": 3.231028,
    "sum": -1.0982620000005199,
    "count": 1378
  },
  "I017": {
    "name": "I017",
    "mean": 0.0006558338171261409,
    "stderr": 0.02694040918944603,
    "median": -0.0008105,
    "mode": -2.72759,
    "stdev": 1.0000663087876813,
    "samplevariance": 1.0001326219722178,
    "kurtosis": -0.06581316817733596,
    "skewness": 0.023806294041436582,
    "range": 5.9375990000000005,
    "min": -2.72759,
    "max": 3.210009,
    "sum": 0.9037389999998222,
    "count": 1378
  },
  "I018": {
    "name": "I018",
    "mean": 0.0012204687953554926,
    "stderr": 0.026920711266078496,
    "median": -0.002627,
    "mode": -2.244311,
    "stdev": 0.9993350938542174,
    "samplevariance": 0.9986706298086174,
    "kurtosis": -0.15219692628453396,
    "skewness": 0.06149111590655592,
    "range": 5.468692000000001,
    "min": -2.244311,
    "max": 3.224381,
    "sum": 1.6818059999998687,
    "count": 1378
  },
  "I019": {
    "name": "I019",
    "mean": 0.000534134978229339,
    "stderr": 0.026943100735090923,
    "median": -0.0008105,
    "mode": -2.72759,
    "stdev": 1.000166222790438,
    "samplevariance": 1.0003324732108922,
    "kurtosis": -0.06670353313353061,
    "skewness": 0.023917633326364894,
    "range": 5.9375990000000005,
    "min": -2.72759,
    "max": 3.210009,
    "sum": 0.7360380000000292,
    "count": 1378
  },
  "I020": {
    "name": "I020",
    "mean": 0.0010068193033381655,
    "stderr": 0.026929560387612846,
    "median": -0.0007559999999999999,
    "mode": -2.765863,
    "stdev": 0.9996635858324439,
    "samplevariance": 0.9993272848393798,
    "kurtosis": -0.059286228743987035,
    "skewness": 0.02283331293059395,
    "range": 5.975391999999999,
    "min": -2.765863,
    "max": 3.209529,
    "sum": 1.387396999999992,
    "count": 1378
  },
  "I021": {
    "name": "I021",
    "mean": -0.00013963715529794921,
    "stderr": 0.026948039528214795,
    "median": -0.038778,
    "mode": -1.208031,
    "stdev": 1.000349557816069,
    "samplevariance": 1.0006992378228048,
    "kurtosis": -0.46170875220908236,
    "skewness": 0.4473759909864055,
    "range": 4.644754000000001,
    "min": -1.208031,
    "max": 3.436723,
    "sum": -0.19242000000057402,
    "count": 1378
  },
  "I022": {
    "name": "I022",
    "mean": 0.00045075979680921324,
    "stderr": 0.026944627489445074,
    "median": -0.620984,
    "mode": -0.620984,
    "stdev": 1.000222898083699,
    "samplevariance": 1.0004458458509535,
    "kurtosis": 0.753251761324429,
    "skewness": 1.3526610988854417,
    "range": 4.691146,
    "min": -0.620984,
    "max": 4.070162,
    "sum": 0.6211470000030959,
    "count": 1378
  },
  "I023": {
    "name": "I023",
    "mean": -0.00041344049346929234,
    "stderr": 0.02694522911760544,
    "median": -0.0375515,
    "mode": -1.223397,
    "stdev": 1.0002452313767596,
    "samplevariance": 1.0004905228919472,
    "kurtosis": -0.46069235415377063,
    "skewness": 0.43613885589601264,
    "range": 4.652611,
    "min": -1.223397,
    "max": 3.429214,
    "sum": -0.5697210000006848,
    "count": 1378
  },
  "I024": {
    "name": "I024",
    "mean": 0.0009852772133529376,
    "stderr": 0.026930359257544195,
    "median": -0.001297,
    "mode": -2.513796,
    "stdev": 0.9996932410205973,
    "samplevariance": 0.999386576142266,
    "kurtosis": -0.09377910200876816,
    "skewness": 0.035143549458497465,
    "range": 5.727893,
    "min": -2.513796,
    "max": 3.214097,
    "sum": 1.357712000000348,
    "count": 1378
  },
  "I025": {
    "name": "I025",
    "mean": 0.0012514811320754043,
    "stderr": 0.02691928471015143,
    "median": 0.003995,
    "mode": 1.557912,
    "stdev": 0.9992821380690907,
    "samplevariance": 0.9985647914639334,
    "kurtosis": -0.8852709868480084,
    "skewness": -0.059139846799781084,
    "range": 3.282457,
    "min": -1.724545,
    "max": 1.557912,
    "sum": 1.724540999999907,
    "count": 1378
  },
  "I026": {
    "name": "I026",
    "mean": 0.0012227931785196793,
    "stderr": 0.026920603403997843,
    "median": -0.007698,
    "mode": -1.68508,
    "stdev": 0.999331089860362,
    "samplevariance": 0.998662627161499,
    "kurtosis": -0.6240587015513497,
    "skewness": 0.0977145846317895,
    "range": 3.7436749999999996,
    "min": -1.68508,
    "max": 2.058595,
    "sum": 1.685009000000118,
    "count": 1378
  },
  "I027": {
    "name": "I027",
    "mean": 0.0012174238026120008,
    "stderr": 0.026920848657303934,
    "median": -0.01222,
    "mode": -1.677627,
    "stdev": 0.9993401940119291,
    "samplevariance": 0.9986808233678001,
    "kurtosis": -0.5408463740466303,
    "skewness": 0.13226110324529447,
    "range": 3.9453620000000003,
    "min": -1.677627,
    "max": 2.267735,
    "sum": 1.677609999999337,
    "count": 1378
  },
  "I028": {
    "name": "I028",
    "mean": 0.0012100667634256659,
    "stderr": 0.026921181340819784,
    "median": -0.011944,
    "mode": -1.667476,
    "stdev": 0.999352543697242,
    "samplevariance": 0.998705506594148,
    "kurtosis": -0.37442934065493816,
    "skewness": 0.18605087925555747,
    "range": 4.853731,
    "min": -1.667476,
    "max": 3.186255,
    "sum": 1.6674720000005676,
    "count": 1378
  },
  "I029": {
    "name": "I029",
    "mean": 0.0011852706821486503,
    "stderr": 0.026922285207670628,
    "median": -0.012985,
    "mode": -1.633287,
    "stdev": 0.9993935208048706,
    "samplevariance": 0.9987874094267554,
    "kurtosis": -0.38012228315151475,
    "skewness": 0.19902246382549985,
    "range": 5.112669,
    "min": -1.633287,
    "max": 3.479382,
    "sum": 1.6333030000008402,
    "count": 1378
  },
  "I030": {
    "name": "I030",
    "mean": 0.0006060203193032638,
    "stderr": 0.026941577681888738,
    "median": -0.0176065,
    "mode": -1.52394,
    "stdev": 1.0001096848892026,
    "samplevariance": 1.0002193818091802,
    "kurtosis": -0.40157104877595184,
    "skewness": 0.25148499407095376,
    "range": 4.844903,
    "min": -1.52394,
    "max": 3.320963,
    "sum": 0.8350959999998975,
    "count": 1378
  },
  "I031": {
    "name": "I031",
    "mean": 0.0005183512336720524,
    "stderr": 0.0269434106053874,
    "median": -0.0243985,
    "mode": -1.388595,
    "stdev": 1.0001777256165987,
    "samplevariance": 1.0003554828195922,
    "kurtosis": -0.4408975124589576,
    "skewness": 0.32235349076819025,
    "range": 4.750313,
    "min": -1.388595,
    "max": 3.361718,
    "sum": 0.7142880000000882,
    "count": 1378
  },
  "I032": {
    "name": "I032",
    "mean": 0.0010402576197387147,
    "stderr": 0.02692828797206333,
    "median": -0.0219235,
    "mode": -1.433608,
    "stdev": 0.9996163519573791,
    "samplevariance": 0.9992328511005787,
    "kurtosis": -0.42719506259346796,
    "skewness": 0.2978171541200855,
    "range": 4.780517,
    "min": -1.433608,
    "max": 3.346909,
    "sum": 1.433474999999949,
    "count": 1378
  },
  "I033": {
    "name": "I033",
    "mean": 0.0009847619738749063,
    "stderr": 0.02693037847506467,
    "median": -0.026283,
    "mode": -1.356864,
    "stdev": 0.999693954402292,
    "samplevariance": 0.9993880024684919,
    "kurtosis": -0.4457509011500096,
    "skewness": 0.3420586435560714,
    "range": 4.729858,
    "min": -1.356864,
    "max": 3.372994,
    "sum": 1.357001999999621,
    "count": 1378
  },
  "I034": {
    "name": "I034",
    "mean": 0.001018367924528332,
    "stderr": 0.026929126655573846,
    "median": -0.0235685,
    "mode": -1.403233,
    "stdev": 0.9996474850822216,
    "samplevariance": 0.9992950944312105,
    "kurtosis": -0.4352027516494035,
    "skewness": 0.31464445974534117,
    "range": 4.759987,
    "min": -1.403233,
    "max": 3.356754,
    "sum": 1.4033110000000415,
    "count": 1378
  },
  "I035": {
    "name": "I035",
    "mean": 0.0009194782293180631,
    "stderr": 0.02693268901878694,
    "median": -0.0322885,
    "mode": -1.267053,
    "stdev": 0.9997797250717491,
    "samplevariance": 0.9995594986645422,
    "kurtosis": -0.45863704739224653,
    "skewness": 0.4017298555498496,
    "range": 4.676179,
    "min": -1.267053,
    "max": 3.409126,
    "sum": 1.267041000000291,
    "count": 1378
  },
  "I036": {
    "name": "I036",
    "mean": 0.0002593185776488154,
    "stderr": 0.026947153784609323,
    "median": -0.35705,
    "mode": -0.35705,
    "stdev": 1.0003166777535641,
    "samplevariance": 1.000633455791928,
    "kurtosis": 4.841775314378867,
    "skewness": 2.551477773879246,
    "range": 3.749939,
    "min": -0.35705,
    "max": 3.392889,
    "sum": 0.35734100000006763,
    "count": 1378
  },
  "I037": {
    "name": "I037",
    "mean": 0.00021942235123367082,
    "stderr": 0.02694750912338164,
    "median": -0.302264,
    "mode": -0.302264,
    "stdev": 1.0003298684342217,
    "samplevariance": 1.0006598456816271,
    "kurtosis": 7.800102532515359,
    "skewness": 3.0856450561801774,
    "range": 4.086603,
    "min": -0.302264,
    "max": 3.784339,
    "sum": 0.3023639999999984,
    "count": 1378
  },
  "I038": {
    "name": "I038",
    "mean": 0.0001311973875178994,
    "stderr": 0.026948082998019936,
    "median": -0.181392,
    "mode": -0.181392,
    "stdev": 1.0003511714770668,
    "samplevariance": 1.00070246627554,
    "kurtosis": 29.183024529486545,
    "skewness": 5.488689409500741,
    "range": 8.199053000000001,
    "min": -0.181392,
    "max": 8.017661,
    "sum": 0.18078999999966539,
    "count": 1378
  },
  "I039": {
    "name": "I039",
    "mean": 0.0005922902757617947,
    "stderr": 0.026941883381670296,
    "median": -0.816184,
    "mode": -0.816184,
    "stdev": 1.0001210328999173,
    "samplevariance": 1.0002420804487973,
    "kurtosis": -0.1873144429103375,
    "skewness": 0.8978914846575587,
    "range": 4.035013,
    "min": -0.816184,
    "max": 3.218829,
    "sum": 0.8161759999997531,
    "count": 1378
  },
  "I040": {
    "name": "I040",
    "mean": 0.00043084470246793,
    "stderr": 0.026944953513470683,
    "median": -0.593255,
    "mode": -0.593255,
    "stdev": 1.0002350005592617,
    "samplevariance": 1.0004700563437865,
    "kurtosis": 0.9750812741466839,
    "skewness": 1.4380453767431665,
    "range": 4.740378,
    "min": -0.593255,
    "max": 4.147123,
    "sum": 0.5937040000008076,
    "count": 1378
  },
  "I041": {
    "name": "I041",
    "mean": 0.00039246371552796713,
    "stderr": 0.026945540540156267,
    "median": -0.540736,
    "mode": -0.540736,
    "stdev": 1.0002567918248095,
    "samplevariance": 1.0005136495916602,
    "kurtosis": 1.5094557879226045,
    "skewness": 1.6222004241656702,
    "range": 4.845347,
    "min": -0.540736,
    "max": 4.304611,
    "sum": 0.5408149999975387,
    "count": 1378
  },
  "I042": {
    "name": "I042",
    "mean": 0.0003744557329495043,
    "stderr": 0.02694579744518949,
    "median": -0.51583,
    "mode": -0.51583,
    "stdev": 1.000266328505061,
    "samplevariance": 1.0005327279409948,
    "kurtosis": 1.832067691350911,
    "skewness": 1.7220577129878192,
    "range": 4.915206,
    "min": -0.51583,
    "max": 4.399376,
    "sum": 0.5160000000044169,
    "count": 1378
  },
  "I043": {
    "name": "I043",
    "mean": 0.00033700653120754946,
    "stderr": 0.026946292229845924,
    "median": -0.464553,
    "mode": -0.464553,
    "stdev": 1.0002846956152829,
    "samplevariance": 1.0005694722821592,
    "kurtosis": 2.6842900789528823,
    "skewness": 1.959058040660605,
    "range": 5.07579,
    "min": -0.464553,
    "max": 4.611237,
    "sum": 0.46439500000400313,
    "count": 1378
  },
  "I044": {
    "name": "I044",
    "mean": 0.0003136444121894768,
    "stderr": 0.026946574843113788,
    "median": -0.431645,
    "mode": -0.431645,
    "stdev": 1.0002951866217713,
    "samplevariance": 1.0005904603786842,
    "kurtosis": 3.4148956154898054,
    "skewness": 2.1392588024080905,
    "range": 5.214352,
    "min": -0.431645,
    "max": 4.782707,
    "sum": 0.432201999997099,
    "count": 1378
  },
  "I045": {
    "name": "I045",
    "mean": 0.0003788824383126761,
    "stderr": 0.026945734898221725,
    "median": -0.521611,
    "mode": -0.521611,
    "stdev": 1.0002640066726516,
    "samplevariance": 1.0005280830448262,
    "kurtosis": 1.7530975006555778,
    "skewness": 1.6981369595780382,
    "range": 4.901632,
    "min": -0.521611,
    "max": 4.380021,
    "sum": 0.5220999999948677,
    "count": 1378
  },
  "I046": {
    "name": "I046",
    "mean": 0.0001480014513791642,
    "stderr": 0.02694799647384909,
    "median": -0.203736,
    "mode": -0.203736,
    "stdev": 1.0003479595767741,
    "samplevariance": 1.0006960402294154,
    "kurtosis": 21.643180798636216,
    "skewness": 4.805097040778909,
    "range": 6.078136,
    "min": -0.203736,
    "max": 5.8744,
    "sum": 0.20394600000048826,
    "count": 1378
  },
  "I047": {
    "name": "I047",
    "mean": 0.00024071915819802325,
    "stderr": 0.026947326613040105,
    "median": -0.332075,
    "mode": -0.332075,
    "stdev": 1.0003230933907437,
    "samplevariance": 1.0006462911708263,
    "kurtosis": 6.385711067310984,
    "skewness": 2.8139821673647583,
    "range": 4.236993,
    "min": -0.332075,
    "max": 3.904918,
    "sum": 0.33171099999687603,
    "count": 1378
  },
  "I048": {
    "name": "I048",
    "mean": 0.00013771480406279678,
    "stderr": 0.026948050230185573,
    "median": -0.189717,
    "mode": -0.189717,
    "stdev": 1.0003499550884467,
    "samplevariance": 1.0007000326454571,
    "kurtosis": 26.037448474665787,
    "skewness": 5.216164913335253,
    "range": 7.005705,
    "min": -0.189717,
    "max": 6.815988,
    "sum": 0.18977099999853397,
    "count": 1378
  },
  "I049": {
    "name": "I049",
    "mean": 0.00023946371552825607,
    "stderr": 0.02694733788838875,
    "median": -0.330071,
    "mode": -0.330071,
    "stdev": 1.0003235119477232,
    "samplevariance": 1.0006471285554266,
    "kurtosis": 7.143234725753796,
    "skewness": 2.894696030020567,
    "range": 5.197635,
    "min": -0.330071,
    "max": 4.867564,
    "sum": 0.32998099999793684,
    "count": 1378
  },
  "I050": {
    "name": "I050",
    "mean": -0.0005853962264155318,
    "stderr": 0.0269420343795889,
    "median": -0.045354,
    "mode": -1.131765,
    "stdev": 1.0001266381574332,
    "samplevariance": 1.0002532923520893,
    "kurtosis": -0.44728802882219965,
    "skewness": 0.5138416352814221,
    "range": 4.617537,
    "min": -1.131765,
    "max": 3.485772,
    "sum": -0.8066760000006028,
    "count": 1378
  },
  "I051": {
    "name": "I051",
    "mean": -0.0007167568940493094,
    "stderr": 0.02693885442632526,
    "median": -0.579555,
    "mode": -0.579555,
    "stdev": 1.0000085937691643,
    "samplevariance": 1.0000171876121813,
    "kurtosis": 1.188516954319251,
    "skewness": 1.4937331628400725,
    "range": 5.01087,
    "min": -0.579555,
    "max": 4.431315,
    "sum": -0.9876909999999484,
    "count": 1378
  },
  "I052": {
    "name": "I052",
    "mean": -0.00043168214804098,
    "stderr": 0.02694493982873975,
    "median": -0.061972,
    "mode": -0.96938,
    "stdev": 1.0002344925625846,
    "samplevariance": 1.000469040111931,
    "kurtosis": -0.35531939271370083,
    "skewness": 0.6868625180963537,
    "range": 4.568705,
    "min": -0.96938,
    "max": 3.599325,
    "sum": -0.5948580000004704,
    "count": 1378
  },
  "I053": {
    "name": "I053",
    "mean": 0.0006355304789574112,
    "stderr": 0.02694089714275942,
    "median": -0.07077800000000001,
    "mode": -0.875875,
    "stdev": 1.0000844223087326,
    "samplevariance": 1.0001688517445915,
    "kurtosis": -0.23133644110634144,
    "skewness": 0.8136360432461132,
    "range": 4.571767,
    "min": -0.875875,
    "max": 3.695892,
    "sum": 0.8757610000033127,
    "count": 1378
  },
  "I054": {
    "name": "I054",
    "mean": -0.00037601015965118477,
    "stderr": 0.02694577711732217,
    "median": -0.068275,
    "mode": -0.914695,
    "stdev": 1.000265573905712,
    "samplevariance": 1.0005312183409236,
    "kurtosis": -0.2902952548915678,
    "skewness": 0.7590419513129003,
    "range": 4.571777,
    "min": -0.914695,
    "max": 3.657082,
    "sum": -0.5181419999993326,
    "count": 1378
  },
  "I055": {
    "name": "I055",
    "mean": 0.000679464441219519,
    "stderr": 0.02693982361461359,
    "median": -0.0636845,
    "mode": -0.936082,
    "stdev": 1.0000445714169874,
    "samplevariance": 1.0000891448205862,
    "kurtosis": -0.3203578314453601,
    "skewness": 0.7276625318780501,
    "range": 4.564297,
    "min": -0.936082,
    "max": 3.628215,
    "sum": 0.9363020000004972,
    "count": 1378
  },
  "I056": {
    "name": "I056",
    "mean": 0.0001305341074032404,
    "stderr": 0.026948085750945212,
    "median": -0.180029,
    "mode": -0.180029,
    "stdev": 1.0003512736695688,
    "samplevariance": 1.0007026707323283,
    "kurtosis": 28.514761553300865,
    "skewness": 5.470242624331282,
    "range": 6.686443000000001,
    "min": -0.180029,
    "max": 6.506414,
    "sum": 0.17987600000166526,
    "count": 1378
  },
  "I057": {
    "name": "I057",
    "mean": 0.00013221262699505403,
    "stderr": 0.026948077732913814,
    "median": -0.181757,
    "mode": -0.181757,
    "stdev": 1.0003509760288385,
    "samplevariance": 1.0007020752418498,
    "kurtosis": 28.42038128933568,
    "skewness": 5.443900073289885,
    "range": 7.074207,
    "min": -0.181757,
    "max": 6.89245,
    "sum": 0.18218899999918448,
    "count": 1378
  },
  "I058": {
    "name": "I058",
    "mean": -0.001629972423801984,
    "stderr": 0.026899011161877075,
    "median": -0.414189,
    "mode": -0.414189,
    "stdev": 0.9985295551203244,
    "samplevariance": 0.9970612724487928,
    "kurtosis": 3.3394225402600117,
    "skewness": 2.190457640876858,
    "range": 4.020485,
    "min": -0.414189,
    "max": 3.606296,
    "sum": -2.246101999999134,
    "count": 1378
  },
  "I059": {
    "name": "I059",
    "mean": -0.0013068998548623962,
    "stderr": 0.026916648262476733,
    "median": -0.675543,
    "mode": -0.675543,
    "stdev": 0.9991842693813583,
    "samplevariance": 0.9983692041791589,
    "kurtosis": 0.29108326883250824,
    "skewness": 1.1893964635745127,
    "range": 3.946009,
    "min": -0.675543,
    "max": 3.270466,
    "sum": -1.8009080000003819,
    "count": 1378
  },
  "I060": {
    "name": "I060",
    "mean": 0.0004330406386065532,
    "stderr": 0.02694491821188512,
    "median": -0.0005089999999999999,
    "mode": -1.091933,
    "stdev": 1.000233690114193,
    "samplevariance": 1.0004674348394558,
    "kurtosis": -0.0410882534080379,
    "skewness": 0.015903597733662983,
    "range": 6.396666,
    "min": -3.189425,
    "max": 3.207241,
    "sum": 0.5967299999998303,
    "count": 1378
  },
  "I061": {
    "name": "I061",
    "mean": -0.0007161175616837148,
    "stderr": 0.026938872495652532,
    "median": -0.0027465,
    "mode": -2.661461,
    "stdev": 1.000009264528294,
    "samplevariance": 1.0000185291424195,
    "kurtosis": -0.07311584188474285,
    "skewness": 0.02943649467360092,
    "range": 5.872458,
    "min": -2.661461,
    "max": 3.210997,
    "sum": -0.986810000000159,
    "count": 1378
  },
  "I062": {
    "name": "I062",
    "mean": 0.0008608091436861587,
    "stderr": 0.02693463191179011,
    "median": -0.038597000000000006,
    "mode": -1.186234,
    "stdev": 0.9998518480235715,
    "samplevariance": 0.9997037179961511,
    "kurtosis": -0.4583982909071942,
    "skewness": 0.4639701679460136,
    "range": 4.634025,
    "min": -1.186234,
    "max": 3.447791,
    "sum": 1.1861949999995267,
    "count": 1378
  },
  "I063": {
    "name": "I063",
    "mean": 0.0011712626995646817,
    "stderr": 0.026922900362427518,
    "median": -0.0005085000000000001,
    "mode": 42,
    "stdev": 0.9994163562244343,
    "samplevariance": 0.9988330530889253,
    "kurtosis": -0.03626585427950113,
    "skewness": 0.016620007107253424,
    "range": 6.396655,
    "min": -3.189419,
    "max": 3.207236,
    "sum": 1.6140000000001316,
    "count": 1378
  },
  "I064": {
    "name": "I064",
    "mean": 0.0009058955007257553,
    "stderr": 0.026933149622672986,
    "median": -0.0005449999999999999,
    "mode": -1.248335,
    "stdev": 0.9997968233431558,
    "samplevariance": 0.9995936879670655,
    "kurtosis": -0.037614047674294326,
    "skewness": 0.016016934484424535,
    "range": 6.397247,
    "min": -3.189751,
    "max": 3.207496,
    "sum": 1.2483240000000908,
    "count": 1378
  },
  "I065": {
    "name": "I065",
    "mean": 0.0009059114658927246,
    "stderr": 0.026933150340030482,
    "median": -0.000549,
    "mode": -1.248327,
    "stdev": 0.9997968499724864,
    "samplevariance": 0.9995937412149064,
    "kurtosis": -0.037528139249376924,
    "skewness": 0.016070291887290505,
    "range": 6.397187000000001,
    "min": -3.189725,
    "max": 3.207462,
    "sum": 1.2483460000001745,
    "count": 1378
  },
  "I066": {
    "name": "I066",
    "mean": -0.0008043454281570424,
    "stderr": 0.026936378636115532,
    "median": -0.003593,
    "mode": -2.392432,
    "stdev": 0.9999166889150485,
    "samplevariance": 0.9998333847708339,
    "kurtosis": -0.11825011130307272,
    "skewness": 0.04719565398890947,
    "range": 5.61027,
    "min": -2.392432,
    "max": 3.217838,
    "sum": -1.1083880000004045,
    "count": 1378
  },
  "I067": {
    "name": "I067",
    "mean": -0.000015676342525293675,
    "stderr": 0.026948398691074398,
    "median": -0.0029925,
    "mode": -2.556865,
    "stdev": 1.0003628904522859,
    "samplevariance": 1.000725912594052,
    "kurtosis": -0.09175377646894889,
    "skewness": 0.033510247430944676,
    "range": 5.769913000000001,
    "min": -2.556865,
    "max": 3.213048,
    "sum": -0.021601999999854682,
    "count": 1378
  },
  "I068": {
    "name": "I068",
    "mean": 0.0009349775036287845,
    "stderr": 0.026932154118924877,
    "median": -0.030767999999999997,
    "mode": -1.288399,
    "stdev": 0.9997598688280349,
    "samplevariance": 0.9995197953190497,
    "kurtosis": -0.45664112022269965,
    "skewness": 0.386705197949833,
    "range": 4.688333,
    "min": -1.288399,
    "max": 3.399934,
    "sum": 1.288399000000465,
    "count": 1378
  },
  "I069": {
    "name": "I069",
    "mean": 0.0025420348330920575,
    "stderr": 0.026828084263140786,
    "median": 0.189963,
    "mode": -0.684262,
    "stdev": 0.9958966477537672,
    "samplevariance": 0.991810133007191,
    "kurtosis": -0.41008319780072977,
    "skewness": 0.059008582958268926,
    "range": 5.395723,
    "min": -3.276031,
    "max": 2.119692,
    "sum": 3.5029240000008555,
    "count": 1378
  },
  "I070": {
    "name": "I070",
    "mean": 0.00043612264150959484,
    "stderr": 0.026944868244358395,
    "median": -0.018745,
    "mode": 42,
    "stdev": 1.000231835248528,
    "samplevariance": 1.0004637242446384,
    "kurtosis": 0.018877184523776958,
    "skewness": 0.035365135851843074,
    "range": 6.53431,
    "min": -3.24524,
    "max": 3.28907,
    "sum": 0.6009770000002217,
    "count": 1378
  },
  "I071": {
    "name": "I071",
    "mean": 0.0009575834542816681,
    "stderr": 0.026931358768631848,
    "median": 0.012507,
    "mode": 42,
    "stdev": 0.9997303442938621,
    "samplevariance": 0.999460761301924,
    "kurtosis": 0.07093785957353882,
    "skewness": -0.05032836478048554,
    "range": 6.603763,
    "min": -3.315975,
    "max": 3.287788,
    "sum": 1.3195500000001386,
    "count": 1378
  },
  "I072": {
    "name": "I072",
    "mean": -0.0003179129172714531,
    "stderr": 0.026946524932755025,
    "median": 0.0075105,
    "mode": 42,
    "stdev": 1.0002933338782622,
    "samplevariance": 1.0005867538012887,
    "kurtosis": 0.04646855918362247,
    "skewness": 0.004643292912693318,
    "range": 6.545956,
    "min": -3.268807,
    "max": 3.277149,
    "sum": -0.4380840000000623,
    "count": 1378
  },
  "I073": {
    "name": "I073",
    "mean": 0.0009608809869377622,
    "stderr": 0.02693124097747106,
    "median": 0.013684,
    "mode": 42,
    "stdev": 0.9997259717184291,
    "samplevariance": 0.9994520185283573,
    "kurtosis": 0.051948086877338095,
    "skewness": -0.05007704128280671,
    "range": 6.576757000000001,
    "min": -3.305426,
    "max": 3.271331,
    "sum": 1.3240940000002364,
    "count": 1378
  },
  "I074": {
    "name": "I074",
    "mean": 0.0008697822931783591,
    "stderr": 0.026934342397119657,
    "median": -0.007001500000000001,
    "mode": 42,
    "stdev": 0.9998411008272026,
    "samplevariance": 0.9996822269033522,
    "kurtosis": 0.016077810368527068,
    "skewness": 0.010538594678249557,
    "range": 6.520953,
    "min": -3.251989,
    "max": 3.268964,
    "sum": 1.198559999999779,
    "count": 1378
  },
  "I075": {
    "name": "I075",
    "mean": 0.0004857670537010341,
    "stderr": 0.026944018190335022,
    "median": -0.068817,
    "mode": -0.11815,
    "stdev": 1.000200280034075,
    "samplevariance": 1.000400600180242,
    "kurtosis": 0.175673015466856,
    "skewness": 0.10889066598256446,
    "range": 6.646832,
    "min": -3.280428,
    "max": 3.366404,
    "sum": 0.6693870000000249,
    "count": 1378
  },
  "I076": {
    "name": "I076",
    "mean": 0.002270233671988012,
    "stderr": 0.026852469542070472,
    "median": 0.132389,
    "mode": 0.132389,
    "stdev": 0.9968018639929297,
    "samplevariance": 0.9936139560597792,
    "kurtosis": 0.05710571882047599,
    "skewness": -0.03100350466521271,
    "range": 6.315493,
    "min": -3.139396,
    "max": 3.176097,
    "sum": 3.1283819999994806,
    "count": 1378
  },
  "I077": {
    "name": "I077",
    "mean": 0.002269441944847408,
    "stderr": 0.02685253399520507,
    "median": 0.0049925,
    "mode": -3.127286,
    "stdev": 0.9968042565849633,
    "samplevariance": 0.9936187259459014,
    "kurtosis": 0.052869497395479303,
    "skewness": -0.030828606379605827,
    "range": 6.313279,
    "min": -3.13834,
    "max": 3.174939,
    "sum": 3.127290999999728,
    "count": 1378
  },
  "I078": {
    "name": "I078",
    "mean": 0.0011393896952104697,
    "stderr": 0.026924269647842378,
    "median": 0.0070055,
    "mode": -1.387131,
    "stdev": 0.9994671860466869,
    "samplevariance": 0.9989346559840827,
    "kurtosis": -0.24179960263116973,
    "skewness": 0.06746461531286085,
    "range": 6.286242,
    "min": -3.073569,
    "max": 3.212673,
    "sum": 1.570079000000027,
    "count": 1378
  },
  "I079": {
    "name": "I079",
    "mean": 0.002298504354136461,
    "stderr": 0.026850057877767213,
    "median": 0.003946,
    "mode": 2.827065,
    "stdev": 0.9967123395836739,
    "samplevariance": 0.9934354878783609,
    "kurtosis": 0.011049752729168638,
    "skewness": 0.006322385839954546,
    "range": 6.359522,
    "min": -3.18221,
    "max": 3.177312,
    "sum": 3.167339000000043,
    "count": 1378
  },
  "I080": {
    "name": "I080",
    "mean": 0.00043929680696951757,
    "stderr": 0.026944816781900575,
    "median": -0.605291,
    "mode": -0.605291,
    "stdev": 1.0002299248888942,
    "samplevariance": 1.000459902643243,
    "kurtosis": 0.8750850090235005,
    "skewness": 1.4001711928910792,
    "range": 4.7232330000000005,
    "min": -0.605291,
    "max": 4.117942,
    "sum": 0.6053510000039952,
    "count": 1378
  },
  "I081": {
    "name": "I081",
    "mean": 0.0002743047895500731,
    "stderr": 0.02694700591231705,
    "median": -0.0155575,
    "mode": -1.573881,
    "stdev": 1.0003111885237435,
    "samplevariance": 1.000622473885784,
    "kurtosis": -0.3860358916470097,
    "skewness": 0.22961127210565002,
    "range": 4.882416,
    "min": -1.573881,
    "max": 3.308535,
    "sum": 0.37799200000000077,
    "count": 1378
  },
  "I082": {
    "name": "I082",
    "mean": -0.0006131473149487158,
    "stderr": 0.02694141191892017,
    "median": -0.0421615,
    "mode": -1.167643,
    "stdev": 1.0001035315320304,
    "samplevariance": 1.0002070737828388,
    "kurtosis": -0.45411878872062417,
    "skewness": 0.48218952910614343,
    "range": 4.633255,
    "min": -1.167643,
    "max": 3.465612,
    "sum": -0.8449169999993305,
    "count": 1378
  }
};

AppData.supergroups = [
  {
    "value" : 1,
    "name" : "This is the description for sg 1",
    "description" : "% of total length of major road intersections in NUTS3 unit exposed to 1 in 100 year fluvial flood."
  },
  {
    "value" : 2,
    "name" : "This is the description for sg 2",
    "description" : "These are the details about supergroups sg 2"
  },
  {
    "value" : 3,
    "name" : "This is the description for sg 3",
    "description" : "These are the details about supergroup sg 3"
  },
  {
    "value" : 4,
    "name" : "This is the description for sg 4",
    "description" : "These are the details about supergroup sg 4"
  },
  {
    "value" : 5,
    "name" : "This is the description for sg 5",
    "description" : "These are the details about supergroup sg 5"
  },
  {
    "value" : 6,
    "name" : "This is the description for sg 6",
    "description" : "These are the details about supergroup sg 6"
  },
  {
    "value" : 7,
    "name" : "This is the description for sg 7",
    "description" : "These are the details about supergroup sg 7"
  },
  {
    "value" : 8,
    "name" : "This is the description for sg 8",
    "description" : "These are the details about supergroup sg 8"
  },
  {
    "value" : 9,
    "name" : "This is the description for sg 9",
    "description" : "These are the details about supergroup sg 9"
  }
];

AppData.groups = [
  {
    "value" : 11,
    "name" : "This is the description for g 11",
    "description" : "These are the details about group g 11"
  },
  {
    "value" : 12,
    "name" : "This is the description for g 12",
    "description" : "These are the details about group g 12"
  },
  {
    "value" : 13,
    "name" : "This is the description for g 13",
    "description" : "These are the details about group g 13"
  },
  {
    "value" : 14,
    "name" : "This is the description for g 14",
    "description" : "These are the details about group g 14"
  },
  {
    "value" : 21,
    "name" : "This is the description for g 21",
    "description" : "These are the details about group g 21"
  },
  {
    "value" : 22,
    "name" : "This is the description for g 22",
    "description" : "These are the details about group g 22"
  },
  {
    "value" : 23,
    "name" : "This is the description for g 23",
    "description" : "These are the details about group g 23"
  },
  {
    "value" : 24,
    "name" : "This is the description for g 24",
    "description" : "These are the details about group g 24"
  },
  {
    "value" : 31,
    "name" : "This is the description for g 31",
    "description" : "These are the details about group g 31"
  },
  {
    "value" : 32,
    "name" : "This is the description for g 32",
    "description" : "These are the details about group g 32"
  },
  {
    "value" : 33,
    "name" : "This is the description for g 33",
    "description" : "These are the details about group g 33"
  },
  {
    "value" : 34,
    "name" : "This is the description for g 34",
    "description" : "These are the details about group g 34"
  },
  {
    "value" : 41,
    "name" : "This is the description for g 41",
    "description" : "These are the details about group g 41"
  },
  {
    "value" : 42,
    "name" : "This is the description for g 42",
    "description" : "These are the details about group g 42"
  },
  {
    "value" : 43,
    "name" : "This is the description for g 43",
    "description" : "These are the details about group g 43"
  },
  {
    "value" : 44,
    "name" : "This is the description for g 44",
    "description" : "These are the details about group g 44"
  },
  {
    "value" : 51,
    "name" : "This is the description for g 51",
    "description" : "These are the details about group g 51"
  },
  {
    "value" : 52,
    "name" : "This is the description for g 52",
    "description" : "These are the details about group g 52"
  },
  {
    "value" : 53,
    "name" : "This is the description for g 53",
    "description" : "These are the details about group g 53"
  },
  {
    "value" : 54,
    "name" : "This is the description for g 54",
    "description" : "These are the details about group g 54"
  },
  {
    "value" : 61,
    "name" : "This is the description for g 61",
    "description" : "These are the details about group g 61"
  },
  {
    "value" : 62,
    "name" : "This is the description for g 62",
    "description" : "These are the details about group g 62"
  },
  {
    "value" : 63,
    "name" : "This is the description for g 63",
    "description" : "These are the details about group g 63"
  },
  {
    "value" : 64,
    "name" : "This is the description for g 64",
    "description" : "These are the details about group g 64"
  },
  {
    "value" : 71,
    "name" : "This is the description for g 71",
    "description" : "These are the details about group g71"
  },
  {
    "value" : 72,
    "name" : "This is the description for g 72",
    "description" : "These are the details about group g72"
  },
  {
    "value" : 73,
    "name" : "This is the description for g 73",
    "description" : "These are the details about group g 73"
  },
  {
    "value" : 74,
    "name" : "This is the description for g 74",
    "description" : "These are the details about group g 74"
  },
  {
    "value" : 81,
    "name" : "This is the description for g 81",
    "description" : "These are the details about group g 81"
  },
  {
    "value" : 82,
    "name" : "This is the description for g 82",
    "description" : "These are the details about group g 82"
  },
  {
    "value" : 83,
    "name" : "This is the description for g 83",
    "description" : "These are the details about group g 83"
  },
  {
    "value" : 84,
    "name" : "This is the description for g 84",
    "description" : "These are the details about group g 84"
  },
  {
    "value" : 91,
    "name" : "This is the description for g 91",
    "description" : "These are the details about group g 91"
  },
  {
    "value" : 92,
    "name" : "This is the description for g 92",
    "description" : "These are the details about group g 92"
  },
  {
    "value" : 93,
    "name" : "This is the description for g 93",
    "description" : "These are the details about group g 93"
  },
  {
    "value" : 94,
    "name" : "This is the description for g 94",
    "description" : "These are the details about group g 94"
  }
];

AppData.nuts3 = {
  "AT111": {
    "nameLatin" : "Mittelburgenland",
    "nutsName" : "Mittelburgenland",
    "nameAscii" : "Mittelburgenland",
    "nameHtml" : "Mittelburgenland"
  },
  "AT112": {
    "nameLatin" : "Nordburgenland",
    "nutsName" : "Nordburgenland",
    "nameAscii" : "Nordburgenland",
    "nameHtml" : "Nordburgenland"
  },
  "AT113": {
    "nameLatin" : "Südburgenland",
    "nutsName" : "Südburgenland",
    "nameAscii" : "Sudburgenland",
    "nameHtml" : "S&#x00FC;dburgenland"
  },
  "AT121": {
    "nameLatin" : "Mostviertel-Eisenwurzen",
    "nutsName" : "Mostviertel-Eisenwurzen",
    "nameAscii" : "Mostviertel-Eisenwurzen",
    "nameHtml" : "Mostviertel-Eisenwurzen"
  },
  "AT122": {
    "nameLatin" : "Niederösterreich-Süd",
    "nutsName" : "Niederösterreich-Süd",
    "nameAscii" : "Niederosterreich-Sud",
    "nameHtml" : "Nieder&#x00F6;sterreich-S&#x00FC;d"
  },
  "AT123": {
    "nameLatin" : "Sankt Pölten",
    "nutsName" : "Sankt Pölten",
    "nameAscii" : "Sankt Polten",
    "nameHtml" : "Sankt P&#x00F6;lten"
  },
  "AT124": {
    "nameLatin" : "Waldviertel",
    "nutsName" : "Waldviertel",
    "nameAscii" : "Waldviertel",
    "nameHtml" : "Waldviertel"
  },
  "AT125": {
    "nameLatin" : "Weinviertel",
    "nutsName" : "Weinviertel",
    "nameAscii" : "Weinviertel",
    "nameHtml" : "Weinviertel"
  },
  "AT126": {
    "nameLatin" : "Wiener Umland/Nordteil",
    "nutsName" : "Wiener Umland/Nordteil",
    "nameAscii" : "Wiener Umland/Nordteil",
    "nameHtml" : "Wiener Umland/Nordteil"
  },
  "AT127": {
    "nameLatin" : "Wiener Umland/Südteil",
    "nutsName" : "Wiener Umland/Südteil",
    "nameAscii" : "Wiener Umland/Sudteil",
    "nameHtml" : "Wiener Umland/S&#x00FC;dteil"
  },
  "AT130": {
    "nameLatin" : "Wien",
    "nutsName" : "Wien",
    "nameAscii" : "Wien",
    "nameHtml" : "Wien"
  },
  "AT211": {
    "nameLatin" : "Klagenfurt-Villach",
    "nutsName" : "Klagenfurt-Villach",
    "nameAscii" : "Klagenfurt-Villach",
    "nameHtml" : "Klagenfurt-Villach"
  },
  "AT212": {
    "nameLatin" : "Oberkärnten",
    "nutsName" : "Oberkärnten",
    "nameAscii" : "Oberkarnten",
    "nameHtml" : "Oberk&#x00E4;rnten"
  },
  "AT213": {
    "nameLatin" : "Unterkärnten",
    "nutsName" : "Unterkärnten",
    "nameAscii" : "Unterkarnten",
    "nameHtml" : "Unterk&#x00E4;rnten"
  },
  "AT221": {
    "nameLatin" : "Graz",
    "nutsName" : "Graz",
    "nameAscii" : "Graz",
    "nameHtml" : "Graz"
  },
  "AT222": {
    "nameLatin" : "Liezen",
    "nutsName" : "Liezen",
    "nameAscii" : "Liezen",
    "nameHtml" : "Liezen"
  },
  "AT223": {
    "nameLatin" : "Östliche Obersteiermark",
    "nutsName" : "Östliche Obersteiermark",
    "nameAscii" : "Ostliche Obersteiermark",
    "nameHtml" : "&#x00D6;stliche Obersteiermark"
  },
  "AT225": {
    "nameLatin" : "West- und Südsteiermark",
    "nutsName" : "West- und Südsteiermark",
    "nameAscii" : "West- und Sudsteiermark",
    "nameHtml" : "West- und S&#x00FC;dsteiermark"
  },
  "AT226": {
    "nameLatin" : "Westliche Obersteiermark",
    "nutsName" : "Westliche Obersteiermark",
    "nameAscii" : "Westliche Obersteiermark",
    "nameHtml" : "Westliche Obersteiermark"
  },
  "AT311": {
    "nameLatin" : "Innviertel",
    "nutsName" : "Innviertel",
    "nameAscii" : "Innviertel",
    "nameHtml" : "Innviertel"
  },
  "AT312": {
    "nameLatin" : "Linz-Wels",
    "nutsName" : "Linz-Wels",
    "nameAscii" : "Linz-Wels",
    "nameHtml" : "Linz-Wels"
  },
  "AT313": {
    "nameLatin" : "Mühlviertel",
    "nutsName" : "Mühlviertel",
    "nameAscii" : "Muhlviertel",
    "nameHtml" : "M&#x00FC;hlviertel"
  },
  "AT314": {
    "nameLatin" : "Steyr-Kirchdorf",
    "nutsName" : "Steyr-Kirchdorf",
    "nameAscii" : "Steyr-Kirchdorf",
    "nameHtml" : "Steyr-Kirchdorf"
  },
  "AT321": {
    "nameLatin" : "Lungau",
    "nutsName" : "Lungau",
    "nameAscii" : "Lungau",
    "nameHtml" : "Lungau"
  },
  "AT322": {
    "nameLatin" : "Pinzgau-Pongau",
    "nutsName" : "Pinzgau-Pongau",
    "nameAscii" : "Pinzgau-Pongau",
    "nameHtml" : "Pinzgau-Pongau"
  },
  "AT323": {
    "nameLatin" : "Salzburg und Umgebung",
    "nutsName" : "Salzburg und Umgebung",
    "nameAscii" : "Salzburg Und Umgebung",
    "nameHtml" : "Salzburg Und Umgebung"
  },
  "AT332": {
    "nameLatin" : "Innsbruck",
    "nutsName" : "Innsbruck",
    "nameAscii" : "Innsbruck",
    "nameHtml" : "Innsbruck"
  },
  "AT333": {
    "nameLatin" : "Osttirol",
    "nutsName" : "Osttirol",
    "nameAscii" : "Osttirol",
    "nameHtml" : "Osttirol"
  },
  "AT334": {
    "nameLatin" : "Tiroler Oberland",
    "nutsName" : "Tiroler Oberland",
    "nameAscii" : "Tiroler Oberland",
    "nameHtml" : "Tiroler Oberland"
  },
  "AT335": {
    "nameLatin" : "Tiroler Unterland",
    "nutsName" : "Tiroler Unterland",
    "nameAscii" : "Tiroler Unterland",
    "nameHtml" : "Tiroler Unterland"
  },
  "AT342": {
    "nameLatin" : "Rheintal-Bodenseegebiet",
    "nutsName" : "Rheintal-Bodenseegebiet",
    "nameAscii" : "Rheintal-Bodenseegebiet",
    "nameHtml" : "Rheintal-Bodenseegebiet"
  },
  "BE100": {
    "nameLatin" : "Arr. de Bruxelles-Capitale / Arr. van Brussel-Hoofdstad",
    "nutsName" : "Arr. de Bruxelles-Capitale / Arr. van Brussel-Hoofdstad",
    "nameAscii" : "Arr. de Bruxelles-Capitale / Arr. van Brussel-Hoofdstad",
    "nameHtml" : "Arr. de Bruxelles-Capitale / Arr. van Brussel-Hoofdstad"
  },
  "BE211": {
    "nameLatin" : "Arr. Antwerpen",
    "nutsName" : "Arr. Antwerpen",
    "nameAscii" : "Arr. Antwerpen",
    "nameHtml" : "Arr. Antwerpen"
  },
  "BE212": {
    "nameLatin" : "Arr. Mechelen",
    "nutsName" : "Arr. Mechelen",
    "nameAscii" : "Arr. Mechelen",
    "nameHtml" : "Arr. Mechelen"
  },
  "BE213": {
    "nameLatin" : "Arr. Turnhout",
    "nutsName" : "Arr. Turnhout",
    "nameAscii" : "Arr. Turnhout",
    "nameHtml" : "Arr. Turnhout"
  },
  "BE221": {
    "nameLatin" : "Arr. Hasselt",
    "nutsName" : "Arr. Hasselt",
    "nameAscii" : "Arr. Hasselt",
    "nameHtml" : "Arr. Hasselt"
  },
  "BE222": {
    "nameLatin" : "Arr. Maaseik",
    "nutsName" : "Arr. Maaseik",
    "nameAscii" : "Arr. Maaseik",
    "nameHtml" : "Arr. Maaseik"
  },
  "BE223": {
    "nameLatin" : "Arr. Tongeren",
    "nutsName" : "Arr. Tongeren",
    "nameAscii" : "Arr. Tongeren",
    "nameHtml" : "Arr. Tongeren"
  },
  "BE231": {
    "nameLatin" : "Arr. Aalst",
    "nutsName" : "Arr. Aalst",
    "nameAscii" : "Arr. Aalst",
    "nameHtml" : "Arr. Aalst"
  },
  "BE232": {
    "nameLatin" : "Arr. Dendermonde",
    "nutsName" : "Arr. Dendermonde",
    "nameAscii" : "Arr. Dendermonde",
    "nameHtml" : "Arr. Dendermonde"
  },
  "BE233": {
    "nameLatin" : "Arr. Eeklo",
    "nutsName" : "Arr. Eeklo",
    "nameAscii" : "Arr. Eeklo",
    "nameHtml" : "Arr. Eeklo"
  },
  "BE234": {
    "nameLatin" : "Arr. Gent",
    "nutsName" : "Arr. Gent",
    "nameAscii" : "Arr. Gent",
    "nameHtml" : "Arr. Gent"
  },
  "BE236": {
    "nameLatin" : "Arr. Sint-Niklaas",
    "nutsName" : "Arr. Sint-Niklaas",
    "nameAscii" : "Arr. Sint-Niklaas",
    "nameHtml" : "Arr. Sint-Niklaas"
  },
  "BE241": {
    "nameLatin" : "Arr. Halle-Vilvoorde",
    "nutsName" : "Arr. Halle-Vilvoorde",
    "nameAscii" : "Arr. Halle-Vilvoorde",
    "nameHtml" : "Arr. Halle-Vilvoorde"
  },
  "BE242": {
    "nameLatin" : "Arr. Leuven",
    "nutsName" : "Arr. Leuven",
    "nameAscii" : "Arr. Leuven",
    "nameHtml" : "Arr. Leuven"
  },
  "BE251": {
    "nameLatin" : "Arr. Brugge",
    "nutsName" : "Arr. Brugge",
    "nameAscii" : "Arr. Brugge",
    "nameHtml" : "Arr. Brugge"
  },
  "BE252": {
    "nameLatin" : "Arr. Diksmuide",
    "nutsName" : "Arr. Diksmuide",
    "nameAscii" : "Arr. Diksmuide",
    "nameHtml" : "Arr. Diksmuide"
  },
  "BE253": {
    "nameLatin" : "Arr. Ieper",
    "nutsName" : "Arr. Ieper",
    "nameAscii" : "Arr. Ieper",
    "nameHtml" : "Arr. Ieper"
  },
  "BE254": {
    "nameLatin" : "Arr. Kortrijk",
    "nutsName" : "Arr. Kortrijk",
    "nameAscii" : "Arr. Kortrijk",
    "nameHtml" : "Arr. Kortrijk"
  },
  "BE255": {
    "nameLatin" : "Arr. Oostende",
    "nutsName" : "Arr. Oostende",
    "nameAscii" : "Arr. Oostende",
    "nameHtml" : "Arr. Oostende"
  },
  "BE256": {
    "nameLatin" : "Arr. Roeselare",
    "nutsName" : "Arr. Roeselare",
    "nameAscii" : "Arr. Roeselare",
    "nameHtml" : "Arr. Roeselare"
  },
  "BE257": {
    "nameLatin" : "Arr. Tielt",
    "nutsName" : "Arr. Tielt",
    "nameAscii" : "Arr. Tielt",
    "nameHtml" : "Arr. Tielt"
  },
  "BE310": {
    "nameLatin" : "Arr. Nivelles",
    "nutsName" : "Arr. Nivelles",
    "nameAscii" : "Arr. Nivelles",
    "nameHtml" : "Arr. Nivelles"
  },
  "BE321": {
    "nameLatin" : "Arr. Ath",
    "nutsName" : "Arr. Ath",
    "nameAscii" : "Arr. Ath",
    "nameHtml" : "Arr. Ath"
  },
  "BE322": {
    "nameLatin" : "Arr. Charleroi",
    "nutsName" : "Arr. Charleroi",
    "nameAscii" : "Arr. Charleroi",
    "nameHtml" : "Arr. Charleroi"
  },
  "BE323": {
    "nameLatin" : "Arr. Mons",
    "nutsName" : "Arr. Mons",
    "nameAscii" : "Arr. Mons",
    "nameHtml" : "Arr. Mons"
  },
  "BE324": {
    "nameLatin" : "Arr. Mouscron",
    "nutsName" : "Arr. Mouscron",
    "nameAscii" : "Arr. Mouscron",
    "nameHtml" : "Arr. Mouscron"
  },
  "BE325": {
    "nameLatin" : "Arr. Soignies",
    "nutsName" : "Arr. Soignies",
    "nameAscii" : "Arr. Soignies",
    "nameHtml" : "Arr. Soignies"
  },
  "BE327": {
    "nameLatin" : "Arr. Tournai",
    "nutsName" : "Arr. Tournai",
    "nameAscii" : "Arr. Tournai",
    "nameHtml" : "Arr. Tournai"
  },
  "BE331": {
    "nameLatin" : "Arr. Huy",
    "nutsName" : "Arr. Huy",
    "nameAscii" : "Arr. Huy",
    "nameHtml" : "Arr. Huy"
  },
  "BE334": {
    "nameLatin" : "Arr. Waremme",
    "nutsName" : "Arr. Waremme",
    "nameAscii" : "Arr. Waremme",
    "nameHtml" : "Arr. Waremme"
  },
  "BE335": {
    "nameLatin" : "Arr. Verviers - communes francophones",
    "nutsName" : "Arr. Verviers - communes francophones",
    "nameAscii" : "Arr. Verviers - Communes francophones",
    "nameHtml" : "Arr. Verviers - Communes fancophones"
  },
  "BE336": {
    "nameLatin" : "Bezirk Verviers - Deutschsprachige Gemeinschaft",
    "nutsName" : "Bezirk Verviers - Deutschsprachige Gemeinschaft",
    "nameAscii" : "Bezirk Verviers - Deutschsprachige Gemeinschaft",
    "nameHtml" : "Bezirk Verviers - Deutschsprachige Gemeinschaft"
  },
  "BE341": {
    "nameLatin" : "Arr. Arlon",
    "nutsName" : "Arr. Arlon",
    "nameAscii" : "Arr. Arlon",
    "nameHtml" : "Arr. Arlon"
  },
  "BE342": {
    "nameLatin" : "Arr. Bastogne",
    "nutsName" : "Arr. Bastogne",
    "nameAscii" : "Arr. Bastogne",
    "nameHtml" : "Arr. Bastogne"
  },
  "BE343": {
    "nameLatin" : "Arr. Marche-en-Famenne",
    "nutsName" : "Arr. Marche-en-Famenne",
    "nameAscii" : "Arr. Marche-en-Famenne",
    "nameHtml" : "Arr. Marche-en-Famenne"
  },
  "BE344": {
    "nameLatin" : "Arr. Neufchâteau",
    "nutsName" : "Arr. Neufchâteau",
    "nameAscii" : "Arr. Neufchateau",
    "nameHtml" : "Arr. Neufch&#x00E2;teau"
  },
  "BE345": {
    "nameLatin" : "Arr. Virton",
    "nutsName" : "Arr. Virton",
    "nameAscii" : "Arr. Virton",
    "nameHtml" : "Arr. Virton"
  },
  "BE351": {
    "nameLatin" : "Arr. Dinant",
    "nutsName" : "Arr. Dinant",
    "nameAscii" : "Arr. Dinant",
    "nameHtml" : "Arr. Dinant"
  },
  "BE352": {
    "nameLatin" : "Arr. Namur",
    "nutsName" : "Arr. Namur",
    "nameAscii" : "Arr. Namur",
    "nameHtml" : "Arr. Namur"
  },
  "BE353": {
    "nameLatin" : "Arr. Philippeville",
    "nutsName" : "Arr. Philippeville",
    "nameAscii" : "Arr. Philippeville",
    "nameHtml" : "Arr. Philippeville"
  },
  "BG311": {
    "nameLatin" : "Vidin",
    "nutsName" : "Видин",
    "nameAscii" : "Vidin",
    "nameHtml" : "&#x0412;&#x0438;&#x0434;&#x0438;&#x043D;"
  },
  "BG312": {
    "nameLatin" : "Montana",
    "nutsName" : "Монтана",
    "nameAscii" : "Montana",
    "nameHtml" : "&#x041C;&#x043E;&#x043D;&#x0442;&#x0430;&#x043D;&#x0430;"
  },
  "BG313": {
    "nameLatin" : "Vratsa",
    "nutsName" : "Враца",
    "nameAscii" : "Vratsa",
    "nameHtml" : "&#x0412;&#x0440;&#x0430;&#x0446;&#x0430;"
  },
  "BG314": {
    "nameLatin" : "Pleven",
    "nutsName" : "Плевен",
    "nameAscii" : "Pleven",
    "nameHtml" : "&#x041F;&#x043B;&#x0435;&#x0432;&#x0435;&#x043D;"
  },
  "BG315": {
    "nameLatin" : "Lovech",
    "nutsName" : "Ловеч",
    "nameAscii" : "Lovech",
    "nameHtml" : "&#x041B;&#x043E;&#x0432;&#x0435;&#x0447;"
  },
  "BG321": {
    "nameLatin" : "Veliko Tarnovo",
    "nutsName" : "Велико Търново",
    "nameAscii" : "Veliko Tarnovo",
    "nameHtml" : "&#x0412;&#x0435;&#x043B;&#x0438;&#x043A;&#x043E; &#x0422;&#x044A;&#x0440;&#x043D;&#x043E;&#x0432;&#x043E;"
  },
  "BG322": {
    "nameLatin" : "Gabrovo",
    "nutsName" : "Габрово",
    "nameAscii" : "Gabrovo",
    "nameHtml" : "&#x0413;&#x0430;&#x0431;&#x0440;&#x043E;&#x0432;&#x043E;"
  },
  "BG323": {
    "nameLatin" : "Ruse",
    "nutsName" : "Русе",
    "nameAscii" : "Ruse",
    "nameHtml" : "&#x0420;&#x0443;&#x0441;&#x0435;"
  },
  "BG324": {
    "nameLatin" : "Razgrad",
    "nutsName" : "Разград",
    "nameAscii" : "Razgrad",
    "nameHtml" : "&#x0420;&#x0430;&#x0437;&#x0433;&#x0440;&#x0430;&#x0434;"
  },
  "BG332": {
    "nameLatin" : "Dobrich",
    "nutsName" : "Добрич",
    "nameAscii" : "Dobrich",
    "nameHtml" : "&#x0414;&#x043E;&#x0431;&#x0440;&#x0438;&#x0447;"
  },
  "BG333": {
    "nameLatin" : "Shumen",
    "nutsName" : "Шумен",
    "nameAscii" : "Shumen",
    "nameHtml" : "&#x0428;&#x0443;&#x043C;&#x0435;&#x043D;"
  },
  "BG342": {
    "nameLatin" : "Sliven",
    "nutsName" : "Сливен",
    "nameAscii" : "Sliven",
    "nameHtml" : "&#x0421;&#x043B;&#x0438;&#x0432;&#x0435;&#x043D;"
  },
  "BG343": {
    "nameLatin" : "Yambol",
    "nutsName" : "Ямбол",
    "nameAscii" : "Yambol",
    "nameHtml" : "&#x042F;&#x043C;&#x0431;&#x043E;&#x043B;"
  },
  "BG411": {
    "nameLatin" : "Sofia (stolitsa)",
    "nutsName" : "София (столица)",
    "nameAscii" : "Sofia (stolitsa)",
    "nameHtml" : "&#x0421;&#x043E;&#x0444;&#x0438;&#x044F; (&#x0421;&#x0442;&#x043E;&#x043B;&#x0438;&#x0446;&#x0430;)"
  },
  "BG412": {
    "nameLatin" : "Sofia",
    "nutsName" : "София",
    "nameAscii" : "Sofia",
    "nameHtml" : "&#x0421;&#x043E;&#x0444;&#x0438;&#x044F;"
  },
  "BG413": {
    "nameLatin" : "Blagoevgrad",
    "nutsName" : "Благоевград",
    "nameAscii" : "Blagoevgrad",
    "nameHtml" : "&#x0411;&#x043B;&#x0430;&#x0433;&#x043E;&#x0435;&#x0432;&#x0433;&#x0440;&#x0430;&#x0434;"
  },
  "BG414": {
    "nameLatin" : "Pernik",
    "nutsName" : "Перник",
    "nameAscii" : "Pernik",
    "nameHtml" : "&#x041F;&#x0435;&#x0440;&#x043D;&#x0438;&#x043A;"
  },
  "BG415": {
    "nameLatin" : "Kyustendil",
    "nutsName" : "Кюстендил",
    "nameAscii" : "Kyustendil",
    "nameHtml" : "&#x041A;&#x044E;&#x0441;&#x0442;&#x0435;&#x043D;&#x0434;&#x0438;&#x043B;"
  },
  "BG421": {
    "nameLatin" : "Plovdiv",
    "nutsName" : "Пловдив",
    "nameAscii" : "Plovdiv",
    "nameHtml" : "&#x041F;&#x043B;&#x043E;&#x0432;&#x0434;&#x0438;&#x0432;"
  },
  "BG423": {
    "nameLatin" : "Pazardzhik",
    "nutsName" : "Пазарджик",
    "nameAscii" : "Pazardzhik",
    "nameHtml" : "&#x041F;&#x0430;&#x0437;&#x0430;&#x0440;&#x0434;&#x0436;&#x0438;&#x043A;"
  },
  "BG425": {
    "nameLatin" : "Kardzhali",
    "nutsName" : "Кърджали",
    "nameAscii" : "Kardzhali",
    "nameHtml" : "&#x041A;&#x044A;&#x0440;&#x0434;&#x0436;&#x0430;&#x043B;&#x0438;"
  },
  "CH011": {
    "nameLatin" : "Vaud",
    "nutsName" : "Vaud",
    "nameAscii" : "Vaud",
    "nameHtml" : "Vaud"
  },
  "CH012": {
    "nameLatin" : "Valais",
    "nutsName" : "Valais",
    "nameAscii" : "Valais",
    "nameHtml" : "Valais"
  },
  "CH013": {
    "nameLatin" : "Genève",
    "nutsName" : "Genève",
    "nameAscii" : "Geneve",
    "nameHtml" : "Gen&#x00E8;ve"
  },
  "CH021": {
    "nameLatin" : "Bern",
    "nutsName" : "Bern",
    "nameAscii" : "Bern",
    "nameHtml" : "Bern"
  },
  "CH022": {
    "nameLatin" : "Freiburg",
    "nutsName" : "Freiburg",
    "nameAscii" : "Freiburg",
    "nameHtml" : "Freiburg"
  },
  "CH023": {
    "nameLatin" : "Solothurn",
    "nutsName" : "Solothurn",
    "nameAscii" : "Solothurn",
    "nameHtml" : "Solothurn"
  },
  "CH024": {
    "nameLatin" : "Neuchâtel",
    "nutsName" : "Neuchâtel",
    "nameAscii" : "Neuchatel",
    "nameHtml" : "Neuch&#x00E2;tel"
  },
  "CH025": {
    "nameLatin" : "Jura",
    "nutsName" : "Jura",
    "nameAscii" : "Jura",
    "nameHtml" : "Jura"
  },
  "CH032": {
    "nameLatin" : "Basel-Landschaft",
    "nutsName" : "Basel-Landschaft",
    "nameAscii" : "Basel-Landschaft",
    "nameHtml" : "Basel-Landschaft"
  },
  "CH033": {
    "nameLatin" : "Aargau",
    "nutsName" : "Aargau",
    "nameAscii" : "Aargau",
    "nameHtml" : "Aargau"
  },
  "CH040": {
    "nameLatin" : "Zürich",
    "nutsName" : "Zürich",
    "nameAscii" : "Zurich",
    "nameHtml" : "Z&#x00FC;rich"
  },
  "CH052": {
    "nameLatin" : "Schaffhausen",
    "nutsName" : "Schaffhausen",
    "nameAscii" : "Schaffhausen",
    "nameHtml" : "Schaffhausen"
  },
  "CH053": {
    "nameLatin" : "Appenzell Ausserrhoden",
    "nutsName" : "Appenzell Ausserrhoden",
    "nameAscii" : "Appenzell Ausserrhoden",
    "nameHtml" : "Appenzell Ausserrhoden"
  },
  "CH055": {
    "nameLatin" : "St. Gallen",
    "nutsName" : "St. Gallen",
    "nameAscii" : "St. Gallen",
    "nameHtml" : "St. Gallen"
  },
  "CH056": {
    "nameLatin" : "Graubünden",
    "nutsName" : "Graubünden",
    "nameAscii" : "Graubunden",
    "nameHtml" : "Graub&#x00FC;nden"
  },
  "CH057": {
    "nameLatin" : "Thurgau",
    "nutsName" : "Thurgau",
    "nameAscii" : "Thurgau",
    "nameHtml" : "Thurgau"
  },
  "CH061": {
    "nameLatin" : "Luzern",
    "nutsName" : "Luzern",
    "nameAscii" : "Luzern",
    "nameHtml" : "Luzern"
  },
  "CH062": {
    "nameLatin" : "Uri",
    "nutsName" : "Uri",
    "nameAscii" : "Uri",
    "nameHtml" : "Uri"
  },
  "CH063": {
    "nameLatin" : "Schwyz",
    "nutsName" : "Schwyz",
    "nameAscii" : "Schwyz",
    "nameHtml" : "Schwyz"
  },
  "CH064": {
    "nameLatin" : "Obwalden",
    "nutsName" : "Obwalden",
    "nameAscii" : "Obwalden",
    "nameHtml" : "Obwalden"
  },
  "CH065": {
    "nameLatin" : "Nidwalden",
    "nutsName" : "Nidwalden",
    "nameAscii" : "Nidwalden",
    "nameHtml" : "Nidwalden"
  },
  "CH066": {
    "nameLatin" : "Zug",
    "nutsName" : "Zug",
    "nameAscii" : "Zug",
    "nameHtml" : "Zug"
  },
  "CH070": {
    "nameLatin" : "Ticino",
    "nutsName" : "Ticino",
    "nameAscii" : "Ticino",
    "nameHtml" : "Ticino"
  },
  "CY000": {
    "nameLatin" : "Kýpros",
    "nutsName" : "Κύπρος",
    "nameAscii" : "Kypros",
    "nameHtml" : "&#922;&#973;&#960;&#961;&#959;&#962;"
  },
  "CZ010": {
    "nameLatin" : "Hlavní mesto Praha",
    "nutsName" : "Hlavní mesto Praha",
    "nameAscii" : "Hlavni mesto Praha",
    "nameHtml" : "Hlavn&#x00ED; mesto Praha"
  },
  "CZ020": {
    "nameLatin" : "Stredoceský kraj",
    "nutsName" : "Stredoceský kraj",
    "nameAscii" : "Stredocesky kraj",
    "nameHtml" : "Stredocesk&#x00FD; kraj"
  },
  "CZ031": {
    "nameLatin" : "Jihoceský kraj",
    "nutsName" : "Jihoceský kraj",
    "nameAscii" : "Jihocesky kraj",
    "nameHtml" : "Jihocesk&#x00FD; kraj"
  },
  "CZ032": {
    "nameLatin" : "Plzenský kraj",
    "nutsName" : "Plzenský kraj",
    "nameAscii" : "Plzensky kraj",
    "nameHtml" : "Plzensk&#x00FD; kraj"
  },
  "CZ041": {
    "nameLatin" : "Karlovarský kraj",
    "nutsName" : "Karlovarský kraj",
    "nameAscii" : "Karlovarsky kraj",
    "nameHtml" : "Karlovarsk&#x00FD; kraj"
  },
  "CZ042": {
    "nameLatin" : "Ústecký kraj",
    "nutsName" : "Ústecký kraj",
    "nameAscii" : "Ustecky kraj",
    "nameHtml" : "&#x00DA;steck&#x00FD; kraj"
  },
  "CZ052": {
    "nameLatin" : "Královéhradecký kraj",
    "nutsName" : "Královéhradecký kraj",
    "nameAscii" : "Kralovehradecky kraj",
    "nameHtml" : "Kr&#x00E1;lov&#x00E9;hradeck&#x00FD; kraj"
  },
  "CZ053": {
    "nameLatin" : "Pardubický kraj",
    "nutsName" : "Pardubický kraj",
    "nameAscii" : "Pardubicky kraj",
    "nameHtml" : "Pardubick&#x00FD; kraj"
  },
  "CZ063": {
    "nameLatin" : "Kraj Vysocina",
    "nutsName" : "Kraj Vysocina",
    "nameAscii" : "Kraj Vysocina",
    "nameHtml" : "Kraj Vysocina"
  },
  "CZ064": {
    "nameLatin" : "Jihomoravský kraj",
    "nutsName" : "Jihomoravský kraj",
    "nameAscii" : "Jihomoravsky kraj",
    "nameHtml" : "Jihomoravsk&#x00FD; kraj"
  },
  "CZ072": {
    "nameLatin" : "Zlínský kraj",
    "nutsName" : "Zlínský kraj",
    "nameAscii" : "Zlinsky kraj",
    "nameHtml" : "Zl&#x00ED;nsk&#x00FD; kraj"
  },
  "CZ080": {
    "nameLatin" : "Moravskoslezský kraj",
    "nutsName" : "Moravskoslezský kraj",
    "nameAscii" : "Moravskoslezsky kraj",
    "nameHtml" : "Moravskoslezsk&#x00FD; kraj"
  },
  "DE111": {
    "nameLatin" : "Stuttgart, Stadtkreis",
    "nutsName" : "Stuttgart, Stadtkreis",
    "nameAscii" : "Stuttgart, Stadtkreis",
    "nameHtml" : "Stuttgart, Stadtkreis"
  },
  "DE112": {
    "nameLatin" : "Böblingen",
    "nutsName" : "Böblingen",
    "nameAscii" : "Boblingen",
    "nameHtml" : "B&#x00F6;blingen"
  },
  "DE113": {
    "nameLatin" : "Esslingen",
    "nutsName" : "Esslingen",
    "nameAscii" : "Esslingen",
    "nameHtml" : "Esslingen"
  },
  "DE114": {
    "nameLatin" : "Göppingen",
    "nutsName" : "Göppingen",
    "nameAscii" : "Goppingen",
    "nameHtml" : "G&#x00F6;ppingen"
  },
  "DE115": {
    "nameLatin" : "Ludwigsburg",
    "nutsName" : "Ludwigsburg",
    "nameAscii" : "Ludwigsburg",
    "nameHtml" : "Ludwigsburg"
  },
  "DE117": {
    "nameLatin" : "Heilbronn, Stadtkreis",
    "nutsName" : "Heilbronn, Stadtkreis",
    "nameAscii" : "Heilbronn, Stadtkreis",
    "nameHtml" : "Heilbronn, Stadtkreis"
  },
  "DE118": {
    "nameLatin" : "Heilbronn, Landkreis",
    "nutsName" : "Heilbronn, Landkreis",
    "nameAscii" : "Heilbronn, Landkreis",
    "nameHtml" : "Heilbronn, Landkreis"
  },
  "DE119": {
    "nameLatin" : "Hohenlohekreis",
    "nutsName" : "Hohenlohekreis",
    "nameAscii" : "Hohenlohekreis",
    "nameHtml" : "Hohenlohekreis"
  },
  "DE11B": {
    "nameLatin" : "Main-Tauber-Kreis",
    "nutsName" : "Main-Tauber-Kreis",
    "nameAscii" : "Main-Tauber-Kreis",
    "nameHtml" : "Main-Tauber-Kreis"
  },
  "DE11C": {
    "nameLatin" : "Heidenheim",
    "nutsName" : "Heidenheim",
    "nameAscii" : "Heidenheim",
    "nameHtml" : "Heidenheim"
  },
  "DE11D": {
    "nameLatin" : "Ostalbkreis",
    "nutsName" : "Ostalbkreis",
    "nameAscii" : "Ostalbkreis",
    "nameHtml" : "Ostalbkreis"
  },
  "DE121": {
    "nameLatin" : "Baden-Baden, Stadtkreis",
    "nutsName" : "Baden-Baden, Stadtkreis",
    "nameAscii" : "Baden-Baden, Stadtkreis",
    "nameHtml" : "Baden-Baden, Stadtkreis"
  },
  "DE123": {
    "nameLatin" : "Karlsruhe, Landkreis",
    "nutsName" : "Karlsruhe, Landkreis",
    "nameAscii" : "Karlsruhe, Landkreis",
    "nameHtml" : "Karlsruhe, Landkreis"
  },
  "DE124": {
    "nameLatin" : "Rastatt",
    "nutsName" : "Rastatt",
    "nameAscii" : "Rastatt",
    "nameHtml" : "Rastatt"
  },
  "DE125": {
    "nameLatin" : "Heidelberg, Stadtkreis",
    "nutsName" : "Heidelberg, Stadtkreis",
    "nameAscii" : "Heidelberg, Stadtkreis",
    "nameHtml" : "Heidelberg, Stadtkreis"
  },
  "DE126": {
    "nameLatin" : "Mannheim, Stadtkreis",
    "nutsName" : "Mannheim, Stadtkreis",
    "nameAscii" : "Mannheim, Stadtkreis",
    "nameHtml" : "Mannheim, Stadtkreis"
  },
  "DE127": {
    "nameLatin" : "Neckar-Odenwald-Kreis",
    "nutsName" : "Neckar-Odenwald-Kreis",
    "nameAscii" : "Neckar-Odenwald-Kreis",
    "nameHtml" : "Neckar-Odenwald-Kreis"
  },
  "DE128": {
    "nameLatin" : "Rhein-Neckar-Kreis",
    "nutsName" : "Rhein-Neckar-Kreis",
    "nameAscii" : "Rhein-Neckar-Kreis",
    "nameHtml" : "Rhein-Neckar-Kreis"
  },
  "DE12A": {
    "nameLatin" : "Calw",
    "nutsName" : "Calw",
    "nameAscii" : "Calw",
    "nameHtml" : "Calw"
  },
  "DE12B": {
    "nameLatin" : "Enzkreis",
    "nutsName" : "Enzkreis",
    "nameAscii" : "Enzkreis",
    "nameHtml" : "Enzkreis"
  },
  "DE12C": {
    "nameLatin" : "Freudenstadt",
    "nutsName" : "Freudenstadt",
    "nameAscii" : "Freudenstadt",
    "nameHtml" : "Freudenstadt"
  },
  "DE131": {
    "nameLatin" : "Freiburg im Breisgau, Stadtkreis",
    "nutsName" : "Freiburg im Breisgau, Stadtkreis",
    "nameAscii" : "Freiburg im Breisgau, Stadtkreis",
    "nameHtml" : "Freiburg im Breisgau, Stadtkreis"
  },
  "DE132": {
    "nameLatin" : "Breisgau-Hochschwarzwald",
    "nutsName" : "Breisgau-Hochschwarzwald",
    "nameAscii" : "Breisgau-Hochschwarzwald",
    "nameHtml" : "Breisgau-Hochschwarzwald"
  },
  "DE134": {
    "nameLatin" : "Ortenaukreis",
    "nutsName" : "Ortenaukreis",
    "nameAscii" : "Ortenaukreis",
    "nameHtml" : "Ortenaukreis"
  },
  "DE135": {
    "nameLatin" : "Rottweil",
    "nutsName" : "Rottweil",
    "nameAscii" : "Rottweil",
    "nameHtml" : "Rottweil"
  },
  "DE136": {
    "nameLatin" : "Schwarzwald-Baar-Kreis",
    "nutsName" : "Schwarzwald-Baar-Kreis",
    "nameAscii" : "Schwarzwald-Baar-Kreis",
    "nameHtml" : "Schwarzwald-Baar-Kreis"
  },
  "DE137": {
    "nameLatin" : "Tuttlingen",
    "nutsName" : "Tuttlingen",
    "nameAscii" : "Tuttlingen",
    "nameHtml" : "Tuttlingen"
  },
  "DE139": {
    "nameLatin" : "Lörrach",
    "nutsName" : "Lörrach",
    "nameAscii" : "Lorrach",
    "nameHtml" : "L&#x00F6;rrach"
  },
  "DE13A": {
    "nameLatin" : "Waldshut",
    "nutsName" : "Waldshut",
    "nameAscii" : "Waldshut",
    "nameHtml" : "Waldshut"
  },
  "DE141": {
    "nameLatin" : "Reutlingen",
    "nutsName" : "Reutlingen",
    "nameAscii" : "Reutlingen",
    "nameHtml" : "Reutlingen"
  },
  "DE143": {
    "nameLatin" : "Zollernalbkreis",
    "nutsName" : "Zollernalbkreis",
    "nameAscii" : "Zollernalbkreis",
    "nameHtml" : "Zollernalbkreis"
  },
  "DE144": {
    "nameLatin" : "Ulm, Stadtkreis",
    "nutsName" : "Ulm, Stadtkreis",
    "nameAscii" : "Ulm, Stadtkreis",
    "nameHtml" : "Ulm, Stadtkreis"
  },
  "DE145": {
    "nameLatin" : "Alb-Donau-Kreis",
    "nutsName" : "Alb-Donau-Kreis",
    "nameAscii" : "Alb-Donau-Kreis",
    "nameHtml" : "Alb-Donau-Kreis"
  },
  "DE146": {
    "nameLatin" : "Biberach",
    "nutsName" : "Biberach",
    "nameAscii" : "Biberach",
    "nameHtml" : "Biberach"
  },
  "DE147": {
    "nameLatin" : "Bodenseekreis",
    "nutsName" : "Bodenseekreis",
    "nameAscii" : "Bodenseekreis",
    "nameHtml" : "Bodenseekreis"
  },
  "DE148": {
    "nameLatin" : "Ravensburg",
    "nutsName" : "Ravensburg",
    "nameAscii" : "Ravensburg",
    "nameHtml" : "Ravensburg"
  },
  "DE149": {
    "nameLatin" : "Sigmaringen",
    "nutsName" : "Sigmaringen",
    "nameAscii" : "Sigmaringen",
    "nameHtml" : "Sigmaringen"
  },
  "DE211": {
    "nameLatin" : "Ingolstadt, Kreisfreie Stadt",
    "nutsName" : "Ingolstadt, Kreisfreie Stadt",
    "nameAscii" : "Ingolstadt, Kreisfreie Stadt",
    "nameHtml" : "Ingolstadt, Kreisfreie Stadt"
  },
  "DE213": {
    "nameLatin" : "Rosenheim, Kreisfreie Stadt",
    "nutsName" : "Rosenheim, Kreisfreie Stadt",
    "nameAscii" : "Rosenheim, Kreisfreie Stadt",
    "nameHtml" : "Rosenheim, Kreisfreie Stadt"
  },
  "DE214": {
    "nameLatin" : "Altötting",
    "nutsName" : "Altötting",
    "nameAscii" : "Altotting",
    "nameHtml" : "Alt&#x00F6;tting"
  },
  "DE215": {
    "nameLatin" : "Berchtesgadener Land",
    "nutsName" : "Berchtesgadener Land",
    "nameAscii" : "Berchtesgadener Land",
    "nameHtml" : "Berchtesgadener Land"
  },
  "DE216": {
    "nameLatin" : "Bad Tölz-Wolfratshausen",
    "nutsName" : "Bad Tölz-Wolfratshausen",
    "nameAscii" : "Bad Tolz-Wolfratshausen",
    "nameHtml" : "Bad T&#x00F6;lz-Wolfratshausen"
  },
  "DE217": {
    "nameLatin" : "Dachau",
    "nutsName" : "Dachau",
    "nameAscii" : "Dachau",
    "nameHtml" : "Dachau"
  },
  "DE218": {
    "nameLatin" : "Ebersberg",
    "nutsName" : "Ebersberg",
    "nameAscii" : "Ebersberg",
    "nameHtml" : "Ebersberg"
  },
  "DE219": {
    "nameLatin" : "Eichstätt",
    "nutsName" : "Eichstätt",
    "nameAscii" : "Eichstatt",
    "nameHtml" : "Eichst&#x00E4;tt"
  },
  "DE21A": {
    "nameLatin" : "Erding",
    "nutsName" : "Erding",
    "nameAscii" : "Erding",
    "nameHtml" : "Erding"
  },
  "DE21B": {
    "nameLatin" : "Freising",
    "nutsName" : "Freising",
    "nameAscii" : "Freising",
    "nameHtml" : "Freising"
  },
  "DE21C": {
    "nameLatin" : "Fürstenfeldbruck",
    "nutsName" : "Fürstenfeldbruck",
    "nameAscii" : "Furstenfeldbruck",
    "nameHtml" : "F&#x00FC;rstenfeldbruck"
  },
  "DE21D": {
    "nameLatin" : "Garmisch-Partenkirchen",
    "nutsName" : "Garmisch-Partenkirchen",
    "nameAscii" : "Garmisch-Partenkirchen",
    "nameHtml" : "Garmisch-Partenkirchen"
  },
  "DE21E": {
    "nameLatin" : "Landsberg am Lech",
    "nutsName" : "Landsberg am Lech",
    "nameAscii" : "Landsberg am Lech",
    "nameHtml" : "Landsberg am Lech"
  },
  "DE21F": {
    "nameLatin" : "Miesbach",
    "nutsName" : "Miesbach",
    "nameAscii" : "Miesbach",
    "nameHtml" : "Miesbach"
  },
  "DE21G": {
    "nameLatin" : "Mühldorf a. Inn",
    "nutsName" : "Mühldorf a. Inn",
    "nameAscii" : "Muhldorf a. Inn",
    "nameHtml" : "M&#x00FC;hldorf a. Inn"
  },
  "DE21H": {
    "nameLatin" : "München, Landkreis",
    "nutsName" : "München, Landkreis",
    "nameAscii" : "Munchen, Landkreis",
    "nameHtml" : "M&#x00FC;nchen, Landkreis"
  },
  "DE21I": {
    "nameLatin" : "Neuburg-Schrobenhausen",
    "nutsName" : "Neuburg-Schrobenhausen",
    "nameAscii" : "Neuburg-Schrobenhausen",
    "nameHtml" : "Neuburg-Schrobenhausen"
  },
  "DE21J": {
    "nameLatin" : "Pfaffenhofen a. d. Ilm",
    "nutsName" : "Pfaffenhofen a. d. Ilm",
    "nameAscii" : "Pfaffenhofen a. d. Ilm",
    "nameHtml" : "Pfaffenhofen a. d. Ilm"
  },
  "DE21K": {
    "nameLatin" : "Rosenheim, Landkreis",
    "nutsName" : "Rosenheim, Landkreis",
    "nameAscii" : "Rosenheim, Landkreis",
    "nameHtml" : "Rosenheim, Landkreis"
  },
  "DE21L": {
    "nameLatin" : "Starnberg",
    "nutsName" : "Starnberg",
    "nameAscii" : "Starnberg",
    "nameHtml" : "Starnberg"
  },
  "DE21M": {
    "nameLatin" : "Traunstein",
    "nutsName" : "Traunstein",
    "nameAscii" : "Traunstein",
    "nameHtml" : "Traunstein"
  },
  "DE21N": {
    "nameLatin" : "Weilheim-Schongau",
    "nutsName" : "Weilheim-Schongau",
    "nameAscii" : "Weilheim-Schongau",
    "nameHtml" : "Weilheim-Schongau"
  },
  "DE221": {
    "nameLatin" : "Landshut, Kreisfreie Stadt",
    "nutsName" : "Landshut, Kreisfreie Stadt",
    "nameAscii" : "Landshut, Kreisfreie Stadt",
    "nameHtml" : "Landshut, Kreisfreie Stadt"
  },
  "DE222": {
    "nameLatin" : "Passau, Kreisfreie Stadt",
    "nutsName" : "Passau, Kreisfreie Stadt",
    "nameAscii" : "Passau, Kreisfreie Stadt",
    "nameHtml" : "Passau, Kreisfreie Stadt"
  },
  "DE223": {
    "nameLatin" : "Straubing, Kreisfreie Stadt",
    "nutsName" : "Straubing, Kreisfreie Stadt",
    "nameAscii" : "Straubing, Kreisfreie Stadt",
    "nameHtml" : "Straubing, Kreisfreie Stadt"
  },
  "DE224": {
    "nameLatin" : "Deggendorf",
    "nutsName" : "Deggendorf",
    "nameAscii" : "Deggendorf",
    "nameHtml" : "Deggendorf"
  },
  "DE225": {
    "nameLatin" : "Freyung-Grafenau",
    "nutsName" : "Freyung-Grafenau",
    "nameAscii" : "Freyung-Grafenau",
    "nameHtml" : "Freyung-Grafenau"
  },
  "DE226": {
    "nameLatin" : "Kelheim",
    "nutsName" : "Kelheim",
    "nameAscii" : "Kelheim",
    "nameHtml" : "Kelheim"
  },
  "DE228": {
    "nameLatin" : "Passau, Landkreis",
    "nutsName" : "Passau, Landkreis",
    "nameAscii" : "Passau, Landkreis",
    "nameHtml" : "Passau, Landkreis"
  },
  "DE229": {
    "nameLatin" : "Regen",
    "nutsName" : "Regen",
    "nameAscii" : "Regen",
    "nameHtml" : "Regen"
  },
  "DE22A": {
    "nameLatin" : "Rottal-Inn",
    "nutsName" : "Rottal-Inn",
    "nameAscii" : "Rottal-Inn",
    "nameHtml" : "Rottal-Inn"
  },
  "DE22B": {
    "nameLatin" : "Straubing-Bogen",
    "nutsName" : "Straubing-Bogen",
    "nameAscii" : "Straubing-Bogen",
    "nameHtml" : "Straubing-Bogen"
  },
  "DE22C": {
    "nameLatin" : "Dingolfing-Landau",
    "nutsName" : "Dingolfing-Landau",
    "nameAscii" : "Dingolfing-Landau",
    "nameHtml" : "Dingolfing-Landau"
  },
  "DE232": {
    "nameLatin" : "Regensburg, Kreisfreie Stadt",
    "nutsName" : "Regensburg, Kreisfreie Stadt",
    "nameAscii" : "Regensburg, Kreisfreie Stadt",
    "nameHtml" : "Regensburg, Kreisfreie Stadt"
  },
  "DE233": {
    "nameLatin" : "Weiden i. d. Opf, Kreisfreie Stadt",
    "nutsName" : "Weiden i. d. Opf, Kreisfreie Stadt",
    "nameAscii" : "Weiden i. d. Opf, Kreisfreie Stadt",
    "nameHtml" : "Weiden i. d. Opf, Kreisfreie Stadt"
  },
  "DE234": {
    "nameLatin" : "Amberg-Sulzbach",
    "nutsName" : "Amberg-Sulzbach",
    "nameAscii" : "Amberg-Sulzbach",
    "nameHtml" : "Amberg-Sulzbach"
  },
  "DE235": {
    "nameLatin" : "Cham",
    "nutsName" : "Cham",
    "nameAscii" : "Cham",
    "nameHtml" : "Cham"
  },
  "DE236": {
    "nameLatin" : "Neumarkt i. d. OPf.",
    "nutsName" : "Neumarkt i. d. OPf.",
    "nameAscii" : "Neumarkt i. d. Opf.",
    "nameHtml" : "Neumarkt i. d. Opf."
  },
  "DE238": {
    "nameLatin" : "Regensburg, Landkreis",
    "nutsName" : "Regensburg, Landkreis",
    "nameAscii" : "Regensburg, Landkreis",
    "nameHtml" : "Regensburg, Landkreis"
  },
  "DE239": {
    "nameLatin" : "Schwandorf",
    "nutsName" : "Schwandorf",
    "nameAscii" : "Schwandorf",
    "nameHtml" : "Schwandorf"
  },
  "DE23A": {
    "nameLatin" : "Tirschenreuth",
    "nutsName" : "Tirschenreuth",
    "nameAscii" : "Tirschenreuth",
    "nameHtml" : "Tirschenreuth"
  },
  "DE241": {
    "nameLatin" : "Bamberg, Kreisfreie Stadt",
    "nutsName" : "Bamberg, Kreisfreie Stadt",
    "nameAscii" : "Bamberg, Kreisfreie Stadt",
    "nameHtml" : "Bamberg, Kreisfreie Stadt"
  },
  "DE242": {
    "nameLatin" : "Bayreuth, Kreisfreie Stadt",
    "nutsName" : "Bayreuth, Kreisfreie Stadt",
    "nameAscii" : "Bayreuth, Kreisfreie Stadt",
    "nameHtml" : "Bayreuth, Kreisfreie Stadt"
  },
  "DE244": {
    "nameLatin" : "Hof, Kreisfreie Stadt",
    "nutsName" : "Hof, Kreisfreie Stadt",
    "nameAscii" : "Hof, Kreisfreie Stadt",
    "nameHtml" : "Hof, Kreisfreie Stadt"
  },
  "DE245": {
    "nameLatin" : "Bamberg, Landkreis",
    "nutsName" : "Bamberg, Landkreis",
    "nameAscii" : "Bamberg, Landkreis",
    "nameHtml" : "Bamberg, Landkreis"
  },
  "DE246": {
    "nameLatin" : "Bayreuth, Landkreis",
    "nutsName" : "Bayreuth, Landkreis",
    "nameAscii" : "Bayreuth, Landkreis",
    "nameHtml" : "Bayreuth, Landkreis"
  },
  "DE247": {
    "nameLatin" : "Coburg, Landkreis",
    "nutsName" : "Coburg, Landkreis",
    "nameAscii" : "Coburg, Landkreis",
    "nameHtml" : "Coburg, Landkreis"
  },
  "DE248": {
    "nameLatin" : "Forchheim",
    "nutsName" : "Forchheim",
    "nameAscii" : "Forchheim",
    "nameHtml" : "Forchheim"
  },
  "DE249": {
    "nameLatin" : "Hof, Landkreis",
    "nutsName" : "Hof, Landkreis",
    "nameAscii" : "Hof, Landkreis",
    "nameHtml" : "Hof, Landkreis"
  },
  "DE24A": {
    "nameLatin" : "Kronach",
    "nutsName" : "Kronach",
    "nameAscii" : "Kronach",
    "nameHtml" : "Kronach"
  },
  "DE24C": {
    "nameLatin" : "Lichtenfels",
    "nutsName" : "Lichtenfels",
    "nameAscii" : "Lichtenfels",
    "nameHtml" : "Lichtenfels"
  },
  "DE24D": {
    "nameLatin" : "Wunsiedel i. Fichtelgebirge",
    "nutsName" : "Wunsiedel i. Fichtelgebirge",
    "nameAscii" : "Wunsiedel i. Fichtelgebirge",
    "nameHtml" : "Wunsiedel i. Fichtelgebirge"
  },
  "DE251": {
    "nameLatin" : "Ansbach, Kreisfreie Stadt",
    "nutsName" : "Ansbach, Kreisfreie Stadt",
    "nameAscii" : "Ansbach, Kreisfreie Stadt",
    "nameHtml" : "Ansbach, Kreisfreie Stadt"
  },
  "DE252": {
    "nameLatin" : "Erlangen, Kreisfreie Stadt",
    "nutsName" : "Erlangen, Kreisfreie Stadt",
    "nameAscii" : "Erlangen, Kreisfreie Stadt",
    "nameHtml" : "Erlangen, Kreisfreie Stadt"
  },
  "DE254": {
    "nameLatin" : "Nürnberg, Kreisfreie Stadt",
    "nutsName" : "Nürnberg, Kreisfreie Stadt",
    "nameAscii" : "Nurnberg, Kreisfreie Stadt",
    "nameHtml" : "N&#x00FC;rnberg, Kreisfreie Stadt"
  },
  "DE255": {
    "nameLatin" : "Schwabach, Kreisfreie Stadt",
    "nutsName" : "Schwabach, Kreisfreie Stadt",
    "nameAscii" : "Schwabach, Kreisfreie Stadt",
    "nameHtml" : "Schwabach, Kreisfreie Stadt"
  },
  "DE256": {
    "nameLatin" : "Ansbach, Landkreis",
    "nutsName" : "Ansbach, Landkreis",
    "nameAscii" : "Ansbach, Landkreis",
    "nameHtml" : "Ansbach, Landkreis"
  },
  "DE257": {
    "nameLatin" : "Erlangen-Höchstadt",
    "nutsName" : "Erlangen-Höchstadt",
    "nameAscii" : "Erlangen-Hochstadt",
    "nameHtml" : "Erlangen-H&#x00F6;chstadt"
  },
  "DE259": {
    "nameLatin" : "Nürnberger Land",
    "nutsName" : "Nürnberger Land",
    "nameAscii" : "Nurnberger Land",
    "nameHtml" : "N&#x00FC;rnberger Land"
  },
  "DE25A": {
    "nameLatin" : "Neustadt a. d. Aisch-Bad Windsheim",
    "nutsName" : "Neustadt a. d. Aisch-Bad Windsheim",
    "nameAscii" : "Neustadt a. d. Aisch-Bad Windsheim",
    "nameHtml" : "Neustadt a. d. Aisch-Bad Windsheim"
  },
  "DE25B": {
    "nameLatin" : "Roth",
    "nutsName" : "Roth",
    "nameAscii" : "Roth",
    "nameHtml" : "Roth"
  },
  "DE25C": {
    "nameLatin" : "Weißenburg-Gunzenhausen",
    "nutsName" : "Weißenburg-Gunzenhausen",
    "nameAscii" : "Weissenburg-Gunzenhausen",
    "nameHtml" : "Wei&#x00DF;enburg-Gunzenhausen"
  },
  "DE261": {
    "nameLatin" : "Aschaffenburg, Kreisfreie Stadt",
    "nutsName" : "Aschaffenburg, Kreisfreie Stadt",
    "nameAscii" : "Aschaffenburg, Kreisfreie Stadt",
    "nameHtml" : "Aschaffenburg, Kreisfreie Stadt"
  },
  "DE262": {
    "nameLatin" : "Schweinfurt, Kreisfreie Stadt",
    "nutsName" : "Schweinfurt, Kreisfreie Stadt",
    "nameAscii" : "Schweinfurt, Kreisfreie Stadt",
    "nameHtml" : "Schweinfurt, Kreisfreie Stadt"
  },
  "DE264": {
    "nameLatin" : "Aschaffenburg, Landkreis",
    "nutsName" : "Aschaffenburg, Landkreis",
    "nameAscii" : "Aschaffenburg, Landkreis",
    "nameHtml" : "Aschaffenburg, Landkreis"
  },
  "DE265": {
    "nameLatin" : "Bad Kissingen",
    "nutsName" : "Bad Kissingen",
    "nameAscii" : "Bad Kissingen",
    "nameHtml" : "Bad Kissingen"
  },
  "DE266": {
    "nameLatin" : "Rhön-Grabfeld",
    "nutsName" : "Rhön-Grabfeld",
    "nameAscii" : "Rhon-Grabfeld",
    "nameHtml" : "Rh&#x00F6;n-Grabfeld"
  },
  "DE267": {
    "nameLatin" : "Haßberge",
    "nutsName" : "Haßberge",
    "nameAscii" : "Hassberge",
    "nameHtml" : "Ha&#x00DF;berge"
  },
  "DE268": {
    "nameLatin" : "Kitzingen",
    "nutsName" : "Kitzingen",
    "nameAscii" : "Kitzingen",
    "nameHtml" : "Kitzingen"
  },
  "DE269": {
    "nameLatin" : "Miltenberg",
    "nutsName" : "Miltenberg",
    "nameAscii" : "Miltenberg",
    "nameHtml" : "Miltenberg"
  },
  "DE26A": {
    "nameLatin" : "Main-Spessart",
    "nutsName" : "Main-Spessart",
    "nameAscii" : "Main-Spessart",
    "nameHtml" : "Main-Spessart"
  },
  "DE26C": {
    "nameLatin" : "Würzburg, Landkreis",
    "nutsName" : "Würzburg, Landkreis",
    "nameAscii" : "Wurzburg, Landkreis",
    "nameHtml" : "W&#x00FC;rzburg, Landkreis"
  },
  "DE271": {
    "nameLatin" : "Augsburg, Kreisfreie Stadt",
    "nutsName" : "Augsburg, Kreisfreie Stadt",
    "nameAscii" : "Augsburg, Kreisfreie Stadt",
    "nameHtml" : "Augsburg, Kreisfreie Stadt"
  },
  "DE272": {
    "nameLatin" : "Kaufbeuren, Kreisfreie Stadt",
    "nutsName" : "Kaufbeuren, Kreisfreie Stadt",
    "nameAscii" : "Kaufbeuren, Kreisfreie Stadt",
    "nameHtml" : "Kaufbeuren, Kreisfreie Stadt"
  },
  "DE274": {
    "nameLatin" : "Memmingen, Kreisfreie Stadt",
    "nutsName" : "Memmingen, Kreisfreie Stadt",
    "nameAscii" : "Memmingen, Kreisfreie Stadt",
    "nameHtml" : "Memmingen, Kreisfreie Stadt"
  },
  "DE275": {
    "nameLatin" : "Aichach-Friedberg",
    "nutsName" : "Aichach-Friedberg",
    "nameAscii" : "Aichach-Friedberg",
    "nameHtml" : "Aichach-Friedberg"
  },
  "DE276": {
    "nameLatin" : "Augsburg, Landkreis",
    "nutsName" : "Augsburg, Landkreis",
    "nameAscii" : "Augsburg, Landkreis",
    "nameHtml" : "Augsburg, Landkreis"
  },
  "DE277": {
    "nameLatin" : "Dillingen a.d. Donau",
    "nutsName" : "Dillingen a.d. Donau",
    "nameAscii" : "Dillingen a.d. Donau",
    "nameHtml" : "Dillingen a.d. Donau"
  },
  "DE278": {
    "nameLatin" : "Günzburg",
    "nutsName" : "Günzburg",
    "nameAscii" : "Gunzburg",
    "nameHtml" : "G&#x00FC;nzburg"
  },
  "DE279": {
    "nameLatin" : "Neu-Ulm",
    "nutsName" : "Neu-Ulm",
    "nameAscii" : "Neu-Ulm",
    "nameHtml" : "Neu-Ulm"
  },
  "DE27A": {
    "nameLatin" : "Lindau (Bodensee)",
    "nutsName" : "Lindau (Bodensee)",
    "nameAscii" : "Lindau (Bodensee)",
    "nameHtml" : "Lindau (Bodensee)"
  },
  "DE27B": {
    "nameLatin" : "Ostallgäu",
    "nutsName" : "Ostallgäu",
    "nameAscii" : "Ostallgau",
    "nameHtml" : "Ostallg&#x00E4;u"
  },
  "DE27C": {
    "nameLatin" : "Unterallgäu",
    "nutsName" : "Unterallgäu",
    "nameAscii" : "Unterallgau",
    "nameHtml" : "Unterallg&#x00E4;u"
  },
  "DE27D": {
    "nameLatin" : "Donau-Ries",
    "nutsName" : "Donau-Ries",
    "nameAscii" : "Donau-Ries",
    "nameHtml" : "Donau-Ries"
  },
  "DE27E": {
    "nameLatin" : "Oberallgäu",
    "nutsName" : "Oberallgäu",
    "nameAscii" : "Oberallgau",
    "nameHtml" : "Oberallg&#x00E4;u"
  },
  "DE300": {
    "nameLatin" : "Berlin",
    "nutsName" : "Berlin",
    "nameAscii" : "Berlin",
    "nameHtml" : "Berlin"
  },
  "DE401": {
    "nameLatin" : "Brandenburg an der Havel, Kreisfreie Stadt",
    "nutsName" : "Brandenburg an der Havel, Kreisfreie Stadt",
    "nameAscii" : "Brandenburg an der Havel, Kreisfreie Stadt",
    "nameHtml" : "Brandenburg an der Havel, Kreisfreie Stadt"
  },
  "DE402": {
    "nameLatin" : "Cottbus, Kreisfreie Stadt",
    "nutsName" : "Cottbus, Kreisfreie Stadt",
    "nameAscii" : "Cottbus, Kreisfreie Stadt",
    "nameHtml" : "Cottbus, Kreisfreie Stadt"
  },
  "DE403": {
    "nameLatin" : "Frankfurt (Oder), Kreisfreie Stadt",
    "nutsName" : "Frankfurt (Oder), Kreisfreie Stadt",
    "nameAscii" : "Frankfurt (Oder), Kreisfreie Stadt",
    "nameHtml" : "Frankfurt (Oder), Kreisfreie Stadt"
  },
  "DE404": {
    "nameLatin" : "Potsdam, Kreisfreie Stadt",
    "nutsName" : "Potsdam, Kreisfreie Stadt",
    "nameAscii" : "Potsdam, Kreisfreie Stadt",
    "nameHtml" : "Potsdam, Kreisfreie Stadt"
  },
  "DE405": {
    "nameLatin" : "Barnim",
    "nutsName" : "Barnim",
    "nameAscii" : "Barnim",
    "nameHtml" : "Barnim"
  },
  "DE407": {
    "nameLatin" : "Elbe-Elster",
    "nutsName" : "Elbe-Elster",
    "nameAscii" : "Elbe-Elster",
    "nameHtml" : "Elbe-Elster"
  },
  "DE408": {
    "nameLatin" : "Havelland",
    "nutsName" : "Havelland",
    "nameAscii" : "Havelland",
    "nameHtml" : "Havelland"
  },
  "DE409": {
    "nameLatin" : "Märkisch-Oderland",
    "nutsName" : "Märkisch-Oderland",
    "nameAscii" : "Markisch-Oderland",
    "nameHtml" : "M&#x00E4;rkisch-Oderland"
  },
  "DE40A": {
    "nameLatin" : "Oberhavel",
    "nutsName" : "Oberhavel",
    "nameAscii" : "Oberhavel",
    "nameHtml" : "Oberhavel"
  },
  "DE40B": {
    "nameLatin" : "Oberspreewald-Lausitz",
    "nutsName" : "Oberspreewald-Lausitz",
    "nameAscii" : "Oberspreewald-Lausitz",
    "nameHtml" : "Oberspreewald-Lausitz"
  },
  "DE40D": {
    "nameLatin" : "Ostprignitz-Ruppin",
    "nutsName" : "Ostprignitz-Ruppin",
    "nameAscii" : "Ostprignitz-Ruppin",
    "nameHtml" : "Ostprignitz-Ruppin"
  },
  "DE40E": {
    "nameLatin" : "Potsdam-Mittelmark",
    "nutsName" : "Potsdam-Mittelmark",
    "nameAscii" : "Potsdam-Mittelmark",
    "nameHtml" : "Potsdam-Mittelmark"
  },
  "DE40F": {
    "nameLatin" : "Prignitz",
    "nutsName" : "Prignitz",
    "nameAscii" : "Prignitz",
    "nameHtml" : "Prignitz"
  },
  "DE40H": {
    "nameLatin" : "Teltow-Fläming",
    "nutsName" : "Teltow-Fläming",
    "nameAscii" : "Teltow-Flaming",
    "nameHtml" : "Teltow-Fl&#x00E4;ming"
  },
  "DE40I": {
    "nameLatin" : "Uckermark",
    "nutsName" : "Uckermark",
    "nameAscii" : "Uckermark",
    "nameHtml" : "Uckermark"
  },
  "DE501": {
    "nameLatin" : "Bremen, Kreisfreie Stadt",
    "nutsName" : "Bremen, Kreisfreie Stadt",
    "nameAscii" : "Bremen, Kreisfreie Stadt",
    "nameHtml" : "Bremen, Kreisfreie Stadt"
  },
  "DE600": {
    "nameLatin" : "Hamburg",
    "nutsName" : "Hamburg",
    "nameAscii" : "Hamburg",
    "nameHtml" : "Hamburg"
  },
  "DE711": {
    "nameLatin" : "Darmstadt, Kreisfreie Stadt",
    "nutsName" : "Darmstadt, Kreisfreie Stadt",
    "nameAscii" : "Darmstadt, Kreisfreie Stadt",
    "nameHtml" : "Darmstadt, Kreisfreie Stadt"
  },
  "DE712": {
    "nameLatin" : "Frankfurt am Main, Kreisfreie Stadt",
    "nutsName" : "Frankfurt am Main, Kreisfreie Stadt",
    "nameAscii" : "Frankfurt am Main, Kreisfreie Stadt",
    "nameHtml" : "Frankfurt am Main, Kreisfreie Stadt"
  },
  "DE714": {
    "nameLatin" : "Wiesbaden, Kreisfreie Stadt",
    "nutsName" : "Wiesbaden, Kreisfreie Stadt",
    "nameAscii" : "Wiesbaden, Kreisfreie Stadt",
    "nameHtml" : "Wiesbaden, Kreisfreie Stadt"
  },
  "DE715": {
    "nameLatin" : "Bergstraße",
    "nutsName" : "Bergstraße",
    "nameAscii" : "Bergstrasse",
    "nameHtml" : "Bergstra&#x00DF;e"
  },
  "DE716": {
    "nameLatin" : "Darmstadt-Dieburg",
    "nutsName" : "Darmstadt-Dieburg",
    "nameAscii" : "Darmstadt-Dieburg",
    "nameHtml" : "Darmstadt-Dieburg"
  },
  "DE717": {
    "nameLatin" : "Groß-Gerau",
    "nutsName" : "Groß-Gerau",
    "nameAscii" : "Gross-Gerau",
    "nameHtml" : "Gro&#x00DF;-Gerau"
  },
  "DE718": {
    "nameLatin" : "Hochtaunuskreis",
    "nutsName" : "Hochtaunuskreis",
    "nameAscii" : "Hochtaunuskreis",
    "nameHtml" : "Hochtaunuskreis"
  },
  "DE719": {
    "nameLatin" : "Main-Kinzig-Kreis",
    "nutsName" : "Main-Kinzig-Kreis",
    "nameAscii" : "Main-Kinzig-Kreis",
    "nameHtml" : "Main-Kinzig-Kreis"
  },
  "DE71A": {
    "nameLatin" : "Main-Taunus-Kreis",
    "nutsName" : "Main-Taunus-Kreis",
    "nameAscii" : "Main-Taunus-Kreis",
    "nameHtml" : "Main-Taunus-Kreis"
  },
  "DE71B": {
    "nameLatin" : "Odenwaldkreis",
    "nutsName" : "Odenwaldkreis",
    "nameAscii" : "Odenwaldkreis",
    "nameHtml" : "Odenwaldkreis"
  },
  "DE71C": {
    "nameLatin" : "Offenbach, Landkreis",
    "nutsName" : "Offenbach, Landkreis",
    "nameAscii" : "Offenbach, Landkreis",
    "nameHtml" : "Offenbach, Landkreis"
  },
  "DE71E": {
    "nameLatin" : "Wetteraukreis",
    "nutsName" : "Wetteraukreis",
    "nameAscii" : "Wetteraukreis",
    "nameHtml" : "Wetteraukreis"
  },
  "DE721": {
    "nameLatin" : "Gießen, Landkreis",
    "nutsName" : "Gießen, Landkreis",
    "nameAscii" : "Giessen, Landkreis",
    "nameHtml" : "Gie&#x00DF;en, Landkreis"
  },
  "DE722": {
    "nameLatin" : "Lahn-Dill-Kreis",
    "nutsName" : "Lahn-Dill-Kreis",
    "nameAscii" : "Lahn-Dill-Kreis",
    "nameHtml" : "Lahn-Dill-Kreis"
  },
  "DE723": {
    "nameLatin" : "Limburg-Weilburg",
    "nutsName" : "Limburg-Weilburg",
    "nameAscii" : "Limburg-Weilburg",
    "nameHtml" : "Limburg-Weilburg"
  },
  "DE725": {
    "nameLatin" : "Vogelsbergkreis",
    "nutsName" : "Vogelsbergkreis",
    "nameAscii" : "Vogelsbergkreis",
    "nameHtml" : "Vogelsbergkreis"
  },
  "DE731": {
    "nameLatin" : "Kassel, Kreisfreie Stadt",
    "nutsName" : "Kassel, Kreisfreie Stadt",
    "nameAscii" : "Kassel, Kreisfreie Stadt",
    "nameHtml" : "Kassel, Kreisfreie Stadt"
  },
  "DE732": {
    "nameLatin" : "Fulda",
    "nutsName" : "Fulda",
    "nameAscii" : "Fulda",
    "nameHtml" : "Fulda"
  },
  "DE733": {
    "nameLatin" : "Hersfeld-Rotenburg",
    "nutsName" : "Hersfeld-Rotenburg",
    "nameAscii" : "Hersfeld-Rotenburg",
    "nameHtml" : "Hersfeld-Rotenburg"
  },
  "DE734": {
    "nameLatin" : "Kassel, Landkreis",
    "nutsName" : "Kassel, Landkreis",
    "nameAscii" : "Kassel, Landkreis",
    "nameHtml" : "Kassel, Landkreis"
  },
  "DE736": {
    "nameLatin" : "Waldeck-Frankenberg",
    "nutsName" : "Waldeck-Frankenberg",
    "nameAscii" : "Waldeck-Frankenberg",
    "nameHtml" : "Waldeck-Frankenberg"
  },
  "DE737": {
    "nameLatin" : "Werra-Meißner-Kreis",
    "nutsName" : "Werra-Meißner-Kreis",
    "nameAscii" : "Werra-Meissner-Kreis",
    "nameHtml" : "Werra-Mei&#x00DF;ner-Kreis"
  },
  "DE804": {
    "nameLatin" : "Schwerin, Kreisfreie Stadt",
    "nutsName" : "Schwerin, Kreisfreie Stadt",
    "nameAscii" : "Schwerin, Kreisfreie Stadt",
    "nameHtml" : "Schwerin, Kreisfreie Stadt"
  },
  "DE80J": {
    "nameLatin" : "Mecklenburgische Seenplatte",
    "nutsName" : "Mecklenburgische Seenplatte",
    "nameAscii" : "Mecklenburgische Seenplatte",
    "nameHtml" : "Mecklenburgische Seenplatte"
  },
  "DE80K": {
    "nameLatin" : "Landkreis Rostock",
    "nutsName" : "Landkreis Rostock",
    "nameAscii" : "Landkreis Rostock",
    "nameHtml" : "Landkreis Rostock"
  },
  "DE80L": {
    "nameLatin" : "Vorpommern-Rügen",
    "nutsName" : "Vorpommern-Rügen",
    "nameAscii" : "Vorpommern-Rugen",
    "nameHtml" : "Vorpommern-R&#x00FC;gen"
  },
  "DE80N": {
    "nameLatin" : "Vorpommern-Greifswald",
    "nutsName" : "Vorpommern-Greifswald",
    "nameAscii" : "Vorpommern-Greifswald",
    "nameHtml" : "Vorpommern-Greifswald"
  },
  "DE80O": {
    "nameLatin" : "Ludwigslust-Parchim",
    "nutsName" : "Ludwigslust-Parchim",
    "nameAscii" : "Ludwigslust-Parchim",
    "nameHtml" : "Ludwigslust-Parchim"
  },
  "DE911": {
    "nameLatin" : "Braunschweig, Kreisfreie Stadt",
    "nutsName" : "Braunschweig, Kreisfreie Stadt",
    "nameAscii" : "Braunschweig, Kreisfreie Stadt",
    "nameHtml" : "Braunschweig, Kreisfreie Stadt"
  },
  "DE913": {
    "nameLatin" : "Wolfsburg, Kreisfreie Stadt",
    "nutsName" : "Wolfsburg, Kreisfreie Stadt",
    "nameAscii" : "Wolfsburg, Kreisfreie Stadt",
    "nameHtml" : "Wolfsburg, Kreisfreie Stadt"
  },
  "DE914": {
    "nameLatin" : "Gifhorn",
    "nutsName" : "Gifhorn",
    "nameAscii" : "Gifhorn",
    "nameHtml" : "Gifhorn"
  },
  "DE915": {
    "nameLatin" : "Göttingen",
    "nutsName" : "Göttingen",
    "nameAscii" : "Gottingen",
    "nameHtml" : "G&#x00F6;ttingen"
  },
  "DE916": {
    "nameLatin" : "Goslar",
    "nutsName" : "Goslar",
    "nameAscii" : "Goslar",
    "nameHtml" : "Goslar"
  },
  "DE917": {
    "nameLatin" : "Helmstedt",
    "nutsName" : "Helmstedt",
    "nameAscii" : "Helmstedt",
    "nameHtml" : "Helmstedt"
  },
  "DE918": {
    "nameLatin" : "Northeim",
    "nutsName" : "Northeim",
    "nameAscii" : "Northeim",
    "nameHtml" : "Northeim"
  },
  "DE919": {
    "nameLatin" : "Osterode am Harz",
    "nutsName" : "Osterode am Harz",
    "nameAscii" : "Osterode am Harz",
    "nameHtml" : "Osterode am Harz"
  },
  "DE91A": {
    "nameLatin" : "Peine",
    "nutsName" : "Peine",
    "nameAscii" : "Peine",
    "nameHtml" : "Peine"
  },
  "DE91B": {
    "nameLatin" : "Wolfenbüttel",
    "nutsName" : "Wolfenbüttel",
    "nameAscii" : "Wolfenbuttel",
    "nameHtml" : "Wolfenb&#x00FC;ttel"
  },
  "DE922": {
    "nameLatin" : "Diepholz",
    "nutsName" : "Diepholz",
    "nameAscii" : "Diepholz",
    "nameHtml" : "Diepholz"
  },
  "DE923": {
    "nameLatin" : "Hameln-Pyrmont",
    "nutsName" : "Hameln-Pyrmont",
    "nameAscii" : "Hameln-Pyrmont",
    "nameHtml" : "Hameln-Pyrmont"
  },
  "DE925": {
    "nameLatin" : "Hildesheim",
    "nutsName" : "Hildesheim",
    "nameAscii" : "Hildesheim",
    "nameHtml" : "Hildesheim"
  },
  "DE926": {
    "nameLatin" : "Holzminden",
    "nutsName" : "Holzminden",
    "nameAscii" : "Holzminden",
    "nameHtml" : "Holzminden"
  },
  "DE927": {
    "nameLatin" : "Nienburg (Weser)",
    "nutsName" : "Nienburg (Weser)",
    "nameAscii" : "Nienburg (Weser)",
    "nameHtml" : "Nienburg (Weser)"
  },
  "DE928": {
    "nameLatin" : "Schaumburg",
    "nutsName" : "Schaumburg",
    "nameAscii" : "Schaumburg",
    "nameHtml" : "Schaumburg"
  },
  "DE929": {
    "nameLatin" : "Region Hannover",
    "nutsName" : "Region Hannover",
    "nameAscii" : "Region Hannover",
    "nameHtml" : "Region Hannover"
  },
  "DE931": {
    "nameLatin" : "Celle",
    "nutsName" : "Celle",
    "nameAscii" : "Celle",
    "nameHtml" : "Celle"
  },
  "DE932": {
    "nameLatin" : "Cuxhaven",
    "nutsName" : "Cuxhaven",
    "nameAscii" : "Cuxhaven",
    "nameHtml" : "Cuxhaven"
  },
  "DE933": {
    "nameLatin" : "Harburg",
    "nutsName" : "Harburg",
    "nameAscii" : "Harburg",
    "nameHtml" : "Harburg"
  },
  "DE934": {
    "nameLatin" : "Lüchow-Dannenberg",
    "nutsName" : "Lüchow-Dannenberg",
    "nameAscii" : "Luchow-Dannenberg",
    "nameHtml" : "L&#x00FC;chow-Dannenberg"
  },
  "DE935": {
    "nameLatin" : "Lüneburg, Landkreis",
    "nutsName" : "Lüneburg, Landkreis",
    "nameAscii" : "Luneburg, Landkreis",
    "nameHtml" : "L&#x00FC;neburg, Landkreis"
  },
  "DE936": {
    "nameLatin" : "Osterholz",
    "nutsName" : "Osterholz",
    "nameAscii" : "Osterholz",
    "nameHtml" : "Osterholz"
  },
  "DE937": {
    "nameLatin" : "Rotenburg (Wümme)",
    "nutsName" : "Rotenburg (Wümme)",
    "nameAscii" : "Rotenburg (Wumme)",
    "nameHtml" : "Rotenburg (W&#x00FC;mme)"
  },
  "DE938": {
    "nameLatin" : "Heidekreis",
    "nutsName" : "Heidekreis",
    "nameAscii" : "Heidekreis",
    "nameHtml" : "Heidekreis"
  },
  "DE939": {
    "nameLatin" : "Stade",
    "nutsName" : "Stade",
    "nameAscii" : "Stade",
    "nameHtml" : "Stade"
  },
  "DE93A": {
    "nameLatin" : "Uelzen",
    "nutsName" : "Uelzen",
    "nameAscii" : "Uelzen",
    "nameHtml" : "Uelzen"
  },
  "DE93B": {
    "nameLatin" : "Verden",
    "nutsName" : "Verden",
    "nameAscii" : "Verden",
    "nameHtml" : "Verden"
  },
  "DE941": {
    "nameLatin" : "Delmenhorst, Kreisfreie Stadt",
    "nutsName" : "Delmenhorst, Kreisfreie Stadt",
    "nameAscii" : "Delmenhorst, Kreisfreie Stadt",
    "nameHtml" : "Delmenhorst, Kreisfreie Stadt"
  },
  "DE942": {
    "nameLatin" : "Emden, Kreisfreie Stadt",
    "nutsName" : "Emden, Kreisfreie Stadt",
    "nameAscii" : "Emden, Kreisfreie Stadt",
    "nameHtml" : "Emden, Kreisfreie Stadt"
  },
  "DE944": {
    "nameLatin" : "Osnabrück, Kreisfreie Stadt",
    "nutsName" : "Osnabrück, Kreisfreie Stadt",
    "nameAscii" : "Osnabruck, Kreisfreie Stadt",
    "nameHtml" : "Osnabr&#x00FC;ck, Kreisfreie Stadt"
  },
  "DE945": {
    "nameLatin" : "Wilhelmshaven, Kreisfreie Stadt",
    "nutsName" : "Wilhelmshaven, Kreisfreie Stadt",
    "nameAscii" : "Wilhelmshaven, Kreisfreie Stadt",
    "nameHtml" : "Wilhelmshaven, Kreisfreie Stadt"
  },
  "DE946": {
    "nameLatin" : "Ammerland",
    "nutsName" : "Ammerland",
    "nameAscii" : "Ammerland",
    "nameHtml" : "Ammerland"
  },
  "DE947": {
    "nameLatin" : "Aurich",
    "nutsName" : "Aurich",
    "nameAscii" : "Aurich",
    "nameHtml" : "Aurich"
  },
  "DE948": {
    "nameLatin" : "Cloppenburg",
    "nutsName" : "Cloppenburg",
    "nameAscii" : "Cloppenburg",
    "nameHtml" : "Cloppenburg"
  },
  "DE949": {
    "nameLatin" : "Emsland",
    "nutsName" : "Emsland",
    "nameAscii" : "Emsland",
    "nameHtml" : "Emsland"
  },
  "DE94A": {
    "nameLatin" : "Friesland (DE)",
    "nutsName" : "Friesland (DE)",
    "nameAscii" : "Friesland (DE)",
    "nameHtml" : "Friesland (DE)"
  },
  "DE94B": {
    "nameLatin" : "Grafschaft Bentheim",
    "nutsName" : "Grafschaft Bentheim",
    "nameAscii" : "Grafschaft Bentheim",
    "nameHtml" : "Grafschaft Bentheim"
  },
  "DE94C": {
    "nameLatin" : "Leer",
    "nutsName" : "Leer",
    "nameAscii" : "Leer",
    "nameHtml" : "Leer"
  },
  "DE94D": {
    "nameLatin" : "Oldenburg, Landkreis",
    "nutsName" : "Oldenburg, Landkreis",
    "nameAscii" : "Oldenburg, Landkreis",
    "nameHtml" : "Oldenburg, Landkreis"
  },
  "DE94F": {
    "nameLatin" : "Vechta",
    "nutsName" : "Vechta",
    "nameAscii" : "Vechta",
    "nameHtml" : "Vechta"
  },
  "DE94G": {
    "nameLatin" : "Wesermarsch",
    "nutsName" : "Wesermarsch",
    "nameAscii" : "Wesermarsch",
    "nameHtml" : "Wesermarsch"
  },
  "DE94H": {
    "nameLatin" : "Wittmund",
    "nutsName" : "Wittmund",
    "nameAscii" : "Wittmund",
    "nameHtml" : "Wittmund"
  },
  "DEA11": {
    "nameLatin" : "Düsseldorf, Kreisfreie Stadt",
    "nutsName" : "Düsseldorf, Kreisfreie Stadt",
    "nameAscii" : "Dusseldorf, Kreisfreie Stadt",
    "nameHtml" : "D&#x00FC;sseldorf, Kreisfreie Stadt"
  },
  "DEA13": {
    "nameLatin" : "Essen, Kreisfreie Stadt",
    "nutsName" : "Essen, Kreisfreie Stadt",
    "nameAscii" : "Essen, Kreisfreie Stadt",
    "nameHtml" : "Essen, Kreisfreie Stadt"
  },
  "DEA14": {
    "nameLatin" : "Krefeld, Kreisfreie Stadt",
    "nutsName" : "Krefeld, Kreisfreie Stadt",
    "nameAscii" : "Krefeld, Kreisfreie Stadt",
    "nameHtml" : "Krefeld, Kreisfreie Stadt"
  },
  "DEA15": {
    "nameLatin" : "Mönchengladbach, Kreisfreie Stadt",
    "nutsName" : "Mönchengladbach, Kreisfreie Stadt",
    "nameAscii" : "Monchengladbach, Kreisfreie Stadt",
    "nameHtml" : "M&#x00F6;nchengladbach, Kreisfreie Stadt"
  },
  "DEA17": {
    "nameLatin" : "Oberhausen, Kreisfreie Stadt",
    "nutsName" : "Oberhausen, Kreisfreie Stadt",
    "nameAscii" : "Oberhausen, Kreisfreie Stadt",
    "nameHtml" : "Oberhausen, Kreisfreie Stadt"
  },
  "DEA18": {
    "nameLatin" : "Remscheid, Kreisfreie Stadt",
    "nutsName" : "Remscheid, Kreisfreie Stadt",
    "nameAscii" : "Remscheid, Kreisfreie Stadt",
    "nameHtml" : "Remscheid, Kreisfreie Stadt"
  },
  "DEA19": {
    "nameLatin" : "Solingen, Kreisfreie Stadt",
    "nutsName" : "Solingen, Kreisfreie Stadt",
    "nameAscii" : "Solingen, Kreisfreie Stadt",
    "nameHtml" : "Solingen, Kreisfreie Stadt"
  },
  "DEA1A": {
    "nameLatin" : "Wuppertal, Kreisfreie Stadt",
    "nutsName" : "Wuppertal, Kreisfreie Stadt",
    "nameAscii" : "Wuppertal, Kreisfreie Stadt",
    "nameHtml" : "Wuppertal, Kreisfreie Stadt"
  },
  "DEA1B": {
    "nameLatin" : "Kleve",
    "nutsName" : "Kleve",
    "nameAscii" : "Kleve",
    "nameHtml" : "Kleve"
  },
  "DEA1C": {
    "nameLatin" : "Mettmann",
    "nutsName" : "Mettmann",
    "nameAscii" : "Mettmann",
    "nameHtml" : "Mettmann"
  },
  "DEA1D": {
    "nameLatin" : "Rhein-Kreis Neuss",
    "nutsName" : "Rhein-Kreis Neuss",
    "nameAscii" : "Rhein-Kreis Neuss",
    "nameHtml" : "Rhein-Kreis Neuss"
  },
  "DEA1E": {
    "nameLatin" : "Viersen",
    "nutsName" : "Viersen",
    "nameAscii" : "Viersen",
    "nameHtml" : "Viersen"
  },
  "DEA1F": {
    "nameLatin" : "Wesel",
    "nutsName" : "Wesel",
    "nameAscii" : "Wesel",
    "nameHtml" : "Wesel"
  },
  "DEA23": {
    "nameLatin" : "Köln, Kreisfreie Stadt",
    "nutsName" : "Köln, Kreisfreie Stadt",
    "nameAscii" : "Koln, Kreisfreie Stadt",
    "nameHtml" : "K&#x00F6;ln, Kreisfreie Stadt"
  },
  "DEA24": {
    "nameLatin" : "Leverkusen, Kreisfreie Stadt",
    "nutsName" : "Leverkusen, Kreisfreie Stadt",
    "nameAscii" : "Leverkusen, Kreisfreie Stadt",
    "nameHtml" : "Leverkusen, Kreisfreie Stadt"
  },
  "DEA26": {
    "nameLatin" : "Düren",
    "nutsName" : "Düren",
    "nameAscii" : "Duren",
    "nameHtml" : "D&#x00FC;ren"
  },
  "DEA27": {
    "nameLatin" : "Rhein-Erft-Kreis",
    "nutsName" : "Rhein-Erft-Kreis",
    "nameAscii" : "Rhein-Erft-Kreis",
    "nameHtml" : "Rhein-Erft-Kreis"
  },
  "DEA28": {
    "nameLatin" : "Euskirchen",
    "nutsName" : "Euskirchen",
    "nameAscii" : "Euskirchen",
    "nameHtml" : "Euskirchen"
  },
  "DEA29": {
    "nameLatin" : "Heinsberg",
    "nutsName" : "Heinsberg",
    "nameAscii" : "Heinsberg",
    "nameHtml" : "Heinsberg"
  },
  "DEA2B": {
    "nameLatin" : "Rheinisch-Bergischer Kreis",
    "nutsName" : "Rheinisch-Bergischer Kreis",
    "nameAscii" : "Rheinisch-Bergischer Kreis",
    "nameHtml" : "Rheinisch-Bergischer Kreis"
  },
  "DEA2C": {
    "nameLatin" : "Rhein-Sieg-Kreis",
    "nutsName" : "Rhein-Sieg-Kreis",
    "nameAscii" : "Rhein-Sieg-Kreis",
    "nameHtml" : "Rhein-Sieg-Kreis"
  },
  "DEA2D": {
    "nameLatin" : "Städteregion Aachen",
    "nutsName" : "Städteregion Aachen",
    "nameAscii" : "Stadteregion Aachen",
    "nameHtml" : "St&#x00E4;dteregion Aachen"
  },
  "DEA32": {
    "nameLatin" : "Gelsenkirchen, Kreisfreie Stadt",
    "nutsName" : "Gelsenkirchen, Kreisfreie Stadt",
    "nameAscii" : "Gelsenkirchen, Kreisfreie Stadt",
    "nameHtml" : "Gelsenkirchen, Kreisfreie Stadt"
  },
  "DEA33": {
    "nameLatin" : "Münster, Kreisfreie Stadt",
    "nutsName" : "Münster, Kreisfreie Stadt",
    "nameAscii" : "Munster, Kreisfreie Stadt",
    "nameHtml" : "M&#x00FC;nster, Kreisfreie Stadt"
  },
  "DEA34": {
    "nameLatin" : "Borken",
    "nutsName" : "Borken",
    "nameAscii" : "Borken",
    "nameHtml" : "Borken"
  },
  "DEA35": {
    "nameLatin" : "Coesfeld",
    "nutsName" : "Coesfeld",
    "nameAscii" : "Coesfeld",
    "nameHtml" : "Coesfeld"
  },
  "DEA36": {
    "nameLatin" : "Recklinghausen",
    "nutsName" : "Recklinghausen",
    "nameAscii" : "Recklinghausen",
    "nameHtml" : "Recklinghausen"
  },
  "DEA37": {
    "nameLatin" : "Steinfurt",
    "nutsName" : "Steinfurt",
    "nameAscii" : "Steinfurt",
    "nameHtml" : "Steinfurt"
  },
  "DEA38": {
    "nameLatin" : "Warendorf",
    "nutsName" : "Warendorf",
    "nameAscii" : "Warendorf",
    "nameHtml" : "Warendorf"
  },
  "DEA42": {
    "nameLatin" : "Gütersloh",
    "nutsName" : "Gütersloh",
    "nameAscii" : "Gutersloh",
    "nameHtml" : "G&#x00FC;tersloh"
  },
  "DEA43": {
    "nameLatin" : "Herford",
    "nutsName" : "Herford",
    "nameAscii" : "Herford",
    "nameHtml" : "Herford"
  },
  "DEA44": {
    "nameLatin" : "Höxter",
    "nutsName" : "Höxter",
    "nameAscii" : "Hoxter",
    "nameHtml" : "H&#x00F6;xter"
  },
  "DEA45": {
    "nameLatin" : "Lippe",
    "nutsName" : "Lippe",
    "nameAscii" : "Lippe",
    "nameHtml" : "Lippe"
  },
  "DEA46": {
    "nameLatin" : "Minden-Lübbecke",
    "nutsName" : "Minden-Lübbecke",
    "nameAscii" : "Minden-Lubbecke",
    "nameHtml" : "Minden-L&#x00FC;bbecke"
  },
  "DEA47": {
    "nameLatin" : "Paderborn",
    "nutsName" : "Paderborn",
    "nameAscii" : "Paderborn",
    "nameHtml" : "Paderborn"
  },
  "DEA51": {
    "nameLatin" : "Bochum, Kreisfreie Stadt",
    "nutsName" : "Bochum, Kreisfreie Stadt",
    "nameAscii" : "Bochum, Kreisfreie Stadt",
    "nameHtml" : "Bochum, Kreisfreie Stadt"
  },
  "DEA52": {
    "nameLatin" : "Dortmund, Kreisfreie Stadt",
    "nutsName" : "Dortmund, Kreisfreie Stadt",
    "nameAscii" : "Dortmund, Kreisfreie Stadt",
    "nameHtml" : "Dortmund, Kreisfreie Stadt"
  },
  "DEA53": {
    "nameLatin" : "Hagen, Kreisfreie Stadt",
    "nutsName" : "Hagen, Kreisfreie Stadt",
    "nameAscii" : "Hagen, Kreisfreie Stadt",
    "nameHtml" : "Hagen, Kreisfreie Stadt"
  },
  "DEA54": {
    "nameLatin" : "Hamm, Kreisfreie Stadt",
    "nutsName" : "Hamm, Kreisfreie Stadt",
    "nameAscii" : "Hamm, Kreisfreie Stadt",
    "nameHtml" : "Hamm, Kreisfreie Stadt"
  },
  "DEA55": {
    "nameLatin" : "Herne, Kreisfreie Stadt",
    "nutsName" : "Herne, Kreisfreie Stadt",
    "nameAscii" : "Herne, Kreisfreie Stadt",
    "nameHtml" : "Herne, Kreisfreie Stadt"
  },
  "DEA56": {
    "nameLatin" : "Ennepe-Ruhr-Kreis",
    "nutsName" : "Ennepe-Ruhr-Kreis",
    "nameAscii" : "Ennepe-Ruhr-Kreis",
    "nameHtml" : "Ennepe-Ruhr-Kreis"
  },
  "DEA57": {
    "nameLatin" : "Hochsauerlandkreis",
    "nutsName" : "Hochsauerlandkreis",
    "nameAscii" : "Hochsauerlandkreis",
    "nameHtml" : "Hochsauerlandkreis"
  },
  "DEA58": {
    "nameLatin" : "Märkischer Kreis",
    "nutsName" : "Märkischer Kreis",
    "nameAscii" : "Markischer Kreis",
    "nameHtml" : "M&#x00E4;rkischer Kreis"
  },
  "DEA59": {
    "nameLatin" : "Olpe",
    "nutsName" : "Olpe",
    "nameAscii" : "Olpe",
    "nameHtml" : "Olpe"
  },
  "DEA5A": {
    "nameLatin" : "Siegen-Wittgenstein",
    "nutsName" : "Siegen-Wittgenstein",
    "nameAscii" : "Siegen-Wittgenstein",
    "nameHtml" : "Siegen-Wittgenstein"
  },
  "DEA5B": {
    "nameLatin" : "Soest",
    "nutsName" : "Soest",
    "nameAscii" : "Soest",
    "nameHtml" : "Soest"
  },
  "DEA5C": {
    "nameLatin" : "Unna",
    "nutsName" : "Unna",
    "nameAscii" : "Unna",
    "nameHtml" : "Unna"
  },
  "DEB11": {
    "nameLatin" : "Koblenz, Kreisfreie Stadt",
    "nutsName" : "Koblenz, Kreisfreie Stadt",
    "nameAscii" : "Koblenz, Kreisfreie Stadt",
    "nameHtml" : "Koblenz, Kreisfreie Stadt"
  },
  "DEB12": {
    "nameLatin" : "Ahrweiler",
    "nutsName" : "Ahrweiler",
    "nameAscii" : "Ahrweiler",
    "nameHtml" : "Ahrweiler"
  },
  "DEB13": {
    "nameLatin" : "Altenkirchen (Westerwald)",
    "nutsName" : "Altenkirchen (Westerwald)",
    "nameAscii" : "Altenkirchen (Westerwald)",
    "nameHtml" : "Altenkirchen (Westerwald)"
  },
  "DEB14": {
    "nameLatin" : "Bad Kreuznach",
    "nutsName" : "Bad Kreuznach",
    "nameAscii" : "Bad Kreuznach",
    "nameHtml" : "Bad Kreuznach"
  },
  "DEB15": {
    "nameLatin" : "Birkenfeld",
    "nutsName" : "Birkenfeld",
    "nameAscii" : "Birkenfeld",
    "nameHtml" : "Birkenfeld"
  },
  "DEB16": {
    "nameLatin" : "Cochem-Zell",
    "nutsName" : "Cochem-Zell",
    "nameAscii" : "Cochem-Zell",
    "nameHtml" : "Cochem-Zell"
  },
  "DEB17": {
    "nameLatin" : "Mayen-Koblenz",
    "nutsName" : "Mayen-Koblenz",
    "nameAscii" : "Mayen-Koblenz",
    "nameHtml" : "Mayen-Koblenz"
  },
  "DEB18": {
    "nameLatin" : "Neuwied",
    "nutsName" : "Neuwied",
    "nameAscii" : "Neuwied",
    "nameHtml" : "Neuwied"
  },
  "DEB19": {
    "nameLatin" : "Rhein-Hunsrück-Kreis",
    "nutsName" : "Rhein-Hunsrück-Kreis",
    "nameAscii" : "Rhein-Hunsruck-Kreis",
    "nameHtml" : "Rhein-Hunsr&#x00FC;ck-Kreis"
  },
  "DEB1A": {
    "nameLatin" : "Rhein-Lahn-Kreis",
    "nutsName" : "Rhein-Lahn-Kreis",
    "nameAscii" : "Rhein-Lahn-Kreis",
    "nameHtml" : "Rhein-Lahn-Kreis"
  },
  "DEB21": {
    "nameLatin" : "Trier, Kreisfreie Stadt",
    "nutsName" : "Trier, Kreisfreie Stadt",
    "nameAscii" : "Trier, Kreisfreie Stadt",
    "nameHtml" : "Trier, Kreisfreie Stadt"
  },
  "DEB22": {
    "nameLatin" : "Bernkastel-Wittlich",
    "nutsName" : "Bernkastel-Wittlich",
    "nameAscii" : "Bernkastel-Wittlich",
    "nameHtml" : "Bernkastel-Wittlich"
  },
  "DEB23": {
    "nameLatin" : "Eifelkreis Bitburg-Prüm",
    "nutsName" : "Eifelkreis Bitburg-Prüm",
    "nameAscii" : "Eifelkreis Bitburg-Prum",
    "nameHtml" : "Eifelkreis Bitburg-Pr&#x00FC;m"
  },
  "DEB25": {
    "nameLatin" : "Trier-Saarburg",
    "nutsName" : "Trier-Saarburg",
    "nameAscii" : "Trier-Saarburg",
    "nameHtml" : "Trier-Saarburg"
  },
  "DEB32": {
    "nameLatin" : "Kaiserslautern, Kreisfreie Stadt",
    "nutsName" : "Kaiserslautern, Kreisfreie Stadt",
    "nameAscii" : "Kaiserslautern, Kreisfreie Stadt",
    "nameHtml" : "Kaiserslautern, Kreisfreie Stadt"
  },
  "DEB33": {
    "nameLatin" : "Landau in der Pfalz, Kreisfreie Stadt",
    "nutsName" : "Landau in der Pfalz, Kreisfreie Stadt",
    "nameAscii" : "Landau in der Pfalz, Kreisfreie Stadt",
    "nameHtml" : "Landau in der Pfalz, Kreisfreie Stadt"
  },
  "DEB34": {
    "nameLatin" : "Ludwigshafen am Rhein, Kreisfreie Stadt",
    "nutsName" : "Ludwigshafen am Rhein, Kreisfreie Stadt",
    "nameAscii" : "Ludwigshafen am Rhein, Kreisfreie Stadt",
    "nameHtml" : "Ludwigshafen am Rhein, Kreisfreie Stadt"
  },
  "DEB35": {
    "nameLatin" : "Mainz, Kreisfreie Stadt",
    "nutsName" : "Mainz, Kreisfreie Stadt",
    "nameAscii" : "Mainz, Kreisfreie Stadt",
    "nameHtml" : "Mainz, Kreisfreie Stadt"
  },
  "DEB37": {
    "nameLatin" : "Pirmasens, Kreisfreie Stadt",
    "nutsName" : "Pirmasens, Kreisfreie Stadt",
    "nameAscii" : "Pirmasens, Kreisfreie Stadt",
    "nameHtml" : "Pirmasens, Kreisfreie Stadt"
  },
  "DEB38": {
    "nameLatin" : "Speyer, Kreisfreie Stadt",
    "nutsName" : "Speyer, Kreisfreie Stadt",
    "nameAscii" : "Speyer, Kreisfreie Stadt",
    "nameHtml" : "Speyer, Kreisfreie Stadt"
  },
  "DEB39": {
    "nameLatin" : "Worms, Kreisfreie Stadt",
    "nutsName" : "Worms, Kreisfreie Stadt",
    "nameAscii" : "Worms, Kreisfreie Stadt",
    "nameHtml" : "Worms, Kreisfreie Stadt"
  },
  "DEB3A": {
    "nameLatin" : "Zweibrücken, Kreisfreie Stadt",
    "nutsName" : "Zweibrücken, Kreisfreie Stadt",
    "nameAscii" : "Zweibrucken, Kreisfreie Stadt",
    "nameHtml" : "Zweibr&#x00FC;cken, Kreisfreie Stadt"
  },
  "DEB3B": {
    "nameLatin" : "Alzey-Worms",
    "nutsName" : "Alzey-Worms",
    "nameAscii" : "Alzey-Worms",
    "nameHtml" : "Alzey-Worms"
  },
  "DEB3C": {
    "nameLatin" : "Bad Dürkheim",
    "nutsName" : "Bad Dürkheim",
    "nameAscii" : "Bad Durkheim",
    "nameHtml" : "Bad D&#x00FC;rkheim"
  },
  "DEB3D": {
    "nameLatin" : "Donnersbergkreis",
    "nutsName" : "Donnersbergkreis",
    "nameAscii" : "Donnersbergkreis",
    "nameHtml" : "Donnersbergkreis"
  },
  "DEB3E": {
    "nameLatin" : "Germersheim",
    "nutsName" : "Germersheim",
    "nameAscii" : "Germersheim",
    "nameHtml" : "Germersheim"
  },
  "DEB3F": {
    "nameLatin" : "Kaiserslautern, Landkreis",
    "nutsName" : "Kaiserslautern, Landkreis",
    "nameAscii" : "Kaiserslautern, Landkreis",
    "nameHtml" : "Kaiserslautern, Landkreis"
  },
  "DEB3G": {
    "nameLatin" : "Kusel",
    "nutsName" : "Kusel",
    "nameAscii" : "Kusel",
    "nameHtml" : "Kusel"
  },
  "DEB3H": {
    "nameLatin" : "Südliche Weinstraße",
    "nutsName" : "Südliche Weinstraße",
    "nameAscii" : "Sudliche Weinstrasse",
    "nameHtml" : "S&#x00FC;dliche Weinstra&#x00DF;e"
  },
  "DEB3J": {
    "nameLatin" : "Mainz-Bingen",
    "nutsName" : "Mainz-Bingen",
    "nameAscii" : "Mainz-Bingen",
    "nameHtml" : "Mainz-Bingen"
  },
  "DEB3K": {
    "nameLatin" : "Südwestpfalz",
    "nutsName" : "Südwestpfalz",
    "nameAscii" : "Sudwestpfalz",
    "nameHtml" : "S&#x00FC;dwestpfalz"
  },
  "DEC02": {
    "nameLatin" : "Merzig-Wadern",
    "nutsName" : "Merzig-Wadern",
    "nameAscii" : "Merzig-Wadern",
    "nameHtml" : "Merzig-Wadern"
  },
  "DEC03": {
    "nameLatin" : "Neunkirchen",
    "nutsName" : "Neunkirchen",
    "nameAscii" : "Neunkirchen",
    "nameHtml" : "Neunkirchen"
  },
  "DEC04": {
    "nameLatin" : "Saarlouis",
    "nutsName" : "Saarlouis",
    "nameAscii" : "Saarlouis",
    "nameHtml" : "Saarlouis"
  },
  "DEC05": {
    "nameLatin" : "Saarpfalz-Kreis",
    "nutsName" : "Saarpfalz-Kreis",
    "nameAscii" : "Saarpfalz-Kreis",
    "nameHtml" : "Saarpfalz-Kreis"
  },
  "DEC06": {
    "nameLatin" : "St. Wendel",
    "nutsName" : "St. Wendel",
    "nameAscii" : "St. Wendel",
    "nameHtml" : "St. Wendel"
  },
  "DED21": {
    "nameLatin" : "Dresden, Kreisfreie Stadt",
    "nutsName" : "Dresden, Kreisfreie Stadt",
    "nameAscii" : "Dresden, Kreisfreie Stadt",
    "nameHtml" : "Dresden, Kreisfreie Stadt"
  },
  "DED2C": {
    "nameLatin" : "Bautzen",
    "nutsName" : "Bautzen",
    "nameAscii" : "Bautzen",
    "nameHtml" : "Bautzen"
  },
  "DED2D": {
    "nameLatin" : "Görlitz",
    "nutsName" : "Görlitz",
    "nameAscii" : "Gorlitz",
    "nameHtml" : "G&#x00F6;rlitz"
  },
  "DED2E": {
    "nameLatin" : "Meißen",
    "nutsName" : "Meißen",
    "nameAscii" : "Meissen",
    "nameHtml" : "Mei&#x00DF;en"
  },
  "DED41": {
    "nameLatin" : "Chemnitz, Kreisfreie Stadt",
    "nutsName" : "Chemnitz, Kreisfreie Stadt",
    "nameAscii" : "Chemnitz, Kreisfreie Stadt",
    "nameHtml" : "Chemnitz, Kreisfreie Stadt"
  },
  "DED42": {
    "nameLatin" : "Erzgebirgskreis",
    "nutsName" : "Erzgebirgskreis",
    "nameAscii" : "Erzgebirgskreis",
    "nameHtml" : "Erzgebirgskreis"
  },
  "DED43": {
    "nameLatin" : "Mittelsachsen",
    "nutsName" : "Mittelsachsen",
    "nameAscii" : "Mittelsachsen",
    "nameHtml" : "Mittelsachsen"
  },
  "DED44": {
    "nameLatin" : "Vogtlandkreis",
    "nutsName" : "Vogtlandkreis",
    "nameAscii" : "Vogtlandkreis",
    "nameHtml" : "Vogtlandkreis"
  },
  "DED45": {
    "nameLatin" : "Zwickau",
    "nutsName" : "Zwickau",
    "nameAscii" : "Zwickau",
    "nameHtml" : "Zwickau"
  },
  "DED51": {
    "nameLatin" : "Leipzig, Kreisfreie Stadt",
    "nutsName" : "Leipzig, Kreisfreie Stadt",
    "nameAscii" : "Leipzig, Kreisfreie Stadt",
    "nameHtml" : "Leipzig, Kreisfreie Stadt"
  },
  "DED52": {
    "nameLatin" : "Leipzig",
    "nutsName" : "Leipzig",
    "nameAscii" : "Leipzig",
    "nameHtml" : "Leipzig"
  },
  "DED53": {
    "nameLatin" : "Nordsachsen",
    "nutsName" : "Nordsachsen",
    "nameAscii" : "Nordsachsen",
    "nameHtml" : "Nordsachsen"
  },
  "DEE01": {
    "nameLatin" : "Dessau-Roßlau, Kreisfreie Stadt",
    "nutsName" : "Dessau-Roßlau, Kreisfreie Stadt",
    "nameAscii" : "Dessau-Rosslau, Kreisfreie Stadt",
    "nameHtml" : "Dessau-Ro&#x00DF;lau, Kreisfreie Stadt"
  },
  "DEE02": {
    "nameLatin" : "Halle (Saale), Kreisfreie Stadt",
    "nutsName" : "Halle (Saale), Kreisfreie Stadt",
    "nameAscii" : "Halle (Saale), Kreisfreie Stadt",
    "nameHtml" : "Halle (Saale), Kreisfreie Stadt"
  },
  "DEE04": {
    "nameLatin" : "Altmarkkreis Salzwedel",
    "nutsName" : "Altmarkkreis Salzwedel",
    "nameAscii" : "Altmarkkreis Salzwedel",
    "nameHtml" : "Altmarkkreis Salzwedel"
  },
  "DEE05": {
    "nameLatin" : "Anhalt-Bitterfeld",
    "nutsName" : "Anhalt-Bitterfeld",
    "nameAscii" : "Anhalt-Bitterfeld",
    "nameHtml" : "Anhalt-Bitterfeld"
  },
  "DEE06": {
    "nameLatin" : "Jerichower Land",
    "nutsName" : "Jerichower Land",
    "nameAscii" : "Jerichower Land",
    "nameHtml" : "Jerichower Land"
  },
  "DEE07": {
    "nameLatin" : "Börde",
    "nutsName" : "Börde",
    "nameAscii" : "Borde",
    "nameHtml" : "B&#x00F6;rde"
  },
  "DEE08": {
    "nameLatin" : "Burgenland (DE)",
    "nutsName" : "Burgenland (DE)",
    "nameAscii" : "Burgenland (DE)",
    "nameHtml" : "Burgenland (DE)"
  },
  "DEE09": {
    "nameLatin" : "Harz",
    "nutsName" : "Harz",
    "nameAscii" : "Harz",
    "nameHtml" : "Harz"
  },
  "DEE0A": {
    "nameLatin" : "Mansfeld-Südharz",
    "nutsName" : "Mansfeld-Südharz",
    "nameAscii" : "Mansfeld-Sudharz",
    "nameHtml" : "Mansfeld-S&#x00FC;dharz"
  },
  "DEE0B": {
    "nameLatin" : "Saalekreis",
    "nutsName" : "Saalekreis",
    "nameAscii" : "Saalekreis",
    "nameHtml" : "Saalekreis"
  },
  "DEE0C": {
    "nameLatin" : "Salzlandkreis",
    "nutsName" : "Salzlandkreis",
    "nameAscii" : "Salzlandkreis",
    "nameHtml" : "Salzlandkreis"
  },
  "DEE0D": {
    "nameLatin" : "Stendal",
    "nutsName" : "Stendal",
    "nameAscii" : "Stendal",
    "nameHtml" : "Stendal"
  },
  "DEE0E": {
    "nameLatin" : "Wittenberg",
    "nutsName" : "Wittenberg",
    "nameAscii" : "Wittenberg",
    "nameHtml" : "Wittenberg"
  },
  "DEF01": {
    "nameLatin" : "Flensburg, Kreisfreie Stadt",
    "nutsName" : "Flensburg, Kreisfreie Stadt",
    "nameAscii" : "Flensburg, Kreisfreie Stadt",
    "nameHtml" : "Flensburg, Kreisfreie Stadt"
  },
  "DEF02": {
    "nameLatin" : "Kiel, Kreisfreie Stadt",
    "nutsName" : "Kiel, Kreisfreie Stadt",
    "nameAscii" : "Kiel, Kreisfreie Stadt",
    "nameHtml" : "Kiel, Kreisfreie Stadt"
  },
  "DEF03": {
    "nameLatin" : "Lübeck, Kreisfreie Stadt",
    "nutsName" : "Lübeck, Kreisfreie Stadt",
    "nameAscii" : "Lubeck, Kreisfreie Stadt",
    "nameHtml" : "L&#x00FC;beck, Kreisfreie Stadt"
  },
  "DEF04": {
    "nameLatin" : "Neumünster, Kreisfreie Stadt",
    "nutsName" : "Neumünster, Kreisfreie Stadt",
    "nameAscii" : "Neumunster, Kreisfreie Stadt",
    "nameHtml" : "Neum&#x00FC;nster, Kreisfreie Stadt"
  },
  "DEF05": {
    "nameLatin" : "Dithmarschen",
    "nutsName" : "Dithmarschen",
    "nameAscii" : "Dithmarschen",
    "nameHtml" : "Dithmarschen"
  },
  "DEF06": {
    "nameLatin" : "Herzogtum Lauenburg",
    "nutsName" : "Herzogtum Lauenburg",
    "nameAscii" : "Herzogtum Lauenburg",
    "nameHtml" : "Herzogtum Lauenburg"
  },
  "DEF07": {
    "nameLatin" : "Nordfriesland",
    "nutsName" : "Nordfriesland",
    "nameAscii" : "Nordfriesland",
    "nameHtml" : "Nordfriesland"
  },
  "DEF08": {
    "nameLatin" : "Ostholstein",
    "nutsName" : "Ostholstein",
    "nameAscii" : "Ostholstein",
    "nameHtml" : "Ostholstein"
  },
  "DEF09": {
    "nameLatin" : "Pinneberg",
    "nutsName" : "Pinneberg",
    "nameAscii" : "Pinneberg",
    "nameHtml" : "Pinneberg"
  },
  "DEF0B": {
    "nameLatin" : "Rendsburg-Eckernförde",
    "nutsName" : "Rendsburg-Eckernförde",
    "nameAscii" : "Rendsburg-Eckernforde",
    "nameHtml" : "Rendsburg-Eckernf&#x00F6;rde"
  },
  "DEF0D": {
    "nameLatin" : "Segeberg",
    "nutsName" : "Segeberg",
    "nameAscii" : "Segeberg",
    "nameHtml" : "Segeberg"
  },
  "DEF0E": {
    "nameLatin" : "Steinburg",
    "nutsName" : "Steinburg",
    "nameAscii" : "Steinburg",
    "nameHtml" : "Steinburg"
  },
  "UKE45": {
    "nameLatin" : "Wakefield",
    "nutsName" : "Wakefield",
    "nameAscii" : "Wakefield",
    "nameHtml" : "Wakefield"
  },
  "UKF11": {
    "nameLatin" : "Derby",
    "nutsName" : "Derby",
    "nameAscii" : "Derby",
    "nameHtml" : "Derby"
  },
  "UKF12": {
    "nameLatin" : "East Derbyshire",
    "nutsName" : "East Derbyshire",
    "nameAscii" : "East Derbyshire",
    "nameHtml" : "East Derbyshire"
  },
  "UKF13": {
    "nameLatin" : "South and West Derbyshire",
    "nutsName" : "South and West Derbyshire",
    "nameAscii" : "South and West Derbyshire",
    "nameHtml" : "South and West Derbyshire"
  },
  "UKF14": {
    "nameLatin" : "Nottingham",
    "nutsName" : "Nottingham",
    "nameAscii" : "Nottingham",
    "nameHtml" : "Nottingham"
  },
  "UKF16": {
    "nameLatin" : "South Nottinghamshire",
    "nutsName" : "South Nottinghamshire",
    "nameAscii" : "South Nottinghamshire",
    "nameHtml" : "South Nottinghamshire"
  },
  "UKF21": {
    "nameLatin" : "Leicester",
    "nutsName" : "Leicester",
    "nameAscii" : "Leicester",
    "nameHtml" : "Leicester"
  },
  "UKF22": {
    "nameLatin" : "Leicestershire CC and Rutland",
    "nutsName" : "Leicestershire CC and Rutland",
    "nameAscii" : "Leicestershire CC and Rutland",
    "nameHtml" : "Leicestershire CC and Rutland"
  },
  "UKF25": {
    "nameLatin" : "North Northamptonshire",
    "nutsName" : "North Northamptonshire",
    "nameAscii" : "North Northamptonshire",
    "nameHtml" : "North Northamptonshire"
  },
  "UKF30": {
    "nameLatin" : "Lincolnshire",
    "nutsName" : "Lincolnshire",
    "nameAscii" : "Lincolnshire",
    "nameHtml" : "Lincolnshire"
  },
  "UKG11": {
    "nameLatin" : "Herefordshire, County of",
    "nutsName" : "Herefordshire, County of",
    "nameAscii" : "Herefordshire, County Of",
    "nameHtml" : "Herefordshire, County Of"
  },
  "UKG12": {
    "nameLatin" : "Worcestershire",
    "nutsName" : "Worcestershire",
    "nameAscii" : "Worcestershire",
    "nameHtml" : "Worcestershire"
  },
  "UKG13": {
    "nameLatin" : "Warwickshire",
    "nutsName" : "Warwickshire",
    "nameAscii" : "Warwickshire",
    "nameHtml" : "Warwickshire"
  },
  "UKG21": {
    "nameLatin" : "Telford and Wrekin",
    "nutsName" : "Telford and Wrekin",
    "nameAscii" : "Telford and Wrekin",
    "nameHtml" : "Telford and Wrekin"
  },
  "UKG22": {
    "nameLatin" : "Shropshire CC",
    "nutsName" : "Shropshire CC",
    "nameAscii" : "Shropshire CC",
    "nameHtml" : "Shropshire CC"
  },
  "UKG23": {
    "nameLatin" : "Stoke-on-Trent",
    "nutsName" : "Stoke-on-Trent",
    "nameAscii" : "Stoke-on-Trent",
    "nameHtml" : "Stoke-on-Trent"
  },
  "UKG24": {
    "nameLatin" : "Staffordshire CC",
    "nutsName" : "Staffordshire CC",
    "nameAscii" : "Staffordshire CC",
    "nameHtml" : "Staffordshire CC"
  },
  "UKG31": {
    "nameLatin" : "Birmingham",
    "nutsName" : "Birmingham",
    "nameAscii" : "Birmingham",
    "nameHtml" : "Birmingham"
  },
  "UKG32": {
    "nameLatin" : "Solihull",
    "nutsName" : "Solihull",
    "nameAscii" : "Solihull",
    "nameHtml" : "Solihull"
  },
  "UKG33": {
    "nameLatin" : "Coventry",
    "nutsName" : "Coventry",
    "nameAscii" : "Coventry",
    "nameHtml" : "Coventry"
  },
  "UKG36": {
    "nameLatin" : "Dudley",
    "nutsName" : "Dudley",
    "nameAscii" : "Dudley",
    "nameHtml" : "Dudley"
  },
  "UKG37": {
    "nameLatin" : "Sandwell",
    "nutsName" : "Sandwell",
    "nameAscii" : "Sandwell",
    "nameHtml" : "Sandwell"
  },
  "UKG38": {
    "nameLatin" : "Walsall",
    "nutsName" : "Walsall",
    "nameAscii" : "Walsall",
    "nameHtml" : "Walsall"
  },
  "UKH11": {
    "nameLatin" : "Peterborough",
    "nutsName" : "Peterborough",
    "nameAscii" : "Peterborough",
    "nameHtml" : "Peterborough"
  },
  "UKH12": {
    "nameLatin" : "Cambridgeshire CC",
    "nutsName" : "Cambridgeshire CC",
    "nameAscii" : "Cambridgeshire CC",
    "nameHtml" : "Cambridgeshire CC"
  },
  "UKH14": {
    "nameLatin" : "Suffolk",
    "nutsName" : "Suffolk",
    "nameAscii" : "Suffolk",
    "nameHtml" : "Suffolk"
  },
  "UKH16": {
    "nameLatin" : "North & West Norfolk",
    "nutsName" : "North & West Norfolk",
    "nameAscii" : "North & West Norfolk",
    "nameHtml" : "North & West Norfolk"
  },
  "UKH17": {
    "nameLatin" : "Breckland & South Norfolk",
    "nutsName" : "Breckland & South Norfolk",
    "nameAscii" : "Breckland & South Norfolk",
    "nameHtml" : "Breckland & South Norfolk"
  },
  "UKH21": {
    "nameLatin" : "Luton",
    "nutsName" : "Luton",
    "nameAscii" : "Luton",
    "nameHtml" : "Luton"
  },
  "UKH23": {
    "nameLatin" : "Hertfordshire",
    "nutsName" : "Hertfordshire",
    "nameAscii" : "Hertfordshire",
    "nameHtml" : "Hertfordshire"
  },
  "UKH25": {
    "nameLatin" : "Central Bedfordshire",
    "nutsName" : "Central Bedfordshire",
    "nameAscii" : "Central Bedfordshire",
    "nameHtml" : "Central Bedfordshire"
  },
  "UKH31": {
    "nameLatin" : "Southend-on-Sea",
    "nutsName" : "Southend-on-Sea",
    "nameAscii" : "Southend-On-Sea",
    "nameHtml" : "Southend-On-Sea"
  },
  "UKH34": {
    "nameLatin" : "Essex Haven Gateway",
    "nutsName" : "Essex Haven Gateway",
    "nameAscii" : "Essex Haven Gateway",
    "nameHtml" : "Essex Haven Gateway"
  },
  "UKH35": {
    "nameLatin" : "West Essex",
    "nutsName" : "West Essex",
    "nameAscii" : "West Essex",
    "nameHtml" : "West Essex"
  },
  "UKH37": {
    "nameLatin" : "Essex Thames Gateway",
    "nutsName" : "Essex Thames Gateway",
    "nameAscii" : "Essex Thames Gateway",
    "nameHtml" : "Essex Thames Gateway"
  },
  "UKI31": {
    "nameLatin" : "Camden & City of London",
    "nutsName" : "Camden & City of London",
    "nameAscii" : "Camden & City of London",
    "nameHtml" : "Camden & City of London"
  },
  "UKI33": {
    "nameLatin" : "Kensington and Chelsea & Hammersmith and Fulham",
    "nutsName" : "Kensington and Chelsea & Hammersmith and Fulham",
    "nameAscii" : "Kensington and Chelsea & Hammersmith and Fulham",
    "nameHtml" : "Kensington and Chelsea & Hammersmith and Fulham"
  },
  "UKI34": {
    "nameLatin" : "Wandsworth",
    "nutsName" : "Wandsworth",
    "nameAscii" : "Wandsworth",
    "nameHtml" : "Wandsworth"
  },
  "UKI41": {
    "nameLatin" : "Hackney & Newham",
    "nutsName" : "Hackney & Newham",
    "nameAscii" : "Hackney & Newham",
    "nameHtml" : "Hackney & Newham"
  },
  "DEF0F": {
    "nameLatin" : "Stormarn",
    "nutsName" : "Stormarn",
    "nameAscii" : "Stormarn",
    "nameHtml" : "Stormarn"
  },
  "DEG01": {
    "nameLatin" : "Erfurt, Kreisfreie Stadt",
    "nutsName" : "Erfurt, Kreisfreie Stadt",
    "nameAscii" : "Erfurt, Kreisfreie Stadt",
    "nameHtml" : "Erfurt, Kreisfreie Stadt"
  },
  "DEG03": {
    "nameLatin" : "Jena, Kreisfreie Stadt",
    "nutsName" : "Jena, Kreisfreie Stadt",
    "nameAscii" : "Jena, Kreisfreie Stadt",
    "nameHtml" : "Jena, Kreisfreie Stadt"
  },
  "DEG04": {
    "nameLatin" : "Suhl, Kreisfreie Stadt",
    "nutsName" : "Suhl, Kreisfreie Stadt",
    "nameAscii" : "Suhl, Kreisfreie Stadt",
    "nameHtml" : "Suhl, Kreisfreie Stadt"
  },
  "DEG05": {
    "nameLatin" : "Weimar, Kreisfreie Stadt",
    "nutsName" : "Weimar, Kreisfreie Stadt",
    "nameAscii" : "Weimar, Kreisfreie Stadt",
    "nameHtml" : "Weimar, Kreisfreie Stadt"
  },
  "DEG06": {
    "nameLatin" : "Eichsfeld",
    "nutsName" : "Eichsfeld",
    "nameAscii" : "Eichsfeld",
    "nameHtml" : "Eichsfeld"
  },
  "DEG07": {
    "nameLatin" : "Nordhausen",
    "nutsName" : "Nordhausen",
    "nameAscii" : "Nordhausen",
    "nameHtml" : "Nordhausen"
  },
  "DEG09": {
    "nameLatin" : "Unstrut-Hainich-Kreis",
    "nutsName" : "Unstrut-Hainich-Kreis",
    "nameAscii" : "Unstrut-Hainich-Kreis",
    "nameHtml" : "Unstrut-Hainich-Kreis"
  },
  "DEG0B": {
    "nameLatin" : "Schmalkalden-Meiningen",
    "nutsName" : "Schmalkalden-Meiningen",
    "nameAscii" : "Schmalkalden-Meiningen",
    "nameHtml" : "Schmalkalden-Meiningen"
  },
  "DEG0C": {
    "nameLatin" : "Gotha",
    "nutsName" : "Gotha",
    "nameAscii" : "Gotha",
    "nameHtml" : "Gotha"
  },
  "DEG0D": {
    "nameLatin" : "Sömmerda",
    "nutsName" : "Sömmerda",
    "nameAscii" : "Sommerda",
    "nameHtml" : "S&#x00F6;mmerda"
  },
  "DEG0E": {
    "nameLatin" : "Hildburghausen",
    "nutsName" : "Hildburghausen",
    "nameAscii" : "Hildburghausen",
    "nameHtml" : "Hildburghausen"
  },
  "DEG0F": {
    "nameLatin" : "Ilm-Kreis",
    "nutsName" : "Ilm-Kreis",
    "nameAscii" : "Ilm-Kreis",
    "nameHtml" : "Ilm-Kreis"
  },
  "DEG0H": {
    "nameLatin" : "Sonneberg",
    "nutsName" : "Sonneberg",
    "nameAscii" : "Sonneberg",
    "nameHtml" : "Sonneberg"
  },
  "DEG0I": {
    "nameLatin" : "Saalfeld-Rudolstadt",
    "nutsName" : "Saalfeld-Rudolstadt",
    "nameAscii" : "Saalfeld-Rudolstadt",
    "nameHtml" : "Saalfeld-Rudolstadt"
  },
  "DEG0J": {
    "nameLatin" : "Saale-Holzland-Kreis",
    "nutsName" : "Saale-Holzland-Kreis",
    "nameAscii" : "Saale-Holzland-Kreis",
    "nameHtml" : "Saale-Holzland-Kreis"
  },
  "DEG0K": {
    "nameLatin" : "Saale-Orla-Kreis",
    "nutsName" : "Saale-Orla-Kreis",
    "nameAscii" : "Saale-Orla-Kreis",
    "nameHtml" : "Saale-Orla-Kreis"
  },
  "DEG0L": {
    "nameLatin" : "Greiz",
    "nutsName" : "Greiz",
    "nameAscii" : "Greiz",
    "nameHtml" : "Greiz"
  },
  "DEG0N": {
    "nameLatin" : "Eisenach, Kreisfreie Stadt",
    "nutsName" : "Eisenach, Kreisfreie Stadt",
    "nameAscii" : "Eisenach, Kreisfreie Stadt",
    "nameHtml" : "Eisenach, Kreisfreie Stadt"
  },
  "DEG0P": {
    "nameLatin" : "Wartburgkreis",
    "nutsName" : "Wartburgkreis",
    "nameAscii" : "Wartburgkreis",
    "nameHtml" : "Wartburgkreis"
  },
  "DK012": {
    "nameLatin" : "Københavns omegn",
    "nutsName" : "Københavns omegn",
    "nameAscii" : "Kobenhavns Omegn",
    "nameHtml" : "K&#x00F8;benhavns Omegn"
  },
  "DK013": {
    "nameLatin" : "Nordsjælland",
    "nutsName" : "Nordsjælland",
    "nameAscii" : "Nordsjaelland",
    "nameHtml" : "Nordsj&#x00E6;lland"
  },
  "DK014": {
    "nameLatin" : "Bornholm",
    "nutsName" : "Bornholm",
    "nameAscii" : "Bornholm",
    "nameHtml" : "Bornholm"
  },
  "DK022": {
    "nameLatin" : "Vest- og Sydsjælland",
    "nutsName" : "Vest- og Sydsjælland",
    "nameAscii" : "Vest- og Sydsjaelland",
    "nameHtml" : "Vest- og Sydsj&#x00E6;lland"
  },
  "DK031": {
    "nameLatin" : "Fyn",
    "nutsName" : "Fyn",
    "nameAscii" : "Fyn",
    "nameHtml" : "Fyn"
  },
  "DK032": {
    "nameLatin" : "Sydjylland",
    "nutsName" : "Sydjylland",
    "nameAscii" : "Sydjylland",
    "nameHtml" : "Sydjylland"
  },
  "DK041": {
    "nameLatin" : "Vestjylland",
    "nutsName" : "Vestjylland",
    "nameAscii" : "Vestjylland",
    "nameHtml" : "Vestjylland"
  },
  "DK042": {
    "nameLatin" : "Østjylland",
    "nutsName" : "Østjylland",
    "nameAscii" : "Ostjylland",
    "nameHtml" : "&#x00D8;stjylland"
  },
  "DK050": {
    "nameLatin" : "Nordjylland",
    "nutsName" : "Nordjylland",
    "nameAscii" : "Nordjylland",
    "nameHtml" : "Nordjylland"
  },
  "EE001": {
    "nameLatin" : "Põhja-Eesti",
    "nutsName" : "Põhja-Eesti",
    "nameAscii" : "Pohja-Eesti",
    "nameHtml" : "P&#x00F5;hja-Eesti"
  },
  "EE006": {
    "nameLatin" : "Kesk-Eesti",
    "nutsName" : "Kesk-Eesti",
    "nameAscii" : "Kesk-Eesti",
    "nameHtml" : "Kesk-Eesti"
  },
  "EE007": {
    "nameLatin" : "Kirde-Eesti",
    "nutsName" : "Kirde-Eesti",
    "nameAscii" : "Kirde-Eesti",
    "nameHtml" : "Kirde-Eesti"
  },
  "EE008": {
    "nameLatin" : "Lõuna-Eesti",
    "nutsName" : "Lõuna-Eesti",
    "nameAscii" : "Louna-Eesti",
    "nameHtml" : "L&#x00F5;una-Eesti"
  },
  "EL302": {
    "nameLatin" : "Ditikos Tomeas Athinon",
    "nutsName" : "Δυτικός Τομέας Αθηνών",
    "nameAscii" : "Ditikos Tomeas Athinon",
    "nameHtml" : "&#x0394;&#x03C5;&#x03C4;&#x03B9;&#x03BA;&#x03CC;&#x03C2; &#x03A4;&#x03BF;&#x03BC;&#x03AD;&#x03B1;&#x03C2; &#x0391;&#x03B8;&#x03B7;&#x03BD;&#x03CE;&#x03BD;"
  },
  "EL303": {
    "nameLatin" : "Kentrikos Tomeas Athinon",
    "nutsName" : "Κεντρικός Τομέας Αθηνών",
    "nameAscii" : "Kentrikos Tomeas Athinon",
    "nameHtml" : "&#x039A;&#x03B5;&#x03BD;&#x03C4;&#x03C1;&#x03B9;&#x03BA;&#x03CC;&#x03C2; &#x03A4;&#x03BF;&#x03BC;&#x03AD;&#x03B1;&#x03C2; &#x0391;&#x03B8;&#x03B7;&#x03BD;&#x03CE;&#x03BD;"
  },
  "EL305": {
    "nameLatin" : "Anatoliki Attiki",
    "nutsName" : "Ανατολική Αττική",
    "nameAscii" : "Anatoliki Attiki",
    "nameHtml" : "&#x0391;&#x03BD;&#x03B1;&#x03C4;&#x03BF;&#x03BB;&#x03B9;&#x03BA;&#x03AE; &#x0391;&#x03C4;&#x03C4;&#x03B9;&#x03BA;&#x03AE;"
  },
  "EL306": {
    "nameLatin" : "Ditiki Attiki",
    "nutsName" : "Δυτική Αττική",
    "nameAscii" : "Ditiki Attiki",
    "nameHtml" : "&#x0394;&#x03C5;&#x03C4;&#x03B9;&#x03BA;&#x03AE; &#x0391;&#x03C4;&#x03C4;&#x03B9;&#x03BA;&#x03AE;"
  },
  "EL412": {
    "nameLatin" : "Ikaria, Samos",
    "nutsName" : "Ικαρία, Σάμος",
    "nameAscii" : "Ikaria, Samos",
    "nameHtml" : "&#x0399;&#x03BA;&#x03B1;&#x03C1;&#x03AF;&#x03B1;, &#x03A3;&#x03AC;&#x03BC;&#x03BF;&#x03C2;"
  },
  "EL413": {
    "nameLatin" : "Xios",
    "nutsName" : "Χίος",
    "nameAscii" : "Xios",
    "nameHtml" : "&#x03A7;&#x03AF;&#x03BF;&#x03C2;"
  },
  "EL421": {
    "nameLatin" : "Kalimnos, Karpathos, Kos, Rodos",
    "nutsName" : "Κάλυμνος, Κάρπαθος, Κως, Ρόδος",
    "nameAscii" : "Kalimnos, Karpathos, Kos, Rodos",
    "nameHtml" : "&#x039A;&#x03AC;&#x03BB;&#x03C5;&#x03BC;&#x03BD;&#x03BF;&#x03C2;, &#x039A;&#x03AC;&#x03C1;&#x03C0;&#x03B1;&#x03B8;&#x03BF;&#x03C2;, &#x039A;&#x03C9;&#x03C2;, &#x03A1;&#x03CC;&#x03B4;&#x03BF;&#x03C2;"
  },
  "EL431": {
    "nameLatin" : "Irakleio",
    "nutsName" : "Ηράκλειο",
    "nameAscii" : "Irakleio",
    "nameHtml" : "&#x0397;&#x03C1;&#x03AC;&#x03BA;&#x03BB;&#x03B5;&#x03B9;&#x03BF;"
  },
  "EL432": {
    "nameLatin" : "Lasithi",
    "nutsName" : "Λασίθι",
    "nameAscii" : "Lasithi",
    "nameHtml" : "&#x039B;&#x03B1;&#x03C3;&#x03AF;&#x03B8;&#x03B9;"
  },
  "EL433": {
    "nameLatin" : "Rethymni",
    "nutsName" : "Ρεθύμνη",
    "nameAscii" : "Rethimni",
    "nameHtml" : "&#x03A1;&#x03B5;&#x03B8;&#x03CD;&#x03BC;&#x03BD;&#x03B7;"
  },
  "EL434": {
    "nameLatin" : "Chania",
    "nutsName" : "Χανιά",
    "nameAscii" : "Xania",
    "nameHtml" : "&#x03A7;&#x03B1;&#x03BD;&#x03B9;&#x03AC;"
  },
  "EL512": {
    "nameLatin" : "Xanthi",
    "nutsName" : "Ξάνθη",
    "nameAscii" : "Xanthi",
    "nameHtml" : "&#x039E;&#x03AC;&#x03BD;&#x03B8;&#x03B7;"
  },
  "EL514": {
    "nameLatin" : "Drama",
    "nutsName" : "Δράμα",
    "nameAscii" : "Drama",
    "nameHtml" : "&#x0394;&#x03C1;&#x03AC;&#x03BC;&#x03B1;"
  },
  "EL521": {
    "nameLatin" : "Imathia",
    "nutsName" : "Ημαθία",
    "nameAscii" : "Imathia",
    "nameHtml" : "&#x0397;&#x03BC;&#x03B1;&#x03B8;&#x03AF;&#x03B1;"
  },
  "EL523": {
    "nameLatin" : "Kilkis",
    "nutsName" : "Κιλκίς",
    "nameAscii" : "Kilkis",
    "nameHtml" : "&#x039A;&#x03B9;&#x03BB;&#x03BA;&#x03AF;&#x03C2;"
  },
  "EL524": {
    "nameLatin" : "Pella",
    "nutsName" : "Πέλλα",
    "nameAscii" : "Pella",
    "nameHtml" : "&#x03A0;&#x03AD;&#x03BB;&#x03BB;&#x03B1;"
  },
  "EL525": {
    "nameLatin" : "Pieria",
    "nutsName" : "Πιερία",
    "nameAscii" : "Pieria",
    "nameHtml" : "&#x03A0;&#x03B9;&#x03B5;&#x03C1;&#x03AF;&#x03B1;"
  },
  "EL526": {
    "nameLatin" : "Serres",
    "nutsName" : "Σέρρες",
    "nameAscii" : "Serres",
    "nameHtml" : "&#x03A3;&#x03AD;&#x03C1;&#x03C1;&#x03B5;&#x03C2;"
  },
  "EL532": {
    "nameLatin" : "Kastoria",
    "nutsName" : "Καστοριά",
    "nameAscii" : "Kastoria",
    "nameHtml" : "&#x039A;&#x03B1;&#x03C3;&#x03C4;&#x03BF;&#x03C1;&#x03B9;&#x03AC;"
  },
  "EL533": {
    "nameLatin" : "Florina",
    "nutsName" : "Φλώρινα",
    "nameAscii" : "Florina",
    "nameHtml" : "&#x03A6;&#x03BB;&#x03CE;&#x03C1;&#x03B9;&#x03BD;&#x03B1;"
  },
  "EL541": {
    "nameLatin" : "Arta, Prebeza",
    "nutsName" : "Άρτα, Πρέβεζα",
    "nameAscii" : "Arta, Prebeza",
    "nameHtml" : "&#x0386;&#x03C1;&#x03C4;&#x03B1;, &#x03A0;&#x03C1;&#x03AD;&#x03B2;&#x03B5;&#x03B6;&#x03B1;"
  },
  "EL543": {
    "nameLatin" : "Ioannina",
    "nutsName" : "Ιωάννινα",
    "nameAscii" : "Ioannina",
    "nameHtml" : "&#x0399;&#x03C9;&#x03AC;&#x03BD;&#x03BD;&#x03B9;&#x03BD;&#x03B1;"
  },
  "EL611": {
    "nameLatin" : "Karditsa, Trikala",
    "nutsName" : "Καρδίτσα, Τρίκαλα",
    "nameAscii" : "Karditsa, Trikala",
    "nameHtml" : "&#x039A;&#x03B1;&#x03C1;&#x03B4;&#x03AF;&#x03C4;&#x03C3;&#x03B1;, &#x03A4;&#x03C1;&#x03AF;&#x03BA;&#x03B1;&#x03BB;&#x03B1;"
  },
  "EL613": {
    "nameLatin" : "Magnisia",
    "nutsName" : "Μαγνησία",
    "nameAscii" : "Magnisia",
    "nameHtml" : "&#x039C;&#x03B1;&#x03B3;&#x03BD;&#x03B7;&#x03C3;&#x03AF;&#x03B1;"
  },
  "EL621": {
    "nameLatin" : "Zakynthos",
    "nutsName" : "Ζάκυνθος",
    "nameAscii" : "Zakinthos",
    "nameHtml" : "&#x0396;&#x03AC;&#x03BA;&#x03C5;&#x03BD;&#x03B8;&#x03BF;&#x03C2;"
  },
  "EL622": {
    "nameLatin" : "Kerkyra",
    "nutsName" : "Κέρκυρα",
    "nameAscii" : "Kerkira",
    "nameHtml" : "&#x039A;&#x03AD;&#x03C1;&#x03BA;&#x03C5;&#x03C1;&#x03B1;"
  },
  "EL624": {
    "nameLatin" : "Lefkada",
    "nutsName" : "Λευκάδα",
    "nameAscii" : "Leikada",
    "nameHtml" : "&#x039B;&#x03B5;&#x03C5;&#x03BA;&#x03AC;&#x03B4;&#x03B1;"
  },
  "EL632": {
    "nameLatin" : "Achaia",
    "nutsName" : "Αχαΐα",
    "nameAscii" : "AxaIa",
    "nameHtml" : "&#x0391;&#x03C7;&#x03B1;&#x0390;&#x03B1;"
  },
  "EL633": {
    "nameLatin" : "Ileia",
    "nutsName" : "Ηλεία",
    "nameAscii" : "Ileia",
    "nameHtml" : "&#x0397;&#x03BB;&#x03B5;&#x03AF;&#x03B1;"
  },
  "EL641": {
    "nameLatin" : "Voiotia",
    "nutsName" : "Βοιωτία",
    "nameAscii" : "Boiotia",
    "nameHtml" : "&#x0392;&#x03BF;&#x03B9;&#x03C9;&#x03C4;&#x03AF;&#x03B1;"
  },
  "EL643": {
    "nameLatin" : "Evrytania",
    "nutsName" : "Ευρυτανία",
    "nameAscii" : "Eiritania",
    "nameHtml" : "&#x0395;&#x03C5;&#x03C1;&#x03C5;&#x03C4;&#x03B1;&#x03BD;&#x03AF;&#x03B1;"
  },
  "EL644": {
    "nameLatin" : "Fthiotida",
    "nutsName" : "Φθιώτιδα",
    "nameAscii" : "Fthiotida",
    "nameHtml" : "&#x03A6;&#x03B8;&#x03B9;&#x03CE;&#x03C4;&#x03B9;&#x03B4;&#x03B1;"
  },
  "EL645": {
    "nameLatin" : "Fokida",
    "nutsName" : "Φωκίδα",
    "nameAscii" : "Fokida",
    "nameHtml" : "&#x03A6;&#x03C9;&#x03BA;&#x03AF;&#x03B4;&#x03B1;"
  },
  "EL651": {
    "nameLatin" : "Argolida, Arkadia",
    "nutsName" : "Αργολίδα, Αρκαδία",
    "nameAscii" : "Argolida, Arkadia",
    "nameHtml" : "&#x0391;&#x03C1;&#x03B3;&#x03BF;&#x03BB;&#x03AF;&#x03B4;&#x03B1;, &#x0391;&#x03C1;&#x03BA;&#x03B1;&#x03B4;&#x03AF;&#x03B1;"
  },
  "EL652": {
    "nameLatin" : "Korinthia",
    "nutsName" : "Κορινθία",
    "nameAscii" : "Korinthia",
    "nameHtml" : "&#x039A;&#x03BF;&#x03C1;&#x03B9;&#x03BD;&#x03B8;&#x03AF;&#x03B1;"
  },
  "ES111": {
    "nameLatin" : "A Coruña",
    "nutsName" : "A Coruña",
    "nameAscii" : "A Coruna",
    "nameHtml" : "A Coru&#x00F1;a"
  },
  "ES112": {
    "nameLatin" : "Lugo",
    "nutsName" : "Lugo",
    "nameAscii" : "Lugo",
    "nameHtml" : "Lugo"
  },
  "ES113": {
    "nameLatin" : "Ourense",
    "nutsName" : "Ourense",
    "nameAscii" : "Ourense",
    "nameHtml" : "Ourense"
  },
  "ES114": {
    "nameLatin" : "Pontevedra",
    "nutsName" : "Pontevedra",
    "nameAscii" : "Pontevedra",
    "nameHtml" : "Pontevedra"
  },
  "ES120": {
    "nameLatin" : "Asturias",
    "nutsName" : "Asturias",
    "nameAscii" : "Asturias",
    "nameHtml" : "Asturias"
  },
  "ES130": {
    "nameLatin" : "Cantabria",
    "nutsName" : "Cantabria",
    "nameAscii" : "Cantabria",
    "nameHtml" : "Cantabria"
  },
  "ES211": {
    "nameLatin" : "Araba/Álava",
    "nutsName" : "Araba/Álava",
    "nameAscii" : "Araba/Alava",
    "nameHtml" : "Araba/&#x00C1;lava"
  },
  "ES212": {
    "nameLatin" : "Gipuzkoa",
    "nutsName" : "Gipuzkoa",
    "nameAscii" : "Gipuzkoa",
    "nameHtml" : "Gipuzkoa"
  },
  "ES213": {
    "nameLatin" : "Bizkaia",
    "nutsName" : "Bizkaia",
    "nameAscii" : "Bizkaia",
    "nameHtml" : "Bizkaia"
  },
  "ES220": {
    "nameLatin" : "Navarra",
    "nutsName" : "Navarra",
    "nameAscii" : "Navarra",
    "nameHtml" : "Navarra"
  },
  "ES230": {
    "nameLatin" : "La Rioja",
    "nutsName" : "La Rioja",
    "nameAscii" : "La Rioja",
    "nameHtml" : "La Rioja"
  },
  "ES241": {
    "nameLatin" : "Huesca",
    "nutsName" : "Huesca",
    "nameAscii" : "Huesca",
    "nameHtml" : "Huesca"
  },
  "ES242": {
    "nameLatin" : "Teruel",
    "nutsName" : "Teruel",
    "nameAscii" : "Teruel",
    "nameHtml" : "Teruel"
  },
  "ES243": {
    "nameLatin" : "Zaragoza",
    "nutsName" : "Zaragoza",
    "nameAscii" : "Zaragoza",
    "nameHtml" : "Zaragoza"
  },
  "ES412": {
    "nameLatin" : "Burgos",
    "nutsName" : "Burgos",
    "nameAscii" : "Burgos",
    "nameHtml" : "Burgos"
  },
  "ES413": {
    "nameLatin" : "León",
    "nutsName" : "León",
    "nameAscii" : "Leon",
    "nameHtml" : "Le&#x00F3;n"
  },
  "ES414": {
    "nameLatin" : "Palencia",
    "nutsName" : "Palencia",
    "nameAscii" : "Palencia",
    "nameHtml" : "Palencia"
  },
  "ES415": {
    "nameLatin" : "Salamanca",
    "nutsName" : "Salamanca",
    "nameAscii" : "Salamanca",
    "nameHtml" : "Salamanca"
  },
  "ES417": {
    "nameLatin" : "Soria",
    "nutsName" : "Soria",
    "nameAscii" : "Soria",
    "nameHtml" : "Soria"
  },
  "ES418": {
    "nameLatin" : "Valladolid",
    "nutsName" : "Valladolid",
    "nameAscii" : "Valladolid",
    "nameHtml" : "Valladolid"
  },
  "ES419": {
    "nameLatin" : "Zamora",
    "nutsName" : "Zamora",
    "nameAscii" : "Zamora",
    "nameHtml" : "Zamora"
  },
  "ES422": {
    "nameLatin" : "Ciudad Real",
    "nutsName" : "Ciudad Real",
    "nameAscii" : "Ciudad Real",
    "nameHtml" : "Ciudad Real"
  },
  "ES423": {
    "nameLatin" : "Cuenca",
    "nutsName" : "Cuenca",
    "nameAscii" : "Cuenca",
    "nameHtml" : "Cuenca"
  },
  "ES424": {
    "nameLatin" : "Guadalajara",
    "nutsName" : "Guadalajara",
    "nameAscii" : "Guadalajara",
    "nameHtml" : "Guadalajara"
  },
  "ES425": {
    "nameLatin" : "Toledo",
    "nutsName" : "Toledo",
    "nameAscii" : "Toledo",
    "nameHtml" : "Toledo"
  },
  "ES431": {
    "nameLatin" : "Badajoz",
    "nutsName" : "Badajoz",
    "nameAscii" : "Badajoz",
    "nameHtml" : "Badajoz"
  },
  "ES432": {
    "nameLatin" : "Cáceres",
    "nutsName" : "Cáceres",
    "nameAscii" : "Caceres",
    "nameHtml" : "C&#x00E1;ceres"
  },
  "ES511": {
    "nameLatin" : "Barcelona",
    "nutsName" : "Barcelona",
    "nameAscii" : "Barcelona",
    "nameHtml" : "Barcelona"
  },
  "ES513": {
    "nameLatin" : "Lleida",
    "nutsName" : "Lleida",
    "nameAscii" : "Lleida",
    "nameHtml" : "Lleida"
  },
  "ES514": {
    "nameLatin" : "Tarragona",
    "nutsName" : "Tarragona",
    "nameAscii" : "Tarragona",
    "nameHtml" : "Tarragona"
  },
  "ES522": {
    "nameLatin" : "Castellón / Castelló",
    "nutsName" : "Castellón / Castelló",
    "nameAscii" : "Castellon / Castello",
    "nameHtml" : "Castell&#x00F3;n / Castell&#x00F3;"
  },
  "ES523": {
    "nameLatin" : "Valencia / València",
    "nutsName" : "Valencia / València",
    "nameAscii" : "Valencia / Valencia",
    "nameHtml" : "Valencia / Val&#x00E8;ncia"
  },
  "ES532": {
    "nameLatin" : "Mallorca",
    "nutsName" : "Mallorca",
    "nameAscii" : "Mallorca",
    "nameHtml" : "Mallorca"
  },
  "ES533": {
    "nameLatin" : "Menorca",
    "nutsName" : "Menorca",
    "nameAscii" : "Menorca",
    "nameHtml" : "Menorca"
  },
  "ES611": {
    "nameLatin" : "Almería",
    "nutsName" : "Almería",
    "nameAscii" : "Almeria",
    "nameHtml" : "Almer&#x00ED;a"
  },
  "ES612": {
    "nameLatin" : "Cádiz",
    "nutsName" : "Cádiz",
    "nameAscii" : "Cadiz",
    "nameHtml" : "C&#x00E1;diz"
  },
  "ES613": {
    "nameLatin" : "Córdoba",
    "nutsName" : "Córdoba",
    "nameAscii" : "Cordoba",
    "nameHtml" : "C&#x00F3;rdoba"
  },
  "ES614": {
    "nameLatin" : "Granada",
    "nutsName" : "Granada",
    "nameAscii" : "Granada",
    "nameHtml" : "Granada"
  },
  "ES615": {
    "nameLatin" : "Huelva",
    "nutsName" : "Huelva",
    "nameAscii" : "Huelva",
    "nameHtml" : "Huelva"
  },
  "ES617": {
    "nameLatin" : "Málaga",
    "nutsName" : "Málaga",
    "nameAscii" : "Malaga",
    "nameHtml" : "M&#x00E1;laga"
  },
  "ES618": {
    "nameLatin" : "Sevilla",
    "nutsName" : "Sevilla",
    "nameAscii" : "Sevilla",
    "nameHtml" : "Sevilla"
  },
  "ES620": {
    "nameLatin" : "Murcia",
    "nutsName" : "Murcia",
    "nameAscii" : "Murcia",
    "nameHtml" : "Murcia"
  },
  "ES630": {
    "nameLatin" : "Ceuta",
    "nutsName" : "Ceuta",
    "nameAscii" : "Ceuta",
    "nameHtml" : "Ceuta"
  },
  "ES640": {
    "nameLatin" : "Melilla",
    "nutsName" : "Melilla",
    "nameAscii" : "Melilla",
    "nameHtml" : "Melilla"
  },
  "ES703": {
    "nameLatin" : "El Hierro",
    "nutsName" : "El Hierro",
    "nameAscii" : "El Hierro",
    "nameHtml" : "El Hierro"
  },
  "ES704": {
    "nameLatin" : "Fuerteventura",
    "nutsName" : "Fuerteventura",
    "nameAscii" : "Fuerteventura",
    "nameHtml" : "Fuerteventura"
  },
  "ES705": {
    "nameLatin" : "Gran Canaria",
    "nutsName" : "Gran Canaria",
    "nameAscii" : "Gran Canaria",
    "nameHtml" : "Gran Canaria"
  },
  "ES706": {
    "nameLatin" : "La Gomera",
    "nutsName" : "La Gomera",
    "nameAscii" : "La Gomera",
    "nameHtml" : "La Gomera"
  },
  "ES708": {
    "nameLatin" : "Lanzarote",
    "nutsName" : "Lanzarote",
    "nameAscii" : "Lanzarote",
    "nameHtml" : "Lanzarote"
  },
  "ES709": {
    "nameLatin" : "Tenerife",
    "nutsName" : "Tenerife",
    "nameAscii" : "Tenerife",
    "nameHtml" : "Tenerife"
  },
  "FI193": {
    "nameLatin" : "Keski-Suomi",
    "nutsName" : "Keski-Suomi",
    "nameAscii" : "Keski-Suomi",
    "nameHtml" : "Keski-Suomi"
  },
  "FI194": {
    "nameLatin" : "Etelä-Pohjanmaa",
    "nutsName" : "Etelä-Pohjanmaa",
    "nameAscii" : "Etela-Pohjanmaa",
    "nameHtml" : "Etel&#x00E4;-Pohjanmaa"
  },
  "FI195": {
    "nameLatin" : "Pohjanmaa",
    "nutsName" : "Pohjanmaa",
    "nameAscii" : "Pohjanmaa",
    "nameHtml" : "Pohjanmaa"
  },
  "FI196": {
    "nameLatin" : "Satakunta",
    "nutsName" : "Satakunta",
    "nameAscii" : "Satakunta",
    "nameHtml" : "Satakunta"
  },
  "FI197": {
    "nameLatin" : "Pirkanmaa",
    "nutsName" : "Pirkanmaa",
    "nameAscii" : "Pirkanmaa",
    "nameHtml" : "Pirkanmaa"
  },
  "FI1B1": {
    "nameLatin" : "Helsinki-Uusimaa",
    "nutsName" : "Helsinki-Uusimaa",
    "nameAscii" : "Helsinki-Uusimaa",
    "nameHtml" : "Helsinki-Uusimaa"
  },
  "FI1C1": {
    "nameLatin" : "Varsinais-Suomi",
    "nutsName" : "Varsinais-Suomi",
    "nameAscii" : "Varsinais-Suomi",
    "nameHtml" : "Varsinais-Suomi"
  },
  "FI1C2": {
    "nameLatin" : "Kanta-Häme",
    "nutsName" : "Kanta-Häme",
    "nameAscii" : "Kanta-Hame",
    "nameHtml" : "Kanta-H&#x00E4;me"
  },
  "FI1C4": {
    "nameLatin" : "Kymenlaakso",
    "nutsName" : "Kymenlaakso",
    "nameAscii" : "Kymenlaakso",
    "nameHtml" : "Kymenlaakso"
  },
  "FI1C5": {
    "nameLatin" : "Etelä-Karjala",
    "nutsName" : "Etelä-Karjala",
    "nameAscii" : "Etela-Karjala",
    "nameHtml" : "Etel&#x00E4;-Karjala"
  },
  "FI1D1": {
    "nameLatin" : "Etelä-Savo",
    "nutsName" : "Etelä-Savo",
    "nameAscii" : "Etela-Savo",
    "nameHtml" : "Etel&#x00E4;-Savo"
  },
  "FI1D2": {
    "nameLatin" : "Pohjois-Savo",
    "nutsName" : "Pohjois-Savo",
    "nameAscii" : "Pohjois-Savo",
    "nameHtml" : "Pohjois-Savo"
  },
  "FI1D3": {
    "nameLatin" : "Pohjois-Karjala",
    "nutsName" : "Pohjois-Karjala",
    "nameAscii" : "Pohjois-Karjala",
    "nameHtml" : "Pohjois-Karjala"
  },
  "FI1D4": {
    "nameLatin" : "Kainuu",
    "nutsName" : "Kainuu",
    "nameAscii" : "Kainuu",
    "nameHtml" : "Kainuu"
  },
  "FI1D5": {
    "nameLatin" : "Keski-Pohjanmaa",
    "nutsName" : "Keski-Pohjanmaa",
    "nameAscii" : "Keski-Pohjanmaa",
    "nameHtml" : "Keski-Pohjanmaa"
  },
  "FI1D6": {
    "nameLatin" : "Pohjois-Pohjanmaa",
    "nutsName" : "Pohjois-Pohjanmaa",
    "nameAscii" : "Pohjois-Pohjanmaa",
    "nameHtml" : "Pohjois-Pohjanmaa"
  },
  "FI1D7": {
    "nameLatin" : "Lappi",
    "nutsName" : "Lappi",
    "nameAscii" : "Lappi",
    "nameHtml" : "Lappi"
  },
  "FI200": {
    "nameLatin" : "Åland",
    "nutsName" : "Åland",
    "nameAscii" : "Aland",
    "nameHtml" : "&#x00C5;land"
  },
  "FR101": {
    "nameLatin" : "Paris",
    "nutsName" : "Paris",
    "nameAscii" : "Paris",
    "nameHtml" : "Paris"
  },
  "FR102": {
    "nameLatin" : "Seine-et-Marne",
    "nutsName" : "Seine-et-Marne",
    "nameAscii" : "Seine-et-Marne",
    "nameHtml" : "Seine-et-Marne"
  },
  "FR103": {
    "nameLatin" : "Yvelines",
    "nutsName" : "Yvelines",
    "nameAscii" : "Yvelines",
    "nameHtml" : "Yvelines"
  },
  "FR104": {
    "nameLatin" : "Essonne",
    "nutsName" : "Essonne",
    "nameAscii" : "Essonne",
    "nameHtml" : "Essonne"
  },
  "FR105": {
    "nameLatin" : "Hauts-de-Seine",
    "nutsName" : "Hauts-de-Seine",
    "nameAscii" : "Hauts-de-Seine",
    "nameHtml" : "Hauts-de-Seine"
  },
  "FR106": {
    "nameLatin" : "Seine-Saint-Denis",
    "nutsName" : "Seine-Saint-Denis",
    "nameAscii" : "Seine-Saint-Denis",
    "nameHtml" : "Seine-Saint-Denis"
  },
  "FR107": {
    "nameLatin" : "Val-de-Marne",
    "nutsName" : "Val-de-Marne",
    "nameAscii" : "Val-de-Marne",
    "nameHtml" : "Val-de-Marne"
  },
  "FR108": {
    "nameLatin" : "Val-d'Oise",
    "nutsName" : "Val-d'Oise",
    "nameAscii" : "Val-d'Oise",
    "nameHtml" : "Val-d'Oise"
  },
  "FR211": {
    "nameLatin" : "Ardennes",
    "nutsName" : "Ardennes",
    "nameAscii" : "Ardennes",
    "nameHtml" : "Ardennes"
  },
  "FR212": {
    "nameLatin" : "Aube",
    "nutsName" : "Aube",
    "nameAscii" : "Aube",
    "nameHtml" : "Aube"
  },
  "FR213": {
    "nameLatin" : "Marne",
    "nutsName" : "Marne",
    "nameAscii" : "Marne",
    "nameHtml" : "Marne"
  },
  "FR214": {
    "nameLatin" : "Haute-Marne",
    "nutsName" : "Haute-Marne",
    "nameAscii" : "Haute-Marne",
    "nameHtml" : "Haute-Marne"
  },
  "FR221": {
    "nameLatin" : "Aisne",
    "nutsName" : "Aisne",
    "nameAscii" : "Aisne",
    "nameHtml" : "Aisne"
  },
  "FR222": {
    "nameLatin" : "Oise",
    "nutsName" : "Oise",
    "nameAscii" : "Oise",
    "nameHtml" : "Oise"
  },
  "FR223": {
    "nameLatin" : "Somme",
    "nutsName" : "Somme",
    "nameAscii" : "Somme",
    "nameHtml" : "Somme"
  },
  "FR231": {
    "nameLatin" : "Eure",
    "nutsName" : "Eure",
    "nameAscii" : "Eure",
    "nameHtml" : "Eure"
  },
  "FR232": {
    "nameLatin" : "Seine-Maritime",
    "nutsName" : "Seine-Maritime",
    "nameAscii" : "Seine-Maritime",
    "nameHtml" : "Seine-Maritime"
  },
  "FR241": {
    "nameLatin" : "Cher",
    "nutsName" : "Cher",
    "nameAscii" : "Cher",
    "nameHtml" : "Cher"
  },
  "FR242": {
    "nameLatin" : "Eure-et-Loir",
    "nutsName" : "Eure-et-Loir",
    "nameAscii" : "Eure-et-Loir",
    "nameHtml" : "Eure-et-Loir"
  },
  "FR243": {
    "nameLatin" : "Indre",
    "nutsName" : "Indre",
    "nameAscii" : "Indre",
    "nameHtml" : "Indre"
  },
  "FR244": {
    "nameLatin" : "Indre-et-Loire",
    "nutsName" : "Indre-et-Loire",
    "nameAscii" : "Indre-et-Loire",
    "nameHtml" : "Indre-et-Loire"
  },
  "FR245": {
    "nameLatin" : "Loir-et-Cher",
    "nutsName" : "Loir-et-Cher",
    "nameAscii" : "Loir-et-Cher",
    "nameHtml" : "Loir-et-Cher"
  },
  "FR246": {
    "nameLatin" : "Loiret",
    "nutsName" : "Loiret",
    "nameAscii" : "Loiret",
    "nameHtml" : "Loiret"
  },
  "FR251": {
    "nameLatin" : "Calvados",
    "nutsName" : "Calvados",
    "nameAscii" : "Calvados",
    "nameHtml" : "Calvados"
  },
  "FR252": {
    "nameLatin" : "Manche",
    "nutsName" : "Manche",
    "nameAscii" : "Manche",
    "nameHtml" : "Manche"
  },
  "FR253": {
    "nameLatin" : "Orne",
    "nutsName" : "Orne",
    "nameAscii" : "Orne",
    "nameHtml" : "Orne"
  },
  "FR261": {
    "nameLatin" : "Côte-d'Or",
    "nutsName" : "Côte-d'Or",
    "nameAscii" : "Cote-d'Or",
    "nameHtml" : "C&#x00F4;te-d'Or"
  },
  "FR262": {
    "nameLatin" : "Nièvre",
    "nutsName" : "Nièvre",
    "nameAscii" : "Nievre",
    "nameHtml" : "Ni&#x00E8;vre"
  },
  "FR264": {
    "nameLatin" : "Yonne",
    "nutsName" : "Yonne",
    "nameAscii" : "Yonne",
    "nameHtml" : "Yonne"
  },
  "FR301": {
    "nameLatin" : "Nord",
    "nutsName" : "Nord",
    "nameAscii" : "Nord",
    "nameHtml" : "Nord"
  },
  "FR302": {
    "nameLatin" : "Pas-de-Calais",
    "nutsName" : "Pas-de-Calais",
    "nameAscii" : "Pas-de-Calais",
    "nameHtml" : "Pas-de-Calais"
  },
  "FR412": {
    "nameLatin" : "Meuse",
    "nutsName" : "Meuse",
    "nameAscii" : "Meuse",
    "nameHtml" : "Meuse"
  },
  "FR413": {
    "nameLatin" : "Moselle",
    "nutsName" : "Moselle",
    "nameAscii" : "Moselle",
    "nameHtml" : "Moselle"
  },
  "FR414": {
    "nameLatin" : "Vosges",
    "nutsName" : "Vosges",
    "nameAscii" : "Vosges",
    "nameHtml" : "Vosges"
  },
  "FR421": {
    "nameLatin" : "Bas-Rhin",
    "nutsName" : "Bas-Rhin",
    "nameAscii" : "Bas-Rhin",
    "nameHtml" : "Bas-Rhin"
  },
  "FR422": {
    "nameLatin" : "Haut-Rhin",
    "nutsName" : "Haut-Rhin",
    "nameAscii" : "Haut-Rhin",
    "nameHtml" : "Haut-Rhin"
  },
  "FR431": {
    "nameLatin" : "Doubs",
    "nutsName" : "Doubs",
    "nameAscii" : "Doubs",
    "nameHtml" : "Doubs"
  },
  "FR432": {
    "nameLatin" : "Jura",
    "nutsName" : "Jura",
    "nameAscii" : "Jura",
    "nameHtml" : "Jura"
  },
  "FR434": {
    "nameLatin" : "Territoire de Belfort",
    "nutsName" : "Territoire de Belfort",
    "nameAscii" : "Territoire de Belfort",
    "nameHtml" : "Territoire de Belfort"
  },
  "FR511": {
    "nameLatin" : "Loire-Atlantique",
    "nutsName" : "Loire-Atlantique",
    "nameAscii" : "Loire-Atlantique",
    "nameHtml" : "Loire-Atlantique"
  },
  "FR513": {
    "nameLatin" : "Mayenne",
    "nutsName" : "Mayenne",
    "nameAscii" : "Mayenne",
    "nameHtml" : "Mayenne"
  },
  "FR514": {
    "nameLatin" : "Sarthe",
    "nutsName" : "Sarthe",
    "nameAscii" : "Sarthe",
    "nameHtml" : "Sarthe"
  },
  "FR515": {
    "nameLatin" : "Vendée",
    "nutsName" : "Vendée",
    "nameAscii" : "Vendee",
    "nameHtml" : "Vend&#x00E9;e"
  },
  "FR521": {
    "nameLatin" : "Côtes-d'Armor",
    "nutsName" : "Côtes-d'Armor",
    "nameAscii" : "Cotes-d'Armor",
    "nameHtml" : "C&#x00F4;tes-d'Armor"
  },
  "FR523": {
    "nameLatin" : "Ille-et-Vilaine",
    "nutsName" : "Ille-et-Vilaine",
    "nameAscii" : "Ille-et-Vilaine",
    "nameHtml" : "Ille-et-Vilaine"
  },
  "FR524": {
    "nameLatin" : "Morbihan",
    "nutsName" : "Morbihan",
    "nameAscii" : "Morbihan",
    "nameHtml" : "Morbihan"
  },
  "FR531": {
    "nameLatin" : "Charente",
    "nutsName" : "Charente",
    "nameAscii" : "Charente",
    "nameHtml" : "Charente"
  },
  "FR532": {
    "nameLatin" : "Charente-Maritime",
    "nutsName" : "Charente-Maritime",
    "nameAscii" : "Charente-Maritime",
    "nameHtml" : "Charente-Maritime"
  },
  "FR534": {
    "nameLatin" : "Vienne",
    "nutsName" : "Vienne",
    "nameAscii" : "Vienne",
    "nameHtml" : "Vienne"
  },
  "FR611": {
    "nameLatin" : "Dordogne",
    "nutsName" : "Dordogne",
    "nameAscii" : "Dordogne",
    "nameHtml" : "Dordogne"
  },
  "FR612": {
    "nameLatin" : "Gironde",
    "nutsName" : "Gironde",
    "nameAscii" : "Gironde",
    "nameHtml" : "Gironde"
  },
  "FR613": {
    "nameLatin" : "Landes",
    "nutsName" : "Landes",
    "nameAscii" : "Landes",
    "nameHtml" : "Landes"
  },
  "FR615": {
    "nameLatin" : "Pyrénées-Atlantiques",
    "nutsName" : "Pyrénées-Atlantiques",
    "nameAscii" : "Pyrenees-Atlantiques",
    "nameHtml" : "Pyr&#x00E9;n&#x00E9;es-Atlantiques"
  },
  "FR621": {
    "nameLatin" : "Ariège",
    "nutsName" : "Ariège",
    "nameAscii" : "Ariege",
    "nameHtml" : "Ari&#x00E8;ge"
  },
  "FR623": {
    "nameLatin" : "Haute-Garonne",
    "nutsName" : "Haute-Garonne",
    "nameAscii" : "Haute-Garonne",
    "nameHtml" : "Haute-Garonne"
  },
  "FR624": {
    "nameLatin" : "Gers",
    "nutsName" : "Gers",
    "nameAscii" : "Gers",
    "nameHtml" : "Gers"
  },
  "FR625": {
    "nameLatin" : "Lot",
    "nutsName" : "Lot",
    "nameAscii" : "Lot",
    "nameHtml" : "Lot"
  },
  "FR627": {
    "nameLatin" : "Tarn",
    "nutsName" : "Tarn",
    "nameAscii" : "Tarn",
    "nameHtml" : "Tarn"
  },
  "FR628": {
    "nameLatin" : "Tarn-et-Garonne",
    "nutsName" : "Tarn-et-Garonne",
    "nameAscii" : "Tarn-et-Garonne",
    "nameHtml" : "Tarn-et-Garonne"
  },
  "FR631": {
    "nameLatin" : "Corrèze",
    "nutsName" : "Corrèze",
    "nameAscii" : "Correze",
    "nameHtml" : "Corr&#x00E8;ze"
  },
  "FR632": {
    "nameLatin" : "Creuse",
    "nutsName" : "Creuse",
    "nameAscii" : "Creuse",
    "nameHtml" : "Creuse"
  },
  "FR633": {
    "nameLatin" : "Haute-Vienne",
    "nutsName" : "Haute-Vienne",
    "nameAscii" : "Haute-Vienne",
    "nameHtml" : "Haute-Vienne"
  },
  "FR711": {
    "nameLatin" : "Ain",
    "nutsName" : "Ain",
    "nameAscii" : "Ain",
    "nameHtml" : "Ain"
  },
  "FR713": {
    "nameLatin" : "Drôme",
    "nutsName" : "Drôme",
    "nameAscii" : "Drome",
    "nameHtml" : "Dr&#x00F4;me"
  },
  "FR714": {
    "nameLatin" : "Isère",
    "nutsName" : "Isère",
    "nameAscii" : "Isere",
    "nameHtml" : "Is&#x00E8;re"
  },
  "FR715": {
    "nameLatin" : "Loire",
    "nutsName" : "Loire",
    "nameAscii" : "Loire",
    "nameHtml" : "Loire"
  },
  "FR716": {
    "nameLatin" : "Rhône",
    "nutsName" : "Rhône",
    "nameAscii" : "Rhone",
    "nameHtml" : "Rh&#x00F4;ne"
  },
  "FR717": {
    "nameLatin" : "Savoie",
    "nutsName" : "Savoie",
    "nameAscii" : "Savoie",
    "nameHtml" : "Savoie"
  },
  "FR721": {
    "nameLatin" : "Allier",
    "nutsName" : "Allier",
    "nameAscii" : "Allier",
    "nameHtml" : "Allier"
  },
  "FR722": {
    "nameLatin" : "Cantal",
    "nutsName" : "Cantal",
    "nameAscii" : "Cantal",
    "nameHtml" : "Cantal"
  },
  "FR723": {
    "nameLatin" : "Haute-Loire",
    "nutsName" : "Haute-Loire",
    "nameAscii" : "Haute-Loire",
    "nameHtml" : "Haute-Loire"
  },
  "FR724": {
    "nameLatin" : "Puy-de-Dôme",
    "nutsName" : "Puy-de-Dôme",
    "nameAscii" : "Puy-de-Dome",
    "nameHtml" : "Puy-de-D&#x00F4;me"
  },
  "FR811": {
    "nameLatin" : "Aude",
    "nutsName" : "Aude",
    "nameAscii" : "Aude",
    "nameHtml" : "Aude"
  },
  "FR812": {
    "nameLatin" : "Gard",
    "nutsName" : "Gard",
    "nameAscii" : "Gard",
    "nameHtml" : "Gard"
  },
  "FR813": {
    "nameLatin" : "Hérault",
    "nutsName" : "Hérault",
    "nameAscii" : "Herault",
    "nameHtml" : "H&#x00E9;rault"
  },
  "FR814": {
    "nameLatin" : "Lozère",
    "nutsName" : "Lozère",
    "nameAscii" : "Lozere",
    "nameHtml" : "Loz&#x00E8;re"
  },
  "FR815": {
    "nameLatin" : "Pyrénées-Orientales",
    "nutsName" : "Pyrénées-Orientales",
    "nameAscii" : "Pyrenees-Orientales",
    "nameHtml" : "Pyr&#x00E9;n&#x00E9;es-Orientales"
  },
  "FR821": {
    "nameLatin" : "Alpes-de-Haute-Provence",
    "nutsName" : "Alpes-de-Haute-Provence",
    "nameAscii" : "Alpes-de-Haute-Provence",
    "nameHtml" : "Alpes-de-Haute-Provence"
  },
  "FR822": {
    "nameLatin" : "Hautes-Alpes",
    "nutsName" : "Hautes-Alpes",
    "nameAscii" : "Hautes-Alpes",
    "nameHtml" : "Hautes-Alpes"
  },
  "FR823": {
    "nameLatin" : "Alpes-Maritimes",
    "nutsName" : "Alpes-Maritimes",
    "nameAscii" : "Alpes-Maritimes",
    "nameHtml" : "Alpes-Maritimes"
  },
  "FR824": {
    "nameLatin" : "Bouches-du-Rhône",
    "nutsName" : "Bouches-du-Rhône",
    "nameAscii" : "Bouches-du-Rhone",
    "nameHtml" : "Bouches-du-Rh&#x00F4;ne"
  },
  "FR825": {
    "nameLatin" : "Var",
    "nutsName" : "Var",
    "nameAscii" : "Var",
    "nameHtml" : "Var"
  },
  "FR826": {
    "nameLatin" : "Vaucluse",
    "nutsName" : "Vaucluse",
    "nameAscii" : "Vaucluse",
    "nameHtml" : "Vaucluse"
  },
  "FR831": {
    "nameLatin" : "Corse-du-Sud",
    "nutsName" : "Corse-du-Sud",
    "nameAscii" : "Corse-du-Sud",
    "nameHtml" : "Corse-du-Sud"
  },
  "FR832": {
    "nameLatin" : "Haute-Corse",
    "nutsName" : "Haute-Corse",
    "nameAscii" : "Haute-Corse",
    "nameHtml" : "Haute-Corse"
  },
  "FRA10": {
    "nameLatin" : "Guadeloupe",
    "nutsName" : "Guadeloupe",
    "nameAscii" : "Guadeloupe",
    "nameHtml" : "Guadeloupe"
  },
  "FRA20": {
    "nameLatin" : "Martinique",
    "nutsName" : "Martinique",
    "nameAscii" : "Martinique",
    "nameHtml" : "Martinique"
  },
  "FRA30": {
    "nameLatin" : "Guyane",
    "nutsName" : "Guyane",
    "nameAscii" : "Guyane",
    "nameHtml" : "Guyane"
  },
  "FRA40": {
    "nameLatin" : "La Réunion",
    "nutsName" : "La Réunion",
    "nameAscii" : "La Reunion",
    "nameHtml" : "La R&#x00E9;union"
  },
  "FRA50": {
    "nameLatin" : "Mayotte",
    "nutsName" : "Mayotte",
    "nameAscii" : "Mayotte",
    "nameHtml" : "Mayotte"
  },
  "HR031": {
    "nameLatin" : "Primorsko-goranska županija",
    "nutsName" : "Primorsko-goranska županija",
    "nameAscii" : "Primorsko-Goranska Zupanija",
    "nameHtml" : "Primorsko-Goranska &#x017D;upanija"
  },
  "HR032": {
    "nameLatin" : "Licko-senjska županija",
    "nutsName" : "Licko-senjska županija",
    "nameAscii" : "Licko-Senjska Zupanija",
    "nameHtml" : "Licko-Senjska &#x017D;upanija"
  },
  "HR033": {
    "nameLatin" : "Zadarska županija",
    "nutsName" : "Zadarska županija",
    "nameAscii" : "Zadarska Zupanija",
    "nameHtml" : "Zadarska &#x017D;upanija"
  },
  "HR035": {
    "nameLatin" : "Splitsko-dalmatinska županija",
    "nutsName" : "Splitsko-dalmatinska županija",
    "nameAscii" : "Splitsko-Dalmatinska Zupanija",
    "nameHtml" : "Splitsko-Dalmatinska &#x017D;upanija"
  },
  "HR036": {
    "nameLatin" : "Istarska županija",
    "nutsName" : "Istarska županija",
    "nameAscii" : "Istarska Zupanija",
    "nameHtml" : "Istarska &#x017D;upanija"
  },
  "HR037": {
    "nameLatin" : "Dubrovacko-neretvanska županija",
    "nutsName" : "Dubrovacko-neretvanska županija",
    "nameAscii" : "Dubrovacko-Neretvanska Zupanija",
    "nameHtml" : "Dubrovacko-Neretvanska &#x017D;upanija"
  },
  "HR042": {
    "nameLatin" : "Zagrebacka županija",
    "nutsName" : "Zagrebacka županija",
    "nameAscii" : "Zagrebacka Zupanija",
    "nameHtml" : "Zagrebacka &#x017D;upanija"
  },
  "HR043": {
    "nameLatin" : "Krapinsko-zagorska županija",
    "nutsName" : "Krapinsko-zagorska županija",
    "nameAscii" : "Krapinsko-Zagorska Zupanija",
    "nameHtml" : "Krapinsko-Zagorska &#x017D;upanija"
  },
  "HR045": {
    "nameLatin" : "Koprivnicko-križevacka županija",
    "nutsName" : "Koprivnicko-križevacka županija",
    "nameAscii" : "Koprivnicko-Krizevacka Zupanija",
    "nameHtml" : "Koprivnicko-Kri&#x017E;evacka &#x017D;upanija"
  },
  "HR046": {
    "nameLatin" : "Medimurska županija",
    "nutsName" : "Medimurska županija",
    "nameAscii" : "Medimurska Zupanija",
    "nameHtml" : "Medimurska &#x017D;upanija"
  },
  "HR047": {
    "nameLatin" : "Bjelovarsko-bilogorska županija",
    "nutsName" : "Bjelovarsko-bilogorska županija",
    "nameAscii" : "Bjelovarsko-Bilogorska Zupanija",
    "nameHtml" : "Bjelovarsko-Bilogorska &#x017D;upanija"
  },
  "HR049": {
    "nameLatin" : "Požeško-slavonska županija",
    "nutsName" : "Požeško-slavonska županija",
    "nameAscii" : "Pozesko-Slavonska Zupanija",
    "nameHtml" : "Po&#x017E;e&#x0161;ko-Slavonska &#x017D;upanija"
  },
  "HR04A": {
    "nameLatin" : "Brodsko-posavska županija",
    "nutsName" : "Brodsko-posavska županija",
    "nameAscii" : "Brodsko-Posavska Zupanija",
    "nameHtml" : "Brodsko-Posavska &#x017D;upanija"
  },
  "HR04B": {
    "nameLatin" : "Osjecko-baranjska županija",
    "nutsName" : "Osjecko-baranjska županija",
    "nameAscii" : "Osjecko-Baranjska Zupanija",
    "nameHtml" : "Osjecko-Baranjska &#x017D;upanija"
  },
  "HR04D": {
    "nameLatin" : "Karlovacka županija",
    "nutsName" : "Karlovacka županija",
    "nameAscii" : "Karlovacka Zupanija",
    "nameHtml" : "Karlovacka &#x017D;upanija"
  },
  "HR04E": {
    "nameLatin" : "Sisacko-moslavacka županija",
    "nutsName" : "Sisacko-moslavacka županija",
    "nameAscii" : "Sisacko-Moslavacka Zupanija",
    "nameHtml" : "Sisacko-Moslavacka &#x017D;upanija"
  },
  "HU101": {
    "nameLatin" : "Budapest",
    "nutsName" : "Budapest",
    "nameAscii" : "Budapest",
    "nameHtml" : "Budapest"
  },
  "HU102": {
    "nameLatin" : "Pest",
    "nutsName" : "Pest",
    "nameAscii" : "Pest",
    "nameHtml" : "Pest"
  },
  "HU211": {
    "nameLatin" : "Fejér",
    "nutsName" : "Fejér",
    "nameAscii" : "Fejer",
    "nameHtml" : "Fej&#x00E9;r"
  },
  "HU213": {
    "nameLatin" : "Veszprém",
    "nutsName" : "Veszprém",
    "nameAscii" : "Veszprem",
    "nameHtml" : "Veszpr&#x00E9;m"
  },
  "HU221": {
    "nameLatin" : "Gyor-Moson-Sopron",
    "nutsName" : "Gyor-Moson-Sopron",
    "nameAscii" : "Gyor-Moson-Sopron",
    "nameHtml" : "Gyor-Moson-Sopron"
  },
  "HU222": {
    "nameLatin" : "Vas",
    "nutsName" : "Vas",
    "nameAscii" : "Vas",
    "nameHtml" : "Vas"
  },
  "HU223": {
    "nameLatin" : "Zala",
    "nutsName" : "Zala",
    "nameAscii" : "Zala",
    "nameHtml" : "Zala"
  },
  "HU231": {
    "nameLatin" : "Baranya",
    "nutsName" : "Baranya",
    "nameAscii" : "Baranya",
    "nameHtml" : "Baranya"
  },
  "HU232": {
    "nameLatin" : "Somogy",
    "nutsName" : "Somogy",
    "nameAscii" : "Somogy",
    "nameHtml" : "Somogy"
  },
  "HU233": {
    "nameLatin" : "Tolna",
    "nutsName" : "Tolna",
    "nameAscii" : "Tolna",
    "nameHtml" : "Tolna"
  },
  "HU312": {
    "nameLatin" : "Heves",
    "nutsName" : "Heves",
    "nameAscii" : "Heves",
    "nameHtml" : "Heves"
  },
  "HU313": {
    "nameLatin" : "Nógrád",
    "nutsName" : "Nógrád",
    "nameAscii" : "Nograd",
    "nameHtml" : "N&#x00F3;gr&#x00E1;d"
  },
  "HU321": {
    "nameLatin" : "Hajdú-Bihar",
    "nutsName" : "Hajdú-Bihar",
    "nameAscii" : "Hajdu-Bihar",
    "nameHtml" : "Hajd&#x00FA;-Bihar"
  },
  "HU322": {
    "nameLatin" : "Jász-Nagykun-Szolnok",
    "nutsName" : "Jász-Nagykun-Szolnok",
    "nameAscii" : "Jasz-Nagykun-Szolnok",
    "nameHtml" : "J&#x00E1;sz-Nagykun-Szolnok"
  },
  "HU331": {
    "nameLatin" : "Bács-Kiskun",
    "nutsName" : "Bács-Kiskun",
    "nameAscii" : "Bacs-Kiskun",
    "nameHtml" : "B&#x00E1;cs-Kiskun"
  },
  "HU332": {
    "nameLatin" : "Békés",
    "nutsName" : "Békés",
    "nameAscii" : "Bekes",
    "nameHtml" : "B&#x00E9;k&#x00E9;s"
  },
  "HU333": {
    "nameLatin" : "Csongrád",
    "nutsName" : "Csongrád",
    "nameAscii" : "Csongrad",
    "nameHtml" : "Csongr&#x00E1;d"
  },
  "IE011": {
    "nameLatin" : "Border",
    "nutsName" : "Border",
    "nameAscii" : "Border",
    "nameHtml" : "Border"
  },
  "IE012": {
    "nameLatin" : "Midland",
    "nutsName" : "Midland",
    "nameAscii" : "Midland",
    "nameHtml" : "Midland"
  },
  "IE021": {
    "nameLatin" : "Dublin",
    "nutsName" : "Dublin",
    "nameAscii" : "Dublin",
    "nameHtml" : "Dublin"
  },
  "IE023": {
    "nameLatin" : "Mid-West",
    "nutsName" : "Mid-West",
    "nameAscii" : "Mid-West",
    "nameHtml" : "Mid-West"
  },
  "IE024": {
    "nameLatin" : "South-East (IE)",
    "nutsName" : "South-East (IE)",
    "nameAscii" : "South-East (IE)",
    "nameHtml" : "South-East (IE)"
  },
  "IE025": {
    "nameLatin" : "South-West (IE)",
    "nutsName" : "South-West (IE)",
    "nameAscii" : "South-West (IE)",
    "nameHtml" : "South-West (IE)"
  },
  "IS001": {
    "nameLatin" : "Höfuðborgarsvæði",
    "nutsName" : "Höfuðborgarsvæði",
    "nameAscii" : "Hofudborgarsvaedi",
    "nameHtml" : "H&#x00F6;fu&#x00F0;borgarsv&#x00E6;&#x00F0;i"
  },
  "IS002": {
    "nameLatin" : "Landsbyggð",
    "nutsName" : "Landsbyggð",
    "nameAscii" : "Landsbyggd",
    "nameHtml" : "Landsbygg&#x00F0;"
  },
  "ITC11": {
    "nameLatin" : "Torino",
    "nutsName" : "Torino",
    "nameAscii" : "Torino",
    "nameHtml" : "Torino"
  },
  "ITC12": {
    "nameLatin" : "Vercelli",
    "nutsName" : "Vercelli",
    "nameAscii" : "Vercelli",
    "nameHtml" : "Vercelli"
  },
  "ITC13": {
    "nameLatin" : "Biella",
    "nutsName" : "Biella",
    "nameAscii" : "Biella",
    "nameHtml" : "Biella"
  },
  "ITC14": {
    "nameLatin" : "Verbano-Cusio-Ossola",
    "nutsName" : "Verbano-Cusio-Ossola",
    "nameAscii" : "Verbano-Cusio-Ossola",
    "nameHtml" : "Verbano-Cusio-Ossola"
  },
  "ITC15": {
    "nameLatin" : "Novara",
    "nutsName" : "Novara",
    "nameAscii" : "Novara",
    "nameHtml" : "Novara"
  },
  "ITC16": {
    "nameLatin" : "Cuneo",
    "nutsName" : "Cuneo",
    "nameAscii" : "Cuneo",
    "nameHtml" : "Cuneo"
  },
  "ITC17": {
    "nameLatin" : "Asti",
    "nutsName" : "Asti",
    "nameAscii" : "Asti",
    "nameHtml" : "Asti"
  },
  "ITC18": {
    "nameLatin" : "Alessandria",
    "nutsName" : "Alessandria",
    "nameAscii" : "Alessandria",
    "nameHtml" : "Alessandria"
  },
  "ITC20": {
    "nameLatin" : "Valle d'Aosta/Vallée d'Aoste",
    "nutsName" : "Valle d'Aosta/Vallée d'Aoste",
    "nameAscii" : "Valle d'Aosta/Vallee D'Aoste",
    "nameHtml" : "Valle d'Aosta/Vall&#x00E9;e D'Aoste"
  },
  "ITC31": {
    "nameLatin" : "Imperia",
    "nutsName" : "Imperia",
    "nameAscii" : "Imperia",
    "nameHtml" : "Imperia"
  },
  "ITC32": {
    "nameLatin" : "Savona",
    "nutsName" : "Savona",
    "nameAscii" : "Savona",
    "nameHtml" : "Savona"
  },
  "ITC33": {
    "nameLatin" : "Genova",
    "nutsName" : "Genova",
    "nameAscii" : "Genova",
    "nameHtml" : "Genova"
  },
  "ITC34": {
    "nameLatin" : "La Spezia",
    "nutsName" : "La Spezia",
    "nameAscii" : "La Spezia",
    "nameHtml" : "La Spezia"
  },
  "ITC41": {
    "nameLatin" : "Varese",
    "nutsName" : "Varese",
    "nameAscii" : "Varese",
    "nameHtml" : "Varese"
  },
  "ITC42": {
    "nameLatin" : "Como",
    "nutsName" : "Como",
    "nameAscii" : "Como",
    "nameHtml" : "Como"
  },
  "ITC43": {
    "nameLatin" : "Lecco",
    "nutsName" : "Lecco",
    "nameAscii" : "Lecco",
    "nameHtml" : "Lecco"
  },
  "ITC44": {
    "nameLatin" : "Sondrio",
    "nutsName" : "Sondrio",
    "nameAscii" : "Sondrio",
    "nameHtml" : "Sondrio"
  },
  "ITC46": {
    "nameLatin" : "Bergamo",
    "nutsName" : "Bergamo",
    "nameAscii" : "Bergamo",
    "nameHtml" : "Bergamo"
  },
  "ITC47": {
    "nameLatin" : "Brescia",
    "nutsName" : "Brescia",
    "nameAscii" : "Brescia",
    "nameHtml" : "Brescia"
  },
  "ITC48": {
    "nameLatin" : "Pavia",
    "nutsName" : "Pavia",
    "nameAscii" : "Pavia",
    "nameHtml" : "Pavia"
  },
  "ITC49": {
    "nameLatin" : "Lodi",
    "nutsName" : "Lodi",
    "nameAscii" : "Lodi",
    "nameHtml" : "Lodi"
  },
  "ITC4A": {
    "nameLatin" : "Cremona",
    "nutsName" : "Cremona",
    "nameAscii" : "Cremona",
    "nameHtml" : "Cremona"
  },
  "ITC4B": {
    "nameLatin" : "Mantova",
    "nutsName" : "Mantova",
    "nameAscii" : "Mantova",
    "nameHtml" : "Mantova"
  },
  "ITC4C": {
    "nameLatin" : "Milano",
    "nutsName" : "Milano",
    "nameAscii" : "Milano",
    "nameHtml" : "Milano"
  },
  "ITC4D": {
    "nameLatin" : "Monza e della Brianza",
    "nutsName" : "Monza e della Brianza",
    "nameAscii" : "Monza e della Brianza",
    "nameHtml" : "Monza e della Brianza"
  },
  "ITF11": {
    "nameLatin" : "L'Aquila",
    "nutsName" : "L'Aquila",
    "nameAscii" : "L'Aquila",
    "nameHtml" : "L'Aquila"
  },
  "ITF12": {
    "nameLatin" : "Teramo",
    "nutsName" : "Teramo",
    "nameAscii" : "Teramo",
    "nameHtml" : "Teramo"
  },
  "ITF13": {
    "nameLatin" : "Pescara",
    "nutsName" : "Pescara",
    "nameAscii" : "Pescara",
    "nameHtml" : "Pescara"
  },
  "ITF14": {
    "nameLatin" : "Chieti",
    "nutsName" : "Chieti",
    "nameAscii" : "Chieti",
    "nameHtml" : "Chieti"
  },
  "ITF21": {
    "nameLatin" : "Isernia",
    "nutsName" : "Isernia",
    "nameAscii" : "Isernia",
    "nameHtml" : "Isernia"
  },
  "ITF22": {
    "nameLatin" : "Campobasso",
    "nutsName" : "Campobasso",
    "nameAscii" : "Campobasso",
    "nameHtml" : "Campobasso"
  },
  "ITF31": {
    "nameLatin" : "Caserta",
    "nutsName" : "Caserta",
    "nameAscii" : "Caserta",
    "nameHtml" : "Caserta"
  },
  "ITF32": {
    "nameLatin" : "Benevento",
    "nutsName" : "Benevento",
    "nameAscii" : "Benevento",
    "nameHtml" : "Benevento"
  },
  "ITF33": {
    "nameLatin" : "Napoli",
    "nutsName" : "Napoli",
    "nameAscii" : "Napoli",
    "nameHtml" : "Napoli"
  },
  "ITF34": {
    "nameLatin" : "Avellino",
    "nutsName" : "Avellino",
    "nameAscii" : "Avellino",
    "nameHtml" : "Avellino"
  },
  "ITF35": {
    "nameLatin" : "Salerno",
    "nutsName" : "Salerno",
    "nameAscii" : "Salerno",
    "nameHtml" : "Salerno"
  },
  "ITF43": {
    "nameLatin" : "Taranto",
    "nutsName" : "Taranto",
    "nameAscii" : "Taranto",
    "nameHtml" : "Taranto"
  },
  "ITF44": {
    "nameLatin" : "Brindisi",
    "nutsName" : "Brindisi",
    "nameAscii" : "Brindisi",
    "nameHtml" : "Brindisi"
  },
  "ITF45": {
    "nameLatin" : "Lecce",
    "nutsName" : "Lecce",
    "nameAscii" : "Lecce",
    "nameHtml" : "Lecce"
  },
  "ITF46": {
    "nameLatin" : "Foggia",
    "nutsName" : "Foggia",
    "nameAscii" : "Foggia",
    "nameHtml" : "Foggia"
  },
  "ITF47": {
    "nameLatin" : "Bari",
    "nutsName" : "Bari",
    "nameAscii" : "Bari",
    "nameHtml" : "Bari"
  },
  "ITF51": {
    "nameLatin" : "Potenza",
    "nutsName" : "Potenza",
    "nameAscii" : "Potenza",
    "nameHtml" : "Potenza"
  },
  "ITF52": {
    "nameLatin" : "Matera",
    "nutsName" : "Matera",
    "nameAscii" : "Matera",
    "nameHtml" : "Matera"
  },
  "ITF61": {
    "nameLatin" : "Cosenza",
    "nutsName" : "Cosenza",
    "nameAscii" : "Cosenza",
    "nameHtml" : "Cosenza"
  },
  "ITF62": {
    "nameLatin" : "Crotone",
    "nutsName" : "Crotone",
    "nameAscii" : "Crotone",
    "nameHtml" : "Crotone"
  },
  "ITF63": {
    "nameLatin" : "Catanzaro",
    "nutsName" : "Catanzaro",
    "nameAscii" : "Catanzaro",
    "nameHtml" : "Catanzaro"
  },
  "ITF64": {
    "nameLatin" : "Vibo Valentia",
    "nutsName" : "Vibo Valentia",
    "nameAscii" : "Vibo Valentia",
    "nameHtml" : "Vibo Valentia"
  },
  "ITF65": {
    "nameLatin" : "Reggio di Calabria",
    "nutsName" : "Reggio di Calabria",
    "nameAscii" : "Reggio di Calabria",
    "nameHtml" : "Reggio di Calabria"
  },
  "ITG12": {
    "nameLatin" : "Palermo",
    "nutsName" : "Palermo",
    "nameAscii" : "Palermo",
    "nameHtml" : "Palermo"
  },
  "ITG13": {
    "nameLatin" : "Messina",
    "nutsName" : "Messina",
    "nameAscii" : "Messina",
    "nameHtml" : "Messina"
  },
  "ITG14": {
    "nameLatin" : "Agrigento",
    "nutsName" : "Agrigento",
    "nameAscii" : "Agrigento",
    "nameHtml" : "Agrigento"
  },
  "ITG15": {
    "nameLatin" : "Caltanissetta",
    "nutsName" : "Caltanissetta",
    "nameAscii" : "Caltanissetta",
    "nameHtml" : "Caltanissetta"
  },
  "ITG17": {
    "nameLatin" : "Catania",
    "nutsName" : "Catania",
    "nameAscii" : "Catania",
    "nameHtml" : "Catania"
  },
  "ITG18": {
    "nameLatin" : "Ragusa",
    "nutsName" : "Ragusa",
    "nameAscii" : "Ragusa",
    "nameHtml" : "Ragusa"
  },
  "ITG19": {
    "nameLatin" : "Siracusa",
    "nutsName" : "Siracusa",
    "nameAscii" : "Siracusa",
    "nameHtml" : "Siracusa"
  },
  "ITG25": {
    "nameLatin" : "Sassari",
    "nutsName" : "Sassari",
    "nameAscii" : "Sassari",
    "nameHtml" : "Sassari"
  },
  "ITG26": {
    "nameLatin" : "Nuoro",
    "nutsName" : "Nuoro",
    "nameAscii" : "Nuoro",
    "nameHtml" : "Nuoro"
  },
  "ITG27": {
    "nameLatin" : "Cagliari",
    "nutsName" : "Cagliari",
    "nameAscii" : "Cagliari",
    "nameHtml" : "Cagliari"
  },
  "ITG28": {
    "nameLatin" : "Oristano",
    "nutsName" : "Oristano",
    "nameAscii" : "Oristano",
    "nameHtml" : "Oristano"
  },
  "ITG29": {
    "nameLatin" : "Olbia-Tempio",
    "nutsName" : "Olbia-Tempio",
    "nameAscii" : "Olbia-Tempio",
    "nameHtml" : "Olbia-Tempio"
  },
  "ITG2B": {
    "nameLatin" : "Medio Campidano",
    "nutsName" : "Medio Campidano",
    "nameAscii" : "Medio Campidano",
    "nameHtml" : "Medio Campidano"
  },
  "ITG2C": {
    "nameLatin" : "Carbonia-Iglesias",
    "nutsName" : "Carbonia-Iglesias",
    "nameAscii" : "Carbonia-Iglesias",
    "nameHtml" : "Carbonia-Iglesias"
  },
  "ITH10": {
    "nameLatin" : "Bolzano-Bozen",
    "nutsName" : "Bolzano-Bozen",
    "nameAscii" : "Bolzano-Bozen",
    "nameHtml" : "Bolzano-Bozen"
  },
  "ITH20": {
    "nameLatin" : "Trento",
    "nutsName" : "Trento",
    "nameAscii" : "Trento",
    "nameHtml" : "Trento"
  },
  "ITH31": {
    "nameLatin" : "Verona",
    "nutsName" : "Verona",
    "nameAscii" : "Verona",
    "nameHtml" : "Verona"
  },
  "ITH32": {
    "nameLatin" : "Vicenza",
    "nutsName" : "Vicenza",
    "nameAscii" : "Vicenza",
    "nameHtml" : "Vicenza"
  },
  "ITH33": {
    "nameLatin" : "Belluno",
    "nutsName" : "Belluno",
    "nameAscii" : "Belluno",
    "nameHtml" : "Belluno"
  },
  "ITH34": {
    "nameLatin" : "Treviso",
    "nutsName" : "Treviso",
    "nameAscii" : "Treviso",
    "nameHtml" : "Treviso"
  },
  "ITH35": {
    "nameLatin" : "Venezia",
    "nutsName" : "Venezia",
    "nameAscii" : "Venezia",
    "nameHtml" : "Venezia"
  },
  "ITH36": {
    "nameLatin" : "Padova",
    "nutsName" : "Padova",
    "nameAscii" : "Padova",
    "nameHtml" : "Padova"
  },
  "ITH37": {
    "nameLatin" : "Rovigo",
    "nutsName" : "Rovigo",
    "nameAscii" : "Rovigo",
    "nameHtml" : "Rovigo"
  },
  "ITH41": {
    "nameLatin" : "Pordenone",
    "nutsName" : "Pordenone",
    "nameAscii" : "Pordenone",
    "nameHtml" : "Pordenone"
  },
  "ITH42": {
    "nameLatin" : "Udine",
    "nutsName" : "Udine",
    "nameAscii" : "Udine",
    "nameHtml" : "Udine"
  },
  "ITH44": {
    "nameLatin" : "Trieste",
    "nutsName" : "Trieste",
    "nameAscii" : "Trieste",
    "nameHtml" : "Trieste"
  },
  "ITH51": {
    "nameLatin" : "Piacenza",
    "nutsName" : "Piacenza",
    "nameAscii" : "Piacenza",
    "nameHtml" : "Piacenza"
  },
  "ITH52": {
    "nameLatin" : "Parma",
    "nutsName" : "Parma",
    "nameAscii" : "Parma",
    "nameHtml" : "Parma"
  },
  "ITH54": {
    "nameLatin" : "Modena",
    "nutsName" : "Modena",
    "nameAscii" : "Modena",
    "nameHtml" : "Modena"
  },
  "ITH55": {
    "nameLatin" : "Bologna",
    "nutsName" : "Bologna",
    "nameAscii" : "Bologna",
    "nameHtml" : "Bologna"
  },
  "ITH56": {
    "nameLatin" : "Ferrara",
    "nutsName" : "Ferrara",
    "nameAscii" : "Ferrara",
    "nameHtml" : "Ferrara"
  },
  "ITH57": {
    "nameLatin" : "Ravenna",
    "nutsName" : "Ravenna",
    "nameAscii" : "Ravenna",
    "nameHtml" : "Ravenna"
  },
  "ITH58": {
    "nameLatin" : "Forlì-Cesena",
    "nutsName" : "Forlì-Cesena",
    "nameAscii" : "Forli-Cesena",
    "nameHtml" : "Forl&#x00EC;-Cesena"
  },
  "ITH59": {
    "nameLatin" : "Rimini",
    "nutsName" : "Rimini",
    "nameAscii" : "Rimini",
    "nameHtml" : "Rimini"
  },
  "ITI12": {
    "nameLatin" : "Lucca",
    "nutsName" : "Lucca",
    "nameAscii" : "Lucca",
    "nameHtml" : "Lucca"
  },
  "ITI13": {
    "nameLatin" : "Pistoia",
    "nutsName" : "Pistoia",
    "nameAscii" : "Pistoia",
    "nameHtml" : "Pistoia"
  },
  "ITI14": {
    "nameLatin" : "Firenze",
    "nutsName" : "Firenze",
    "nameAscii" : "Firenze",
    "nameHtml" : "Firenze"
  },
  "ITI15": {
    "nameLatin" : "Prato",
    "nutsName" : "Prato",
    "nameAscii" : "Prato",
    "nameHtml" : "Prato"
  },
  "ITI16": {
    "nameLatin" : "Livorno",
    "nutsName" : "Livorno",
    "nameAscii" : "Livorno",
    "nameHtml" : "Livorno"
  },
  "ITI17": {
    "nameLatin" : "Pisa",
    "nutsName" : "Pisa",
    "nameAscii" : "Pisa",
    "nameHtml" : "Pisa"
  },
  "ITI18": {
    "nameLatin" : "Arezzo",
    "nutsName" : "Arezzo",
    "nameAscii" : "Arezzo",
    "nameHtml" : "Arezzo"
  },
  "ITI19": {
    "nameLatin" : "Siena",
    "nutsName" : "Siena",
    "nameAscii" : "Siena",
    "nameHtml" : "Siena"
  },
  "ITI1A": {
    "nameLatin" : "Grosseto",
    "nutsName" : "Grosseto",
    "nameAscii" : "Grosseto",
    "nameHtml" : "Grosseto"
  },
  "ITI22": {
    "nameLatin" : "Terni",
    "nutsName" : "Terni",
    "nameAscii" : "Terni",
    "nameHtml" : "Terni"
  },
  "ITI31": {
    "nameLatin" : "Pesaro e Urbino",
    "nutsName" : "Pesaro e Urbino",
    "nameAscii" : "Pesaro E Urbino",
    "nameHtml" : "Pesaro E Urbino"
  },
  "ITI32": {
    "nameLatin" : "Ancona",
    "nutsName" : "Ancona",
    "nameAscii" : "Ancona",
    "nameHtml" : "Ancona"
  },
  "ITI33": {
    "nameLatin" : "Macerata",
    "nutsName" : "Macerata",
    "nameAscii" : "Macerata",
    "nameHtml" : "Macerata"
  },
  "ITI34": {
    "nameLatin" : "Ascoli Piceno",
    "nutsName" : "Ascoli Piceno",
    "nameAscii" : "Ascoli Piceno",
    "nameHtml" : "Ascoli Piceno"
  },
  "ITI35": {
    "nameLatin" : "Fermo",
    "nutsName" : "Fermo",
    "nameAscii" : "Fermo",
    "nameHtml" : "Fermo"
  },
  "ITI41": {
    "nameLatin" : "Viterbo",
    "nutsName" : "Viterbo",
    "nameAscii" : "Viterbo",
    "nameHtml" : "Viterbo"
  },
  "ITI42": {
    "nameLatin" : "Rieti",
    "nutsName" : "Rieti",
    "nameAscii" : "Rieti",
    "nameHtml" : "Rieti"
  },
  "ITI43": {
    "nameLatin" : "Roma",
    "nutsName" : "Roma",
    "nameAscii" : "Roma",
    "nameHtml" : "Roma"
  },
  "ITI44": {
    "nameLatin" : "Latina",
    "nutsName" : "Latina",
    "nameAscii" : "Latina",
    "nameHtml" : "Latina"
  },
  "ITI45": {
    "nameLatin" : "Frosinone",
    "nutsName" : "Frosinone",
    "nameAscii" : "Frosinone",
    "nameHtml" : "Frosinone"
  },
  "LI000": {
    "nameLatin" : "Liechtenstein",
    "nutsName" : "Liechtenstein",
    "nameAscii" : "Liechtenstein",
    "nameHtml" : "Liechtenstein"
  },
  "LT001": {
    "nameLatin" : "Alytaus apskritis",
    "nutsName" : "Alytaus apskritis",
    "nameAscii" : "Alytaus apskritis",
    "nameHtml" : "Alytaus pskritis"
  },
  "LT002": {
    "nameLatin" : "Kauno apskritis",
    "nutsName" : "Kauno apskritis",
    "nameAscii" : "Kauno apskritis",
    "nameHtml" : "Kauno apskritis"
  },
  "LT003": {
    "nameLatin" : "Klaipedos apskritis",
    "nutsName" : "Klaipedos apskritis",
    "nameAscii" : "Klaipedos apskritis",
    "nameHtml" : "Klaipedos apskritis"
  },
  "LT004": {
    "nameLatin" : "Marijampoles apskritis",
    "nutsName" : "Marijampoles apskritis",
    "nameAscii" : "Marijampoles apskritis",
    "nameHtml" : "Marijampoles apskritis"
  },
  "LT005": {
    "nameLatin" : "Panevežio apskritis",
    "nutsName" : "Panevežio apskritis",
    "nameAscii" : "Panevezio apskritis",
    "nameHtml" : "Paneve&#x017E;io apskritis"
  },
  "LT006": {
    "nameLatin" : "Šiauliu apskritis",
    "nutsName" : "Šiauliu apskritis",
    "nameAscii" : "Siauliu apskritis",
    "nameHtml" : "&#x0160;iauliu apskritis"
  },
  "LT007": {
    "nameLatin" : "Taurages apskritis",
    "nutsName" : "Taurages apskritis",
    "nameAscii" : "Taurages apskritis",
    "nameHtml" : "Taurages apskritis"
  },
  "LT008": {
    "nameLatin" : "Telšiu apskritis",
    "nutsName" : "Telšiu apskritis",
    "nameAscii" : "Telsiu apskritis",
    "nameHtml" : "Tel&#x0161;iu apskritis"
  },
  "LT009": {
    "nameLatin" : "Utenos apskritis",
    "nutsName" : "Utenos apskritis",
    "nameAscii" : "Utenos apskritis",
    "nameHtml" : "Utenos apskritis"
  },
  "LT00A": {
    "nameLatin" : "Vilniaus apskritis",
    "nutsName" : "Vilniaus apskritis",
    "nameAscii" : "Vilniaus apskritis",
    "nameHtml" : "Vilniaus apskritis"
  },
  "LU000": {
    "nameLatin" : "Luxembourg",
    "nutsName" : "Luxembourg",
    "nameAscii" : "Luxembourg",
    "nameHtml" : "Luxembourg"
  },
  "LV003": {
    "nameLatin" : "Kurzeme",
    "nutsName" : "Kurzeme",
    "nameAscii" : "Kurzeme",
    "nameHtml" : "Kurzeme"
  },
  "LV005": {
    "nameLatin" : "Latgale",
    "nutsName" : "Latgale",
    "nameAscii" : "Latgale",
    "nameHtml" : "Latgale"
  },
  "LV006": {
    "nameLatin" : "Riga",
    "nutsName" : "Riga",
    "nameAscii" : "Riga",
    "nameHtml" : "Riga"
  },
  "LV007": {
    "nameLatin" : "Pieriga",
    "nutsName" : "Pieriga",
    "nameAscii" : "Pieriga",
    "nameHtml" : "Pieriga"
  },
  "LV008": {
    "nameLatin" : "Vidzeme",
    "nutsName" : "Vidzeme",
    "nameAscii" : "Vidzeme",
    "nameHtml" : "Vidzeme"
  },
  "MK001": {
    "nameLatin" : "Vardarski",
    "nutsName" : "Вардарски",
    "nameAscii" : "Vardarski",
    "nameHtml" : "Vardarski"
  },
  "MK002": {
    "nameLatin" : "Istočen",
    "nutsName" : "Источен",
    "nameAscii" : "Istocen",
    "nameHtml" : "Istocen"
  },
  "MK003": {
    "nameLatin" : "Jugozapaden",
    "nutsName" : "Југозападен",
    "nameAscii" : "Jugozapaden",
    "nameHtml" : "Jugozapaden"
  },
  "MK004": {
    "nameLatin" : "Jugoistočen",
    "nutsName" : "Југоисточен",
    "nameAscii" : "Jugoistocen",
    "nameHtml" : "Jugoistocen"
  },
  "MK005": {
    "nameLatin" : "Пелагониски",
    "nutsName" : "Пелагониски",
    "nameAscii" : "Pelagoniski",
    "nameHtml" : "Pelagoniski"
  },
  "MK006": {
    "nameLatin" : "Pološki",
    "nutsName" : "Полошки",
    "nameAscii" : "Poloski",
    "nameHtml" : "Polo&#x0161;ki"
  },
  "MK007": {
    "nameLatin" : "Severoistočen",
    "nutsName" : "Североисточен",
    "nameAscii" : "Severoistocen",
    "nameHtml" : "Severoistocen"
  },
  "MK008": {
    "nameLatin" : "Skopski",
    "nutsName" : "Скопски",
    "nameAscii" : "Skopski",
    "nameHtml" : "Skopski"
  },
  "MT001": {
    "nameLatin" : "Malta",
    "nutsName" : "Malta",
    "nameAscii" : "Malta",
    "nameHtml" : "Malta"
  },
  "MT002": {
    "nameLatin" : "Gozo and Comino / Ghawdex u Kemmuna",
    "nutsName" : "Gozo and Comino / Ghawdex u Kemmuna",
    "nameAscii" : "Gozo and Comino / Ghawdex u Kemmuna",
    "nameHtml" : "Gozo and Comino / Ghawdex u Kemmuna"
  },
  "NL111": {
    "nameLatin" : "Oost-Groningen",
    "nutsName" : "Oost-Groningen",
    "nameAscii" : "Oost-Groningen",
    "nameHtml" : "Oost-Groningen"
  },
  "NL112": {
    "nameLatin" : "Delfzijl en omgeving",
    "nutsName" : "Delfzijl en omgeving",
    "nameAscii" : "Delfzijl en Omgeving",
    "nameHtml" : "Delfzijl en Omgeving"
  },
  "NL121": {
    "nameLatin" : "Noord-Friesland",
    "nutsName" : "Noord-Friesland",
    "nameAscii" : "Noord-Friesland",
    "nameHtml" : "Noord-Friesland"
  },
  "NL122": {
    "nameLatin" : "Zuidwest-Friesland",
    "nutsName" : "Zuidwest-Friesland",
    "nameAscii" : "Zuidwest-Friesland",
    "nameHtml" : "Zuidwest-Friesland"
  },
  "NL123": {
    "nameLatin" : "Zuidoost-Friesland",
    "nutsName" : "Zuidoost-Friesland",
    "nameAscii" : "Zuidoost-Friesland",
    "nameHtml" : "Zuidoost-Friesland"
  },
  "NL132": {
    "nameLatin" : "Zuidoost-Drenthe",
    "nutsName" : "Zuidoost-Drenthe",
    "nameAscii" : "Zuidoost-Drenthe",
    "nameHtml" : "Zuidoost-Drenthe"
  },
  "NL133": {
    "nameLatin" : "Zuidwest-Drenthe",
    "nutsName" : "Zuidwest-Drenthe",
    "nameAscii" : "Zuidwest-Drenthe",
    "nameHtml" : "Zuidwest-Drenthe"
  },
  "NL212": {
    "nameLatin" : "Zuidwest-Overijssel",
    "nutsName" : "Zuidwest-Overijssel",
    "nameAscii" : "Zuidwest-Overijssel",
    "nameHtml" : "Zuidwest-Overijssel"
  },
  "NL213": {
    "nameLatin" : "Twente",
    "nutsName" : "Twente",
    "nameAscii" : "Twente",
    "nameHtml" : "Twente"
  },
  "NL221": {
    "nameLatin" : "Veluwe",
    "nutsName" : "Veluwe",
    "nameAscii" : "Veluwe",
    "nameHtml" : "Veluwe"
  },
  "NL224": {
    "nameLatin" : "Zuidwest-Gelderland",
    "nutsName" : "Zuidwest-Gelderland",
    "nameAscii" : "Zuidwest-Gelderland",
    "nameHtml" : "Zuidwest-Gelderland"
  },
  "NL225": {
    "nameLatin" : "Achterhoek",
    "nutsName" : "Achterhoek",
    "nameAscii" : "Achterhoek",
    "nameHtml" : "Achterhoek"
  },
  "NL230": {
    "nameLatin" : "Flevoland",
    "nutsName" : "Flevoland",
    "nameAscii" : "Flevoland",
    "nameHtml" : "Flevoland"
  },
  "NL310": {
    "nameLatin" : "Utrecht",
    "nutsName" : "Utrecht",
    "nameAscii" : "Utrecht",
    "nameHtml" : "Utrecht"
  },
  "NL322": {
    "nameLatin" : "Alkmaar en omgeving",
    "nutsName" : "Alkmaar en omgeving",
    "nameAscii" : "Alkmaar en Omgeving",
    "nameHtml" : "Alkmaar en Omgeving"
  },
  "NL323": {
    "nameLatin" : "IJmond",
    "nutsName" : "IJmond",
    "nameAscii" : "Ijmond",
    "nameHtml" : "Ijmond"
  },
  "NL324": {
    "nameLatin" : "Agglomeratie Haarlem",
    "nutsName" : "Agglomeratie Haarlem",
    "nameAscii" : "Agglomeratie Haarlem",
    "nameHtml" : "Agglomeratie Haarlem"
  },
  "NL325": {
    "nameLatin" : "Zaanstreek",
    "nutsName" : "Zaanstreek",
    "nameAscii" : "Zaanstreek",
    "nameHtml" : "Zaanstreek"
  },
  "NL326": {
    "nameLatin" : "Groot-Amsterdam",
    "nutsName" : "Groot-Amsterdam",
    "nameAscii" : "Groot-Amsterdam",
    "nameHtml" : "Groot-Amsterdam"
  },
  "NL327": {
    "nameLatin" : "Het Gooi en Vechtstreek",
    "nutsName" : "Het Gooi en Vechtstreek",
    "nameAscii" : "Het Gooi en Vechtstreek",
    "nameHtml" : "Het Gooi en Vechtstreek"
  },
  "NL332": {
    "nameLatin" : "Agglomeratie 's-Gravenhage",
    "nutsName" : "Agglomeratie 's-Gravenhage",
    "nameAscii" : "Agglomeratie 's-Gravenhage",
    "nameHtml" : "Agglomeratie 's-Gravenhage"
  },
  "NL333": {
    "nameLatin" : "Delft en Westland",
    "nutsName" : "Delft en Westland",
    "nameAscii" : "Delft en Westland",
    "nameHtml" : "Delft en Westland"
  },
  "NL338": {
    "nameLatin" : "Oost-Zuid-Holland",
    "nutsName" : "Oost-Zuid-Holland",
    "nameAscii" : "Oost-Zuid-Holland",
    "nameHtml" : "Oost-Zuid-Holland"
  },
  "NL339": {
    "nameLatin" : "Groot-Rijnmond",
    "nutsName" : "Groot-Rijnmond",
    "nameAscii" : "Groot-Rijnmond",
    "nameHtml" : "Groot-Rijnmond"
  },
  "NL33A": {
    "nameLatin" : "Zuidoost-Zuid-Holland",
    "nutsName" : "Zuidoost-Zuid-Holland",
    "nameAscii" : "Zuidoost-Zuid-Holland",
    "nameHtml" : "Zuidoost-Zuid-Holland"
  },
  "NL341": {
    "nameLatin" : "Zeeuwsch-Vlaanderen",
    "nutsName" : "Zeeuwsch-Vlaanderen",
    "nameAscii" : "Zeeuwsch-Vlaanderen",
    "nameHtml" : "Zeeuwsch-Vlaanderen"
  },
  "NL342": {
    "nameLatin" : "Overig Zeeland",
    "nutsName" : "Overig Zeeland",
    "nameAscii" : "Overig Zeeland",
    "nameHtml" : "Overig Zeeland"
  },
  "NL411": {
    "nameLatin" : "West-Noord-Brabant",
    "nutsName" : "West-Noord-Brabant",
    "nameAscii" : "West-Noord-Brabant",
    "nameHtml" : "West-Noord-Brabant"
  },
  "NL412": {
    "nameLatin" : "Midden-Noord-Brabant",
    "nutsName" : "Midden-Noord-Brabant",
    "nameAscii" : "Midden-Noord-Brabant",
    "nameHtml" : "Midden-Noord-Brabant"
  },
  "NL413": {
    "nameLatin" : "Noordoost-Noord-Brabant",
    "nutsName" : "Noordoost-Noord-Brabant",
    "nameAscii" : "Noordoost-Noord-Brabant",
    "nameHtml" : "Noordoost-Noord-Brabant"
  },
  "NL414": {
    "nameLatin" : "Zuidoost-Noord-Brabant",
    "nutsName" : "Zuidoost-Noord-Brabant",
    "nameAscii" : "Zuidoost-Noord-Brabant",
    "nameHtml" : "Zuidoost-Noord-Brabant"
  },
  "NL421": {
    "nameLatin" : "Noord-Limburg",
    "nutsName" : "Noord-Limburg",
    "nameAscii" : "Noord-Limburg",
    "nameHtml" : "Noord-Limburg"
  },
  "NL422": {
    "nameLatin" : "Midden-Limburg",
    "nutsName" : "Midden-Limburg",
    "nameAscii" : "Midden-Limburg",
    "nameHtml" : "Midden-Limburg"
  },
  "NL423": {
    "nameLatin" : "Zuid-Limburg",
    "nutsName" : "Zuid-Limburg",
    "nameAscii" : "Zuid-Limburg",
    "nameHtml" : "Zuid-Limburg"
  },
  "NO011": {
    "nameLatin" : "Oslo",
    "nutsName" : "Oslo",
    "nameAscii" : "Oslo",
    "nameHtml" : "Oslo"
  },
  "NO012": {
    "nameLatin" : "Akershus",
    "nutsName" : "Akershus",
    "nameAscii" : "Akershus",
    "nameHtml" : "Akershus"
  },
  "NO021": {
    "nameLatin" : "Hedmark",
    "nutsName" : "Hedmark",
    "nameAscii" : "Hedmark",
    "nameHtml" : "Hedmark"
  },
  "NO022": {
    "nameLatin" : "Oppland",
    "nutsName" : "Oppland",
    "nameAscii" : "Oppland",
    "nameHtml" : "Oppland"
  },
  "NO031": {
    "nameLatin" : "Østfold",
    "nutsName" : "Østfold",
    "nameAscii" : "Ostfold",
    "nameHtml" : "&#x00D8;stfold"
  },
  "NO032": {
    "nameLatin" : "Buskerud",
    "nutsName" : "Buskerud",
    "nameAscii" : "Buskerud",
    "nameHtml" : "Buskerud"
  },
  "NO033": {
    "nameLatin" : "Vestfold",
    "nutsName" : "Vestfold",
    "nameAscii" : "Vestfold",
    "nameHtml" : "Vestfold"
  },
  "NO034": {
    "nameLatin" : "Telemark",
    "nutsName" : "Telemark",
    "nameAscii" : "Telemark",
    "nameHtml" : "Telemark"
  },
  "NO041": {
    "nameLatin" : "Aust-Agder",
    "nutsName" : "Aust-Agder",
    "nameAscii" : "Aust-Agder",
    "nameHtml" : "Aust-Agder"
  },
  "NO042": {
    "nameLatin" : "Vest-Agder",
    "nutsName" : "Vest-Agder",
    "nameAscii" : "Vest-Agder",
    "nameHtml" : "Vest-Agder"
  },
  "NO043": {
    "nameLatin" : "Rogaland",
    "nutsName" : "Rogaland",
    "nameAscii" : "Rogaland",
    "nameHtml" : "Rogaland"
  },
  "NO051": {
    "nameLatin" : "Hordaland",
    "nutsName" : "Hordaland",
    "nameAscii" : "Hordaland",
    "nameHtml" : "Hordaland"
  },
  "NO052": {
    "nameLatin" : "Sogn og Fjordane",
    "nutsName" : "Sogn og Fjordane",
    "nameAscii" : "Sogn og Fjordane",
    "nameHtml" : "Sogn og Fjordane"
  },
  "NO053": {
    "nameLatin" : "Møre og Romsdal",
    "nutsName" : "Møre og Romsdal",
    "nameAscii" : "More og Romsdal",
    "nameHtml" : "M&#x00F8;re og Romsdal"
  },
  "NO062": {
    "nameLatin" : "Nord-Trøndelag",
    "nutsName" : "Nord-Trøndelag",
    "nameAscii" : "Nord-Trondelag",
    "nameHtml" : "Nord-Tr&#x00F8;ndelag"
  },
  "NO071": {
    "nameLatin" : "Nordland",
    "nutsName" : "Nordland",
    "nameAscii" : "Nordland",
    "nameHtml" : "Nordland"
  },
  "NO072": {
    "nameLatin" : "Troms",
    "nutsName" : "Troms",
    "nameAscii" : "Troms",
    "nameHtml" : "Troms"
  },
  "NO073": {
    "nameLatin" : "Finnmark",
    "nutsName" : "Finnmark",
    "nameAscii" : "Finnmark",
    "nameHtml" : "Finnmark"
  },
  "PL114": {
    "nameLatin" : "Lódzki",
    "nutsName" : "Lódzki",
    "nameAscii" : "Lodzki",
    "nameHtml" : "L&#x00F3;dzki"
  },
  "PL115": {
    "nameLatin" : "Piotrkowski",
    "nutsName" : "Piotrkowski",
    "nameAscii" : "Piotrkowski",
    "nameHtml" : "Piotrkowski"
  },
  "PL116": {
    "nameLatin" : "Sieradzki",
    "nutsName" : "Sieradzki",
    "nameAscii" : "Sieradzki",
    "nameHtml" : "Sieradzki"
  },
  "PL117": {
    "nameLatin" : "Skierniewicki",
    "nutsName" : "Skierniewicki",
    "nameAscii" : "Skierniewicki",
    "nameHtml" : "Skierniewicki"
  },
  "PL128": {
    "nameLatin" : "Radomski",
    "nutsName" : "Radomski",
    "nameAscii" : "Radomski",
    "nameHtml" : "Radomski"
  },
  "PL129": {
    "nameLatin" : "Warszawski wschodni",
    "nutsName" : "Warszawski wschodni",
    "nameAscii" : "Warszawski wschodni",
    "nameHtml" : "Warszawski wschodni"
  },
  "PL12A": {
    "nameLatin" : "Warszawski zachodni",
    "nutsName" : "Warszawski zachodni",
    "nameAscii" : "Warszawski zachodni",
    "nameHtml" : "Warszawski zachodni"
  },
  "PL12B": {
    "nameLatin" : "Ciechanowski",
    "nutsName" : "Ciechanowski",
    "nameAscii" : "Ciechanowski",
    "nameHtml" : "Ciechanowski"
  },
  "PL12C": {
    "nameLatin" : "Plocki",
    "nutsName" : "Plocki",
    "nameAscii" : "Plocki",
    "nameHtml" : "Plocki"
  },
  "PL12D": {
    "nameLatin" : "Ostrolecki",
    "nutsName" : "Ostrolecki",
    "nameAscii" : "Ostrolecki",
    "nameHtml" : "Ostrolecki"
  },
  "PL214": {
    "nameLatin" : "Krakowski",
    "nutsName" : "Krakowski",
    "nameAscii" : "Krakowski",
    "nameHtml" : "Krakowski"
  },
  "PL217": {
    "nameLatin" : "Tarnowski",
    "nutsName" : "Tarnowski",
    "nameAscii" : "Tarnowski",
    "nameHtml" : "Tarnowski"
  },
  "PL218": {
    "nameLatin" : "Nowosadecki",
    "nutsName" : "Nowosadecki",
    "nameAscii" : "Nowosadecki",
    "nameHtml" : "Nowosadecki"
  },
  "PL219": {
    "nameLatin" : "Nowotarski",
    "nutsName" : "Nowotarski",
    "nameAscii" : "Nowotarski",
    "nameHtml" : "Nowotarski"
  },
  "PL21A": {
    "nameLatin" : "Oswiecimski",
    "nutsName" : "Oswiecimski",
    "nameAscii" : "Oswiecimski",
    "nameHtml" : "Oswiecimski"
  },
  "PL224": {
    "nameLatin" : "Czestochowski",
    "nutsName" : "Czestochowski",
    "nameAscii" : "Czestochowski",
    "nameHtml" : "Czestochowski"
  },
  "PL225": {
    "nameLatin" : "Bielski",
    "nutsName" : "Bielski",
    "nameAscii" : "Bielski",
    "nameHtml" : "Bielski"
  },
  "PL228": {
    "nameLatin" : "Bytomski",
    "nutsName" : "Bytomski",
    "nameAscii" : "Bytomski",
    "nameHtml" : "Bytomski"
  },
  "PL229": {
    "nameLatin" : "Gliwicki",
    "nutsName" : "Gliwicki",
    "nameAscii" : "Gliwicki",
    "nameHtml" : "Gliwicki"
  },
  "PL22A": {
    "nameLatin" : "Katowicki",
    "nutsName" : "Katowicki",
    "nameAscii" : "Katowicki",
    "nameHtml" : "Katowicki"
  },
  "PL22B": {
    "nameLatin" : "Sosnowiecki",
    "nutsName" : "Sosnowiecki",
    "nameAscii" : "Sosnowiecki",
    "nameHtml" : "Sosnowiecki"
  },
  "PL22C": {
    "nameLatin" : "Tyski",
    "nutsName" : "Tyski",
    "nameAscii" : "Tyski",
    "nameHtml" : "Tyski"
  },
  "PL311": {
    "nameLatin" : "Bialski",
    "nutsName" : "Bialski",
    "nameAscii" : "Bialski",
    "nameHtml" : "Bialski"
  },
  "PL312": {
    "nameLatin" : "Chelmsko-zamojski",
    "nutsName" : "Chelmsko-zamojski",
    "nameAscii" : "Chelmsko-zamojski",
    "nameHtml" : "Chelmsko-zamojski"
  },
  "PL314": {
    "nameLatin" : "Lubelski",
    "nutsName" : "Lubelski",
    "nameAscii" : "Lubelski",
    "nameHtml" : "Lubelski"
  },
  "PL315": {
    "nameLatin" : "Pulawski",
    "nutsName" : "Pulawski",
    "nameAscii" : "Pulawski",
    "nameHtml" : "Pulawski"
  },
  "PL324": {
    "nameLatin" : "Przemyski",
    "nutsName" : "Przemyski",
    "nameAscii" : "Przemyski",
    "nameHtml" : "Przemyski"
  },
  "PL325": {
    "nameLatin" : "Rzeszowski",
    "nutsName" : "Rzeszowski",
    "nameAscii" : "Rzeszowski",
    "nameHtml" : "Rzeszowski"
  },
  "PL326": {
    "nameLatin" : "Tarnobrzeski",
    "nutsName" : "Tarnobrzeski",
    "nameAscii" : "Tarnobrzeski",
    "nameHtml" : "Tarnobrzeski"
  },
  "PL331": {
    "nameLatin" : "Kielecki",
    "nutsName" : "Kielecki",
    "nameAscii" : "Kielecki",
    "nameHtml" : "Kielecki"
  },
  "PL343": {
    "nameLatin" : "Bialostocki",
    "nutsName" : "Bialostocki",
    "nameAscii" : "Bialostocki",
    "nameHtml" : "Bialostocki"
  },
  "PL344": {
    "nameLatin" : "Lomzynski",
    "nutsName" : "Lomzynski",
    "nameAscii" : "Lomzynski",
    "nameHtml" : "Lomzynski"
  },
  "PL345": {
    "nameLatin" : "Suwalski",
    "nutsName" : "Suwalski",
    "nameAscii" : "Suwalski",
    "nameHtml" : "Suwalski"
  },
  "PL411": {
    "nameLatin" : "Pilski",
    "nutsName" : "Pilski",
    "nameAscii" : "Pilski",
    "nameHtml" : "Pilski"
  },
  "PL414": {
    "nameLatin" : "Koninski",
    "nutsName" : "Koninski",
    "nameAscii" : "Koninski",
    "nameHtml" : "Koninski"
  },
  "PL415": {
    "nameLatin" : "Miasto Poznan",
    "nutsName" : "Miasto Poznan",
    "nameAscii" : "Miasto Poznan",
    "nameHtml" : "Miasto Poznan"
  },
  "PL417": {
    "nameLatin" : "Leszczynski",
    "nutsName" : "Leszczynski",
    "nameAscii" : "Leszczynski",
    "nameHtml" : "Leszczynski"
  },
  "PL418": {
    "nameLatin" : "Poznanski",
    "nutsName" : "Poznanski",
    "nameAscii" : "Poznanski",
    "nameHtml" : "Poznanski"
  },
  "PL426": {
    "nameLatin" : "Koszalinski",
    "nutsName" : "Koszalinski",
    "nameAscii" : "Koszalinski",
    "nameHtml" : "Koszalinski"
  },
  "PL427": {
    "nameLatin" : "Szczecinecko-pyrzycki",
    "nutsName" : "Szczecinecko-pyrzycki",
    "nameAscii" : "Szczecinecko-pyrzycki",
    "nameHtml" : "Szczecinecko-pyrzycki"
  },
  "PL428": {
    "nameLatin" : "Szczecinski",
    "nutsName" : "Szczecinski",
    "nameAscii" : "Szczecinski",
    "nameHtml" : "Szczecinski"
  },
  "PL431": {
    "nameLatin" : "Gorzowski",
    "nutsName" : "Gorzowski",
    "nameAscii" : "Gorzowski",
    "nameHtml" : "Gorzowski"
  },
  "PL514": {
    "nameLatin" : "Miasto Wroclaw",
    "nutsName" : "Miasto Wroclaw",
    "nameAscii" : "Miasto Wroclaw",
    "nameHtml" : "Miasto Wroclaw"
  },
  "PL515": {
    "nameLatin" : "Jeleniogórski",
    "nutsName" : "Jeleniogórski",
    "nameAscii" : "Jeleniogorski",
    "nameHtml" : "Jeleniog&#x00F3;rski"
  },
  "PL517": {
    "nameLatin" : "Walbrzyski",
    "nutsName" : "Walbrzyski",
    "nameAscii" : "Walbrzyski",
    "nameHtml" : "Walbrzyski"
  },
  "PL518": {
    "nameLatin" : "Wroclawski",
    "nutsName" : "Wroclawski",
    "nameAscii" : "Wroclawski",
    "nameHtml" : "Wroclawski"
  },
  "PL523": {
    "nameLatin" : "Nyski",
    "nutsName" : "Nyski",
    "nameAscii" : "Nyski",
    "nameHtml" : "Nyski"
  },
  "PL524": {
    "nameLatin" : "Opolski",
    "nutsName" : "Opolski",
    "nameAscii" : "Opolski",
    "nameHtml" : "Opolski"
  },
  "PL613": {
    "nameLatin" : "Bydgosko-Torunski",
    "nutsName" : "Bydgosko-Torunski",
    "nameAscii" : "Bydgosko-Torunski",
    "nameHtml" : "Bydgosko-Torunski"
  },
  "PL616": {
    "nameLatin" : "Grudziadzki",
    "nutsName" : "Grudziadzki",
    "nameAscii" : "Grudziadzki",
    "nameHtml" : "Grudziadzki"
  },
  "PL617": {
    "nameLatin" : "Inowroclawski",
    "nutsName" : "Inowroclawski",
    "nameAscii" : "Inowroclawski",
    "nameHtml" : "Inowroclawski"
  },
  "PL618": {
    "nameLatin" : "Swiecki",
    "nutsName" : "Swiecki",
    "nameAscii" : "Swiecki",
    "nameHtml" : "Swiecki"
  },
  "PL619": {
    "nameLatin" : "Wloclawski",
    "nutsName" : "Wloclawski",
    "nameAscii" : "Wloclawski",
    "nameHtml" : "Wloclawski"
  },
  "PL621": {
    "nameLatin" : "Elblaski",
    "nutsName" : "Elblaski",
    "nameAscii" : "Elblaski",
    "nameHtml" : "Elblaski"
  },
  "PL622": {
    "nameLatin" : "Olsztynski",
    "nutsName" : "Olsztynski",
    "nameAscii" : "Olsztynski",
    "nameHtml" : "Olsztynski"
  },
  "PL623": {
    "nameLatin" : "Elcki",
    "nutsName" : "Elcki",
    "nameAscii" : "Elcki",
    "nameHtml" : "Elcki"
  },
  "PL633": {
    "nameLatin" : "Trójmiejski",
    "nutsName" : "Trójmiejski",
    "nameAscii" : "Trojmiejski",
    "nameHtml" : "Tr&#x00F3;jmiejski"
  },
  "PL634": {
    "nameLatin" : "Gdanski",
    "nutsName" : "Gdanski",
    "nameAscii" : "Gdanski",
    "nameHtml" : "Gdanski"
  },
  "PL636": {
    "nameLatin" : "Slupski",
    "nutsName" : "Slupski",
    "nameAscii" : "Slupski",
    "nameHtml" : "Slupski"
  },
  "PL637": {
    "nameLatin" : "Chojnicki",
    "nutsName" : "Chojnicki",
    "nameAscii" : "Chojnicki",
    "nameHtml" : "Chojnicki"
  },
  "PL638": {
    "nameLatin" : "Starogardzki",
    "nutsName" : "Starogardzki",
    "nameAscii" : "Starogardzki",
    "nameHtml" : "Starogardzki"
  },
  "PT111": {
    "nameLatin" : "Alto Minho",
    "nutsName" : "Alto Minho",
    "nameAscii" : "Alto Minho",
    "nameHtml" : "Alto Minho"
  },
  "PT112": {
    "nameLatin" : "Cávado",
    "nutsName" : "Cávado",
    "nameAscii" : "Cavado",
    "nameHtml" : "C&#x00E1;vado"
  },
  "PT119": {
    "nameLatin" : "Ave",
    "nutsName" : "Ave",
    "nameAscii" : "Ave",
    "nameHtml" : "Ave"
  },
  "PT11A": {
    "nameLatin" : "Área Metropolitana do Porto",
    "nutsName" : "Área Metropolitana do Porto",
    "nameAscii" : "Area Metropolitana do Porto",
    "nameHtml" : "&#x00C1;rea Metropolitana do Porto"
  },
  "PT11B": {
    "nameLatin" : "Alto Tâmega",
    "nutsName" : "Alto Tâmega",
    "nameAscii" : "Alto Tamega",
    "nameHtml" : "Alto T&#x00E2;mega"
  },
  "PT11C": {
    "nameLatin" : "Tâmega e Sousa",
    "nutsName" : "Tâmega e Sousa",
    "nameAscii" : "Tamega e Sousa",
    "nameHtml" : "T&#x00E2;mega e Sousa"
  },
  "PT11D": {
    "nameLatin" : "Douro",
    "nutsName" : "Douro",
    "nameAscii" : "Douro",
    "nameHtml" : "Douro"
  },
  "PT11E": {
    "nameLatin" : "Terras de Trás-os-Montes",
    "nutsName" : "Terras de Trás-os-Montes",
    "nameAscii" : "Terras de Tras-s-Montes",
    "nameHtml" : "Terras de Tr&#x00E1;s-os-Montes"
  },
  "PT150": {
    "nameLatin" : "Algarve",
    "nutsName" : "Algarve",
    "nameAscii" : "Algarve",
    "nameHtml" : "Algarve"
  },
  "PT16B": {
    "nameLatin" : "Oeste",
    "nutsName" : "Oeste",
    "nameAscii" : "Oeste",
    "nameHtml" : "Oeste"
  },
  "PT16D": {
    "nameLatin" : "Região de Aveiro",
    "nutsName" : "Região de Aveiro",
    "nameAscii" : "Regiao de Aveiro",
    "nameHtml" : "Regi&#x00E3;o de Aveiro"
  },
  "PT16F": {
    "nameLatin" : "Região de Leiria",
    "nutsName" : "Região de Leiria",
    "nameAscii" : "Regiao de Leiria",
    "nameHtml" : "Regi&#x00E3;o de Leiria"
  },
  "PT16G": {
    "nameLatin" : "Viseu Dão Lafões",
    "nutsName" : "Viseu Dão Lafões",
    "nameAscii" : "Viseu Dao Lafoes",
    "nameHtml" : "Viseu D&#x00E3;o Laf&#x00F5;es"
  },
  "PT16H": {
    "nameLatin" : "Beira Baixa",
    "nutsName" : "Beira Baixa",
    "nameAscii" : "Beira Baixa",
    "nameHtml" : "Beira Baixa"
  },
  "PT16I": {
    "nameLatin" : "Médio Tejo",
    "nutsName" : "Médio Tejo",
    "nameAscii" : "Medio Tejo",
    "nameHtml" : "M&#x00E9;dio Tejo"
  },
  "PT170": {
    "nameLatin" : "Área Metropolitana de Lisboa",
    "nutsName" : "Área Metropolitana de Lisboa",
    "nameAscii" : "Area Metropolitana de Lisboa",
    "nameHtml" : "&#x00C1;rea Metropolitana de Lisboa"
  },
  "PT181": {
    "nameLatin" : "Alentejo Litoral",
    "nutsName" : "Alentejo Litoral",
    "nameAscii" : "Alentejo Litoral",
    "nameHtml" : "Alentejo Litoral"
  },
  "PT184": {
    "nameLatin" : "Baixo Alentejo",
    "nutsName" : "Baixo Alentejo",
    "nameAscii" : "Baixo Alentejo",
    "nameHtml" : "Baixo Alentejo"
  },
  "PT186": {
    "nameLatin" : "Alto Alentejo",
    "nutsName" : "Alto Alentejo",
    "nameAscii" : "Alto Alentejo",
    "nameHtml" : "Alto Alentejo"
  },
  "PT187": {
    "nameLatin" : "Alentejo Central",
    "nutsName" : "Alentejo Central",
    "nameAscii" : "Alentejo Central",
    "nameHtml" : "Alentejo Central"
  },
  "PT200": {
    "nameLatin" : "Região Autónoma dos Açores",
    "nutsName" : "Região Autónoma dos Açores",
    "nameAscii" : "Regiao Autonoma dos Acores",
    "nameHtml" : "Regi&#x00E3;o Aut&#x00F3;noma dos A&#x00E7;ores"
  },
  "RO111": {
    "nameLatin" : "Bihor",
    "nutsName" : "Bihor",
    "nameAscii" : "Bihor",
    "nameHtml" : "Bihor"
  },
  "RO112": {
    "nameLatin" : "Bistrita-Nasaud",
    "nutsName" : "Bistrita-Nasaud",
    "nameAscii" : "Bistrita-Nasaud",
    "nameHtml" : "Bistrita-Nasaud"
  },
  "RO113": {
    "nameLatin" : "Cluj",
    "nutsName" : "Cluj",
    "nameAscii" : "Cluj",
    "nameHtml" : "Cluj"
  },
  "RO114": {
    "nameLatin" : "Maramures",
    "nutsName" : "Maramures",
    "nameAscii" : "Maramures",
    "nameHtml" : "Maramures"
  },
  "RO115": {
    "nameLatin" : "Satu Mare",
    "nutsName" : "Satu Mare",
    "nameAscii" : "Satu Mare",
    "nameHtml" : "Satu Mare"
  },
  "RO116": {
    "nameLatin" : "Salaj",
    "nutsName" : "Salaj",
    "nameAscii" : "Salaj",
    "nameHtml" : "Salaj"
  },
  "RO121": {
    "nameLatin" : "Alba",
    "nutsName" : "Alba",
    "nameAscii" : "Alba",
    "nameHtml" : "Alba"
  },
  "RO122": {
    "nameLatin" : "Brasov",
    "nutsName" : "Brasov",
    "nameAscii" : "Brasov",
    "nameHtml" : "Brasov"
  },
  "RO123": {
    "nameLatin" : "Covasna",
    "nutsName" : "Covasna",
    "nameAscii" : "Covasna",
    "nameHtml" : "Covasna"
  },
  "RO124": {
    "nameLatin" : "Harghita",
    "nutsName" : "Harghita",
    "nameAscii" : "Harghita",
    "nameHtml" : "Harghita"
  },
  "RO125": {
    "nameLatin" : "Mures",
    "nutsName" : "Mures",
    "nameAscii" : "Mures",
    "nameHtml" : "Mures"
  },
  "RO126": {
    "nameLatin" : "Sibiu",
    "nutsName" : "Sibiu",
    "nameAscii" : "Sibiu",
    "nameHtml" : "Sibiu"
  },
  "RO212": {
    "nameLatin" : "Botosani",
    "nutsName" : "Botosani",
    "nameAscii" : "Botosani",
    "nameHtml" : "Botosani"
  },
  "RO213": {
    "nameLatin" : "Iasi",
    "nutsName" : "Iasi",
    "nameAscii" : "Iasi",
    "nameHtml" : "Iasi"
  },
  "RO214": {
    "nameLatin" : "Neamt",
    "nutsName" : "Neamt",
    "nameAscii" : "Neamt",
    "nameHtml" : "Neamt"
  },
  "RO215": {
    "nameLatin" : "Suceava",
    "nutsName" : "Suceava",
    "nameAscii" : "Suceava",
    "nameHtml" : "Suceava"
  },
  "RO216": {
    "nameLatin" : "Vaslui",
    "nutsName" : "Vaslui",
    "nameAscii" : "Vaslui",
    "nameHtml" : "Vaslui"
  },
  "RO221": {
    "nameLatin" : "Braila",
    "nutsName" : "Braila",
    "nameAscii" : "Braila",
    "nameHtml" : "Braila"
  },
  "RO222": {
    "nameLatin" : "Buzau",
    "nutsName" : "Buzau",
    "nameAscii" : "Buzau",
    "nameHtml" : "Buzau"
  },
  "RO223": {
    "nameLatin" : "Constanta",
    "nutsName" : "Constanta",
    "nameAscii" : "Constanta",
    "nameHtml" : "Constanta"
  },
  "RO224": {
    "nameLatin" : "Galati",
    "nutsName" : "Galati",
    "nameAscii" : "Galati",
    "nameHtml" : "Galati"
  },
  "RO225": {
    "nameLatin" : "Tulcea",
    "nutsName" : "Tulcea",
    "nameAscii" : "Tulcea",
    "nameHtml" : "Tulcea"
  },
  "RO311": {
    "nameLatin" : "Arges",
    "nutsName" : "Arges",
    "nameAscii" : "Arges",
    "nameHtml" : "Arges"
  },
  "RO313": {
    "nameLatin" : "Dâmbovita",
    "nutsName" : "Dâmbovita",
    "nameAscii" : "Dambovita",
    "nameHtml" : "D&#x00E2;mbovita"
  },
  "RO314": {
    "nameLatin" : "Giurgiu",
    "nutsName" : "Giurgiu",
    "nameAscii" : "Giurgiu",
    "nameHtml" : "Giurgiu"
  },
  "RO315": {
    "nameLatin" : "Ialomita",
    "nutsName" : "Ialomita",
    "nameAscii" : "Ialomita",
    "nameHtml" : "Ialomita"
  },
  "RO316": {
    "nameLatin" : "Prahova",
    "nutsName" : "Prahova",
    "nameAscii" : "Prahova",
    "nameHtml" : "Prahova"
  },
  "RO321": {
    "nameLatin" : "Bucuresti",
    "nutsName" : "Bucuresti",
    "nameAscii" : "Bucuresti",
    "nameHtml" : "Bucuresti"
  },
  "RO322": {
    "nameLatin" : "Ilfov",
    "nutsName" : "Ilfov",
    "nameAscii" : "Ilfov",
    "nameHtml" : "Ilfov"
  },
  "RO411": {
    "nameLatin" : "Dolj",
    "nutsName" : "Dolj",
    "nameAscii" : "Dolj",
    "nameHtml" : "Dolj"
  },
  "RO412": {
    "nameLatin" : "Gorj",
    "nutsName" : "Gorj",
    "nameAscii" : "Gorj",
    "nameHtml" : "Gorj"
  },
  "RO413": {
    "nameLatin" : "Mehedinti",
    "nutsName" : "Mehedinti",
    "nameAscii" : "Mehedinti",
    "nameHtml" : "Mehedinti"
  },
  "RO414": {
    "nameLatin" : "Olt",
    "nutsName" : "Olt",
    "nameAscii" : "Olt",
    "nameHtml" : "Olt"
  },
  "RO415": {
    "nameLatin" : "Vâlcea",
    "nutsName" : "Vâlcea",
    "nameAscii" : "Valcea",
    "nameHtml" : "V&#x00E2;lcea"
  },
  "RO421": {
    "nameLatin" : "Arad",
    "nutsName" : "Arad",
    "nameAscii" : "Arad",
    "nameHtml" : "Arad"
  },
  "RO422": {
    "nameLatin" : "Caras-Severin",
    "nutsName" : "Caras-Severin",
    "nameAscii" : "Caras-Severin",
    "nameHtml" : "Caras-Severin"
  },
  "RO423": {
    "nameLatin" : "Hunedoara",
    "nutsName" : "Hunedoara",
    "nameAscii" : "Hunedoara",
    "nameHtml" : "Hunedoara"
  },
  "RO424": {
    "nameLatin" : "Timis",
    "nutsName" : "Timis",
    "nameAscii" : "Timis",
    "nameHtml" : "Timis"
  },
  "SE110": {
    "nameLatin" : "Stockholms län",
    "nutsName" : "Stockholms län",
    "nameAscii" : "Stockholms lan",
    "nameHtml" : "Stockholms l&#x00E4;n"
  },
  "SE121": {
    "nameLatin" : "Uppsala län",
    "nutsName" : "Uppsala län",
    "nameAscii" : "Uppsala lan",
    "nameHtml" : "Uppsala l&#x00E4;n"
  },
  "SE122": {
    "nameLatin" : "Södermanlands län",
    "nutsName" : "Södermanlands län",
    "nameAscii" : "Sodermanlands lan",
    "nameHtml" : "S&#x00F6;dermanlands l&#x00E4;n"
  },
  "SE123": {
    "nameLatin" : "Östergötlands län",
    "nutsName" : "Östergötlands län",
    "nameAscii" : "Ostergotlands lan",
    "nameHtml" : "&#x00D6;sterg&#x00F6;tlands l&#x00E4;n"
  },
  "SE124": {
    "nameLatin" : "Örebro län",
    "nutsName" : "Örebro län",
    "nameAscii" : "Orebro lan",
    "nameHtml" : "&#x00D6;rebro l&#x00E4;n"
  },
  "SE125": {
    "nameLatin" : "Västmanlands län",
    "nutsName" : "Västmanlands län",
    "nameAscii" : "Vastmanlands lan",
    "nameHtml" : "V&#x00E4;stmanlands l&#x00E4;n"
  },
  "SE211": {
    "nameLatin" : "Jönköpings län",
    "nutsName" : "Jönköpings län",
    "nameAscii" : "Jonkopings lan",
    "nameHtml" : "J&#x00F6;nk&#x00F6;pings l&#x00E4;n"
  },
  "SE212": {
    "nameLatin" : "Kronobergs län",
    "nutsName" : "Kronobergs län",
    "nameAscii" : "Kronobergs lan",
    "nameHtml" : "Kronobergs l&#x00E4;n"
  },
  "SE213": {
    "nameLatin" : "Kalmar län",
    "nutsName" : "Kalmar län",
    "nameAscii" : "Kronobergs lan",
    "nameHtml" : "Kalmar L&#x00E4;n"
  },
  "SE214": {
    "nameLatin" : "Gotlands län",
    "nutsName" : "Gotlands län",
    "nameAscii" : "Gotlands lan",
    "nameHtml" : "Gotlands l&#x00E4;n"
  },
  "SE221": {
    "nameLatin" : "Blekinge län",
    "nutsName" : "Blekinge län",
    "nameAscii" : "Blekinge lan",
    "nameHtml" : "Blekinge l&#x00E4;n"
  },
  "SE224": {
    "nameLatin" : "Skåne län",
    "nutsName" : "Skåne län",
    "nameAscii" : "Skane lan",
    "nameHtml" : "Sk&#x00E5;ne l&#x00E4;n"
  },
  "SE232": {
    "nameLatin" : "Västra Götalands län",
    "nutsName" : "Västra Götalands län",
    "nameAscii" : "Vastra Gotalands lan",
    "nameHtml" : "V&#x00E4;stra G&#x00F6;talands l&#x00E4;n"
  },
  "SE312": {
    "nameLatin" : "Dalarnas län",
    "nutsName" : "Dalarnas län",
    "nameAscii" : "Dalarnas lan",
    "nameHtml" : "Dalarnas l&#x00E4;n"
  },
  "SE313": {
    "nameLatin" : "Gävleborgs län",
    "nutsName" : "Gävleborgs län",
    "nameAscii" : "Gavleborgs lan",
    "nameHtml" : "G&#x00E4;vleborgs l&#x00E4;n"
  },
  "SE322": {
    "nameLatin" : "Jämtlands län",
    "nutsName" : "Jämtlands län",
    "nameAscii" : "Jamtlands lan",
    "nameHtml" : "J&#x00E4;mtlandslL&#x00E4;n"
  },
  "SE331": {
    "nameLatin" : "Västerbottens län",
    "nutsName" : "Västerbottens län",
    "nameAscii" : "Vasterbottens lan",
    "nameHtml" : "V&#x00E4;sterbottens l&#x00E4;n"
  },
  "SE332": {
    "nameLatin" : "Norrbottens län",
    "nutsName" : "Norrbottens län",
    "nameAscii" : "Norrbottens lan",
    "nameHtml" : "Norrbottens l&#x00E4;n"
  },
  "SI031": {
    "nameLatin" : "Pomurska",
    "nutsName" : "Pomurska",
    "nameAscii" : "Pomurska",
    "nameHtml" : "Pomurska"
  },
  "SI032": {
    "nameLatin" : "Podravska",
    "nutsName" : "Podravska",
    "nameAscii" : "Podravska",
    "nameHtml" : "Podravska"
  },
  "SI033": {
    "nameLatin" : "Koroška",
    "nutsName" : "Koroška",
    "nameAscii" : "Koroska",
    "nameHtml" : "Koro&#x0161;ka"
  },
  "SI034": {
    "nameLatin" : "Savinjska",
    "nutsName" : "Savinjska",
    "nameAscii" : "Savinjska",
    "nameHtml" : "Savinjska"
  },
  "SI035": {
    "nameLatin" : "Zasavska",
    "nutsName" : "Zasavska",
    "nameAscii" : "Zasavska",
    "nameHtml" : "Zasavska"
  },
  "SI036": {
    "nameLatin" : "Posavska",
    "nutsName" : "Posavska",
    "nameAscii" : "Posavska",
    "nameHtml" : "Posavska"
  },
  "SI038": {
    "nameLatin" : "Primorsko-notranjska",
    "nutsName" : "Primorsko-notranjska",
    "nameAscii" : "Primorsko-notranjska",
    "nameHtml" : "Primorsko-notranjska"
  },
  "SI041": {
    "nameLatin" : "Osrednjeslovenska",
    "nutsName" : "Osrednjeslovenska",
    "nameAscii" : "Osrednjeslovenska",
    "nameHtml" : "Osrednjeslovenska"
  },
  "SI042": {
    "nameLatin" : "Gorenjska",
    "nutsName" : "Gorenjska",
    "nameAscii" : "Gorenjska",
    "nameHtml" : "Gorenjska"
  },
  "SI043": {
    "nameLatin" : "Goriška",
    "nutsName" : "Goriška",
    "nameAscii" : "Goriska",
    "nameHtml" : "Gori&#x0161;ka"
  },
  "SI044": {
    "nameLatin" : "Obalno-kraška",
    "nutsName" : "Obalno-kraška",
    "nameAscii" : "Obalno-kraska",
    "nameHtml" : "Obalno-kra&#x0161;ka"
  },
  "SK010": {
    "nameLatin" : "Bratislavský kraj",
    "nutsName" : "Bratislavský kraj",
    "nameAscii" : "Bratislavsky kraj",
    "nameHtml" : "Bratislavsk&#x00FD; kraj"
  },
  "SK021": {
    "nameLatin" : "Trnavský kraj",
    "nutsName" : "Trnavský kraj",
    "nameAscii" : "Trnavsky kraj",
    "nameHtml" : "Trnavsk&#x00FD; kraj"
  },
  "SK023": {
    "nameLatin" : "Nitriansky kraj",
    "nutsName" : "Nitriansky kraj",
    "nameAscii" : "Nitriansky kraj",
    "nameHtml" : "Nitriansky kraj"
  },
  "SK031": {
    "nameLatin" : "Žilinský kraj",
    "nutsName" : "Žilinský kraj",
    "nameAscii" : "Zilinsky kraj",
    "nameHtml" : "&#x017D;ilinsk&#x00FD; kraj"
  },
  "SK041": {
    "nameLatin" : "Prešovský kraj",
    "nutsName" : "Prešovský kraj",
    "nameAscii" : "Presovsky kraj",
    "nameHtml" : "Pre&#x0161;ovsk&#x00FD; kraj"
  },
  "SK042": {
    "nameLatin" : "Košický kraj",
    "nutsName" : "Košický kraj",
    "nameAscii" : "Kosicky kraj",
    "nameHtml" : "Ko&#x0161;ick&#x00FD; kraj"
  },
  "TR100": {
    "nameLatin" : "Istanbul",
    "nutsName" : "Istanbul",
    "nameAscii" : "Istanbul",
    "nameHtml" : "Istanbul"
  },
  "TR211": {
    "nameLatin" : "Tekirdag",
    "nutsName" : "Tekirdag",
    "nameAscii" : "Tekirdag",
    "nameHtml" : "Tekirdag"
  },
  "TR212": {
    "nameLatin" : "Edirne",
    "nutsName" : "Edirne",
    "nameAscii" : "Edirne",
    "nameHtml" : "Edirne"
  },
  "TR213": {
    "nameLatin" : "Kirklareli",
    "nutsName" : "Kirklareli",
    "nameAscii" : "Kirklareli",
    "nameHtml" : "Kirklareli"
  },
  "TR221": {
    "nameLatin" : "Balikesir",
    "nutsName" : "Balikesir",
    "nameAscii" : "Balikesir",
    "nameHtml" : "Balikesir"
  },
  "TR222": {
    "nameLatin" : "Çanakkale",
    "nutsName" : "Çanakkale",
    "nameAscii" : "Canakkale",
    "nameHtml" : "&#x00C7;anakkale"
  },
  "TR310": {
    "nameLatin" : "Izmir",
    "nutsName" : "Izmir",
    "nameAscii" : "Izmir",
    "nameHtml" : "Izmir"
  },
  "TR321": {
    "nameLatin" : "Aydin",
    "nutsName" : "Aydin",
    "nameAscii" : "Aydin",
    "nameHtml" : "Aydin"
  },
  "TR322": {
    "nameLatin" : "Denizli",
    "nutsName" : "Denizli",
    "nameAscii" : "Denizli",
    "nameHtml" : "Denizli"
  },
  "TR323": {
    "nameLatin" : "Mugla",
    "nutsName" : "Mugla",
    "nameAscii" : "Mugla",
    "nameHtml" : "Mugla"
  },
  "TR331": {
    "nameLatin" : "Manisa",
    "nutsName" : "Manisa",
    "nameAscii" : "Manisa",
    "nameHtml" : "Manisa"
  },
  "TR332": {
    "nameLatin" : "Afyon",
    "nutsName" : "Afyon",
    "nameAscii" : "Afyon",
    "nameHtml" : "Afyon"
  },
  "TR333": {
    "nameLatin" : "Kütahya",
    "nutsName" : "Kütahya",
    "nameAscii" : "Kutahya",
    "nameHtml" : "K&#x00FC;tahya"
  },
  "TR334": {
    "nameLatin" : "Usak",
    "nutsName" : "Usak",
    "nameAscii" : "Usak",
    "nameHtml" : "Usak"
  },
  "TR411": {
    "nameLatin" : "Bursa",
    "nutsName" : "Bursa",
    "nameAscii" : "Bursa",
    "nameHtml" : "Bursa"
  },
  "TR412": {
    "nameLatin" : "Eskisehir",
    "nutsName" : "Eskisehir",
    "nameAscii" : "Eskisehir",
    "nameHtml" : "Eskisehir"
  },
  "TR413": {
    "nameLatin" : "Bilecik",
    "nutsName" : "Bilecik",
    "nameAscii" : "Bilecik",
    "nameHtml" : "Bilecik"
  },
  "TR421": {
    "nameLatin" : "Kocaeli",
    "nutsName" : "Kocaeli",
    "nameAscii" : "Kocaeli",
    "nameHtml" : "Kocaeli"
  },
  "TR422": {
    "nameLatin" : "Sakarya",
    "nutsName" : "Sakarya",
    "nameAscii" : "Sakarya",
    "nameHtml" : "Sakarya"
  },
  "TR423": {
    "nameLatin" : "Düzce",
    "nutsName" : "Düzce",
    "nameAscii" : "Duzce",
    "nameHtml" : "D&#x00FC;zce"
  },
  "TR424": {
    "nameLatin" : "Bolu",
    "nutsName" : "Bolu",
    "nameAscii" : "Bolu",
    "nameHtml" : "Bolu"
  },
  "TR425": {
    "nameLatin" : "Yalova",
    "nutsName" : "Yalova",
    "nameAscii" : "Yalova",
    "nameHtml" : "Yalova"
  },
  "TR510": {
    "nameLatin" : "Ankara",
    "nutsName" : "Ankara",
    "nameAscii" : "Ankara",
    "nameHtml" : "Ankara"
  },
  "TR521": {
    "nameLatin" : "Konya",
    "nutsName" : "Konya",
    "nameAscii" : "Konya",
    "nameHtml" : "Konya"
  },
  "TR522": {
    "nameLatin" : "Karaman",
    "nutsName" : "Karaman",
    "nameAscii" : "Karaman",
    "nameHtml" : "Karaman"
  },
  "TR611": {
    "nameLatin" : "Antalya",
    "nutsName" : "Antalya",
    "nameAscii" : "Antalya",
    "nameHtml" : "Antalya"
  },
  "TR612": {
    "nameLatin" : "Isparta",
    "nutsName" : "Isparta",
    "nameAscii" : "Isparta",
    "nameHtml" : "Isparta"
  },
  "TR613": {
    "nameLatin" : "Burdur",
    "nutsName" : "Burdur",
    "nameAscii" : "Burdur",
    "nameHtml" : "Burdur"
  },
  "TR621": {
    "nameLatin" : "Adana",
    "nutsName" : "Adana",
    "nameAscii" : "Adana",
    "nameHtml" : "Adana"
  },
  "TR622": {
    "nameLatin" : "Içel",
    "nutsName" : "Içel",
    "nameAscii" : "Icel",
    "nameHtml" : "I&#x00E7;el"
  },
  "TR631": {
    "nameLatin" : "Hatay",
    "nutsName" : "Hatay",
    "nameAscii" : "Hatay",
    "nameHtml" : "Hatay"
  },
  "TR632": {
    "nameLatin" : "Kahramanmaras",
    "nutsName" : "Kahramanmaras",
    "nameAscii" : "Kahramanmaras",
    "nameHtml" : "Kahramanmaras"
  },
  "TR633": {
    "nameLatin" : "Osmaniye",
    "nutsName" : "Osmaniye",
    "nameAscii" : "Osmaniye",
    "nameHtml" : "Osmaniye"
  },
  "TR711": {
    "nameLatin" : "Kirikkale",
    "nutsName" : "Kirikkale",
    "nameAscii" : "Kirikkale",
    "nameHtml" : "Kirikkale"
  },
  "TR712": {
    "nameLatin" : "Aksaray",
    "nutsName" : "Aksaray",
    "nameAscii" : "Aksaray",
    "nameHtml" : "Aksaray"
  },
  "TR713": {
    "nameLatin" : "Nigde",
    "nutsName" : "Nigde",
    "nameAscii" : "Nigde",
    "nameHtml" : "Nigde"
  },
  "TR714": {
    "nameLatin" : "Nevsehir",
    "nutsName" : "Nevsehir",
    "nameAscii" : "Nevsehir",
    "nameHtml" : "Nevsehir"
  },
  "TR715": {
    "nameLatin" : "Kirsehir",
    "nutsName" : "Kirsehir",
    "nameAscii" : "Kirsehir",
    "nameHtml" : "Kirsehir"
  },
  "TR721": {
    "nameLatin" : "Kayseri",
    "nutsName" : "Kayseri",
    "nameAscii" : "Kayseri",
    "nameHtml" : "Kayseri"
  },
  "TR722": {
    "nameLatin" : "Sivas",
    "nutsName" : "Sivas",
    "nameAscii" : "Sivas",
    "nameHtml" : "Sivas"
  },
  "TR723": {
    "nameLatin" : "Yozgat",
    "nutsName" : "Yozgat",
    "nameAscii" : "Yozgat",
    "nameHtml" : "Yozgat"
  },
  "TR811": {
    "nameLatin" : "Zonguldak",
    "nutsName" : "Zonguldak",
    "nameAscii" : "Zonguldak",
    "nameHtml" : "Zonguldak"
  },
  "TR812": {
    "nameLatin" : "Karabük",
    "nutsName" : "Karabük",
    "nameAscii" : "Karabuk",
    "nameHtml" : "Karab&#x00FC;k"
  },
  "TR813": {
    "nameLatin" : "Bartin",
    "nutsName" : "Bartin",
    "nameAscii" : "Bartin",
    "nameHtml" : "Bartin"
  },
  "TR821": {
    "nameLatin" : "Kastamonu",
    "nutsName" : "Kastamonu",
    "nameAscii" : "Kastamonu",
    "nameHtml" : "Kastamonu"
  },
  "TR822": {
    "nameLatin" : "Çankiri",
    "nutsName" : "Çankiri",
    "nameAscii" : "Cankiri",
    "nameHtml" : "&#x00C7;ankiri"
  },
  "TR823": {
    "nameLatin" : "Sinop",
    "nutsName" : "Sinop",
    "nameAscii" : "Sinop",
    "nameHtml" : "Sinop"
  },
  "TR831": {
    "nameLatin" : "Samsun",
    "nutsName" : "Samsun",
    "nameAscii" : "Samsun",
    "nameHtml" : "Samsun"
  },
  "TR832": {
    "nameLatin" : "Tokat",
    "nutsName" : "Tokat",
    "nameAscii" : "Tokat",
    "nameHtml" : "Tokat"
  },
  "TR833": {
    "nameLatin" : "Çorum",
    "nutsName" : "Çorum",
    "nameAscii" : "Corum",
    "nameHtml" : "&#x00C7;orum"
  },
  "TR834": {
    "nameLatin" : "Amasya",
    "nutsName" : "Amasya",
    "nameAscii" : "Amasya",
    "nameHtml" : "Amasya"
  },
  "TR901": {
    "nameLatin" : "Trabzon",
    "nutsName" : "Trabzon",
    "nameAscii" : "Trabzon",
    "nameHtml" : "Trabzon"
  },
  "TR902": {
    "nameLatin" : "Ordu",
    "nutsName" : "Ordu",
    "nameAscii" : "Ordu",
    "nameHtml" : "Ordu"
  },
  "TR903": {
    "nameLatin" : "Giresun",
    "nutsName" : "Giresun",
    "nameAscii" : "Giresun",
    "nameHtml" : "Giresun"
  },
  "TR904": {
    "nameLatin" : "Rize",
    "nutsName" : "Rize",
    "nameAscii" : "Rize",
    "nameHtml" : "Rize"
  },
  "TR905": {
    "nameLatin" : "Artvin",
    "nutsName" : "Artvin",
    "nameAscii" : "Artvin",
    "nameHtml" : "Artvin"
  },
  "TR906": {
    "nameLatin" : "Gümüshane",
    "nutsName" : "Gümüshane",
    "nameAscii" : "Gumushane",
    "nameHtml" : "G&#x00FC;m&#x00FC;shane"
  },
  "TRA11": {
    "nameLatin" : "Erzurum",
    "nutsName" : "Erzurum",
    "nameAscii" : "Erzurum",
    "nameHtml" : "Erzurum"
  },
  "TRA12": {
    "nameLatin" : "Erzincan",
    "nutsName" : "Erzincan",
    "nameAscii" : "Erzincan",
    "nameHtml" : "Erzincan"
  },
  "TRA13": {
    "nameLatin" : "Bayburt",
    "nutsName" : "Bayburt",
    "nameAscii" : "Bayburt",
    "nameHtml" : "Bayburt"
  },
  "TRA21": {
    "nameLatin" : "Agri",
    "nutsName" : "Agri",
    "nameAscii" : "Agri",
    "nameHtml" : "Agri"
  },
  "TRA22": {
    "nameLatin" : "Kars",
    "nutsName" : "Kars",
    "nameAscii" : "Kars",
    "nameHtml" : "Kars"
  },
  "TRA23": {
    "nameLatin" : "Igdir",
    "nutsName" : "Igdir",
    "nameAscii" : "Igdir",
    "nameHtml" : "Igdir"
  },
  "TRA24": {
    "nameLatin" : "Ardahan",
    "nutsName" : "Ardahan",
    "nameAscii" : "Ardahan",
    "nameHtml" : "Ardahan"
  },
  "TRB11": {
    "nameLatin" : "Malatya",
    "nutsName" : "Malatya",
    "nameAscii" : "Malatya",
    "nameHtml" : "Malatya"
  },
  "TRB12": {
    "nameLatin" : "Elazig",
    "nutsName" : "Elazig",
    "nameAscii" : "Elazig",
    "nameHtml" : "Elazig"
  },
  "TRB13": {
    "nameLatin" : "Bingöl",
    "nutsName" : "Bingöl",
    "nameAscii" : "Bingol",
    "nameHtml" : "Bing&#x00F6;l"
  },
  "TRB14": {
    "nameLatin" : "Tunceli",
    "nutsName" : "Tunceli",
    "nameAscii" : "Tunceli",
    "nameHtml" : "Tunceli"
  },
  "TRB21": {
    "nameLatin" : "Van",
    "nutsName" : "Van",
    "nameAscii" : "Van",
    "nameHtml" : "Van"
  },
  "TRB22": {
    "nameLatin" : "Mus",
    "nutsName" : "Mus",
    "nameAscii" : "Mus",
    "nameHtml" : "Mus"
  },
  "TRB23": {
    "nameLatin" : "Bitlis",
    "nutsName" : "Bitlis",
    "nameAscii" : "Bitlis",
    "nameHtml" : "Bitlis"
  },
  "TRB24": {
    "nameLatin" : "Hakkari",
    "nutsName" : "Hakkari",
    "nameAscii" : "Hakkari",
    "nameHtml" : "Hakkari"
  },
  "TRC11": {
    "nameLatin" : "Gaziantep",
    "nutsName" : "Gaziantep",
    "nameAscii" : "Gaziantep",
    "nameHtml" : "Gaziantep"
  },
  "TRC12": {
    "nameLatin" : "Adiyaman",
    "nutsName" : "Adiyaman",
    "nameAscii" : "Adiyaman",
    "nameHtml" : "Adiyaman"
  },
  "TRC13": {
    "nameLatin" : "Kilis",
    "nutsName" : "Kilis",
    "nameAscii" : "Kilis",
    "nameHtml" : "Kilis"
  },
  "TRC21": {
    "nameLatin" : "Sanliurfa",
    "nutsName" : "Sanliurfa",
    "nameAscii" : "Sanliurfa",
    "nameHtml" : "Sanliurfa"
  },
  "TRC22": {
    "nameLatin" : "Diyarbakir",
    "nutsName" : "Diyarbakir",
    "nameAscii" : "Diyarbakir",
    "nameHtml" : "Diyarbakir"
  },
  "TRC31": {
    "nameLatin" : "Mardin",
    "nutsName" : "Mardin",
    "nameAscii" : "Mardin",
    "nameHtml" : "Mardin"
  },
  "TRC32": {
    "nameLatin" : "Batman",
    "nutsName" : "Batman",
    "nameAscii" : "Batman",
    "nameHtml" : "Batman"
  },
  "TRC33": {
    "nameLatin" : "Sirnak",
    "nutsName" : "Sirnak",
    "nameAscii" : "Sirnak",
    "nameHtml" : "Sirnak"
  },
  "TRC34": {
    "nameLatin" : "Siirt",
    "nutsName" : "Siirt",
    "nameAscii" : "Siirt",
    "nameHtml" : "Siirt"
  },
  "UKC11": {
    "nameLatin" : "Hartlepool and Stockton-on-Tees",
    "nutsName" : "Hartlepool and Stockton-on-Tees",
    "nameAscii" : "Hartlepool and Stockton-On-Tees",
    "nameHtml" : "Hartlepool and Stockton-On-Tees"
  },
  "UKC12": {
    "nameLatin" : "South Teesside",
    "nutsName" : "South Teesside",
    "nameAscii" : "South Teesside",
    "nameHtml" : "South Teesside"
  },
  "UKC13": {
    "nameLatin" : "Darlington",
    "nutsName" : "Darlington",
    "nameAscii" : "Darlington",
    "nameHtml" : "Darlington"
  },
  "UKC14": {
    "nameLatin" : "Durham CC",
    "nutsName" : "Durham CC",
    "nameAscii" : "Durham CC",
    "nameHtml" : "Durham CC"
  },
  "UKC22": {
    "nameLatin" : "Tyneside",
    "nutsName" : "Tyneside",
    "nameAscii" : "Tyneside",
    "nameHtml" : "Tyneside"
  },
  "UKC23": {
    "nameLatin" : "Sunderland",
    "nutsName" : "Sunderland",
    "nameAscii" : "Sunderland",
    "nameHtml" : "Sunderland"
  },
  "UKD11": {
    "nameLatin" : "West Cumbria",
    "nutsName" : "West Cumbria",
    "nameAscii" : "West Cumbria",
    "nameHtml" : "West Cumbria"
  },
  "UKD33": {
    "nameLatin" : "Manchester",
    "nutsName" : "Manchester",
    "nameAscii" : "Manchester",
    "nameHtml" : "Manchester"
  },
  "UKD34": {
    "nameLatin" : "Greater Manchester South West",
    "nutsName" : "Greater Manchester South West",
    "nameAscii" : "Greater Manchester South West",
    "nameHtml" : "Greater Manchester South West"
  },
  "UKD36": {
    "nameLatin" : "Greater Manchester North West",
    "nutsName" : "Greater Manchester North West",
    "nameAscii" : "Greater Manchester North West",
    "nameHtml" : "Greater Manchester North West"
  },
  "UKD37": {
    "nameLatin" : "Greater Manchester North East",
    "nutsName" : "Greater Manchester North East",
    "nameAscii" : "Greater Manchester North East",
    "nameHtml" : "Greater Manchester North East"
  },
  "UKD41": {
    "nameLatin" : "Blackburn with Darwen",
    "nutsName" : "Blackburn with Darwen",
    "nameAscii" : "Blackburn with Darwen",
    "nameHtml" : "Blackburn with Darwen"
  },
  "UKD42": {
    "nameLatin" : "Blackpool",
    "nutsName" : "Blackpool",
    "nameAscii" : "Blackpool",
    "nameHtml" : "Blackpool"
  },
  "UKD44": {
    "nameLatin" : "Lancaster & Wyre",
    "nutsName" : "Lancaster & Wyre",
    "nameAscii" : "Lancaster & Wyre",
    "nameHtml" : "Lancaster & Wyre"
  },
  "UKD45": {
    "nameLatin" : "Mid Lancashire",
    "nutsName" : "Mid Lancashire",
    "nameAscii" : "Mid Lancashire",
    "nameHtml" : "Mid Lancashire"
  },
  "UKD47": {
    "nameLatin" : "Chorley & West Lancashire",
    "nutsName" : "Chorley & West Lancashire",
    "nameAscii" : "Chorley & West Lancashire",
    "nameHtml" : "Chorley & West Lancashire"
  },
  "UKD61": {
    "nameLatin" : "Warrington",
    "nutsName" : "Warrington",
    "nameAscii" : "Warrington",
    "nameHtml" : "Warrington"
  },
  "UKD62": {
    "nameLatin" : "Cheshire East",
    "nutsName" : "Cheshire East",
    "nameAscii" : "Cheshire East",
    "nameHtml" : "Cheshire East"
  },
  "UKD63": {
    "nameLatin" : "Cheshire West and Chester",
    "nutsName" : "Cheshire West and Chester",
    "nameAscii" : "Cheshire West and Chester",
    "nameHtml" : "Cheshire West and Chester"
  },
  "UKD71": {
    "nameLatin" : "East Merseyside",
    "nutsName" : "East Merseyside",
    "nameAscii" : "East Merseyside",
    "nameHtml" : "East Merseyside"
  },
  "UKD72": {
    "nameLatin" : "Liverpool",
    "nutsName" : "Liverpool",
    "nameAscii" : "Liverpool",
    "nameHtml" : "Liverpool"
  },
  "UKD73": {
    "nameLatin" : "Sefton",
    "nutsName" : "Sefton",
    "nameAscii" : "Sefton",
    "nameHtml" : "Sefton"
  },
  "UKD74": {
    "nameLatin" : "Wirral",
    "nutsName" : "Wirral",
    "nameAscii" : "Wirral",
    "nameHtml" : "Wirral"
  },
  "UKE11": {
    "nameLatin" : "Kingston upon Hull, City of",
    "nutsName" : "Kingston upon Hull, City of",
    "nameAscii" : "Kingston Upon Hull, City Of",
    "nameHtml" : "Kingston Upon Hull, City Of"
  },
  "UKE12": {
    "nameLatin" : "East Riding of Yorkshire",
    "nutsName" : "East Riding of Yorkshire",
    "nameAscii" : "East Riding of Yorkshire",
    "nameHtml" : "East Riding of Yorkshire"
  },
  "UKE13": {
    "nameLatin" : "North and North East Lincolnshire",
    "nutsName" : "North and North East Lincolnshire",
    "nameAscii" : "North and North East Lincolnshire",
    "nameHtml" : "North and North East Lincolnshire"
  },
  "UKE21": {
    "nameLatin" : "York",
    "nutsName" : "York",
    "nameAscii" : "York",
    "nameHtml" : "York"
  },
  "UKE22": {
    "nameLatin" : "North Yorkshire CC",
    "nutsName" : "North Yorkshire CC",
    "nameAscii" : "North Yorkshire CC",
    "nameHtml" : "North Yorkshire CC"
  },
  "UKE31": {
    "nameLatin" : "Barnsley, Doncaster and Rotherham",
    "nutsName" : "Barnsley, Doncaster and Rotherham",
    "nameAscii" : "Barnsley, Doncaster and Rotherham",
    "nameHtml" : "Barnsley, Doncaster and Rotherham"
  },
  "UKE32": {
    "nameLatin" : "Sheffield",
    "nutsName" : "Sheffield",
    "nameAscii" : "Sheffield",
    "nameHtml" : "Sheffield"
  },
  "UKE42": {
    "nameLatin" : "Leeds",
    "nutsName" : "Leeds",
    "nameAscii" : "Leeds",
    "nameHtml" : "Leeds"
  },
  "UKE44": {
    "nameLatin" : "Calderdale and Kirklees",
    "nutsName" : "Calderdale and Kirklees",
    "nameAscii" : "Calderdale and Kirklees",
    "nameHtml" : "Calderdale and Kirklees"
  },
  "UKI42": {
    "nameLatin" : "Tower Hamlets",
    "nutsName" : "Tower Hamlets",
    "nameAscii" : "Tower Hamlets",
    "nameHtml" : "Tower Hamlets"
  },
  "UKI43": {
    "nameLatin" : "Haringey & Islington",
    "nutsName" : "Haringey & Islington",
    "nameAscii" : "Haringey & Islington",
    "nameHtml" : "Haringey & Islington"
  },
  "UKI44": {
    "nameLatin" : "Lewisham & Southwark",
    "nutsName" : "Lewisham & Southwark",
    "nameAscii" : "Lewisham & Southwark",
    "nameHtml" : "Lewisham & Southwark"
  },
  "UKI45": {
    "nameLatin" : "Lambeth",
    "nutsName" : "Lambeth",
    "nameAscii" : "Lambeth",
    "nameHtml" : "Lambeth"
  },
  "UKI51": {
    "nameLatin" : "Bexley & Greenwich",
    "nutsName" : "Bexley & Greenwich",
    "nameAscii" : "Bexley & Greenwich",
    "nameHtml" : "Bexley & Greenwich"
  },
  "UKI52": {
    "nameLatin" : "Barking and Dagenham & Havering",
    "nutsName" : "Barking and Dagenham & Havering",
    "nameAscii" : "Barking and Dagenham & Havering",
    "nameHtml" : "Barking and Dagenham & Havering"
  },
  "UKI53": {
    "nameLatin" : "Redbridge & Waltham Forest",
    "nutsName" : "Redbridge & Waltham Forest",
    "nameAscii" : "Redbridge & Waltham Forest",
    "nameHtml" : "Redbridge & Waltham Forest"
  },
  "UKI54": {
    "nameLatin" : "Enfield",
    "nutsName" : "Enfield",
    "nameAscii" : "Enfield",
    "nameHtml" : "Enfield"
  },
  "UKI61": {
    "nameLatin" : "Bromley",
    "nutsName" : "Bromley",
    "nameAscii" : "Bromley",
    "nameHtml" : "Bromley"
  },
  "UKI62": {
    "nameLatin" : "Croydon",
    "nutsName" : "Croydon",
    "nameAscii" : "Croydon",
    "nameHtml" : "Croydon"
  },
  "UKI63": {
    "nameLatin" : "Merton, Kingston upon Thames & Sutton",
    "nutsName" : "Merton, Kingston upon Thames & Sutton",
    "nameAscii" : "Merton, Kingston Upon Thames & Sutton",
    "nameHtml" : "Merton, Kingston Upon Thames & Sutton"
  },
  "UKI71": {
    "nameLatin" : "Barnet",
    "nutsName" : "Barnet",
    "nameAscii" : "Barnet",
    "nameHtml" : "Barnet"
  },
  "UKI72": {
    "nameLatin" : "Brent",
    "nutsName" : "Brent",
    "nameAscii" : "Brent",
    "nameHtml" : "Brent"
  },
  "UKI73": {
    "nameLatin" : "Ealing",
    "nutsName" : "Ealing",
    "nameAscii" : "Ealing",
    "nameHtml" : "Ealing"
  },
  "UKI74": {
    "nameLatin" : "Harrow & Hillingdon",
    "nutsName" : "Harrow & Hillingdon",
    "nameAscii" : "Harrow & Hillingdon",
    "nameHtml" : "Harrow & Hillingdon"
  },
  "UKJ11": {
    "nameLatin" : "Berkshire",
    "nutsName" : "Berkshire",
    "nameAscii" : "Berkshire",
    "nameHtml" : "Berkshire"
  },
  "UKJ12": {
    "nameLatin" : "Milton Keynes",
    "nutsName" : "Milton Keynes",
    "nameAscii" : "Milton Keynes",
    "nameHtml" : "Milton Keynes"
  },
  "UKJ13": {
    "nameLatin" : "Buckinghamshire CC",
    "nutsName" : "Buckinghamshire CC",
    "nameAscii" : "Buckinghamshire CC",
    "nameHtml" : "Buckinghamshire CC"
  },
  "UKJ14": {
    "nameLatin" : "Oxfordshire",
    "nutsName" : "Oxfordshire",
    "nameAscii" : "Oxfordshire",
    "nameHtml" : "Oxfordshire"
  },
  "UKJ22": {
    "nameLatin" : "East Sussex CC",
    "nutsName" : "East Sussex CC",
    "nameAscii" : "East Sussex CC",
    "nameHtml" : "East Sussex CC"
  },
  "UKJ25": {
    "nameLatin" : "West Surrey",
    "nutsName" : "West Surrey",
    "nameAscii" : "West Surrey",
    "nameHtml" : "West Surrey"
  },
  "UKJ26": {
    "nameLatin" : "East Surrey",
    "nutsName" : "East Surrey",
    "nameAscii" : "East Surrey",
    "nameHtml" : "East Surrey"
  },
  "UKJ27": {
    "nameLatin" : "West Sussex (South West)",
    "nutsName" : "West Sussex (South West)",
    "nameAscii" : "West Sussex (South West)",
    "nameHtml" : "West Sussex (South West)"
  },
  "UKJ31": {
    "nameLatin" : "Portsmouth",
    "nutsName" : "Portsmouth",
    "nameAscii" : "Portsmouth",
    "nameHtml" : "Portsmouth"
  },
  "UKJ32": {
    "nameLatin" : "Southampton",
    "nutsName" : "Southampton",
    "nameAscii" : "Southampton",
    "nameHtml" : "Southampton"
  },
  "UKJ34": {
    "nameLatin" : "Isle of Wight",
    "nutsName" : "Isle of Wight",
    "nameAscii" : "Isle of Wight",
    "nameHtml" : "Isle of Wight"
  },
  "UKJ35": {
    "nameLatin" : "South Hampshire",
    "nutsName" : "South Hampshire",
    "nameAscii" : "South Hampshire",
    "nameHtml" : "South Hampshire"
  },
  "UKJ36": {
    "nameLatin" : "Central Hampshire",
    "nutsName" : "Central Hampshire",
    "nameAscii" : "Central Hampshire",
    "nameHtml" : "Central Hampshire"
  },
  "UKJ37": {
    "nameLatin" : "North Hampshire",
    "nutsName" : "North Hampshire",
    "nameAscii" : "North Hampshire",
    "nameHtml" : "North Hampshire"
  },
  "UKJ41": {
    "nameLatin" : "Medway",
    "nutsName" : "Medway",
    "nameAscii" : "Medway",
    "nameHtml" : "Medway"
  },
  "UKJ44": {
    "nameLatin" : "East Kent",
    "nutsName" : "East Kent",
    "nameAscii" : "East Kent",
    "nameHtml" : "East Kent"
  },
  "UKJ45": {
    "nameLatin" : "Mid Kent",
    "nutsName" : "Mid Kent",
    "nameAscii" : "Mid Kent",
    "nameHtml" : "Mid Kent"
  },
  "UKJ46": {
    "nameLatin" : "West Kent",
    "nutsName" : "West Kent",
    "nameAscii" : "West Kent",
    "nameHtml" : "West Kent"
  },
  "UKK11": {
    "nameLatin" : "Bristol, City of",
    "nutsName" : "Bristol, City of",
    "nameAscii" : "Bristol, City Of",
    "nameHtml" : "Bristol, City Of"
  },
  "UKK12": {
    "nameLatin" : "Bath and North East Somerset, North Somerset and South Gloucestershire",
    "nutsName" : "Bath and North East Somerset, North Somerset and South Gloucestershire",
    "nameAscii" : "Bath and North East Somerset, North Somerset and South Gloucestershire",
    "nameHtml" : "Bath and North East Somerset, North Somerset and South Gloucestershire"
  },
  "UKK13": {
    "nameLatin" : "Gloucestershire",
    "nutsName" : "Gloucestershire",
    "nameAscii" : "Gloucestershire",
    "nameHtml" : "Gloucestershire"
  },
  "UKK14": {
    "nameLatin" : "Swindon",
    "nutsName" : "Swindon",
    "nameAscii" : "Swindon",
    "nameHtml" : "Swindon"
  },
  "UKK15": {
    "nameLatin" : "Wiltshire CC",
    "nutsName" : "Wiltshire CC",
    "nameAscii" : "Wiltshire CC",
    "nameHtml" : "Wiltshire CC"
  },
  "UKK21": {
    "nameLatin" : "Bournemouth and Poole",
    "nutsName" : "Bournemouth and Poole",
    "nameAscii" : "Bournemouth and Poole",
    "nameHtml" : "Bournemouth and Poole"
  },
  "UKK22": {
    "nameLatin" : "Dorset CC",
    "nutsName" : "Dorset CC",
    "nameAscii" : "Dorset CC",
    "nameHtml" : "Dorset CC"
  },
  "UKK23": {
    "nameLatin" : "Somerset",
    "nutsName" : "Somerset",
    "nameAscii" : "Somerset",
    "nameHtml" : "Somerset"
  },
  "UKK41": {
    "nameLatin" : "Plymouth",
    "nutsName" : "Plymouth",
    "nameAscii" : "Plymouth",
    "nameHtml" : "Plymouth"
  },
  "UKK42": {
    "nameLatin" : "Torbay",
    "nutsName" : "Torbay",
    "nameAscii" : "Torbay",
    "nameHtml" : "Torbay"
  },
  "UKK43": {
    "nameLatin" : "Devon CC",
    "nutsName" : "Devon CC",
    "nameAscii" : "Devon CC",
    "nameHtml" : "Devon CC"
  },
  "UKL11": {
    "nameLatin" : "Isle of Anglesey",
    "nutsName" : "Isle of Anglesey",
    "nameAscii" : "Isle of Anglesey",
    "nameHtml" : "Isle of Anglesey"
  },
  "UKL12": {
    "nameLatin" : "Gwynedd",
    "nutsName" : "Gwynedd",
    "nameAscii" : "Gwynedd",
    "nameHtml" : "Gwynedd"
  },
  "UKL13": {
    "nameLatin" : "Conwy and Denbighshire",
    "nutsName" : "Conwy and Denbighshire",
    "nameAscii" : "Conwy and Denbighshire",
    "nameHtml" : "Conwy and Denbighshire"
  },
  "UKL14": {
    "nameLatin" : "South West Wales",
    "nutsName" : "South West Wales",
    "nameAscii" : "South West Wales",
    "nameHtml" : "South West Wales"
  },
  "UKL15": {
    "nameLatin" : "Central Valleys",
    "nutsName" : "Central Valleys",
    "nameAscii" : "Central Valleys",
    "nameHtml" : "Central Valleys"
  },
  "UKL17": {
    "nameLatin" : "Bridgend and Neath Port Talbot",
    "nutsName" : "Bridgend and Neath Port Talbot",
    "nameAscii" : "Bridgend and Neath Port Talbot",
    "nameHtml" : "Bridgend and Neath Port Talbot"
  },
  "UKL18": {
    "nameLatin" : "Swansea",
    "nutsName" : "Swansea",
    "nameAscii" : "Swansea",
    "nameHtml" : "Swansea"
  },
  "UKL22": {
    "nameLatin" : "Cardiff and Vale of Glamorgan",
    "nutsName" : "Cardiff and Vale of Glamorgan",
    "nameAscii" : "Cardiff and Vale of Glamorgan",
    "nameHtml" : "Cardiff and Vale of Glamorgan"
  },
  "UKL23": {
    "nameLatin" : "Flintshire and Wrexham",
    "nutsName" : "Flintshire and Wrexham",
    "nameAscii" : "Flintshire and Wrexham",
    "nameHtml" : "Flintshire and Wrexham"
  },
  "UKL24": {
    "nameLatin" : "Powys",
    "nutsName" : "Powys",
    "nameAscii" : "Powys",
    "nameHtml" : "Powys"
  },
  "UKM21": {
    "nameLatin" : "Angus and Dundee City",
    "nutsName" : "Angus and Dundee City",
    "nameAscii" : "Angus and Dundee City",
    "nameHtml" : "Angus and Dundee City"
  },
  "UKM23": {
    "nameLatin" : "East Lothian and Midlothian",
    "nutsName" : "East Lothian and Midlothian",
    "nameAscii" : "East Lothian and Midlothian",
    "nameHtml" : "East Lothian and Midlothian"
  },
  "UKM24": {
    "nameLatin" : "Scottish Borders",
    "nutsName" : "Scottish Borders",
    "nameAscii" : "Scottish Borders",
    "nameHtml" : "Scottish Borders"
  },
  "UKM25": {
    "nameLatin" : "Edinburgh, City of",
    "nutsName" : "Edinburgh, City of",
    "nameAscii" : "Edinburgh, City Of",
    "nameHtml" : "Edinburgh, City Of"
  },
  "UKM26": {
    "nameLatin" : "Falkirk",
    "nutsName" : "Falkirk",
    "nameAscii" : "Falkirk",
    "nameHtml" : "Falkirk"
  },
  "UKM27": {
    "nameLatin" : "Perth & Kinross and Stirling",
    "nutsName" : "Perth & Kinross and Stirling",
    "nameAscii" : "Perth & Kinross and Stirling",
    "nameHtml" : "Perth & Kinross and Stirling"
  },
  "UKM28": {
    "nameLatin" : "West Lothian",
    "nutsName" : "West Lothian",
    "nameAscii" : "West Lothian",
    "nameHtml" : "West Lothian"
  },
  "UKM31": {
    "nameLatin" : "East Dunbartonshire, West Dunbartonshire and Helensburgh & Lomond",
    "nutsName" : "East Dunbartonshire, West Dunbartonshire and Helensburgh & Lomond",
    "nameAscii" : "East Dunbartonshire, West Dunbartonshire and Helensburgh & Lomond",
    "nameHtml" : "East Dunbartonshire, West Dunbartonshire and Helensburgh & Lomond"
  },
  "UKM32": {
    "nameLatin" : "Dumfries & Galloway",
    "nutsName" : "Dumfries & Galloway",
    "nameAscii" : "Dumfries & Galloway",
    "nameHtml" : "Dumfries & Galloway"
  },
  "UKM34": {
    "nameLatin" : "Glasgow City",
    "nutsName" : "Glasgow City",
    "nameAscii" : "Glasgow City",
    "nameHtml" : "Glasgow City"
  },
  "UKM35": {
    "nameLatin" : "Inverclyde, East Renfrewshire and Renfrewshire",
    "nutsName" : "Inverclyde, East Renfrewshire and Renfrewshire",
    "nameAscii" : "Inverclyde, East Renfrewshire and Renfrewshire",
    "nameHtml" : "Inverclyde, East Renfrewshire and Renfrewshire"
  },
  "UKM36": {
    "nameLatin" : "North Lanarkshire",
    "nutsName" : "North Lanarkshire",
    "nameAscii" : "North Lanarkshire",
    "nameHtml" : "North Lanarkshire"
  },
  "UKM37": {
    "nameLatin" : "South Ayrshire",
    "nutsName" : "South Ayrshire",
    "nameAscii" : "South Ayrshire",
    "nameHtml" : "South Ayrshire"
  },
  "UKM38": {
    "nameLatin" : "South Lanarkshire",
    "nutsName" : "South Lanarkshire",
    "nameAscii" : "South Lanarkshire",
    "nameHtml" : "South Lanarkshire"
  },
  "UKM50": {
    "nameLatin" : "Aberdeen City and Aberdeenshire",
    "nutsName" : "Aberdeen City and Aberdeenshire",
    "nameAscii" : "Aberdeen City and Aberdeenshire",
    "nameHtml" : "Aberdeen City and Aberdeenshire"
  },
  "UKM62": {
    "nameLatin" : "Inverness & Nairn and Moray, Badenoch & Strathspey",
    "nutsName" : "Inverness & Nairn and Moray, Badenoch & Strathspey",
    "nameAscii" : "Inverness & Nairn and Moray, Badenoch & Strathspey",
    "nameHtml" : "Inverness & Nairn and Moray, Badenoch & Strathspey"
  },
  "UKM63": {
    "nameLatin" : "Lochaber, Skye & Lochalsh, Arran & Cumbrae and Argyll & Bute",
    "nutsName" : "Lochaber, Skye & Lochalsh, Arran & Cumbrae and Argyll & Bute",
    "nameAscii" : "Lochaber, Skye & Lochalsh, Arran & Cumbrae and Argyll & Bute",
    "nameHtml" : "Lochaber, Skye & Lochalsh, Arran & Cumbrae and Argyll & Bute"
  },
  "UKM64": {
    "nameLatin" : "Eilean Siar (Western Isles)",
    "nutsName" : "Eilean Siar (Western Isles)",
    "nameAscii" : "Eilean Siar (Western Isles)",
    "nameHtml" : "Eilean Siar (Western Isles)"
  },
  "UKM65": {
    "nameLatin" : "Orkney Islands",
    "nutsName" : "Orkney Islands",
    "nameAscii" : "Orkney Islands",
    "nameHtml" : "Orkney Islands"
  },
  "UKM66": {
    "nameLatin" : "Shetland Islands",
    "nutsName" : "Shetland Islands",
    "nameAscii" : "Shetland Islands",
    "nameHtml" : "Shetland Islands"
  },
  "UKN01": {
    "nameLatin" : "Belfast",
    "nutsName" : "Belfast",
    "nameAscii" : "Belfast",
    "nameHtml" : "Belfast"
  },
  "UKN02": {
    "nameLatin" : "Outer Belfast",
    "nutsName" : "Outer Belfast",
    "nameAscii" : "Outer Belfast",
    "nameHtml" : "Outer Belfast"
  },
  "UKN03": {
    "nameLatin" : "East of Northern Ireland",
    "nutsName" : "East of Northern Ireland",
    "nameAscii" : "East of Northern Ireland",
    "nameHtml" : "East of Northern Ireland"
  },
  "UKN04": {
    "nameLatin" : "North of Northern Ireland",
    "nutsName" : "North of Northern Ireland",
    "nameAscii" : "North of Northern Ireland",
    "nameHtml" : "North of Northern Ireland"
  },
  "ME000": {
    "nameLatin" : "Crna Gora",
    "nutsName" : "Црна Гора",
    "nameAscii" : "Crna Gora",
    "nameHtml" : "Crna Gora"
  },
  "AT224": {
    "nameLatin" : "Oststeiermark",
    "nutsName" : "Oststeiermark",
    "nameAscii" : "Oststeiermark",
    "nameHtml" : "Oststeiermark"
  },
  "AT315": {
    "nameLatin" : "Traunviertel",
    "nutsName" : "Traunviertel",
    "nameAscii" : "Traunviertel",
    "nameHtml" : "Traunviertel"
  },
  "AT331": {
    "nameLatin" : "Außerfern",
    "nutsName" : "Außerfern",
    "nameAscii" : "Ausserfern",
    "nameHtml" : "Au&#x00DF;erfern"
  },
  "AT341": {
    "nameLatin" : "Bludenz-Bregenzer Wald",
    "nutsName" : "Bludenz-Bregenzer Wald",
    "nameAscii" : "Bludenz-Bregenzer Wald",
    "nameHtml" : "Bludenz-Bregenzer Wald"
  },
  "BE235": {
    "nameLatin" : "Arr. Oudenaarde",
    "nutsName" : "Arr. Oudenaarde",
    "nameAscii" : "Arr. Oudenaarde",
    "nameHtml" : "Arr. Oudenaarde"
  },
  "BE258": {
    "nameLatin" : "Arr. Veurne",
    "nutsName" : "Arr. Veurne",
    "nameAscii" : "Arr. Veurne",
    "nameHtml" : "Arr. Veurne"
  },
  "BE326": {
    "nameLatin" : "Arr. Thuin",
    "nutsName" : "Arr. Thuin",
    "nameAscii" : "Arr. Thuin",
    "nameHtml" : "Arr. Thuin"
  },
  "BE332": {
    "nameLatin" : "Arr. Liège",
    "nutsName" : "Arr. Liège",
    "nameAscii" : "Arr. Liege",
    "nameHtml" : "Arr. Li&#x00E8;ge"
  },
  "BG325": {
    "nameLatin" : "Silistra",
    "nutsName" : "Силистра",
    "nameAscii" : "Silistra",
    "nameHtml" : "&#x0421;&#x0438;&#x043B;&#x0438;&#x0441;&#x0442;&#x0440;&#x0430;"
  },
  "BG331": {
    "nameLatin" : "Varna",
    "nutsName" : "Варна",
    "nameAscii" : "Varna",
    "nameHtml" : "&#x0412;&#x0430;&#x0440;&#x043D;&#x0430;"
  },
  "BG334": {
    "nameLatin" : "Targovishte",
    "nutsName" : "Търговище",
    "nameAscii" : "Targovishte",
    "nameHtml" : "&#x0422;&#x044A;&#x0440;&#x0433;&#x043E;&#x0432;&#x0438;&#x0449;&#x0435;"
  },
  "BG341": {
    "nameLatin" : "Burgas",
    "nutsName" : "Бургас",
    "nameAscii" : "Burgas",
    "nameHtml" : "&#x0411;&#x0443;&#x0440;&#x0433;&#x0430;&#x0441;"
  },
  "BG344": {
    "nameLatin" : "Stara Zagora",
    "nutsName" : "Стара Загора",
    "nameAscii" : "Stara Zagora",
    "nameHtml" : "&#x0421;&#x0442;&#x0430;&#x0440;&#x0430; &#x0417;&#x0430;&#x0433;&#x043E;&#x0440;&#x0430;"
  },
  "BG422": {
    "nameLatin" : "Haskovo",
    "nutsName" : "Хасково",
    "nameAscii" : "Haskovo",
    "nameHtml" : "&#x0425;&#x0430;&#x0441;&#x043A;&#x043E;&#x0432;&#x043E;"
  },
  "BG424": {
    "nameLatin" : "Smolyan",
    "nutsName" : "Смолян",
    "nameAscii" : "Smolyan",
    "nameHtml" : "&#x0421;&#x043C;&#x043E;&#x043B;&#x044F;&#x043D;"
  },
  "CH031": {
    "nameLatin" : "Basel-Stadt",
    "nutsName" : "Basel-Stadt",
    "nameAscii" : "Basel-Stadt",
    "nameHtml" : "Basel-Stadt"
  },
  "CH051": {
    "nameLatin" : "Glarus",
    "nutsName" : "Glarus",
    "nameAscii" : "Glarus",
    "nameHtml" : "Glarus"
  },
  "CH054": {
    "nameLatin" : "Appenzell Innerrhoden",
    "nutsName" : "Appenzell Innerrhoden",
    "nameAscii" : "Appenzell Innerrhoden",
    "nameHtml" : "Appenzell Innerrhoden"
  },
  "CZ051": {
    "nameLatin" : "Liberecký kraj",
    "nutsName" : "Liberecký kraj",
    "nameAscii" : "Liberecky kraj",
    "nameHtml" : "Libereck&#x00FD; kraj"
  },
  "CZ071": {
    "nameLatin" : "Olomoucký kraj",
    "nutsName" : "Olomoucký kraj",
    "nameAscii" : "Olomoucky kraj",
    "nameHtml" : "Olomouck&#x00FD; kraj"
  },
  "DE116": {
    "nameLatin" : "Rems-Murr-Kreis",
    "nutsName" : "Rems-Murr-Kreis",
    "nameAscii" : "Rems-Murr-Kreis",
    "nameHtml" : "Rems-Murr-Kreis"
  },
  "DE11A": {
    "nameLatin" : "Schwäbisch Hall",
    "nutsName" : "Schwäbisch Hall",
    "nameAscii" : "Schwabisch Hall",
    "nameHtml" : "Schw&#x00E4;bisch Hall"
  },
  "DE122": {
    "nameLatin" : "Karlsruhe, Stadtkreis",
    "nutsName" : "Karlsruhe, Stadtkreis",
    "nameAscii" : "Karlsruhe, Stadtkreis",
    "nameHtml" : "Karlsruhe, Stadtkreis"
  },
  "DE129": {
    "nameLatin" : "Pforzheim, Stadtkreis",
    "nutsName" : "Pforzheim, Stadtkreis",
    "nameAscii" : "Pforzheim, Stadtkreis",
    "nameHtml" : "Pforzheim, Stadtkreis"
  },
  "DE133": {
    "nameLatin" : "Emmendingen",
    "nutsName" : "Emmendingen",
    "nameAscii" : "Emmendingen",
    "nameHtml" : "Emmendingen"
  },
  "DE138": {
    "nameLatin" : "Konstanz",
    "nutsName" : "Konstanz",
    "nameAscii" : "Konstanz",
    "nameHtml" : "Konstanz"
  },
  "DE142": {
    "nameLatin" : "Tübingen, Landkreis",
    "nutsName" : "Tübingen, Landkreis",
    "nameAscii" : "Tubingen, Landkreis",
    "nameHtml" : "T&#x00FC;bingen, Landkreis"
  },
  "DE212": {
    "nameLatin" : "München, Kreisfreie Stadt",
    "nutsName" : "München, Kreisfreie Stadt",
    "nameAscii" : "Munchen, Kreisfreie Stadt",
    "nameHtml" : "M&#x00FC;nchen, Kreisfreie Stadt"
  },
  "DE227": {
    "nameLatin" : "Landshut, Landkreis",
    "nutsName" : "Landshut, Landkreis",
    "nameAscii" : "Landshut, Landkreis",
    "nameHtml" : "Landshut, Landkreis"
  },
  "DE231": {
    "nameLatin" : "Amberg, Kreisfreie Stadt",
    "nutsName" : "Amberg, Kreisfreie Stadt",
    "nameAscii" : "Amberg, Kreisfreie Stadt",
    "nameHtml" : "Amberg, Kreisfreie Stadt"
  },
  "DE237": {
    "nameLatin" : "Neustadt a. d. Waldnaab",
    "nutsName" : "Neustadt a. d. Waldnaab",
    "nameAscii" : "Neustadt a. d. Waldnaab",
    "nameHtml" : "Neustadt a. d. Waldnaab"
  },
  "DE243": {
    "nameLatin" : "Coburg, Kreisfreie Stadt",
    "nutsName" : "Coburg, Kreisfreie Stadt",
    "nameAscii" : "Coburg, Kreisfreie Stadt",
    "nameHtml" : "Coburg, Kreisfreie Stadt"
  },
  "DE24B": {
    "nameLatin" : "Kulmbach",
    "nutsName" : "Kulmbach",
    "nameAscii" : "Kulmbach",
    "nameHtml" : "Kulmbach"
  },
  "DE253": {
    "nameLatin" : "Fürth, Kreisfreie Stadt",
    "nutsName" : "Fürth, Kreisfreie Stadt",
    "nameAscii" : "Furth, Kreisfreie Stadt",
    "nameHtml" : "F&#x00FC;rth, Kreisfreie Stadt"
  },
  "DE258": {
    "nameLatin" : "Fürth, Landkreis",
    "nutsName" : "Fürth, Landkreis",
    "nameAscii" : "Furth, Landkreis",
    "nameHtml" : "F&#x00FC;rth, Landkreis"
  },
  "DE263": {
    "nameLatin" : "Würzburg, Kreisfreie Stadt",
    "nutsName" : "Würzburg, Kreisfreie Stadt",
    "nameAscii" : "Wurzburg, Kreisfreie Stadt",
    "nameHtml" : "W&#x00FC;rzburg, Kreisfreie Stadt"
  },
  "DE26B": {
    "nameLatin" : "Schweinfurt, Landkreis",
    "nutsName" : "Schweinfurt, Landkreis",
    "nameAscii" : "Schweinfurt, Landkreis",
    "nameHtml" : "Schweinfurt, Landkreis"
  },
  "DE273": {
    "nameLatin" : "Kempten (Allgäu), Kreisfreie Stadt",
    "nutsName" : "Kempten (Allgäu), Kreisfreie Stadt",
    "nameAscii" : "Kempten (Allgau), Kreisfreie Stadt",
    "nameHtml" : "Kempten (Allg&#x00E4;u), Kreisfreie Stadt"
  },
  "DE406": {
    "nameLatin" : "Dahme-Spreewald",
    "nutsName" : "Dahme-Spreewald",
    "nameAscii" : "Dahme-Spreewald",
    "nameHtml" : "Dahme-Spreewald"
  },
  "DE40C": {
    "nameLatin" : "Oder-Spree",
    "nutsName" : "Oder-Spree",
    "nameAscii" : "Oder-Spree",
    "nameHtml" : "Oder-Spree"
  },
  "DE40G": {
    "nameLatin" : "Spree-Neiße",
    "nutsName" : "Spree-Neiße",
    "nameAscii" : "Spree-Neisse",
    "nameHtml" : "Spree-Nei&#x00DF;e"
  },
  "DE502": {
    "nameLatin" : "Bremerhaven, Kreisfreie Stadt",
    "nutsName" : "Bremerhaven, Kreisfreie Stadt",
    "nameAscii" : "Bremerhaven, Kreisfreie Stadt",
    "nameHtml" : "Bremerhaven, Kreisfreie Stadt"
  },
  "DE713": {
    "nameLatin" : "Offenbach am Main, Kreisfreie Stadt",
    "nutsName" : "Offenbach am Main, Kreisfreie Stadt",
    "nameAscii" : "Offenbach am Main, Kreisfreie Stadt",
    "nameHtml" : "Offenbach am Main, Kreisfreie Stadt"
  },
  "DE71D": {
    "nameLatin" : "Rheingau-Taunus-Kreis",
    "nutsName" : "Rheingau-Taunus-Kreis",
    "nameAscii" : "Rheingau-Taunus-Kreis",
    "nameHtml" : "Rheingau-Taunus-Kreis"
  },
  "DE724": {
    "nameLatin" : "Marburg-Biedenkopf",
    "nutsName" : "Marburg-Biedenkopf",
    "nameAscii" : "Marburg-Biedenkopf",
    "nameHtml" : "Marburg-Biedenkopf"
  },
  "DE735": {
    "nameLatin" : "Schwalm-Eder-Kreis",
    "nutsName" : "Schwalm-Eder-Kreis",
    "nameAscii" : "Schwalm-Eder-Kreis",
    "nameHtml" : "Schwalm-Eder-Kreis"
  },
  "DE803": {
    "nameLatin" : "Rostock, Kreisfreie Stadt",
    "nutsName" : "Rostock, Kreisfreie Stadt",
    "nameAscii" : "Rostock, Kreisfreie Stadt",
    "nameHtml" : "Rostock, Kreisfreie Stadt"
  },
  "DE80M": {
    "nameLatin" : "Nordwestmecklenburg",
    "nutsName" : "Nordwestmecklenburg",
    "nameAscii" : "Nordwestmecklenburg",
    "nameHtml" : "Nordwestmecklenburg"
  },
  "DE912": {
    "nameLatin" : "Salzgitter, Kreisfreie Stadt",
    "nutsName" : "Salzgitter, Kreisfreie Stadt",
    "nameAscii" : "Salzgitter, Kreisfreie Stadt",
    "nameHtml" : "Salzgitter, Kreisfreie Stadt"
  },
  "DE943": {
    "nameLatin" : "Oldenburg (Oldenburg), Kreisfreie Stadt",
    "nutsName" : "Oldenburg (Oldenburg), Kreisfreie Stadt",
    "nameAscii" : "Oldenburg (Oldenburg), Kreisfreie Stadt",
    "nameHtml" : "Oldenburg (Oldenburg), Kreisfreie Stadt"
  },
  "DE94E": {
    "nameLatin" : "Osnabrück, Landkreis",
    "nutsName" : "Osnabrück, Landkreis",
    "nameAscii" : "Osnabruck, Landkreis",
    "nameHtml" : "Osnabr&#x00FC;ck, Landkreis"
  },
  "DEA12": {
    "nameLatin" : "Duisburg, Kreisfreie Stadt",
    "nutsName" : "Duisburg, Kreisfreie Stadt",
    "nameAscii" : "Duisburg, Kreisfreie Stadt",
    "nameHtml" : "Duisburg, Kreisfreie Stadt"
  },
  "DEA16": {
    "nameLatin" : "Mülheim an der Ruhr,Kreisfreie Stadt",
    "nutsName" : "Mülheim an der Ruhr,Kreisfreie Stadt",
    "nameAscii" : "Mulheim an der Ruhr,Kreisfreie Stadt",
    "nameHtml" : "M&#x00FC;lheim an der Ruhr,Kreisfreie Stadt"
  },
  "DEA22": {
    "nameLatin" : "Bonn, Kreisfreie Stadt",
    "nutsName" : "Bonn, Kreisfreie Stadt",
    "nameAscii" : "Bonn, Kreisfreie Stadt",
    "nameHtml" : "Bonn, Kreisfreie Stadt"
  },
  "DEA2A": {
    "nameLatin" : "Oberbergischer Kreis",
    "nutsName" : "Oberbergischer Kreis",
    "nameAscii" : "Oberbergischer Kreis",
    "nameHtml" : "Oberbergischer Kreis"
  },
  "DEA31": {
    "nameLatin" : "Bottrop, Kreisfreie Stadt",
    "nutsName" : "Bottrop, Kreisfreie Stadt",
    "nameAscii" : "Bottrop, Kreisfreie Stadt",
    "nameHtml" : "Bottrop, Kreisfreie Stadt"
  },
  "DEA41": {
    "nameLatin" : "Bielefeld, Kreisfreie Stadt",
    "nutsName" : "Bielefeld, Kreisfreie Stadt",
    "nameAscii" : "Bielefeld, Kreisfreie Stadt",
    "nameHtml" : "Bielefeld, Kreisfreie Stadt"
  },
  "DEB1B": {
    "nameLatin" : "Westerwaldkreis",
    "nutsName" : "Westerwaldkreis",
    "nameAscii" : "Westerwaldkreis",
    "nameHtml" : "Westerwaldkreis"
  },
  "DEB24": {
    "nameLatin" : "Vulkaneifel",
    "nutsName" : "Vulkaneifel",
    "nameAscii" : "Vulkaneifel",
    "nameHtml" : "Vulkaneifel"
  },
  "DEB31": {
    "nameLatin" : "Frankenthal (Pfalz), Kreisfreie Stadt",
    "nutsName" : "Frankenthal (Pfalz), Kreisfreie Stadt",
    "nameAscii" : "Frankenthal (Pfalz), Kreisfreie Stadt",
    "nameHtml" : "Frankenthal (Pfalz), Kreisfreie Stadt"
  },
  "DEB36": {
    "nameLatin" : "Neustadt an der Weinstraße, Kreisfreie Stadt",
    "nutsName" : "Neustadt an der Weinstraße, Kreisfreie Stadt",
    "nameAscii" : "Neustadt an der Weinstrasse, Kreisfreie Stadt",
    "nameHtml" : "Neustadt an der Weinstra&#x00DF;e, Kreisfreie Stadt"
  },
  "DEB3I": {
    "nameLatin" : "Rhein-Pfalz-Kreis",
    "nutsName" : "Rhein-Pfalz-Kreis",
    "nameAscii" : "Rhein-Pfalz-Kreis",
    "nameHtml" : "Rhein-Pfalz-Kreis"
  },
  "DEC01": {
    "nameLatin" : "Regionalverband Saarbrücken",
    "nutsName" : "Regionalverband Saarbrücken",
    "nameAscii" : "Regionalverband Saarbrucken",
    "nameHtml" : "Regionalverband Saarbr&#x00FC;cken"
  },
  "DED2F": {
    "nameLatin" : "Sächsische Schweiz-Osterzgebirge",
    "nutsName" : "Sächsische Schweiz-Osterzgebirge",
    "nameAscii" : "Sachsische Schweiz-Osterzgebirge",
    "nameHtml" : "S&#x00E4;chsische Schweiz-Osterzgebirge"
  },
  "DEE03": {
    "nameLatin" : "Magdeburg, Kreisfreie Stadt",
    "nutsName" : "Magdeburg, Kreisfreie Stadt",
    "nameAscii" : "Magdeburg, Kreisfreie Stadt",
    "nameHtml" : "Magdeburg, Kreisfreie Stadt"
  },
  "DEF0A": {
    "nameLatin" : "Plön",
    "nutsName" : "Plön",
    "nameAscii" : "Plon",
    "nameHtml" : "Pl&#x00F6;n"
  },
  "DEF0C": {
    "nameLatin" : "Schleswig-Flensburg",
    "nutsName" : "Schleswig-Flensburg",
    "nameAscii" : "Schleswig-Flensburg",
    "nameHtml" : "Schleswig-Flensburg"
  },
  "DEG02": {
    "nameLatin" : "Gera, Kreisfreie Stadt",
    "nutsName" : "Gera, Kreisfreie Stadt",
    "nameAscii" : "Gera, Kreisfreie Stadt",
    "nameHtml" : "Gera, Kreisfreie Stadt"
  },
  "DEG0A": {
    "nameLatin" : "Kyffhäuserkreis",
    "nutsName" : "Kyffhäuserkreis",
    "nameAscii" : "Kyffhauserkreis",
    "nameHtml" : "Kyffh&#x00E4;userkreis"
  },
  "DEG0G": {
    "nameLatin" : "Weimarer Land",
    "nutsName" : "Weimarer Land",
    "nameAscii" : "Weimarer Land",
    "nameHtml" : "Weimarer Land"
  },
  "DEG0M": {
    "nameLatin" : "Altenburger Land",
    "nutsName" : "Altenburger Land",
    "nameAscii" : "Altenburger Land",
    "nameHtml" : "Altenburger Land"
  },
  "DK011": {
    "nameLatin" : "Byen København",
    "nutsName" : "Byen København",
    "nameAscii" : "Byen Kobenhavn",
    "nameHtml" : "Byen K&#x00F8;benhavn"
  },
  "DK021": {
    "nameLatin" : "Østsjælland",
    "nutsName" : "Østsjælland",
    "nameAscii" : "Ostsjaelland",
    "nameHtml" : "&#x00D8;stsj&#x00E6;lland"
  },
  "EE004": {
    "nameLatin" : "Lääne-Eesti",
    "nutsName" : "Lääne-Eesti",
    "nameAscii" : "Laane-Eesti",
    "nameHtml" : "L&#x00E4;&#x00E4;ne-Eesti"
  },
  "EL301": {
    "nameLatin" : "Boreios Tomeas Athinon",
    "nutsName" : "Βόρειος Τομέας Αθηνών",
    "nameAscii" : "Boreios Tomeas Athinon",
    "nameHtml" : "&#x0392;&#x03CC;&#x03C1;&#x03B5;&#x03B9;&#x03BF;&#x03C2; &#x03A4;&#x03BF;&#x03BC;&#x03AD;&#x03B1;&#x03C2; &#x0391;&#x03B8;&#x03B7;&#x03BD;&#x03CE;&#x03BD;"
  },
  "EL304": {
    "nameLatin" : "Notios Tomeas Athinon",
    "nutsName" : "Νότιος Τομέας Αθηνών",
    "nameAscii" : "Notios Tomeas Athinon",
    "nameHtml" : "&#x039D;&#x03CC;&#x03C4;&#x03B9;&#x03BF;&#x03C2; &#x03A4;&#x03BF;&#x03BC;&#x03AD;&#x03B1;&#x03C2; &#x0391;&#x03B8;&#x03B7;&#x03BD;&#x03CE;&#x03BD;"
  },
  "EL307": {
    "nameLatin" : "Peiraias, Nisoi",
    "nutsName" : "Πειραιάς, Νήσοι",
    "nameAscii" : "Peiraias, Nisoi",
    "nameHtml" : "&#x03A0;&#x03B5;&#x03B9;&#x03C1;&#x03B1;&#x03B9;&#x03AC;&#x03C2;, &#x039D;&#x03AE;&#x03C3;&#x03BF;&#x03B9;"
  },
  "EL411": {
    "nameLatin" : "Lesbos, Limnos",
    "nutsName" : "Λέσβος, Λήμνος",
    "nameAscii" : "Lesbos, Limnos",
    "nameHtml" : "&#x039B;&#x03AD;&#x03C3;&#x03B2;&#x03BF;&#x03C2;, &#x039B;&#x03AE;&#x03BC;&#x03BD;&#x03BF;&#x03C2;"
  },
  "EL422": {
    "nameLatin" : "Andros, Thira, Kea, Milos, Mikonos, Naxos, Paros, Siros, Tinos",
    "nutsName" : "Άνδρος, Θήρα, Κέα, Μήλος, Μύκονος, Νάξος, Πάρος, Σύρος, Τήνος",
    "nameAscii" : "Andros, Thira, Kea, Milos, Mikonos, Naxos, Paros, Siros, Tinos",
    "nameHtml" : "&#x0386;&#x03BD;&#x03B4;&#x03C1;&#x03BF;&#x03C2;, &#x0398;&#x03AE;&#x03C1;&#x03B1;, &#x039A;&#x03AD;&#x03B1;, &#x039C;&#x03AE;&#x03BB;&#x03BF;&#x03C2;, &#x039C;&#x03CD;&#x03BA;&#x03BF;&#x03BD;&#x03BF;&#x03C2;, &#x039D;&#x03AC;&#x03BE;&#x03BF;&#x03C2;, &#x"
  },
  "EL511": {
    "nameLatin" : "Evros",
    "nutsName" : "Έβρος",
    "nameAscii" : "Ebros",
    "nameHtml" : "&#x0388;&#x03B2;&#x03C1;&#x03BF;&#x03C2;"
  },
  "EL513": {
    "nameLatin" : "Rodopi",
    "nutsName" : "Ροδόπη",
    "nameAscii" : "Rodopi",
    "nameHtml" : "&#x03A1;&#x03BF;&#x03B4;&#x03CC;&#x03C0;&#x03B7;"
  },
  "EL515": {
    "nameLatin" : "Thasos, Kavala",
    "nutsName" : "Θάσος, Καβάλα",
    "nameAscii" : "Thasos, Kabala",
    "nameHtml" : "&#x0398;&#x03AC;&#x03C3;&#x03BF;&#x03C2;, &#x039A;&#x03B1;&#x03B2;&#x03AC;&#x03BB;&#x03B1;"
  },
  "EL522": {
    "nameLatin" : "Thessaloniki",
    "nutsName" : "Θεσσαλονίκη",
    "nameAscii" : "Thessaloniki",
    "nameHtml" : "&#x0398;&#x03B5;&#x03C3;&#x03C3;&#x03B1;&#x03BB;&#x03BF;&#x03BD;&#x03AF;&#x03BA;&#x03B7;"
  },
  "EL527": {
    "nameLatin" : "Chalkidiki",
    "nutsName" : "Χαλκιδική",
    "nameAscii" : "Xalkidiki",
    "nameHtml" : "&#x03A7;&#x03B1;&#x03BB;&#x03BA;&#x03B9;&#x03B4;&#x03B9;&#x03BA;&#x03AE;"
  },
  "EL531": {
    "nameLatin" : "Grebena, Kozani",
    "nutsName" : "Γρεβενά, Κοζάνη",
    "nameAscii" : "Grebena, Kozani",
    "nameHtml" : "&#x0393;&#x03C1;&#x03B5;&#x03B2;&#x03B5;&#x03BD;&#x03AC;, &#x039A;&#x03BF;&#x03B6;&#x03AC;&#x03BD;&#x03B7;"
  },
  "EL542": {
    "nameLatin" : "Thesprotia",
    "nutsName" : "Θεσπρωτία",
    "nameAscii" : "Thesprotia",
    "nameHtml" : "&#x0398;&#x03B5;&#x03C3;&#x03C0;&#x03C1;&#x03C9;&#x03C4;&#x03AF;&#x03B1;"
  },
  "EL612": {
    "nameLatin" : "Larisa",
    "nutsName" : "Λάρισα",
    "nameAscii" : "Larisa",
    "nameHtml" : "&#x039B;&#x03AC;&#x03C1;&#x03B9;&#x03C3;&#x03B1;"
  },
  "EL623": {
    "nameLatin" : "Ithaki, Kefallinia",
    "nutsName" : "Ιθάκη, Κεφαλληνία",
    "nameAscii" : "Ithaki, Kefallinia",
    "nameHtml" : "&#x0399;&#x03B8;&#x03AC;&#x03BA;&#x03B7;, &#x039A;&#x03B5;&#x03C6;&#x03B1;&#x03BB;&#x03BB;&#x03B7;&#x03BD;&#x03AF;&#x03B1;"
  },
  "EL631": {
    "nameLatin" : "Aitoloakarnania",
    "nutsName" : "Αιτωλοακαρνανία",
    "nameAscii" : "Aitoloakarnania",
    "nameHtml" : "&#x0391;&#x03B9;&#x03C4;&#x03C9;&#x03BB;&#x03BF;&#x03B1;&#x03BA;&#x03B1;&#x03C1;&#x03BD;&#x03B1;&#x03BD;&#x03AF;&#x03B1;"
  },
  "EL642": {
    "nameLatin" : "Evvoia",
    "nutsName" : "Εύβοια",
    "nameAscii" : "Eiboia",
    "nameHtml" : "&#x0395;&#x03CD;&#x03B2;&#x03BF;&#x03B9;&#x03B1;"
  },
  "EL653": {
    "nameLatin" : "Lakonia, Messinia",
    "nutsName" : "Λακωνία, Μεσσηνία",
    "nameAscii" : "Lakonia, Messinia",
    "nameHtml" : "&#x039B;&#x03B1;&#x03BA;&#x03C9;&#x03BD;&#x03AF;&#x03B1;, &#x039C;&#x03B5;&#x03C3;&#x03C3;&#x03B7;&#x03BD;&#x03AF;&#x03B1;"
  },
  "ES300": {
    "nameLatin" : "Madrid",
    "nutsName" : "Madrid",
    "nameAscii" : "Madrid",
    "nameHtml" : "Madrid"
  },
  "ES411": {
    "nameLatin" : "Ávila",
    "nutsName" : "Ávila",
    "nameAscii" : "Avila",
    "nameHtml" : "&#x00C1;vila"
  },
  "ES416": {
    "nameLatin" : "Segovia",
    "nutsName" : "Segovia",
    "nameAscii" : "Segovia",
    "nameHtml" : "Segovia"
  },
  "ES421": {
    "nameLatin" : "Albacete",
    "nutsName" : "Albacete",
    "nameAscii" : "Albacete",
    "nameHtml" : "Albacete"
  },
  "ES512": {
    "nameLatin" : "Girona",
    "nutsName" : "Girona",
    "nameAscii" : "Girona",
    "nameHtml" : "Girona"
  },
  "ES521": {
    "nameLatin" : "Alicante / Alacant",
    "nutsName" : "Alicante / Alacant",
    "nameAscii" : "Alicante / Alacant",
    "nameHtml" : "Alicante / Alacant"
  },
  "ES531": {
    "nameLatin" : "Eivissa y Formentera",
    "nutsName" : "Eivissa y Formentera",
    "nameAscii" : "Eivissa Y Formentera",
    "nameHtml" : "Eivissa Y Formentera"
  },
  "ES616": {
    "nameLatin" : "Jaén",
    "nutsName" : "Jaén",
    "nameAscii" : "Jaen",
    "nameHtml" : "Ja&#x00E9;n"
  },
  "ES707": {
    "nameLatin" : "La Palma",
    "nutsName" : "La Palma",
    "nameAscii" : "La Palma",
    "nameHtml" : "La Palma"
  },
  "FI1C3": {
    "nameLatin" : "Päijät-Häme",
    "nutsName" : "Päijät-Häme",
    "nameAscii" : "Paijat-Hame",
    "nameHtml" : "P&#x00E4;ij&#x00E4;t-H&#x00E4;me"
  },
  "FR263": {
    "nameLatin" : "Saône-et-Loire",
    "nutsName" : "Saône-et-Loire",
    "nameAscii" : "Saone-et-Loire",
    "nameHtml" : "Sa&#x00F4;ne-et-Loire"
  },
  "FR411": {
    "nameLatin" : "Meurthe-et-Moselle",
    "nutsName" : "Meurthe-et-Moselle",
    "nameAscii" : "Meurthe-et-Moselle",
    "nameHtml" : "Meurthe-et-Moselle"
  },
  "FR433": {
    "nameLatin" : "Haute-Saône",
    "nutsName" : "Haute-Saône",
    "nameAscii" : "Haute-Saone",
    "nameHtml" : "Haute-Sa&#x00F4;ne"
  },
  "FR512": {
    "nameLatin" : "Maine-et-Loire",
    "nutsName" : "Maine-et-Loire",
    "nameAscii" : "Maine-et-Loire",
    "nameHtml" : "Maine-et-Loire"
  },
  "FR522": {
    "nameLatin" : "Finistère",
    "nutsName" : "Finistère",
    "nameAscii" : "Finistere",
    "nameHtml" : "Finist&#x00E8;re"
  },
  "FR533": {
    "nameLatin" : "Deux-Sèvres",
    "nutsName" : "Deux-Sèvres",
    "nameAscii" : "Deux-Sevres",
    "nameHtml" : "Deux-S&#x00E8;vres"
  },
  "FR614": {
    "nameLatin" : "Lot-et-Garonne",
    "nutsName" : "Lot-et-Garonne",
    "nameAscii" : "Lot-et-Garonne",
    "nameHtml" : "Lot-et-Garonne"
  },
  "FR622": {
    "nameLatin" : "Aveyron",
    "nutsName" : "Aveyron",
    "nameAscii" : "Aveyron",
    "nameHtml" : "Aveyron"
  },
  "FR626": {
    "nameLatin" : "Hautes-Pyrénées",
    "nutsName" : "Hautes-Pyrénées",
    "nameAscii" : "Hautes-Pyrenees",
    "nameHtml" : "Hautes-Pyr&#x00E9;n&#x00E9;es"
  },
  "FR712": {
    "nameLatin" : "Ardèche",
    "nutsName" : "Ardèche",
    "nameAscii" : "Ardeche",
    "nameHtml" : "Ard&#x00E8;che"
  },
  "FR718": {
    "nameLatin" : "Haute-Savoie",
    "nutsName" : "Haute-Savoie",
    "nameAscii" : "Haute-Savoie",
    "nameHtml" : "Haute-Savoie"
  },
  "HR034": {
    "nameLatin" : "Šibensko-kninska županija",
    "nutsName" : "Šibensko-kninska županija",
    "nameAscii" : "Sibensko-Kninska Zupanija",
    "nameHtml" : "&#x0160;ibensko-Kninska &#x017D;upanija"
  },
  "HR041": {
    "nameLatin" : "Grad Zagreb",
    "nutsName" : "Grad Zagreb",
    "nameAscii" : "Grad Zagreb",
    "nameHtml" : "Grad Zagreb"
  },
  "HR044": {
    "nameLatin" : "Varaždinska županija",
    "nutsName" : "Varaždinska županija",
    "nameAscii" : "Varazdinska Zupanija",
    "nameHtml" : "Vara&#x017E;dinska &#x017D;upanija"
  },
  "HR048": {
    "nameLatin" : "Viroviticko-podravska županija",
    "nutsName" : "Viroviticko-podravska županija",
    "nameAscii" : "Viroviticko-Podravska Zupanija",
    "nameHtml" : "Viroviticko-Podravska &#x017D;upanija"
  },
  "HR04C": {
    "nameLatin" : "Vukovarsko-srijemska županija",
    "nutsName" : "Vukovarsko-srijemska županija",
    "nameAscii" : "Vukovarsko-Srijemska Zupanija",
    "nameHtml" : "Vukovarsko-Srijemska &#x017D;upanija"
  },
  "HU212": {
    "nameLatin" : "Komárom-Esztergom",
    "nutsName" : "Komárom-Esztergom",
    "nameAscii" : "Komarom-Esztergom",
    "nameHtml" : "Kom&#x00E1;rom-Esztergom"
  },
  "HU311": {
    "nameLatin" : "Borsod-Abaúj-Zemplén",
    "nutsName" : "Borsod-Abaúj-Zemplén",
    "nameAscii" : "Borsod-Abauj-Zemplen",
    "nameHtml" : "Borsod-Aba&#x00FA;j-Zempl&#x00E9;n"
  },
  "HU323": {
    "nameLatin" : "Szabolcs-Szatmár-Bereg",
    "nutsName" : "Szabolcs-Szatmár-Bereg",
    "nameAscii" : "Szabolcs-Szatmar-Bereg",
    "nameHtml" : "Szabolcs-Szatm&#x00E1;r-Bereg"
  },
  "IE013": {
    "nameLatin" : "West",
    "nutsName" : "West",
    "nameAscii" : "West",
    "nameHtml" : "West"
  },
  "IE022": {
    "nameLatin" : "Mid-East",
    "nutsName" : "Mid-East",
    "nameAscii" : "Mid-East",
    "nameHtml" : "Mid-East"
  },
  "ITF48": {
    "nameLatin" : "Barletta-Andria-Trani",
    "nutsName" : "Barletta-Andria-Trani",
    "nameAscii" : "Barletta-Andria-Trani",
    "nameHtml" : "Barletta-Andria-Trani"
  },
  "ITG11": {
    "nameLatin" : "Trapani",
    "nutsName" : "Trapani",
    "nameAscii" : "Trapani",
    "nameHtml" : "Trapani"
  },
  "ITG16": {
    "nameLatin" : "Enna",
    "nutsName" : "Enna",
    "nameAscii" : "Enna",
    "nameHtml" : "Enna"
  },
  "ITG2A": {
    "nameLatin" : "Ogliastra",
    "nutsName" : "Ogliastra",
    "nameAscii" : "Ogliastra",
    "nameHtml" : "Ogliastra"
  },
  "ITH43": {
    "nameLatin" : "Gorizia",
    "nutsName" : "Gorizia",
    "nameAscii" : "Gorizia",
    "nameHtml" : "Gorizia"
  },
  "ITH53": {
    "nameLatin" : "Reggio nell'Emilia",
    "nutsName" : "Reggio nell'Emilia",
    "nameAscii" : "Reggio Nell'Emilia",
    "nameHtml" : "Reggio Nell'Emilia"
  },
  "ITI11": {
    "nameLatin" : "Massa-Carrara",
    "nutsName" : "Massa-Carrara",
    "nameAscii" : "Massa-Carrara",
    "nameHtml" : "Massa-Carrara"
  },
  "ITI21": {
    "nameLatin" : "Perugia",
    "nutsName" : "Perugia",
    "nameAscii" : "Perugia",
    "nameHtml" : "Perugia"
  },
  "LV009": {
    "nameLatin" : "Zemgale",
    "nutsName" : "Zemgale",
    "nameAscii" : "Zemgale",
    "nameHtml" : "Zemgale"
  },
  "NL113": {
    "nameLatin" : "Overig Groningen",
    "nutsName" : "Overig Groningen",
    "nameAscii" : "Overig Groningen",
    "nameHtml" : "Overig Groningen"
  },
  "NL131": {
    "nameLatin" : "Noord-Drenthe",
    "nutsName" : "Noord-Drenthe",
    "nameAscii" : "Noord-Drenthe",
    "nameHtml" : "Noord-Drenthe"
  },
  "NL211": {
    "nameLatin" : "Noord-Overijssel",
    "nutsName" : "Noord-Overijssel",
    "nameAscii" : "Noord-Overijssel",
    "nameHtml" : "Noord-Overijssel"
  },
  "NL226": {
    "nameLatin" : "Arnhem/Nijmegen",
    "nutsName" : "Arnhem/Nijmegen",
    "nameAscii" : "Arnhem/Nijmegen",
    "nameHtml" : "Arnhem/Nijmegen"
  },
  "NL321": {
    "nameLatin" : "Kop van Noord-Holland",
    "nutsName" : "Kop van Noord-Holland",
    "nameAscii" : "Kop Van Noord-Holland",
    "nameHtml" : "Kop Van Noord-Holland"
  },
  "NL337": {
    "nameLatin" : "Agglomeratie Leiden en Bollenstreek",
    "nutsName" : "Agglomeratie Leiden en Bollenstreek",
    "nameAscii" : "Agglomeratie Leiden en Bollenstreek",
    "nameHtml" : "Agglomeratie Leiden en Bollenstreek"
  },
  "NO061": {
    "nameLatin" : "Sør-Trøndelag",
    "nutsName" : "Sør-Trøndelag",
    "nameAscii" : "Sor-Trondelag",
    "nameHtml" : "S&#x00F8;r-Tr&#x00F8;ndelag"
  },
  "PL113": {
    "nameLatin" : "Miasto Lódz",
    "nutsName" : "Miasto Lódz",
    "nameAscii" : "Miasto Lodz",
    "nameHtml" : "Miasto L&#x00F3;dz"
  },
  "PL127": {
    "nameLatin" : "Miasto Warszawa",
    "nutsName" : "Miasto Warszawa",
    "nameAscii" : "Miasto Warszawa",
    "nameHtml" : "Miasto Warszawa"
  },
  "PL12E": {
    "nameLatin" : "Siedlecki",
    "nutsName" : "Siedlecki",
    "nameAscii" : "Siedlecki",
    "nameHtml" : "Siedlecki"
  },
  "PL213": {
    "nameLatin" : "Miasto Kraków",
    "nutsName" : "Miasto Kraków",
    "nameAscii" : "Miasto Krakow",
    "nameHtml" : "Miasto Krak&#x00F3;w"
  },
  "PL227": {
    "nameLatin" : "Rybnicki",
    "nutsName" : "Rybnicki",
    "nameAscii" : "Rybnicki",
    "nameHtml" : "Rybnicki"
  },
  "PL323": {
    "nameLatin" : "Krosnienski",
    "nutsName" : "Krosnienski",
    "nameAscii" : "Krosnienski",
    "nameHtml" : "Krosnienski"
  },
  "PL332": {
    "nameLatin" : "Sandomiersko-jedrzejowski",
    "nutsName" : "Sandomiersko-jedrzejowski",
    "nameAscii" : "Sandomiersko-jedrzejowski",
    "nameHtml" : "Sandomiersko-jedrzejowski"
  },
  "PL416": {
    "nameLatin" : "Kaliski",
    "nutsName" : "Kaliski",
    "nameAscii" : "Kaliski",
    "nameHtml" : "Kaliski"
  },
  "PL424": {
    "nameLatin" : "Miasto Szczecin",
    "nutsName" : "Miasto Szczecin",
    "nameAscii" : "Miasto Szczecin",
    "nameHtml" : "Miasto Szczecin"
  },
  "PL432": {
    "nameLatin" : "Zielonogórski",
    "nutsName" : "Zielonogórski",
    "nameAscii" : "Zielonogorski",
    "nameHtml" : "Zielonog&#x00F3;rski"
  },
  "PL516": {
    "nameLatin" : "Legnicko-Glogowski",
    "nutsName" : "Legnicko-Glogowski",
    "nameAscii" : "Legnicko-Glogowski",
    "nameHtml" : "Legnicko-Glogowski"
  },
  "PT16E": {
    "nameLatin" : "Região de Coimbra",
    "nutsName" : "Região de Coimbra",
    "nameAscii" : "Regiao de Coimbra",
    "nameHtml" : "Regi&#x00E3;o de Coimbra"
  },
  "PT16J": {
    "nameLatin" : "Beiras e Serra da Estrela",
    "nutsName" : "Beiras e Serra da Estrela",
    "nameAscii" : "Beiras e Serra Da Estrela",
    "nameHtml" : "Beiras e Serra Da Estrela"
  },
  "PT185": {
    "nameLatin" : "Lezíria do Tejo",
    "nutsName" : "Lezíria do Tejo",
    "nameAscii" : "Leziria do Tejo",
    "nameHtml" : "Lez&#x00ED;ria do Tejo"
  },
  "PT300": {
    "nameLatin" : "Região Autónoma da Madeira",
    "nutsName" : "Região Autónoma da Madeira",
    "nameAscii" : "Regiao Autonoma da Madeira",
    "nameHtml" : "Regi&#x00E3;o Aut&#x00F3;noma da Madeira"
  },
  "RO211": {
    "nameLatin" : "Bacau",
    "nutsName" : "Bacau",
    "nameAscii" : "Bacau",
    "nameHtml" : "Bacau"
  },
  "RO226": {
    "nameLatin" : "Vrancea",
    "nutsName" : "Vrancea",
    "nameAscii" : "Vrancea",
    "nameHtml" : "Vrancea"
  },
  "RO312": {
    "nameLatin" : "Calarasi",
    "nutsName" : "Calarasi",
    "nameAscii" : "Calarasi",
    "nameHtml" : "Calarasi"
  },
  "RO317": {
    "nameLatin" : "Teleorman",
    "nutsName" : "Teleorman",
    "nameAscii" : "Teleorman",
    "nameHtml" : "Teleorman"
  },
  "SE231": {
    "nameLatin" : "Hallands län",
    "nutsName" : "Hallands län",
    "nameAscii" : "Hallands lan",
    "nameHtml" : "Hallands l&#x00E4;n"
  },
  "SE311": {
    "nameLatin" : "Värmlands län",
    "nutsName" : "Värmlands län",
    "nameAscii" : "Varmlands lan",
    "nameHtml" : "V&#x00E4;rmlands l&#x00E4;n"
  },
  "SE321": {
    "nameLatin" : "Västernorrlands län",
    "nutsName" : "Västernorrlands län",
    "nameAscii" : "Vasternorrlands lan",
    "nameHtml" : "V&#x00E4;sternorrlands l&#x00E4;n"
  },
  "SI037": {
    "nameLatin" : "Jugovzhodna Slovenija",
    "nutsName" : "Jugovzhodna Slovenija",
    "nameAscii" : "Jugovzhodna Slovenija",
    "nameHtml" : "Jugovzhodna Slovenija"
  },
  "SK022": {
    "nameLatin" : "Trenciansky kraj",
    "nutsName" : "Trenciansky kraj",
    "nameAscii" : "Trenciansky kraj",
    "nameHtml" : "Trenciansky kraj"
  },
  "SK032": {
    "nameLatin" : "Banskobystrický kraj",
    "nutsName" : "Banskobystrický kraj",
    "nameAscii" : "Banskobystricky kraj",
    "nameHtml" : "Banskobystrick&#x00FD; kraj"
  },
  "UKC21": {
    "nameLatin" : "Northumberland",
    "nutsName" : "Northumberland",
    "nameAscii" : "Northumberland",
    "nameHtml" : "Northumberland"
  },
  "UKD12": {
    "nameLatin" : "East Cumbria",
    "nutsName" : "East Cumbria",
    "nameAscii" : "East Cumbria",
    "nameHtml" : "East Cumbria"
  },
  "UKD35": {
    "nameLatin" : "Greater Manchester South East",
    "nutsName" : "Greater Manchester South East",
    "nameAscii" : "Greater Manchester South East",
    "nameHtml" : "Greater Manchester South East"
  },
  "UKD46": {
    "nameLatin" : "East Lancashire",
    "nutsName" : "East Lancashire",
    "nameAscii" : "East Lancashire",
    "nameHtml" : "East Lancashire"
  },
  "UKE41": {
    "nameLatin" : "Bradford",
    "nutsName" : "Bradford",
    "nameAscii" : "Bradford",
    "nameHtml" : "Bradford"
  },
  "UKF15": {
    "nameLatin" : "North Nottinghamshire",
    "nutsName" : "North Nottinghamshire",
    "nameAscii" : "North Nottinghamshire",
    "nameHtml" : "North Nottinghamshire"
  },
  "UKF24": {
    "nameLatin" : "West Northamptonshire",
    "nutsName" : "West Northamptonshire",
    "nameAscii" : "West Northamptonshire",
    "nameHtml" : "West Northamptonshire"
  },
  "UKG39": {
    "nameLatin" : "Wolverhampton",
    "nutsName" : "Wolverhampton",
    "nameAscii" : "Wolverhampton",
    "nameHtml" : "Wolverhampton"
  },
  "UKH15": {
    "nameLatin" : "Norwich & East Norfolk",
    "nutsName" : "Norwich & East Norfolk",
    "nameAscii" : "Norwich & East Norfolk",
    "nameHtml" : "Norwich & East Norfolk"
  },
  "UKH24": {
    "nameLatin" : "Bedford",
    "nutsName" : "Bedford",
    "nameAscii" : "Bedford",
    "nameHtml" : "Bedford"
  },
  "UKH32": {
    "nameLatin" : "Thurrock",
    "nutsName" : "Thurrock",
    "nameAscii" : "Thurrock",
    "nameHtml" : "Thurrock"
  },
  "UKH36": {
    "nameLatin" : "Heart of Essex",
    "nutsName" : "Heart of Essex",
    "nameAscii" : "Heart of Essex",
    "nameHtml" : "Heart of Essex"
  },
  "UKI32": {
    "nameLatin" : "Westminster",
    "nutsName" : "Westminster",
    "nameAscii" : "Westminster",
    "nameHtml" : "Westminster"
  },
  "UKI75": {
    "nameLatin" : "Hounslow & Richmond upon Thames",
    "nutsName" : "Hounslow & Richmond upon Thames",
    "nameAscii" : "Hounslow & Richmond Upon Thames",
    "nameHtml" : "Hounslow & Richmond Upon Thames"
  },
  "UKJ21": {
    "nameLatin" : "Brighton and Hove",
    "nutsName" : "Brighton and Hove",
    "nameAscii" : "Brighton and Hove",
    "nameHtml" : "Brighton and Hove"
  },
  "UKJ28": {
    "nameLatin" : "West Sussex (North East)",
    "nutsName" : "West Sussex (North East)",
    "nameAscii" : "West Sussex (North East)",
    "nameHtml" : "West Sussex (North East)"
  },
  "UKJ43": {
    "nameLatin" : "Kent Thames Gateway",
    "nutsName" : "Kent Thames Gateway",
    "nameAscii" : "Kent Thames Gateway",
    "nameHtml" : "Kent Thames Gateway"
  },
  "UKK30": {
    "nameLatin" : "Cornwall and Isles of Scilly",
    "nutsName" : "Cornwall and Isles of Scilly",
    "nameAscii" : "Cornwall and Isles of Scilly",
    "nameHtml" : "Cornwall and Isles of Scilly"
  },
  "UKL16": {
    "nameLatin" : "Gwent Valleys",
    "nutsName" : "Gwent Valleys",
    "nameAscii" : "Gwent Valleys",
    "nameHtml" : "Gwent Valleys"
  },
  "UKL21": {
    "nameLatin" : "Monmouthshire and Newport",
    "nutsName" : "Monmouthshire and Newport",
    "nameAscii" : "Monmouthshire and Newport",
    "nameHtml" : "Monmouthshire and Newport"
  },
  "UKM22": {
    "nameLatin" : "Clackmannanshire and Fife",
    "nutsName" : "Clackmannanshire and Fife",
    "nameAscii" : "Clackmannanshire and Fife",
    "nameHtml" : "Clackmannanshire and Fife"
  },
  "UKM33": {
    "nameLatin" : "East Ayrshire and North Ayrshire mainland",
    "nutsName" : "East Ayrshire and North Ayrshire mainland",
    "nameAscii" : "East Ayrshire and North Ayrshire Mainland",
    "nameHtml" : "East Ayrshire and North Ayrshire Mainland"
  },
  "UKM61": {
    "nameLatin" : "Caithness & Sutherland and Ross & Cromarty",
    "nutsName" : "Caithness & Sutherland and Ross & Cromarty",
    "nameAscii" : "Caithness & Sutherland and Ross & Cromarty",
    "nameHtml" : "Caithness & Sutherland and Ross & Cromarty"
  },
  "UKN05": {
    "nameLatin" : "West and South of Northern Ireland",
    "nutsName" : "West and South of Northern Ireland",
    "nameAscii" : "West and South of Northern Ireland",
    "nameHtml" : "West and South of Northern Ireland"
  }
};

AppData.PopulateArraysAndDictionaries = function() {

  let indicators = [];
  let domains = [];
  let groups = [];

  for (let name in AppData.indicatorMetadata) {
    if (AppData.indicatorMetadata.hasOwnProperty(name)) {

      let indicator = {
        name: name,
        domain: AppData.indicatorMetadata[name].domain,
        domainSort: AppData.indicatorMetadata[name].domainSort,
        group: AppData.indicatorMetadata[name].group,
        groupSort: AppData.indicatorMetadata[name].groupSort
      };

      indicators.push(indicator);

    }
  }

  indicators.sort(function(item1, item2) {
    if (item1.domainSort < item2.domainSort) {
      return -1;
    }
    if (item1.domainSort > item2.domainSort) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < indicators.length; i++) {
    let indicator = indicators[i];

    if (domains.length > 0) {
      if (domains.findIndex(d => d.name === indicator.domain) === -1) {
        domains.push({ name: indicator.domain, isOverviewVisible: true, isDetailsVisible: true });
      }
    }
    else {
      domains.push({ name: indicator.domain, isOverviewVisible: true, isDetailsVisible: true });
    }

    AppData.domainSortedIndicators.push(indicator.name);

    if (!AppData.domainDictionaryIndicators.hasOwnProperty(indicator.domain)) {
      AppData.domainDictionaryIndicators[indicator.domain] = [];
    }
    
    // TODO: RESIN - It is better to remove the isValid here and in the data dictionary
    if (AppData.indicatorMetadata[indicator.name].isValid) {
      AppData.domainDictionaryIndicators[indicator.domain].push(AppData.indicatorMetadata[indicator.name]);
    }
  }

  AppData.domains = domains;

  indicators.sort(function(item1, item2) {
    if (item1.groupSort < item2.groupSort) {
      return -1;
    }
    if (item1.groupSort > item2.groupSort) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < indicators.length; i++) {
    let indicator = indicators[i];

    if (groups.findIndex(g => g === indicator.group) === -1) {
      groups.push({ name: indicator.group, isOverviewVisible: true, isDetailsVisible: true });
    }

    if (groups.length > 0) {
      if (groups.findIndex(d => d.name === indicator.group) === -1) {
        groups.push({ name: indicator.group, isOverviewVisible: true, isDetailsVisible: true });
      }
    }
    else {
      groups.push({ name: indicator.group, isOverviewVisible: true, isDetailsVisible: true });
    }

    AppData.groupSortedIndicators.push(indicator.name);

    if (!AppData.groupDictionaryIndicators.hasOwnProperty(indicator.group)) {
      AppData.groupDictionaryIndicators[indicator.group] = [];
    }

    // TODO: RESIN - It is better to remove the isValid here and in the data dictionary
    if (AppData.indicatorMetadata[indicator.name].isValid) {
      AppData.groupDictionaryIndicators[indicator.group].push(AppData.indicatorMetadata[indicator.name]);
    }
  }

  AppData.groups = groups;

};

AppData.PopulateArraysAndDictionaries();

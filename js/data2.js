
var AppData = AppData || {};


AppData.indicatorMetadata = {
  "I001": {
    "name": "I001",
    "description": "Mean temperature (RCP 8.5)",
    "unit": "°C",
    "details": "Mean temperature is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference in daily mean temperature between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Projected change in daily mean temperature is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can be used to enhance understanding of how the climate of the NUTS3 area is projected to change over the coming decades.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 2,
    "group": "Heat Stress",
    "groupsort": 2,
    "type": "double",
    "isvalid": true
  },
  "I002": {
    "name": "I002",
    "description": "Minimum temperature (RCP 8.5)",
    "unit": "°C",
    "details": "Minimum temperature is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference in minimum temperature between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Projected change in minimum temperature is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can be considered alongside other low temperature related indicators (e.g. frost days and ice days) to demonstrate how low temperature related hazards may evolve in the NUTS3 area over the coming decades.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 12,
    "group": "Extreme cold",
    "groupsort": 12,
    "type": "double",
    "isvalid": true
  },
  "I003": {
    "name": "I003",
    "description": "Maximum temperature (RCP 8.5)",
    "unit": "°C",
    "details": "Maximum temperature is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference in maximum temperature between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Projected change in maximum temperature is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can be considered alongside other high temperature related indicators (e.g. heat wave days) to demonstrate how high temperature related hazards may evolve in the NUTS3 area over the coming decades.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 4,
    "group": "Heat Stress",
    "groupsort": 4,
    "type": "double",
    "isvalid": true
  },
  "I004": {
    "name": "I004",
    "description": "Frost days (RCP 8.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of days with a minimum temperature of less than 0°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). The 0°C temperature threshold for frost days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of frost days is a potentially significant issue for the NUTS3 area. The number of frost days is decreasing across Europe, and the impacts of this shift may be positive or negative depending on the location being considered and related factors including the nature of dominant industries and land uses.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 14,
    "group": "Extreme cold",
    "groupsort": 14,
    "type": "int",
    "isvalid": true
  },
  "I005": {
    "name": "I005",
    "description": "Summer days (RCP 8.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of days with a maximum temperature more than 25°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). The 25°C temperature threshold for summer days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The supporting statistical data (the Z-Score) provides further information on this indicator in the context of the NUTS3 area. Although the summer days threshold of 25°C does not pose a threat to the majority of people and infrastructure, it can be considered alongside other heat-related indicators to better understand projected changes in temperature and related hazards in the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 6,
    "group": "Heat Stress",
    "groupsort": 6,
    "type": "int",
    "isvalid": true
  },
  "I006": {
    "name": "I006",
    "description": "Tropical nights (RCP 8.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of nights where the minimum temperature does not drop below 20°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). The 20°C temperature threshold for tropical nights is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of tropical nights is a potentially significant issue for the NUTS3 area. The tropical nights indicator is used by the <a href=\"https://www.eea.europa.eu/publications/urban-adaptation-to-climate-change\" target=\"_cf\">European Environment Agency</a> who note that their occurrence is a crucial factor influencing the degree of health impacts associated with high temperatures in urban areas. The level of risk to people in the NUTS3 area from tropical nights (and associated heat wave days) will depend on factors including the proportion of elderly and young people in the population, groups who are particularly susceptible to harm from high temperatures. Indicator data on these factors is available within the typology portal.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 8,
    "group": "Heat Stress",
    "groupsort": 8,
    "type": "int",
    "isvalid": true
  },
  "I007": {
    "name": "I007",
    "description": "Ice days (RCP 8.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of days with a maximum temperature of less than 0°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). The 0°C temperature threshold for ice days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of ice days is a potentially significant issue for the NUTS3 area. The number of ice days is decreasing across Europe, and the impacts of this shift may be positive or negative depending on the location being considered and related factors including the nature of dominant industries and land uses.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 16,
    "group": "Extreme cold",
    "groupsort": 16,
    "type": "int",
    "isvalid": true
  },
  "I008": {
    "name": "I008",
    "description": "Heat waves (RCP 8.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of days with a maximum temperature of more than 35°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). There is no universal standard definition for a heat wave, although they are generally regarded as periods of extremely high temperature that exceeds a certain threshold (which varies depending on location and sector being considered) for a set number of days. Heat waves can negatively impact on people, ecosystems and infrastructure. The severity of impacts will depend on factors including the degree to which they are exposed to high temperatures and their vulnerability to this hazard. Vulnerability to heat waves is influenced by factors including the proportion of elderly and young people in the population and the extent of green space cover in urban areas. Indicator data on both of these factors is available within the typology portal. The severity and duration of the heat wave will also influence levels of associated risks. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of heat waves is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 10,
    "group": "Heat Stress",
    "groupsort": 10,
    "type": "int",
    "isvalid": true
  },
  "I009": {
    "name": "I009",
    "description": "Total wet-day precipitation (RCP 8.5)",
    "unit": "mm",
    "details": "Total wet-day precipitation is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the cumulated precipitation for days with precipitation greater than or equal to 1mm. The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Projected change in total wet day precipitation is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can enhance understanding of how the climate of the NUTS3 area is projected to change over the coming decades.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 18,
    "group": "Fluvial and Pluvial Flooding",
    "groupsort": 38,
    "type": "int",
    "isvalid": true
  },
  "I010": {
    "name": "I010",
    "description": "Consecutive dry days (RCP 8.5)",
    "unit": "Number of days",
    "details": "Consecutive dry days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of consecutive dry days with precipitation less than 1mm. The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of consecutive dry days is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 26,
    "group": "Drought",
    "groupsort": 18,
    "type": "int",
    "isvalid": true
  },
  "I011": {
    "name": "I011",
    "description": "Consecutive wet days (RCP 8.5)",
    "unit": "Number of days",
    "details": "Consecutive wet days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of consecutive wet days with precipitation greater than or equal to 1mm. The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Projected change in consecutive wet days is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can enhance understanding of how the climate of the NUTS3 area is projected to change over the coming decades. Considering this indicator alongside other related indicators can support this process. For example, where consecutive wet days are projected to increase, in addition to increases in heavy and very heavy precipitation days, this indicates that flood hazards may become more common within the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 20,
    "group": "Fluvial and Pluvial Flooding",
    "groupsort": 40,
    "type": "int",
    "isvalid": true
  },
  "I012": {
    "name": "I012",
    "description": "Heavy precipitation days (RCP 8.5)",
    "unit": "Number of days",
    "details": "Heavy precipitation days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of days with precipitation greater than or equal to 10mm. The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Where the frequency of heavy precipitation days is projected to increase, this indicates that flood hazards may also increase (although flooding is driven by multiple other factors including land use change). The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of heavy precipitation days is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 22,
    "group": "Fluvial and Pluvial Flooding",
    "groupsort": 42,
    "type": "int",
    "isvalid": true
  },
  "I013": {
    "name": "I013",
    "description": "Very heavy precipitation days (RCP 8.5)",
    "unit": "Number of days",
    "details": "Very heavy precipitation days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of days with precipitation greater than or equal to 20mm. The future projection is developed for a high greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">8.5 scenario</a>). Where the frequency of very heavy precipitation days is projected to increase, this indicates that flood hazards may also increase (although flooding is driven by multiple other factors including land use change). The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of very heavy precipitation days is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP8.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 24,
    "group": "Fluvial and Pluvial Flooding",
    "groupsort": 44,
    "type": "int",
    "isvalid": true
  },
  "I014": {
    "name": "I014",
    "description": "Coastal hazard",
    "unit": "%",
    "details": "% of total length of NUTS3 unit coastline in km that is exposed to a 1 in 100 year coastal storm surge and exposed to 1 meter sea level rise.",
    "source": "1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 28,
    "group": "Coastal Flooding",
    "groupsort": 20,
    "type": "double",
    "isvalid": true
  },
  "I015": {
    "name": "I015",
    "description": "Drought hazard",
    "unit": "%",
    "details": "To be completed",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 29,
    "group": "Drought",
    "groupsort": 19,
    "type": "double",
    "isvalid": true
  },
  "I016": {
    "name": "I016",
    "description": "Wildfire hazard",
    "unit": "%",
    "details": "% of total area of the NUTS3 unit covered by burning.",
    "source": "Use Corine land cover data 2012 to identify the percentage of land in each NUTS 3 area that is classified as ‘burnt areas’.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 27,
    "group": "Other",
    "groupsort": 56,
    "type": "double",
    "isvalid": true
  },
  "I017": {
    "name": "I017",
    "description": "Length of major road network in NUTS3 unit.",
    "unit": "Km",
    "details": "This indicator shows the length of major road network in NUTS3 unit.  Major roads are defined as ‘Highways’ and include ‘motorway’, ‘trunk’, ‘primary’, ‘secondary’ and ‘tertiary’ segments of the network. Redundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. Where road length is higher than average in a NUTS 3 area, this may signal that there is redundancy in the road network and alternative routes can be found.  This is also important from an emergency management point of view as during an extreme event, alternative means of providing key services and moving people may be found.\n",
    "source": "The road network was sourced from open street map (2017). Major roads are defined as ‘Highways’ and include ‘motorway’, ‘trunk’, ‘primary’, ‘secondary’ and ‘tertiary’ segments of the network.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 67,
    "group": "Other",
    "groupsort": 64,
    "type": "double",
    "isvalid": true
  },
  "I018": {
    "name": "I018",
    "description": "Length of railway network in NUTS3 unit.",
    "unit": "Km",
    "details": "Length of railway network in NUTS3 unit. The rail network was sourced from open street map (2017) and includes standard gauge rail, subways, trams and light rail segments of the network.\nRedundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. Where rail length is higher than average in a NUTS 3 area, this may signal that there is redundancy in the rail network and alternative routes can be found.  This is also important from an emergency management point of view as during an extreme event, alternative means of providing key services and moving people may be found.\n",
    "source": "The rail network was sourced from open street map (2017) and includes standard gauge rail, subways, trams and light rail segments of the network.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 68,
    "group": "Other",
    "groupsort": 65,
    "type": "double",
    "isvalid": true
  },
  "I019": {
    "name": "I019",
    "description": "Density of major road intersections per km2 of the NUTS3 unit.",
    "unit": "Ratio",
    "details": "This indicator shows the density of major road intersections per km2 of the NUTS3 unit. Redundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. Where there are more road intersections than the EU average  in a NUTS 3 area, this may signal that there is redundancy in the road network and alternative routes can be found.  This is also important from an emergency management point of view as during an extreme event, alternative means of providing key services and moving people may be found.",
    "source": "Calculated as intersections in ArcGIS Network Analyst using open street map road data (2017).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 69,
    "group": "Other",
    "groupsort": 66,
    "type": "double",
    "isvalid": true
  },
  "I020": {
    "name": "I020",
    "description": "Density of transport nodes per km2 of the NUTS3 unit.",
    "unit": "Ratio",
    "details": "This indicator shows the density of transport nodes per km2 of the NUTS3 unit. Redundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. Where there are more transport nodes than the EU average  in a NUTS 3 area, this may signal that there is redundancy in the overall transport network and alternative routes/modes of travel can be found.  This is also important from an emergency management point of view as during an extreme event, alternative means of providing key services and moving people may be found.",
    "source": "Transport nodes were sourced from open street map (2017) and excluded taxis, airports and ports.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 70,
    "group": "Other",
    "groupsort": 67,
    "type": "double",
    "isvalid": true
  },
  "I021": {
    "name": "I021",
    "description": "Number of airports per head of population in the NUTS3 unit.",
    "unit": "Number of airports per 1000 head of population",
    "details": "This indicator shows the number of airports per head of population in the NUTS3 unit.  Redundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. Where there are more transport nodes than the EU average  in a NUTS 3 area, this may signal that other airports can help to provide alternative routes/modes of travel.  This is also important from an emergency management point of view as during an extreme event, alternative means of providing key services and moving people may be found. \n",
    "source": "Airport nodes were sourced from the GISCO repository (Eurostat 2013). These were weighted by population data sourced from EUROSTAT (demo_r_d3dens).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 71,
    "group": "Other",
    "groupsort": 68,
    "type": "double",
    "isvalid": true
  },
  "I022": {
    "name": "I022",
    "description": "Number of ports per head of population in the NUTS3 unit.",
    "unit": "Number of ports per 1000 head of population",
    "details": "This indicator shows the number of ports per head of population in the NUTS3 unit. Redundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. Where there are more ports than the EU average  in a NUTS 3 area, this may signal that there is redundancy and alternative routes/methods of moving goods around can be found.  ",
    "source": "Port nodes were sourced from the GISCO repository (Eurostat 2013). These were weighted by population data sourced from EUROSTAT (demo_r_d3dens).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 72,
    "group": "Other",
    "groupsort": 69,
    "type": "double",
    "isvalid": true
  },
  "I023": {
    "name": "I023",
    "description": "Number of hospitals per head of population in the NUTS3 unit.",
    "unit": "Number of hospitals per 1000 head of population",
    "details": "This indicator shows the number of hospitals per head of population in the NUTS3 unit.The ability for the population to access hospitals and other medical units during an extreme weather event is of paramount importance. Where there are lower than average numbers of hospitals per head of the population, this may indicate that an area will experience intense pressure in ensuring that the population receive necessary medical support during, for example, a flood or a heatwave.  ",
    "source": "Hospital locations were sourced from open street map (2017). These were weighted by population data sourced from EUROSTAT (demo_r_d3dens).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 73,
    "group": "Other",
    "groupsort": 70,
    "type": "double",
    "isvalid": true
  },
  "I024": {
    "name": "I024",
    "description": "Power plants per head of population in the NUTS3 unit.",
    "unit": "Power plants per head of population",
    "details": "This indicator shows the power plants per head of population in the NUTS3 unit. Redundancy is an important concept in resilience.  Redundancy demonstrates that there is excess capacity in given system means that during crises, the system may still be able to retain functionality. If there are more powerplants in a NUTS3 area than the EU average, this may mean that alternative ways of providing energy to a given population may be found. ",
    "source": "Power plant facility locations were sourced from Enipedia and does not distinguish between different types of power generation (e.g. coal, renewable). These were weighted by population data sourced from EUROSTAT (demo_r_d3dens).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 74,
    "group": "Other",
    "groupsort": 71,
    "type": "double",
    "isvalid": true
  },
  "I025": {
    "name": "I025",
    "description": "Fixed broadband coverage",
    "unit": "To be completed",
    "details": "This indicator shows fixed broadband coverage. Fixed broadband data has been sourced from Point Topic’s Point Topic’s European Broadband Markets Service ocial media is becoming an increasingly common way of sharing risk information and warnings.  Therefore,  access to decent broadband is important in order to support the adaptive capacity of a given area. There may be more locally specific measures available that will give a greater insight into what this indicator is measuring e.g. % of population with access to a smart phone, and so on. ",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 75,
    "group": "Other",
    "groupsort": 72,
    "type": "double",
    "isvalid": true
  },
  "I026": {
    "name": "I026",
    "description": "Next Generation Access (NGA) - broadband",
    "unit": "To be completed",
    "details": "Next Generation Access (NGA) provision has been sourced from Point Topic’s European Broadband Markets Service  . NGA are access networks which consist wholly or in part of optical elements and which are capable of delivering broadband access services with enhanced characteristics (such as higher throughput) as compared to those provided over already existing copper networks. In most cases NGAs are the result of an upgrade of an already existing copper or co-axial access network .Next Generation Access (NGA) provision has been variable across Europe dependent on a country’s need. Essentially NGA provides the infrastructure to allow superfast broadband speeds of up to 100MB. Increasing population densities, for example, are thought to indicate a need for faster broadband access in the future. Therefore, given the reliance on social media for weather, risk and crisis information, superfast broadband may increase an area’s adaptive capacity. Low NGA provision may indicate that policies should be put in place to prioritise NGA provision in the future. ",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Other",
    "domainsort": 82,
    "group": "Other",
    "groupsort": 73,
    "type": "double",
    "isvalid": true
  },
  "I030": {
    "name": "I030",
    "description": "Population in settlements exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total population of the NUTS3 area living in settlements that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight the specific elements of the population living in settlements that would be affected in the event of a flood. Further, it does not account for flood defences that may protect certain locations. More localised flood risk assessments would therefore be needed to establish which specific locations would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of populations living in settlements to fluvial flooding is a significant issue for the NUTS3 area.",
    "source": "GHSL Population Source 100m resolution / Settlement defined through GHSL Urban Centres data / JRC flood maps 100 year return period.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 32,
    "group": "Fluvial Flooding",
    "groupsort": 29,
    "type": "double",
    "isvalid": true
  },
  "I032": {
    "name": "I032",
    "description": "Road infrastructure exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total length of road infrastructure in the NUTS3 area (major roads and major road intersections) that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight the specific elements of road infrastructure that would be affected in the event of a flood. Further, it does not account for flood defences that may protect certain stretches of road infrastructure. More localised flood risk assessments would therefore be needed to establish which specific infrastructure elements would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to road infrastructure is a significant issue for the NUTS3 area.",
    "source": "The road network was sourced from open street map (2017). Major roads are defined as ‘Highways’ and include ‘motorway’, ‘trunk’, ‘primary’, ‘secondary’ and ‘tertiary’ segments of the network. Calculated as intersections in ArcGIS Network Analyst using open street map road data (2017). The road network was intersected with JRC 1-100 year return period flood maps.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 35,
    "group": "Fluvial Flooding",
    "groupsort": 30,
    "type": "double",
    "isvalid": true
  },
  "I033": {
    "name": "I033",
    "description": "Rail network exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total length of the rail network in the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight the specific elements of the rail network that would be affected in the event of a flood. Further, it does not account for flood defence infrastructure that may protect certain stretches of rail line. More localised flood risk assessments would therefore be needed to establish which specific elements of the rail network would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to the rail network is a significant issue for the NUTS3 area.",
    "source": "The rail network was sourced from open street map (2017) and includes standard gauge rail, subways, trams and light rail segments of the network. The rail network was intersected with JRC 1-100 year return period flood maps.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 36,
    "group": "Fluvial Flooding",
    "groupsort": 31,
    "type": "double",
    "isvalid": true
  },
  "I035": {
    "name": "I035",
    "description": "Transport nodes exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total number of transport nodes in the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. Transport nodes include tram, rail and bus stations, airports and ports. This indicator does not highlight specific transport nodes that would be affected in the event of a flood. Further, it does not account for flood defence infrastructure that may protect certain transport nodes. More localised flood risk assessments would therefore be needed to establish which transport nodes would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to transport nodes is a significant issue for the NUTS3 area.",
    "source": "Transport nodes calculated from Open Street Map (2017) and intersected with JRC 1-100 year return period flood maps.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 41,
    "group": "Fluvial Flooding",
    "groupsort": 32,
    "type": "double",
    "isvalid": true
  },
  "I036": {
    "name": "I036",
    "description": "Airports exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total number of airports in the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight specific airports that would be affected in the event of a flood. Further, it does not account for flood defence infrastructure that may protect certain airports. More localised flood risk assessments would therefore be needed to establish which airports would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to airports is a significant issue for the NUTS3 area.",
    "source": "Airport nodes were sourced from the GISCO repository (Eurostat 2013). The nodes were intersected with JRC 1-100 year return period flood maps.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 44,
    "group": "Fluvial Flooding",
    "groupsort": 33,
    "type": "double",
    "isvalid": true
  },
  "I037": {
    "name": "I037",
    "description": "Ports exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total number of ports in the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight specific ports that would be affected in the event of a flood. Further, it does not account for flood defence infrastructure that may protect certain ports. More localised flood risk assessments would therefore be needed to establish which ports would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to ports is a significant issue for the NUTS3 area.",
    "source": "Port nodes were sourced from the GISCO repository (Eurostat 2013). The nodes were intersected with JRC 1-100 year return period flood maps.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 50,
    "group": "Fluvial Flooding",
    "groupsort": 35,
    "type": "double",
    "isvalid": true
  },
  "I038": {
    "name": "I038",
    "description": "Hospitals exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total number of hospitals in the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight specific hospitals that would be affected in the event of a flood. Further, it does not account for flood defence infrastructure that may protect certain hospitals. More localised flood risk assessments would therefore be needed to establish which hospitals would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to hospitals is a significant issue for the NUTS3 area.",
    "source": "Hospital locations were sourced from open street map (2017). The nodes were intersected with JRC 1-100 year return period flood maps.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 53,
    "group": "Fluvial Flooding",
    "groupsort": 36,
    "type": "double",
    "isvalid": true
  },
  "I039": {
    "name": "I039",
    "description": "Power plants exposed to fluvial flooding",
    "unit": "%",
    "details": "Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. This indicator shows the percentage of the total number of power plants in the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. This indicator does not highlight specific power plants that would be affected in the event of a flood. Further, it does not account for flood defence infrastructure that may protect certain power plants. More localised flood risk assessments would therefore be needed to establish which power plants would be exposed if a 1 in 100 year fluvial flood occurred. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether fluvial flooding to power plants is a significant issue for the NUTS3 area.",
    "source": "Power plant facility locations were sourced from Enipedia and does not distinguish between different types of power generation (e.g. coal, renewable). The nodes were intersected with JRC 1-100 year return period flood maps.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 47,
    "group": "Fluvial Flooding",
    "groupsort": 34,
    "type": "double",
    "isvalid": true
  },
  "I040": {
    "name": "I040",
    "description": "Population in settlements exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the proportion of the total population of the NUTS3 area living in settlements located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific elements of the population living in settlements that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain locations from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific locations would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of populations living in settlements to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "GHSL Population grids / Settlement defined through GHSL Urban Centres data / These were intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 33,
    "group": "Coastal Flooding",
    "groupsort": 21,
    "type": "double",
    "isvalid": true
  },
  "I042": {
    "name": "I042",
    "description": "Road infrastructure exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the proportion of the total length of road infrastructure in the NUTS3 area (major roads and major road intersections) that is located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific elements of the road infrastructure that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain road infrastructure from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific infrastructure elements would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of road infrastructure to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "The road network was sourced from open street map (2017). Major roads are defined as ‘Highways’ and include ‘motorway’, ‘trunk’, ‘primary’, ‘secondary’ and ‘tertiary’ segments of the network. Calculated as intersections in ArcGIS Network Analyst using open street map road data (2017). The road network was intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 37,
    "group": "Coastal Flooding",
    "groupsort": 22,
    "type": "double",
    "isvalid": true
  },
  "I043": {
    "name": "I043",
    "description": "Rail network exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the proportion of the total length of the rail network in the NUTS3 area (major roads and major road intersections) that is located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific elements of the rail network that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain elements of the rail network from coastal hazards. More localised flood risk assessments would therefore be needed to establish which parts of the rail network would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of the rail network to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "The rail network was sourced from open street map (2017) and includes standard gauge rail, subways, trams and light rail segments of the network. The rail network was intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 39,
    "group": "Coastal Flooding",
    "groupsort": 23,
    "type": "double",
    "isvalid": true
  },
  "I045": {
    "name": "I045",
    "description": "Transport nodes exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of transport nodes in the NUTS3 area that are located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. Transport nodes include tram, rail and bus stations, airports and ports. This indicator does not highlight the specific transport nodes that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain transport nodes from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific transport nodes would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of transport nodes to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "Transport nodes were sourced from open street map (2017). The intersections were intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). ections in ArcGIS Network Analyst using open street map road data (2017). The road network was intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 42,
    "group": "Coastal Flooding",
    "groupsort": 24,
    "type": "double",
    "isvalid": true
  },
  "I046": {
    "name": "I046",
    "description": "Airports exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of airports in the NUTS3 area that are located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific airports that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain airports from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific airports would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of airports to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "Airport nodes were sourced from the GISCO repository (Eurostat 2013). The nodes were intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 45,
    "group": "Coastal Flooding",
    "groupsort": 25,
    "type": "double",
    "isvalid": true
  },
  "I047": {
    "name": "I047",
    "description": "Ports exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of ports in the NUTS3 area that are located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific ports that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain ports from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific ports would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of ports to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "Port nodes were sourced from the GISCO repository (Eurostat 2013). The nodes were intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 51,
    "group": "Coastal Flooding",
    "groupsort": 27,
    "type": "double",
    "isvalid": true
  },
  "I048": {
    "name": "I048",
    "description": "Hospitals exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of hospitals in the NUTS3 area that are located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific hospitals that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain hospitals from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific hospitals would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of hospitals to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "Hospital locations were sourced from open street map (2017). The nodes were intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps).  GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 54,
    "group": "Coastal Flooding",
    "groupsort": 28,
    "type": "double",
    "isvalid": true
  },
  "I049": {
    "name": "I049",
    "description": "Power plants exposed to coastal hazard",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of power plants in the NUTS3 area that are located in areas that are potentially exposed to coastal hazards. Coastal hazards include sea level rise (1 metre above current levels) and susceptibility to storm surge. This indicator does not highlight the specific power plants that would be affected should these coastal hazards occur. Further, it does not account for defences that may protect certain power plants from coastal hazards. More localised flood risk assessments would therefore be needed to establish which specific power plants would be exposed in the event of coastal hazards occurring. Nevertheless, this indicator and the supporting statistical data (the Z-Score) can be used to better understand whether the exposure of power plants to coastal hazards is a significant issue for the NUTS3 area.",
    "source": "Power plant facility locations were sourced from Enipedia and does not distinguish between different types of power generation (e.g. coal, renewable). The nodes were intersected with the 1 metre sea level rise inundation area defined by CReSIS (www.cresis.ku.edu/content/research/maps). GTSR (Global Tide and Surge Reanalysis) is an analysis of storm surges and extreme sea-levels based on hydrodynamic modelling (Muis et al, 2016). GTSR covers the entire world's coastline and provides estimates of extreme sea-levels values based on the period 1979-2014. The dataset is based on the application of two global hydrodynamic models: GTSM to simulate storm surges [Verlaan et al., 2015], and FES2012 to simulate tides [Carrere et al. 2012]. Surge levels were modelled by forcing GTSM with with 10 m wind speed and atmospheric pressure from the ERA-Interim climate reanalysis [Dee et al., 2011]. Total water levels are calculated by superimposing tides and surges.  The 1-in-100 year sea level was estimated by fitting a Gumbel extreme value distribution to the annual maxima. The water levels included over 12,000 locations along the coastline defined as a centroid of the DIVA segments database.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 48,
    "group": "Coastal Flooding",
    "groupsort": 26,
    "type": "double",
    "isvalid": true
  },
  "I050": {
    "name": "I050",
    "description": "Population in settlements exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total population of the NUTS3 area living in settlements located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of population in settlements to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 34,
    "group": "Other - Landslide",
    "groupsort": 47,
    "type": "double",
    "isvalid": true
  },
  "I052": {
    "name": "I052",
    "description": "Road infrastructure exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total length of road infrastructure in the NUTS3 area (major roads and major road intersections) that is located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of road infrastructure to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 38,
    "group": "Other - Landslide",
    "groupsort": 48,
    "type": "double",
    "isvalid": true
  },
  "I053": {
    "name": "I053",
    "description": "Rail network exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total length of the rail network in the NUTS3 area that is located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of the rail network to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 40,
    "group": "Other - Landslide",
    "groupsort": 49,
    "type": "double",
    "isvalid": true
  },
  "I055": {
    "name": "I055",
    "description": "Transport nodes exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of transport nodes in the NUTS3 area that are located in areas that are susceptible to landslide hazard. Transport nodes include tram, rail and bus stations, airports and ports. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of transport nodes to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 43,
    "group": "Other - Landslide",
    "groupsort": 50,
    "type": "double",
    "isvalid": true
  },
  "I056": {
    "name": "I056",
    "description": "Airports exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number airports in the NUTS3 area that are located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of airports to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 46,
    "group": "Other - Landslide",
    "groupsort": 51,
    "type": "double",
    "isvalid": true
  },
  "I057": {
    "name": "I057",
    "description": "Ports exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of ports in the NUTS3 area that are located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of ports to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 52,
    "group": "Other - Landslide",
    "groupsort": 53,
    "type": "double",
    "isvalid": true
  },
  "I058": {
    "name": "I058",
    "description": "Hospitals exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of hospitals in the NUTS3 area that are located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of hospitals to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 55,
    "group": "Other - Landslide",
    "groupsort": 54,
    "type": "double",
    "isvalid": true
  },
  "I059": {
    "name": "I059",
    "description": "Power plants exposed to landslide",
    "unit": "%",
    "details": "This indicator shows the percentage of the total number of power plants in the NUTS3 area that are located in areas that are susceptible to landslide hazard. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether exposure of power plants to landslides is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas.",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Exposure",
    "domainsort": 49,
    "group": "Other - Landslide",
    "groupsort": 52,
    "type": "double",
    "isvalid": true
  },
  "I060": {
    "name": "I060",
    "description": "Average population density",
    "unit": "Ratio",
    "details": "Averaged population density for the NUTS3 unit calculated over period 2010-2015.",
    "source": "Population data sourced from Eurostat (demo_r_d3dens). Calculated as total population/area in km2",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainsort": 56,
    "group": "Other",
    "groupsort": 55,
    "type": "double",
    "isvalid": true
  },
  "I061": {
    "name": "I061",
    "description": "Total population living in urban areas /area in km2",
    "unit": "Ratio",
    "details": "Population density measures the concentration of individuals living in a particular spatial unit. Population density may be considered in tandem with hazard indicators relating to temperature and heatwaves as population density (which can be used as a proxy for the density of the built environment) may indicate more intense urban heat island effects (Swart et al. 2012).  On the other hand, where dense urban populations are supported by good infrastructure and resources, their climate resilience may be increased (UCCRN 2011) ",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainsort": 57,
    "group": "Other",
    "groupsort": 57,
    "type": "double",
    "isvalid": true
  },
  "I062": {
    "name": "I062",
    "description": "% of total urban area in NUTS3 unit that is classified as green space (2012 data)",
    "unit": "%",
    "details": "This indicator shows the % of total urban area in NUTS3 unit that is classified as green space (2012 data). There is robust evidence that green spaces can help city’s resilience to the effects of climate change and extreme weather events (Swart et al. 2012).  A lack of green space, as a % of the overall urban area, may indicate that a city is more sensitive to the effects of climate change and extreme weather events as it may lack the absorptive effects of green spaces in a flood, or the evapotranspiration effects of green spaces during a heatwave. Therefore, this indicator should be considered alongside these hazards. In addition, this indicator can also be considered alongside % total change in green space since an existing lack of green space, combined with a decreasing trend, may signal to city planners that more should be done in terms of increasing urban greening.",
    "source": "Corine (2012) green space area as percentage of total urban area (km2). Urban area defined using GHSL Urban Centres.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 77,
    "group": "Other",
    "groupsort": 75,
    "type": "double",
    "isvalid": true
  },
  "I063": {
    "name": "I063",
    "description": "% of total land in the NUTS3 unit that is covered by continuous and/or discontinuous urban fabric (2012 data).",
    "unit": "%",
    "details": "This indicator shows the built up urban area based on CORINE data. This includes continuous urban fabric (more than 80% of the land is covered by artificial surface cover), discontinuous urban fabric (where50% - 80% of the land is covered by artificial surface cover) and industrial, commercial and  transport units. There is robust evidence that the amount of artificial areas, such as buildings and other structures, intensifies heat and can exacerbate the urban heat island (UHI) effect. This will make an area more sensitive to the effects of high temperatures and heatwaves",
    "source": "Corine (2012) continuous and discontinuous urban fabric as a percentage of total NUTS 3 area (km2).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 80,
    "group": "Other",
    "groupsort": 78,
    "type": "double",
    "isvalid": true
  },
  "I064": {
    "name": "I064",
    "description": "Change in % of total urban area in NUTS3 unit that is classified as green space (2009-2012 data).",
    "unit": "%",
    "details": "This indicator shows the change in % of total urban area in NUTS3 unit that is classified as green space (2009-2012 data).There is robust evidence that green spaces can help city’s resilience to the effects of climate change and extreme weather events (Swart et al. 2012).  Green spaces can help to absorb runoff during a flood. Green spaces can also help to reduce temperature due to evapotranspiration effects. Therefore, this indicator should be considered alongside hazards relating to flood and heat. A decreasing trend in green space, compared to the European average, may indicate increased sensitivity to the effects of these hazards and may signal to city planners that more should be done in terms of increasing urban greening.",
    "source": "Change in Corine (2009-2012) green space area measured as percentage of total urban area (km2). Urban area defined using GHSL Urban Centres.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 79,
    "group": "Other",
    "groupsort": 77,
    "type": "double",
    "isvalid": true
  },
  "I065": {
    "name": "I065",
    "description": "Change in % of total land in the NUTS3 unit that is covered by continuous and/or discontinuous urban fabric (2012 data).",
    "unit": "%",
    "details": "This indicator shows the change in the % of the built up urban area based on CORINE data. This  includes continuous urban fabric (more than 80% of the land is covered by artificial surface cover), discontinuous urban fabric (where50% - 80% of the land is covered by artificial surface cover) and industrial, commercial and  transport units. There is robust evidence that the amount of artificial areas, such as buildings and other structures, intensifies heat and can exacerbate the urban heat island (UHI) effect. This will make an area more sensitive to the effects of high temperatures and heatwaves. An increasing trend in built-up areas that is above the European average may indicate that a city is increasing in its sensitivity to high temperatures and heatwaves. ",
    "source": "Change in Corine (2009-2012) continuous and discontinuous urban fabric as a percentage of total NUTS 3 area (km2).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 81,
    "group": "Other",
    "groupsort": 79,
    "type": "double",
    "isvalid": true
  },
  "I066": {
    "name": "I066",
    "description": "Soil Moisture Stress",
    "unit": "To be completed",
    "details": "Sensitivity to drought also includes a measure of soil moisture stress. When soil moisture is depleted, e.g. through reduced precipitation, this lack of soil moisture inhibits the effective functioning of natural and managed ecosystems.  The EEA use information on soil moisture content as a proxy for agricultural droughts. This indicator can be used in tandem with historic drought and projected water consumption in order to give an overall sense of the risk of drought to a NUTS 3 region. If soil moisture stress is higher than the European average, then a NUTS 3 region may be more sensitive to drought.",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainsort": 63,
    "group": "Other",
    "groupsort": 80,
    "type": "double",
    "isvalid": true
  },
  "I067": {
    "name": "I067",
    "description": "Water Consumption Pressure (2030)",
    "unit": "To be completed",
    "details": "Drought occurs not only because of natural processes, but also because of pressures on the demand for water by users. Water consumption can be increased by a number of factors including a dense population and a period of hot and dry weather. It is important to understand the potential  water consumption pressure  in order to understand the risk of drought (in combination with soil moisture stress and historic instances of drought. If water consumption is higher than the EU average, policy makers may want to consider ‘softer’ measures to reduce user demand in greater detail. ",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainsort": 64,
    "group": "Other",
    "groupsort": 81,
    "type": "double",
    "isvalid": true
  },
  "I068": {
    "name": "I068",
    "description": "Priority Allocations (Euros, 2013 - 2015)",
    "unit": "To be completed",
    "details": "Priority allocations and expenditure on EU projects. Sourced from EU InfoRegion.\nThis indicator refers to the amount of Euros received in a NUTS3 region. More details to follow. \n",
    "source": "EU InfoRegio.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 78,
    "group": "Other",
    "groupsort": 76,
    "type": "double",
    "isvalid": true
  },
  "I069": {
    "name": "I069",
    "description": "At Risk of Poverty (ARoP)",
    "unit": "To be completed",
    "details": "This indicator shows those living in a household with an 'equivalised disposable income' below 60 % of the national median, after taxes and social transfers (ESPON 2013). This is the European definition of poverty. This indicator is a proxy for deprivation. Those living in deprived areas may be more sensitive to climate change because of poor accommodation and an inability to prepare for an extreme event e.g. lack of insurance (ClimateJust 2014)",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainsort": 65,
    "group": "Other",
    "groupsort": 82,
    "type": "double",
    "isvalid": true
  },
  "I070": {
    "name": "I070",
    "description": "% change in population less than 15 years in NUTS3 unit between 2017-2050.",
    "unit": "%",
    "details": "This indicator show projected change in population less than 15 years. This indicator shows how the % of population under 15 may change between 2017 and 2050. This indicator could be considered in the context of heat and flood indicators. Children and babies may be more sensitive during heat waves but there is less evidence about the significance of child deaths during heat waves (Swart et al. 2012). Children are also emotionally impacted upon after a flood and may lose out due to the subsequent instability in place of residence and education (Walker et al. 2010).  Additionally, this indicator may be considered alongside Projected Change in Population over 70 in terms of understanding the age-dependency. For example, if there is a projected decrease in the younger population combined with a projected increase in the older population, there may be differential effects in terms of the impacts of climate change e.g. more sensitivity to heat (ESPON 2011). \n",
    "source": "Sourced from Eurostat (proj_13rpms3).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainsort": 60,
    "group": "Other",
    "groupsort": 60,
    "type": "double",
    "isvalid": true
  },
  "I073": {
    "name": "I073",
    "description": "% change in population more than 64 years in NUTS3 unit between 2017-2050.",
    "unit": "%",
    "details": "This indicator shows projected change in population more than 70 years. The relationship between age and heatwaves is well-evidenced. Older people, for example, may have pre-existing health conditions which heighten their sensitivity during a heatwave (Kovats & Kristie 2006). Similarly, older people are more sensitive to the effects of flooding due to a number of reasons. Often, they are socially isolated or tend to live in properties that are sensitive to floods. For this reason, older age is often correlated with increased sensitivity to flood (see Green et al. 1994; Climate Just 2014).  This means that older age is a high confidence indicator across a range of hazards. That said, there is some discrepancy over the precise age when, for example, mortality during a heatwave begins to be significant. For example, Kovats and Hajat (2006, cited in Swart et al. 2012) found that mortality was pronounced in the over-75’s and not significant between 65 and 74. Owing to data availability, this indicator shows over-70s.\n ",
    "source": "Sourced from Eurostat (proj_13rpms3).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainsort": 61,
    "group": "Other",
    "groupsort": 61,
    "type": "double",
    "isvalid": true
  },
  "I075": {
    "name": "I075",
    "description": "% change in population through migration in NUTS3 unit between 2017-2050.",
    "unit": "%",
    "details": "This indicator shows the % change in population through migration in NUTS3 unit between 2017-2050.  There is some debate in the literature over the extent to which a population with a high number of recent migrants may indicate increased sensitivity to extreme weather events and climate change because, for example, they may live in sub-standard housing or to communicate ill-health (e.g. Cutter 2003; Kazmierczak and Cavan 2011; Tapia et al. 2015). \nDecreases in migration, when combined with other population indicators such as age, may indicate that there is an aging population.\n",
    "source": "Sourced from Eurostat (proj_13rdbims3).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainsort": 59,
    "group": "Other",
    "groupsort": 59,
    "type": "double",
    "isvalid": true
  },
  "I076": {
    "name": "I076",
    "description": "% change in population density in NUTS3 unit between 2017-2050.",
    "unit": "%",
    "details": "Projected Change in Total Population and NUTS 3 Density. Increasing population and density will interact with the effects of climate change and may render a NUTS 3 region more sensitive to the effects of climate change. For example, increased density may interact with high temperatures to increase the urban heat island (UHI) effect. Increased population may put pressure on resources in order to devise strategies for dealing with the effects of climate change. ",
    "source": "Population data sourced from Eurostat (proj_13rpms3) and used to calculate change in population density of NUTS3 areas between 2017 and 2050.",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainsort": 58,
    "group": "Other",
    "groupsort": 58,
    "type": "double",
    "isvalid": true
  },
  "I077": {
    "name": "I077",
    "description": "% of total employment in NUTS1 unit.",
    "unit": "%",
    "details": "This indicator shows the employment-population balance. The ratio of jobs to people can be an important indication of economic concerns within an area. When thinking about the way that the employment-population balance works in a given area, there may be particular interactions with climate resilience. For example, where there are more jobs than people (e.g. central London) this may indicate a high number of commuters, which may put pressure on a city’s resources, particularly its transport infrastructure, to deal with extreme weather events. In addition, there may be issues with getting supporting people to fill vacant jobs (e.g. in a hospital) during an extreme weather event when existing staff cannot travel. (Description to be enhanced in the future).",
    "source": "Calculated as percentage of total employment in NUTS1 unit (nama_10r_3empers). Switzerland (Economic activity rate of the permanent resident population aged 15 and above by canton, in 2016 (T 40.02.03.02.03).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 66,
    "group": "Other",
    "groupsort": 63,
    "type": "double",
    "isvalid": true
  },
  "I078": {
    "name": "I078",
    "description": "Number of patent applications to the EPO per 1000 population in the NUTS3 unit.",
    "unit": "Number of patent applications to the EPO per 1000 population",
    "details": "This indicator shows the number  of patent applications to the European Patent Office per 1000 population.  Technology and innovation are important in helping a city to adapt to climate change e.g. investment in new flood technologies or building technologies that can help to mitigate heat. The ability of a country or urban area to invest in technological solutions, is thought to be an indicator of its adaptive capacity (Grieving et al. 2011; Swart et al. 2012; Acosta et al. 2013). Therefore, number of patents per year is used as a proxy indicator reflecting this issue. Ideally, the availability of adaptation solutions would be a direct indicator; however, such data is not typically collected on a city-by-city basis.\n",
    "source": "As nominal GDP in billion euros weighted by population data sourced from EUROSTAT (demo_r_d3dens).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Adaptive Capacity",
    "domainsort": 76,
    "group": "Other",
    "groupsort": 74,
    "type": "double",
    "isvalid": true
  },
  "I079": {
    "name": "I079",
    "description": "GVA at basic prices per head of population (2012-2015 data).",
    "unit": "Euro",
    "details": "Gross Value Added (GVA) is defined as output value at basic prices less intermediate consumption valued at purchasers' prices. GVA is calculated before consumption of fixed capital.  The resources that a city has can be a good indicator of a city’s sensitivity in terms of extreme weather events and climate change. If a city has a lower than average GVA, then it may have be more susceptible to damage from all types of extreme weather events. A city with low resources may not be able to adequately address climate change adaptation due to other pressures. ",
    "source": "GVA data sourced from EUROSTAT (nama_10r_3gva) except Switzerland which was sourced from Knoema (https://knoema.com/nama_r_e3gdp/gross-domestic-product-gdp-at-current-market-prices-by-nuts-3-regions?geo=1027030-switzerland).",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Vulnerability - Sensitivity",
    "domainsort": 62,
    "group": "Other",
    "groupsort": 62,
    "type": "double",
    "isvalid": true
  },
  "I081": {
    "name": "I081",
    "description": "Fluvial hazard",
    "unit": "%",
    "details": "This indicator shows the percentage of the total area of the NUTS3 area that would be exposed to flooding in the event of a 1 in 100 year fluvial flood. Fluvial flooding occurs when watercourses (rivers, streams) overflow and inundate the surrounding area. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether fluvial flooding is a significant issue for the NUTS3 area. Also, this indicator can be considered alongside others included in the typology portal that show the extent of exposure of people and infrastructure to fluvial flooding in the NUTS3 area.",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 30,
    "group": "Fluvial and Pluvial Flooding",
    "groupsort": 45,
    "type": "double",
    "isvalid": true
  },
  "I082": {
    "name": "I082",
    "description": "Landslide hazard",
    "unit": "%",
    "details": "This indicator draws on NASA’s Global Landslide Susceptibility Map, which identifies the potential for landslides across the Earth’s surface on a scale from slight to severe. This indicator calculates the proportion of all areas that are susceptible to landslide in the NUTS3 area where the potential for landslide is moderate or higher. This indicator and the supporting statistical data (the Z-Score) can be used to better understand whether landslide hazard is a significant issue for the NUTS3 area. The key factor that influences landslide susceptibility is the presence of steep slopes. Others include bedrock and soil characteristics, deforestation and the presence of roads. Heavy rainfall can often trigger landslides. The typology portal includes an indicator on projected changes to the occurrence of very heavy rainfall days in NUTS3 areas. This can be used alongside the landslide hazard indicator, and also other indicators related to the exposure of people and infrastructure to landslides, to better understand this hazard in the NUTS3 area.",
    "source": "To be completed",
    "micon": "description",
    "faicon": "fab fa-leanpub",
    "domain": "Hazard",
    "domainsort": 31,
    "group": "Other - Landslide",
    "groupsort": 46,
    "type": "double",
    "isvalid": true
  },
  "V1.1": {
    "name": "V1.1",
    "description": "Mean temperature (RCP 4.5)",
    "unit": "°C",
    "details": "Mean temperature is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference in daily mean temperature between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Projected change in daily mean temperature is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can enhance understanding of how the climate of the NUTS3 area is projected to change over the coming decades. ",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 1,
    "group": "Heat Stress",
    "groupsort": 1,
    "type": "double",
    "isvalid": false
  },
  "V10.1": {
    "name": "V10.1",
    "description": "Consecutive dry days (RCP 4.5)",
    "unit": "Number of days",
    "details": "Consecutive dry days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of consecutive dry days with precipitation less than 1mm. The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Where the frequency of consecutive dry days is projected to increase this highlights that drought may become more of a threat in the NUTS3 area. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of consecutive dry days is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 25,
    "group": "Drought",
    "groupsort": 17,
    "type": "int",
    "isvalid": false
  },
  "V11.1": {
    "name": "V11.1",
    "description": "Consecutive wet days (RCP 4.5)",
    "unit": "Number of days",
    "details": "Consecutive wet days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of consecutive wet days with precipitation greater than or equal to 1mm. The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Projected change in consecutive wet days is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can enhance understanding of how the climate of the NUTS3 area is projected to change over the coming decades. Considering this indicator alongside other related indicators can support this process. For example, where consecutive wet days are projected to increase, in addition to increases in heavy and very heavy precipitation days, this indicates that flood hazards may become more common within the NUTS3 area. ",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 19,
    "group": "Fluvial and Pluvial Flooding",
    "groupsort": 39,
    "type": "int",
    "isvalid": false
  },
  "V12.1": {
    "name": "V12.1",
    "description": "Heavy precipitation days (RCP 4.5)",
    "unit": "Number of days",
    "details": "Heavy precipitation days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of days with precipitation greater than or equal to 10mm. The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Where the frequency of heavy precipitation days is projected to increase, this indicates that flood hazards may also increase (although flooding is driven by multiple other factors including land use change). The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of heavy precipitation days is a potentially significant issue for the NUTS3 area. ",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 21,
    "group": "Fluvial and Pluvial Flooding",
    "groupsort": 41,
    "type": "int",
    "isvalid": false
  },
  "V13.1": {
    "name": "V13.1",
    "description": "Very heavy precipitation days (RCP 4.5)",
    "unit": "Number of days",
    "details": "Very heavy precipitation days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the number of days with precipitation greater than or equal to 20mm. The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Where the frequency of very heavy precipitation days is projected to increase, this indicates that flood hazards may also increase (although flooding is driven by multiple other factors including land use change). The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of very heavy precipitation days is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 23,
    "group": "Fluvial and Pluvial Flooding",
    "groupsort": 43,
    "type": "int",
    "isvalid": false
  },
  "V2.1": {
    "name": "V2.1",
    "description": "Minimum temperature (RCP 4.5)",
    "unit": "°C",
    "details": "Minimum temperature is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference in minimum temperature between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Projected change in minimum temperature is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can be considered alongside other low temperature related indicators (e.g. frost days and ice days) to demonstrate how low temperature related hazards may evolve in the NUTS3 area over the coming decades.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 11,
    "group": "Extreme cold",
    "groupsort": 11,
    "type": "double",
    "isvalid": false
  },
  "V3.1": {
    "name": "V3.1",
    "description": "Maximum temperature (RCP 4.5)",
    "unit": "°C",
    "details": "Maximum temperature is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference in maximum temperature between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Projected change in maximum temperature is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can be considered alongside other high temperature related indicators (e.g. heat wave days) to demonstrate how high temperature related hazards may evolve in the NUTS3 area over the coming decades.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 3,
    "group": "Heat Stress",
    "groupsort": 3,
    "type": "double",
    "isvalid": false
  },
  "V4.1": {
    "name": "V4.1",
    "description": "Frost days (RCP 4.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of days with a minimum temperature of less than 0°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). The 0°C temperature threshold for frost days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of frost days is a potentially significant issue for the NUTS3 area. The number of frost days is decreasing across Europe, and the impacts of this shift may be positive or negative depending on the location being considered and related factors including the nature of dominant industries and land uses.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 13,
    "group": "Extreme cold",
    "groupsort": 13,
    "type": "int",
    "isvalid": false
  },
  "V5.1": {
    "name": "V5.1",
    "description": "Summer days (RCP 4.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of days with a maximum temperature more than 25°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). The 25°C temperature threshold for summer days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The supporting statistical data (the Z-Score) provides further information on this indicator in the context of the NUTS3 area. Although the summer days threshold of 25°C does not pose a threat to the majority of people and infrastructure, it can be considered alongside other heat-related indicators to better understand projected changes in temperature and related hazards in the NUTS3 area. ",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 5,
    "group": "Heat Stress",
    "groupsort": 5,
    "type": "int",
    "isvalid": false
  },
  "V6.1": {
    "name": "V6.1",
    "description": "Tropical nights (RCP 4.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of nights where the minimum temperature does not drop below 20°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). The 20°C temperature threshold for tropical nights is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of tropical nights is a potentially significant issue for the NUTS3 area. The tropical nights indicator is used by the <a href=\"https://www.eea.europa.eu/publications/urban-adaptation-to-climate-change\" target=\"_cf\">European Environment Agency</a> who note that their occurrence is a crucial factor influencing the degree of health impacts associated with high temperatures in urban areas. The level of risk to people in the NUTS3 area from tropical nights (and associated heat wave days) will depend on factors including the proportion of elderly and young people in the population, groups who are particularly susceptible to harm from high temperatures. Indicator data on these factors is available within the typology portal.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 7,
    "group": "Heat Stress",
    "groupsort": 7,
    "type": "int",
    "isvalid": false
  },
  "V7.1": {
    "name": "V7.1",
    "description": "Ice days (RCP 4.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of days with a maximum temperature of less than 0°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). The 0°C temperature threshold for ice days is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of ice days is a potentially significant issue for the NUTS3 area. The number of ice days is decreasing across Europe, and the impacts of this shift may be positive or negative depending on the location being considered and related factors including the nature of dominant industries and land uses.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 15,
    "group": "Extreme cold",
    "groupsort": 15,
    "type": "int",
    "isvalid": false
  },
  "V8.1": {
    "name": "V8.1",
    "description": "Heat waves (RCP 4.5)",
    "unit": "Number of days",
    "details": "This indicator shows the difference in the number of days with a maximum temperature of more than 35°C between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection). The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). There is no universal standard definition for a heat wave, although they are generally regarded as periods of extremely high temperature that exceeds a certain threshold (which varies depending on location and sector being considered) for a set number of days. Heat waves can negatively impact on people, ecosystems and infrastructure. The severity of impacts will depend on factors including the degree to which they are exposed to high temperatures and their vulnerability to this hazard. Vulnerability to heat waves is influenced by factors including the proportion of elderly and young people in the population and the extent of green space cover in urban areas. Indicator data on both of these factors is available within the typology portal. The severity and duration of the heat wave will also influence levels of associated risks. The statistical data provided for this indicator (the Z-Score) can be used to better understand whether change in the number of heat waves is a potentially significant issue for the NUTS3 area.",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 9,
    "group": "Heat Stress",
    "groupsort": 9,
    "type": "int",
    "isvalid": false
  },
  "V9.1": {
    "name": "V9.1",
    "description": "Total wet-day precipitation (RCP 4.5)",
    "unit": "mm",
    "details": "Total wet-day precipitation is a globally recognised and standardised <a href=\"http://surfobs.climate.copernicus.eu/userguidance/indicesdictionary.php#4\" target=\"_cf\">climate indicator</a>. This indicator shows the difference between the 1981-2010 period (observed baseline) and the 2036-2065 period (future projection) in the cumulated precipitation for days with precipitation greater than or equal to 1mm. The future projection is developed for a medium greenhouse gas emissions scenario (the Intergovernmental Panel on Climate Change (IPCC) Representative Concentration Pathway (RCP) <a href=\"http://sedac.ipcc-data.org/ddc/ar5_scenario_process/RCPs.html\" target=\"_cf\">4.5 scenario</a>). Projected change in total wet day precipitation is not itself a climate change hazard. However, this indicator and the supporting statistical data (the Z-Score) can enhance understanding of how the climate of the NUTS3 area is projected to change over the coming decades. ",
    "source": "Climate analysis was performed using CORDEX regional climate model (RCM) simulations available over the European domain (EURO-CORDEX) with a resolution of 0.11 degrees (about 12 km) and forced by different global climate models. The simulations taken into account are obtained according to the IPCC RCP4.5 greenhouse gas emissions scenario. Climate anomalies were evaluated over the period 2036-2065 with respect to the control period 1981-2010.",
    "domain": "Hazard",
    "domainsort": 17,
    "group": "Fluvial and Pluvial Flooding",
    "groupsort": 37,
    "type": "int",
    "isvalid": false
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
    "name_latin" : "Mittelburgenland",
    "nuts_name" : "Mittelburgenland",
    "name_ascii" : "Mittelburgenland",
    "name_html" : "Mittelburgenland"
  },
  "AT112": {
    "name_latin" : "Nordburgenland",
    "nuts_name" : "Nordburgenland",
    "name_ascii" : "Nordburgenland",
    "name_html" : "Nordburgenland"
  },
  "AT113": {
    "name_latin" : "Südburgenland",
    "nuts_name" : "Südburgenland",
    "name_ascii" : "Sudburgenland",
    "name_html" : "S&#x00FC;dburgenland"
  },
  "AT121": {
    "name_latin" : "Mostviertel-Eisenwurzen",
    "nuts_name" : "Mostviertel-Eisenwurzen",
    "name_ascii" : "Mostviertel-Eisenwurzen",
    "name_html" : "Mostviertel-Eisenwurzen"
  },
  "AT122": {
    "name_latin" : "Niederösterreich-Süd",
    "nuts_name" : "Niederösterreich-Süd",
    "name_ascii" : "Niederosterreich-Sud",
    "name_html" : "Nieder&#x00F6;sterreich-S&#x00FC;d"
  },
  "AT123": {
    "name_latin" : "Sankt Pölten",
    "nuts_name" : "Sankt Pölten",
    "name_ascii" : "Sankt Polten",
    "name_html" : "Sankt P&#x00F6;lten"
  },
  "AT124": {
    "name_latin" : "Waldviertel",
    "nuts_name" : "Waldviertel",
    "name_ascii" : "Waldviertel",
    "name_html" : "Waldviertel"
  },
  "AT125": {
    "name_latin" : "Weinviertel",
    "nuts_name" : "Weinviertel",
    "name_ascii" : "Weinviertel",
    "name_html" : "Weinviertel"
  },
  "AT126": {
    "name_latin" : "Wiener Umland/Nordteil",
    "nuts_name" : "Wiener Umland/Nordteil",
    "name_ascii" : "Wiener Umland/Nordteil",
    "name_html" : "Wiener Umland/Nordteil"
  },
  "AT127": {
    "name_latin" : "Wiener Umland/Südteil",
    "nuts_name" : "Wiener Umland/Südteil",
    "name_ascii" : "Wiener Umland/Sudteil",
    "name_html" : "Wiener Umland/S&#x00FC;dteil"
  },
  "AT130": {
    "name_latin" : "Wien",
    "nuts_name" : "Wien",
    "name_ascii" : "Wien",
    "name_html" : "Wien"
  },
  "AT211": {
    "name_latin" : "Klagenfurt-Villach",
    "nuts_name" : "Klagenfurt-Villach",
    "name_ascii" : "Klagenfurt-Villach",
    "name_html" : "Klagenfurt-Villach"
  },
  "AT212": {
    "name_latin" : "Oberkärnten",
    "nuts_name" : "Oberkärnten",
    "name_ascii" : "Oberkarnten",
    "name_html" : "Oberk&#x00E4;rnten"
  },
  "AT213": {
    "name_latin" : "Unterkärnten",
    "nuts_name" : "Unterkärnten",
    "name_ascii" : "Unterkarnten",
    "name_html" : "Unterk&#x00E4;rnten"
  },
  "AT221": {
    "name_latin" : "Graz",
    "nuts_name" : "Graz",
    "name_ascii" : "Graz",
    "name_html" : "Graz"
  },
  "AT222": {
    "name_latin" : "Liezen",
    "nuts_name" : "Liezen",
    "name_ascii" : "Liezen",
    "name_html" : "Liezen"
  },
  "AT223": {
    "name_latin" : "Östliche Obersteiermark",
    "nuts_name" : "Östliche Obersteiermark",
    "name_ascii" : "Ostliche Obersteiermark",
    "name_html" : "&#x00D6;stliche Obersteiermark"
  },
  "AT225": {
    "name_latin" : "West- und Südsteiermark",
    "nuts_name" : "West- und Südsteiermark",
    "name_ascii" : "West- und Sudsteiermark",
    "name_html" : "West- und S&#x00FC;dsteiermark"
  },
  "AT226": {
    "name_latin" : "Westliche Obersteiermark",
    "nuts_name" : "Westliche Obersteiermark",
    "name_ascii" : "Westliche Obersteiermark",
    "name_html" : "Westliche Obersteiermark"
  },
  "AT311": {
    "name_latin" : "Innviertel",
    "nuts_name" : "Innviertel",
    "name_ascii" : "Innviertel",
    "name_html" : "Innviertel"
  },
  "AT312": {
    "name_latin" : "Linz-Wels",
    "nuts_name" : "Linz-Wels",
    "name_ascii" : "Linz-Wels",
    "name_html" : "Linz-Wels"
  },
  "AT313": {
    "name_latin" : "Mühlviertel",
    "nuts_name" : "Mühlviertel",
    "name_ascii" : "Muhlviertel",
    "name_html" : "M&#x00FC;hlviertel"
  },
  "AT314": {
    "name_latin" : "Steyr-Kirchdorf",
    "nuts_name" : "Steyr-Kirchdorf",
    "name_ascii" : "Steyr-Kirchdorf",
    "name_html" : "Steyr-Kirchdorf"
  },
  "AT321": {
    "name_latin" : "Lungau",
    "nuts_name" : "Lungau",
    "name_ascii" : "Lungau",
    "name_html" : "Lungau"
  },
  "AT322": {
    "name_latin" : "Pinzgau-Pongau",
    "nuts_name" : "Pinzgau-Pongau",
    "name_ascii" : "Pinzgau-Pongau",
    "name_html" : "Pinzgau-Pongau"
  },
  "AT323": {
    "name_latin" : "Salzburg und Umgebung",
    "nuts_name" : "Salzburg und Umgebung",
    "name_ascii" : "Salzburg Und Umgebung",
    "name_html" : "Salzburg Und Umgebung"
  },
  "AT332": {
    "name_latin" : "Innsbruck",
    "nuts_name" : "Innsbruck",
    "name_ascii" : "Innsbruck",
    "name_html" : "Innsbruck"
  },
  "AT333": {
    "name_latin" : "Osttirol",
    "nuts_name" : "Osttirol",
    "name_ascii" : "Osttirol",
    "name_html" : "Osttirol"
  },
  "AT334": {
    "name_latin" : "Tiroler Oberland",
    "nuts_name" : "Tiroler Oberland",
    "name_ascii" : "Tiroler Oberland",
    "name_html" : "Tiroler Oberland"
  },
  "AT335": {
    "name_latin" : "Tiroler Unterland",
    "nuts_name" : "Tiroler Unterland",
    "name_ascii" : "Tiroler Unterland",
    "name_html" : "Tiroler Unterland"
  },
  "AT342": {
    "name_latin" : "Rheintal-Bodenseegebiet",
    "nuts_name" : "Rheintal-Bodenseegebiet",
    "name_ascii" : "Rheintal-Bodenseegebiet",
    "name_html" : "Rheintal-Bodenseegebiet"
  },
  "BE100": {
    "name_latin" : "Arr. de Bruxelles-Capitale / Arr. van Brussel-Hoofdstad",
    "nuts_name" : "Arr. de Bruxelles-Capitale / Arr. van Brussel-Hoofdstad",
    "name_ascii" : "Arr. de Bruxelles-Capitale / Arr. van Brussel-Hoofdstad",
    "name_html" : "Arr. de Bruxelles-Capitale / Arr. van Brussel-Hoofdstad"
  },
  "BE211": {
    "name_latin" : "Arr. Antwerpen",
    "nuts_name" : "Arr. Antwerpen",
    "name_ascii" : "Arr. Antwerpen",
    "name_html" : "Arr. Antwerpen"
  },
  "BE212": {
    "name_latin" : "Arr. Mechelen",
    "nuts_name" : "Arr. Mechelen",
    "name_ascii" : "Arr. Mechelen",
    "name_html" : "Arr. Mechelen"
  },
  "BE213": {
    "name_latin" : "Arr. Turnhout",
    "nuts_name" : "Arr. Turnhout",
    "name_ascii" : "Arr. Turnhout",
    "name_html" : "Arr. Turnhout"
  },
  "BE221": {
    "name_latin" : "Arr. Hasselt",
    "nuts_name" : "Arr. Hasselt",
    "name_ascii" : "Arr. Hasselt",
    "name_html" : "Arr. Hasselt"
  },
  "BE222": {
    "name_latin" : "Arr. Maaseik",
    "nuts_name" : "Arr. Maaseik",
    "name_ascii" : "Arr. Maaseik",
    "name_html" : "Arr. Maaseik"
  },
  "BE223": {
    "name_latin" : "Arr. Tongeren",
    "nuts_name" : "Arr. Tongeren",
    "name_ascii" : "Arr. Tongeren",
    "name_html" : "Arr. Tongeren"
  },
  "BE231": {
    "name_latin" : "Arr. Aalst",
    "nuts_name" : "Arr. Aalst",
    "name_ascii" : "Arr. Aalst",
    "name_html" : "Arr. Aalst"
  },
  "BE232": {
    "name_latin" : "Arr. Dendermonde",
    "nuts_name" : "Arr. Dendermonde",
    "name_ascii" : "Arr. Dendermonde",
    "name_html" : "Arr. Dendermonde"
  },
  "BE233": {
    "name_latin" : "Arr. Eeklo",
    "nuts_name" : "Arr. Eeklo",
    "name_ascii" : "Arr. Eeklo",
    "name_html" : "Arr. Eeklo"
  },
  "BE234": {
    "name_latin" : "Arr. Gent",
    "nuts_name" : "Arr. Gent",
    "name_ascii" : "Arr. Gent",
    "name_html" : "Arr. Gent"
  },
  "BE236": {
    "name_latin" : "Arr. Sint-Niklaas",
    "nuts_name" : "Arr. Sint-Niklaas",
    "name_ascii" : "Arr. Sint-Niklaas",
    "name_html" : "Arr. Sint-Niklaas"
  },
  "BE241": {
    "name_latin" : "Arr. Halle-Vilvoorde",
    "nuts_name" : "Arr. Halle-Vilvoorde",
    "name_ascii" : "Arr. Halle-Vilvoorde",
    "name_html" : "Arr. Halle-Vilvoorde"
  },
  "BE242": {
    "name_latin" : "Arr. Leuven",
    "nuts_name" : "Arr. Leuven",
    "name_ascii" : "Arr. Leuven",
    "name_html" : "Arr. Leuven"
  },
  "BE251": {
    "name_latin" : "Arr. Brugge",
    "nuts_name" : "Arr. Brugge",
    "name_ascii" : "Arr. Brugge",
    "name_html" : "Arr. Brugge"
  },
  "BE252": {
    "name_latin" : "Arr. Diksmuide",
    "nuts_name" : "Arr. Diksmuide",
    "name_ascii" : "Arr. Diksmuide",
    "name_html" : "Arr. Diksmuide"
  },
  "BE253": {
    "name_latin" : "Arr. Ieper",
    "nuts_name" : "Arr. Ieper",
    "name_ascii" : "Arr. Ieper",
    "name_html" : "Arr. Ieper"
  },
  "BE254": {
    "name_latin" : "Arr. Kortrijk",
    "nuts_name" : "Arr. Kortrijk",
    "name_ascii" : "Arr. Kortrijk",
    "name_html" : "Arr. Kortrijk"
  },
  "BE255": {
    "name_latin" : "Arr. Oostende",
    "nuts_name" : "Arr. Oostende",
    "name_ascii" : "Arr. Oostende",
    "name_html" : "Arr. Oostende"
  },
  "BE256": {
    "name_latin" : "Arr. Roeselare",
    "nuts_name" : "Arr. Roeselare",
    "name_ascii" : "Arr. Roeselare",
    "name_html" : "Arr. Roeselare"
  },
  "BE257": {
    "name_latin" : "Arr. Tielt",
    "nuts_name" : "Arr. Tielt",
    "name_ascii" : "Arr. Tielt",
    "name_html" : "Arr. Tielt"
  },
  "BE310": {
    "name_latin" : "Arr. Nivelles",
    "nuts_name" : "Arr. Nivelles",
    "name_ascii" : "Arr. Nivelles",
    "name_html" : "Arr. Nivelles"
  },
  "BE321": {
    "name_latin" : "Arr. Ath",
    "nuts_name" : "Arr. Ath",
    "name_ascii" : "Arr. Ath",
    "name_html" : "Arr. Ath"
  },
  "BE322": {
    "name_latin" : "Arr. Charleroi",
    "nuts_name" : "Arr. Charleroi",
    "name_ascii" : "Arr. Charleroi",
    "name_html" : "Arr. Charleroi"
  },
  "BE323": {
    "name_latin" : "Arr. Mons",
    "nuts_name" : "Arr. Mons",
    "name_ascii" : "Arr. Mons",
    "name_html" : "Arr. Mons"
  },
  "BE324": {
    "name_latin" : "Arr. Mouscron",
    "nuts_name" : "Arr. Mouscron",
    "name_ascii" : "Arr. Mouscron",
    "name_html" : "Arr. Mouscron"
  },
  "BE325": {
    "name_latin" : "Arr. Soignies",
    "nuts_name" : "Arr. Soignies",
    "name_ascii" : "Arr. Soignies",
    "name_html" : "Arr. Soignies"
  },
  "BE327": {
    "name_latin" : "Arr. Tournai",
    "nuts_name" : "Arr. Tournai",
    "name_ascii" : "Arr. Tournai",
    "name_html" : "Arr. Tournai"
  },
  "BE331": {
    "name_latin" : "Arr. Huy",
    "nuts_name" : "Arr. Huy",
    "name_ascii" : "Arr. Huy",
    "name_html" : "Arr. Huy"
  },
  "BE334": {
    "name_latin" : "Arr. Waremme",
    "nuts_name" : "Arr. Waremme",
    "name_ascii" : "Arr. Waremme",
    "name_html" : "Arr. Waremme"
  },
  "BE335": {
    "name_latin" : "Arr. Verviers - communes francophones",
    "nuts_name" : "Arr. Verviers - communes francophones",
    "name_ascii" : "Arr. Verviers - Communes francophones",
    "name_html" : "Arr. Verviers - Communes fancophones"
  },
  "BE336": {
    "name_latin" : "Bezirk Verviers - Deutschsprachige Gemeinschaft",
    "nuts_name" : "Bezirk Verviers - Deutschsprachige Gemeinschaft",
    "name_ascii" : "Bezirk Verviers - Deutschsprachige Gemeinschaft",
    "name_html" : "Bezirk Verviers - Deutschsprachige Gemeinschaft"
  },
  "BE341": {
    "name_latin" : "Arr. Arlon",
    "nuts_name" : "Arr. Arlon",
    "name_ascii" : "Arr. Arlon",
    "name_html" : "Arr. Arlon"
  },
  "BE342": {
    "name_latin" : "Arr. Bastogne",
    "nuts_name" : "Arr. Bastogne",
    "name_ascii" : "Arr. Bastogne",
    "name_html" : "Arr. Bastogne"
  },
  "BE343": {
    "name_latin" : "Arr. Marche-en-Famenne",
    "nuts_name" : "Arr. Marche-en-Famenne",
    "name_ascii" : "Arr. Marche-en-Famenne",
    "name_html" : "Arr. Marche-en-Famenne"
  },
  "BE344": {
    "name_latin" : "Arr. Neufchâteau",
    "nuts_name" : "Arr. Neufchâteau",
    "name_ascii" : "Arr. Neufchateau",
    "name_html" : "Arr. Neufch&#x00E2;teau"
  },
  "BE345": {
    "name_latin" : "Arr. Virton",
    "nuts_name" : "Arr. Virton",
    "name_ascii" : "Arr. Virton",
    "name_html" : "Arr. Virton"
  },
  "BE351": {
    "name_latin" : "Arr. Dinant",
    "nuts_name" : "Arr. Dinant",
    "name_ascii" : "Arr. Dinant",
    "name_html" : "Arr. Dinant"
  },
  "BE352": {
    "name_latin" : "Arr. Namur",
    "nuts_name" : "Arr. Namur",
    "name_ascii" : "Arr. Namur",
    "name_html" : "Arr. Namur"
  },
  "BE353": {
    "name_latin" : "Arr. Philippeville",
    "nuts_name" : "Arr. Philippeville",
    "name_ascii" : "Arr. Philippeville",
    "name_html" : "Arr. Philippeville"
  },
  "BG311": {
    "name_latin" : "Vidin",
    "nuts_name" : "Видин",
    "name_ascii" : "Vidin",
    "name_html" : "&#x0412;&#x0438;&#x0434;&#x0438;&#x043D;"
  },
  "BG312": {
    "name_latin" : "Montana",
    "nuts_name" : "Монтана",
    "name_ascii" : "Montana",
    "name_html" : "&#x041C;&#x043E;&#x043D;&#x0442;&#x0430;&#x043D;&#x0430;"
  },
  "BG313": {
    "name_latin" : "Vratsa",
    "nuts_name" : "Враца",
    "name_ascii" : "Vratsa",
    "name_html" : "&#x0412;&#x0440;&#x0430;&#x0446;&#x0430;"
  },
  "BG314": {
    "name_latin" : "Pleven",
    "nuts_name" : "Плевен",
    "name_ascii" : "Pleven",
    "name_html" : "&#x041F;&#x043B;&#x0435;&#x0432;&#x0435;&#x043D;"
  },
  "BG315": {
    "name_latin" : "Lovech",
    "nuts_name" : "Ловеч",
    "name_ascii" : "Lovech",
    "name_html" : "&#x041B;&#x043E;&#x0432;&#x0435;&#x0447;"
  },
  "BG321": {
    "name_latin" : "Veliko Tarnovo",
    "nuts_name" : "Велико Търново",
    "name_ascii" : "Veliko Tarnovo",
    "name_html" : "&#x0412;&#x0435;&#x043B;&#x0438;&#x043A;&#x043E; &#x0422;&#x044A;&#x0440;&#x043D;&#x043E;&#x0432;&#x043E;"
  },
  "BG322": {
    "name_latin" : "Gabrovo",
    "nuts_name" : "Габрово",
    "name_ascii" : "Gabrovo",
    "name_html" : "&#x0413;&#x0430;&#x0431;&#x0440;&#x043E;&#x0432;&#x043E;"
  },
  "BG323": {
    "name_latin" : "Ruse",
    "nuts_name" : "Русе",
    "name_ascii" : "Ruse",
    "name_html" : "&#x0420;&#x0443;&#x0441;&#x0435;"
  },
  "BG324": {
    "name_latin" : "Razgrad",
    "nuts_name" : "Разград",
    "name_ascii" : "Razgrad",
    "name_html" : "&#x0420;&#x0430;&#x0437;&#x0433;&#x0440;&#x0430;&#x0434;"
  },
  "BG332": {
    "name_latin" : "Dobrich",
    "nuts_name" : "Добрич",
    "name_ascii" : "Dobrich",
    "name_html" : "&#x0414;&#x043E;&#x0431;&#x0440;&#x0438;&#x0447;"
  },
  "BG333": {
    "name_latin" : "Shumen",
    "nuts_name" : "Шумен",
    "name_ascii" : "Shumen",
    "name_html" : "&#x0428;&#x0443;&#x043C;&#x0435;&#x043D;"
  },
  "BG342": {
    "name_latin" : "Sliven",
    "nuts_name" : "Сливен",
    "name_ascii" : "Sliven",
    "name_html" : "&#x0421;&#x043B;&#x0438;&#x0432;&#x0435;&#x043D;"
  },
  "BG343": {
    "name_latin" : "Yambol",
    "nuts_name" : "Ямбол",
    "name_ascii" : "Yambol",
    "name_html" : "&#x042F;&#x043C;&#x0431;&#x043E;&#x043B;"
  },
  "BG411": {
    "name_latin" : "Sofia (stolitsa)",
    "nuts_name" : "София (столица)",
    "name_ascii" : "Sofia (stolitsa)",
    "name_html" : "&#x0421;&#x043E;&#x0444;&#x0438;&#x044F; (&#x0421;&#x0442;&#x043E;&#x043B;&#x0438;&#x0446;&#x0430;)"
  },
  "BG412": {
    "name_latin" : "Sofia",
    "nuts_name" : "София",
    "name_ascii" : "Sofia",
    "name_html" : "&#x0421;&#x043E;&#x0444;&#x0438;&#x044F;"
  },
  "BG413": {
    "name_latin" : "Blagoevgrad",
    "nuts_name" : "Благоевград",
    "name_ascii" : "Blagoevgrad",
    "name_html" : "&#x0411;&#x043B;&#x0430;&#x0433;&#x043E;&#x0435;&#x0432;&#x0433;&#x0440;&#x0430;&#x0434;"
  },
  "BG414": {
    "name_latin" : "Pernik",
    "nuts_name" : "Перник",
    "name_ascii" : "Pernik",
    "name_html" : "&#x041F;&#x0435;&#x0440;&#x043D;&#x0438;&#x043A;"
  },
  "BG415": {
    "name_latin" : "Kyustendil",
    "nuts_name" : "Кюстендил",
    "name_ascii" : "Kyustendil",
    "name_html" : "&#x041A;&#x044E;&#x0441;&#x0442;&#x0435;&#x043D;&#x0434;&#x0438;&#x043B;"
  },
  "BG421": {
    "name_latin" : "Plovdiv",
    "nuts_name" : "Пловдив",
    "name_ascii" : "Plovdiv",
    "name_html" : "&#x041F;&#x043B;&#x043E;&#x0432;&#x0434;&#x0438;&#x0432;"
  },
  "BG423": {
    "name_latin" : "Pazardzhik",
    "nuts_name" : "Пазарджик",
    "name_ascii" : "Pazardzhik",
    "name_html" : "&#x041F;&#x0430;&#x0437;&#x0430;&#x0440;&#x0434;&#x0436;&#x0438;&#x043A;"
  },
  "BG425": {
    "name_latin" : "Kardzhali",
    "nuts_name" : "Кърджали",
    "name_ascii" : "Kardzhali",
    "name_html" : "&#x041A;&#x044A;&#x0440;&#x0434;&#x0436;&#x0430;&#x043B;&#x0438;"
  },
  "CH011": {
    "name_latin" : "Vaud",
    "nuts_name" : "Vaud",
    "name_ascii" : "Vaud",
    "name_html" : "Vaud"
  },
  "CH012": {
    "name_latin" : "Valais",
    "nuts_name" : "Valais",
    "name_ascii" : "Valais",
    "name_html" : "Valais"
  },
  "CH013": {
    "name_latin" : "Genève",
    "nuts_name" : "Genève",
    "name_ascii" : "Geneve",
    "name_html" : "Gen&#x00E8;ve"
  },
  "CH021": {
    "name_latin" : "Bern",
    "nuts_name" : "Bern",
    "name_ascii" : "Bern",
    "name_html" : "Bern"
  },
  "CH022": {
    "name_latin" : "Freiburg",
    "nuts_name" : "Freiburg",
    "name_ascii" : "Freiburg",
    "name_html" : "Freiburg"
  },
  "CH023": {
    "name_latin" : "Solothurn",
    "nuts_name" : "Solothurn",
    "name_ascii" : "Solothurn",
    "name_html" : "Solothurn"
  },
  "CH024": {
    "name_latin" : "Neuchâtel",
    "nuts_name" : "Neuchâtel",
    "name_ascii" : "Neuchatel",
    "name_html" : "Neuch&#x00E2;tel"
  },
  "CH025": {
    "name_latin" : "Jura",
    "nuts_name" : "Jura",
    "name_ascii" : "Jura",
    "name_html" : "Jura"
  },
  "CH032": {
    "name_latin" : "Basel-Landschaft",
    "nuts_name" : "Basel-Landschaft",
    "name_ascii" : "Basel-Landschaft",
    "name_html" : "Basel-Landschaft"
  },
  "CH033": {
    "name_latin" : "Aargau",
    "nuts_name" : "Aargau",
    "name_ascii" : "Aargau",
    "name_html" : "Aargau"
  },
  "CH040": {
    "name_latin" : "Zürich",
    "nuts_name" : "Zürich",
    "name_ascii" : "Zurich",
    "name_html" : "Z&#x00FC;rich"
  },
  "CH052": {
    "name_latin" : "Schaffhausen",
    "nuts_name" : "Schaffhausen",
    "name_ascii" : "Schaffhausen",
    "name_html" : "Schaffhausen"
  },
  "CH053": {
    "name_latin" : "Appenzell Ausserrhoden",
    "nuts_name" : "Appenzell Ausserrhoden",
    "name_ascii" : "Appenzell Ausserrhoden",
    "name_html" : "Appenzell Ausserrhoden"
  },
  "CH055": {
    "name_latin" : "St. Gallen",
    "nuts_name" : "St. Gallen",
    "name_ascii" : "St. Gallen",
    "name_html" : "St. Gallen"
  },
  "CH056": {
    "name_latin" : "Graubünden",
    "nuts_name" : "Graubünden",
    "name_ascii" : "Graubunden",
    "name_html" : "Graub&#x00FC;nden"
  },
  "CH057": {
    "name_latin" : "Thurgau",
    "nuts_name" : "Thurgau",
    "name_ascii" : "Thurgau",
    "name_html" : "Thurgau"
  },
  "CH061": {
    "name_latin" : "Luzern",
    "nuts_name" : "Luzern",
    "name_ascii" : "Luzern",
    "name_html" : "Luzern"
  },
  "CH062": {
    "name_latin" : "Uri",
    "nuts_name" : "Uri",
    "name_ascii" : "Uri",
    "name_html" : "Uri"
  },
  "CH063": {
    "name_latin" : "Schwyz",
    "nuts_name" : "Schwyz",
    "name_ascii" : "Schwyz",
    "name_html" : "Schwyz"
  },
  "CH064": {
    "name_latin" : "Obwalden",
    "nuts_name" : "Obwalden",
    "name_ascii" : "Obwalden",
    "name_html" : "Obwalden"
  },
  "CH065": {
    "name_latin" : "Nidwalden",
    "nuts_name" : "Nidwalden",
    "name_ascii" : "Nidwalden",
    "name_html" : "Nidwalden"
  },
  "CH066": {
    "name_latin" : "Zug",
    "nuts_name" : "Zug",
    "name_ascii" : "Zug",
    "name_html" : "Zug"
  },
  "CH070": {
    "name_latin" : "Ticino",
    "nuts_name" : "Ticino",
    "name_ascii" : "Ticino",
    "name_html" : "Ticino"
  },
  "CY000": {
    "name_latin" : "Kýpros",
    "nuts_name" : "Κύπρος",
    "name_ascii" : "Kypros",
    "name_html" : "&#922;&#973;&#960;&#961;&#959;&#962;"
  },
  "CZ010": {
    "name_latin" : "Hlavní mesto Praha",
    "nuts_name" : "Hlavní mesto Praha",
    "name_ascii" : "Hlavni mesto Praha",
    "name_html" : "Hlavn&#x00ED; mesto Praha"
  },
  "CZ020": {
    "name_latin" : "Stredoceský kraj",
    "nuts_name" : "Stredoceský kraj",
    "name_ascii" : "Stredocesky kraj",
    "name_html" : "Stredocesk&#x00FD; kraj"
  },
  "CZ031": {
    "name_latin" : "Jihoceský kraj",
    "nuts_name" : "Jihoceský kraj",
    "name_ascii" : "Jihocesky kraj",
    "name_html" : "Jihocesk&#x00FD; kraj"
  },
  "CZ032": {
    "name_latin" : "Plzenský kraj",
    "nuts_name" : "Plzenský kraj",
    "name_ascii" : "Plzensky kraj",
    "name_html" : "Plzensk&#x00FD; kraj"
  },
  "CZ041": {
    "name_latin" : "Karlovarský kraj",
    "nuts_name" : "Karlovarský kraj",
    "name_ascii" : "Karlovarsky kraj",
    "name_html" : "Karlovarsk&#x00FD; kraj"
  },
  "CZ042": {
    "name_latin" : "Ústecký kraj",
    "nuts_name" : "Ústecký kraj",
    "name_ascii" : "Ustecky kraj",
    "name_html" : "&#x00DA;steck&#x00FD; kraj"
  },
  "CZ052": {
    "name_latin" : "Královéhradecký kraj",
    "nuts_name" : "Královéhradecký kraj",
    "name_ascii" : "Kralovehradecky kraj",
    "name_html" : "Kr&#x00E1;lov&#x00E9;hradeck&#x00FD; kraj"
  },
  "CZ053": {
    "name_latin" : "Pardubický kraj",
    "nuts_name" : "Pardubický kraj",
    "name_ascii" : "Pardubicky kraj",
    "name_html" : "Pardubick&#x00FD; kraj"
  },
  "CZ063": {
    "name_latin" : "Kraj Vysocina",
    "nuts_name" : "Kraj Vysocina",
    "name_ascii" : "Kraj Vysocina",
    "name_html" : "Kraj Vysocina"
  },
  "CZ064": {
    "name_latin" : "Jihomoravský kraj",
    "nuts_name" : "Jihomoravský kraj",
    "name_ascii" : "Jihomoravsky kraj",
    "name_html" : "Jihomoravsk&#x00FD; kraj"
  },
  "CZ072": {
    "name_latin" : "Zlínský kraj",
    "nuts_name" : "Zlínský kraj",
    "name_ascii" : "Zlinsky kraj",
    "name_html" : "Zl&#x00ED;nsk&#x00FD; kraj"
  },
  "CZ080": {
    "name_latin" : "Moravskoslezský kraj",
    "nuts_name" : "Moravskoslezský kraj",
    "name_ascii" : "Moravskoslezsky kraj",
    "name_html" : "Moravskoslezsk&#x00FD; kraj"
  },
  "DE111": {
    "name_latin" : "Stuttgart, Stadtkreis",
    "nuts_name" : "Stuttgart, Stadtkreis",
    "name_ascii" : "Stuttgart, Stadtkreis",
    "name_html" : "Stuttgart, Stadtkreis"
  },
  "DE112": {
    "name_latin" : "Böblingen",
    "nuts_name" : "Böblingen",
    "name_ascii" : "Boblingen",
    "name_html" : "B&#x00F6;blingen"
  },
  "DE113": {
    "name_latin" : "Esslingen",
    "nuts_name" : "Esslingen",
    "name_ascii" : "Esslingen",
    "name_html" : "Esslingen"
  },
  "DE114": {
    "name_latin" : "Göppingen",
    "nuts_name" : "Göppingen",
    "name_ascii" : "Goppingen",
    "name_html" : "G&#x00F6;ppingen"
  },
  "DE115": {
    "name_latin" : "Ludwigsburg",
    "nuts_name" : "Ludwigsburg",
    "name_ascii" : "Ludwigsburg",
    "name_html" : "Ludwigsburg"
  },
  "DE117": {
    "name_latin" : "Heilbronn, Stadtkreis",
    "nuts_name" : "Heilbronn, Stadtkreis",
    "name_ascii" : "Heilbronn, Stadtkreis",
    "name_html" : "Heilbronn, Stadtkreis"
  },
  "DE118": {
    "name_latin" : "Heilbronn, Landkreis",
    "nuts_name" : "Heilbronn, Landkreis",
    "name_ascii" : "Heilbronn, Landkreis",
    "name_html" : "Heilbronn, Landkreis"
  },
  "DE119": {
    "name_latin" : "Hohenlohekreis",
    "nuts_name" : "Hohenlohekreis",
    "name_ascii" : "Hohenlohekreis",
    "name_html" : "Hohenlohekreis"
  },
  "DE11B": {
    "name_latin" : "Main-Tauber-Kreis",
    "nuts_name" : "Main-Tauber-Kreis",
    "name_ascii" : "Main-Tauber-Kreis",
    "name_html" : "Main-Tauber-Kreis"
  },
  "DE11C": {
    "name_latin" : "Heidenheim",
    "nuts_name" : "Heidenheim",
    "name_ascii" : "Heidenheim",
    "name_html" : "Heidenheim"
  },
  "DE11D": {
    "name_latin" : "Ostalbkreis",
    "nuts_name" : "Ostalbkreis",
    "name_ascii" : "Ostalbkreis",
    "name_html" : "Ostalbkreis"
  },
  "DE121": {
    "name_latin" : "Baden-Baden, Stadtkreis",
    "nuts_name" : "Baden-Baden, Stadtkreis",
    "name_ascii" : "Baden-Baden, Stadtkreis",
    "name_html" : "Baden-Baden, Stadtkreis"
  },
  "DE123": {
    "name_latin" : "Karlsruhe, Landkreis",
    "nuts_name" : "Karlsruhe, Landkreis",
    "name_ascii" : "Karlsruhe, Landkreis",
    "name_html" : "Karlsruhe, Landkreis"
  },
  "DE124": {
    "name_latin" : "Rastatt",
    "nuts_name" : "Rastatt",
    "name_ascii" : "Rastatt",
    "name_html" : "Rastatt"
  },
  "DE125": {
    "name_latin" : "Heidelberg, Stadtkreis",
    "nuts_name" : "Heidelberg, Stadtkreis",
    "name_ascii" : "Heidelberg, Stadtkreis",
    "name_html" : "Heidelberg, Stadtkreis"
  },
  "DE126": {
    "name_latin" : "Mannheim, Stadtkreis",
    "nuts_name" : "Mannheim, Stadtkreis",
    "name_ascii" : "Mannheim, Stadtkreis",
    "name_html" : "Mannheim, Stadtkreis"
  },
  "DE127": {
    "name_latin" : "Neckar-Odenwald-Kreis",
    "nuts_name" : "Neckar-Odenwald-Kreis",
    "name_ascii" : "Neckar-Odenwald-Kreis",
    "name_html" : "Neckar-Odenwald-Kreis"
  },
  "DE128": {
    "name_latin" : "Rhein-Neckar-Kreis",
    "nuts_name" : "Rhein-Neckar-Kreis",
    "name_ascii" : "Rhein-Neckar-Kreis",
    "name_html" : "Rhein-Neckar-Kreis"
  },
  "DE12A": {
    "name_latin" : "Calw",
    "nuts_name" : "Calw",
    "name_ascii" : "Calw",
    "name_html" : "Calw"
  },
  "DE12B": {
    "name_latin" : "Enzkreis",
    "nuts_name" : "Enzkreis",
    "name_ascii" : "Enzkreis",
    "name_html" : "Enzkreis"
  },
  "DE12C": {
    "name_latin" : "Freudenstadt",
    "nuts_name" : "Freudenstadt",
    "name_ascii" : "Freudenstadt",
    "name_html" : "Freudenstadt"
  },
  "DE131": {
    "name_latin" : "Freiburg im Breisgau, Stadtkreis",
    "nuts_name" : "Freiburg im Breisgau, Stadtkreis",
    "name_ascii" : "Freiburg im Breisgau, Stadtkreis",
    "name_html" : "Freiburg im Breisgau, Stadtkreis"
  },
  "DE132": {
    "name_latin" : "Breisgau-Hochschwarzwald",
    "nuts_name" : "Breisgau-Hochschwarzwald",
    "name_ascii" : "Breisgau-Hochschwarzwald",
    "name_html" : "Breisgau-Hochschwarzwald"
  },
  "DE134": {
    "name_latin" : "Ortenaukreis",
    "nuts_name" : "Ortenaukreis",
    "name_ascii" : "Ortenaukreis",
    "name_html" : "Ortenaukreis"
  },
  "DE135": {
    "name_latin" : "Rottweil",
    "nuts_name" : "Rottweil",
    "name_ascii" : "Rottweil",
    "name_html" : "Rottweil"
  },
  "DE136": {
    "name_latin" : "Schwarzwald-Baar-Kreis",
    "nuts_name" : "Schwarzwald-Baar-Kreis",
    "name_ascii" : "Schwarzwald-Baar-Kreis",
    "name_html" : "Schwarzwald-Baar-Kreis"
  },
  "DE137": {
    "name_latin" : "Tuttlingen",
    "nuts_name" : "Tuttlingen",
    "name_ascii" : "Tuttlingen",
    "name_html" : "Tuttlingen"
  },
  "DE139": {
    "name_latin" : "Lörrach",
    "nuts_name" : "Lörrach",
    "name_ascii" : "Lorrach",
    "name_html" : "L&#x00F6;rrach"
  },
  "DE13A": {
    "name_latin" : "Waldshut",
    "nuts_name" : "Waldshut",
    "name_ascii" : "Waldshut",
    "name_html" : "Waldshut"
  },
  "DE141": {
    "name_latin" : "Reutlingen",
    "nuts_name" : "Reutlingen",
    "name_ascii" : "Reutlingen",
    "name_html" : "Reutlingen"
  },
  "DE143": {
    "name_latin" : "Zollernalbkreis",
    "nuts_name" : "Zollernalbkreis",
    "name_ascii" : "Zollernalbkreis",
    "name_html" : "Zollernalbkreis"
  },
  "DE144": {
    "name_latin" : "Ulm, Stadtkreis",
    "nuts_name" : "Ulm, Stadtkreis",
    "name_ascii" : "Ulm, Stadtkreis",
    "name_html" : "Ulm, Stadtkreis"
  },
  "DE145": {
    "name_latin" : "Alb-Donau-Kreis",
    "nuts_name" : "Alb-Donau-Kreis",
    "name_ascii" : "Alb-Donau-Kreis",
    "name_html" : "Alb-Donau-Kreis"
  },
  "DE146": {
    "name_latin" : "Biberach",
    "nuts_name" : "Biberach",
    "name_ascii" : "Biberach",
    "name_html" : "Biberach"
  },
  "DE147": {
    "name_latin" : "Bodenseekreis",
    "nuts_name" : "Bodenseekreis",
    "name_ascii" : "Bodenseekreis",
    "name_html" : "Bodenseekreis"
  },
  "DE148": {
    "name_latin" : "Ravensburg",
    "nuts_name" : "Ravensburg",
    "name_ascii" : "Ravensburg",
    "name_html" : "Ravensburg"
  },
  "DE149": {
    "name_latin" : "Sigmaringen",
    "nuts_name" : "Sigmaringen",
    "name_ascii" : "Sigmaringen",
    "name_html" : "Sigmaringen"
  },
  "DE211": {
    "name_latin" : "Ingolstadt, Kreisfreie Stadt",
    "nuts_name" : "Ingolstadt, Kreisfreie Stadt",
    "name_ascii" : "Ingolstadt, Kreisfreie Stadt",
    "name_html" : "Ingolstadt, Kreisfreie Stadt"
  },
  "DE213": {
    "name_latin" : "Rosenheim, Kreisfreie Stadt",
    "nuts_name" : "Rosenheim, Kreisfreie Stadt",
    "name_ascii" : "Rosenheim, Kreisfreie Stadt",
    "name_html" : "Rosenheim, Kreisfreie Stadt"
  },
  "DE214": {
    "name_latin" : "Altötting",
    "nuts_name" : "Altötting",
    "name_ascii" : "Altotting",
    "name_html" : "Alt&#x00F6;tting"
  },
  "DE215": {
    "name_latin" : "Berchtesgadener Land",
    "nuts_name" : "Berchtesgadener Land",
    "name_ascii" : "Berchtesgadener Land",
    "name_html" : "Berchtesgadener Land"
  },
  "DE216": {
    "name_latin" : "Bad Tölz-Wolfratshausen",
    "nuts_name" : "Bad Tölz-Wolfratshausen",
    "name_ascii" : "Bad Tolz-Wolfratshausen",
    "name_html" : "Bad T&#x00F6;lz-Wolfratshausen"
  },
  "DE217": {
    "name_latin" : "Dachau",
    "nuts_name" : "Dachau",
    "name_ascii" : "Dachau",
    "name_html" : "Dachau"
  },
  "DE218": {
    "name_latin" : "Ebersberg",
    "nuts_name" : "Ebersberg",
    "name_ascii" : "Ebersberg",
    "name_html" : "Ebersberg"
  },
  "DE219": {
    "name_latin" : "Eichstätt",
    "nuts_name" : "Eichstätt",
    "name_ascii" : "Eichstatt",
    "name_html" : "Eichst&#x00E4;tt"
  },
  "DE21A": {
    "name_latin" : "Erding",
    "nuts_name" : "Erding",
    "name_ascii" : "Erding",
    "name_html" : "Erding"
  },
  "DE21B": {
    "name_latin" : "Freising",
    "nuts_name" : "Freising",
    "name_ascii" : "Freising",
    "name_html" : "Freising"
  },
  "DE21C": {
    "name_latin" : "Fürstenfeldbruck",
    "nuts_name" : "Fürstenfeldbruck",
    "name_ascii" : "Furstenfeldbruck",
    "name_html" : "F&#x00FC;rstenfeldbruck"
  },
  "DE21D": {
    "name_latin" : "Garmisch-Partenkirchen",
    "nuts_name" : "Garmisch-Partenkirchen",
    "name_ascii" : "Garmisch-Partenkirchen",
    "name_html" : "Garmisch-Partenkirchen"
  },
  "DE21E": {
    "name_latin" : "Landsberg am Lech",
    "nuts_name" : "Landsberg am Lech",
    "name_ascii" : "Landsberg am Lech",
    "name_html" : "Landsberg am Lech"
  },
  "DE21F": {
    "name_latin" : "Miesbach",
    "nuts_name" : "Miesbach",
    "name_ascii" : "Miesbach",
    "name_html" : "Miesbach"
  },
  "DE21G": {
    "name_latin" : "Mühldorf a. Inn",
    "nuts_name" : "Mühldorf a. Inn",
    "name_ascii" : "Muhldorf a. Inn",
    "name_html" : "M&#x00FC;hldorf a. Inn"
  },
  "DE21H": {
    "name_latin" : "München, Landkreis",
    "nuts_name" : "München, Landkreis",
    "name_ascii" : "Munchen, Landkreis",
    "name_html" : "M&#x00FC;nchen, Landkreis"
  },
  "DE21I": {
    "name_latin" : "Neuburg-Schrobenhausen",
    "nuts_name" : "Neuburg-Schrobenhausen",
    "name_ascii" : "Neuburg-Schrobenhausen",
    "name_html" : "Neuburg-Schrobenhausen"
  },
  "DE21J": {
    "name_latin" : "Pfaffenhofen a. d. Ilm",
    "nuts_name" : "Pfaffenhofen a. d. Ilm",
    "name_ascii" : "Pfaffenhofen a. d. Ilm",
    "name_html" : "Pfaffenhofen a. d. Ilm"
  },
  "DE21K": {
    "name_latin" : "Rosenheim, Landkreis",
    "nuts_name" : "Rosenheim, Landkreis",
    "name_ascii" : "Rosenheim, Landkreis",
    "name_html" : "Rosenheim, Landkreis"
  },
  "DE21L": {
    "name_latin" : "Starnberg",
    "nuts_name" : "Starnberg",
    "name_ascii" : "Starnberg",
    "name_html" : "Starnberg"
  },
  "DE21M": {
    "name_latin" : "Traunstein",
    "nuts_name" : "Traunstein",
    "name_ascii" : "Traunstein",
    "name_html" : "Traunstein"
  },
  "DE21N": {
    "name_latin" : "Weilheim-Schongau",
    "nuts_name" : "Weilheim-Schongau",
    "name_ascii" : "Weilheim-Schongau",
    "name_html" : "Weilheim-Schongau"
  },
  "DE221": {
    "name_latin" : "Landshut, Kreisfreie Stadt",
    "nuts_name" : "Landshut, Kreisfreie Stadt",
    "name_ascii" : "Landshut, Kreisfreie Stadt",
    "name_html" : "Landshut, Kreisfreie Stadt"
  },
  "DE222": {
    "name_latin" : "Passau, Kreisfreie Stadt",
    "nuts_name" : "Passau, Kreisfreie Stadt",
    "name_ascii" : "Passau, Kreisfreie Stadt",
    "name_html" : "Passau, Kreisfreie Stadt"
  },
  "DE223": {
    "name_latin" : "Straubing, Kreisfreie Stadt",
    "nuts_name" : "Straubing, Kreisfreie Stadt",
    "name_ascii" : "Straubing, Kreisfreie Stadt",
    "name_html" : "Straubing, Kreisfreie Stadt"
  },
  "DE224": {
    "name_latin" : "Deggendorf",
    "nuts_name" : "Deggendorf",
    "name_ascii" : "Deggendorf",
    "name_html" : "Deggendorf"
  },
  "DE225": {
    "name_latin" : "Freyung-Grafenau",
    "nuts_name" : "Freyung-Grafenau",
    "name_ascii" : "Freyung-Grafenau",
    "name_html" : "Freyung-Grafenau"
  },
  "DE226": {
    "name_latin" : "Kelheim",
    "nuts_name" : "Kelheim",
    "name_ascii" : "Kelheim",
    "name_html" : "Kelheim"
  },
  "DE228": {
    "name_latin" : "Passau, Landkreis",
    "nuts_name" : "Passau, Landkreis",
    "name_ascii" : "Passau, Landkreis",
    "name_html" : "Passau, Landkreis"
  },
  "DE229": {
    "name_latin" : "Regen",
    "nuts_name" : "Regen",
    "name_ascii" : "Regen",
    "name_html" : "Regen"
  },
  "DE22A": {
    "name_latin" : "Rottal-Inn",
    "nuts_name" : "Rottal-Inn",
    "name_ascii" : "Rottal-Inn",
    "name_html" : "Rottal-Inn"
  },
  "DE22B": {
    "name_latin" : "Straubing-Bogen",
    "nuts_name" : "Straubing-Bogen",
    "name_ascii" : "Straubing-Bogen",
    "name_html" : "Straubing-Bogen"
  },
  "DE22C": {
    "name_latin" : "Dingolfing-Landau",
    "nuts_name" : "Dingolfing-Landau",
    "name_ascii" : "Dingolfing-Landau",
    "name_html" : "Dingolfing-Landau"
  },
  "DE232": {
    "name_latin" : "Regensburg, Kreisfreie Stadt",
    "nuts_name" : "Regensburg, Kreisfreie Stadt",
    "name_ascii" : "Regensburg, Kreisfreie Stadt",
    "name_html" : "Regensburg, Kreisfreie Stadt"
  },
  "DE233": {
    "name_latin" : "Weiden i. d. Opf, Kreisfreie Stadt",
    "nuts_name" : "Weiden i. d. Opf, Kreisfreie Stadt",
    "name_ascii" : "Weiden i. d. Opf, Kreisfreie Stadt",
    "name_html" : "Weiden i. d. Opf, Kreisfreie Stadt"
  },
  "DE234": {
    "name_latin" : "Amberg-Sulzbach",
    "nuts_name" : "Amberg-Sulzbach",
    "name_ascii" : "Amberg-Sulzbach",
    "name_html" : "Amberg-Sulzbach"
  },
  "DE235": {
    "name_latin" : "Cham",
    "nuts_name" : "Cham",
    "name_ascii" : "Cham",
    "name_html" : "Cham"
  },
  "DE236": {
    "name_latin" : "Neumarkt i. d. OPf.",
    "nuts_name" : "Neumarkt i. d. OPf.",
    "name_ascii" : "Neumarkt i. d. Opf.",
    "name_html" : "Neumarkt i. d. Opf."
  },
  "DE238": {
    "name_latin" : "Regensburg, Landkreis",
    "nuts_name" : "Regensburg, Landkreis",
    "name_ascii" : "Regensburg, Landkreis",
    "name_html" : "Regensburg, Landkreis"
  },
  "DE239": {
    "name_latin" : "Schwandorf",
    "nuts_name" : "Schwandorf",
    "name_ascii" : "Schwandorf",
    "name_html" : "Schwandorf"
  },
  "DE23A": {
    "name_latin" : "Tirschenreuth",
    "nuts_name" : "Tirschenreuth",
    "name_ascii" : "Tirschenreuth",
    "name_html" : "Tirschenreuth"
  },
  "DE241": {
    "name_latin" : "Bamberg, Kreisfreie Stadt",
    "nuts_name" : "Bamberg, Kreisfreie Stadt",
    "name_ascii" : "Bamberg, Kreisfreie Stadt",
    "name_html" : "Bamberg, Kreisfreie Stadt"
  },
  "DE242": {
    "name_latin" : "Bayreuth, Kreisfreie Stadt",
    "nuts_name" : "Bayreuth, Kreisfreie Stadt",
    "name_ascii" : "Bayreuth, Kreisfreie Stadt",
    "name_html" : "Bayreuth, Kreisfreie Stadt"
  },
  "DE244": {
    "name_latin" : "Hof, Kreisfreie Stadt",
    "nuts_name" : "Hof, Kreisfreie Stadt",
    "name_ascii" : "Hof, Kreisfreie Stadt",
    "name_html" : "Hof, Kreisfreie Stadt"
  },
  "DE245": {
    "name_latin" : "Bamberg, Landkreis",
    "nuts_name" : "Bamberg, Landkreis",
    "name_ascii" : "Bamberg, Landkreis",
    "name_html" : "Bamberg, Landkreis"
  },
  "DE246": {
    "name_latin" : "Bayreuth, Landkreis",
    "nuts_name" : "Bayreuth, Landkreis",
    "name_ascii" : "Bayreuth, Landkreis",
    "name_html" : "Bayreuth, Landkreis"
  },
  "DE247": {
    "name_latin" : "Coburg, Landkreis",
    "nuts_name" : "Coburg, Landkreis",
    "name_ascii" : "Coburg, Landkreis",
    "name_html" : "Coburg, Landkreis"
  },
  "DE248": {
    "name_latin" : "Forchheim",
    "nuts_name" : "Forchheim",
    "name_ascii" : "Forchheim",
    "name_html" : "Forchheim"
  },
  "DE249": {
    "name_latin" : "Hof, Landkreis",
    "nuts_name" : "Hof, Landkreis",
    "name_ascii" : "Hof, Landkreis",
    "name_html" : "Hof, Landkreis"
  },
  "DE24A": {
    "name_latin" : "Kronach",
    "nuts_name" : "Kronach",
    "name_ascii" : "Kronach",
    "name_html" : "Kronach"
  },
  "DE24C": {
    "name_latin" : "Lichtenfels",
    "nuts_name" : "Lichtenfels",
    "name_ascii" : "Lichtenfels",
    "name_html" : "Lichtenfels"
  },
  "DE24D": {
    "name_latin" : "Wunsiedel i. Fichtelgebirge",
    "nuts_name" : "Wunsiedel i. Fichtelgebirge",
    "name_ascii" : "Wunsiedel i. Fichtelgebirge",
    "name_html" : "Wunsiedel i. Fichtelgebirge"
  },
  "DE251": {
    "name_latin" : "Ansbach, Kreisfreie Stadt",
    "nuts_name" : "Ansbach, Kreisfreie Stadt",
    "name_ascii" : "Ansbach, Kreisfreie Stadt",
    "name_html" : "Ansbach, Kreisfreie Stadt"
  },
  "DE252": {
    "name_latin" : "Erlangen, Kreisfreie Stadt",
    "nuts_name" : "Erlangen, Kreisfreie Stadt",
    "name_ascii" : "Erlangen, Kreisfreie Stadt",
    "name_html" : "Erlangen, Kreisfreie Stadt"
  },
  "DE254": {
    "name_latin" : "Nürnberg, Kreisfreie Stadt",
    "nuts_name" : "Nürnberg, Kreisfreie Stadt",
    "name_ascii" : "Nurnberg, Kreisfreie Stadt",
    "name_html" : "N&#x00FC;rnberg, Kreisfreie Stadt"
  },
  "DE255": {
    "name_latin" : "Schwabach, Kreisfreie Stadt",
    "nuts_name" : "Schwabach, Kreisfreie Stadt",
    "name_ascii" : "Schwabach, Kreisfreie Stadt",
    "name_html" : "Schwabach, Kreisfreie Stadt"
  },
  "DE256": {
    "name_latin" : "Ansbach, Landkreis",
    "nuts_name" : "Ansbach, Landkreis",
    "name_ascii" : "Ansbach, Landkreis",
    "name_html" : "Ansbach, Landkreis"
  },
  "DE257": {
    "name_latin" : "Erlangen-Höchstadt",
    "nuts_name" : "Erlangen-Höchstadt",
    "name_ascii" : "Erlangen-Hochstadt",
    "name_html" : "Erlangen-H&#x00F6;chstadt"
  },
  "DE259": {
    "name_latin" : "Nürnberger Land",
    "nuts_name" : "Nürnberger Land",
    "name_ascii" : "Nurnberger Land",
    "name_html" : "N&#x00FC;rnberger Land"
  },
  "DE25A": {
    "name_latin" : "Neustadt a. d. Aisch-Bad Windsheim",
    "nuts_name" : "Neustadt a. d. Aisch-Bad Windsheim",
    "name_ascii" : "Neustadt a. d. Aisch-Bad Windsheim",
    "name_html" : "Neustadt a. d. Aisch-Bad Windsheim"
  },
  "DE25B": {
    "name_latin" : "Roth",
    "nuts_name" : "Roth",
    "name_ascii" : "Roth",
    "name_html" : "Roth"
  },
  "DE25C": {
    "name_latin" : "Weißenburg-Gunzenhausen",
    "nuts_name" : "Weißenburg-Gunzenhausen",
    "name_ascii" : "Weissenburg-Gunzenhausen",
    "name_html" : "Wei&#x00DF;enburg-Gunzenhausen"
  },
  "DE261": {
    "name_latin" : "Aschaffenburg, Kreisfreie Stadt",
    "nuts_name" : "Aschaffenburg, Kreisfreie Stadt",
    "name_ascii" : "Aschaffenburg, Kreisfreie Stadt",
    "name_html" : "Aschaffenburg, Kreisfreie Stadt"
  },
  "DE262": {
    "name_latin" : "Schweinfurt, Kreisfreie Stadt",
    "nuts_name" : "Schweinfurt, Kreisfreie Stadt",
    "name_ascii" : "Schweinfurt, Kreisfreie Stadt",
    "name_html" : "Schweinfurt, Kreisfreie Stadt"
  },
  "DE264": {
    "name_latin" : "Aschaffenburg, Landkreis",
    "nuts_name" : "Aschaffenburg, Landkreis",
    "name_ascii" : "Aschaffenburg, Landkreis",
    "name_html" : "Aschaffenburg, Landkreis"
  },
  "DE265": {
    "name_latin" : "Bad Kissingen",
    "nuts_name" : "Bad Kissingen",
    "name_ascii" : "Bad Kissingen",
    "name_html" : "Bad Kissingen"
  },
  "DE266": {
    "name_latin" : "Rhön-Grabfeld",
    "nuts_name" : "Rhön-Grabfeld",
    "name_ascii" : "Rhon-Grabfeld",
    "name_html" : "Rh&#x00F6;n-Grabfeld"
  },
  "DE267": {
    "name_latin" : "Haßberge",
    "nuts_name" : "Haßberge",
    "name_ascii" : "Hassberge",
    "name_html" : "Ha&#x00DF;berge"
  },
  "DE268": {
    "name_latin" : "Kitzingen",
    "nuts_name" : "Kitzingen",
    "name_ascii" : "Kitzingen",
    "name_html" : "Kitzingen"
  },
  "DE269": {
    "name_latin" : "Miltenberg",
    "nuts_name" : "Miltenberg",
    "name_ascii" : "Miltenberg",
    "name_html" : "Miltenberg"
  },
  "DE26A": {
    "name_latin" : "Main-Spessart",
    "nuts_name" : "Main-Spessart",
    "name_ascii" : "Main-Spessart",
    "name_html" : "Main-Spessart"
  },
  "DE26C": {
    "name_latin" : "Würzburg, Landkreis",
    "nuts_name" : "Würzburg, Landkreis",
    "name_ascii" : "Wurzburg, Landkreis",
    "name_html" : "W&#x00FC;rzburg, Landkreis"
  },
  "DE271": {
    "name_latin" : "Augsburg, Kreisfreie Stadt",
    "nuts_name" : "Augsburg, Kreisfreie Stadt",
    "name_ascii" : "Augsburg, Kreisfreie Stadt",
    "name_html" : "Augsburg, Kreisfreie Stadt"
  },
  "DE272": {
    "name_latin" : "Kaufbeuren, Kreisfreie Stadt",
    "nuts_name" : "Kaufbeuren, Kreisfreie Stadt",
    "name_ascii" : "Kaufbeuren, Kreisfreie Stadt",
    "name_html" : "Kaufbeuren, Kreisfreie Stadt"
  },
  "DE274": {
    "name_latin" : "Memmingen, Kreisfreie Stadt",
    "nuts_name" : "Memmingen, Kreisfreie Stadt",
    "name_ascii" : "Memmingen, Kreisfreie Stadt",
    "name_html" : "Memmingen, Kreisfreie Stadt"
  },
  "DE275": {
    "name_latin" : "Aichach-Friedberg",
    "nuts_name" : "Aichach-Friedberg",
    "name_ascii" : "Aichach-Friedberg",
    "name_html" : "Aichach-Friedberg"
  },
  "DE276": {
    "name_latin" : "Augsburg, Landkreis",
    "nuts_name" : "Augsburg, Landkreis",
    "name_ascii" : "Augsburg, Landkreis",
    "name_html" : "Augsburg, Landkreis"
  },
  "DE277": {
    "name_latin" : "Dillingen a.d. Donau",
    "nuts_name" : "Dillingen a.d. Donau",
    "name_ascii" : "Dillingen a.d. Donau",
    "name_html" : "Dillingen a.d. Donau"
  },
  "DE278": {
    "name_latin" : "Günzburg",
    "nuts_name" : "Günzburg",
    "name_ascii" : "Gunzburg",
    "name_html" : "G&#x00FC;nzburg"
  },
  "DE279": {
    "name_latin" : "Neu-Ulm",
    "nuts_name" : "Neu-Ulm",
    "name_ascii" : "Neu-Ulm",
    "name_html" : "Neu-Ulm"
  },
  "DE27A": {
    "name_latin" : "Lindau (Bodensee)",
    "nuts_name" : "Lindau (Bodensee)",
    "name_ascii" : "Lindau (Bodensee)",
    "name_html" : "Lindau (Bodensee)"
  },
  "DE27B": {
    "name_latin" : "Ostallgäu",
    "nuts_name" : "Ostallgäu",
    "name_ascii" : "Ostallgau",
    "name_html" : "Ostallg&#x00E4;u"
  },
  "DE27C": {
    "name_latin" : "Unterallgäu",
    "nuts_name" : "Unterallgäu",
    "name_ascii" : "Unterallgau",
    "name_html" : "Unterallg&#x00E4;u"
  },
  "DE27D": {
    "name_latin" : "Donau-Ries",
    "nuts_name" : "Donau-Ries",
    "name_ascii" : "Donau-Ries",
    "name_html" : "Donau-Ries"
  },
  "DE27E": {
    "name_latin" : "Oberallgäu",
    "nuts_name" : "Oberallgäu",
    "name_ascii" : "Oberallgau",
    "name_html" : "Oberallg&#x00E4;u"
  },
  "DE300": {
    "name_latin" : "Berlin",
    "nuts_name" : "Berlin",
    "name_ascii" : "Berlin",
    "name_html" : "Berlin"
  },
  "DE401": {
    "name_latin" : "Brandenburg an der Havel, Kreisfreie Stadt",
    "nuts_name" : "Brandenburg an der Havel, Kreisfreie Stadt",
    "name_ascii" : "Brandenburg an der Havel, Kreisfreie Stadt",
    "name_html" : "Brandenburg an der Havel, Kreisfreie Stadt"
  },
  "DE402": {
    "name_latin" : "Cottbus, Kreisfreie Stadt",
    "nuts_name" : "Cottbus, Kreisfreie Stadt",
    "name_ascii" : "Cottbus, Kreisfreie Stadt",
    "name_html" : "Cottbus, Kreisfreie Stadt"
  },
  "DE403": {
    "name_latin" : "Frankfurt (Oder), Kreisfreie Stadt",
    "nuts_name" : "Frankfurt (Oder), Kreisfreie Stadt",
    "name_ascii" : "Frankfurt (Oder), Kreisfreie Stadt",
    "name_html" : "Frankfurt (Oder), Kreisfreie Stadt"
  },
  "DE404": {
    "name_latin" : "Potsdam, Kreisfreie Stadt",
    "nuts_name" : "Potsdam, Kreisfreie Stadt",
    "name_ascii" : "Potsdam, Kreisfreie Stadt",
    "name_html" : "Potsdam, Kreisfreie Stadt"
  },
  "DE405": {
    "name_latin" : "Barnim",
    "nuts_name" : "Barnim",
    "name_ascii" : "Barnim",
    "name_html" : "Barnim"
  },
  "DE407": {
    "name_latin" : "Elbe-Elster",
    "nuts_name" : "Elbe-Elster",
    "name_ascii" : "Elbe-Elster",
    "name_html" : "Elbe-Elster"
  },
  "DE408": {
    "name_latin" : "Havelland",
    "nuts_name" : "Havelland",
    "name_ascii" : "Havelland",
    "name_html" : "Havelland"
  },
  "DE409": {
    "name_latin" : "Märkisch-Oderland",
    "nuts_name" : "Märkisch-Oderland",
    "name_ascii" : "Markisch-Oderland",
    "name_html" : "M&#x00E4;rkisch-Oderland"
  },
  "DE40A": {
    "name_latin" : "Oberhavel",
    "nuts_name" : "Oberhavel",
    "name_ascii" : "Oberhavel",
    "name_html" : "Oberhavel"
  },
  "DE40B": {
    "name_latin" : "Oberspreewald-Lausitz",
    "nuts_name" : "Oberspreewald-Lausitz",
    "name_ascii" : "Oberspreewald-Lausitz",
    "name_html" : "Oberspreewald-Lausitz"
  },
  "DE40D": {
    "name_latin" : "Ostprignitz-Ruppin",
    "nuts_name" : "Ostprignitz-Ruppin",
    "name_ascii" : "Ostprignitz-Ruppin",
    "name_html" : "Ostprignitz-Ruppin"
  },
  "DE40E": {
    "name_latin" : "Potsdam-Mittelmark",
    "nuts_name" : "Potsdam-Mittelmark",
    "name_ascii" : "Potsdam-Mittelmark",
    "name_html" : "Potsdam-Mittelmark"
  },
  "DE40F": {
    "name_latin" : "Prignitz",
    "nuts_name" : "Prignitz",
    "name_ascii" : "Prignitz",
    "name_html" : "Prignitz"
  },
  "DE40H": {
    "name_latin" : "Teltow-Fläming",
    "nuts_name" : "Teltow-Fläming",
    "name_ascii" : "Teltow-Flaming",
    "name_html" : "Teltow-Fl&#x00E4;ming"
  },
  "DE40I": {
    "name_latin" : "Uckermark",
    "nuts_name" : "Uckermark",
    "name_ascii" : "Uckermark",
    "name_html" : "Uckermark"
  },
  "DE501": {
    "name_latin" : "Bremen, Kreisfreie Stadt",
    "nuts_name" : "Bremen, Kreisfreie Stadt",
    "name_ascii" : "Bremen, Kreisfreie Stadt",
    "name_html" : "Bremen, Kreisfreie Stadt"
  },
  "DE600": {
    "name_latin" : "Hamburg",
    "nuts_name" : "Hamburg",
    "name_ascii" : "Hamburg",
    "name_html" : "Hamburg"
  },
  "DE711": {
    "name_latin" : "Darmstadt, Kreisfreie Stadt",
    "nuts_name" : "Darmstadt, Kreisfreie Stadt",
    "name_ascii" : "Darmstadt, Kreisfreie Stadt",
    "name_html" : "Darmstadt, Kreisfreie Stadt"
  },
  "DE712": {
    "name_latin" : "Frankfurt am Main, Kreisfreie Stadt",
    "nuts_name" : "Frankfurt am Main, Kreisfreie Stadt",
    "name_ascii" : "Frankfurt am Main, Kreisfreie Stadt",
    "name_html" : "Frankfurt am Main, Kreisfreie Stadt"
  },
  "DE714": {
    "name_latin" : "Wiesbaden, Kreisfreie Stadt",
    "nuts_name" : "Wiesbaden, Kreisfreie Stadt",
    "name_ascii" : "Wiesbaden, Kreisfreie Stadt",
    "name_html" : "Wiesbaden, Kreisfreie Stadt"
  },
  "DE715": {
    "name_latin" : "Bergstraße",
    "nuts_name" : "Bergstraße",
    "name_ascii" : "Bergstrasse",
    "name_html" : "Bergstra&#x00DF;e"
  },
  "DE716": {
    "name_latin" : "Darmstadt-Dieburg",
    "nuts_name" : "Darmstadt-Dieburg",
    "name_ascii" : "Darmstadt-Dieburg",
    "name_html" : "Darmstadt-Dieburg"
  },
  "DE717": {
    "name_latin" : "Groß-Gerau",
    "nuts_name" : "Groß-Gerau",
    "name_ascii" : "Gross-Gerau",
    "name_html" : "Gro&#x00DF;-Gerau"
  },
  "DE718": {
    "name_latin" : "Hochtaunuskreis",
    "nuts_name" : "Hochtaunuskreis",
    "name_ascii" : "Hochtaunuskreis",
    "name_html" : "Hochtaunuskreis"
  },
  "DE719": {
    "name_latin" : "Main-Kinzig-Kreis",
    "nuts_name" : "Main-Kinzig-Kreis",
    "name_ascii" : "Main-Kinzig-Kreis",
    "name_html" : "Main-Kinzig-Kreis"
  },
  "DE71A": {
    "name_latin" : "Main-Taunus-Kreis",
    "nuts_name" : "Main-Taunus-Kreis",
    "name_ascii" : "Main-Taunus-Kreis",
    "name_html" : "Main-Taunus-Kreis"
  },
  "DE71B": {
    "name_latin" : "Odenwaldkreis",
    "nuts_name" : "Odenwaldkreis",
    "name_ascii" : "Odenwaldkreis",
    "name_html" : "Odenwaldkreis"
  },
  "DE71C": {
    "name_latin" : "Offenbach, Landkreis",
    "nuts_name" : "Offenbach, Landkreis",
    "name_ascii" : "Offenbach, Landkreis",
    "name_html" : "Offenbach, Landkreis"
  },
  "DE71E": {
    "name_latin" : "Wetteraukreis",
    "nuts_name" : "Wetteraukreis",
    "name_ascii" : "Wetteraukreis",
    "name_html" : "Wetteraukreis"
  },
  "DE721": {
    "name_latin" : "Gießen, Landkreis",
    "nuts_name" : "Gießen, Landkreis",
    "name_ascii" : "Giessen, Landkreis",
    "name_html" : "Gie&#x00DF;en, Landkreis"
  },
  "DE722": {
    "name_latin" : "Lahn-Dill-Kreis",
    "nuts_name" : "Lahn-Dill-Kreis",
    "name_ascii" : "Lahn-Dill-Kreis",
    "name_html" : "Lahn-Dill-Kreis"
  },
  "DE723": {
    "name_latin" : "Limburg-Weilburg",
    "nuts_name" : "Limburg-Weilburg",
    "name_ascii" : "Limburg-Weilburg",
    "name_html" : "Limburg-Weilburg"
  },
  "DE725": {
    "name_latin" : "Vogelsbergkreis",
    "nuts_name" : "Vogelsbergkreis",
    "name_ascii" : "Vogelsbergkreis",
    "name_html" : "Vogelsbergkreis"
  },
  "DE731": {
    "name_latin" : "Kassel, Kreisfreie Stadt",
    "nuts_name" : "Kassel, Kreisfreie Stadt",
    "name_ascii" : "Kassel, Kreisfreie Stadt",
    "name_html" : "Kassel, Kreisfreie Stadt"
  },
  "DE732": {
    "name_latin" : "Fulda",
    "nuts_name" : "Fulda",
    "name_ascii" : "Fulda",
    "name_html" : "Fulda"
  },
  "DE733": {
    "name_latin" : "Hersfeld-Rotenburg",
    "nuts_name" : "Hersfeld-Rotenburg",
    "name_ascii" : "Hersfeld-Rotenburg",
    "name_html" : "Hersfeld-Rotenburg"
  },
  "DE734": {
    "name_latin" : "Kassel, Landkreis",
    "nuts_name" : "Kassel, Landkreis",
    "name_ascii" : "Kassel, Landkreis",
    "name_html" : "Kassel, Landkreis"
  },
  "DE736": {
    "name_latin" : "Waldeck-Frankenberg",
    "nuts_name" : "Waldeck-Frankenberg",
    "name_ascii" : "Waldeck-Frankenberg",
    "name_html" : "Waldeck-Frankenberg"
  },
  "DE737": {
    "name_latin" : "Werra-Meißner-Kreis",
    "nuts_name" : "Werra-Meißner-Kreis",
    "name_ascii" : "Werra-Meissner-Kreis",
    "name_html" : "Werra-Mei&#x00DF;ner-Kreis"
  },
  "DE804": {
    "name_latin" : "Schwerin, Kreisfreie Stadt",
    "nuts_name" : "Schwerin, Kreisfreie Stadt",
    "name_ascii" : "Schwerin, Kreisfreie Stadt",
    "name_html" : "Schwerin, Kreisfreie Stadt"
  },
  "DE80J": {
    "name_latin" : "Mecklenburgische Seenplatte",
    "nuts_name" : "Mecklenburgische Seenplatte",
    "name_ascii" : "Mecklenburgische Seenplatte",
    "name_html" : "Mecklenburgische Seenplatte"
  },
  "DE80K": {
    "name_latin" : "Landkreis Rostock",
    "nuts_name" : "Landkreis Rostock",
    "name_ascii" : "Landkreis Rostock",
    "name_html" : "Landkreis Rostock"
  },
  "DE80L": {
    "name_latin" : "Vorpommern-Rügen",
    "nuts_name" : "Vorpommern-Rügen",
    "name_ascii" : "Vorpommern-Rugen",
    "name_html" : "Vorpommern-R&#x00FC;gen"
  },
  "DE80N": {
    "name_latin" : "Vorpommern-Greifswald",
    "nuts_name" : "Vorpommern-Greifswald",
    "name_ascii" : "Vorpommern-Greifswald",
    "name_html" : "Vorpommern-Greifswald"
  },
  "DE80O": {
    "name_latin" : "Ludwigslust-Parchim",
    "nuts_name" : "Ludwigslust-Parchim",
    "name_ascii" : "Ludwigslust-Parchim",
    "name_html" : "Ludwigslust-Parchim"
  },
  "DE911": {
    "name_latin" : "Braunschweig, Kreisfreie Stadt",
    "nuts_name" : "Braunschweig, Kreisfreie Stadt",
    "name_ascii" : "Braunschweig, Kreisfreie Stadt",
    "name_html" : "Braunschweig, Kreisfreie Stadt"
  },
  "DE913": {
    "name_latin" : "Wolfsburg, Kreisfreie Stadt",
    "nuts_name" : "Wolfsburg, Kreisfreie Stadt",
    "name_ascii" : "Wolfsburg, Kreisfreie Stadt",
    "name_html" : "Wolfsburg, Kreisfreie Stadt"
  },
  "DE914": {
    "name_latin" : "Gifhorn",
    "nuts_name" : "Gifhorn",
    "name_ascii" : "Gifhorn",
    "name_html" : "Gifhorn"
  },
  "DE915": {
    "name_latin" : "Göttingen",
    "nuts_name" : "Göttingen",
    "name_ascii" : "Gottingen",
    "name_html" : "G&#x00F6;ttingen"
  },
  "DE916": {
    "name_latin" : "Goslar",
    "nuts_name" : "Goslar",
    "name_ascii" : "Goslar",
    "name_html" : "Goslar"
  },
  "DE917": {
    "name_latin" : "Helmstedt",
    "nuts_name" : "Helmstedt",
    "name_ascii" : "Helmstedt",
    "name_html" : "Helmstedt"
  },
  "DE918": {
    "name_latin" : "Northeim",
    "nuts_name" : "Northeim",
    "name_ascii" : "Northeim",
    "name_html" : "Northeim"
  },
  "DE919": {
    "name_latin" : "Osterode am Harz",
    "nuts_name" : "Osterode am Harz",
    "name_ascii" : "Osterode am Harz",
    "name_html" : "Osterode am Harz"
  },
  "DE91A": {
    "name_latin" : "Peine",
    "nuts_name" : "Peine",
    "name_ascii" : "Peine",
    "name_html" : "Peine"
  },
  "DE91B": {
    "name_latin" : "Wolfenbüttel",
    "nuts_name" : "Wolfenbüttel",
    "name_ascii" : "Wolfenbuttel",
    "name_html" : "Wolfenb&#x00FC;ttel"
  },
  "DE922": {
    "name_latin" : "Diepholz",
    "nuts_name" : "Diepholz",
    "name_ascii" : "Diepholz",
    "name_html" : "Diepholz"
  },
  "DE923": {
    "name_latin" : "Hameln-Pyrmont",
    "nuts_name" : "Hameln-Pyrmont",
    "name_ascii" : "Hameln-Pyrmont",
    "name_html" : "Hameln-Pyrmont"
  },
  "DE925": {
    "name_latin" : "Hildesheim",
    "nuts_name" : "Hildesheim",
    "name_ascii" : "Hildesheim",
    "name_html" : "Hildesheim"
  },
  "DE926": {
    "name_latin" : "Holzminden",
    "nuts_name" : "Holzminden",
    "name_ascii" : "Holzminden",
    "name_html" : "Holzminden"
  },
  "DE927": {
    "name_latin" : "Nienburg (Weser)",
    "nuts_name" : "Nienburg (Weser)",
    "name_ascii" : "Nienburg (Weser)",
    "name_html" : "Nienburg (Weser)"
  },
  "DE928": {
    "name_latin" : "Schaumburg",
    "nuts_name" : "Schaumburg",
    "name_ascii" : "Schaumburg",
    "name_html" : "Schaumburg"
  },
  "DE929": {
    "name_latin" : "Region Hannover",
    "nuts_name" : "Region Hannover",
    "name_ascii" : "Region Hannover",
    "name_html" : "Region Hannover"
  },
  "DE931": {
    "name_latin" : "Celle",
    "nuts_name" : "Celle",
    "name_ascii" : "Celle",
    "name_html" : "Celle"
  },
  "DE932": {
    "name_latin" : "Cuxhaven",
    "nuts_name" : "Cuxhaven",
    "name_ascii" : "Cuxhaven",
    "name_html" : "Cuxhaven"
  },
  "DE933": {
    "name_latin" : "Harburg",
    "nuts_name" : "Harburg",
    "name_ascii" : "Harburg",
    "name_html" : "Harburg"
  },
  "DE934": {
    "name_latin" : "Lüchow-Dannenberg",
    "nuts_name" : "Lüchow-Dannenberg",
    "name_ascii" : "Luchow-Dannenberg",
    "name_html" : "L&#x00FC;chow-Dannenberg"
  },
  "DE935": {
    "name_latin" : "Lüneburg, Landkreis",
    "nuts_name" : "Lüneburg, Landkreis",
    "name_ascii" : "Luneburg, Landkreis",
    "name_html" : "L&#x00FC;neburg, Landkreis"
  },
  "DE936": {
    "name_latin" : "Osterholz",
    "nuts_name" : "Osterholz",
    "name_ascii" : "Osterholz",
    "name_html" : "Osterholz"
  },
  "DE937": {
    "name_latin" : "Rotenburg (Wümme)",
    "nuts_name" : "Rotenburg (Wümme)",
    "name_ascii" : "Rotenburg (Wumme)",
    "name_html" : "Rotenburg (W&#x00FC;mme)"
  },
  "DE938": {
    "name_latin" : "Heidekreis",
    "nuts_name" : "Heidekreis",
    "name_ascii" : "Heidekreis",
    "name_html" : "Heidekreis"
  },
  "DE939": {
    "name_latin" : "Stade",
    "nuts_name" : "Stade",
    "name_ascii" : "Stade",
    "name_html" : "Stade"
  },
  "DE93A": {
    "name_latin" : "Uelzen",
    "nuts_name" : "Uelzen",
    "name_ascii" : "Uelzen",
    "name_html" : "Uelzen"
  },
  "DE93B": {
    "name_latin" : "Verden",
    "nuts_name" : "Verden",
    "name_ascii" : "Verden",
    "name_html" : "Verden"
  },
  "DE941": {
    "name_latin" : "Delmenhorst, Kreisfreie Stadt",
    "nuts_name" : "Delmenhorst, Kreisfreie Stadt",
    "name_ascii" : "Delmenhorst, Kreisfreie Stadt",
    "name_html" : "Delmenhorst, Kreisfreie Stadt"
  },
  "DE942": {
    "name_latin" : "Emden, Kreisfreie Stadt",
    "nuts_name" : "Emden, Kreisfreie Stadt",
    "name_ascii" : "Emden, Kreisfreie Stadt",
    "name_html" : "Emden, Kreisfreie Stadt"
  },
  "DE944": {
    "name_latin" : "Osnabrück, Kreisfreie Stadt",
    "nuts_name" : "Osnabrück, Kreisfreie Stadt",
    "name_ascii" : "Osnabruck, Kreisfreie Stadt",
    "name_html" : "Osnabr&#x00FC;ck, Kreisfreie Stadt"
  },
  "DE945": {
    "name_latin" : "Wilhelmshaven, Kreisfreie Stadt",
    "nuts_name" : "Wilhelmshaven, Kreisfreie Stadt",
    "name_ascii" : "Wilhelmshaven, Kreisfreie Stadt",
    "name_html" : "Wilhelmshaven, Kreisfreie Stadt"
  },
  "DE946": {
    "name_latin" : "Ammerland",
    "nuts_name" : "Ammerland",
    "name_ascii" : "Ammerland",
    "name_html" : "Ammerland"
  },
  "DE947": {
    "name_latin" : "Aurich",
    "nuts_name" : "Aurich",
    "name_ascii" : "Aurich",
    "name_html" : "Aurich"
  },
  "DE948": {
    "name_latin" : "Cloppenburg",
    "nuts_name" : "Cloppenburg",
    "name_ascii" : "Cloppenburg",
    "name_html" : "Cloppenburg"
  },
  "DE949": {
    "name_latin" : "Emsland",
    "nuts_name" : "Emsland",
    "name_ascii" : "Emsland",
    "name_html" : "Emsland"
  },
  "DE94A": {
    "name_latin" : "Friesland (DE)",
    "nuts_name" : "Friesland (DE)",
    "name_ascii" : "Friesland (DE)",
    "name_html" : "Friesland (DE)"
  },
  "DE94B": {
    "name_latin" : "Grafschaft Bentheim",
    "nuts_name" : "Grafschaft Bentheim",
    "name_ascii" : "Grafschaft Bentheim",
    "name_html" : "Grafschaft Bentheim"
  },
  "DE94C": {
    "name_latin" : "Leer",
    "nuts_name" : "Leer",
    "name_ascii" : "Leer",
    "name_html" : "Leer"
  },
  "DE94D": {
    "name_latin" : "Oldenburg, Landkreis",
    "nuts_name" : "Oldenburg, Landkreis",
    "name_ascii" : "Oldenburg, Landkreis",
    "name_html" : "Oldenburg, Landkreis"
  },
  "DE94F": {
    "name_latin" : "Vechta",
    "nuts_name" : "Vechta",
    "name_ascii" : "Vechta",
    "name_html" : "Vechta"
  },
  "DE94G": {
    "name_latin" : "Wesermarsch",
    "nuts_name" : "Wesermarsch",
    "name_ascii" : "Wesermarsch",
    "name_html" : "Wesermarsch"
  },
  "DE94H": {
    "name_latin" : "Wittmund",
    "nuts_name" : "Wittmund",
    "name_ascii" : "Wittmund",
    "name_html" : "Wittmund"
  },
  "DEA11": {
    "name_latin" : "Düsseldorf, Kreisfreie Stadt",
    "nuts_name" : "Düsseldorf, Kreisfreie Stadt",
    "name_ascii" : "Dusseldorf, Kreisfreie Stadt",
    "name_html" : "D&#x00FC;sseldorf, Kreisfreie Stadt"
  },
  "DEA13": {
    "name_latin" : "Essen, Kreisfreie Stadt",
    "nuts_name" : "Essen, Kreisfreie Stadt",
    "name_ascii" : "Essen, Kreisfreie Stadt",
    "name_html" : "Essen, Kreisfreie Stadt"
  },
  "DEA14": {
    "name_latin" : "Krefeld, Kreisfreie Stadt",
    "nuts_name" : "Krefeld, Kreisfreie Stadt",
    "name_ascii" : "Krefeld, Kreisfreie Stadt",
    "name_html" : "Krefeld, Kreisfreie Stadt"
  },
  "DEA15": {
    "name_latin" : "Mönchengladbach, Kreisfreie Stadt",
    "nuts_name" : "Mönchengladbach, Kreisfreie Stadt",
    "name_ascii" : "Monchengladbach, Kreisfreie Stadt",
    "name_html" : "M&#x00F6;nchengladbach, Kreisfreie Stadt"
  },
  "DEA17": {
    "name_latin" : "Oberhausen, Kreisfreie Stadt",
    "nuts_name" : "Oberhausen, Kreisfreie Stadt",
    "name_ascii" : "Oberhausen, Kreisfreie Stadt",
    "name_html" : "Oberhausen, Kreisfreie Stadt"
  },
  "DEA18": {
    "name_latin" : "Remscheid, Kreisfreie Stadt",
    "nuts_name" : "Remscheid, Kreisfreie Stadt",
    "name_ascii" : "Remscheid, Kreisfreie Stadt",
    "name_html" : "Remscheid, Kreisfreie Stadt"
  },
  "DEA19": {
    "name_latin" : "Solingen, Kreisfreie Stadt",
    "nuts_name" : "Solingen, Kreisfreie Stadt",
    "name_ascii" : "Solingen, Kreisfreie Stadt",
    "name_html" : "Solingen, Kreisfreie Stadt"
  },
  "DEA1A": {
    "name_latin" : "Wuppertal, Kreisfreie Stadt",
    "nuts_name" : "Wuppertal, Kreisfreie Stadt",
    "name_ascii" : "Wuppertal, Kreisfreie Stadt",
    "name_html" : "Wuppertal, Kreisfreie Stadt"
  },
  "DEA1B": {
    "name_latin" : "Kleve",
    "nuts_name" : "Kleve",
    "name_ascii" : "Kleve",
    "name_html" : "Kleve"
  },
  "DEA1C": {
    "name_latin" : "Mettmann",
    "nuts_name" : "Mettmann",
    "name_ascii" : "Mettmann",
    "name_html" : "Mettmann"
  },
  "DEA1D": {
    "name_latin" : "Rhein-Kreis Neuss",
    "nuts_name" : "Rhein-Kreis Neuss",
    "name_ascii" : "Rhein-Kreis Neuss",
    "name_html" : "Rhein-Kreis Neuss"
  },
  "DEA1E": {
    "name_latin" : "Viersen",
    "nuts_name" : "Viersen",
    "name_ascii" : "Viersen",
    "name_html" : "Viersen"
  },
  "DEA1F": {
    "name_latin" : "Wesel",
    "nuts_name" : "Wesel",
    "name_ascii" : "Wesel",
    "name_html" : "Wesel"
  },
  "DEA23": {
    "name_latin" : "Köln, Kreisfreie Stadt",
    "nuts_name" : "Köln, Kreisfreie Stadt",
    "name_ascii" : "Koln, Kreisfreie Stadt",
    "name_html" : "K&#x00F6;ln, Kreisfreie Stadt"
  },
  "DEA24": {
    "name_latin" : "Leverkusen, Kreisfreie Stadt",
    "nuts_name" : "Leverkusen, Kreisfreie Stadt",
    "name_ascii" : "Leverkusen, Kreisfreie Stadt",
    "name_html" : "Leverkusen, Kreisfreie Stadt"
  },
  "DEA26": {
    "name_latin" : "Düren",
    "nuts_name" : "Düren",
    "name_ascii" : "Duren",
    "name_html" : "D&#x00FC;ren"
  },
  "DEA27": {
    "name_latin" : "Rhein-Erft-Kreis",
    "nuts_name" : "Rhein-Erft-Kreis",
    "name_ascii" : "Rhein-Erft-Kreis",
    "name_html" : "Rhein-Erft-Kreis"
  },
  "DEA28": {
    "name_latin" : "Euskirchen",
    "nuts_name" : "Euskirchen",
    "name_ascii" : "Euskirchen",
    "name_html" : "Euskirchen"
  },
  "DEA29": {
    "name_latin" : "Heinsberg",
    "nuts_name" : "Heinsberg",
    "name_ascii" : "Heinsberg",
    "name_html" : "Heinsberg"
  },
  "DEA2B": {
    "name_latin" : "Rheinisch-Bergischer Kreis",
    "nuts_name" : "Rheinisch-Bergischer Kreis",
    "name_ascii" : "Rheinisch-Bergischer Kreis",
    "name_html" : "Rheinisch-Bergischer Kreis"
  },
  "DEA2C": {
    "name_latin" : "Rhein-Sieg-Kreis",
    "nuts_name" : "Rhein-Sieg-Kreis",
    "name_ascii" : "Rhein-Sieg-Kreis",
    "name_html" : "Rhein-Sieg-Kreis"
  },
  "DEA2D": {
    "name_latin" : "Städteregion Aachen",
    "nuts_name" : "Städteregion Aachen",
    "name_ascii" : "Stadteregion Aachen",
    "name_html" : "St&#x00E4;dteregion Aachen"
  },
  "DEA32": {
    "name_latin" : "Gelsenkirchen, Kreisfreie Stadt",
    "nuts_name" : "Gelsenkirchen, Kreisfreie Stadt",
    "name_ascii" : "Gelsenkirchen, Kreisfreie Stadt",
    "name_html" : "Gelsenkirchen, Kreisfreie Stadt"
  },
  "DEA33": {
    "name_latin" : "Münster, Kreisfreie Stadt",
    "nuts_name" : "Münster, Kreisfreie Stadt",
    "name_ascii" : "Munster, Kreisfreie Stadt",
    "name_html" : "M&#x00FC;nster, Kreisfreie Stadt"
  },
  "DEA34": {
    "name_latin" : "Borken",
    "nuts_name" : "Borken",
    "name_ascii" : "Borken",
    "name_html" : "Borken"
  },
  "DEA35": {
    "name_latin" : "Coesfeld",
    "nuts_name" : "Coesfeld",
    "name_ascii" : "Coesfeld",
    "name_html" : "Coesfeld"
  },
  "DEA36": {
    "name_latin" : "Recklinghausen",
    "nuts_name" : "Recklinghausen",
    "name_ascii" : "Recklinghausen",
    "name_html" : "Recklinghausen"
  },
  "DEA37": {
    "name_latin" : "Steinfurt",
    "nuts_name" : "Steinfurt",
    "name_ascii" : "Steinfurt",
    "name_html" : "Steinfurt"
  },
  "DEA38": {
    "name_latin" : "Warendorf",
    "nuts_name" : "Warendorf",
    "name_ascii" : "Warendorf",
    "name_html" : "Warendorf"
  },
  "DEA42": {
    "name_latin" : "Gütersloh",
    "nuts_name" : "Gütersloh",
    "name_ascii" : "Gutersloh",
    "name_html" : "G&#x00FC;tersloh"
  },
  "DEA43": {
    "name_latin" : "Herford",
    "nuts_name" : "Herford",
    "name_ascii" : "Herford",
    "name_html" : "Herford"
  },
  "DEA44": {
    "name_latin" : "Höxter",
    "nuts_name" : "Höxter",
    "name_ascii" : "Hoxter",
    "name_html" : "H&#x00F6;xter"
  },
  "DEA45": {
    "name_latin" : "Lippe",
    "nuts_name" : "Lippe",
    "name_ascii" : "Lippe",
    "name_html" : "Lippe"
  },
  "DEA46": {
    "name_latin" : "Minden-Lübbecke",
    "nuts_name" : "Minden-Lübbecke",
    "name_ascii" : "Minden-Lubbecke",
    "name_html" : "Minden-L&#x00FC;bbecke"
  },
  "DEA47": {
    "name_latin" : "Paderborn",
    "nuts_name" : "Paderborn",
    "name_ascii" : "Paderborn",
    "name_html" : "Paderborn"
  },
  "DEA51": {
    "name_latin" : "Bochum, Kreisfreie Stadt",
    "nuts_name" : "Bochum, Kreisfreie Stadt",
    "name_ascii" : "Bochum, Kreisfreie Stadt",
    "name_html" : "Bochum, Kreisfreie Stadt"
  },
  "DEA52": {
    "name_latin" : "Dortmund, Kreisfreie Stadt",
    "nuts_name" : "Dortmund, Kreisfreie Stadt",
    "name_ascii" : "Dortmund, Kreisfreie Stadt",
    "name_html" : "Dortmund, Kreisfreie Stadt"
  },
  "DEA53": {
    "name_latin" : "Hagen, Kreisfreie Stadt",
    "nuts_name" : "Hagen, Kreisfreie Stadt",
    "name_ascii" : "Hagen, Kreisfreie Stadt",
    "name_html" : "Hagen, Kreisfreie Stadt"
  },
  "DEA54": {
    "name_latin" : "Hamm, Kreisfreie Stadt",
    "nuts_name" : "Hamm, Kreisfreie Stadt",
    "name_ascii" : "Hamm, Kreisfreie Stadt",
    "name_html" : "Hamm, Kreisfreie Stadt"
  },
  "DEA55": {
    "name_latin" : "Herne, Kreisfreie Stadt",
    "nuts_name" : "Herne, Kreisfreie Stadt",
    "name_ascii" : "Herne, Kreisfreie Stadt",
    "name_html" : "Herne, Kreisfreie Stadt"
  },
  "DEA56": {
    "name_latin" : "Ennepe-Ruhr-Kreis",
    "nuts_name" : "Ennepe-Ruhr-Kreis",
    "name_ascii" : "Ennepe-Ruhr-Kreis",
    "name_html" : "Ennepe-Ruhr-Kreis"
  },
  "DEA57": {
    "name_latin" : "Hochsauerlandkreis",
    "nuts_name" : "Hochsauerlandkreis",
    "name_ascii" : "Hochsauerlandkreis",
    "name_html" : "Hochsauerlandkreis"
  },
  "DEA58": {
    "name_latin" : "Märkischer Kreis",
    "nuts_name" : "Märkischer Kreis",
    "name_ascii" : "Markischer Kreis",
    "name_html" : "M&#x00E4;rkischer Kreis"
  },
  "DEA59": {
    "name_latin" : "Olpe",
    "nuts_name" : "Olpe",
    "name_ascii" : "Olpe",
    "name_html" : "Olpe"
  },
  "DEA5A": {
    "name_latin" : "Siegen-Wittgenstein",
    "nuts_name" : "Siegen-Wittgenstein",
    "name_ascii" : "Siegen-Wittgenstein",
    "name_html" : "Siegen-Wittgenstein"
  },
  "DEA5B": {
    "name_latin" : "Soest",
    "nuts_name" : "Soest",
    "name_ascii" : "Soest",
    "name_html" : "Soest"
  },
  "DEA5C": {
    "name_latin" : "Unna",
    "nuts_name" : "Unna",
    "name_ascii" : "Unna",
    "name_html" : "Unna"
  },
  "DEB11": {
    "name_latin" : "Koblenz, Kreisfreie Stadt",
    "nuts_name" : "Koblenz, Kreisfreie Stadt",
    "name_ascii" : "Koblenz, Kreisfreie Stadt",
    "name_html" : "Koblenz, Kreisfreie Stadt"
  },
  "DEB12": {
    "name_latin" : "Ahrweiler",
    "nuts_name" : "Ahrweiler",
    "name_ascii" : "Ahrweiler",
    "name_html" : "Ahrweiler"
  },
  "DEB13": {
    "name_latin" : "Altenkirchen (Westerwald)",
    "nuts_name" : "Altenkirchen (Westerwald)",
    "name_ascii" : "Altenkirchen (Westerwald)",
    "name_html" : "Altenkirchen (Westerwald)"
  },
  "DEB14": {
    "name_latin" : "Bad Kreuznach",
    "nuts_name" : "Bad Kreuznach",
    "name_ascii" : "Bad Kreuznach",
    "name_html" : "Bad Kreuznach"
  },
  "DEB15": {
    "name_latin" : "Birkenfeld",
    "nuts_name" : "Birkenfeld",
    "name_ascii" : "Birkenfeld",
    "name_html" : "Birkenfeld"
  },
  "DEB16": {
    "name_latin" : "Cochem-Zell",
    "nuts_name" : "Cochem-Zell",
    "name_ascii" : "Cochem-Zell",
    "name_html" : "Cochem-Zell"
  },
  "DEB17": {
    "name_latin" : "Mayen-Koblenz",
    "nuts_name" : "Mayen-Koblenz",
    "name_ascii" : "Mayen-Koblenz",
    "name_html" : "Mayen-Koblenz"
  },
  "DEB18": {
    "name_latin" : "Neuwied",
    "nuts_name" : "Neuwied",
    "name_ascii" : "Neuwied",
    "name_html" : "Neuwied"
  },
  "DEB19": {
    "name_latin" : "Rhein-Hunsrück-Kreis",
    "nuts_name" : "Rhein-Hunsrück-Kreis",
    "name_ascii" : "Rhein-Hunsruck-Kreis",
    "name_html" : "Rhein-Hunsr&#x00FC;ck-Kreis"
  },
  "DEB1A": {
    "name_latin" : "Rhein-Lahn-Kreis",
    "nuts_name" : "Rhein-Lahn-Kreis",
    "name_ascii" : "Rhein-Lahn-Kreis",
    "name_html" : "Rhein-Lahn-Kreis"
  },
  "DEB21": {
    "name_latin" : "Trier, Kreisfreie Stadt",
    "nuts_name" : "Trier, Kreisfreie Stadt",
    "name_ascii" : "Trier, Kreisfreie Stadt",
    "name_html" : "Trier, Kreisfreie Stadt"
  },
  "DEB22": {
    "name_latin" : "Bernkastel-Wittlich",
    "nuts_name" : "Bernkastel-Wittlich",
    "name_ascii" : "Bernkastel-Wittlich",
    "name_html" : "Bernkastel-Wittlich"
  },
  "DEB23": {
    "name_latin" : "Eifelkreis Bitburg-Prüm",
    "nuts_name" : "Eifelkreis Bitburg-Prüm",
    "name_ascii" : "Eifelkreis Bitburg-Prum",
    "name_html" : "Eifelkreis Bitburg-Pr&#x00FC;m"
  },
  "DEB25": {
    "name_latin" : "Trier-Saarburg",
    "nuts_name" : "Trier-Saarburg",
    "name_ascii" : "Trier-Saarburg",
    "name_html" : "Trier-Saarburg"
  },
  "DEB32": {
    "name_latin" : "Kaiserslautern, Kreisfreie Stadt",
    "nuts_name" : "Kaiserslautern, Kreisfreie Stadt",
    "name_ascii" : "Kaiserslautern, Kreisfreie Stadt",
    "name_html" : "Kaiserslautern, Kreisfreie Stadt"
  },
  "DEB33": {
    "name_latin" : "Landau in der Pfalz, Kreisfreie Stadt",
    "nuts_name" : "Landau in der Pfalz, Kreisfreie Stadt",
    "name_ascii" : "Landau in der Pfalz, Kreisfreie Stadt",
    "name_html" : "Landau in der Pfalz, Kreisfreie Stadt"
  },
  "DEB34": {
    "name_latin" : "Ludwigshafen am Rhein, Kreisfreie Stadt",
    "nuts_name" : "Ludwigshafen am Rhein, Kreisfreie Stadt",
    "name_ascii" : "Ludwigshafen am Rhein, Kreisfreie Stadt",
    "name_html" : "Ludwigshafen am Rhein, Kreisfreie Stadt"
  },
  "DEB35": {
    "name_latin" : "Mainz, Kreisfreie Stadt",
    "nuts_name" : "Mainz, Kreisfreie Stadt",
    "name_ascii" : "Mainz, Kreisfreie Stadt",
    "name_html" : "Mainz, Kreisfreie Stadt"
  },
  "DEB37": {
    "name_latin" : "Pirmasens, Kreisfreie Stadt",
    "nuts_name" : "Pirmasens, Kreisfreie Stadt",
    "name_ascii" : "Pirmasens, Kreisfreie Stadt",
    "name_html" : "Pirmasens, Kreisfreie Stadt"
  },
  "DEB38": {
    "name_latin" : "Speyer, Kreisfreie Stadt",
    "nuts_name" : "Speyer, Kreisfreie Stadt",
    "name_ascii" : "Speyer, Kreisfreie Stadt",
    "name_html" : "Speyer, Kreisfreie Stadt"
  },
  "DEB39": {
    "name_latin" : "Worms, Kreisfreie Stadt",
    "nuts_name" : "Worms, Kreisfreie Stadt",
    "name_ascii" : "Worms, Kreisfreie Stadt",
    "name_html" : "Worms, Kreisfreie Stadt"
  },
  "DEB3A": {
    "name_latin" : "Zweibrücken, Kreisfreie Stadt",
    "nuts_name" : "Zweibrücken, Kreisfreie Stadt",
    "name_ascii" : "Zweibrucken, Kreisfreie Stadt",
    "name_html" : "Zweibr&#x00FC;cken, Kreisfreie Stadt"
  },
  "DEB3B": {
    "name_latin" : "Alzey-Worms",
    "nuts_name" : "Alzey-Worms",
    "name_ascii" : "Alzey-Worms",
    "name_html" : "Alzey-Worms"
  },
  "DEB3C": {
    "name_latin" : "Bad Dürkheim",
    "nuts_name" : "Bad Dürkheim",
    "name_ascii" : "Bad Durkheim",
    "name_html" : "Bad D&#x00FC;rkheim"
  },
  "DEB3D": {
    "name_latin" : "Donnersbergkreis",
    "nuts_name" : "Donnersbergkreis",
    "name_ascii" : "Donnersbergkreis",
    "name_html" : "Donnersbergkreis"
  },
  "DEB3E": {
    "name_latin" : "Germersheim",
    "nuts_name" : "Germersheim",
    "name_ascii" : "Germersheim",
    "name_html" : "Germersheim"
  },
  "DEB3F": {
    "name_latin" : "Kaiserslautern, Landkreis",
    "nuts_name" : "Kaiserslautern, Landkreis",
    "name_ascii" : "Kaiserslautern, Landkreis",
    "name_html" : "Kaiserslautern, Landkreis"
  },
  "DEB3G": {
    "name_latin" : "Kusel",
    "nuts_name" : "Kusel",
    "name_ascii" : "Kusel",
    "name_html" : "Kusel"
  },
  "DEB3H": {
    "name_latin" : "Südliche Weinstraße",
    "nuts_name" : "Südliche Weinstraße",
    "name_ascii" : "Sudliche Weinstrasse",
    "name_html" : "S&#x00FC;dliche Weinstra&#x00DF;e"
  },
  "DEB3J": {
    "name_latin" : "Mainz-Bingen",
    "nuts_name" : "Mainz-Bingen",
    "name_ascii" : "Mainz-Bingen",
    "name_html" : "Mainz-Bingen"
  },
  "DEB3K": {
    "name_latin" : "Südwestpfalz",
    "nuts_name" : "Südwestpfalz",
    "name_ascii" : "Sudwestpfalz",
    "name_html" : "S&#x00FC;dwestpfalz"
  },
  "DEC02": {
    "name_latin" : "Merzig-Wadern",
    "nuts_name" : "Merzig-Wadern",
    "name_ascii" : "Merzig-Wadern",
    "name_html" : "Merzig-Wadern"
  },
  "DEC03": {
    "name_latin" : "Neunkirchen",
    "nuts_name" : "Neunkirchen",
    "name_ascii" : "Neunkirchen",
    "name_html" : "Neunkirchen"
  },
  "DEC04": {
    "name_latin" : "Saarlouis",
    "nuts_name" : "Saarlouis",
    "name_ascii" : "Saarlouis",
    "name_html" : "Saarlouis"
  },
  "DEC05": {
    "name_latin" : "Saarpfalz-Kreis",
    "nuts_name" : "Saarpfalz-Kreis",
    "name_ascii" : "Saarpfalz-Kreis",
    "name_html" : "Saarpfalz-Kreis"
  },
  "DEC06": {
    "name_latin" : "St. Wendel",
    "nuts_name" : "St. Wendel",
    "name_ascii" : "St. Wendel",
    "name_html" : "St. Wendel"
  },
  "DED21": {
    "name_latin" : "Dresden, Kreisfreie Stadt",
    "nuts_name" : "Dresden, Kreisfreie Stadt",
    "name_ascii" : "Dresden, Kreisfreie Stadt",
    "name_html" : "Dresden, Kreisfreie Stadt"
  },
  "DED2C": {
    "name_latin" : "Bautzen",
    "nuts_name" : "Bautzen",
    "name_ascii" : "Bautzen",
    "name_html" : "Bautzen"
  },
  "DED2D": {
    "name_latin" : "Görlitz",
    "nuts_name" : "Görlitz",
    "name_ascii" : "Gorlitz",
    "name_html" : "G&#x00F6;rlitz"
  },
  "DED2E": {
    "name_latin" : "Meißen",
    "nuts_name" : "Meißen",
    "name_ascii" : "Meissen",
    "name_html" : "Mei&#x00DF;en"
  },
  "DED41": {
    "name_latin" : "Chemnitz, Kreisfreie Stadt",
    "nuts_name" : "Chemnitz, Kreisfreie Stadt",
    "name_ascii" : "Chemnitz, Kreisfreie Stadt",
    "name_html" : "Chemnitz, Kreisfreie Stadt"
  },
  "DED42": {
    "name_latin" : "Erzgebirgskreis",
    "nuts_name" : "Erzgebirgskreis",
    "name_ascii" : "Erzgebirgskreis",
    "name_html" : "Erzgebirgskreis"
  },
  "DED43": {
    "name_latin" : "Mittelsachsen",
    "nuts_name" : "Mittelsachsen",
    "name_ascii" : "Mittelsachsen",
    "name_html" : "Mittelsachsen"
  },
  "DED44": {
    "name_latin" : "Vogtlandkreis",
    "nuts_name" : "Vogtlandkreis",
    "name_ascii" : "Vogtlandkreis",
    "name_html" : "Vogtlandkreis"
  },
  "DED45": {
    "name_latin" : "Zwickau",
    "nuts_name" : "Zwickau",
    "name_ascii" : "Zwickau",
    "name_html" : "Zwickau"
  },
  "DED51": {
    "name_latin" : "Leipzig, Kreisfreie Stadt",
    "nuts_name" : "Leipzig, Kreisfreie Stadt",
    "name_ascii" : "Leipzig, Kreisfreie Stadt",
    "name_html" : "Leipzig, Kreisfreie Stadt"
  },
  "DED52": {
    "name_latin" : "Leipzig",
    "nuts_name" : "Leipzig",
    "name_ascii" : "Leipzig",
    "name_html" : "Leipzig"
  },
  "DED53": {
    "name_latin" : "Nordsachsen",
    "nuts_name" : "Nordsachsen",
    "name_ascii" : "Nordsachsen",
    "name_html" : "Nordsachsen"
  },
  "DEE01": {
    "name_latin" : "Dessau-Roßlau, Kreisfreie Stadt",
    "nuts_name" : "Dessau-Roßlau, Kreisfreie Stadt",
    "name_ascii" : "Dessau-Rosslau, Kreisfreie Stadt",
    "name_html" : "Dessau-Ro&#x00DF;lau, Kreisfreie Stadt"
  },
  "DEE02": {
    "name_latin" : "Halle (Saale), Kreisfreie Stadt",
    "nuts_name" : "Halle (Saale), Kreisfreie Stadt",
    "name_ascii" : "Halle (Saale), Kreisfreie Stadt",
    "name_html" : "Halle (Saale), Kreisfreie Stadt"
  },
  "DEE04": {
    "name_latin" : "Altmarkkreis Salzwedel",
    "nuts_name" : "Altmarkkreis Salzwedel",
    "name_ascii" : "Altmarkkreis Salzwedel",
    "name_html" : "Altmarkkreis Salzwedel"
  },
  "DEE05": {
    "name_latin" : "Anhalt-Bitterfeld",
    "nuts_name" : "Anhalt-Bitterfeld",
    "name_ascii" : "Anhalt-Bitterfeld",
    "name_html" : "Anhalt-Bitterfeld"
  },
  "DEE06": {
    "name_latin" : "Jerichower Land",
    "nuts_name" : "Jerichower Land",
    "name_ascii" : "Jerichower Land",
    "name_html" : "Jerichower Land"
  },
  "DEE07": {
    "name_latin" : "Börde",
    "nuts_name" : "Börde",
    "name_ascii" : "Borde",
    "name_html" : "B&#x00F6;rde"
  },
  "DEE08": {
    "name_latin" : "Burgenland (DE)",
    "nuts_name" : "Burgenland (DE)",
    "name_ascii" : "Burgenland (DE)",
    "name_html" : "Burgenland (DE)"
  },
  "DEE09": {
    "name_latin" : "Harz",
    "nuts_name" : "Harz",
    "name_ascii" : "Harz",
    "name_html" : "Harz"
  },
  "DEE0A": {
    "name_latin" : "Mansfeld-Südharz",
    "nuts_name" : "Mansfeld-Südharz",
    "name_ascii" : "Mansfeld-Sudharz",
    "name_html" : "Mansfeld-S&#x00FC;dharz"
  },
  "DEE0B": {
    "name_latin" : "Saalekreis",
    "nuts_name" : "Saalekreis",
    "name_ascii" : "Saalekreis",
    "name_html" : "Saalekreis"
  },
  "DEE0C": {
    "name_latin" : "Salzlandkreis",
    "nuts_name" : "Salzlandkreis",
    "name_ascii" : "Salzlandkreis",
    "name_html" : "Salzlandkreis"
  },
  "DEE0D": {
    "name_latin" : "Stendal",
    "nuts_name" : "Stendal",
    "name_ascii" : "Stendal",
    "name_html" : "Stendal"
  },
  "DEE0E": {
    "name_latin" : "Wittenberg",
    "nuts_name" : "Wittenberg",
    "name_ascii" : "Wittenberg",
    "name_html" : "Wittenberg"
  },
  "DEF01": {
    "name_latin" : "Flensburg, Kreisfreie Stadt",
    "nuts_name" : "Flensburg, Kreisfreie Stadt",
    "name_ascii" : "Flensburg, Kreisfreie Stadt",
    "name_html" : "Flensburg, Kreisfreie Stadt"
  },
  "DEF02": {
    "name_latin" : "Kiel, Kreisfreie Stadt",
    "nuts_name" : "Kiel, Kreisfreie Stadt",
    "name_ascii" : "Kiel, Kreisfreie Stadt",
    "name_html" : "Kiel, Kreisfreie Stadt"
  },
  "DEF03": {
    "name_latin" : "Lübeck, Kreisfreie Stadt",
    "nuts_name" : "Lübeck, Kreisfreie Stadt",
    "name_ascii" : "Lubeck, Kreisfreie Stadt",
    "name_html" : "L&#x00FC;beck, Kreisfreie Stadt"
  },
  "DEF04": {
    "name_latin" : "Neumünster, Kreisfreie Stadt",
    "nuts_name" : "Neumünster, Kreisfreie Stadt",
    "name_ascii" : "Neumunster, Kreisfreie Stadt",
    "name_html" : "Neum&#x00FC;nster, Kreisfreie Stadt"
  },
  "DEF05": {
    "name_latin" : "Dithmarschen",
    "nuts_name" : "Dithmarschen",
    "name_ascii" : "Dithmarschen",
    "name_html" : "Dithmarschen"
  },
  "DEF06": {
    "name_latin" : "Herzogtum Lauenburg",
    "nuts_name" : "Herzogtum Lauenburg",
    "name_ascii" : "Herzogtum Lauenburg",
    "name_html" : "Herzogtum Lauenburg"
  },
  "DEF07": {
    "name_latin" : "Nordfriesland",
    "nuts_name" : "Nordfriesland",
    "name_ascii" : "Nordfriesland",
    "name_html" : "Nordfriesland"
  },
  "DEF08": {
    "name_latin" : "Ostholstein",
    "nuts_name" : "Ostholstein",
    "name_ascii" : "Ostholstein",
    "name_html" : "Ostholstein"
  },
  "DEF09": {
    "name_latin" : "Pinneberg",
    "nuts_name" : "Pinneberg",
    "name_ascii" : "Pinneberg",
    "name_html" : "Pinneberg"
  },
  "DEF0B": {
    "name_latin" : "Rendsburg-Eckernförde",
    "nuts_name" : "Rendsburg-Eckernförde",
    "name_ascii" : "Rendsburg-Eckernforde",
    "name_html" : "Rendsburg-Eckernf&#x00F6;rde"
  },
  "DEF0D": {
    "name_latin" : "Segeberg",
    "nuts_name" : "Segeberg",
    "name_ascii" : "Segeberg",
    "name_html" : "Segeberg"
  },
  "DEF0E": {
    "name_latin" : "Steinburg",
    "nuts_name" : "Steinburg",
    "name_ascii" : "Steinburg",
    "name_html" : "Steinburg"
  },
  "UKE45": {
    "name_latin" : "Wakefield",
    "nuts_name" : "Wakefield",
    "name_ascii" : "Wakefield",
    "name_html" : "Wakefield"
  },
  "UKF11": {
    "name_latin" : "Derby",
    "nuts_name" : "Derby",
    "name_ascii" : "Derby",
    "name_html" : "Derby"
  },
  "UKF12": {
    "name_latin" : "East Derbyshire",
    "nuts_name" : "East Derbyshire",
    "name_ascii" : "East Derbyshire",
    "name_html" : "East Derbyshire"
  },
  "UKF13": {
    "name_latin" : "South and West Derbyshire",
    "nuts_name" : "South and West Derbyshire",
    "name_ascii" : "South and West Derbyshire",
    "name_html" : "South and West Derbyshire"
  },
  "UKF14": {
    "name_latin" : "Nottingham",
    "nuts_name" : "Nottingham",
    "name_ascii" : "Nottingham",
    "name_html" : "Nottingham"
  },
  "UKF16": {
    "name_latin" : "South Nottinghamshire",
    "nuts_name" : "South Nottinghamshire",
    "name_ascii" : "South Nottinghamshire",
    "name_html" : "South Nottinghamshire"
  },
  "UKF21": {
    "name_latin" : "Leicester",
    "nuts_name" : "Leicester",
    "name_ascii" : "Leicester",
    "name_html" : "Leicester"
  },
  "UKF22": {
    "name_latin" : "Leicestershire CC and Rutland",
    "nuts_name" : "Leicestershire CC and Rutland",
    "name_ascii" : "Leicestershire CC and Rutland",
    "name_html" : "Leicestershire CC and Rutland"
  },
  "UKF25": {
    "name_latin" : "North Northamptonshire",
    "nuts_name" : "North Northamptonshire",
    "name_ascii" : "North Northamptonshire",
    "name_html" : "North Northamptonshire"
  },
  "UKF30": {
    "name_latin" : "Lincolnshire",
    "nuts_name" : "Lincolnshire",
    "name_ascii" : "Lincolnshire",
    "name_html" : "Lincolnshire"
  },
  "UKG11": {
    "name_latin" : "Herefordshire, County of",
    "nuts_name" : "Herefordshire, County of",
    "name_ascii" : "Herefordshire, County Of",
    "name_html" : "Herefordshire, County Of"
  },
  "UKG12": {
    "name_latin" : "Worcestershire",
    "nuts_name" : "Worcestershire",
    "name_ascii" : "Worcestershire",
    "name_html" : "Worcestershire"
  },
  "UKG13": {
    "name_latin" : "Warwickshire",
    "nuts_name" : "Warwickshire",
    "name_ascii" : "Warwickshire",
    "name_html" : "Warwickshire"
  },
  "UKG21": {
    "name_latin" : "Telford and Wrekin",
    "nuts_name" : "Telford and Wrekin",
    "name_ascii" : "Telford and Wrekin",
    "name_html" : "Telford and Wrekin"
  },
  "UKG22": {
    "name_latin" : "Shropshire CC",
    "nuts_name" : "Shropshire CC",
    "name_ascii" : "Shropshire CC",
    "name_html" : "Shropshire CC"
  },
  "UKG23": {
    "name_latin" : "Stoke-on-Trent",
    "nuts_name" : "Stoke-on-Trent",
    "name_ascii" : "Stoke-on-Trent",
    "name_html" : "Stoke-on-Trent"
  },
  "UKG24": {
    "name_latin" : "Staffordshire CC",
    "nuts_name" : "Staffordshire CC",
    "name_ascii" : "Staffordshire CC",
    "name_html" : "Staffordshire CC"
  },
  "UKG31": {
    "name_latin" : "Birmingham",
    "nuts_name" : "Birmingham",
    "name_ascii" : "Birmingham",
    "name_html" : "Birmingham"
  },
  "UKG32": {
    "name_latin" : "Solihull",
    "nuts_name" : "Solihull",
    "name_ascii" : "Solihull",
    "name_html" : "Solihull"
  },
  "UKG33": {
    "name_latin" : "Coventry",
    "nuts_name" : "Coventry",
    "name_ascii" : "Coventry",
    "name_html" : "Coventry"
  },
  "UKG36": {
    "name_latin" : "Dudley",
    "nuts_name" : "Dudley",
    "name_ascii" : "Dudley",
    "name_html" : "Dudley"
  },
  "UKG37": {
    "name_latin" : "Sandwell",
    "nuts_name" : "Sandwell",
    "name_ascii" : "Sandwell",
    "name_html" : "Sandwell"
  },
  "UKG38": {
    "name_latin" : "Walsall",
    "nuts_name" : "Walsall",
    "name_ascii" : "Walsall",
    "name_html" : "Walsall"
  },
  "UKH11": {
    "name_latin" : "Peterborough",
    "nuts_name" : "Peterborough",
    "name_ascii" : "Peterborough",
    "name_html" : "Peterborough"
  },
  "UKH12": {
    "name_latin" : "Cambridgeshire CC",
    "nuts_name" : "Cambridgeshire CC",
    "name_ascii" : "Cambridgeshire CC",
    "name_html" : "Cambridgeshire CC"
  },
  "UKH14": {
    "name_latin" : "Suffolk",
    "nuts_name" : "Suffolk",
    "name_ascii" : "Suffolk",
    "name_html" : "Suffolk"
  },
  "UKH16": {
    "name_latin" : "North & West Norfolk",
    "nuts_name" : "North & West Norfolk",
    "name_ascii" : "North & West Norfolk",
    "name_html" : "North & West Norfolk"
  },
  "UKH17": {
    "name_latin" : "Breckland & South Norfolk",
    "nuts_name" : "Breckland & South Norfolk",
    "name_ascii" : "Breckland & South Norfolk",
    "name_html" : "Breckland & South Norfolk"
  },
  "UKH21": {
    "name_latin" : "Luton",
    "nuts_name" : "Luton",
    "name_ascii" : "Luton",
    "name_html" : "Luton"
  },
  "UKH23": {
    "name_latin" : "Hertfordshire",
    "nuts_name" : "Hertfordshire",
    "name_ascii" : "Hertfordshire",
    "name_html" : "Hertfordshire"
  },
  "UKH25": {
    "name_latin" : "Central Bedfordshire",
    "nuts_name" : "Central Bedfordshire",
    "name_ascii" : "Central Bedfordshire",
    "name_html" : "Central Bedfordshire"
  },
  "UKH31": {
    "name_latin" : "Southend-on-Sea",
    "nuts_name" : "Southend-on-Sea",
    "name_ascii" : "Southend-On-Sea",
    "name_html" : "Southend-On-Sea"
  },
  "UKH34": {
    "name_latin" : "Essex Haven Gateway",
    "nuts_name" : "Essex Haven Gateway",
    "name_ascii" : "Essex Haven Gateway",
    "name_html" : "Essex Haven Gateway"
  },
  "UKH35": {
    "name_latin" : "West Essex",
    "nuts_name" : "West Essex",
    "name_ascii" : "West Essex",
    "name_html" : "West Essex"
  },
  "UKH37": {
    "name_latin" : "Essex Thames Gateway",
    "nuts_name" : "Essex Thames Gateway",
    "name_ascii" : "Essex Thames Gateway",
    "name_html" : "Essex Thames Gateway"
  },
  "UKI31": {
    "name_latin" : "Camden & City of London",
    "nuts_name" : "Camden & City of London",
    "name_ascii" : "Camden & City of London",
    "name_html" : "Camden & City of London"
  },
  "UKI33": {
    "name_latin" : "Kensington and Chelsea & Hammersmith and Fulham",
    "nuts_name" : "Kensington and Chelsea & Hammersmith and Fulham",
    "name_ascii" : "Kensington and Chelsea & Hammersmith and Fulham",
    "name_html" : "Kensington and Chelsea & Hammersmith and Fulham"
  },
  "UKI34": {
    "name_latin" : "Wandsworth",
    "nuts_name" : "Wandsworth",
    "name_ascii" : "Wandsworth",
    "name_html" : "Wandsworth"
  },
  "UKI41": {
    "name_latin" : "Hackney & Newham",
    "nuts_name" : "Hackney & Newham",
    "name_ascii" : "Hackney & Newham",
    "name_html" : "Hackney & Newham"
  },
  "DEF0F": {
    "name_latin" : "Stormarn",
    "nuts_name" : "Stormarn",
    "name_ascii" : "Stormarn",
    "name_html" : "Stormarn"
  },
  "DEG01": {
    "name_latin" : "Erfurt, Kreisfreie Stadt",
    "nuts_name" : "Erfurt, Kreisfreie Stadt",
    "name_ascii" : "Erfurt, Kreisfreie Stadt",
    "name_html" : "Erfurt, Kreisfreie Stadt"
  },
  "DEG03": {
    "name_latin" : "Jena, Kreisfreie Stadt",
    "nuts_name" : "Jena, Kreisfreie Stadt",
    "name_ascii" : "Jena, Kreisfreie Stadt",
    "name_html" : "Jena, Kreisfreie Stadt"
  },
  "DEG04": {
    "name_latin" : "Suhl, Kreisfreie Stadt",
    "nuts_name" : "Suhl, Kreisfreie Stadt",
    "name_ascii" : "Suhl, Kreisfreie Stadt",
    "name_html" : "Suhl, Kreisfreie Stadt"
  },
  "DEG05": {
    "name_latin" : "Weimar, Kreisfreie Stadt",
    "nuts_name" : "Weimar, Kreisfreie Stadt",
    "name_ascii" : "Weimar, Kreisfreie Stadt",
    "name_html" : "Weimar, Kreisfreie Stadt"
  },
  "DEG06": {
    "name_latin" : "Eichsfeld",
    "nuts_name" : "Eichsfeld",
    "name_ascii" : "Eichsfeld",
    "name_html" : "Eichsfeld"
  },
  "DEG07": {
    "name_latin" : "Nordhausen",
    "nuts_name" : "Nordhausen",
    "name_ascii" : "Nordhausen",
    "name_html" : "Nordhausen"
  },
  "DEG09": {
    "name_latin" : "Unstrut-Hainich-Kreis",
    "nuts_name" : "Unstrut-Hainich-Kreis",
    "name_ascii" : "Unstrut-Hainich-Kreis",
    "name_html" : "Unstrut-Hainich-Kreis"
  },
  "DEG0B": {
    "name_latin" : "Schmalkalden-Meiningen",
    "nuts_name" : "Schmalkalden-Meiningen",
    "name_ascii" : "Schmalkalden-Meiningen",
    "name_html" : "Schmalkalden-Meiningen"
  },
  "DEG0C": {
    "name_latin" : "Gotha",
    "nuts_name" : "Gotha",
    "name_ascii" : "Gotha",
    "name_html" : "Gotha"
  },
  "DEG0D": {
    "name_latin" : "Sömmerda",
    "nuts_name" : "Sömmerda",
    "name_ascii" : "Sommerda",
    "name_html" : "S&#x00F6;mmerda"
  },
  "DEG0E": {
    "name_latin" : "Hildburghausen",
    "nuts_name" : "Hildburghausen",
    "name_ascii" : "Hildburghausen",
    "name_html" : "Hildburghausen"
  },
  "DEG0F": {
    "name_latin" : "Ilm-Kreis",
    "nuts_name" : "Ilm-Kreis",
    "name_ascii" : "Ilm-Kreis",
    "name_html" : "Ilm-Kreis"
  },
  "DEG0H": {
    "name_latin" : "Sonneberg",
    "nuts_name" : "Sonneberg",
    "name_ascii" : "Sonneberg",
    "name_html" : "Sonneberg"
  },
  "DEG0I": {
    "name_latin" : "Saalfeld-Rudolstadt",
    "nuts_name" : "Saalfeld-Rudolstadt",
    "name_ascii" : "Saalfeld-Rudolstadt",
    "name_html" : "Saalfeld-Rudolstadt"
  },
  "DEG0J": {
    "name_latin" : "Saale-Holzland-Kreis",
    "nuts_name" : "Saale-Holzland-Kreis",
    "name_ascii" : "Saale-Holzland-Kreis",
    "name_html" : "Saale-Holzland-Kreis"
  },
  "DEG0K": {
    "name_latin" : "Saale-Orla-Kreis",
    "nuts_name" : "Saale-Orla-Kreis",
    "name_ascii" : "Saale-Orla-Kreis",
    "name_html" : "Saale-Orla-Kreis"
  },
  "DEG0L": {
    "name_latin" : "Greiz",
    "nuts_name" : "Greiz",
    "name_ascii" : "Greiz",
    "name_html" : "Greiz"
  },
  "DEG0N": {
    "name_latin" : "Eisenach, Kreisfreie Stadt",
    "nuts_name" : "Eisenach, Kreisfreie Stadt",
    "name_ascii" : "Eisenach, Kreisfreie Stadt",
    "name_html" : "Eisenach, Kreisfreie Stadt"
  },
  "DEG0P": {
    "name_latin" : "Wartburgkreis",
    "nuts_name" : "Wartburgkreis",
    "name_ascii" : "Wartburgkreis",
    "name_html" : "Wartburgkreis"
  },
  "DK012": {
    "name_latin" : "Københavns omegn",
    "nuts_name" : "Københavns omegn",
    "name_ascii" : "Kobenhavns Omegn",
    "name_html" : "K&#x00F8;benhavns Omegn"
  },
  "DK013": {
    "name_latin" : "Nordsjælland",
    "nuts_name" : "Nordsjælland",
    "name_ascii" : "Nordsjaelland",
    "name_html" : "Nordsj&#x00E6;lland"
  },
  "DK014": {
    "name_latin" : "Bornholm",
    "nuts_name" : "Bornholm",
    "name_ascii" : "Bornholm",
    "name_html" : "Bornholm"
  },
  "DK022": {
    "name_latin" : "Vest- og Sydsjælland",
    "nuts_name" : "Vest- og Sydsjælland",
    "name_ascii" : "Vest- og Sydsjaelland",
    "name_html" : "Vest- og Sydsj&#x00E6;lland"
  },
  "DK031": {
    "name_latin" : "Fyn",
    "nuts_name" : "Fyn",
    "name_ascii" : "Fyn",
    "name_html" : "Fyn"
  },
  "DK032": {
    "name_latin" : "Sydjylland",
    "nuts_name" : "Sydjylland",
    "name_ascii" : "Sydjylland",
    "name_html" : "Sydjylland"
  },
  "DK041": {
    "name_latin" : "Vestjylland",
    "nuts_name" : "Vestjylland",
    "name_ascii" : "Vestjylland",
    "name_html" : "Vestjylland"
  },
  "DK042": {
    "name_latin" : "Østjylland",
    "nuts_name" : "Østjylland",
    "name_ascii" : "Ostjylland",
    "name_html" : "&#x00D8;stjylland"
  },
  "DK050": {
    "name_latin" : "Nordjylland",
    "nuts_name" : "Nordjylland",
    "name_ascii" : "Nordjylland",
    "name_html" : "Nordjylland"
  },
  "EE001": {
    "name_latin" : "Põhja-Eesti",
    "nuts_name" : "Põhja-Eesti",
    "name_ascii" : "Pohja-Eesti",
    "name_html" : "P&#x00F5;hja-Eesti"
  },
  "EE006": {
    "name_latin" : "Kesk-Eesti",
    "nuts_name" : "Kesk-Eesti",
    "name_ascii" : "Kesk-Eesti",
    "name_html" : "Kesk-Eesti"
  },
  "EE007": {
    "name_latin" : "Kirde-Eesti",
    "nuts_name" : "Kirde-Eesti",
    "name_ascii" : "Kirde-Eesti",
    "name_html" : "Kirde-Eesti"
  },
  "EE008": {
    "name_latin" : "Lõuna-Eesti",
    "nuts_name" : "Lõuna-Eesti",
    "name_ascii" : "Louna-Eesti",
    "name_html" : "L&#x00F5;una-Eesti"
  },
  "EL302": {
    "name_latin" : "Ditikos Tomeas Athinon",
    "nuts_name" : "Δυτικός Τομέας Αθηνών",
    "name_ascii" : "Ditikos Tomeas Athinon",
    "name_html" : "&#x0394;&#x03C5;&#x03C4;&#x03B9;&#x03BA;&#x03CC;&#x03C2; &#x03A4;&#x03BF;&#x03BC;&#x03AD;&#x03B1;&#x03C2; &#x0391;&#x03B8;&#x03B7;&#x03BD;&#x03CE;&#x03BD;"
  },
  "EL303": {
    "name_latin" : "Kentrikos Tomeas Athinon",
    "nuts_name" : "Κεντρικός Τομέας Αθηνών",
    "name_ascii" : "Kentrikos Tomeas Athinon",
    "name_html" : "&#x039A;&#x03B5;&#x03BD;&#x03C4;&#x03C1;&#x03B9;&#x03BA;&#x03CC;&#x03C2; &#x03A4;&#x03BF;&#x03BC;&#x03AD;&#x03B1;&#x03C2; &#x0391;&#x03B8;&#x03B7;&#x03BD;&#x03CE;&#x03BD;"
  },
  "EL305": {
    "name_latin" : "Anatoliki Attiki",
    "nuts_name" : "Ανατολική Αττική",
    "name_ascii" : "Anatoliki Attiki",
    "name_html" : "&#x0391;&#x03BD;&#x03B1;&#x03C4;&#x03BF;&#x03BB;&#x03B9;&#x03BA;&#x03AE; &#x0391;&#x03C4;&#x03C4;&#x03B9;&#x03BA;&#x03AE;"
  },
  "EL306": {
    "name_latin" : "Ditiki Attiki",
    "nuts_name" : "Δυτική Αττική",
    "name_ascii" : "Ditiki Attiki",
    "name_html" : "&#x0394;&#x03C5;&#x03C4;&#x03B9;&#x03BA;&#x03AE; &#x0391;&#x03C4;&#x03C4;&#x03B9;&#x03BA;&#x03AE;"
  },
  "EL412": {
    "name_latin" : "Ikaria, Samos",
    "nuts_name" : "Ικαρία, Σάμος",
    "name_ascii" : "Ikaria, Samos",
    "name_html" : "&#x0399;&#x03BA;&#x03B1;&#x03C1;&#x03AF;&#x03B1;, &#x03A3;&#x03AC;&#x03BC;&#x03BF;&#x03C2;"
  },
  "EL413": {
    "name_latin" : "Xios",
    "nuts_name" : "Χίος",
    "name_ascii" : "Xios",
    "name_html" : "&#x03A7;&#x03AF;&#x03BF;&#x03C2;"
  },
  "EL421": {
    "name_latin" : "Kalimnos, Karpathos, Kos, Rodos",
    "nuts_name" : "Κάλυμνος, Κάρπαθος, Κως, Ρόδος",
    "name_ascii" : "Kalimnos, Karpathos, Kos, Rodos",
    "name_html" : "&#x039A;&#x03AC;&#x03BB;&#x03C5;&#x03BC;&#x03BD;&#x03BF;&#x03C2;, &#x039A;&#x03AC;&#x03C1;&#x03C0;&#x03B1;&#x03B8;&#x03BF;&#x03C2;, &#x039A;&#x03C9;&#x03C2;, &#x03A1;&#x03CC;&#x03B4;&#x03BF;&#x03C2;"
  },
  "EL431": {
    "name_latin" : "Irakleio",
    "nuts_name" : "Ηράκλειο",
    "name_ascii" : "Irakleio",
    "name_html" : "&#x0397;&#x03C1;&#x03AC;&#x03BA;&#x03BB;&#x03B5;&#x03B9;&#x03BF;"
  },
  "EL432": {
    "name_latin" : "Lasithi",
    "nuts_name" : "Λασίθι",
    "name_ascii" : "Lasithi",
    "name_html" : "&#x039B;&#x03B1;&#x03C3;&#x03AF;&#x03B8;&#x03B9;"
  },
  "EL433": {
    "name_latin" : "Rethymni",
    "nuts_name" : "Ρεθύμνη",
    "name_ascii" : "Rethimni",
    "name_html" : "&#x03A1;&#x03B5;&#x03B8;&#x03CD;&#x03BC;&#x03BD;&#x03B7;"
  },
  "EL434": {
    "name_latin" : "Chania",
    "nuts_name" : "Χανιά",
    "name_ascii" : "Xania",
    "name_html" : "&#x03A7;&#x03B1;&#x03BD;&#x03B9;&#x03AC;"
  },
  "EL512": {
    "name_latin" : "Xanthi",
    "nuts_name" : "Ξάνθη",
    "name_ascii" : "Xanthi",
    "name_html" : "&#x039E;&#x03AC;&#x03BD;&#x03B8;&#x03B7;"
  },
  "EL514": {
    "name_latin" : "Drama",
    "nuts_name" : "Δράμα",
    "name_ascii" : "Drama",
    "name_html" : "&#x0394;&#x03C1;&#x03AC;&#x03BC;&#x03B1;"
  },
  "EL521": {
    "name_latin" : "Imathia",
    "nuts_name" : "Ημαθία",
    "name_ascii" : "Imathia",
    "name_html" : "&#x0397;&#x03BC;&#x03B1;&#x03B8;&#x03AF;&#x03B1;"
  },
  "EL523": {
    "name_latin" : "Kilkis",
    "nuts_name" : "Κιλκίς",
    "name_ascii" : "Kilkis",
    "name_html" : "&#x039A;&#x03B9;&#x03BB;&#x03BA;&#x03AF;&#x03C2;"
  },
  "EL524": {
    "name_latin" : "Pella",
    "nuts_name" : "Πέλλα",
    "name_ascii" : "Pella",
    "name_html" : "&#x03A0;&#x03AD;&#x03BB;&#x03BB;&#x03B1;"
  },
  "EL525": {
    "name_latin" : "Pieria",
    "nuts_name" : "Πιερία",
    "name_ascii" : "Pieria",
    "name_html" : "&#x03A0;&#x03B9;&#x03B5;&#x03C1;&#x03AF;&#x03B1;"
  },
  "EL526": {
    "name_latin" : "Serres",
    "nuts_name" : "Σέρρες",
    "name_ascii" : "Serres",
    "name_html" : "&#x03A3;&#x03AD;&#x03C1;&#x03C1;&#x03B5;&#x03C2;"
  },
  "EL532": {
    "name_latin" : "Kastoria",
    "nuts_name" : "Καστοριά",
    "name_ascii" : "Kastoria",
    "name_html" : "&#x039A;&#x03B1;&#x03C3;&#x03C4;&#x03BF;&#x03C1;&#x03B9;&#x03AC;"
  },
  "EL533": {
    "name_latin" : "Florina",
    "nuts_name" : "Φλώρινα",
    "name_ascii" : "Florina",
    "name_html" : "&#x03A6;&#x03BB;&#x03CE;&#x03C1;&#x03B9;&#x03BD;&#x03B1;"
  },
  "EL541": {
    "name_latin" : "Arta, Prebeza",
    "nuts_name" : "Άρτα, Πρέβεζα",
    "name_ascii" : "Arta, Prebeza",
    "name_html" : "&#x0386;&#x03C1;&#x03C4;&#x03B1;, &#x03A0;&#x03C1;&#x03AD;&#x03B2;&#x03B5;&#x03B6;&#x03B1;"
  },
  "EL543": {
    "name_latin" : "Ioannina",
    "nuts_name" : "Ιωάννινα",
    "name_ascii" : "Ioannina",
    "name_html" : "&#x0399;&#x03C9;&#x03AC;&#x03BD;&#x03BD;&#x03B9;&#x03BD;&#x03B1;"
  },
  "EL611": {
    "name_latin" : "Karditsa, Trikala",
    "nuts_name" : "Καρδίτσα, Τρίκαλα",
    "name_ascii" : "Karditsa, Trikala",
    "name_html" : "&#x039A;&#x03B1;&#x03C1;&#x03B4;&#x03AF;&#x03C4;&#x03C3;&#x03B1;, &#x03A4;&#x03C1;&#x03AF;&#x03BA;&#x03B1;&#x03BB;&#x03B1;"
  },
  "EL613": {
    "name_latin" : "Magnisia",
    "nuts_name" : "Μαγνησία",
    "name_ascii" : "Magnisia",
    "name_html" : "&#x039C;&#x03B1;&#x03B3;&#x03BD;&#x03B7;&#x03C3;&#x03AF;&#x03B1;"
  },
  "EL621": {
    "name_latin" : "Zakynthos",
    "nuts_name" : "Ζάκυνθος",
    "name_ascii" : "Zakinthos",
    "name_html" : "&#x0396;&#x03AC;&#x03BA;&#x03C5;&#x03BD;&#x03B8;&#x03BF;&#x03C2;"
  },
  "EL622": {
    "name_latin" : "Kerkyra",
    "nuts_name" : "Κέρκυρα",
    "name_ascii" : "Kerkira",
    "name_html" : "&#x039A;&#x03AD;&#x03C1;&#x03BA;&#x03C5;&#x03C1;&#x03B1;"
  },
  "EL624": {
    "name_latin" : "Lefkada",
    "nuts_name" : "Λευκάδα",
    "name_ascii" : "Leikada",
    "name_html" : "&#x039B;&#x03B5;&#x03C5;&#x03BA;&#x03AC;&#x03B4;&#x03B1;"
  },
  "EL632": {
    "name_latin" : "Achaia",
    "nuts_name" : "Αχαΐα",
    "name_ascii" : "AxaIa",
    "name_html" : "&#x0391;&#x03C7;&#x03B1;&#x0390;&#x03B1;"
  },
  "EL633": {
    "name_latin" : "Ileia",
    "nuts_name" : "Ηλεία",
    "name_ascii" : "Ileia",
    "name_html" : "&#x0397;&#x03BB;&#x03B5;&#x03AF;&#x03B1;"
  },
  "EL641": {
    "name_latin" : "Voiotia",
    "nuts_name" : "Βοιωτία",
    "name_ascii" : "Boiotia",
    "name_html" : "&#x0392;&#x03BF;&#x03B9;&#x03C9;&#x03C4;&#x03AF;&#x03B1;"
  },
  "EL643": {
    "name_latin" : "Evrytania",
    "nuts_name" : "Ευρυτανία",
    "name_ascii" : "Eiritania",
    "name_html" : "&#x0395;&#x03C5;&#x03C1;&#x03C5;&#x03C4;&#x03B1;&#x03BD;&#x03AF;&#x03B1;"
  },
  "EL644": {
    "name_latin" : "Fthiotida",
    "nuts_name" : "Φθιώτιδα",
    "name_ascii" : "Fthiotida",
    "name_html" : "&#x03A6;&#x03B8;&#x03B9;&#x03CE;&#x03C4;&#x03B9;&#x03B4;&#x03B1;"
  },
  "EL645": {
    "name_latin" : "Fokida",
    "nuts_name" : "Φωκίδα",
    "name_ascii" : "Fokida",
    "name_html" : "&#x03A6;&#x03C9;&#x03BA;&#x03AF;&#x03B4;&#x03B1;"
  },
  "EL651": {
    "name_latin" : "Argolida, Arkadia",
    "nuts_name" : "Αργολίδα, Αρκαδία",
    "name_ascii" : "Argolida, Arkadia",
    "name_html" : "&#x0391;&#x03C1;&#x03B3;&#x03BF;&#x03BB;&#x03AF;&#x03B4;&#x03B1;, &#x0391;&#x03C1;&#x03BA;&#x03B1;&#x03B4;&#x03AF;&#x03B1;"
  },
  "EL652": {
    "name_latin" : "Korinthia",
    "nuts_name" : "Κορινθία",
    "name_ascii" : "Korinthia",
    "name_html" : "&#x039A;&#x03BF;&#x03C1;&#x03B9;&#x03BD;&#x03B8;&#x03AF;&#x03B1;"
  },
  "ES111": {
    "name_latin" : "A Coruña",
    "nuts_name" : "A Coruña",
    "name_ascii" : "A Coruna",
    "name_html" : "A Coru&#x00F1;a"
  },
  "ES112": {
    "name_latin" : "Lugo",
    "nuts_name" : "Lugo",
    "name_ascii" : "Lugo",
    "name_html" : "Lugo"
  },
  "ES113": {
    "name_latin" : "Ourense",
    "nuts_name" : "Ourense",
    "name_ascii" : "Ourense",
    "name_html" : "Ourense"
  },
  "ES114": {
    "name_latin" : "Pontevedra",
    "nuts_name" : "Pontevedra",
    "name_ascii" : "Pontevedra",
    "name_html" : "Pontevedra"
  },
  "ES120": {
    "name_latin" : "Asturias",
    "nuts_name" : "Asturias",
    "name_ascii" : "Asturias",
    "name_html" : "Asturias"
  },
  "ES130": {
    "name_latin" : "Cantabria",
    "nuts_name" : "Cantabria",
    "name_ascii" : "Cantabria",
    "name_html" : "Cantabria"
  },
  "ES211": {
    "name_latin" : "Araba/Álava",
    "nuts_name" : "Araba/Álava",
    "name_ascii" : "Araba/Alava",
    "name_html" : "Araba/&#x00C1;lava"
  },
  "ES212": {
    "name_latin" : "Gipuzkoa",
    "nuts_name" : "Gipuzkoa",
    "name_ascii" : "Gipuzkoa",
    "name_html" : "Gipuzkoa"
  },
  "ES213": {
    "name_latin" : "Bizkaia",
    "nuts_name" : "Bizkaia",
    "name_ascii" : "Bizkaia",
    "name_html" : "Bizkaia"
  },
  "ES220": {
    "name_latin" : "Navarra",
    "nuts_name" : "Navarra",
    "name_ascii" : "Navarra",
    "name_html" : "Navarra"
  },
  "ES230": {
    "name_latin" : "La Rioja",
    "nuts_name" : "La Rioja",
    "name_ascii" : "La Rioja",
    "name_html" : "La Rioja"
  },
  "ES241": {
    "name_latin" : "Huesca",
    "nuts_name" : "Huesca",
    "name_ascii" : "Huesca",
    "name_html" : "Huesca"
  },
  "ES242": {
    "name_latin" : "Teruel",
    "nuts_name" : "Teruel",
    "name_ascii" : "Teruel",
    "name_html" : "Teruel"
  },
  "ES243": {
    "name_latin" : "Zaragoza",
    "nuts_name" : "Zaragoza",
    "name_ascii" : "Zaragoza",
    "name_html" : "Zaragoza"
  },
  "ES412": {
    "name_latin" : "Burgos",
    "nuts_name" : "Burgos",
    "name_ascii" : "Burgos",
    "name_html" : "Burgos"
  },
  "ES413": {
    "name_latin" : "León",
    "nuts_name" : "León",
    "name_ascii" : "Leon",
    "name_html" : "Le&#x00F3;n"
  },
  "ES414": {
    "name_latin" : "Palencia",
    "nuts_name" : "Palencia",
    "name_ascii" : "Palencia",
    "name_html" : "Palencia"
  },
  "ES415": {
    "name_latin" : "Salamanca",
    "nuts_name" : "Salamanca",
    "name_ascii" : "Salamanca",
    "name_html" : "Salamanca"
  },
  "ES417": {
    "name_latin" : "Soria",
    "nuts_name" : "Soria",
    "name_ascii" : "Soria",
    "name_html" : "Soria"
  },
  "ES418": {
    "name_latin" : "Valladolid",
    "nuts_name" : "Valladolid",
    "name_ascii" : "Valladolid",
    "name_html" : "Valladolid"
  },
  "ES419": {
    "name_latin" : "Zamora",
    "nuts_name" : "Zamora",
    "name_ascii" : "Zamora",
    "name_html" : "Zamora"
  },
  "ES422": {
    "name_latin" : "Ciudad Real",
    "nuts_name" : "Ciudad Real",
    "name_ascii" : "Ciudad Real",
    "name_html" : "Ciudad Real"
  },
  "ES423": {
    "name_latin" : "Cuenca",
    "nuts_name" : "Cuenca",
    "name_ascii" : "Cuenca",
    "name_html" : "Cuenca"
  },
  "ES424": {
    "name_latin" : "Guadalajara",
    "nuts_name" : "Guadalajara",
    "name_ascii" : "Guadalajara",
    "name_html" : "Guadalajara"
  },
  "ES425": {
    "name_latin" : "Toledo",
    "nuts_name" : "Toledo",
    "name_ascii" : "Toledo",
    "name_html" : "Toledo"
  },
  "ES431": {
    "name_latin" : "Badajoz",
    "nuts_name" : "Badajoz",
    "name_ascii" : "Badajoz",
    "name_html" : "Badajoz"
  },
  "ES432": {
    "name_latin" : "Cáceres",
    "nuts_name" : "Cáceres",
    "name_ascii" : "Caceres",
    "name_html" : "C&#x00E1;ceres"
  },
  "ES511": {
    "name_latin" : "Barcelona",
    "nuts_name" : "Barcelona",
    "name_ascii" : "Barcelona",
    "name_html" : "Barcelona"
  },
  "ES513": {
    "name_latin" : "Lleida",
    "nuts_name" : "Lleida",
    "name_ascii" : "Lleida",
    "name_html" : "Lleida"
  },
  "ES514": {
    "name_latin" : "Tarragona",
    "nuts_name" : "Tarragona",
    "name_ascii" : "Tarragona",
    "name_html" : "Tarragona"
  },
  "ES522": {
    "name_latin" : "Castellón / Castelló",
    "nuts_name" : "Castellón / Castelló",
    "name_ascii" : "Castellon / Castello",
    "name_html" : "Castell&#x00F3;n / Castell&#x00F3;"
  },
  "ES523": {
    "name_latin" : "Valencia / València",
    "nuts_name" : "Valencia / València",
    "name_ascii" : "Valencia / Valencia",
    "name_html" : "Valencia / Val&#x00E8;ncia"
  },
  "ES532": {
    "name_latin" : "Mallorca",
    "nuts_name" : "Mallorca",
    "name_ascii" : "Mallorca",
    "name_html" : "Mallorca"
  },
  "ES533": {
    "name_latin" : "Menorca",
    "nuts_name" : "Menorca",
    "name_ascii" : "Menorca",
    "name_html" : "Menorca"
  },
  "ES611": {
    "name_latin" : "Almería",
    "nuts_name" : "Almería",
    "name_ascii" : "Almeria",
    "name_html" : "Almer&#x00ED;a"
  },
  "ES612": {
    "name_latin" : "Cádiz",
    "nuts_name" : "Cádiz",
    "name_ascii" : "Cadiz",
    "name_html" : "C&#x00E1;diz"
  },
  "ES613": {
    "name_latin" : "Córdoba",
    "nuts_name" : "Córdoba",
    "name_ascii" : "Cordoba",
    "name_html" : "C&#x00F3;rdoba"
  },
  "ES614": {
    "name_latin" : "Granada",
    "nuts_name" : "Granada",
    "name_ascii" : "Granada",
    "name_html" : "Granada"
  },
  "ES615": {
    "name_latin" : "Huelva",
    "nuts_name" : "Huelva",
    "name_ascii" : "Huelva",
    "name_html" : "Huelva"
  },
  "ES617": {
    "name_latin" : "Málaga",
    "nuts_name" : "Málaga",
    "name_ascii" : "Malaga",
    "name_html" : "M&#x00E1;laga"
  },
  "ES618": {
    "name_latin" : "Sevilla",
    "nuts_name" : "Sevilla",
    "name_ascii" : "Sevilla",
    "name_html" : "Sevilla"
  },
  "ES620": {
    "name_latin" : "Murcia",
    "nuts_name" : "Murcia",
    "name_ascii" : "Murcia",
    "name_html" : "Murcia"
  },
  "ES630": {
    "name_latin" : "Ceuta",
    "nuts_name" : "Ceuta",
    "name_ascii" : "Ceuta",
    "name_html" : "Ceuta"
  },
  "ES640": {
    "name_latin" : "Melilla",
    "nuts_name" : "Melilla",
    "name_ascii" : "Melilla",
    "name_html" : "Melilla"
  },
  "ES703": {
    "name_latin" : "El Hierro",
    "nuts_name" : "El Hierro",
    "name_ascii" : "El Hierro",
    "name_html" : "El Hierro"
  },
  "ES704": {
    "name_latin" : "Fuerteventura",
    "nuts_name" : "Fuerteventura",
    "name_ascii" : "Fuerteventura",
    "name_html" : "Fuerteventura"
  },
  "ES705": {
    "name_latin" : "Gran Canaria",
    "nuts_name" : "Gran Canaria",
    "name_ascii" : "Gran Canaria",
    "name_html" : "Gran Canaria"
  },
  "ES706": {
    "name_latin" : "La Gomera",
    "nuts_name" : "La Gomera",
    "name_ascii" : "La Gomera",
    "name_html" : "La Gomera"
  },
  "ES708": {
    "name_latin" : "Lanzarote",
    "nuts_name" : "Lanzarote",
    "name_ascii" : "Lanzarote",
    "name_html" : "Lanzarote"
  },
  "ES709": {
    "name_latin" : "Tenerife",
    "nuts_name" : "Tenerife",
    "name_ascii" : "Tenerife",
    "name_html" : "Tenerife"
  },
  "FI193": {
    "name_latin" : "Keski-Suomi",
    "nuts_name" : "Keski-Suomi",
    "name_ascii" : "Keski-Suomi",
    "name_html" : "Keski-Suomi"
  },
  "FI194": {
    "name_latin" : "Etelä-Pohjanmaa",
    "nuts_name" : "Etelä-Pohjanmaa",
    "name_ascii" : "Etela-Pohjanmaa",
    "name_html" : "Etel&#x00E4;-Pohjanmaa"
  },
  "FI195": {
    "name_latin" : "Pohjanmaa",
    "nuts_name" : "Pohjanmaa",
    "name_ascii" : "Pohjanmaa",
    "name_html" : "Pohjanmaa"
  },
  "FI196": {
    "name_latin" : "Satakunta",
    "nuts_name" : "Satakunta",
    "name_ascii" : "Satakunta",
    "name_html" : "Satakunta"
  },
  "FI197": {
    "name_latin" : "Pirkanmaa",
    "nuts_name" : "Pirkanmaa",
    "name_ascii" : "Pirkanmaa",
    "name_html" : "Pirkanmaa"
  },
  "FI1B1": {
    "name_latin" : "Helsinki-Uusimaa",
    "nuts_name" : "Helsinki-Uusimaa",
    "name_ascii" : "Helsinki-Uusimaa",
    "name_html" : "Helsinki-Uusimaa"
  },
  "FI1C1": {
    "name_latin" : "Varsinais-Suomi",
    "nuts_name" : "Varsinais-Suomi",
    "name_ascii" : "Varsinais-Suomi",
    "name_html" : "Varsinais-Suomi"
  },
  "FI1C2": {
    "name_latin" : "Kanta-Häme",
    "nuts_name" : "Kanta-Häme",
    "name_ascii" : "Kanta-Hame",
    "name_html" : "Kanta-H&#x00E4;me"
  },
  "FI1C4": {
    "name_latin" : "Kymenlaakso",
    "nuts_name" : "Kymenlaakso",
    "name_ascii" : "Kymenlaakso",
    "name_html" : "Kymenlaakso"
  },
  "FI1C5": {
    "name_latin" : "Etelä-Karjala",
    "nuts_name" : "Etelä-Karjala",
    "name_ascii" : "Etela-Karjala",
    "name_html" : "Etel&#x00E4;-Karjala"
  },
  "FI1D1": {
    "name_latin" : "Etelä-Savo",
    "nuts_name" : "Etelä-Savo",
    "name_ascii" : "Etela-Savo",
    "name_html" : "Etel&#x00E4;-Savo"
  },
  "FI1D2": {
    "name_latin" : "Pohjois-Savo",
    "nuts_name" : "Pohjois-Savo",
    "name_ascii" : "Pohjois-Savo",
    "name_html" : "Pohjois-Savo"
  },
  "FI1D3": {
    "name_latin" : "Pohjois-Karjala",
    "nuts_name" : "Pohjois-Karjala",
    "name_ascii" : "Pohjois-Karjala",
    "name_html" : "Pohjois-Karjala"
  },
  "FI1D4": {
    "name_latin" : "Kainuu",
    "nuts_name" : "Kainuu",
    "name_ascii" : "Kainuu",
    "name_html" : "Kainuu"
  },
  "FI1D5": {
    "name_latin" : "Keski-Pohjanmaa",
    "nuts_name" : "Keski-Pohjanmaa",
    "name_ascii" : "Keski-Pohjanmaa",
    "name_html" : "Keski-Pohjanmaa"
  },
  "FI1D6": {
    "name_latin" : "Pohjois-Pohjanmaa",
    "nuts_name" : "Pohjois-Pohjanmaa",
    "name_ascii" : "Pohjois-Pohjanmaa",
    "name_html" : "Pohjois-Pohjanmaa"
  },
  "FI1D7": {
    "name_latin" : "Lappi",
    "nuts_name" : "Lappi",
    "name_ascii" : "Lappi",
    "name_html" : "Lappi"
  },
  "FI200": {
    "name_latin" : "Åland",
    "nuts_name" : "Åland",
    "name_ascii" : "Aland",
    "name_html" : "&#x00C5;land"
  },
  "FR101": {
    "name_latin" : "Paris",
    "nuts_name" : "Paris",
    "name_ascii" : "Paris",
    "name_html" : "Paris"
  },
  "FR102": {
    "name_latin" : "Seine-et-Marne",
    "nuts_name" : "Seine-et-Marne",
    "name_ascii" : "Seine-et-Marne",
    "name_html" : "Seine-et-Marne"
  },
  "FR103": {
    "name_latin" : "Yvelines",
    "nuts_name" : "Yvelines",
    "name_ascii" : "Yvelines",
    "name_html" : "Yvelines"
  },
  "FR104": {
    "name_latin" : "Essonne",
    "nuts_name" : "Essonne",
    "name_ascii" : "Essonne",
    "name_html" : "Essonne"
  },
  "FR105": {
    "name_latin" : "Hauts-de-Seine",
    "nuts_name" : "Hauts-de-Seine",
    "name_ascii" : "Hauts-de-Seine",
    "name_html" : "Hauts-de-Seine"
  },
  "FR106": {
    "name_latin" : "Seine-Saint-Denis",
    "nuts_name" : "Seine-Saint-Denis",
    "name_ascii" : "Seine-Saint-Denis",
    "name_html" : "Seine-Saint-Denis"
  },
  "FR107": {
    "name_latin" : "Val-de-Marne",
    "nuts_name" : "Val-de-Marne",
    "name_ascii" : "Val-de-Marne",
    "name_html" : "Val-de-Marne"
  },
  "FR108": {
    "name_latin" : "Val-d'Oise",
    "nuts_name" : "Val-d'Oise",
    "name_ascii" : "Val-d'Oise",
    "name_html" : "Val-d'Oise"
  },
  "FR211": {
    "name_latin" : "Ardennes",
    "nuts_name" : "Ardennes",
    "name_ascii" : "Ardennes",
    "name_html" : "Ardennes"
  },
  "FR212": {
    "name_latin" : "Aube",
    "nuts_name" : "Aube",
    "name_ascii" : "Aube",
    "name_html" : "Aube"
  },
  "FR213": {
    "name_latin" : "Marne",
    "nuts_name" : "Marne",
    "name_ascii" : "Marne",
    "name_html" : "Marne"
  },
  "FR214": {
    "name_latin" : "Haute-Marne",
    "nuts_name" : "Haute-Marne",
    "name_ascii" : "Haute-Marne",
    "name_html" : "Haute-Marne"
  },
  "FR221": {
    "name_latin" : "Aisne",
    "nuts_name" : "Aisne",
    "name_ascii" : "Aisne",
    "name_html" : "Aisne"
  },
  "FR222": {
    "name_latin" : "Oise",
    "nuts_name" : "Oise",
    "name_ascii" : "Oise",
    "name_html" : "Oise"
  },
  "FR223": {
    "name_latin" : "Somme",
    "nuts_name" : "Somme",
    "name_ascii" : "Somme",
    "name_html" : "Somme"
  },
  "FR231": {
    "name_latin" : "Eure",
    "nuts_name" : "Eure",
    "name_ascii" : "Eure",
    "name_html" : "Eure"
  },
  "FR232": {
    "name_latin" : "Seine-Maritime",
    "nuts_name" : "Seine-Maritime",
    "name_ascii" : "Seine-Maritime",
    "name_html" : "Seine-Maritime"
  },
  "FR241": {
    "name_latin" : "Cher",
    "nuts_name" : "Cher",
    "name_ascii" : "Cher",
    "name_html" : "Cher"
  },
  "FR242": {
    "name_latin" : "Eure-et-Loir",
    "nuts_name" : "Eure-et-Loir",
    "name_ascii" : "Eure-et-Loir",
    "name_html" : "Eure-et-Loir"
  },
  "FR243": {
    "name_latin" : "Indre",
    "nuts_name" : "Indre",
    "name_ascii" : "Indre",
    "name_html" : "Indre"
  },
  "FR244": {
    "name_latin" : "Indre-et-Loire",
    "nuts_name" : "Indre-et-Loire",
    "name_ascii" : "Indre-et-Loire",
    "name_html" : "Indre-et-Loire"
  },
  "FR245": {
    "name_latin" : "Loir-et-Cher",
    "nuts_name" : "Loir-et-Cher",
    "name_ascii" : "Loir-et-Cher",
    "name_html" : "Loir-et-Cher"
  },
  "FR246": {
    "name_latin" : "Loiret",
    "nuts_name" : "Loiret",
    "name_ascii" : "Loiret",
    "name_html" : "Loiret"
  },
  "FR251": {
    "name_latin" : "Calvados",
    "nuts_name" : "Calvados",
    "name_ascii" : "Calvados",
    "name_html" : "Calvados"
  },
  "FR252": {
    "name_latin" : "Manche",
    "nuts_name" : "Manche",
    "name_ascii" : "Manche",
    "name_html" : "Manche"
  },
  "FR253": {
    "name_latin" : "Orne",
    "nuts_name" : "Orne",
    "name_ascii" : "Orne",
    "name_html" : "Orne"
  },
  "FR261": {
    "name_latin" : "Côte-d'Or",
    "nuts_name" : "Côte-d'Or",
    "name_ascii" : "Cote-d'Or",
    "name_html" : "C&#x00F4;te-d'Or"
  },
  "FR262": {
    "name_latin" : "Nièvre",
    "nuts_name" : "Nièvre",
    "name_ascii" : "Nievre",
    "name_html" : "Ni&#x00E8;vre"
  },
  "FR264": {
    "name_latin" : "Yonne",
    "nuts_name" : "Yonne",
    "name_ascii" : "Yonne",
    "name_html" : "Yonne"
  },
  "FR301": {
    "name_latin" : "Nord",
    "nuts_name" : "Nord",
    "name_ascii" : "Nord",
    "name_html" : "Nord"
  },
  "FR302": {
    "name_latin" : "Pas-de-Calais",
    "nuts_name" : "Pas-de-Calais",
    "name_ascii" : "Pas-de-Calais",
    "name_html" : "Pas-de-Calais"
  },
  "FR412": {
    "name_latin" : "Meuse",
    "nuts_name" : "Meuse",
    "name_ascii" : "Meuse",
    "name_html" : "Meuse"
  },
  "FR413": {
    "name_latin" : "Moselle",
    "nuts_name" : "Moselle",
    "name_ascii" : "Moselle",
    "name_html" : "Moselle"
  },
  "FR414": {
    "name_latin" : "Vosges",
    "nuts_name" : "Vosges",
    "name_ascii" : "Vosges",
    "name_html" : "Vosges"
  },
  "FR421": {
    "name_latin" : "Bas-Rhin",
    "nuts_name" : "Bas-Rhin",
    "name_ascii" : "Bas-Rhin",
    "name_html" : "Bas-Rhin"
  },
  "FR422": {
    "name_latin" : "Haut-Rhin",
    "nuts_name" : "Haut-Rhin",
    "name_ascii" : "Haut-Rhin",
    "name_html" : "Haut-Rhin"
  },
  "FR431": {
    "name_latin" : "Doubs",
    "nuts_name" : "Doubs",
    "name_ascii" : "Doubs",
    "name_html" : "Doubs"
  },
  "FR432": {
    "name_latin" : "Jura",
    "nuts_name" : "Jura",
    "name_ascii" : "Jura",
    "name_html" : "Jura"
  },
  "FR434": {
    "name_latin" : "Territoire de Belfort",
    "nuts_name" : "Territoire de Belfort",
    "name_ascii" : "Territoire de Belfort",
    "name_html" : "Territoire de Belfort"
  },
  "FR511": {
    "name_latin" : "Loire-Atlantique",
    "nuts_name" : "Loire-Atlantique",
    "name_ascii" : "Loire-Atlantique",
    "name_html" : "Loire-Atlantique"
  },
  "FR513": {
    "name_latin" : "Mayenne",
    "nuts_name" : "Mayenne",
    "name_ascii" : "Mayenne",
    "name_html" : "Mayenne"
  },
  "FR514": {
    "name_latin" : "Sarthe",
    "nuts_name" : "Sarthe",
    "name_ascii" : "Sarthe",
    "name_html" : "Sarthe"
  },
  "FR515": {
    "name_latin" : "Vendée",
    "nuts_name" : "Vendée",
    "name_ascii" : "Vendee",
    "name_html" : "Vend&#x00E9;e"
  },
  "FR521": {
    "name_latin" : "Côtes-d'Armor",
    "nuts_name" : "Côtes-d'Armor",
    "name_ascii" : "Cotes-d'Armor",
    "name_html" : "C&#x00F4;tes-d'Armor"
  },
  "FR523": {
    "name_latin" : "Ille-et-Vilaine",
    "nuts_name" : "Ille-et-Vilaine",
    "name_ascii" : "Ille-et-Vilaine",
    "name_html" : "Ille-et-Vilaine"
  },
  "FR524": {
    "name_latin" : "Morbihan",
    "nuts_name" : "Morbihan",
    "name_ascii" : "Morbihan",
    "name_html" : "Morbihan"
  },
  "FR531": {
    "name_latin" : "Charente",
    "nuts_name" : "Charente",
    "name_ascii" : "Charente",
    "name_html" : "Charente"
  },
  "FR532": {
    "name_latin" : "Charente-Maritime",
    "nuts_name" : "Charente-Maritime",
    "name_ascii" : "Charente-Maritime",
    "name_html" : "Charente-Maritime"
  },
  "FR534": {
    "name_latin" : "Vienne",
    "nuts_name" : "Vienne",
    "name_ascii" : "Vienne",
    "name_html" : "Vienne"
  },
  "FR611": {
    "name_latin" : "Dordogne",
    "nuts_name" : "Dordogne",
    "name_ascii" : "Dordogne",
    "name_html" : "Dordogne"
  },
  "FR612": {
    "name_latin" : "Gironde",
    "nuts_name" : "Gironde",
    "name_ascii" : "Gironde",
    "name_html" : "Gironde"
  },
  "FR613": {
    "name_latin" : "Landes",
    "nuts_name" : "Landes",
    "name_ascii" : "Landes",
    "name_html" : "Landes"
  },
  "FR615": {
    "name_latin" : "Pyrénées-Atlantiques",
    "nuts_name" : "Pyrénées-Atlantiques",
    "name_ascii" : "Pyrenees-Atlantiques",
    "name_html" : "Pyr&#x00E9;n&#x00E9;es-Atlantiques"
  },
  "FR621": {
    "name_latin" : "Ariège",
    "nuts_name" : "Ariège",
    "name_ascii" : "Ariege",
    "name_html" : "Ari&#x00E8;ge"
  },
  "FR623": {
    "name_latin" : "Haute-Garonne",
    "nuts_name" : "Haute-Garonne",
    "name_ascii" : "Haute-Garonne",
    "name_html" : "Haute-Garonne"
  },
  "FR624": {
    "name_latin" : "Gers",
    "nuts_name" : "Gers",
    "name_ascii" : "Gers",
    "name_html" : "Gers"
  },
  "FR625": {
    "name_latin" : "Lot",
    "nuts_name" : "Lot",
    "name_ascii" : "Lot",
    "name_html" : "Lot"
  },
  "FR627": {
    "name_latin" : "Tarn",
    "nuts_name" : "Tarn",
    "name_ascii" : "Tarn",
    "name_html" : "Tarn"
  },
  "FR628": {
    "name_latin" : "Tarn-et-Garonne",
    "nuts_name" : "Tarn-et-Garonne",
    "name_ascii" : "Tarn-et-Garonne",
    "name_html" : "Tarn-et-Garonne"
  },
  "FR631": {
    "name_latin" : "Corrèze",
    "nuts_name" : "Corrèze",
    "name_ascii" : "Correze",
    "name_html" : "Corr&#x00E8;ze"
  },
  "FR632": {
    "name_latin" : "Creuse",
    "nuts_name" : "Creuse",
    "name_ascii" : "Creuse",
    "name_html" : "Creuse"
  },
  "FR633": {
    "name_latin" : "Haute-Vienne",
    "nuts_name" : "Haute-Vienne",
    "name_ascii" : "Haute-Vienne",
    "name_html" : "Haute-Vienne"
  },
  "FR711": {
    "name_latin" : "Ain",
    "nuts_name" : "Ain",
    "name_ascii" : "Ain",
    "name_html" : "Ain"
  },
  "FR713": {
    "name_latin" : "Drôme",
    "nuts_name" : "Drôme",
    "name_ascii" : "Drome",
    "name_html" : "Dr&#x00F4;me"
  },
  "FR714": {
    "name_latin" : "Isère",
    "nuts_name" : "Isère",
    "name_ascii" : "Isere",
    "name_html" : "Is&#x00E8;re"
  },
  "FR715": {
    "name_latin" : "Loire",
    "nuts_name" : "Loire",
    "name_ascii" : "Loire",
    "name_html" : "Loire"
  },
  "FR716": {
    "name_latin" : "Rhône",
    "nuts_name" : "Rhône",
    "name_ascii" : "Rhone",
    "name_html" : "Rh&#x00F4;ne"
  },
  "FR717": {
    "name_latin" : "Savoie",
    "nuts_name" : "Savoie",
    "name_ascii" : "Savoie",
    "name_html" : "Savoie"
  },
  "FR721": {
    "name_latin" : "Allier",
    "nuts_name" : "Allier",
    "name_ascii" : "Allier",
    "name_html" : "Allier"
  },
  "FR722": {
    "name_latin" : "Cantal",
    "nuts_name" : "Cantal",
    "name_ascii" : "Cantal",
    "name_html" : "Cantal"
  },
  "FR723": {
    "name_latin" : "Haute-Loire",
    "nuts_name" : "Haute-Loire",
    "name_ascii" : "Haute-Loire",
    "name_html" : "Haute-Loire"
  },
  "FR724": {
    "name_latin" : "Puy-de-Dôme",
    "nuts_name" : "Puy-de-Dôme",
    "name_ascii" : "Puy-de-Dome",
    "name_html" : "Puy-de-D&#x00F4;me"
  },
  "FR811": {
    "name_latin" : "Aude",
    "nuts_name" : "Aude",
    "name_ascii" : "Aude",
    "name_html" : "Aude"
  },
  "FR812": {
    "name_latin" : "Gard",
    "nuts_name" : "Gard",
    "name_ascii" : "Gard",
    "name_html" : "Gard"
  },
  "FR813": {
    "name_latin" : "Hérault",
    "nuts_name" : "Hérault",
    "name_ascii" : "Herault",
    "name_html" : "H&#x00E9;rault"
  },
  "FR814": {
    "name_latin" : "Lozère",
    "nuts_name" : "Lozère",
    "name_ascii" : "Lozere",
    "name_html" : "Loz&#x00E8;re"
  },
  "FR815": {
    "name_latin" : "Pyrénées-Orientales",
    "nuts_name" : "Pyrénées-Orientales",
    "name_ascii" : "Pyrenees-Orientales",
    "name_html" : "Pyr&#x00E9;n&#x00E9;es-Orientales"
  },
  "FR821": {
    "name_latin" : "Alpes-de-Haute-Provence",
    "nuts_name" : "Alpes-de-Haute-Provence",
    "name_ascii" : "Alpes-de-Haute-Provence",
    "name_html" : "Alpes-de-Haute-Provence"
  },
  "FR822": {
    "name_latin" : "Hautes-Alpes",
    "nuts_name" : "Hautes-Alpes",
    "name_ascii" : "Hautes-Alpes",
    "name_html" : "Hautes-Alpes"
  },
  "FR823": {
    "name_latin" : "Alpes-Maritimes",
    "nuts_name" : "Alpes-Maritimes",
    "name_ascii" : "Alpes-Maritimes",
    "name_html" : "Alpes-Maritimes"
  },
  "FR824": {
    "name_latin" : "Bouches-du-Rhône",
    "nuts_name" : "Bouches-du-Rhône",
    "name_ascii" : "Bouches-du-Rhone",
    "name_html" : "Bouches-du-Rh&#x00F4;ne"
  },
  "FR825": {
    "name_latin" : "Var",
    "nuts_name" : "Var",
    "name_ascii" : "Var",
    "name_html" : "Var"
  },
  "FR826": {
    "name_latin" : "Vaucluse",
    "nuts_name" : "Vaucluse",
    "name_ascii" : "Vaucluse",
    "name_html" : "Vaucluse"
  },
  "FR831": {
    "name_latin" : "Corse-du-Sud",
    "nuts_name" : "Corse-du-Sud",
    "name_ascii" : "Corse-du-Sud",
    "name_html" : "Corse-du-Sud"
  },
  "FR832": {
    "name_latin" : "Haute-Corse",
    "nuts_name" : "Haute-Corse",
    "name_ascii" : "Haute-Corse",
    "name_html" : "Haute-Corse"
  },
  "FRA10": {
    "name_latin" : "Guadeloupe",
    "nuts_name" : "Guadeloupe",
    "name_ascii" : "Guadeloupe",
    "name_html" : "Guadeloupe"
  },
  "FRA20": {
    "name_latin" : "Martinique",
    "nuts_name" : "Martinique",
    "name_ascii" : "Martinique",
    "name_html" : "Martinique"
  },
  "FRA30": {
    "name_latin" : "Guyane",
    "nuts_name" : "Guyane",
    "name_ascii" : "Guyane",
    "name_html" : "Guyane"
  },
  "FRA40": {
    "name_latin" : "La Réunion",
    "nuts_name" : "La Réunion",
    "name_ascii" : "La Reunion",
    "name_html" : "La R&#x00E9;union"
  },
  "FRA50": {
    "name_latin" : "Mayotte",
    "nuts_name" : "Mayotte",
    "name_ascii" : "Mayotte",
    "name_html" : "Mayotte"
  },
  "HR031": {
    "name_latin" : "Primorsko-goranska županija",
    "nuts_name" : "Primorsko-goranska županija",
    "name_ascii" : "Primorsko-Goranska Zupanija",
    "name_html" : "Primorsko-Goranska &#x017D;upanija"
  },
  "HR032": {
    "name_latin" : "Licko-senjska županija",
    "nuts_name" : "Licko-senjska županija",
    "name_ascii" : "Licko-Senjska Zupanija",
    "name_html" : "Licko-Senjska &#x017D;upanija"
  },
  "HR033": {
    "name_latin" : "Zadarska županija",
    "nuts_name" : "Zadarska županija",
    "name_ascii" : "Zadarska Zupanija",
    "name_html" : "Zadarska &#x017D;upanija"
  },
  "HR035": {
    "name_latin" : "Splitsko-dalmatinska županija",
    "nuts_name" : "Splitsko-dalmatinska županija",
    "name_ascii" : "Splitsko-Dalmatinska Zupanija",
    "name_html" : "Splitsko-Dalmatinska &#x017D;upanija"
  },
  "HR036": {
    "name_latin" : "Istarska županija",
    "nuts_name" : "Istarska županija",
    "name_ascii" : "Istarska Zupanija",
    "name_html" : "Istarska &#x017D;upanija"
  },
  "HR037": {
    "name_latin" : "Dubrovacko-neretvanska županija",
    "nuts_name" : "Dubrovacko-neretvanska županija",
    "name_ascii" : "Dubrovacko-Neretvanska Zupanija",
    "name_html" : "Dubrovacko-Neretvanska &#x017D;upanija"
  },
  "HR042": {
    "name_latin" : "Zagrebacka županija",
    "nuts_name" : "Zagrebacka županija",
    "name_ascii" : "Zagrebacka Zupanija",
    "name_html" : "Zagrebacka &#x017D;upanija"
  },
  "HR043": {
    "name_latin" : "Krapinsko-zagorska županija",
    "nuts_name" : "Krapinsko-zagorska županija",
    "name_ascii" : "Krapinsko-Zagorska Zupanija",
    "name_html" : "Krapinsko-Zagorska &#x017D;upanija"
  },
  "HR045": {
    "name_latin" : "Koprivnicko-križevacka županija",
    "nuts_name" : "Koprivnicko-križevacka županija",
    "name_ascii" : "Koprivnicko-Krizevacka Zupanija",
    "name_html" : "Koprivnicko-Kri&#x017E;evacka &#x017D;upanija"
  },
  "HR046": {
    "name_latin" : "Medimurska županija",
    "nuts_name" : "Medimurska županija",
    "name_ascii" : "Medimurska Zupanija",
    "name_html" : "Medimurska &#x017D;upanija"
  },
  "HR047": {
    "name_latin" : "Bjelovarsko-bilogorska županija",
    "nuts_name" : "Bjelovarsko-bilogorska županija",
    "name_ascii" : "Bjelovarsko-Bilogorska Zupanija",
    "name_html" : "Bjelovarsko-Bilogorska &#x017D;upanija"
  },
  "HR049": {
    "name_latin" : "Požeško-slavonska županija",
    "nuts_name" : "Požeško-slavonska županija",
    "name_ascii" : "Pozesko-Slavonska Zupanija",
    "name_html" : "Po&#x017E;e&#x0161;ko-Slavonska &#x017D;upanija"
  },
  "HR04A": {
    "name_latin" : "Brodsko-posavska županija",
    "nuts_name" : "Brodsko-posavska županija",
    "name_ascii" : "Brodsko-Posavska Zupanija",
    "name_html" : "Brodsko-Posavska &#x017D;upanija"
  },
  "HR04B": {
    "name_latin" : "Osjecko-baranjska županija",
    "nuts_name" : "Osjecko-baranjska županija",
    "name_ascii" : "Osjecko-Baranjska Zupanija",
    "name_html" : "Osjecko-Baranjska &#x017D;upanija"
  },
  "HR04D": {
    "name_latin" : "Karlovacka županija",
    "nuts_name" : "Karlovacka županija",
    "name_ascii" : "Karlovacka Zupanija",
    "name_html" : "Karlovacka &#x017D;upanija"
  },
  "HR04E": {
    "name_latin" : "Sisacko-moslavacka županija",
    "nuts_name" : "Sisacko-moslavacka županija",
    "name_ascii" : "Sisacko-Moslavacka Zupanija",
    "name_html" : "Sisacko-Moslavacka &#x017D;upanija"
  },
  "HU101": {
    "name_latin" : "Budapest",
    "nuts_name" : "Budapest",
    "name_ascii" : "Budapest",
    "name_html" : "Budapest"
  },
  "HU102": {
    "name_latin" : "Pest",
    "nuts_name" : "Pest",
    "name_ascii" : "Pest",
    "name_html" : "Pest"
  },
  "HU211": {
    "name_latin" : "Fejér",
    "nuts_name" : "Fejér",
    "name_ascii" : "Fejer",
    "name_html" : "Fej&#x00E9;r"
  },
  "HU213": {
    "name_latin" : "Veszprém",
    "nuts_name" : "Veszprém",
    "name_ascii" : "Veszprem",
    "name_html" : "Veszpr&#x00E9;m"
  },
  "HU221": {
    "name_latin" : "Gyor-Moson-Sopron",
    "nuts_name" : "Gyor-Moson-Sopron",
    "name_ascii" : "Gyor-Moson-Sopron",
    "name_html" : "Gyor-Moson-Sopron"
  },
  "HU222": {
    "name_latin" : "Vas",
    "nuts_name" : "Vas",
    "name_ascii" : "Vas",
    "name_html" : "Vas"
  },
  "HU223": {
    "name_latin" : "Zala",
    "nuts_name" : "Zala",
    "name_ascii" : "Zala",
    "name_html" : "Zala"
  },
  "HU231": {
    "name_latin" : "Baranya",
    "nuts_name" : "Baranya",
    "name_ascii" : "Baranya",
    "name_html" : "Baranya"
  },
  "HU232": {
    "name_latin" : "Somogy",
    "nuts_name" : "Somogy",
    "name_ascii" : "Somogy",
    "name_html" : "Somogy"
  },
  "HU233": {
    "name_latin" : "Tolna",
    "nuts_name" : "Tolna",
    "name_ascii" : "Tolna",
    "name_html" : "Tolna"
  },
  "HU312": {
    "name_latin" : "Heves",
    "nuts_name" : "Heves",
    "name_ascii" : "Heves",
    "name_html" : "Heves"
  },
  "HU313": {
    "name_latin" : "Nógrád",
    "nuts_name" : "Nógrád",
    "name_ascii" : "Nograd",
    "name_html" : "N&#x00F3;gr&#x00E1;d"
  },
  "HU321": {
    "name_latin" : "Hajdú-Bihar",
    "nuts_name" : "Hajdú-Bihar",
    "name_ascii" : "Hajdu-Bihar",
    "name_html" : "Hajd&#x00FA;-Bihar"
  },
  "HU322": {
    "name_latin" : "Jász-Nagykun-Szolnok",
    "nuts_name" : "Jász-Nagykun-Szolnok",
    "name_ascii" : "Jasz-Nagykun-Szolnok",
    "name_html" : "J&#x00E1;sz-Nagykun-Szolnok"
  },
  "HU331": {
    "name_latin" : "Bács-Kiskun",
    "nuts_name" : "Bács-Kiskun",
    "name_ascii" : "Bacs-Kiskun",
    "name_html" : "B&#x00E1;cs-Kiskun"
  },
  "HU332": {
    "name_latin" : "Békés",
    "nuts_name" : "Békés",
    "name_ascii" : "Bekes",
    "name_html" : "B&#x00E9;k&#x00E9;s"
  },
  "HU333": {
    "name_latin" : "Csongrád",
    "nuts_name" : "Csongrád",
    "name_ascii" : "Csongrad",
    "name_html" : "Csongr&#x00E1;d"
  },
  "IE011": {
    "name_latin" : "Border",
    "nuts_name" : "Border",
    "name_ascii" : "Border",
    "name_html" : "Border"
  },
  "IE012": {
    "name_latin" : "Midland",
    "nuts_name" : "Midland",
    "name_ascii" : "Midland",
    "name_html" : "Midland"
  },
  "IE021": {
    "name_latin" : "Dublin",
    "nuts_name" : "Dublin",
    "name_ascii" : "Dublin",
    "name_html" : "Dublin"
  },
  "IE023": {
    "name_latin" : "Mid-West",
    "nuts_name" : "Mid-West",
    "name_ascii" : "Mid-West",
    "name_html" : "Mid-West"
  },
  "IE024": {
    "name_latin" : "South-East (IE)",
    "nuts_name" : "South-East (IE)",
    "name_ascii" : "South-East (IE)",
    "name_html" : "South-East (IE)"
  },
  "IE025": {
    "name_latin" : "South-West (IE)",
    "nuts_name" : "South-West (IE)",
    "name_ascii" : "South-West (IE)",
    "name_html" : "South-West (IE)"
  },
  "IS001": {
    "name_latin" : "Höfuðborgarsvæði",
    "nuts_name" : "Höfuðborgarsvæði",
    "name_ascii" : "Hofudborgarsvaedi",
    "name_html" : "H&#x00F6;fu&#x00F0;borgarsv&#x00E6;&#x00F0;i"
  },
  "IS002": {
    "name_latin" : "Landsbyggð",
    "nuts_name" : "Landsbyggð",
    "name_ascii" : "Landsbyggd",
    "name_html" : "Landsbygg&#x00F0;"
  },
  "ITC11": {
    "name_latin" : "Torino",
    "nuts_name" : "Torino",
    "name_ascii" : "Torino",
    "name_html" : "Torino"
  },
  "ITC12": {
    "name_latin" : "Vercelli",
    "nuts_name" : "Vercelli",
    "name_ascii" : "Vercelli",
    "name_html" : "Vercelli"
  },
  "ITC13": {
    "name_latin" : "Biella",
    "nuts_name" : "Biella",
    "name_ascii" : "Biella",
    "name_html" : "Biella"
  },
  "ITC14": {
    "name_latin" : "Verbano-Cusio-Ossola",
    "nuts_name" : "Verbano-Cusio-Ossola",
    "name_ascii" : "Verbano-Cusio-Ossola",
    "name_html" : "Verbano-Cusio-Ossola"
  },
  "ITC15": {
    "name_latin" : "Novara",
    "nuts_name" : "Novara",
    "name_ascii" : "Novara",
    "name_html" : "Novara"
  },
  "ITC16": {
    "name_latin" : "Cuneo",
    "nuts_name" : "Cuneo",
    "name_ascii" : "Cuneo",
    "name_html" : "Cuneo"
  },
  "ITC17": {
    "name_latin" : "Asti",
    "nuts_name" : "Asti",
    "name_ascii" : "Asti",
    "name_html" : "Asti"
  },
  "ITC18": {
    "name_latin" : "Alessandria",
    "nuts_name" : "Alessandria",
    "name_ascii" : "Alessandria",
    "name_html" : "Alessandria"
  },
  "ITC20": {
    "name_latin" : "Valle d'Aosta/Vallée d'Aoste",
    "nuts_name" : "Valle d'Aosta/Vallée d'Aoste",
    "name_ascii" : "Valle d'Aosta/Vallee D'Aoste",
    "name_html" : "Valle d'Aosta/Vall&#x00E9;e D'Aoste"
  },
  "ITC31": {
    "name_latin" : "Imperia",
    "nuts_name" : "Imperia",
    "name_ascii" : "Imperia",
    "name_html" : "Imperia"
  },
  "ITC32": {
    "name_latin" : "Savona",
    "nuts_name" : "Savona",
    "name_ascii" : "Savona",
    "name_html" : "Savona"
  },
  "ITC33": {
    "name_latin" : "Genova",
    "nuts_name" : "Genova",
    "name_ascii" : "Genova",
    "name_html" : "Genova"
  },
  "ITC34": {
    "name_latin" : "La Spezia",
    "nuts_name" : "La Spezia",
    "name_ascii" : "La Spezia",
    "name_html" : "La Spezia"
  },
  "ITC41": {
    "name_latin" : "Varese",
    "nuts_name" : "Varese",
    "name_ascii" : "Varese",
    "name_html" : "Varese"
  },
  "ITC42": {
    "name_latin" : "Como",
    "nuts_name" : "Como",
    "name_ascii" : "Como",
    "name_html" : "Como"
  },
  "ITC43": {
    "name_latin" : "Lecco",
    "nuts_name" : "Lecco",
    "name_ascii" : "Lecco",
    "name_html" : "Lecco"
  },
  "ITC44": {
    "name_latin" : "Sondrio",
    "nuts_name" : "Sondrio",
    "name_ascii" : "Sondrio",
    "name_html" : "Sondrio"
  },
  "ITC46": {
    "name_latin" : "Bergamo",
    "nuts_name" : "Bergamo",
    "name_ascii" : "Bergamo",
    "name_html" : "Bergamo"
  },
  "ITC47": {
    "name_latin" : "Brescia",
    "nuts_name" : "Brescia",
    "name_ascii" : "Brescia",
    "name_html" : "Brescia"
  },
  "ITC48": {
    "name_latin" : "Pavia",
    "nuts_name" : "Pavia",
    "name_ascii" : "Pavia",
    "name_html" : "Pavia"
  },
  "ITC49": {
    "name_latin" : "Lodi",
    "nuts_name" : "Lodi",
    "name_ascii" : "Lodi",
    "name_html" : "Lodi"
  },
  "ITC4A": {
    "name_latin" : "Cremona",
    "nuts_name" : "Cremona",
    "name_ascii" : "Cremona",
    "name_html" : "Cremona"
  },
  "ITC4B": {
    "name_latin" : "Mantova",
    "nuts_name" : "Mantova",
    "name_ascii" : "Mantova",
    "name_html" : "Mantova"
  },
  "ITC4C": {
    "name_latin" : "Milano",
    "nuts_name" : "Milano",
    "name_ascii" : "Milano",
    "name_html" : "Milano"
  },
  "ITC4D": {
    "name_latin" : "Monza e della Brianza",
    "nuts_name" : "Monza e della Brianza",
    "name_ascii" : "Monza e della Brianza",
    "name_html" : "Monza e della Brianza"
  },
  "ITF11": {
    "name_latin" : "L'Aquila",
    "nuts_name" : "L'Aquila",
    "name_ascii" : "L'Aquila",
    "name_html" : "L'Aquila"
  },
  "ITF12": {
    "name_latin" : "Teramo",
    "nuts_name" : "Teramo",
    "name_ascii" : "Teramo",
    "name_html" : "Teramo"
  },
  "ITF13": {
    "name_latin" : "Pescara",
    "nuts_name" : "Pescara",
    "name_ascii" : "Pescara",
    "name_html" : "Pescara"
  },
  "ITF14": {
    "name_latin" : "Chieti",
    "nuts_name" : "Chieti",
    "name_ascii" : "Chieti",
    "name_html" : "Chieti"
  },
  "ITF21": {
    "name_latin" : "Isernia",
    "nuts_name" : "Isernia",
    "name_ascii" : "Isernia",
    "name_html" : "Isernia"
  },
  "ITF22": {
    "name_latin" : "Campobasso",
    "nuts_name" : "Campobasso",
    "name_ascii" : "Campobasso",
    "name_html" : "Campobasso"
  },
  "ITF31": {
    "name_latin" : "Caserta",
    "nuts_name" : "Caserta",
    "name_ascii" : "Caserta",
    "name_html" : "Caserta"
  },
  "ITF32": {
    "name_latin" : "Benevento",
    "nuts_name" : "Benevento",
    "name_ascii" : "Benevento",
    "name_html" : "Benevento"
  },
  "ITF33": {
    "name_latin" : "Napoli",
    "nuts_name" : "Napoli",
    "name_ascii" : "Napoli",
    "name_html" : "Napoli"
  },
  "ITF34": {
    "name_latin" : "Avellino",
    "nuts_name" : "Avellino",
    "name_ascii" : "Avellino",
    "name_html" : "Avellino"
  },
  "ITF35": {
    "name_latin" : "Salerno",
    "nuts_name" : "Salerno",
    "name_ascii" : "Salerno",
    "name_html" : "Salerno"
  },
  "ITF43": {
    "name_latin" : "Taranto",
    "nuts_name" : "Taranto",
    "name_ascii" : "Taranto",
    "name_html" : "Taranto"
  },
  "ITF44": {
    "name_latin" : "Brindisi",
    "nuts_name" : "Brindisi",
    "name_ascii" : "Brindisi",
    "name_html" : "Brindisi"
  },
  "ITF45": {
    "name_latin" : "Lecce",
    "nuts_name" : "Lecce",
    "name_ascii" : "Lecce",
    "name_html" : "Lecce"
  },
  "ITF46": {
    "name_latin" : "Foggia",
    "nuts_name" : "Foggia",
    "name_ascii" : "Foggia",
    "name_html" : "Foggia"
  },
  "ITF47": {
    "name_latin" : "Bari",
    "nuts_name" : "Bari",
    "name_ascii" : "Bari",
    "name_html" : "Bari"
  },
  "ITF51": {
    "name_latin" : "Potenza",
    "nuts_name" : "Potenza",
    "name_ascii" : "Potenza",
    "name_html" : "Potenza"
  },
  "ITF52": {
    "name_latin" : "Matera",
    "nuts_name" : "Matera",
    "name_ascii" : "Matera",
    "name_html" : "Matera"
  },
  "ITF61": {
    "name_latin" : "Cosenza",
    "nuts_name" : "Cosenza",
    "name_ascii" : "Cosenza",
    "name_html" : "Cosenza"
  },
  "ITF62": {
    "name_latin" : "Crotone",
    "nuts_name" : "Crotone",
    "name_ascii" : "Crotone",
    "name_html" : "Crotone"
  },
  "ITF63": {
    "name_latin" : "Catanzaro",
    "nuts_name" : "Catanzaro",
    "name_ascii" : "Catanzaro",
    "name_html" : "Catanzaro"
  },
  "ITF64": {
    "name_latin" : "Vibo Valentia",
    "nuts_name" : "Vibo Valentia",
    "name_ascii" : "Vibo Valentia",
    "name_html" : "Vibo Valentia"
  },
  "ITF65": {
    "name_latin" : "Reggio di Calabria",
    "nuts_name" : "Reggio di Calabria",
    "name_ascii" : "Reggio di Calabria",
    "name_html" : "Reggio di Calabria"
  },
  "ITG12": {
    "name_latin" : "Palermo",
    "nuts_name" : "Palermo",
    "name_ascii" : "Palermo",
    "name_html" : "Palermo"
  },
  "ITG13": {
    "name_latin" : "Messina",
    "nuts_name" : "Messina",
    "name_ascii" : "Messina",
    "name_html" : "Messina"
  },
  "ITG14": {
    "name_latin" : "Agrigento",
    "nuts_name" : "Agrigento",
    "name_ascii" : "Agrigento",
    "name_html" : "Agrigento"
  },
  "ITG15": {
    "name_latin" : "Caltanissetta",
    "nuts_name" : "Caltanissetta",
    "name_ascii" : "Caltanissetta",
    "name_html" : "Caltanissetta"
  },
  "ITG17": {
    "name_latin" : "Catania",
    "nuts_name" : "Catania",
    "name_ascii" : "Catania",
    "name_html" : "Catania"
  },
  "ITG18": {
    "name_latin" : "Ragusa",
    "nuts_name" : "Ragusa",
    "name_ascii" : "Ragusa",
    "name_html" : "Ragusa"
  },
  "ITG19": {
    "name_latin" : "Siracusa",
    "nuts_name" : "Siracusa",
    "name_ascii" : "Siracusa",
    "name_html" : "Siracusa"
  },
  "ITG25": {
    "name_latin" : "Sassari",
    "nuts_name" : "Sassari",
    "name_ascii" : "Sassari",
    "name_html" : "Sassari"
  },
  "ITG26": {
    "name_latin" : "Nuoro",
    "nuts_name" : "Nuoro",
    "name_ascii" : "Nuoro",
    "name_html" : "Nuoro"
  },
  "ITG27": {
    "name_latin" : "Cagliari",
    "nuts_name" : "Cagliari",
    "name_ascii" : "Cagliari",
    "name_html" : "Cagliari"
  },
  "ITG28": {
    "name_latin" : "Oristano",
    "nuts_name" : "Oristano",
    "name_ascii" : "Oristano",
    "name_html" : "Oristano"
  },
  "ITG29": {
    "name_latin" : "Olbia-Tempio",
    "nuts_name" : "Olbia-Tempio",
    "name_ascii" : "Olbia-Tempio",
    "name_html" : "Olbia-Tempio"
  },
  "ITG2B": {
    "name_latin" : "Medio Campidano",
    "nuts_name" : "Medio Campidano",
    "name_ascii" : "Medio Campidano",
    "name_html" : "Medio Campidano"
  },
  "ITG2C": {
    "name_latin" : "Carbonia-Iglesias",
    "nuts_name" : "Carbonia-Iglesias",
    "name_ascii" : "Carbonia-Iglesias",
    "name_html" : "Carbonia-Iglesias"
  },
  "ITH10": {
    "name_latin" : "Bolzano-Bozen",
    "nuts_name" : "Bolzano-Bozen",
    "name_ascii" : "Bolzano-Bozen",
    "name_html" : "Bolzano-Bozen"
  },
  "ITH20": {
    "name_latin" : "Trento",
    "nuts_name" : "Trento",
    "name_ascii" : "Trento",
    "name_html" : "Trento"
  },
  "ITH31": {
    "name_latin" : "Verona",
    "nuts_name" : "Verona",
    "name_ascii" : "Verona",
    "name_html" : "Verona"
  },
  "ITH32": {
    "name_latin" : "Vicenza",
    "nuts_name" : "Vicenza",
    "name_ascii" : "Vicenza",
    "name_html" : "Vicenza"
  },
  "ITH33": {
    "name_latin" : "Belluno",
    "nuts_name" : "Belluno",
    "name_ascii" : "Belluno",
    "name_html" : "Belluno"
  },
  "ITH34": {
    "name_latin" : "Treviso",
    "nuts_name" : "Treviso",
    "name_ascii" : "Treviso",
    "name_html" : "Treviso"
  },
  "ITH35": {
    "name_latin" : "Venezia",
    "nuts_name" : "Venezia",
    "name_ascii" : "Venezia",
    "name_html" : "Venezia"
  },
  "ITH36": {
    "name_latin" : "Padova",
    "nuts_name" : "Padova",
    "name_ascii" : "Padova",
    "name_html" : "Padova"
  },
  "ITH37": {
    "name_latin" : "Rovigo",
    "nuts_name" : "Rovigo",
    "name_ascii" : "Rovigo",
    "name_html" : "Rovigo"
  },
  "ITH41": {
    "name_latin" : "Pordenone",
    "nuts_name" : "Pordenone",
    "name_ascii" : "Pordenone",
    "name_html" : "Pordenone"
  },
  "ITH42": {
    "name_latin" : "Udine",
    "nuts_name" : "Udine",
    "name_ascii" : "Udine",
    "name_html" : "Udine"
  },
  "ITH44": {
    "name_latin" : "Trieste",
    "nuts_name" : "Trieste",
    "name_ascii" : "Trieste",
    "name_html" : "Trieste"
  },
  "ITH51": {
    "name_latin" : "Piacenza",
    "nuts_name" : "Piacenza",
    "name_ascii" : "Piacenza",
    "name_html" : "Piacenza"
  },
  "ITH52": {
    "name_latin" : "Parma",
    "nuts_name" : "Parma",
    "name_ascii" : "Parma",
    "name_html" : "Parma"
  },
  "ITH54": {
    "name_latin" : "Modena",
    "nuts_name" : "Modena",
    "name_ascii" : "Modena",
    "name_html" : "Modena"
  },
  "ITH55": {
    "name_latin" : "Bologna",
    "nuts_name" : "Bologna",
    "name_ascii" : "Bologna",
    "name_html" : "Bologna"
  },
  "ITH56": {
    "name_latin" : "Ferrara",
    "nuts_name" : "Ferrara",
    "name_ascii" : "Ferrara",
    "name_html" : "Ferrara"
  },
  "ITH57": {
    "name_latin" : "Ravenna",
    "nuts_name" : "Ravenna",
    "name_ascii" : "Ravenna",
    "name_html" : "Ravenna"
  },
  "ITH58": {
    "name_latin" : "Forlì-Cesena",
    "nuts_name" : "Forlì-Cesena",
    "name_ascii" : "Forli-Cesena",
    "name_html" : "Forl&#x00EC;-Cesena"
  },
  "ITH59": {
    "name_latin" : "Rimini",
    "nuts_name" : "Rimini",
    "name_ascii" : "Rimini",
    "name_html" : "Rimini"
  },
  "ITI12": {
    "name_latin" : "Lucca",
    "nuts_name" : "Lucca",
    "name_ascii" : "Lucca",
    "name_html" : "Lucca"
  },
  "ITI13": {
    "name_latin" : "Pistoia",
    "nuts_name" : "Pistoia",
    "name_ascii" : "Pistoia",
    "name_html" : "Pistoia"
  },
  "ITI14": {
    "name_latin" : "Firenze",
    "nuts_name" : "Firenze",
    "name_ascii" : "Firenze",
    "name_html" : "Firenze"
  },
  "ITI15": {
    "name_latin" : "Prato",
    "nuts_name" : "Prato",
    "name_ascii" : "Prato",
    "name_html" : "Prato"
  },
  "ITI16": {
    "name_latin" : "Livorno",
    "nuts_name" : "Livorno",
    "name_ascii" : "Livorno",
    "name_html" : "Livorno"
  },
  "ITI17": {
    "name_latin" : "Pisa",
    "nuts_name" : "Pisa",
    "name_ascii" : "Pisa",
    "name_html" : "Pisa"
  },
  "ITI18": {
    "name_latin" : "Arezzo",
    "nuts_name" : "Arezzo",
    "name_ascii" : "Arezzo",
    "name_html" : "Arezzo"
  },
  "ITI19": {
    "name_latin" : "Siena",
    "nuts_name" : "Siena",
    "name_ascii" : "Siena",
    "name_html" : "Siena"
  },
  "ITI1A": {
    "name_latin" : "Grosseto",
    "nuts_name" : "Grosseto",
    "name_ascii" : "Grosseto",
    "name_html" : "Grosseto"
  },
  "ITI22": {
    "name_latin" : "Terni",
    "nuts_name" : "Terni",
    "name_ascii" : "Terni",
    "name_html" : "Terni"
  },
  "ITI31": {
    "name_latin" : "Pesaro e Urbino",
    "nuts_name" : "Pesaro e Urbino",
    "name_ascii" : "Pesaro E Urbino",
    "name_html" : "Pesaro E Urbino"
  },
  "ITI32": {
    "name_latin" : "Ancona",
    "nuts_name" : "Ancona",
    "name_ascii" : "Ancona",
    "name_html" : "Ancona"
  },
  "ITI33": {
    "name_latin" : "Macerata",
    "nuts_name" : "Macerata",
    "name_ascii" : "Macerata",
    "name_html" : "Macerata"
  },
  "ITI34": {
    "name_latin" : "Ascoli Piceno",
    "nuts_name" : "Ascoli Piceno",
    "name_ascii" : "Ascoli Piceno",
    "name_html" : "Ascoli Piceno"
  },
  "ITI35": {
    "name_latin" : "Fermo",
    "nuts_name" : "Fermo",
    "name_ascii" : "Fermo",
    "name_html" : "Fermo"
  },
  "ITI41": {
    "name_latin" : "Viterbo",
    "nuts_name" : "Viterbo",
    "name_ascii" : "Viterbo",
    "name_html" : "Viterbo"
  },
  "ITI42": {
    "name_latin" : "Rieti",
    "nuts_name" : "Rieti",
    "name_ascii" : "Rieti",
    "name_html" : "Rieti"
  },
  "ITI43": {
    "name_latin" : "Roma",
    "nuts_name" : "Roma",
    "name_ascii" : "Roma",
    "name_html" : "Roma"
  },
  "ITI44": {
    "name_latin" : "Latina",
    "nuts_name" : "Latina",
    "name_ascii" : "Latina",
    "name_html" : "Latina"
  },
  "ITI45": {
    "name_latin" : "Frosinone",
    "nuts_name" : "Frosinone",
    "name_ascii" : "Frosinone",
    "name_html" : "Frosinone"
  },
  "LI000": {
    "name_latin" : "Liechtenstein",
    "nuts_name" : "Liechtenstein",
    "name_ascii" : "Liechtenstein",
    "name_html" : "Liechtenstein"
  },
  "LT001": {
    "name_latin" : "Alytaus apskritis",
    "nuts_name" : "Alytaus apskritis",
    "name_ascii" : "Alytaus apskritis",
    "name_html" : "Alytaus pskritis"
  },
  "LT002": {
    "name_latin" : "Kauno apskritis",
    "nuts_name" : "Kauno apskritis",
    "name_ascii" : "Kauno apskritis",
    "name_html" : "Kauno apskritis"
  },
  "LT003": {
    "name_latin" : "Klaipedos apskritis",
    "nuts_name" : "Klaipedos apskritis",
    "name_ascii" : "Klaipedos apskritis",
    "name_html" : "Klaipedos apskritis"
  },
  "LT004": {
    "name_latin" : "Marijampoles apskritis",
    "nuts_name" : "Marijampoles apskritis",
    "name_ascii" : "Marijampoles apskritis",
    "name_html" : "Marijampoles apskritis"
  },
  "LT005": {
    "name_latin" : "Panevežio apskritis",
    "nuts_name" : "Panevežio apskritis",
    "name_ascii" : "Panevezio apskritis",
    "name_html" : "Paneve&#x017E;io apskritis"
  },
  "LT006": {
    "name_latin" : "Šiauliu apskritis",
    "nuts_name" : "Šiauliu apskritis",
    "name_ascii" : "Siauliu apskritis",
    "name_html" : "&#x0160;iauliu apskritis"
  },
  "LT007": {
    "name_latin" : "Taurages apskritis",
    "nuts_name" : "Taurages apskritis",
    "name_ascii" : "Taurages apskritis",
    "name_html" : "Taurages apskritis"
  },
  "LT008": {
    "name_latin" : "Telšiu apskritis",
    "nuts_name" : "Telšiu apskritis",
    "name_ascii" : "Telsiu apskritis",
    "name_html" : "Tel&#x0161;iu apskritis"
  },
  "LT009": {
    "name_latin" : "Utenos apskritis",
    "nuts_name" : "Utenos apskritis",
    "name_ascii" : "Utenos apskritis",
    "name_html" : "Utenos apskritis"
  },
  "LT00A": {
    "name_latin" : "Vilniaus apskritis",
    "nuts_name" : "Vilniaus apskritis",
    "name_ascii" : "Vilniaus apskritis",
    "name_html" : "Vilniaus apskritis"
  },
  "LU000": {
    "name_latin" : "Luxembourg",
    "nuts_name" : "Luxembourg",
    "name_ascii" : "Luxembourg",
    "name_html" : "Luxembourg"
  },
  "LV003": {
    "name_latin" : "Kurzeme",
    "nuts_name" : "Kurzeme",
    "name_ascii" : "Kurzeme",
    "name_html" : "Kurzeme"
  },
  "LV005": {
    "name_latin" : "Latgale",
    "nuts_name" : "Latgale",
    "name_ascii" : "Latgale",
    "name_html" : "Latgale"
  },
  "LV006": {
    "name_latin" : "Riga",
    "nuts_name" : "Riga",
    "name_ascii" : "Riga",
    "name_html" : "Riga"
  },
  "LV007": {
    "name_latin" : "Pieriga",
    "nuts_name" : "Pieriga",
    "name_ascii" : "Pieriga",
    "name_html" : "Pieriga"
  },
  "LV008": {
    "name_latin" : "Vidzeme",
    "nuts_name" : "Vidzeme",
    "name_ascii" : "Vidzeme",
    "name_html" : "Vidzeme"
  },
  "MK001": {
    "name_latin" : "Vardarski",
    "nuts_name" : "Вардарски",
    "name_ascii" : "Vardarski",
    "name_html" : "Vardarski"
  },
  "MK002": {
    "name_latin" : "Istočen",
    "nuts_name" : "Источен",
    "name_ascii" : "Istocen",
    "name_html" : "Istocen"
  },
  "MK003": {
    "name_latin" : "Jugozapaden",
    "nuts_name" : "Југозападен",
    "name_ascii" : "Jugozapaden",
    "name_html" : "Jugozapaden"
  },
  "MK004": {
    "name_latin" : "Jugoistočen",
    "nuts_name" : "Југоисточен",
    "name_ascii" : "Jugoistocen",
    "name_html" : "Jugoistocen"
  },
  "MK005": {
    "name_latin" : "Пелагониски",
    "nuts_name" : "Пелагониски",
    "name_ascii" : "Pelagoniski",
    "name_html" : "Pelagoniski"
  },
  "MK006": {
    "name_latin" : "Pološki",
    "nuts_name" : "Полошки",
    "name_ascii" : "Poloski",
    "name_html" : "Polo&#x0161;ki"
  },
  "MK007": {
    "name_latin" : "Severoistočen",
    "nuts_name" : "Североисточен",
    "name_ascii" : "Severoistocen",
    "name_html" : "Severoistocen"
  },
  "MK008": {
    "name_latin" : "Skopski",
    "nuts_name" : "Скопски",
    "name_ascii" : "Skopski",
    "name_html" : "Skopski"
  },
  "MT001": {
    "name_latin" : "Malta",
    "nuts_name" : "Malta",
    "name_ascii" : "Malta",
    "name_html" : "Malta"
  },
  "MT002": {
    "name_latin" : "Gozo and Comino / Ghawdex u Kemmuna",
    "nuts_name" : "Gozo and Comino / Ghawdex u Kemmuna",
    "name_ascii" : "Gozo and Comino / Ghawdex u Kemmuna",
    "name_html" : "Gozo and Comino / Ghawdex u Kemmuna"
  },
  "NL111": {
    "name_latin" : "Oost-Groningen",
    "nuts_name" : "Oost-Groningen",
    "name_ascii" : "Oost-Groningen",
    "name_html" : "Oost-Groningen"
  },
  "NL112": {
    "name_latin" : "Delfzijl en omgeving",
    "nuts_name" : "Delfzijl en omgeving",
    "name_ascii" : "Delfzijl en Omgeving",
    "name_html" : "Delfzijl en Omgeving"
  },
  "NL121": {
    "name_latin" : "Noord-Friesland",
    "nuts_name" : "Noord-Friesland",
    "name_ascii" : "Noord-Friesland",
    "name_html" : "Noord-Friesland"
  },
  "NL122": {
    "name_latin" : "Zuidwest-Friesland",
    "nuts_name" : "Zuidwest-Friesland",
    "name_ascii" : "Zuidwest-Friesland",
    "name_html" : "Zuidwest-Friesland"
  },
  "NL123": {
    "name_latin" : "Zuidoost-Friesland",
    "nuts_name" : "Zuidoost-Friesland",
    "name_ascii" : "Zuidoost-Friesland",
    "name_html" : "Zuidoost-Friesland"
  },
  "NL132": {
    "name_latin" : "Zuidoost-Drenthe",
    "nuts_name" : "Zuidoost-Drenthe",
    "name_ascii" : "Zuidoost-Drenthe",
    "name_html" : "Zuidoost-Drenthe"
  },
  "NL133": {
    "name_latin" : "Zuidwest-Drenthe",
    "nuts_name" : "Zuidwest-Drenthe",
    "name_ascii" : "Zuidwest-Drenthe",
    "name_html" : "Zuidwest-Drenthe"
  },
  "NL212": {
    "name_latin" : "Zuidwest-Overijssel",
    "nuts_name" : "Zuidwest-Overijssel",
    "name_ascii" : "Zuidwest-Overijssel",
    "name_html" : "Zuidwest-Overijssel"
  },
  "NL213": {
    "name_latin" : "Twente",
    "nuts_name" : "Twente",
    "name_ascii" : "Twente",
    "name_html" : "Twente"
  },
  "NL221": {
    "name_latin" : "Veluwe",
    "nuts_name" : "Veluwe",
    "name_ascii" : "Veluwe",
    "name_html" : "Veluwe"
  },
  "NL224": {
    "name_latin" : "Zuidwest-Gelderland",
    "nuts_name" : "Zuidwest-Gelderland",
    "name_ascii" : "Zuidwest-Gelderland",
    "name_html" : "Zuidwest-Gelderland"
  },
  "NL225": {
    "name_latin" : "Achterhoek",
    "nuts_name" : "Achterhoek",
    "name_ascii" : "Achterhoek",
    "name_html" : "Achterhoek"
  },
  "NL230": {
    "name_latin" : "Flevoland",
    "nuts_name" : "Flevoland",
    "name_ascii" : "Flevoland",
    "name_html" : "Flevoland"
  },
  "NL310": {
    "name_latin" : "Utrecht",
    "nuts_name" : "Utrecht",
    "name_ascii" : "Utrecht",
    "name_html" : "Utrecht"
  },
  "NL322": {
    "name_latin" : "Alkmaar en omgeving",
    "nuts_name" : "Alkmaar en omgeving",
    "name_ascii" : "Alkmaar en Omgeving",
    "name_html" : "Alkmaar en Omgeving"
  },
  "NL323": {
    "name_latin" : "IJmond",
    "nuts_name" : "IJmond",
    "name_ascii" : "Ijmond",
    "name_html" : "Ijmond"
  },
  "NL324": {
    "name_latin" : "Agglomeratie Haarlem",
    "nuts_name" : "Agglomeratie Haarlem",
    "name_ascii" : "Agglomeratie Haarlem",
    "name_html" : "Agglomeratie Haarlem"
  },
  "NL325": {
    "name_latin" : "Zaanstreek",
    "nuts_name" : "Zaanstreek",
    "name_ascii" : "Zaanstreek",
    "name_html" : "Zaanstreek"
  },
  "NL326": {
    "name_latin" : "Groot-Amsterdam",
    "nuts_name" : "Groot-Amsterdam",
    "name_ascii" : "Groot-Amsterdam",
    "name_html" : "Groot-Amsterdam"
  },
  "NL327": {
    "name_latin" : "Het Gooi en Vechtstreek",
    "nuts_name" : "Het Gooi en Vechtstreek",
    "name_ascii" : "Het Gooi en Vechtstreek",
    "name_html" : "Het Gooi en Vechtstreek"
  },
  "NL332": {
    "name_latin" : "Agglomeratie 's-Gravenhage",
    "nuts_name" : "Agglomeratie 's-Gravenhage",
    "name_ascii" : "Agglomeratie 's-Gravenhage",
    "name_html" : "Agglomeratie 's-Gravenhage"
  },
  "NL333": {
    "name_latin" : "Delft en Westland",
    "nuts_name" : "Delft en Westland",
    "name_ascii" : "Delft en Westland",
    "name_html" : "Delft en Westland"
  },
  "NL338": {
    "name_latin" : "Oost-Zuid-Holland",
    "nuts_name" : "Oost-Zuid-Holland",
    "name_ascii" : "Oost-Zuid-Holland",
    "name_html" : "Oost-Zuid-Holland"
  },
  "NL339": {
    "name_latin" : "Groot-Rijnmond",
    "nuts_name" : "Groot-Rijnmond",
    "name_ascii" : "Groot-Rijnmond",
    "name_html" : "Groot-Rijnmond"
  },
  "NL33A": {
    "name_latin" : "Zuidoost-Zuid-Holland",
    "nuts_name" : "Zuidoost-Zuid-Holland",
    "name_ascii" : "Zuidoost-Zuid-Holland",
    "name_html" : "Zuidoost-Zuid-Holland"
  },
  "NL341": {
    "name_latin" : "Zeeuwsch-Vlaanderen",
    "nuts_name" : "Zeeuwsch-Vlaanderen",
    "name_ascii" : "Zeeuwsch-Vlaanderen",
    "name_html" : "Zeeuwsch-Vlaanderen"
  },
  "NL342": {
    "name_latin" : "Overig Zeeland",
    "nuts_name" : "Overig Zeeland",
    "name_ascii" : "Overig Zeeland",
    "name_html" : "Overig Zeeland"
  },
  "NL411": {
    "name_latin" : "West-Noord-Brabant",
    "nuts_name" : "West-Noord-Brabant",
    "name_ascii" : "West-Noord-Brabant",
    "name_html" : "West-Noord-Brabant"
  },
  "NL412": {
    "name_latin" : "Midden-Noord-Brabant",
    "nuts_name" : "Midden-Noord-Brabant",
    "name_ascii" : "Midden-Noord-Brabant",
    "name_html" : "Midden-Noord-Brabant"
  },
  "NL413": {
    "name_latin" : "Noordoost-Noord-Brabant",
    "nuts_name" : "Noordoost-Noord-Brabant",
    "name_ascii" : "Noordoost-Noord-Brabant",
    "name_html" : "Noordoost-Noord-Brabant"
  },
  "NL414": {
    "name_latin" : "Zuidoost-Noord-Brabant",
    "nuts_name" : "Zuidoost-Noord-Brabant",
    "name_ascii" : "Zuidoost-Noord-Brabant",
    "name_html" : "Zuidoost-Noord-Brabant"
  },
  "NL421": {
    "name_latin" : "Noord-Limburg",
    "nuts_name" : "Noord-Limburg",
    "name_ascii" : "Noord-Limburg",
    "name_html" : "Noord-Limburg"
  },
  "NL422": {
    "name_latin" : "Midden-Limburg",
    "nuts_name" : "Midden-Limburg",
    "name_ascii" : "Midden-Limburg",
    "name_html" : "Midden-Limburg"
  },
  "NL423": {
    "name_latin" : "Zuid-Limburg",
    "nuts_name" : "Zuid-Limburg",
    "name_ascii" : "Zuid-Limburg",
    "name_html" : "Zuid-Limburg"
  },
  "NO011": {
    "name_latin" : "Oslo",
    "nuts_name" : "Oslo",
    "name_ascii" : "Oslo",
    "name_html" : "Oslo"
  },
  "NO012": {
    "name_latin" : "Akershus",
    "nuts_name" : "Akershus",
    "name_ascii" : "Akershus",
    "name_html" : "Akershus"
  },
  "NO021": {
    "name_latin" : "Hedmark",
    "nuts_name" : "Hedmark",
    "name_ascii" : "Hedmark",
    "name_html" : "Hedmark"
  },
  "NO022": {
    "name_latin" : "Oppland",
    "nuts_name" : "Oppland",
    "name_ascii" : "Oppland",
    "name_html" : "Oppland"
  },
  "NO031": {
    "name_latin" : "Østfold",
    "nuts_name" : "Østfold",
    "name_ascii" : "Ostfold",
    "name_html" : "&#x00D8;stfold"
  },
  "NO032": {
    "name_latin" : "Buskerud",
    "nuts_name" : "Buskerud",
    "name_ascii" : "Buskerud",
    "name_html" : "Buskerud"
  },
  "NO033": {
    "name_latin" : "Vestfold",
    "nuts_name" : "Vestfold",
    "name_ascii" : "Vestfold",
    "name_html" : "Vestfold"
  },
  "NO034": {
    "name_latin" : "Telemark",
    "nuts_name" : "Telemark",
    "name_ascii" : "Telemark",
    "name_html" : "Telemark"
  },
  "NO041": {
    "name_latin" : "Aust-Agder",
    "nuts_name" : "Aust-Agder",
    "name_ascii" : "Aust-Agder",
    "name_html" : "Aust-Agder"
  },
  "NO042": {
    "name_latin" : "Vest-Agder",
    "nuts_name" : "Vest-Agder",
    "name_ascii" : "Vest-Agder",
    "name_html" : "Vest-Agder"
  },
  "NO043": {
    "name_latin" : "Rogaland",
    "nuts_name" : "Rogaland",
    "name_ascii" : "Rogaland",
    "name_html" : "Rogaland"
  },
  "NO051": {
    "name_latin" : "Hordaland",
    "nuts_name" : "Hordaland",
    "name_ascii" : "Hordaland",
    "name_html" : "Hordaland"
  },
  "NO052": {
    "name_latin" : "Sogn og Fjordane",
    "nuts_name" : "Sogn og Fjordane",
    "name_ascii" : "Sogn og Fjordane",
    "name_html" : "Sogn og Fjordane"
  },
  "NO053": {
    "name_latin" : "Møre og Romsdal",
    "nuts_name" : "Møre og Romsdal",
    "name_ascii" : "More og Romsdal",
    "name_html" : "M&#x00F8;re og Romsdal"
  },
  "NO062": {
    "name_latin" : "Nord-Trøndelag",
    "nuts_name" : "Nord-Trøndelag",
    "name_ascii" : "Nord-Trondelag",
    "name_html" : "Nord-Tr&#x00F8;ndelag"
  },
  "NO071": {
    "name_latin" : "Nordland",
    "nuts_name" : "Nordland",
    "name_ascii" : "Nordland",
    "name_html" : "Nordland"
  },
  "NO072": {
    "name_latin" : "Troms",
    "nuts_name" : "Troms",
    "name_ascii" : "Troms",
    "name_html" : "Troms"
  },
  "NO073": {
    "name_latin" : "Finnmark",
    "nuts_name" : "Finnmark",
    "name_ascii" : "Finnmark",
    "name_html" : "Finnmark"
  },
  "PL114": {
    "name_latin" : "Lódzki",
    "nuts_name" : "Lódzki",
    "name_ascii" : "Lodzki",
    "name_html" : "L&#x00F3;dzki"
  },
  "PL115": {
    "name_latin" : "Piotrkowski",
    "nuts_name" : "Piotrkowski",
    "name_ascii" : "Piotrkowski",
    "name_html" : "Piotrkowski"
  },
  "PL116": {
    "name_latin" : "Sieradzki",
    "nuts_name" : "Sieradzki",
    "name_ascii" : "Sieradzki",
    "name_html" : "Sieradzki"
  },
  "PL117": {
    "name_latin" : "Skierniewicki",
    "nuts_name" : "Skierniewicki",
    "name_ascii" : "Skierniewicki",
    "name_html" : "Skierniewicki"
  },
  "PL128": {
    "name_latin" : "Radomski",
    "nuts_name" : "Radomski",
    "name_ascii" : "Radomski",
    "name_html" : "Radomski"
  },
  "PL129": {
    "name_latin" : "Warszawski wschodni",
    "nuts_name" : "Warszawski wschodni",
    "name_ascii" : "Warszawski wschodni",
    "name_html" : "Warszawski wschodni"
  },
  "PL12A": {
    "name_latin" : "Warszawski zachodni",
    "nuts_name" : "Warszawski zachodni",
    "name_ascii" : "Warszawski zachodni",
    "name_html" : "Warszawski zachodni"
  },
  "PL12B": {
    "name_latin" : "Ciechanowski",
    "nuts_name" : "Ciechanowski",
    "name_ascii" : "Ciechanowski",
    "name_html" : "Ciechanowski"
  },
  "PL12C": {
    "name_latin" : "Plocki",
    "nuts_name" : "Plocki",
    "name_ascii" : "Plocki",
    "name_html" : "Plocki"
  },
  "PL12D": {
    "name_latin" : "Ostrolecki",
    "nuts_name" : "Ostrolecki",
    "name_ascii" : "Ostrolecki",
    "name_html" : "Ostrolecki"
  },
  "PL214": {
    "name_latin" : "Krakowski",
    "nuts_name" : "Krakowski",
    "name_ascii" : "Krakowski",
    "name_html" : "Krakowski"
  },
  "PL217": {
    "name_latin" : "Tarnowski",
    "nuts_name" : "Tarnowski",
    "name_ascii" : "Tarnowski",
    "name_html" : "Tarnowski"
  },
  "PL218": {
    "name_latin" : "Nowosadecki",
    "nuts_name" : "Nowosadecki",
    "name_ascii" : "Nowosadecki",
    "name_html" : "Nowosadecki"
  },
  "PL219": {
    "name_latin" : "Nowotarski",
    "nuts_name" : "Nowotarski",
    "name_ascii" : "Nowotarski",
    "name_html" : "Nowotarski"
  },
  "PL21A": {
    "name_latin" : "Oswiecimski",
    "nuts_name" : "Oswiecimski",
    "name_ascii" : "Oswiecimski",
    "name_html" : "Oswiecimski"
  },
  "PL224": {
    "name_latin" : "Czestochowski",
    "nuts_name" : "Czestochowski",
    "name_ascii" : "Czestochowski",
    "name_html" : "Czestochowski"
  },
  "PL225": {
    "name_latin" : "Bielski",
    "nuts_name" : "Bielski",
    "name_ascii" : "Bielski",
    "name_html" : "Bielski"
  },
  "PL228": {
    "name_latin" : "Bytomski",
    "nuts_name" : "Bytomski",
    "name_ascii" : "Bytomski",
    "name_html" : "Bytomski"
  },
  "PL229": {
    "name_latin" : "Gliwicki",
    "nuts_name" : "Gliwicki",
    "name_ascii" : "Gliwicki",
    "name_html" : "Gliwicki"
  },
  "PL22A": {
    "name_latin" : "Katowicki",
    "nuts_name" : "Katowicki",
    "name_ascii" : "Katowicki",
    "name_html" : "Katowicki"
  },
  "PL22B": {
    "name_latin" : "Sosnowiecki",
    "nuts_name" : "Sosnowiecki",
    "name_ascii" : "Sosnowiecki",
    "name_html" : "Sosnowiecki"
  },
  "PL22C": {
    "name_latin" : "Tyski",
    "nuts_name" : "Tyski",
    "name_ascii" : "Tyski",
    "name_html" : "Tyski"
  },
  "PL311": {
    "name_latin" : "Bialski",
    "nuts_name" : "Bialski",
    "name_ascii" : "Bialski",
    "name_html" : "Bialski"
  },
  "PL312": {
    "name_latin" : "Chelmsko-zamojski",
    "nuts_name" : "Chelmsko-zamojski",
    "name_ascii" : "Chelmsko-zamojski",
    "name_html" : "Chelmsko-zamojski"
  },
  "PL314": {
    "name_latin" : "Lubelski",
    "nuts_name" : "Lubelski",
    "name_ascii" : "Lubelski",
    "name_html" : "Lubelski"
  },
  "PL315": {
    "name_latin" : "Pulawski",
    "nuts_name" : "Pulawski",
    "name_ascii" : "Pulawski",
    "name_html" : "Pulawski"
  },
  "PL324": {
    "name_latin" : "Przemyski",
    "nuts_name" : "Przemyski",
    "name_ascii" : "Przemyski",
    "name_html" : "Przemyski"
  },
  "PL325": {
    "name_latin" : "Rzeszowski",
    "nuts_name" : "Rzeszowski",
    "name_ascii" : "Rzeszowski",
    "name_html" : "Rzeszowski"
  },
  "PL326": {
    "name_latin" : "Tarnobrzeski",
    "nuts_name" : "Tarnobrzeski",
    "name_ascii" : "Tarnobrzeski",
    "name_html" : "Tarnobrzeski"
  },
  "PL331": {
    "name_latin" : "Kielecki",
    "nuts_name" : "Kielecki",
    "name_ascii" : "Kielecki",
    "name_html" : "Kielecki"
  },
  "PL343": {
    "name_latin" : "Bialostocki",
    "nuts_name" : "Bialostocki",
    "name_ascii" : "Bialostocki",
    "name_html" : "Bialostocki"
  },
  "PL344": {
    "name_latin" : "Lomzynski",
    "nuts_name" : "Lomzynski",
    "name_ascii" : "Lomzynski",
    "name_html" : "Lomzynski"
  },
  "PL345": {
    "name_latin" : "Suwalski",
    "nuts_name" : "Suwalski",
    "name_ascii" : "Suwalski",
    "name_html" : "Suwalski"
  },
  "PL411": {
    "name_latin" : "Pilski",
    "nuts_name" : "Pilski",
    "name_ascii" : "Pilski",
    "name_html" : "Pilski"
  },
  "PL414": {
    "name_latin" : "Koninski",
    "nuts_name" : "Koninski",
    "name_ascii" : "Koninski",
    "name_html" : "Koninski"
  },
  "PL415": {
    "name_latin" : "Miasto Poznan",
    "nuts_name" : "Miasto Poznan",
    "name_ascii" : "Miasto Poznan",
    "name_html" : "Miasto Poznan"
  },
  "PL417": {
    "name_latin" : "Leszczynski",
    "nuts_name" : "Leszczynski",
    "name_ascii" : "Leszczynski",
    "name_html" : "Leszczynski"
  },
  "PL418": {
    "name_latin" : "Poznanski",
    "nuts_name" : "Poznanski",
    "name_ascii" : "Poznanski",
    "name_html" : "Poznanski"
  },
  "PL426": {
    "name_latin" : "Koszalinski",
    "nuts_name" : "Koszalinski",
    "name_ascii" : "Koszalinski",
    "name_html" : "Koszalinski"
  },
  "PL427": {
    "name_latin" : "Szczecinecko-pyrzycki",
    "nuts_name" : "Szczecinecko-pyrzycki",
    "name_ascii" : "Szczecinecko-pyrzycki",
    "name_html" : "Szczecinecko-pyrzycki"
  },
  "PL428": {
    "name_latin" : "Szczecinski",
    "nuts_name" : "Szczecinski",
    "name_ascii" : "Szczecinski",
    "name_html" : "Szczecinski"
  },
  "PL431": {
    "name_latin" : "Gorzowski",
    "nuts_name" : "Gorzowski",
    "name_ascii" : "Gorzowski",
    "name_html" : "Gorzowski"
  },
  "PL514": {
    "name_latin" : "Miasto Wroclaw",
    "nuts_name" : "Miasto Wroclaw",
    "name_ascii" : "Miasto Wroclaw",
    "name_html" : "Miasto Wroclaw"
  },
  "PL515": {
    "name_latin" : "Jeleniogórski",
    "nuts_name" : "Jeleniogórski",
    "name_ascii" : "Jeleniogorski",
    "name_html" : "Jeleniog&#x00F3;rski"
  },
  "PL517": {
    "name_latin" : "Walbrzyski",
    "nuts_name" : "Walbrzyski",
    "name_ascii" : "Walbrzyski",
    "name_html" : "Walbrzyski"
  },
  "PL518": {
    "name_latin" : "Wroclawski",
    "nuts_name" : "Wroclawski",
    "name_ascii" : "Wroclawski",
    "name_html" : "Wroclawski"
  },
  "PL523": {
    "name_latin" : "Nyski",
    "nuts_name" : "Nyski",
    "name_ascii" : "Nyski",
    "name_html" : "Nyski"
  },
  "PL524": {
    "name_latin" : "Opolski",
    "nuts_name" : "Opolski",
    "name_ascii" : "Opolski",
    "name_html" : "Opolski"
  },
  "PL613": {
    "name_latin" : "Bydgosko-Torunski",
    "nuts_name" : "Bydgosko-Torunski",
    "name_ascii" : "Bydgosko-Torunski",
    "name_html" : "Bydgosko-Torunski"
  },
  "PL616": {
    "name_latin" : "Grudziadzki",
    "nuts_name" : "Grudziadzki",
    "name_ascii" : "Grudziadzki",
    "name_html" : "Grudziadzki"
  },
  "PL617": {
    "name_latin" : "Inowroclawski",
    "nuts_name" : "Inowroclawski",
    "name_ascii" : "Inowroclawski",
    "name_html" : "Inowroclawski"
  },
  "PL618": {
    "name_latin" : "Swiecki",
    "nuts_name" : "Swiecki",
    "name_ascii" : "Swiecki",
    "name_html" : "Swiecki"
  },
  "PL619": {
    "name_latin" : "Wloclawski",
    "nuts_name" : "Wloclawski",
    "name_ascii" : "Wloclawski",
    "name_html" : "Wloclawski"
  },
  "PL621": {
    "name_latin" : "Elblaski",
    "nuts_name" : "Elblaski",
    "name_ascii" : "Elblaski",
    "name_html" : "Elblaski"
  },
  "PL622": {
    "name_latin" : "Olsztynski",
    "nuts_name" : "Olsztynski",
    "name_ascii" : "Olsztynski",
    "name_html" : "Olsztynski"
  },
  "PL623": {
    "name_latin" : "Elcki",
    "nuts_name" : "Elcki",
    "name_ascii" : "Elcki",
    "name_html" : "Elcki"
  },
  "PL633": {
    "name_latin" : "Trójmiejski",
    "nuts_name" : "Trójmiejski",
    "name_ascii" : "Trojmiejski",
    "name_html" : "Tr&#x00F3;jmiejski"
  },
  "PL634": {
    "name_latin" : "Gdanski",
    "nuts_name" : "Gdanski",
    "name_ascii" : "Gdanski",
    "name_html" : "Gdanski"
  },
  "PL636": {
    "name_latin" : "Slupski",
    "nuts_name" : "Slupski",
    "name_ascii" : "Slupski",
    "name_html" : "Slupski"
  },
  "PL637": {
    "name_latin" : "Chojnicki",
    "nuts_name" : "Chojnicki",
    "name_ascii" : "Chojnicki",
    "name_html" : "Chojnicki"
  },
  "PL638": {
    "name_latin" : "Starogardzki",
    "nuts_name" : "Starogardzki",
    "name_ascii" : "Starogardzki",
    "name_html" : "Starogardzki"
  },
  "PT111": {
    "name_latin" : "Alto Minho",
    "nuts_name" : "Alto Minho",
    "name_ascii" : "Alto Minho",
    "name_html" : "Alto Minho"
  },
  "PT112": {
    "name_latin" : "Cávado",
    "nuts_name" : "Cávado",
    "name_ascii" : "Cavado",
    "name_html" : "C&#x00E1;vado"
  },
  "PT119": {
    "name_latin" : "Ave",
    "nuts_name" : "Ave",
    "name_ascii" : "Ave",
    "name_html" : "Ave"
  },
  "PT11A": {
    "name_latin" : "Área Metropolitana do Porto",
    "nuts_name" : "Área Metropolitana do Porto",
    "name_ascii" : "Area Metropolitana do Porto",
    "name_html" : "&#x00C1;rea Metropolitana do Porto"
  },
  "PT11B": {
    "name_latin" : "Alto Tâmega",
    "nuts_name" : "Alto Tâmega",
    "name_ascii" : "Alto Tamega",
    "name_html" : "Alto T&#x00E2;mega"
  },
  "PT11C": {
    "name_latin" : "Tâmega e Sousa",
    "nuts_name" : "Tâmega e Sousa",
    "name_ascii" : "Tamega e Sousa",
    "name_html" : "T&#x00E2;mega e Sousa"
  },
  "PT11D": {
    "name_latin" : "Douro",
    "nuts_name" : "Douro",
    "name_ascii" : "Douro",
    "name_html" : "Douro"
  },
  "PT11E": {
    "name_latin" : "Terras de Trás-os-Montes",
    "nuts_name" : "Terras de Trás-os-Montes",
    "name_ascii" : "Terras de Tras-s-Montes",
    "name_html" : "Terras de Tr&#x00E1;s-os-Montes"
  },
  "PT150": {
    "name_latin" : "Algarve",
    "nuts_name" : "Algarve",
    "name_ascii" : "Algarve",
    "name_html" : "Algarve"
  },
  "PT16B": {
    "name_latin" : "Oeste",
    "nuts_name" : "Oeste",
    "name_ascii" : "Oeste",
    "name_html" : "Oeste"
  },
  "PT16D": {
    "name_latin" : "Região de Aveiro",
    "nuts_name" : "Região de Aveiro",
    "name_ascii" : "Regiao de Aveiro",
    "name_html" : "Regi&#x00E3;o de Aveiro"
  },
  "PT16F": {
    "name_latin" : "Região de Leiria",
    "nuts_name" : "Região de Leiria",
    "name_ascii" : "Regiao de Leiria",
    "name_html" : "Regi&#x00E3;o de Leiria"
  },
  "PT16G": {
    "name_latin" : "Viseu Dão Lafões",
    "nuts_name" : "Viseu Dão Lafões",
    "name_ascii" : "Viseu Dao Lafoes",
    "name_html" : "Viseu D&#x00E3;o Laf&#x00F5;es"
  },
  "PT16H": {
    "name_latin" : "Beira Baixa",
    "nuts_name" : "Beira Baixa",
    "name_ascii" : "Beira Baixa",
    "name_html" : "Beira Baixa"
  },
  "PT16I": {
    "name_latin" : "Médio Tejo",
    "nuts_name" : "Médio Tejo",
    "name_ascii" : "Medio Tejo",
    "name_html" : "M&#x00E9;dio Tejo"
  },
  "PT170": {
    "name_latin" : "Área Metropolitana de Lisboa",
    "nuts_name" : "Área Metropolitana de Lisboa",
    "name_ascii" : "Area Metropolitana de Lisboa",
    "name_html" : "&#x00C1;rea Metropolitana de Lisboa"
  },
  "PT181": {
    "name_latin" : "Alentejo Litoral",
    "nuts_name" : "Alentejo Litoral",
    "name_ascii" : "Alentejo Litoral",
    "name_html" : "Alentejo Litoral"
  },
  "PT184": {
    "name_latin" : "Baixo Alentejo",
    "nuts_name" : "Baixo Alentejo",
    "name_ascii" : "Baixo Alentejo",
    "name_html" : "Baixo Alentejo"
  },
  "PT186": {
    "name_latin" : "Alto Alentejo",
    "nuts_name" : "Alto Alentejo",
    "name_ascii" : "Alto Alentejo",
    "name_html" : "Alto Alentejo"
  },
  "PT187": {
    "name_latin" : "Alentejo Central",
    "nuts_name" : "Alentejo Central",
    "name_ascii" : "Alentejo Central",
    "name_html" : "Alentejo Central"
  },
  "PT200": {
    "name_latin" : "Região Autónoma dos Açores",
    "nuts_name" : "Região Autónoma dos Açores",
    "name_ascii" : "Regiao Autonoma dos Acores",
    "name_html" : "Regi&#x00E3;o Aut&#x00F3;noma dos A&#x00E7;ores"
  },
  "RO111": {
    "name_latin" : "Bihor",
    "nuts_name" : "Bihor",
    "name_ascii" : "Bihor",
    "name_html" : "Bihor"
  },
  "RO112": {
    "name_latin" : "Bistrita-Nasaud",
    "nuts_name" : "Bistrita-Nasaud",
    "name_ascii" : "Bistrita-Nasaud",
    "name_html" : "Bistrita-Nasaud"
  },
  "RO113": {
    "name_latin" : "Cluj",
    "nuts_name" : "Cluj",
    "name_ascii" : "Cluj",
    "name_html" : "Cluj"
  },
  "RO114": {
    "name_latin" : "Maramures",
    "nuts_name" : "Maramures",
    "name_ascii" : "Maramures",
    "name_html" : "Maramures"
  },
  "RO115": {
    "name_latin" : "Satu Mare",
    "nuts_name" : "Satu Mare",
    "name_ascii" : "Satu Mare",
    "name_html" : "Satu Mare"
  },
  "RO116": {
    "name_latin" : "Salaj",
    "nuts_name" : "Salaj",
    "name_ascii" : "Salaj",
    "name_html" : "Salaj"
  },
  "RO121": {
    "name_latin" : "Alba",
    "nuts_name" : "Alba",
    "name_ascii" : "Alba",
    "name_html" : "Alba"
  },
  "RO122": {
    "name_latin" : "Brasov",
    "nuts_name" : "Brasov",
    "name_ascii" : "Brasov",
    "name_html" : "Brasov"
  },
  "RO123": {
    "name_latin" : "Covasna",
    "nuts_name" : "Covasna",
    "name_ascii" : "Covasna",
    "name_html" : "Covasna"
  },
  "RO124": {
    "name_latin" : "Harghita",
    "nuts_name" : "Harghita",
    "name_ascii" : "Harghita",
    "name_html" : "Harghita"
  },
  "RO125": {
    "name_latin" : "Mures",
    "nuts_name" : "Mures",
    "name_ascii" : "Mures",
    "name_html" : "Mures"
  },
  "RO126": {
    "name_latin" : "Sibiu",
    "nuts_name" : "Sibiu",
    "name_ascii" : "Sibiu",
    "name_html" : "Sibiu"
  },
  "RO212": {
    "name_latin" : "Botosani",
    "nuts_name" : "Botosani",
    "name_ascii" : "Botosani",
    "name_html" : "Botosani"
  },
  "RO213": {
    "name_latin" : "Iasi",
    "nuts_name" : "Iasi",
    "name_ascii" : "Iasi",
    "name_html" : "Iasi"
  },
  "RO214": {
    "name_latin" : "Neamt",
    "nuts_name" : "Neamt",
    "name_ascii" : "Neamt",
    "name_html" : "Neamt"
  },
  "RO215": {
    "name_latin" : "Suceava",
    "nuts_name" : "Suceava",
    "name_ascii" : "Suceava",
    "name_html" : "Suceava"
  },
  "RO216": {
    "name_latin" : "Vaslui",
    "nuts_name" : "Vaslui",
    "name_ascii" : "Vaslui",
    "name_html" : "Vaslui"
  },
  "RO221": {
    "name_latin" : "Braila",
    "nuts_name" : "Braila",
    "name_ascii" : "Braila",
    "name_html" : "Braila"
  },
  "RO222": {
    "name_latin" : "Buzau",
    "nuts_name" : "Buzau",
    "name_ascii" : "Buzau",
    "name_html" : "Buzau"
  },
  "RO223": {
    "name_latin" : "Constanta",
    "nuts_name" : "Constanta",
    "name_ascii" : "Constanta",
    "name_html" : "Constanta"
  },
  "RO224": {
    "name_latin" : "Galati",
    "nuts_name" : "Galati",
    "name_ascii" : "Galati",
    "name_html" : "Galati"
  },
  "RO225": {
    "name_latin" : "Tulcea",
    "nuts_name" : "Tulcea",
    "name_ascii" : "Tulcea",
    "name_html" : "Tulcea"
  },
  "RO311": {
    "name_latin" : "Arges",
    "nuts_name" : "Arges",
    "name_ascii" : "Arges",
    "name_html" : "Arges"
  },
  "RO313": {
    "name_latin" : "Dâmbovita",
    "nuts_name" : "Dâmbovita",
    "name_ascii" : "Dambovita",
    "name_html" : "D&#x00E2;mbovita"
  },
  "RO314": {
    "name_latin" : "Giurgiu",
    "nuts_name" : "Giurgiu",
    "name_ascii" : "Giurgiu",
    "name_html" : "Giurgiu"
  },
  "RO315": {
    "name_latin" : "Ialomita",
    "nuts_name" : "Ialomita",
    "name_ascii" : "Ialomita",
    "name_html" : "Ialomita"
  },
  "RO316": {
    "name_latin" : "Prahova",
    "nuts_name" : "Prahova",
    "name_ascii" : "Prahova",
    "name_html" : "Prahova"
  },
  "RO321": {
    "name_latin" : "Bucuresti",
    "nuts_name" : "Bucuresti",
    "name_ascii" : "Bucuresti",
    "name_html" : "Bucuresti"
  },
  "RO322": {
    "name_latin" : "Ilfov",
    "nuts_name" : "Ilfov",
    "name_ascii" : "Ilfov",
    "name_html" : "Ilfov"
  },
  "RO411": {
    "name_latin" : "Dolj",
    "nuts_name" : "Dolj",
    "name_ascii" : "Dolj",
    "name_html" : "Dolj"
  },
  "RO412": {
    "name_latin" : "Gorj",
    "nuts_name" : "Gorj",
    "name_ascii" : "Gorj",
    "name_html" : "Gorj"
  },
  "RO413": {
    "name_latin" : "Mehedinti",
    "nuts_name" : "Mehedinti",
    "name_ascii" : "Mehedinti",
    "name_html" : "Mehedinti"
  },
  "RO414": {
    "name_latin" : "Olt",
    "nuts_name" : "Olt",
    "name_ascii" : "Olt",
    "name_html" : "Olt"
  },
  "RO415": {
    "name_latin" : "Vâlcea",
    "nuts_name" : "Vâlcea",
    "name_ascii" : "Valcea",
    "name_html" : "V&#x00E2;lcea"
  },
  "RO421": {
    "name_latin" : "Arad",
    "nuts_name" : "Arad",
    "name_ascii" : "Arad",
    "name_html" : "Arad"
  },
  "RO422": {
    "name_latin" : "Caras-Severin",
    "nuts_name" : "Caras-Severin",
    "name_ascii" : "Caras-Severin",
    "name_html" : "Caras-Severin"
  },
  "RO423": {
    "name_latin" : "Hunedoara",
    "nuts_name" : "Hunedoara",
    "name_ascii" : "Hunedoara",
    "name_html" : "Hunedoara"
  },
  "RO424": {
    "name_latin" : "Timis",
    "nuts_name" : "Timis",
    "name_ascii" : "Timis",
    "name_html" : "Timis"
  },
  "SE110": {
    "name_latin" : "Stockholms län",
    "nuts_name" : "Stockholms län",
    "name_ascii" : "Stockholms lan",
    "name_html" : "Stockholms l&#x00E4;n"
  },
  "SE121": {
    "name_latin" : "Uppsala län",
    "nuts_name" : "Uppsala län",
    "name_ascii" : "Uppsala lan",
    "name_html" : "Uppsala l&#x00E4;n"
  },
  "SE122": {
    "name_latin" : "Södermanlands län",
    "nuts_name" : "Södermanlands län",
    "name_ascii" : "Sodermanlands lan",
    "name_html" : "S&#x00F6;dermanlands l&#x00E4;n"
  },
  "SE123": {
    "name_latin" : "Östergötlands län",
    "nuts_name" : "Östergötlands län",
    "name_ascii" : "Ostergotlands lan",
    "name_html" : "&#x00D6;sterg&#x00F6;tlands l&#x00E4;n"
  },
  "SE124": {
    "name_latin" : "Örebro län",
    "nuts_name" : "Örebro län",
    "name_ascii" : "Orebro lan",
    "name_html" : "&#x00D6;rebro l&#x00E4;n"
  },
  "SE125": {
    "name_latin" : "Västmanlands län",
    "nuts_name" : "Västmanlands län",
    "name_ascii" : "Vastmanlands lan",
    "name_html" : "V&#x00E4;stmanlands l&#x00E4;n"
  },
  "SE211": {
    "name_latin" : "Jönköpings län",
    "nuts_name" : "Jönköpings län",
    "name_ascii" : "Jonkopings lan",
    "name_html" : "J&#x00F6;nk&#x00F6;pings l&#x00E4;n"
  },
  "SE212": {
    "name_latin" : "Kronobergs län",
    "nuts_name" : "Kronobergs län",
    "name_ascii" : "Kronobergs lan",
    "name_html" : "Kronobergs l&#x00E4;n"
  },
  "SE213": {
    "name_latin" : "Kalmar län",
    "nuts_name" : "Kalmar län",
    "name_ascii" : "Kronobergs lan",
    "name_html" : "Kalmar L&#x00E4;n"
  },
  "SE214": {
    "name_latin" : "Gotlands län",
    "nuts_name" : "Gotlands län",
    "name_ascii" : "Gotlands lan",
    "name_html" : "Gotlands l&#x00E4;n"
  },
  "SE221": {
    "name_latin" : "Blekinge län",
    "nuts_name" : "Blekinge län",
    "name_ascii" : "Blekinge lan",
    "name_html" : "Blekinge l&#x00E4;n"
  },
  "SE224": {
    "name_latin" : "Skåne län",
    "nuts_name" : "Skåne län",
    "name_ascii" : "Skane lan",
    "name_html" : "Sk&#x00E5;ne l&#x00E4;n"
  },
  "SE232": {
    "name_latin" : "Västra Götalands län",
    "nuts_name" : "Västra Götalands län",
    "name_ascii" : "Vastra Gotalands lan",
    "name_html" : "V&#x00E4;stra G&#x00F6;talands l&#x00E4;n"
  },
  "SE312": {
    "name_latin" : "Dalarnas län",
    "nuts_name" : "Dalarnas län",
    "name_ascii" : "Dalarnas lan",
    "name_html" : "Dalarnas l&#x00E4;n"
  },
  "SE313": {
    "name_latin" : "Gävleborgs län",
    "nuts_name" : "Gävleborgs län",
    "name_ascii" : "Gavleborgs lan",
    "name_html" : "G&#x00E4;vleborgs l&#x00E4;n"
  },
  "SE322": {
    "name_latin" : "Jämtlands län",
    "nuts_name" : "Jämtlands län",
    "name_ascii" : "Jamtlands lan",
    "name_html" : "J&#x00E4;mtlandslL&#x00E4;n"
  },
  "SE331": {
    "name_latin" : "Västerbottens län",
    "nuts_name" : "Västerbottens län",
    "name_ascii" : "Vasterbottens lan",
    "name_html" : "V&#x00E4;sterbottens l&#x00E4;n"
  },
  "SE332": {
    "name_latin" : "Norrbottens län",
    "nuts_name" : "Norrbottens län",
    "name_ascii" : "Norrbottens lan",
    "name_html" : "Norrbottens l&#x00E4;n"
  },
  "SI031": {
    "name_latin" : "Pomurska",
    "nuts_name" : "Pomurska",
    "name_ascii" : "Pomurska",
    "name_html" : "Pomurska"
  },
  "SI032": {
    "name_latin" : "Podravska",
    "nuts_name" : "Podravska",
    "name_ascii" : "Podravska",
    "name_html" : "Podravska"
  },
  "SI033": {
    "name_latin" : "Koroška",
    "nuts_name" : "Koroška",
    "name_ascii" : "Koroska",
    "name_html" : "Koro&#x0161;ka"
  },
  "SI034": {
    "name_latin" : "Savinjska",
    "nuts_name" : "Savinjska",
    "name_ascii" : "Savinjska",
    "name_html" : "Savinjska"
  },
  "SI035": {
    "name_latin" : "Zasavska",
    "nuts_name" : "Zasavska",
    "name_ascii" : "Zasavska",
    "name_html" : "Zasavska"
  },
  "SI036": {
    "name_latin" : "Posavska",
    "nuts_name" : "Posavska",
    "name_ascii" : "Posavska",
    "name_html" : "Posavska"
  },
  "SI038": {
    "name_latin" : "Primorsko-notranjska",
    "nuts_name" : "Primorsko-notranjska",
    "name_ascii" : "Primorsko-notranjska",
    "name_html" : "Primorsko-notranjska"
  },
  "SI041": {
    "name_latin" : "Osrednjeslovenska",
    "nuts_name" : "Osrednjeslovenska",
    "name_ascii" : "Osrednjeslovenska",
    "name_html" : "Osrednjeslovenska"
  },
  "SI042": {
    "name_latin" : "Gorenjska",
    "nuts_name" : "Gorenjska",
    "name_ascii" : "Gorenjska",
    "name_html" : "Gorenjska"
  },
  "SI043": {
    "name_latin" : "Goriška",
    "nuts_name" : "Goriška",
    "name_ascii" : "Goriska",
    "name_html" : "Gori&#x0161;ka"
  },
  "SI044": {
    "name_latin" : "Obalno-kraška",
    "nuts_name" : "Obalno-kraška",
    "name_ascii" : "Obalno-kraska",
    "name_html" : "Obalno-kra&#x0161;ka"
  },
  "SK010": {
    "name_latin" : "Bratislavský kraj",
    "nuts_name" : "Bratislavský kraj",
    "name_ascii" : "Bratislavsky kraj",
    "name_html" : "Bratislavsk&#x00FD; kraj"
  },
  "SK021": {
    "name_latin" : "Trnavský kraj",
    "nuts_name" : "Trnavský kraj",
    "name_ascii" : "Trnavsky kraj",
    "name_html" : "Trnavsk&#x00FD; kraj"
  },
  "SK023": {
    "name_latin" : "Nitriansky kraj",
    "nuts_name" : "Nitriansky kraj",
    "name_ascii" : "Nitriansky kraj",
    "name_html" : "Nitriansky kraj"
  },
  "SK031": {
    "name_latin" : "Žilinský kraj",
    "nuts_name" : "Žilinský kraj",
    "name_ascii" : "Zilinsky kraj",
    "name_html" : "&#x017D;ilinsk&#x00FD; kraj"
  },
  "SK041": {
    "name_latin" : "Prešovský kraj",
    "nuts_name" : "Prešovský kraj",
    "name_ascii" : "Presovsky kraj",
    "name_html" : "Pre&#x0161;ovsk&#x00FD; kraj"
  },
  "SK042": {
    "name_latin" : "Košický kraj",
    "nuts_name" : "Košický kraj",
    "name_ascii" : "Kosicky kraj",
    "name_html" : "Ko&#x0161;ick&#x00FD; kraj"
  },
  "TR100": {
    "name_latin" : "Istanbul",
    "nuts_name" : "Istanbul",
    "name_ascii" : "Istanbul",
    "name_html" : "Istanbul"
  },
  "TR211": {
    "name_latin" : "Tekirdag",
    "nuts_name" : "Tekirdag",
    "name_ascii" : "Tekirdag",
    "name_html" : "Tekirdag"
  },
  "TR212": {
    "name_latin" : "Edirne",
    "nuts_name" : "Edirne",
    "name_ascii" : "Edirne",
    "name_html" : "Edirne"
  },
  "TR213": {
    "name_latin" : "Kirklareli",
    "nuts_name" : "Kirklareli",
    "name_ascii" : "Kirklareli",
    "name_html" : "Kirklareli"
  },
  "TR221": {
    "name_latin" : "Balikesir",
    "nuts_name" : "Balikesir",
    "name_ascii" : "Balikesir",
    "name_html" : "Balikesir"
  },
  "TR222": {
    "name_latin" : "Çanakkale",
    "nuts_name" : "Çanakkale",
    "name_ascii" : "Canakkale",
    "name_html" : "&#x00C7;anakkale"
  },
  "TR310": {
    "name_latin" : "Izmir",
    "nuts_name" : "Izmir",
    "name_ascii" : "Izmir",
    "name_html" : "Izmir"
  },
  "TR321": {
    "name_latin" : "Aydin",
    "nuts_name" : "Aydin",
    "name_ascii" : "Aydin",
    "name_html" : "Aydin"
  },
  "TR322": {
    "name_latin" : "Denizli",
    "nuts_name" : "Denizli",
    "name_ascii" : "Denizli",
    "name_html" : "Denizli"
  },
  "TR323": {
    "name_latin" : "Mugla",
    "nuts_name" : "Mugla",
    "name_ascii" : "Mugla",
    "name_html" : "Mugla"
  },
  "TR331": {
    "name_latin" : "Manisa",
    "nuts_name" : "Manisa",
    "name_ascii" : "Manisa",
    "name_html" : "Manisa"
  },
  "TR332": {
    "name_latin" : "Afyon",
    "nuts_name" : "Afyon",
    "name_ascii" : "Afyon",
    "name_html" : "Afyon"
  },
  "TR333": {
    "name_latin" : "Kütahya",
    "nuts_name" : "Kütahya",
    "name_ascii" : "Kutahya",
    "name_html" : "K&#x00FC;tahya"
  },
  "TR334": {
    "name_latin" : "Usak",
    "nuts_name" : "Usak",
    "name_ascii" : "Usak",
    "name_html" : "Usak"
  },
  "TR411": {
    "name_latin" : "Bursa",
    "nuts_name" : "Bursa",
    "name_ascii" : "Bursa",
    "name_html" : "Bursa"
  },
  "TR412": {
    "name_latin" : "Eskisehir",
    "nuts_name" : "Eskisehir",
    "name_ascii" : "Eskisehir",
    "name_html" : "Eskisehir"
  },
  "TR413": {
    "name_latin" : "Bilecik",
    "nuts_name" : "Bilecik",
    "name_ascii" : "Bilecik",
    "name_html" : "Bilecik"
  },
  "TR421": {
    "name_latin" : "Kocaeli",
    "nuts_name" : "Kocaeli",
    "name_ascii" : "Kocaeli",
    "name_html" : "Kocaeli"
  },
  "TR422": {
    "name_latin" : "Sakarya",
    "nuts_name" : "Sakarya",
    "name_ascii" : "Sakarya",
    "name_html" : "Sakarya"
  },
  "TR423": {
    "name_latin" : "Düzce",
    "nuts_name" : "Düzce",
    "name_ascii" : "Duzce",
    "name_html" : "D&#x00FC;zce"
  },
  "TR424": {
    "name_latin" : "Bolu",
    "nuts_name" : "Bolu",
    "name_ascii" : "Bolu",
    "name_html" : "Bolu"
  },
  "TR425": {
    "name_latin" : "Yalova",
    "nuts_name" : "Yalova",
    "name_ascii" : "Yalova",
    "name_html" : "Yalova"
  },
  "TR510": {
    "name_latin" : "Ankara",
    "nuts_name" : "Ankara",
    "name_ascii" : "Ankara",
    "name_html" : "Ankara"
  },
  "TR521": {
    "name_latin" : "Konya",
    "nuts_name" : "Konya",
    "name_ascii" : "Konya",
    "name_html" : "Konya"
  },
  "TR522": {
    "name_latin" : "Karaman",
    "nuts_name" : "Karaman",
    "name_ascii" : "Karaman",
    "name_html" : "Karaman"
  },
  "TR611": {
    "name_latin" : "Antalya",
    "nuts_name" : "Antalya",
    "name_ascii" : "Antalya",
    "name_html" : "Antalya"
  },
  "TR612": {
    "name_latin" : "Isparta",
    "nuts_name" : "Isparta",
    "name_ascii" : "Isparta",
    "name_html" : "Isparta"
  },
  "TR613": {
    "name_latin" : "Burdur",
    "nuts_name" : "Burdur",
    "name_ascii" : "Burdur",
    "name_html" : "Burdur"
  },
  "TR621": {
    "name_latin" : "Adana",
    "nuts_name" : "Adana",
    "name_ascii" : "Adana",
    "name_html" : "Adana"
  },
  "TR622": {
    "name_latin" : "Içel",
    "nuts_name" : "Içel",
    "name_ascii" : "Icel",
    "name_html" : "I&#x00E7;el"
  },
  "TR631": {
    "name_latin" : "Hatay",
    "nuts_name" : "Hatay",
    "name_ascii" : "Hatay",
    "name_html" : "Hatay"
  },
  "TR632": {
    "name_latin" : "Kahramanmaras",
    "nuts_name" : "Kahramanmaras",
    "name_ascii" : "Kahramanmaras",
    "name_html" : "Kahramanmaras"
  },
  "TR633": {
    "name_latin" : "Osmaniye",
    "nuts_name" : "Osmaniye",
    "name_ascii" : "Osmaniye",
    "name_html" : "Osmaniye"
  },
  "TR711": {
    "name_latin" : "Kirikkale",
    "nuts_name" : "Kirikkale",
    "name_ascii" : "Kirikkale",
    "name_html" : "Kirikkale"
  },
  "TR712": {
    "name_latin" : "Aksaray",
    "nuts_name" : "Aksaray",
    "name_ascii" : "Aksaray",
    "name_html" : "Aksaray"
  },
  "TR713": {
    "name_latin" : "Nigde",
    "nuts_name" : "Nigde",
    "name_ascii" : "Nigde",
    "name_html" : "Nigde"
  },
  "TR714": {
    "name_latin" : "Nevsehir",
    "nuts_name" : "Nevsehir",
    "name_ascii" : "Nevsehir",
    "name_html" : "Nevsehir"
  },
  "TR715": {
    "name_latin" : "Kirsehir",
    "nuts_name" : "Kirsehir",
    "name_ascii" : "Kirsehir",
    "name_html" : "Kirsehir"
  },
  "TR721": {
    "name_latin" : "Kayseri",
    "nuts_name" : "Kayseri",
    "name_ascii" : "Kayseri",
    "name_html" : "Kayseri"
  },
  "TR722": {
    "name_latin" : "Sivas",
    "nuts_name" : "Sivas",
    "name_ascii" : "Sivas",
    "name_html" : "Sivas"
  },
  "TR723": {
    "name_latin" : "Yozgat",
    "nuts_name" : "Yozgat",
    "name_ascii" : "Yozgat",
    "name_html" : "Yozgat"
  },
  "TR811": {
    "name_latin" : "Zonguldak",
    "nuts_name" : "Zonguldak",
    "name_ascii" : "Zonguldak",
    "name_html" : "Zonguldak"
  },
  "TR812": {
    "name_latin" : "Karabük",
    "nuts_name" : "Karabük",
    "name_ascii" : "Karabuk",
    "name_html" : "Karab&#x00FC;k"
  },
  "TR813": {
    "name_latin" : "Bartin",
    "nuts_name" : "Bartin",
    "name_ascii" : "Bartin",
    "name_html" : "Bartin"
  },
  "TR821": {
    "name_latin" : "Kastamonu",
    "nuts_name" : "Kastamonu",
    "name_ascii" : "Kastamonu",
    "name_html" : "Kastamonu"
  },
  "TR822": {
    "name_latin" : "Çankiri",
    "nuts_name" : "Çankiri",
    "name_ascii" : "Cankiri",
    "name_html" : "&#x00C7;ankiri"
  },
  "TR823": {
    "name_latin" : "Sinop",
    "nuts_name" : "Sinop",
    "name_ascii" : "Sinop",
    "name_html" : "Sinop"
  },
  "TR831": {
    "name_latin" : "Samsun",
    "nuts_name" : "Samsun",
    "name_ascii" : "Samsun",
    "name_html" : "Samsun"
  },
  "TR832": {
    "name_latin" : "Tokat",
    "nuts_name" : "Tokat",
    "name_ascii" : "Tokat",
    "name_html" : "Tokat"
  },
  "TR833": {
    "name_latin" : "Çorum",
    "nuts_name" : "Çorum",
    "name_ascii" : "Corum",
    "name_html" : "&#x00C7;orum"
  },
  "TR834": {
    "name_latin" : "Amasya",
    "nuts_name" : "Amasya",
    "name_ascii" : "Amasya",
    "name_html" : "Amasya"
  },
  "TR901": {
    "name_latin" : "Trabzon",
    "nuts_name" : "Trabzon",
    "name_ascii" : "Trabzon",
    "name_html" : "Trabzon"
  },
  "TR902": {
    "name_latin" : "Ordu",
    "nuts_name" : "Ordu",
    "name_ascii" : "Ordu",
    "name_html" : "Ordu"
  },
  "TR903": {
    "name_latin" : "Giresun",
    "nuts_name" : "Giresun",
    "name_ascii" : "Giresun",
    "name_html" : "Giresun"
  },
  "TR904": {
    "name_latin" : "Rize",
    "nuts_name" : "Rize",
    "name_ascii" : "Rize",
    "name_html" : "Rize"
  },
  "TR905": {
    "name_latin" : "Artvin",
    "nuts_name" : "Artvin",
    "name_ascii" : "Artvin",
    "name_html" : "Artvin"
  },
  "TR906": {
    "name_latin" : "Gümüshane",
    "nuts_name" : "Gümüshane",
    "name_ascii" : "Gumushane",
    "name_html" : "G&#x00FC;m&#x00FC;shane"
  },
  "TRA11": {
    "name_latin" : "Erzurum",
    "nuts_name" : "Erzurum",
    "name_ascii" : "Erzurum",
    "name_html" : "Erzurum"
  },
  "TRA12": {
    "name_latin" : "Erzincan",
    "nuts_name" : "Erzincan",
    "name_ascii" : "Erzincan",
    "name_html" : "Erzincan"
  },
  "TRA13": {
    "name_latin" : "Bayburt",
    "nuts_name" : "Bayburt",
    "name_ascii" : "Bayburt",
    "name_html" : "Bayburt"
  },
  "TRA21": {
    "name_latin" : "Agri",
    "nuts_name" : "Agri",
    "name_ascii" : "Agri",
    "name_html" : "Agri"
  },
  "TRA22": {
    "name_latin" : "Kars",
    "nuts_name" : "Kars",
    "name_ascii" : "Kars",
    "name_html" : "Kars"
  },
  "TRA23": {
    "name_latin" : "Igdir",
    "nuts_name" : "Igdir",
    "name_ascii" : "Igdir",
    "name_html" : "Igdir"
  },
  "TRA24": {
    "name_latin" : "Ardahan",
    "nuts_name" : "Ardahan",
    "name_ascii" : "Ardahan",
    "name_html" : "Ardahan"
  },
  "TRB11": {
    "name_latin" : "Malatya",
    "nuts_name" : "Malatya",
    "name_ascii" : "Malatya",
    "name_html" : "Malatya"
  },
  "TRB12": {
    "name_latin" : "Elazig",
    "nuts_name" : "Elazig",
    "name_ascii" : "Elazig",
    "name_html" : "Elazig"
  },
  "TRB13": {
    "name_latin" : "Bingöl",
    "nuts_name" : "Bingöl",
    "name_ascii" : "Bingol",
    "name_html" : "Bing&#x00F6;l"
  },
  "TRB14": {
    "name_latin" : "Tunceli",
    "nuts_name" : "Tunceli",
    "name_ascii" : "Tunceli",
    "name_html" : "Tunceli"
  },
  "TRB21": {
    "name_latin" : "Van",
    "nuts_name" : "Van",
    "name_ascii" : "Van",
    "name_html" : "Van"
  },
  "TRB22": {
    "name_latin" : "Mus",
    "nuts_name" : "Mus",
    "name_ascii" : "Mus",
    "name_html" : "Mus"
  },
  "TRB23": {
    "name_latin" : "Bitlis",
    "nuts_name" : "Bitlis",
    "name_ascii" : "Bitlis",
    "name_html" : "Bitlis"
  },
  "TRB24": {
    "name_latin" : "Hakkari",
    "nuts_name" : "Hakkari",
    "name_ascii" : "Hakkari",
    "name_html" : "Hakkari"
  },
  "TRC11": {
    "name_latin" : "Gaziantep",
    "nuts_name" : "Gaziantep",
    "name_ascii" : "Gaziantep",
    "name_html" : "Gaziantep"
  },
  "TRC12": {
    "name_latin" : "Adiyaman",
    "nuts_name" : "Adiyaman",
    "name_ascii" : "Adiyaman",
    "name_html" : "Adiyaman"
  },
  "TRC13": {
    "name_latin" : "Kilis",
    "nuts_name" : "Kilis",
    "name_ascii" : "Kilis",
    "name_html" : "Kilis"
  },
  "TRC21": {
    "name_latin" : "Sanliurfa",
    "nuts_name" : "Sanliurfa",
    "name_ascii" : "Sanliurfa",
    "name_html" : "Sanliurfa"
  },
  "TRC22": {
    "name_latin" : "Diyarbakir",
    "nuts_name" : "Diyarbakir",
    "name_ascii" : "Diyarbakir",
    "name_html" : "Diyarbakir"
  },
  "TRC31": {
    "name_latin" : "Mardin",
    "nuts_name" : "Mardin",
    "name_ascii" : "Mardin",
    "name_html" : "Mardin"
  },
  "TRC32": {
    "name_latin" : "Batman",
    "nuts_name" : "Batman",
    "name_ascii" : "Batman",
    "name_html" : "Batman"
  },
  "TRC33": {
    "name_latin" : "Sirnak",
    "nuts_name" : "Sirnak",
    "name_ascii" : "Sirnak",
    "name_html" : "Sirnak"
  },
  "TRC34": {
    "name_latin" : "Siirt",
    "nuts_name" : "Siirt",
    "name_ascii" : "Siirt",
    "name_html" : "Siirt"
  },
  "UKC11": {
    "name_latin" : "Hartlepool and Stockton-on-Tees",
    "nuts_name" : "Hartlepool and Stockton-on-Tees",
    "name_ascii" : "Hartlepool and Stockton-On-Tees",
    "name_html" : "Hartlepool and Stockton-On-Tees"
  },
  "UKC12": {
    "name_latin" : "South Teesside",
    "nuts_name" : "South Teesside",
    "name_ascii" : "South Teesside",
    "name_html" : "South Teesside"
  },
  "UKC13": {
    "name_latin" : "Darlington",
    "nuts_name" : "Darlington",
    "name_ascii" : "Darlington",
    "name_html" : "Darlington"
  },
  "UKC14": {
    "name_latin" : "Durham CC",
    "nuts_name" : "Durham CC",
    "name_ascii" : "Durham CC",
    "name_html" : "Durham CC"
  },
  "UKC22": {
    "name_latin" : "Tyneside",
    "nuts_name" : "Tyneside",
    "name_ascii" : "Tyneside",
    "name_html" : "Tyneside"
  },
  "UKC23": {
    "name_latin" : "Sunderland",
    "nuts_name" : "Sunderland",
    "name_ascii" : "Sunderland",
    "name_html" : "Sunderland"
  },
  "UKD11": {
    "name_latin" : "West Cumbria",
    "nuts_name" : "West Cumbria",
    "name_ascii" : "West Cumbria",
    "name_html" : "West Cumbria"
  },
  "UKD33": {
    "name_latin" : "Manchester",
    "nuts_name" : "Manchester",
    "name_ascii" : "Manchester",
    "name_html" : "Manchester"
  },
  "UKD34": {
    "name_latin" : "Greater Manchester South West",
    "nuts_name" : "Greater Manchester South West",
    "name_ascii" : "Greater Manchester South West",
    "name_html" : "Greater Manchester South West"
  },
  "UKD36": {
    "name_latin" : "Greater Manchester North West",
    "nuts_name" : "Greater Manchester North West",
    "name_ascii" : "Greater Manchester North West",
    "name_html" : "Greater Manchester North West"
  },
  "UKD37": {
    "name_latin" : "Greater Manchester North East",
    "nuts_name" : "Greater Manchester North East",
    "name_ascii" : "Greater Manchester North East",
    "name_html" : "Greater Manchester North East"
  },
  "UKD41": {
    "name_latin" : "Blackburn with Darwen",
    "nuts_name" : "Blackburn with Darwen",
    "name_ascii" : "Blackburn with Darwen",
    "name_html" : "Blackburn with Darwen"
  },
  "UKD42": {
    "name_latin" : "Blackpool",
    "nuts_name" : "Blackpool",
    "name_ascii" : "Blackpool",
    "name_html" : "Blackpool"
  },
  "UKD44": {
    "name_latin" : "Lancaster & Wyre",
    "nuts_name" : "Lancaster & Wyre",
    "name_ascii" : "Lancaster & Wyre",
    "name_html" : "Lancaster & Wyre"
  },
  "UKD45": {
    "name_latin" : "Mid Lancashire",
    "nuts_name" : "Mid Lancashire",
    "name_ascii" : "Mid Lancashire",
    "name_html" : "Mid Lancashire"
  },
  "UKD47": {
    "name_latin" : "Chorley & West Lancashire",
    "nuts_name" : "Chorley & West Lancashire",
    "name_ascii" : "Chorley & West Lancashire",
    "name_html" : "Chorley & West Lancashire"
  },
  "UKD61": {
    "name_latin" : "Warrington",
    "nuts_name" : "Warrington",
    "name_ascii" : "Warrington",
    "name_html" : "Warrington"
  },
  "UKD62": {
    "name_latin" : "Cheshire East",
    "nuts_name" : "Cheshire East",
    "name_ascii" : "Cheshire East",
    "name_html" : "Cheshire East"
  },
  "UKD63": {
    "name_latin" : "Cheshire West and Chester",
    "nuts_name" : "Cheshire West and Chester",
    "name_ascii" : "Cheshire West and Chester",
    "name_html" : "Cheshire West and Chester"
  },
  "UKD71": {
    "name_latin" : "East Merseyside",
    "nuts_name" : "East Merseyside",
    "name_ascii" : "East Merseyside",
    "name_html" : "East Merseyside"
  },
  "UKD72": {
    "name_latin" : "Liverpool",
    "nuts_name" : "Liverpool",
    "name_ascii" : "Liverpool",
    "name_html" : "Liverpool"
  },
  "UKD73": {
    "name_latin" : "Sefton",
    "nuts_name" : "Sefton",
    "name_ascii" : "Sefton",
    "name_html" : "Sefton"
  },
  "UKD74": {
    "name_latin" : "Wirral",
    "nuts_name" : "Wirral",
    "name_ascii" : "Wirral",
    "name_html" : "Wirral"
  },
  "UKE11": {
    "name_latin" : "Kingston upon Hull, City of",
    "nuts_name" : "Kingston upon Hull, City of",
    "name_ascii" : "Kingston Upon Hull, City Of",
    "name_html" : "Kingston Upon Hull, City Of"
  },
  "UKE12": {
    "name_latin" : "East Riding of Yorkshire",
    "nuts_name" : "East Riding of Yorkshire",
    "name_ascii" : "East Riding of Yorkshire",
    "name_html" : "East Riding of Yorkshire"
  },
  "UKE13": {
    "name_latin" : "North and North East Lincolnshire",
    "nuts_name" : "North and North East Lincolnshire",
    "name_ascii" : "North and North East Lincolnshire",
    "name_html" : "North and North East Lincolnshire"
  },
  "UKE21": {
    "name_latin" : "York",
    "nuts_name" : "York",
    "name_ascii" : "York",
    "name_html" : "York"
  },
  "UKE22": {
    "name_latin" : "North Yorkshire CC",
    "nuts_name" : "North Yorkshire CC",
    "name_ascii" : "North Yorkshire CC",
    "name_html" : "North Yorkshire CC"
  },
  "UKE31": {
    "name_latin" : "Barnsley, Doncaster and Rotherham",
    "nuts_name" : "Barnsley, Doncaster and Rotherham",
    "name_ascii" : "Barnsley, Doncaster and Rotherham",
    "name_html" : "Barnsley, Doncaster and Rotherham"
  },
  "UKE32": {
    "name_latin" : "Sheffield",
    "nuts_name" : "Sheffield",
    "name_ascii" : "Sheffield",
    "name_html" : "Sheffield"
  },
  "UKE42": {
    "name_latin" : "Leeds",
    "nuts_name" : "Leeds",
    "name_ascii" : "Leeds",
    "name_html" : "Leeds"
  },
  "UKE44": {
    "name_latin" : "Calderdale and Kirklees",
    "nuts_name" : "Calderdale and Kirklees",
    "name_ascii" : "Calderdale and Kirklees",
    "name_html" : "Calderdale and Kirklees"
  },
  "UKI42": {
    "name_latin" : "Tower Hamlets",
    "nuts_name" : "Tower Hamlets",
    "name_ascii" : "Tower Hamlets",
    "name_html" : "Tower Hamlets"
  },
  "UKI43": {
    "name_latin" : "Haringey & Islington",
    "nuts_name" : "Haringey & Islington",
    "name_ascii" : "Haringey & Islington",
    "name_html" : "Haringey & Islington"
  },
  "UKI44": {
    "name_latin" : "Lewisham & Southwark",
    "nuts_name" : "Lewisham & Southwark",
    "name_ascii" : "Lewisham & Southwark",
    "name_html" : "Lewisham & Southwark"
  },
  "UKI45": {
    "name_latin" : "Lambeth",
    "nuts_name" : "Lambeth",
    "name_ascii" : "Lambeth",
    "name_html" : "Lambeth"
  },
  "UKI51": {
    "name_latin" : "Bexley & Greenwich",
    "nuts_name" : "Bexley & Greenwich",
    "name_ascii" : "Bexley & Greenwich",
    "name_html" : "Bexley & Greenwich"
  },
  "UKI52": {
    "name_latin" : "Barking and Dagenham & Havering",
    "nuts_name" : "Barking and Dagenham & Havering",
    "name_ascii" : "Barking and Dagenham & Havering",
    "name_html" : "Barking and Dagenham & Havering"
  },
  "UKI53": {
    "name_latin" : "Redbridge & Waltham Forest",
    "nuts_name" : "Redbridge & Waltham Forest",
    "name_ascii" : "Redbridge & Waltham Forest",
    "name_html" : "Redbridge & Waltham Forest"
  },
  "UKI54": {
    "name_latin" : "Enfield",
    "nuts_name" : "Enfield",
    "name_ascii" : "Enfield",
    "name_html" : "Enfield"
  },
  "UKI61": {
    "name_latin" : "Bromley",
    "nuts_name" : "Bromley",
    "name_ascii" : "Bromley",
    "name_html" : "Bromley"
  },
  "UKI62": {
    "name_latin" : "Croydon",
    "nuts_name" : "Croydon",
    "name_ascii" : "Croydon",
    "name_html" : "Croydon"
  },
  "UKI63": {
    "name_latin" : "Merton, Kingston upon Thames & Sutton",
    "nuts_name" : "Merton, Kingston upon Thames & Sutton",
    "name_ascii" : "Merton, Kingston Upon Thames & Sutton",
    "name_html" : "Merton, Kingston Upon Thames & Sutton"
  },
  "UKI71": {
    "name_latin" : "Barnet",
    "nuts_name" : "Barnet",
    "name_ascii" : "Barnet",
    "name_html" : "Barnet"
  },
  "UKI72": {
    "name_latin" : "Brent",
    "nuts_name" : "Brent",
    "name_ascii" : "Brent",
    "name_html" : "Brent"
  },
  "UKI73": {
    "name_latin" : "Ealing",
    "nuts_name" : "Ealing",
    "name_ascii" : "Ealing",
    "name_html" : "Ealing"
  },
  "UKI74": {
    "name_latin" : "Harrow & Hillingdon",
    "nuts_name" : "Harrow & Hillingdon",
    "name_ascii" : "Harrow & Hillingdon",
    "name_html" : "Harrow & Hillingdon"
  },
  "UKJ11": {
    "name_latin" : "Berkshire",
    "nuts_name" : "Berkshire",
    "name_ascii" : "Berkshire",
    "name_html" : "Berkshire"
  },
  "UKJ12": {
    "name_latin" : "Milton Keynes",
    "nuts_name" : "Milton Keynes",
    "name_ascii" : "Milton Keynes",
    "name_html" : "Milton Keynes"
  },
  "UKJ13": {
    "name_latin" : "Buckinghamshire CC",
    "nuts_name" : "Buckinghamshire CC",
    "name_ascii" : "Buckinghamshire CC",
    "name_html" : "Buckinghamshire CC"
  },
  "UKJ14": {
    "name_latin" : "Oxfordshire",
    "nuts_name" : "Oxfordshire",
    "name_ascii" : "Oxfordshire",
    "name_html" : "Oxfordshire"
  },
  "UKJ22": {
    "name_latin" : "East Sussex CC",
    "nuts_name" : "East Sussex CC",
    "name_ascii" : "East Sussex CC",
    "name_html" : "East Sussex CC"
  },
  "UKJ25": {
    "name_latin" : "West Surrey",
    "nuts_name" : "West Surrey",
    "name_ascii" : "West Surrey",
    "name_html" : "West Surrey"
  },
  "UKJ26": {
    "name_latin" : "East Surrey",
    "nuts_name" : "East Surrey",
    "name_ascii" : "East Surrey",
    "name_html" : "East Surrey"
  },
  "UKJ27": {
    "name_latin" : "West Sussex (South West)",
    "nuts_name" : "West Sussex (South West)",
    "name_ascii" : "West Sussex (South West)",
    "name_html" : "West Sussex (South West)"
  },
  "UKJ31": {
    "name_latin" : "Portsmouth",
    "nuts_name" : "Portsmouth",
    "name_ascii" : "Portsmouth",
    "name_html" : "Portsmouth"
  },
  "UKJ32": {
    "name_latin" : "Southampton",
    "nuts_name" : "Southampton",
    "name_ascii" : "Southampton",
    "name_html" : "Southampton"
  },
  "UKJ34": {
    "name_latin" : "Isle of Wight",
    "nuts_name" : "Isle of Wight",
    "name_ascii" : "Isle of Wight",
    "name_html" : "Isle of Wight"
  },
  "UKJ35": {
    "name_latin" : "South Hampshire",
    "nuts_name" : "South Hampshire",
    "name_ascii" : "South Hampshire",
    "name_html" : "South Hampshire"
  },
  "UKJ36": {
    "name_latin" : "Central Hampshire",
    "nuts_name" : "Central Hampshire",
    "name_ascii" : "Central Hampshire",
    "name_html" : "Central Hampshire"
  },
  "UKJ37": {
    "name_latin" : "North Hampshire",
    "nuts_name" : "North Hampshire",
    "name_ascii" : "North Hampshire",
    "name_html" : "North Hampshire"
  },
  "UKJ41": {
    "name_latin" : "Medway",
    "nuts_name" : "Medway",
    "name_ascii" : "Medway",
    "name_html" : "Medway"
  },
  "UKJ44": {
    "name_latin" : "East Kent",
    "nuts_name" : "East Kent",
    "name_ascii" : "East Kent",
    "name_html" : "East Kent"
  },
  "UKJ45": {
    "name_latin" : "Mid Kent",
    "nuts_name" : "Mid Kent",
    "name_ascii" : "Mid Kent",
    "name_html" : "Mid Kent"
  },
  "UKJ46": {
    "name_latin" : "West Kent",
    "nuts_name" : "West Kent",
    "name_ascii" : "West Kent",
    "name_html" : "West Kent"
  },
  "UKK11": {
    "name_latin" : "Bristol, City of",
    "nuts_name" : "Bristol, City of",
    "name_ascii" : "Bristol, City Of",
    "name_html" : "Bristol, City Of"
  },
  "UKK12": {
    "name_latin" : "Bath and North East Somerset, North Somerset and South Gloucestershire",
    "nuts_name" : "Bath and North East Somerset, North Somerset and South Gloucestershire",
    "name_ascii" : "Bath and North East Somerset, North Somerset and South Gloucestershire",
    "name_html" : "Bath and North East Somerset, North Somerset and South Gloucestershire"
  },
  "UKK13": {
    "name_latin" : "Gloucestershire",
    "nuts_name" : "Gloucestershire",
    "name_ascii" : "Gloucestershire",
    "name_html" : "Gloucestershire"
  },
  "UKK14": {
    "name_latin" : "Swindon",
    "nuts_name" : "Swindon",
    "name_ascii" : "Swindon",
    "name_html" : "Swindon"
  },
  "UKK15": {
    "name_latin" : "Wiltshire CC",
    "nuts_name" : "Wiltshire CC",
    "name_ascii" : "Wiltshire CC",
    "name_html" : "Wiltshire CC"
  },
  "UKK21": {
    "name_latin" : "Bournemouth and Poole",
    "nuts_name" : "Bournemouth and Poole",
    "name_ascii" : "Bournemouth and Poole",
    "name_html" : "Bournemouth and Poole"
  },
  "UKK22": {
    "name_latin" : "Dorset CC",
    "nuts_name" : "Dorset CC",
    "name_ascii" : "Dorset CC",
    "name_html" : "Dorset CC"
  },
  "UKK23": {
    "name_latin" : "Somerset",
    "nuts_name" : "Somerset",
    "name_ascii" : "Somerset",
    "name_html" : "Somerset"
  },
  "UKK41": {
    "name_latin" : "Plymouth",
    "nuts_name" : "Plymouth",
    "name_ascii" : "Plymouth",
    "name_html" : "Plymouth"
  },
  "UKK42": {
    "name_latin" : "Torbay",
    "nuts_name" : "Torbay",
    "name_ascii" : "Torbay",
    "name_html" : "Torbay"
  },
  "UKK43": {
    "name_latin" : "Devon CC",
    "nuts_name" : "Devon CC",
    "name_ascii" : "Devon CC",
    "name_html" : "Devon CC"
  },
  "UKL11": {
    "name_latin" : "Isle of Anglesey",
    "nuts_name" : "Isle of Anglesey",
    "name_ascii" : "Isle of Anglesey",
    "name_html" : "Isle of Anglesey"
  },
  "UKL12": {
    "name_latin" : "Gwynedd",
    "nuts_name" : "Gwynedd",
    "name_ascii" : "Gwynedd",
    "name_html" : "Gwynedd"
  },
  "UKL13": {
    "name_latin" : "Conwy and Denbighshire",
    "nuts_name" : "Conwy and Denbighshire",
    "name_ascii" : "Conwy and Denbighshire",
    "name_html" : "Conwy and Denbighshire"
  },
  "UKL14": {
    "name_latin" : "South West Wales",
    "nuts_name" : "South West Wales",
    "name_ascii" : "South West Wales",
    "name_html" : "South West Wales"
  },
  "UKL15": {
    "name_latin" : "Central Valleys",
    "nuts_name" : "Central Valleys",
    "name_ascii" : "Central Valleys",
    "name_html" : "Central Valleys"
  },
  "UKL17": {
    "name_latin" : "Bridgend and Neath Port Talbot",
    "nuts_name" : "Bridgend and Neath Port Talbot",
    "name_ascii" : "Bridgend and Neath Port Talbot",
    "name_html" : "Bridgend and Neath Port Talbot"
  },
  "UKL18": {
    "name_latin" : "Swansea",
    "nuts_name" : "Swansea",
    "name_ascii" : "Swansea",
    "name_html" : "Swansea"
  },
  "UKL22": {
    "name_latin" : "Cardiff and Vale of Glamorgan",
    "nuts_name" : "Cardiff and Vale of Glamorgan",
    "name_ascii" : "Cardiff and Vale of Glamorgan",
    "name_html" : "Cardiff and Vale of Glamorgan"
  },
  "UKL23": {
    "name_latin" : "Flintshire and Wrexham",
    "nuts_name" : "Flintshire and Wrexham",
    "name_ascii" : "Flintshire and Wrexham",
    "name_html" : "Flintshire and Wrexham"
  },
  "UKL24": {
    "name_latin" : "Powys",
    "nuts_name" : "Powys",
    "name_ascii" : "Powys",
    "name_html" : "Powys"
  },
  "UKM21": {
    "name_latin" : "Angus and Dundee City",
    "nuts_name" : "Angus and Dundee City",
    "name_ascii" : "Angus and Dundee City",
    "name_html" : "Angus and Dundee City"
  },
  "UKM23": {
    "name_latin" : "East Lothian and Midlothian",
    "nuts_name" : "East Lothian and Midlothian",
    "name_ascii" : "East Lothian and Midlothian",
    "name_html" : "East Lothian and Midlothian"
  },
  "UKM24": {
    "name_latin" : "Scottish Borders",
    "nuts_name" : "Scottish Borders",
    "name_ascii" : "Scottish Borders",
    "name_html" : "Scottish Borders"
  },
  "UKM25": {
    "name_latin" : "Edinburgh, City of",
    "nuts_name" : "Edinburgh, City of",
    "name_ascii" : "Edinburgh, City Of",
    "name_html" : "Edinburgh, City Of"
  },
  "UKM26": {
    "name_latin" : "Falkirk",
    "nuts_name" : "Falkirk",
    "name_ascii" : "Falkirk",
    "name_html" : "Falkirk"
  },
  "UKM27": {
    "name_latin" : "Perth & Kinross and Stirling",
    "nuts_name" : "Perth & Kinross and Stirling",
    "name_ascii" : "Perth & Kinross and Stirling",
    "name_html" : "Perth & Kinross and Stirling"
  },
  "UKM28": {
    "name_latin" : "West Lothian",
    "nuts_name" : "West Lothian",
    "name_ascii" : "West Lothian",
    "name_html" : "West Lothian"
  },
  "UKM31": {
    "name_latin" : "East Dunbartonshire, West Dunbartonshire and Helensburgh & Lomond",
    "nuts_name" : "East Dunbartonshire, West Dunbartonshire and Helensburgh & Lomond",
    "name_ascii" : "East Dunbartonshire, West Dunbartonshire and Helensburgh & Lomond",
    "name_html" : "East Dunbartonshire, West Dunbartonshire and Helensburgh & Lomond"
  },
  "UKM32": {
    "name_latin" : "Dumfries & Galloway",
    "nuts_name" : "Dumfries & Galloway",
    "name_ascii" : "Dumfries & Galloway",
    "name_html" : "Dumfries & Galloway"
  },
  "UKM34": {
    "name_latin" : "Glasgow City",
    "nuts_name" : "Glasgow City",
    "name_ascii" : "Glasgow City",
    "name_html" : "Glasgow City"
  },
  "UKM35": {
    "name_latin" : "Inverclyde, East Renfrewshire and Renfrewshire",
    "nuts_name" : "Inverclyde, East Renfrewshire and Renfrewshire",
    "name_ascii" : "Inverclyde, East Renfrewshire and Renfrewshire",
    "name_html" : "Inverclyde, East Renfrewshire and Renfrewshire"
  },
  "UKM36": {
    "name_latin" : "North Lanarkshire",
    "nuts_name" : "North Lanarkshire",
    "name_ascii" : "North Lanarkshire",
    "name_html" : "North Lanarkshire"
  },
  "UKM37": {
    "name_latin" : "South Ayrshire",
    "nuts_name" : "South Ayrshire",
    "name_ascii" : "South Ayrshire",
    "name_html" : "South Ayrshire"
  },
  "UKM38": {
    "name_latin" : "South Lanarkshire",
    "nuts_name" : "South Lanarkshire",
    "name_ascii" : "South Lanarkshire",
    "name_html" : "South Lanarkshire"
  },
  "UKM50": {
    "name_latin" : "Aberdeen City and Aberdeenshire",
    "nuts_name" : "Aberdeen City and Aberdeenshire",
    "name_ascii" : "Aberdeen City and Aberdeenshire",
    "name_html" : "Aberdeen City and Aberdeenshire"
  },
  "UKM62": {
    "name_latin" : "Inverness & Nairn and Moray, Badenoch & Strathspey",
    "nuts_name" : "Inverness & Nairn and Moray, Badenoch & Strathspey",
    "name_ascii" : "Inverness & Nairn and Moray, Badenoch & Strathspey",
    "name_html" : "Inverness & Nairn and Moray, Badenoch & Strathspey"
  },
  "UKM63": {
    "name_latin" : "Lochaber, Skye & Lochalsh, Arran & Cumbrae and Argyll & Bute",
    "nuts_name" : "Lochaber, Skye & Lochalsh, Arran & Cumbrae and Argyll & Bute",
    "name_ascii" : "Lochaber, Skye & Lochalsh, Arran & Cumbrae and Argyll & Bute",
    "name_html" : "Lochaber, Skye & Lochalsh, Arran & Cumbrae and Argyll & Bute"
  },
  "UKM64": {
    "name_latin" : "Eilean Siar (Western Isles)",
    "nuts_name" : "Eilean Siar (Western Isles)",
    "name_ascii" : "Eilean Siar (Western Isles)",
    "name_html" : "Eilean Siar (Western Isles)"
  },
  "UKM65": {
    "name_latin" : "Orkney Islands",
    "nuts_name" : "Orkney Islands",
    "name_ascii" : "Orkney Islands",
    "name_html" : "Orkney Islands"
  },
  "UKM66": {
    "name_latin" : "Shetland Islands",
    "nuts_name" : "Shetland Islands",
    "name_ascii" : "Shetland Islands",
    "name_html" : "Shetland Islands"
  },
  "UKN01": {
    "name_latin" : "Belfast",
    "nuts_name" : "Belfast",
    "name_ascii" : "Belfast",
    "name_html" : "Belfast"
  },
  "UKN02": {
    "name_latin" : "Outer Belfast",
    "nuts_name" : "Outer Belfast",
    "name_ascii" : "Outer Belfast",
    "name_html" : "Outer Belfast"
  },
  "UKN03": {
    "name_latin" : "East of Northern Ireland",
    "nuts_name" : "East of Northern Ireland",
    "name_ascii" : "East of Northern Ireland",
    "name_html" : "East of Northern Ireland"
  },
  "UKN04": {
    "name_latin" : "North of Northern Ireland",
    "nuts_name" : "North of Northern Ireland",
    "name_ascii" : "North of Northern Ireland",
    "name_html" : "North of Northern Ireland"
  },
  "ME000": {
    "name_latin" : "Crna Gora",
    "nuts_name" : "Црна Гора",
    "name_ascii" : "Crna Gora",
    "name_html" : "Crna Gora"
  },
  "AT224": {
    "name_latin" : "Oststeiermark",
    "nuts_name" : "Oststeiermark",
    "name_ascii" : "Oststeiermark",
    "name_html" : "Oststeiermark"
  },
  "AT315": {
    "name_latin" : "Traunviertel",
    "nuts_name" : "Traunviertel",
    "name_ascii" : "Traunviertel",
    "name_html" : "Traunviertel"
  },
  "AT331": {
    "name_latin" : "Außerfern",
    "nuts_name" : "Außerfern",
    "name_ascii" : "Ausserfern",
    "name_html" : "Au&#x00DF;erfern"
  },
  "AT341": {
    "name_latin" : "Bludenz-Bregenzer Wald",
    "nuts_name" : "Bludenz-Bregenzer Wald",
    "name_ascii" : "Bludenz-Bregenzer Wald",
    "name_html" : "Bludenz-Bregenzer Wald"
  },
  "BE235": {
    "name_latin" : "Arr. Oudenaarde",
    "nuts_name" : "Arr. Oudenaarde",
    "name_ascii" : "Arr. Oudenaarde",
    "name_html" : "Arr. Oudenaarde"
  },
  "BE258": {
    "name_latin" : "Arr. Veurne",
    "nuts_name" : "Arr. Veurne",
    "name_ascii" : "Arr. Veurne",
    "name_html" : "Arr. Veurne"
  },
  "BE326": {
    "name_latin" : "Arr. Thuin",
    "nuts_name" : "Arr. Thuin",
    "name_ascii" : "Arr. Thuin",
    "name_html" : "Arr. Thuin"
  },
  "BE332": {
    "name_latin" : "Arr. Liège",
    "nuts_name" : "Arr. Liège",
    "name_ascii" : "Arr. Liege",
    "name_html" : "Arr. Li&#x00E8;ge"
  },
  "BG325": {
    "name_latin" : "Silistra",
    "nuts_name" : "Силистра",
    "name_ascii" : "Silistra",
    "name_html" : "&#x0421;&#x0438;&#x043B;&#x0438;&#x0441;&#x0442;&#x0440;&#x0430;"
  },
  "BG331": {
    "name_latin" : "Varna",
    "nuts_name" : "Варна",
    "name_ascii" : "Varna",
    "name_html" : "&#x0412;&#x0430;&#x0440;&#x043D;&#x0430;"
  },
  "BG334": {
    "name_latin" : "Targovishte",
    "nuts_name" : "Търговище",
    "name_ascii" : "Targovishte",
    "name_html" : "&#x0422;&#x044A;&#x0440;&#x0433;&#x043E;&#x0432;&#x0438;&#x0449;&#x0435;"
  },
  "BG341": {
    "name_latin" : "Burgas",
    "nuts_name" : "Бургас",
    "name_ascii" : "Burgas",
    "name_html" : "&#x0411;&#x0443;&#x0440;&#x0433;&#x0430;&#x0441;"
  },
  "BG344": {
    "name_latin" : "Stara Zagora",
    "nuts_name" : "Стара Загора",
    "name_ascii" : "Stara Zagora",
    "name_html" : "&#x0421;&#x0442;&#x0430;&#x0440;&#x0430; &#x0417;&#x0430;&#x0433;&#x043E;&#x0440;&#x0430;"
  },
  "BG422": {
    "name_latin" : "Haskovo",
    "nuts_name" : "Хасково",
    "name_ascii" : "Haskovo",
    "name_html" : "&#x0425;&#x0430;&#x0441;&#x043A;&#x043E;&#x0432;&#x043E;"
  },
  "BG424": {
    "name_latin" : "Smolyan",
    "nuts_name" : "Смолян",
    "name_ascii" : "Smolyan",
    "name_html" : "&#x0421;&#x043C;&#x043E;&#x043B;&#x044F;&#x043D;"
  },
  "CH031": {
    "name_latin" : "Basel-Stadt",
    "nuts_name" : "Basel-Stadt",
    "name_ascii" : "Basel-Stadt",
    "name_html" : "Basel-Stadt"
  },
  "CH051": {
    "name_latin" : "Glarus",
    "nuts_name" : "Glarus",
    "name_ascii" : "Glarus",
    "name_html" : "Glarus"
  },
  "CH054": {
    "name_latin" : "Appenzell Innerrhoden",
    "nuts_name" : "Appenzell Innerrhoden",
    "name_ascii" : "Appenzell Innerrhoden",
    "name_html" : "Appenzell Innerrhoden"
  },
  "CZ051": {
    "name_latin" : "Liberecký kraj",
    "nuts_name" : "Liberecký kraj",
    "name_ascii" : "Liberecky kraj",
    "name_html" : "Libereck&#x00FD; kraj"
  },
  "CZ071": {
    "name_latin" : "Olomoucký kraj",
    "nuts_name" : "Olomoucký kraj",
    "name_ascii" : "Olomoucky kraj",
    "name_html" : "Olomouck&#x00FD; kraj"
  },
  "DE116": {
    "name_latin" : "Rems-Murr-Kreis",
    "nuts_name" : "Rems-Murr-Kreis",
    "name_ascii" : "Rems-Murr-Kreis",
    "name_html" : "Rems-Murr-Kreis"
  },
  "DE11A": {
    "name_latin" : "Schwäbisch Hall",
    "nuts_name" : "Schwäbisch Hall",
    "name_ascii" : "Schwabisch Hall",
    "name_html" : "Schw&#x00E4;bisch Hall"
  },
  "DE122": {
    "name_latin" : "Karlsruhe, Stadtkreis",
    "nuts_name" : "Karlsruhe, Stadtkreis",
    "name_ascii" : "Karlsruhe, Stadtkreis",
    "name_html" : "Karlsruhe, Stadtkreis"
  },
  "DE129": {
    "name_latin" : "Pforzheim, Stadtkreis",
    "nuts_name" : "Pforzheim, Stadtkreis",
    "name_ascii" : "Pforzheim, Stadtkreis",
    "name_html" : "Pforzheim, Stadtkreis"
  },
  "DE133": {
    "name_latin" : "Emmendingen",
    "nuts_name" : "Emmendingen",
    "name_ascii" : "Emmendingen",
    "name_html" : "Emmendingen"
  },
  "DE138": {
    "name_latin" : "Konstanz",
    "nuts_name" : "Konstanz",
    "name_ascii" : "Konstanz",
    "name_html" : "Konstanz"
  },
  "DE142": {
    "name_latin" : "Tübingen, Landkreis",
    "nuts_name" : "Tübingen, Landkreis",
    "name_ascii" : "Tubingen, Landkreis",
    "name_html" : "T&#x00FC;bingen, Landkreis"
  },
  "DE212": {
    "name_latin" : "München, Kreisfreie Stadt",
    "nuts_name" : "München, Kreisfreie Stadt",
    "name_ascii" : "Munchen, Kreisfreie Stadt",
    "name_html" : "M&#x00FC;nchen, Kreisfreie Stadt"
  },
  "DE227": {
    "name_latin" : "Landshut, Landkreis",
    "nuts_name" : "Landshut, Landkreis",
    "name_ascii" : "Landshut, Landkreis",
    "name_html" : "Landshut, Landkreis"
  },
  "DE231": {
    "name_latin" : "Amberg, Kreisfreie Stadt",
    "nuts_name" : "Amberg, Kreisfreie Stadt",
    "name_ascii" : "Amberg, Kreisfreie Stadt",
    "name_html" : "Amberg, Kreisfreie Stadt"
  },
  "DE237": {
    "name_latin" : "Neustadt a. d. Waldnaab",
    "nuts_name" : "Neustadt a. d. Waldnaab",
    "name_ascii" : "Neustadt a. d. Waldnaab",
    "name_html" : "Neustadt a. d. Waldnaab"
  },
  "DE243": {
    "name_latin" : "Coburg, Kreisfreie Stadt",
    "nuts_name" : "Coburg, Kreisfreie Stadt",
    "name_ascii" : "Coburg, Kreisfreie Stadt",
    "name_html" : "Coburg, Kreisfreie Stadt"
  },
  "DE24B": {
    "name_latin" : "Kulmbach",
    "nuts_name" : "Kulmbach",
    "name_ascii" : "Kulmbach",
    "name_html" : "Kulmbach"
  },
  "DE253": {
    "name_latin" : "Fürth, Kreisfreie Stadt",
    "nuts_name" : "Fürth, Kreisfreie Stadt",
    "name_ascii" : "Furth, Kreisfreie Stadt",
    "name_html" : "F&#x00FC;rth, Kreisfreie Stadt"
  },
  "DE258": {
    "name_latin" : "Fürth, Landkreis",
    "nuts_name" : "Fürth, Landkreis",
    "name_ascii" : "Furth, Landkreis",
    "name_html" : "F&#x00FC;rth, Landkreis"
  },
  "DE263": {
    "name_latin" : "Würzburg, Kreisfreie Stadt",
    "nuts_name" : "Würzburg, Kreisfreie Stadt",
    "name_ascii" : "Wurzburg, Kreisfreie Stadt",
    "name_html" : "W&#x00FC;rzburg, Kreisfreie Stadt"
  },
  "DE26B": {
    "name_latin" : "Schweinfurt, Landkreis",
    "nuts_name" : "Schweinfurt, Landkreis",
    "name_ascii" : "Schweinfurt, Landkreis",
    "name_html" : "Schweinfurt, Landkreis"
  },
  "DE273": {
    "name_latin" : "Kempten (Allgäu), Kreisfreie Stadt",
    "nuts_name" : "Kempten (Allgäu), Kreisfreie Stadt",
    "name_ascii" : "Kempten (Allgau), Kreisfreie Stadt",
    "name_html" : "Kempten (Allg&#x00E4;u), Kreisfreie Stadt"
  },
  "DE406": {
    "name_latin" : "Dahme-Spreewald",
    "nuts_name" : "Dahme-Spreewald",
    "name_ascii" : "Dahme-Spreewald",
    "name_html" : "Dahme-Spreewald"
  },
  "DE40C": {
    "name_latin" : "Oder-Spree",
    "nuts_name" : "Oder-Spree",
    "name_ascii" : "Oder-Spree",
    "name_html" : "Oder-Spree"
  },
  "DE40G": {
    "name_latin" : "Spree-Neiße",
    "nuts_name" : "Spree-Neiße",
    "name_ascii" : "Spree-Neisse",
    "name_html" : "Spree-Nei&#x00DF;e"
  },
  "DE502": {
    "name_latin" : "Bremerhaven, Kreisfreie Stadt",
    "nuts_name" : "Bremerhaven, Kreisfreie Stadt",
    "name_ascii" : "Bremerhaven, Kreisfreie Stadt",
    "name_html" : "Bremerhaven, Kreisfreie Stadt"
  },
  "DE713": {
    "name_latin" : "Offenbach am Main, Kreisfreie Stadt",
    "nuts_name" : "Offenbach am Main, Kreisfreie Stadt",
    "name_ascii" : "Offenbach am Main, Kreisfreie Stadt",
    "name_html" : "Offenbach am Main, Kreisfreie Stadt"
  },
  "DE71D": {
    "name_latin" : "Rheingau-Taunus-Kreis",
    "nuts_name" : "Rheingau-Taunus-Kreis",
    "name_ascii" : "Rheingau-Taunus-Kreis",
    "name_html" : "Rheingau-Taunus-Kreis"
  },
  "DE724": {
    "name_latin" : "Marburg-Biedenkopf",
    "nuts_name" : "Marburg-Biedenkopf",
    "name_ascii" : "Marburg-Biedenkopf",
    "name_html" : "Marburg-Biedenkopf"
  },
  "DE735": {
    "name_latin" : "Schwalm-Eder-Kreis",
    "nuts_name" : "Schwalm-Eder-Kreis",
    "name_ascii" : "Schwalm-Eder-Kreis",
    "name_html" : "Schwalm-Eder-Kreis"
  },
  "DE803": {
    "name_latin" : "Rostock, Kreisfreie Stadt",
    "nuts_name" : "Rostock, Kreisfreie Stadt",
    "name_ascii" : "Rostock, Kreisfreie Stadt",
    "name_html" : "Rostock, Kreisfreie Stadt"
  },
  "DE80M": {
    "name_latin" : "Nordwestmecklenburg",
    "nuts_name" : "Nordwestmecklenburg",
    "name_ascii" : "Nordwestmecklenburg",
    "name_html" : "Nordwestmecklenburg"
  },
  "DE912": {
    "name_latin" : "Salzgitter, Kreisfreie Stadt",
    "nuts_name" : "Salzgitter, Kreisfreie Stadt",
    "name_ascii" : "Salzgitter, Kreisfreie Stadt",
    "name_html" : "Salzgitter, Kreisfreie Stadt"
  },
  "DE943": {
    "name_latin" : "Oldenburg (Oldenburg), Kreisfreie Stadt",
    "nuts_name" : "Oldenburg (Oldenburg), Kreisfreie Stadt",
    "name_ascii" : "Oldenburg (Oldenburg), Kreisfreie Stadt",
    "name_html" : "Oldenburg (Oldenburg), Kreisfreie Stadt"
  },
  "DE94E": {
    "name_latin" : "Osnabrück, Landkreis",
    "nuts_name" : "Osnabrück, Landkreis",
    "name_ascii" : "Osnabruck, Landkreis",
    "name_html" : "Osnabr&#x00FC;ck, Landkreis"
  },
  "DEA12": {
    "name_latin" : "Duisburg, Kreisfreie Stadt",
    "nuts_name" : "Duisburg, Kreisfreie Stadt",
    "name_ascii" : "Duisburg, Kreisfreie Stadt",
    "name_html" : "Duisburg, Kreisfreie Stadt"
  },
  "DEA16": {
    "name_latin" : "Mülheim an der Ruhr,Kreisfreie Stadt",
    "nuts_name" : "Mülheim an der Ruhr,Kreisfreie Stadt",
    "name_ascii" : "Mulheim an der Ruhr,Kreisfreie Stadt",
    "name_html" : "M&#x00FC;lheim an der Ruhr,Kreisfreie Stadt"
  },
  "DEA22": {
    "name_latin" : "Bonn, Kreisfreie Stadt",
    "nuts_name" : "Bonn, Kreisfreie Stadt",
    "name_ascii" : "Bonn, Kreisfreie Stadt",
    "name_html" : "Bonn, Kreisfreie Stadt"
  },
  "DEA2A": {
    "name_latin" : "Oberbergischer Kreis",
    "nuts_name" : "Oberbergischer Kreis",
    "name_ascii" : "Oberbergischer Kreis",
    "name_html" : "Oberbergischer Kreis"
  },
  "DEA31": {
    "name_latin" : "Bottrop, Kreisfreie Stadt",
    "nuts_name" : "Bottrop, Kreisfreie Stadt",
    "name_ascii" : "Bottrop, Kreisfreie Stadt",
    "name_html" : "Bottrop, Kreisfreie Stadt"
  },
  "DEA41": {
    "name_latin" : "Bielefeld, Kreisfreie Stadt",
    "nuts_name" : "Bielefeld, Kreisfreie Stadt",
    "name_ascii" : "Bielefeld, Kreisfreie Stadt",
    "name_html" : "Bielefeld, Kreisfreie Stadt"
  },
  "DEB1B": {
    "name_latin" : "Westerwaldkreis",
    "nuts_name" : "Westerwaldkreis",
    "name_ascii" : "Westerwaldkreis",
    "name_html" : "Westerwaldkreis"
  },
  "DEB24": {
    "name_latin" : "Vulkaneifel",
    "nuts_name" : "Vulkaneifel",
    "name_ascii" : "Vulkaneifel",
    "name_html" : "Vulkaneifel"
  },
  "DEB31": {
    "name_latin" : "Frankenthal (Pfalz), Kreisfreie Stadt",
    "nuts_name" : "Frankenthal (Pfalz), Kreisfreie Stadt",
    "name_ascii" : "Frankenthal (Pfalz), Kreisfreie Stadt",
    "name_html" : "Frankenthal (Pfalz), Kreisfreie Stadt"
  },
  "DEB36": {
    "name_latin" : "Neustadt an der Weinstraße, Kreisfreie Stadt",
    "nuts_name" : "Neustadt an der Weinstraße, Kreisfreie Stadt",
    "name_ascii" : "Neustadt an der Weinstrasse, Kreisfreie Stadt",
    "name_html" : "Neustadt an der Weinstra&#x00DF;e, Kreisfreie Stadt"
  },
  "DEB3I": {
    "name_latin" : "Rhein-Pfalz-Kreis",
    "nuts_name" : "Rhein-Pfalz-Kreis",
    "name_ascii" : "Rhein-Pfalz-Kreis",
    "name_html" : "Rhein-Pfalz-Kreis"
  },
  "DEC01": {
    "name_latin" : "Regionalverband Saarbrücken",
    "nuts_name" : "Regionalverband Saarbrücken",
    "name_ascii" : "Regionalverband Saarbrucken",
    "name_html" : "Regionalverband Saarbr&#x00FC;cken"
  },
  "DED2F": {
    "name_latin" : "Sächsische Schweiz-Osterzgebirge",
    "nuts_name" : "Sächsische Schweiz-Osterzgebirge",
    "name_ascii" : "Sachsische Schweiz-Osterzgebirge",
    "name_html" : "S&#x00E4;chsische Schweiz-Osterzgebirge"
  },
  "DEE03": {
    "name_latin" : "Magdeburg, Kreisfreie Stadt",
    "nuts_name" : "Magdeburg, Kreisfreie Stadt",
    "name_ascii" : "Magdeburg, Kreisfreie Stadt",
    "name_html" : "Magdeburg, Kreisfreie Stadt"
  },
  "DEF0A": {
    "name_latin" : "Plön",
    "nuts_name" : "Plön",
    "name_ascii" : "Plon",
    "name_html" : "Pl&#x00F6;n"
  },
  "DEF0C": {
    "name_latin" : "Schleswig-Flensburg",
    "nuts_name" : "Schleswig-Flensburg",
    "name_ascii" : "Schleswig-Flensburg",
    "name_html" : "Schleswig-Flensburg"
  },
  "DEG02": {
    "name_latin" : "Gera, Kreisfreie Stadt",
    "nuts_name" : "Gera, Kreisfreie Stadt",
    "name_ascii" : "Gera, Kreisfreie Stadt",
    "name_html" : "Gera, Kreisfreie Stadt"
  },
  "DEG0A": {
    "name_latin" : "Kyffhäuserkreis",
    "nuts_name" : "Kyffhäuserkreis",
    "name_ascii" : "Kyffhauserkreis",
    "name_html" : "Kyffh&#x00E4;userkreis"
  },
  "DEG0G": {
    "name_latin" : "Weimarer Land",
    "nuts_name" : "Weimarer Land",
    "name_ascii" : "Weimarer Land",
    "name_html" : "Weimarer Land"
  },
  "DEG0M": {
    "name_latin" : "Altenburger Land",
    "nuts_name" : "Altenburger Land",
    "name_ascii" : "Altenburger Land",
    "name_html" : "Altenburger Land"
  },
  "DK011": {
    "name_latin" : "Byen København",
    "nuts_name" : "Byen København",
    "name_ascii" : "Byen Kobenhavn",
    "name_html" : "Byen K&#x00F8;benhavn"
  },
  "DK021": {
    "name_latin" : "Østsjælland",
    "nuts_name" : "Østsjælland",
    "name_ascii" : "Ostsjaelland",
    "name_html" : "&#x00D8;stsj&#x00E6;lland"
  },
  "EE004": {
    "name_latin" : "Lääne-Eesti",
    "nuts_name" : "Lääne-Eesti",
    "name_ascii" : "Laane-Eesti",
    "name_html" : "L&#x00E4;&#x00E4;ne-Eesti"
  },
  "EL301": {
    "name_latin" : "Boreios Tomeas Athinon",
    "nuts_name" : "Βόρειος Τομέας Αθηνών",
    "name_ascii" : "Boreios Tomeas Athinon",
    "name_html" : "&#x0392;&#x03CC;&#x03C1;&#x03B5;&#x03B9;&#x03BF;&#x03C2; &#x03A4;&#x03BF;&#x03BC;&#x03AD;&#x03B1;&#x03C2; &#x0391;&#x03B8;&#x03B7;&#x03BD;&#x03CE;&#x03BD;"
  },
  "EL304": {
    "name_latin" : "Notios Tomeas Athinon",
    "nuts_name" : "Νότιος Τομέας Αθηνών",
    "name_ascii" : "Notios Tomeas Athinon",
    "name_html" : "&#x039D;&#x03CC;&#x03C4;&#x03B9;&#x03BF;&#x03C2; &#x03A4;&#x03BF;&#x03BC;&#x03AD;&#x03B1;&#x03C2; &#x0391;&#x03B8;&#x03B7;&#x03BD;&#x03CE;&#x03BD;"
  },
  "EL307": {
    "name_latin" : "Peiraias, Nisoi",
    "nuts_name" : "Πειραιάς, Νήσοι",
    "name_ascii" : "Peiraias, Nisoi",
    "name_html" : "&#x03A0;&#x03B5;&#x03B9;&#x03C1;&#x03B1;&#x03B9;&#x03AC;&#x03C2;, &#x039D;&#x03AE;&#x03C3;&#x03BF;&#x03B9;"
  },
  "EL411": {
    "name_latin" : "Lesbos, Limnos",
    "nuts_name" : "Λέσβος, Λήμνος",
    "name_ascii" : "Lesbos, Limnos",
    "name_html" : "&#x039B;&#x03AD;&#x03C3;&#x03B2;&#x03BF;&#x03C2;, &#x039B;&#x03AE;&#x03BC;&#x03BD;&#x03BF;&#x03C2;"
  },
  "EL422": {
    "name_latin" : "Andros, Thira, Kea, Milos, Mikonos, Naxos, Paros, Siros, Tinos",
    "nuts_name" : "Άνδρος, Θήρα, Κέα, Μήλος, Μύκονος, Νάξος, Πάρος, Σύρος, Τήνος",
    "name_ascii" : "Andros, Thira, Kea, Milos, Mikonos, Naxos, Paros, Siros, Tinos",
    "name_html" : "&#x0386;&#x03BD;&#x03B4;&#x03C1;&#x03BF;&#x03C2;, &#x0398;&#x03AE;&#x03C1;&#x03B1;, &#x039A;&#x03AD;&#x03B1;, &#x039C;&#x03AE;&#x03BB;&#x03BF;&#x03C2;, &#x039C;&#x03CD;&#x03BA;&#x03BF;&#x03BD;&#x03BF;&#x03C2;, &#x039D;&#x03AC;&#x03BE;&#x03BF;&#x03C2;, &#x"
  },
  "EL511": {
    "name_latin" : "Evros",
    "nuts_name" : "Έβρος",
    "name_ascii" : "Ebros",
    "name_html" : "&#x0388;&#x03B2;&#x03C1;&#x03BF;&#x03C2;"
  },
  "EL513": {
    "name_latin" : "Rodopi",
    "nuts_name" : "Ροδόπη",
    "name_ascii" : "Rodopi",
    "name_html" : "&#x03A1;&#x03BF;&#x03B4;&#x03CC;&#x03C0;&#x03B7;"
  },
  "EL515": {
    "name_latin" : "Thasos, Kavala",
    "nuts_name" : "Θάσος, Καβάλα",
    "name_ascii" : "Thasos, Kabala",
    "name_html" : "&#x0398;&#x03AC;&#x03C3;&#x03BF;&#x03C2;, &#x039A;&#x03B1;&#x03B2;&#x03AC;&#x03BB;&#x03B1;"
  },
  "EL522": {
    "name_latin" : "Thessaloniki",
    "nuts_name" : "Θεσσαλονίκη",
    "name_ascii" : "Thessaloniki",
    "name_html" : "&#x0398;&#x03B5;&#x03C3;&#x03C3;&#x03B1;&#x03BB;&#x03BF;&#x03BD;&#x03AF;&#x03BA;&#x03B7;"
  },
  "EL527": {
    "name_latin" : "Chalkidiki",
    "nuts_name" : "Χαλκιδική",
    "name_ascii" : "Xalkidiki",
    "name_html" : "&#x03A7;&#x03B1;&#x03BB;&#x03BA;&#x03B9;&#x03B4;&#x03B9;&#x03BA;&#x03AE;"
  },
  "EL531": {
    "name_latin" : "Grebena, Kozani",
    "nuts_name" : "Γρεβενά, Κοζάνη",
    "name_ascii" : "Grebena, Kozani",
    "name_html" : "&#x0393;&#x03C1;&#x03B5;&#x03B2;&#x03B5;&#x03BD;&#x03AC;, &#x039A;&#x03BF;&#x03B6;&#x03AC;&#x03BD;&#x03B7;"
  },
  "EL542": {
    "name_latin" : "Thesprotia",
    "nuts_name" : "Θεσπρωτία",
    "name_ascii" : "Thesprotia",
    "name_html" : "&#x0398;&#x03B5;&#x03C3;&#x03C0;&#x03C1;&#x03C9;&#x03C4;&#x03AF;&#x03B1;"
  },
  "EL612": {
    "name_latin" : "Larisa",
    "nuts_name" : "Λάρισα",
    "name_ascii" : "Larisa",
    "name_html" : "&#x039B;&#x03AC;&#x03C1;&#x03B9;&#x03C3;&#x03B1;"
  },
  "EL623": {
    "name_latin" : "Ithaki, Kefallinia",
    "nuts_name" : "Ιθάκη, Κεφαλληνία",
    "name_ascii" : "Ithaki, Kefallinia",
    "name_html" : "&#x0399;&#x03B8;&#x03AC;&#x03BA;&#x03B7;, &#x039A;&#x03B5;&#x03C6;&#x03B1;&#x03BB;&#x03BB;&#x03B7;&#x03BD;&#x03AF;&#x03B1;"
  },
  "EL631": {
    "name_latin" : "Aitoloakarnania",
    "nuts_name" : "Αιτωλοακαρνανία",
    "name_ascii" : "Aitoloakarnania",
    "name_html" : "&#x0391;&#x03B9;&#x03C4;&#x03C9;&#x03BB;&#x03BF;&#x03B1;&#x03BA;&#x03B1;&#x03C1;&#x03BD;&#x03B1;&#x03BD;&#x03AF;&#x03B1;"
  },
  "EL642": {
    "name_latin" : "Evvoia",
    "nuts_name" : "Εύβοια",
    "name_ascii" : "Eiboia",
    "name_html" : "&#x0395;&#x03CD;&#x03B2;&#x03BF;&#x03B9;&#x03B1;"
  },
  "EL653": {
    "name_latin" : "Lakonia, Messinia",
    "nuts_name" : "Λακωνία, Μεσσηνία",
    "name_ascii" : "Lakonia, Messinia",
    "name_html" : "&#x039B;&#x03B1;&#x03BA;&#x03C9;&#x03BD;&#x03AF;&#x03B1;, &#x039C;&#x03B5;&#x03C3;&#x03C3;&#x03B7;&#x03BD;&#x03AF;&#x03B1;"
  },
  "ES300": {
    "name_latin" : "Madrid",
    "nuts_name" : "Madrid",
    "name_ascii" : "Madrid",
    "name_html" : "Madrid"
  },
  "ES411": {
    "name_latin" : "Ávila",
    "nuts_name" : "Ávila",
    "name_ascii" : "Avila",
    "name_html" : "&#x00C1;vila"
  },
  "ES416": {
    "name_latin" : "Segovia",
    "nuts_name" : "Segovia",
    "name_ascii" : "Segovia",
    "name_html" : "Segovia"
  },
  "ES421": {
    "name_latin" : "Albacete",
    "nuts_name" : "Albacete",
    "name_ascii" : "Albacete",
    "name_html" : "Albacete"
  },
  "ES512": {
    "name_latin" : "Girona",
    "nuts_name" : "Girona",
    "name_ascii" : "Girona",
    "name_html" : "Girona"
  },
  "ES521": {
    "name_latin" : "Alicante / Alacant",
    "nuts_name" : "Alicante / Alacant",
    "name_ascii" : "Alicante / Alacant",
    "name_html" : "Alicante / Alacant"
  },
  "ES531": {
    "name_latin" : "Eivissa y Formentera",
    "nuts_name" : "Eivissa y Formentera",
    "name_ascii" : "Eivissa Y Formentera",
    "name_html" : "Eivissa Y Formentera"
  },
  "ES616": {
    "name_latin" : "Jaén",
    "nuts_name" : "Jaén",
    "name_ascii" : "Jaen",
    "name_html" : "Ja&#x00E9;n"
  },
  "ES707": {
    "name_latin" : "La Palma",
    "nuts_name" : "La Palma",
    "name_ascii" : "La Palma",
    "name_html" : "La Palma"
  },
  "FI1C3": {
    "name_latin" : "Päijät-Häme",
    "nuts_name" : "Päijät-Häme",
    "name_ascii" : "Paijat-Hame",
    "name_html" : "P&#x00E4;ij&#x00E4;t-H&#x00E4;me"
  },
  "FR263": {
    "name_latin" : "Saône-et-Loire",
    "nuts_name" : "Saône-et-Loire",
    "name_ascii" : "Saone-et-Loire",
    "name_html" : "Sa&#x00F4;ne-et-Loire"
  },
  "FR411": {
    "name_latin" : "Meurthe-et-Moselle",
    "nuts_name" : "Meurthe-et-Moselle",
    "name_ascii" : "Meurthe-et-Moselle",
    "name_html" : "Meurthe-et-Moselle"
  },
  "FR433": {
    "name_latin" : "Haute-Saône",
    "nuts_name" : "Haute-Saône",
    "name_ascii" : "Haute-Saone",
    "name_html" : "Haute-Sa&#x00F4;ne"
  },
  "FR512": {
    "name_latin" : "Maine-et-Loire",
    "nuts_name" : "Maine-et-Loire",
    "name_ascii" : "Maine-et-Loire",
    "name_html" : "Maine-et-Loire"
  },
  "FR522": {
    "name_latin" : "Finistère",
    "nuts_name" : "Finistère",
    "name_ascii" : "Finistere",
    "name_html" : "Finist&#x00E8;re"
  },
  "FR533": {
    "name_latin" : "Deux-Sèvres",
    "nuts_name" : "Deux-Sèvres",
    "name_ascii" : "Deux-Sevres",
    "name_html" : "Deux-S&#x00E8;vres"
  },
  "FR614": {
    "name_latin" : "Lot-et-Garonne",
    "nuts_name" : "Lot-et-Garonne",
    "name_ascii" : "Lot-et-Garonne",
    "name_html" : "Lot-et-Garonne"
  },
  "FR622": {
    "name_latin" : "Aveyron",
    "nuts_name" : "Aveyron",
    "name_ascii" : "Aveyron",
    "name_html" : "Aveyron"
  },
  "FR626": {
    "name_latin" : "Hautes-Pyrénées",
    "nuts_name" : "Hautes-Pyrénées",
    "name_ascii" : "Hautes-Pyrenees",
    "name_html" : "Hautes-Pyr&#x00E9;n&#x00E9;es"
  },
  "FR712": {
    "name_latin" : "Ardèche",
    "nuts_name" : "Ardèche",
    "name_ascii" : "Ardeche",
    "name_html" : "Ard&#x00E8;che"
  },
  "FR718": {
    "name_latin" : "Haute-Savoie",
    "nuts_name" : "Haute-Savoie",
    "name_ascii" : "Haute-Savoie",
    "name_html" : "Haute-Savoie"
  },
  "HR034": {
    "name_latin" : "Šibensko-kninska županija",
    "nuts_name" : "Šibensko-kninska županija",
    "name_ascii" : "Sibensko-Kninska Zupanija",
    "name_html" : "&#x0160;ibensko-Kninska &#x017D;upanija"
  },
  "HR041": {
    "name_latin" : "Grad Zagreb",
    "nuts_name" : "Grad Zagreb",
    "name_ascii" : "Grad Zagreb",
    "name_html" : "Grad Zagreb"
  },
  "HR044": {
    "name_latin" : "Varaždinska županija",
    "nuts_name" : "Varaždinska županija",
    "name_ascii" : "Varazdinska Zupanija",
    "name_html" : "Vara&#x017E;dinska &#x017D;upanija"
  },
  "HR048": {
    "name_latin" : "Viroviticko-podravska županija",
    "nuts_name" : "Viroviticko-podravska županija",
    "name_ascii" : "Viroviticko-Podravska Zupanija",
    "name_html" : "Viroviticko-Podravska &#x017D;upanija"
  },
  "HR04C": {
    "name_latin" : "Vukovarsko-srijemska županija",
    "nuts_name" : "Vukovarsko-srijemska županija",
    "name_ascii" : "Vukovarsko-Srijemska Zupanija",
    "name_html" : "Vukovarsko-Srijemska &#x017D;upanija"
  },
  "HU212": {
    "name_latin" : "Komárom-Esztergom",
    "nuts_name" : "Komárom-Esztergom",
    "name_ascii" : "Komarom-Esztergom",
    "name_html" : "Kom&#x00E1;rom-Esztergom"
  },
  "HU311": {
    "name_latin" : "Borsod-Abaúj-Zemplén",
    "nuts_name" : "Borsod-Abaúj-Zemplén",
    "name_ascii" : "Borsod-Abauj-Zemplen",
    "name_html" : "Borsod-Aba&#x00FA;j-Zempl&#x00E9;n"
  },
  "HU323": {
    "name_latin" : "Szabolcs-Szatmár-Bereg",
    "nuts_name" : "Szabolcs-Szatmár-Bereg",
    "name_ascii" : "Szabolcs-Szatmar-Bereg",
    "name_html" : "Szabolcs-Szatm&#x00E1;r-Bereg"
  },
  "IE013": {
    "name_latin" : "West",
    "nuts_name" : "West",
    "name_ascii" : "West",
    "name_html" : "West"
  },
  "IE022": {
    "name_latin" : "Mid-East",
    "nuts_name" : "Mid-East",
    "name_ascii" : "Mid-East",
    "name_html" : "Mid-East"
  },
  "ITF48": {
    "name_latin" : "Barletta-Andria-Trani",
    "nuts_name" : "Barletta-Andria-Trani",
    "name_ascii" : "Barletta-Andria-Trani",
    "name_html" : "Barletta-Andria-Trani"
  },
  "ITG11": {
    "name_latin" : "Trapani",
    "nuts_name" : "Trapani",
    "name_ascii" : "Trapani",
    "name_html" : "Trapani"
  },
  "ITG16": {
    "name_latin" : "Enna",
    "nuts_name" : "Enna",
    "name_ascii" : "Enna",
    "name_html" : "Enna"
  },
  "ITG2A": {
    "name_latin" : "Ogliastra",
    "nuts_name" : "Ogliastra",
    "name_ascii" : "Ogliastra",
    "name_html" : "Ogliastra"
  },
  "ITH43": {
    "name_latin" : "Gorizia",
    "nuts_name" : "Gorizia",
    "name_ascii" : "Gorizia",
    "name_html" : "Gorizia"
  },
  "ITH53": {
    "name_latin" : "Reggio nell'Emilia",
    "nuts_name" : "Reggio nell'Emilia",
    "name_ascii" : "Reggio Nell'Emilia",
    "name_html" : "Reggio Nell'Emilia"
  },
  "ITI11": {
    "name_latin" : "Massa-Carrara",
    "nuts_name" : "Massa-Carrara",
    "name_ascii" : "Massa-Carrara",
    "name_html" : "Massa-Carrara"
  },
  "ITI21": {
    "name_latin" : "Perugia",
    "nuts_name" : "Perugia",
    "name_ascii" : "Perugia",
    "name_html" : "Perugia"
  },
  "LV009": {
    "name_latin" : "Zemgale",
    "nuts_name" : "Zemgale",
    "name_ascii" : "Zemgale",
    "name_html" : "Zemgale"
  },
  "NL113": {
    "name_latin" : "Overig Groningen",
    "nuts_name" : "Overig Groningen",
    "name_ascii" : "Overig Groningen",
    "name_html" : "Overig Groningen"
  },
  "NL131": {
    "name_latin" : "Noord-Drenthe",
    "nuts_name" : "Noord-Drenthe",
    "name_ascii" : "Noord-Drenthe",
    "name_html" : "Noord-Drenthe"
  },
  "NL211": {
    "name_latin" : "Noord-Overijssel",
    "nuts_name" : "Noord-Overijssel",
    "name_ascii" : "Noord-Overijssel",
    "name_html" : "Noord-Overijssel"
  },
  "NL226": {
    "name_latin" : "Arnhem/Nijmegen",
    "nuts_name" : "Arnhem/Nijmegen",
    "name_ascii" : "Arnhem/Nijmegen",
    "name_html" : "Arnhem/Nijmegen"
  },
  "NL321": {
    "name_latin" : "Kop van Noord-Holland",
    "nuts_name" : "Kop van Noord-Holland",
    "name_ascii" : "Kop Van Noord-Holland",
    "name_html" : "Kop Van Noord-Holland"
  },
  "NL337": {
    "name_latin" : "Agglomeratie Leiden en Bollenstreek",
    "nuts_name" : "Agglomeratie Leiden en Bollenstreek",
    "name_ascii" : "Agglomeratie Leiden en Bollenstreek",
    "name_html" : "Agglomeratie Leiden en Bollenstreek"
  },
  "NO061": {
    "name_latin" : "Sør-Trøndelag",
    "nuts_name" : "Sør-Trøndelag",
    "name_ascii" : "Sor-Trondelag",
    "name_html" : "S&#x00F8;r-Tr&#x00F8;ndelag"
  },
  "PL113": {
    "name_latin" : "Miasto Lódz",
    "nuts_name" : "Miasto Lódz",
    "name_ascii" : "Miasto Lodz",
    "name_html" : "Miasto L&#x00F3;dz"
  },
  "PL127": {
    "name_latin" : "Miasto Warszawa",
    "nuts_name" : "Miasto Warszawa",
    "name_ascii" : "Miasto Warszawa",
    "name_html" : "Miasto Warszawa"
  },
  "PL12E": {
    "name_latin" : "Siedlecki",
    "nuts_name" : "Siedlecki",
    "name_ascii" : "Siedlecki",
    "name_html" : "Siedlecki"
  },
  "PL213": {
    "name_latin" : "Miasto Kraków",
    "nuts_name" : "Miasto Kraków",
    "name_ascii" : "Miasto Krakow",
    "name_html" : "Miasto Krak&#x00F3;w"
  },
  "PL227": {
    "name_latin" : "Rybnicki",
    "nuts_name" : "Rybnicki",
    "name_ascii" : "Rybnicki",
    "name_html" : "Rybnicki"
  },
  "PL323": {
    "name_latin" : "Krosnienski",
    "nuts_name" : "Krosnienski",
    "name_ascii" : "Krosnienski",
    "name_html" : "Krosnienski"
  },
  "PL332": {
    "name_latin" : "Sandomiersko-jedrzejowski",
    "nuts_name" : "Sandomiersko-jedrzejowski",
    "name_ascii" : "Sandomiersko-jedrzejowski",
    "name_html" : "Sandomiersko-jedrzejowski"
  },
  "PL416": {
    "name_latin" : "Kaliski",
    "nuts_name" : "Kaliski",
    "name_ascii" : "Kaliski",
    "name_html" : "Kaliski"
  },
  "PL424": {
    "name_latin" : "Miasto Szczecin",
    "nuts_name" : "Miasto Szczecin",
    "name_ascii" : "Miasto Szczecin",
    "name_html" : "Miasto Szczecin"
  },
  "PL432": {
    "name_latin" : "Zielonogórski",
    "nuts_name" : "Zielonogórski",
    "name_ascii" : "Zielonogorski",
    "name_html" : "Zielonog&#x00F3;rski"
  },
  "PL516": {
    "name_latin" : "Legnicko-Glogowski",
    "nuts_name" : "Legnicko-Glogowski",
    "name_ascii" : "Legnicko-Glogowski",
    "name_html" : "Legnicko-Glogowski"
  },
  "PT16E": {
    "name_latin" : "Região de Coimbra",
    "nuts_name" : "Região de Coimbra",
    "name_ascii" : "Regiao de Coimbra",
    "name_html" : "Regi&#x00E3;o de Coimbra"
  },
  "PT16J": {
    "name_latin" : "Beiras e Serra da Estrela",
    "nuts_name" : "Beiras e Serra da Estrela",
    "name_ascii" : "Beiras e Serra Da Estrela",
    "name_html" : "Beiras e Serra Da Estrela"
  },
  "PT185": {
    "name_latin" : "Lezíria do Tejo",
    "nuts_name" : "Lezíria do Tejo",
    "name_ascii" : "Leziria do Tejo",
    "name_html" : "Lez&#x00ED;ria do Tejo"
  },
  "PT300": {
    "name_latin" : "Região Autónoma da Madeira",
    "nuts_name" : "Região Autónoma da Madeira",
    "name_ascii" : "Regiao Autonoma da Madeira",
    "name_html" : "Regi&#x00E3;o Aut&#x00F3;noma da Madeira"
  },
  "RO211": {
    "name_latin" : "Bacau",
    "nuts_name" : "Bacau",
    "name_ascii" : "Bacau",
    "name_html" : "Bacau"
  },
  "RO226": {
    "name_latin" : "Vrancea",
    "nuts_name" : "Vrancea",
    "name_ascii" : "Vrancea",
    "name_html" : "Vrancea"
  },
  "RO312": {
    "name_latin" : "Calarasi",
    "nuts_name" : "Calarasi",
    "name_ascii" : "Calarasi",
    "name_html" : "Calarasi"
  },
  "RO317": {
    "name_latin" : "Teleorman",
    "nuts_name" : "Teleorman",
    "name_ascii" : "Teleorman",
    "name_html" : "Teleorman"
  },
  "SE231": {
    "name_latin" : "Hallands län",
    "nuts_name" : "Hallands län",
    "name_ascii" : "Hallands lan",
    "name_html" : "Hallands l&#x00E4;n"
  },
  "SE311": {
    "name_latin" : "Värmlands län",
    "nuts_name" : "Värmlands län",
    "name_ascii" : "Varmlands lan",
    "name_html" : "V&#x00E4;rmlands l&#x00E4;n"
  },
  "SE321": {
    "name_latin" : "Västernorrlands län",
    "nuts_name" : "Västernorrlands län",
    "name_ascii" : "Vasternorrlands lan",
    "name_html" : "V&#x00E4;sternorrlands l&#x00E4;n"
  },
  "SI037": {
    "name_latin" : "Jugovzhodna Slovenija",
    "nuts_name" : "Jugovzhodna Slovenija",
    "name_ascii" : "Jugovzhodna Slovenija",
    "name_html" : "Jugovzhodna Slovenija"
  },
  "SK022": {
    "name_latin" : "Trenciansky kraj",
    "nuts_name" : "Trenciansky kraj",
    "name_ascii" : "Trenciansky kraj",
    "name_html" : "Trenciansky kraj"
  },
  "SK032": {
    "name_latin" : "Banskobystrický kraj",
    "nuts_name" : "Banskobystrický kraj",
    "name_ascii" : "Banskobystricky kraj",
    "name_html" : "Banskobystrick&#x00FD; kraj"
  },
  "UKC21": {
    "name_latin" : "Northumberland",
    "nuts_name" : "Northumberland",
    "name_ascii" : "Northumberland",
    "name_html" : "Northumberland"
  },
  "UKD12": {
    "name_latin" : "East Cumbria",
    "nuts_name" : "East Cumbria",
    "name_ascii" : "East Cumbria",
    "name_html" : "East Cumbria"
  },
  "UKD35": {
    "name_latin" : "Greater Manchester South East",
    "nuts_name" : "Greater Manchester South East",
    "name_ascii" : "Greater Manchester South East",
    "name_html" : "Greater Manchester South East"
  },
  "UKD46": {
    "name_latin" : "East Lancashire",
    "nuts_name" : "East Lancashire",
    "name_ascii" : "East Lancashire",
    "name_html" : "East Lancashire"
  },
  "UKE41": {
    "name_latin" : "Bradford",
    "nuts_name" : "Bradford",
    "name_ascii" : "Bradford",
    "name_html" : "Bradford"
  },
  "UKF15": {
    "name_latin" : "North Nottinghamshire",
    "nuts_name" : "North Nottinghamshire",
    "name_ascii" : "North Nottinghamshire",
    "name_html" : "North Nottinghamshire"
  },
  "UKF24": {
    "name_latin" : "West Northamptonshire",
    "nuts_name" : "West Northamptonshire",
    "name_ascii" : "West Northamptonshire",
    "name_html" : "West Northamptonshire"
  },
  "UKG39": {
    "name_latin" : "Wolverhampton",
    "nuts_name" : "Wolverhampton",
    "name_ascii" : "Wolverhampton",
    "name_html" : "Wolverhampton"
  },
  "UKH15": {
    "name_latin" : "Norwich & East Norfolk",
    "nuts_name" : "Norwich & East Norfolk",
    "name_ascii" : "Norwich & East Norfolk",
    "name_html" : "Norwich & East Norfolk"
  },
  "UKH24": {
    "name_latin" : "Bedford",
    "nuts_name" : "Bedford",
    "name_ascii" : "Bedford",
    "name_html" : "Bedford"
  },
  "UKH32": {
    "name_latin" : "Thurrock",
    "nuts_name" : "Thurrock",
    "name_ascii" : "Thurrock",
    "name_html" : "Thurrock"
  },
  "UKH36": {
    "name_latin" : "Heart of Essex",
    "nuts_name" : "Heart of Essex",
    "name_ascii" : "Heart of Essex",
    "name_html" : "Heart of Essex"
  },
  "UKI32": {
    "name_latin" : "Westminster",
    "nuts_name" : "Westminster",
    "name_ascii" : "Westminster",
    "name_html" : "Westminster"
  },
  "UKI75": {
    "name_latin" : "Hounslow & Richmond upon Thames",
    "nuts_name" : "Hounslow & Richmond upon Thames",
    "name_ascii" : "Hounslow & Richmond Upon Thames",
    "name_html" : "Hounslow & Richmond Upon Thames"
  },
  "UKJ21": {
    "name_latin" : "Brighton and Hove",
    "nuts_name" : "Brighton and Hove",
    "name_ascii" : "Brighton and Hove",
    "name_html" : "Brighton and Hove"
  },
  "UKJ28": {
    "name_latin" : "West Sussex (North East)",
    "nuts_name" : "West Sussex (North East)",
    "name_ascii" : "West Sussex (North East)",
    "name_html" : "West Sussex (North East)"
  },
  "UKJ43": {
    "name_latin" : "Kent Thames Gateway",
    "nuts_name" : "Kent Thames Gateway",
    "name_ascii" : "Kent Thames Gateway",
    "name_html" : "Kent Thames Gateway"
  },
  "UKK30": {
    "name_latin" : "Cornwall and Isles of Scilly",
    "nuts_name" : "Cornwall and Isles of Scilly",
    "name_ascii" : "Cornwall and Isles of Scilly",
    "name_html" : "Cornwall and Isles of Scilly"
  },
  "UKL16": {
    "name_latin" : "Gwent Valleys",
    "nuts_name" : "Gwent Valleys",
    "name_ascii" : "Gwent Valleys",
    "name_html" : "Gwent Valleys"
  },
  "UKL21": {
    "name_latin" : "Monmouthshire and Newport",
    "nuts_name" : "Monmouthshire and Newport",
    "name_ascii" : "Monmouthshire and Newport",
    "name_html" : "Monmouthshire and Newport"
  },
  "UKM22": {
    "name_latin" : "Clackmannanshire and Fife",
    "nuts_name" : "Clackmannanshire and Fife",
    "name_ascii" : "Clackmannanshire and Fife",
    "name_html" : "Clackmannanshire and Fife"
  },
  "UKM33": {
    "name_latin" : "East Ayrshire and North Ayrshire mainland",
    "nuts_name" : "East Ayrshire and North Ayrshire mainland",
    "name_ascii" : "East Ayrshire and North Ayrshire Mainland",
    "name_html" : "East Ayrshire and North Ayrshire Mainland"
  },
  "UKM61": {
    "name_latin" : "Caithness & Sutherland and Ross & Cromarty",
    "nuts_name" : "Caithness & Sutherland and Ross & Cromarty",
    "name_ascii" : "Caithness & Sutherland and Ross & Cromarty",
    "name_html" : "Caithness & Sutherland and Ross & Cromarty"
  },
  "UKN05": {
    "name_latin" : "West and South of Northern Ireland",
    "nuts_name" : "West and South of Northern Ireland",
    "name_ascii" : "West and South of Northern Ireland",
    "name_html" : "West and South of Northern Ireland"
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
        domainSort: AppData.indicatorMetadata[name].domainsort,
        group: AppData.indicatorMetadata[name].group,
        groupSort: AppData.indicatorMetadata[name].groupsort
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

    if (AppData.indicatorMetadata[indicator.name].isvalid) {
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

    if (AppData.indicatorMetadata[indicator.name].isvalid) {
      AppData.groupDictionaryIndicators[indicator.group].push(AppData.indicatorMetadata[indicator.name]);
    }
  }

  AppData.groups = groups;

};

AppData.PopulateArraysAndDictionaries();

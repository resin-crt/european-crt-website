
import { AppState } from './source/AppState.js';
import { BaseMapLayers} from './source/BaseMapLayers.js';
import { MapLayers} from "./source/MapLayers.js";
import { Spatial } from './source/Spatial.js';

import { spinnerViewModel } from './source/ViewModels/spinnerViewModel.js';
import { radarContainerViewModel } from './source/ViewModels/radarContainerViewModel.js';
import { sidebarTabsViewModel } from './source/ViewModels/sidebarTabsViewModel.js';
import { toggleBaseMapViewModel } from './source/ViewModels/toggleBaseMapViewModel.js';
import { overviewInfoViewModel } from './source/ViewModels/overviewInfoViewModel.js';
import { radarDiagramModalViewModel } from './source/ViewModels/radarDiagramModalViewModel.js';

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


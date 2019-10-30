/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"medhachaitanya/MAGCognitiveAPIs/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
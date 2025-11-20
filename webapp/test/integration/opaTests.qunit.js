/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demoproject1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});

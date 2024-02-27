/*global QUnit*/

sap.ui.define([
	"hmel/controller/login.controller"
], function (Controller) {
	"use strict";

	QUnit.module("login Controller");

	QUnit.test("I should test the login controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

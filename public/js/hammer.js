﻿'use strict';

var hammerControllers = angular.module('hammerControllers', ['ngRoute', 'app.components']);
hammerControllers.controller('abilityCtrl', function ($scope, $http, $routeParams, Ability, Event, Operation, Modifier) {
	$scope.ability = new Ability();

	$scope.getType = function(attr) {
		return typeof $scope.ability[attr];
	};

	$scope.addEvent = function() {
		$scope.ability._events.push(new Event());
	};

	$scope.addModifier = function() {
		$scope.ability._modifiers.push(new Modifier());
	};

	console.log($scope.ability);
});
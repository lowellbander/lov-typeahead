angular.module('typeaheadDirectiveSample', ['lovTypeahead'])
  .controller('Ctrl', function($scope) {
	  $scope.country = {id:null, name:"No country selected"};
  });
var myApp = angular.module("myApp");

myApp.factory("User", ["$resource", "$http", function($resource, $http) {
  return $resource("/api/:id", { id: "@_id" },
    {
      'create':  { method: 'POST' },
      'showAll':    { method: 'GET', isArray: true },
      'update':  { method: 'PUT' },
      'delete': { method: 'DELETE' }
    }
  );
}]);

angular.module('portainer.app')
.factory('RegistryTags', ['$resource', 'API_ENDPOINT_REGISTRIES', function RegistryTagsFactory($resource, API_ENDPOINT_REGISTRIES) {
  'use strict';
  return $resource(API_ENDPOINT_REGISTRIES + '/:id/v2/:repository/tags/list', {}, {
    get: { method: 'GET', params: { id: '@id', repository: '@repository' } }
  });
}]);
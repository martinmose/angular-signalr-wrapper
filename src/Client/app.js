angular.module('app.servicesModule', []);
angular.module('app.interceptorsModule', []);
angular.module('app.filtersModule', []);
angular.module('app.directivesModule', []);
angular.module('app.controllersModule', []);
angular.module('app.constantsModule', []);

var angularModules = [];
var thirdPartyModules = [];
var siteModules = [
    'app.servicesModule',
    'app.interceptorsModule',
    'app.filtersModule',
    'app.directivesModule',
    'app.controllersModule',
    'app.constantsModule'
];

var allModules = angularModules.concat(thirdPartyModules).concat(siteModules);

angular.module('app', allModules, [function() {

}]);
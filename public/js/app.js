/**
 * Created by dhanalakshmi on 12-01-2017.
 */
var billApp = angular.module('myApp', ['ui.router','angular.chosen']);
billApp.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('application', {
            url: "/application",
            templateUrl: 'template/app.html'
        })
        .state('application.client', {
            url: "/client",
            templateUrl: 'template/client.html',
            controller:'clientCtrl'
        })
        .state('application.product', {
            url: "/product",
            templateUrl: 'template/product.html',
            controller:'productCtrl'
        })
        .state('application.invoice', {
            url: "/invoice",
            templateUrl: 'template/Invoice.html',
            controller:'invoiceCtrl'
        })
        .state('application.settings', {
            url: "/settings",
            templateUrl: 'template/settings.html'
        })
    $urlRouterProvider.otherwise("/application");
})
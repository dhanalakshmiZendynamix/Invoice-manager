/**
 * Created by dhanalakshmi on 12-01-2017.
 */
var billApp = angular.module('myApp', ['ui.router','angular.chosen',,'angularFromUI','angularEditFromUI']);
billApp.run(function(companyService,clientService,productService){
    companyService.getCompanyJsonConfig().then(function (resultDetails) {
        companyService. setCompanyFromConfig(resultDetails.data)
        getClientJsonConfig();
        getProductJsonConfig();

    }, function error(errResponse) {
        console.log("cannot get settings config")
    })

    function getClientJsonConfig(){
        clientService.getClientJsonConfig().then(function (resultDetails) {
            clientService. setClientFromConfig(resultDetails.data)
            console.log(clientService.getClientFromConfig())

        }, function error(errResponse) {
            console.log("cannot get settings config")
        })

    }

    function getProductJsonConfig(){
        productService.getProductJsonConfig().then(function (resultDetails) {
            productService. setProductFromConfig(resultDetails.data)
            console.log(productService.getProductFromConfig())
        }, function error(errResponse) {
            console.log("cannot get settings config")
        })

    }
});
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
angular.module('myApp').controller('productsCtrl', function($scope, $stateParams, productsSrvc) {
    // if ( $stateParams.id === 'shoes' ) {
    //     productsSrvc.getData('shoes').then(function(response) {
    //         $scope.productData = response.data;
    //     })
    // } else if ( $stateParams.id === 'socks' ) {
    //     productsSrvc.getData('socks').then(function(response) {
    //         $scope.productData = response.data;
    //     })
    // }

    productsSrvc.getData($stateParams.id).then(response => {
        $scope.productData = response;
    });
})
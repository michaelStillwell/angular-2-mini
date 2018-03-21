angular.module('myApp').service('productsSrvc', function($http) {
    // this.getShoeData = function() {
    //     return $http({
    //         method: 'GET',
    //         url: 'https://practiceapi.devmountain.com/products?category=shoes'
    //     })
    // };

    // this.getSockData = function() {
    //     return $http({
    //         method: 'GET',
    //         url: 'https://practiceapi.devmountain.com/products?category=socks'
    //     })
    // }; 

    this.getData = function(arg) {
        return $http({
            method: 'GET',
            url: `https://practiceapi.devmountain.com/products?category=${arg}`
        }).then(response => {
        // console.log('RESPONSE: ', response);
        return response.data;
    })};
});
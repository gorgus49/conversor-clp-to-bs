
//controlador para pesos chilenos y bolivares venezolanos

app.controller('converterCtrl', function($scope, $http) {
    $http.get("http://mindicador.cl/api")
    .then(function(response) {
        //First function handles success
       $scope.dolarintercambio=response.data.dolar_intercambio.valor;
       $scope.dolarobservado=response.data.dolar.valor;
    }, function(response) {
        //Second function handles error
       console.log('Error al consumir la API!');;
    });
   $http.get("https://s3.amazonaws.com/dolartoday/data.json")
    .then(function(response) {
        //First function handles success
       $scope.dolarve=response.data.USD.dolartoday;
    }, function(response) {
        //Second function handles error
        console.log('Error al consumir la API!');
    });
});
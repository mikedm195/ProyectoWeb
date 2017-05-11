function login($scope, $http) {  
    $scope.formData = {};

    $scope.login = function (id) {    
       $http.post(`/users/verifyLogin`, $scope.formData)
        .success(function(data) {
            window.location.href = "/metas";            
        })
    }    
}
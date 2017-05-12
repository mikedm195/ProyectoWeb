function metasController($scope, $http) {  
    $scope.formData = {};

    $scope.deleteP = function (id) {    
        $http({
            url: '/metas',
            method: 'DELETE',
            data: {
                id: id
            },
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        }).then(function(res) {
            console.log(res.data);
        }, function(error) {
            console.log(error);
        });        
    }    
    $scope.editP = function(id) {
        console.log("ID Meta "+ id);
        window.location.href = `/metas/editarMeta/${id}`;
    }
    $scope.hola = function(id,status){                
        $http.put(`/metas/editarStatus/${id}`,{ status: (status ? '0' : '1') })                
        .success(function(data) {
            window.location.href = "/metas";            
        })        
    }
}
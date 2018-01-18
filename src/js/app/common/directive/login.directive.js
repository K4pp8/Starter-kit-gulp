commonapp.directive('loginCustom', function() {
    
    function link(scope, element, attrs) {

        var htmlToRender =  '<div class="loginPanel" style="margin: 40px 0;text-align: center;">'+
                                '<strong>Login</strong> <br>'+
                                '<br> User: <input type="text" ng-model="'+ attrs.user +'">'+
                                '<br> Pasw: <input type="password" ng-model="'+ attrs.passw +'">'+
                                '<br> <br>'+
                                '<input type="button" ng-click="'+ attrs.clickwrap +'" value="Login" />'+
                            '</div> ';
       
                            
        element.html( htmlToRender );
    }

    var controller = ['$scope', function ($scope) {
        
        function init() {
            $scope.items = angular.copy($scope.datasource);
        }

        init();

        $scope.addItem = function () {
            $scope.add();

            //Add new customer to directive scope
            $scope.items.push({
                name: 'New Directive Controller Item'
            });
        };
    }];

    return { link: link,  controller: controller, restrict: 'E' };
});

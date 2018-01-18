commonapp.factory('RemoteFactory', [ '$http', 'UtilThings' , function( $http, UtilThings ){
	
    var factoryToReturn = {};

    var customerId = "";
    var token = "";


	factoryToReturn.doPost = function( url, data, successCB, errorCB ){
        
        $http({
            url: url,
            method: "POST",
            headers: {'content-type': 'application/json'},
            data: data
        })
        .then(function(response){

            successCB( response.data );

        }, function(error){ console.log(error);  errorCB(error); });

    }; 
    factoryToReturn.doPostWithAuthentication = function( url, data, successCB, errorCB ){
        
        // Aggiungo i token di autenticazione ai parametri 
        data.Token = token;

        var promise = $http({
            url: url,
            method: "POST",
            headers: {'content-type': 'application/json'},
            data: data
        }).then( function(response){

            successCB( response.data );

        },  function(error){   console.log(error);   errorCB(error);  } );

        return promise;

    }; 
    
    /*************************************************************************/
    /* LOGIN *****************************************************************/

    //Medoto che dato la username e la password restituisce un token
	factoryToReturn.doLogin = function( user, pasw, success, error ){
        
        var dataToPost = {   
            "Username":  user, 
            "Password":  UtilThings.getHashedString(pasw) //Attuanmente il server vuole la password con sha1
        };
       
        factoryToReturn.doPost( RES.urlServices.getLogin , dataToPost, function(response){

            token  = response.Token;
            customerId = response.CustomerId;
            console.log(token);
            success(response);
                
        },function( error ){ error( error ); } );
    }; 

    //Medoto che ritorna true se l'utente è loggato altrimenti false
	factoryToReturn.isLogged = function(){
        return ( token != "" && customerId != "");
    }; 

    //Medoto che ritorna true se l'utente è loggato altrimenti false
	// factoryToReturn.getToken = function(){
    //     return token;
    // }; 

    //Medoto che ritorna true se l'utente è loggato altrimenti false
	factoryToReturn.getcustomerId = function(){
        return customerId;
    }; 

    factoryToReturn.injectIdAndToken = function(customerIdParam, tokenParam){
        customerId = customerIdParam;
        token = tokenParam;
    };

    /* LOGIN end *************************************************************/
    /*************************************************************************/

	return factoryToReturn;

}]);
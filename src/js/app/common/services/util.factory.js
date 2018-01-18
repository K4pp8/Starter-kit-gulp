commonapp.factory('UtilThings', function(){
	
	var factoryToReturn = {};
	
	factoryToReturn.getHashedString = function( stringToHash ){
        
        var shaObj = new jsSHA("SHA-1", "TEXT");
        shaObj.update( stringToHash );
        var paswHashed = shaObj.getHash("HEX");
        return paswHashed.toUpperCase();
    }; 

	return factoryToReturn;
});
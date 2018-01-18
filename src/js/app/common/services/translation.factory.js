commonapp.factory('translationFactory',  function(){
	
    var factoryToReturn = {};

	factoryToReturn.translate = function( input ){
        
        if( RES || LANG || input ){
            var lang = LANG.getlang(RES.common.lang);
            
            if( lang[input] ){
                return lang[input];
            }
        }

        console.log( '[translate] Traduzione: "' + input + '" non trovata'  );

        //Inizializzo il valore di ritorno allla stringa passata
        return input;
    }; 

	return factoryToReturn;
});
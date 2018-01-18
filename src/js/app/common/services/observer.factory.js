commonapp.factory('genericObserver', function(){
	
    var factoryToReturn = {};
    var eventList = {};
	
	factoryToReturn.subsribe = function( eventName, callback ){
        
        if( eventList[eventName] ){
            eventList[eventName] = [];
        }
        eventList[eventName].push(callback);

    }; 

    factoryToReturn.fire = function( eventName, data ){
        
        if( eventList[eventName] ){
            
        }else{
            console.log('[genericObserver] ' + eventName + ' - Non esistono funzioni in ascolto');
        }
    }; 

	return factoryToReturn;
});
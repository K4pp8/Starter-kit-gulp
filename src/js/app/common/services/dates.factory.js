commonapp.factory('DateUtil', [function () {
    
    var factoryToReturn = {};

    // Funzione che restituisce una data in formato stringa per il server
    factoryToReturn.getStringDataForServer = function (data) {
        return moment(data).format('YYYY/MM/DD HH:mm:ss');
    };

    factoryToReturn.ExpiryDayFromNow = function(date) {
        var now = new Date();
        var dateExpiry = new Date(date); 
        var timeDiff = dateExpiry.getTime() - now.getTime();
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        return diffDays;
    }  ;

    factoryToReturn.now = function(){
        return new Date();
    };

    factoryToReturn.dateForServer = function( date ) {

        //return date.UTC(); 
        return date; 
    };

    factoryToReturn.diff2dates = function( date1, date2 ) {
        //Calcolo un giorni in milisecondi
        var one_day = 1000*60*60*24;
      
        // Converto i valori in millisecondi
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();
      
        // Calcolo la divverenza in millisecondi
        var difference_ms = date2_ms - date1_ms;
          
        // ritorno i giorni di differenza
        return Math.round(difference_ms/one_day); 
      };

    return factoryToReturn;

}]);
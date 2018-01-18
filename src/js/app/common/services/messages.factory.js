commonapp.factory('Messages', [ '$ngConfirm', 'toastr', function ( $ngConfirm, toastr ) {
    
    var ftr = {};

    /**
     * 
     * @param {*} options Oggetti di opzioni pper il messaggio
     * @param {*} okFn funzione di chiusura su conferma
     * @param {*} closeFn funzione di chiusura su cancella
     */
    ftr.conferm = function (options, okFn, closeFn) {
      
        // the options are
        // options.title
        // options.message
        // options.close
        // options.ok
        // options.okClass

        $ngConfirm({

            title: options.title || "",
            content: options.message || "",
           
            buttons: {
                
                close: {
                    text: options.close || "cancel",
                    //btnClass: 'btn-blue',
                    action: function(scope, button){
                        closeFn();
                    }
                },
                ok: {
                    text: options.ok || "ok",
                    btnClass: options.okClass || 'btn-success',
                    action: function(scope, button){
                        okFn();
                    }
                }
            }
        });
    };

    ftr.doubleAction = function (options, okFn, secondaryOkFn, closeFn) {
      
        // the options are
        // options.title
        // options.message
        // options.close
        // options.ok
        // options.okClass        
        // options.okSecondary
        // options.okSecondaryClass

        $ngConfirm({

            title: options.title || "",
            content: options.message || "",
           
            buttons: {
                
                close: {
                    text: options.close || "cancel",
                    //btnClass: 'btn-blue',
                    action: function(scope, button){
                        closeFn();
                    }
                },
                ok: {
                    text: options.ok || "ok",
                    btnClass: options.okClass || 'btn-success',
                    action: function(scope, button){
                        okFn();
                    }
                },
                ok2: {
                    text: options.okSecondary || "secondary",
                    btnClass: options.okSecondaryClass || 'btn-success',
                    action: function(scope, button){
                        secondaryOkFn();
                    }
                }
            }
        });
    };

    /**
     * Componete che usa toastr per fa mandare messaggi ref. https://github.com/Foxandxss/angular-toastr
     * @param {*} message stringa del messaggio
     * @param {*} type tipo del messaggio [ puo essere null ]
     */
    ftr.simple = function (message, type) {

        var functionToCall = 'info';

        // controllo che sia un tipo esistente e poi lo assegno
        if( type == 'success' ||  type == 'info' ||  type == 'error' ||  type == 'warning'  ){
            functionToCall = type;
        }

        //TODO devo evitare i Duplicati

        //Mi stupisco sul fatto che funzioni sta roba. Non so se è un mageggio o fighissimo
        var toast = toastr[functionToCall]( message );
        
        return toast;
    };

    return ftr;
}]);
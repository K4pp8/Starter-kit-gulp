// File di variabili globali dell'applicazione
var LANG = (function(){

    var traduzioni = {};

    if(LANG){
        traduzioni = LANG;
    }

    traduzioni = {
        'it':{
            'User' : 'User',
            'Password' : 'Password',
            'Id': 'Id',
            'Nome':'Nome',
            'Cognome':'Cognome',
            'Telefono':'Telefono',
            'Mobile':'Mobile',
            'Fax':'Fax',
            'Indirizzo':'Indirizzo',
            'Email':'Email',
            'Sms':'Sms',
            'Descrizione':'Descrizione',
            'Note':'Note',
            
            'Login':'Login',
            'Cerca':'Cerca',
            'Aggiungi' : 'Aggiungi',
            'Modifica': 'Modifica',
            'Completa': 'Completa',
            'Ripeti':'Ripeti',
            'Cancella' : 'Cancella',
            'Elimina':'Elimina',
            'Salva':'Salva',
            'Chiudi':'Chiudi',
            'Dettagli':'Dettagli',
            'Tipo':'Tipo',
            'Attivo':'Attivo',

            'Stato':'Stato',
            'Avvisi' : 'Avvisi',
            'Avviso' : 'Avviso',
            'Targa': 'Targa',
            'Mezzi':'Mezzi',
            'Utilizzatori': 'Utilizzatori',
            'Clienti':'Clienti',
            'Cliente':'Cliente',
            'Contatti': 'Contatti',
            'Contatti_Cliente':'Contatti Cliente',
            'mezzi':'mezzi',
            'mezzo':'mezzo',
            'Km':'Km',
            'Giorni':'Giorni',
            'sett.':'sett.',
            'mese':'mese',
            'anno':'anno',
            
            'campo_obbligatorio' : 'Campo obbligatorio',
            'connection_error' : 'Errore di connessione al server. Riprovare più tardi.',
            'Attenzione' : 'Attenzione',
            'Vuoi_cancellare':'Vuoi veramente eliminare',
            'Vuoi_completare': 'Vuoi completare',
            'almeno_un_referente':'Ci deve essere almeno un referente',

            'Manutenzioni': 'Manutenzioni',
            'manutenzione': 'manutenzione',
            'Referenti': 'Referenti',
            'referente': 'referente',
            'Modello - Km': 'Modello - Km',
            'Km Restanti' : 'Km Restanti',
            'Giorni Restanti' : 'Giorni Restanti',
            'Tra_Km':'Tra Km',
            'Tra_Giorni':'Tra Giorni',

            'Controllo emissioni': 'Controllo emissioni',
            'Tagliando': 'Tagliando',
            'Revisione': 'Revisione',
            'Freni': 'Freni',
            'Filtri aria': 'Filtri aria',
            'Sospensioni': 'Sospensioni',
            'Olio': 'Olio',
            'Manutenzione': 'Manutenzione',
            'Distribuzione': 'Distribuzione',
            'Gomme': 'Gomme'

        },
        'en':{
            'User' : 'User',
            'Password' : 'Password',
            'Id': 'Id',
            'Nome':'Name',
            'Cognome':'Last Name',
            'Telefono':'Phone',
            'Mobile':'Mobile',
            'Fax':'Fax',
            'Indirizzo':'Address',
            'Email':'Email',
            'Sms':'Sms',
            'Descrizione':'Description',
            'Note':'Notes',
            
            'Login':'Login',
            'Cerca':'Search',
            'Aggiungi' : 'Add',
            'Modifica': 'Edit',
            'Completa': 'Complete',
            'Ripeti':'Repeat',
            'Cancella' : 'Delete',
            'Elimina':'Delete',
            'Salva':'Save',
            'Chiudi':'Close',
            'Dettagli':'Details',
            'Tipo':'Type',
            'Attivo':'Active',

            'Stato':'Status',
            'Avvisi' : 'Warnings',
            'Avviso' : 'Notice',
            'Targa': 'Targa',
            'Mezzi': 'Vehicles',
            'Utilizzatori': 'Users',
            'Clienti':'Customers',
            'Cliente':'Customer',
            'Contatti': 'Contacts',
            'Contatti_Cliente':'Contacts customer',
            'mezzi':'vehicles',
            'mezzo':'vehicle',
            'Km':'Km',
            'Giorni':'Day',
            'sett.':'week',
            'mese':'month',
            'anno':'year',
            
            'campo_obbligatorio' : 'Mandatory Field',
            'connection_error' : 'Error connecting to server. Please try later.',
            'Attenzione' : 'Attention',
            'Vuoi_cancellare':'Do you want to delet',
            'Vuoi_completare': 'Do you want to complete',
            'almeno_un_referente':'Ci deve essere almeno un referente',

            'Manutenzioni': 'Maintenances',
            'manutenzione': 'maintenance',
            'Referenti': 'Referents',
            'referente': 'referent',
            'Modello - Km': 'Model - Km',
            'Km Restanti' : 'Remaining Km',
            'Giorni Restanti' : 'Remaining Day',
            'Tra_Km':'Between Km',
            'Tra_Giorni':'Between Giorni',

            'Controllo emissioni': 'Emission',
            'Tagliando': 'Cut',
            'Revisione': 'Revision',
            'Freni': 'Brakes',
            'Filtri aria': 'Air Filters',
            'Sospensioni': 'Sospensions',
            'Olio': 'Oil',
            'Manutenzione': 'Maintenance',
            'Distribuzione': 'Distribution',
            'Gomme': 'Tires'
        },
        'fr':{
            'Manutenzioni': 'Manutenzioni'
        },
        'es':{
            'Manutenzioni': 'Manutenzioni'
        },
        'pt':{
            'Manutenzioni': 'Manutenzioni'
        }
    };

    traduzioni.getlang = function( langString ){
        
        switch(langString) {
            case 'it':
                return traduzioni.it;
            case 'en':
                return traduzioni.en;
            case 'fr':
                return traduzioni.fr;
            case 'es':
                return traduzioni.es;
            case 'pt':
                return traduzioni.pt;

            default:
                return traduzioni.it;
        }

    };

    return traduzioni;
})();
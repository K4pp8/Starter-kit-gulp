commonapp.directive('busyLoader', function() {
    
    /**
     * Directive fatta a manina che attaca un elemeto sul dom sopra il parent 
     * ( CHE DEVE ESSERE POSITION:RELATIVE )
     * 
     * Sarebbe opportuno fare una roba che si aggacia alle promise tipo http://cgross.github.io/angular-busy/demo/
     * 
     * Altre gafiche
     * https://codepen.io/aurer/pen/jEGbA
     * http://samherbert.net/svg-loaders/
     * https://www.cssdesignawards.com/blog/excellent-css-svg-loaders/165/
     */ 
   
    function link(scope, element, attrs) {

        var htmlToRender =  '<div style=" position: absolute; background: rgba(158, 158, 158, 0.46); top: 0; left: 0;  bottom: 0; right: 0; z-index: 1;">';
            htmlToRender += '<div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto;  max-width: 100%; max-height: 100%; overflow: hidden; width: 45px; height: 45px;">';
            htmlToRender += '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">';
            htmlToRender += '<rect x="0" y="5.88889" width="4" height="19.2222" fill="#333">';
            htmlToRender += '<animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>';
            htmlToRender += '<animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>';
            htmlToRender += '</rect>';
            htmlToRender += '<rect x="10" y="9.88889" width="4" height="11.2222" fill="#333">';
            htmlToRender += '<animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>';
            htmlToRender += '<animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>';
            htmlToRender += '</rect>';
            htmlToRender += '<rect x="20" y="12.1111" width="4" height="6.77778" fill="#333">';
            htmlToRender += '<animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>';
            htmlToRender += '<animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>';
            htmlToRender += '</rect>';
            htmlToRender += '</svg>';
            htmlToRender += '</div> </div>';

            element.html( htmlToRender );
    }

    return { link: link, restrict: 'E' };
});

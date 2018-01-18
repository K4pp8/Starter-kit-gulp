commonapp.directive('svgIcon', function() {
    
    function link(scope, element, attrs) {

        var colorFIll =  attrs.fill || "#FFFFFF";
        var dataVector = attrs.d || "M32.56,25.52c0,3.89-3.15,7.04-7.04,7.04H9.48c-3.89,0-7.04-3.15-7.04-7.04V9.48c0-3.89,3.15-7.04,7.04-7.04 h16.05c3.89,0,7.04,3.15,7.04,7.04V25.52z";
        var size = attrs.size;
      
        function path(icon, fillColor, size) {

            var html = "";
            if(attrs.size){
                html = '<svg viewBox="0 0 35 35" width="'+size+'px" height="'+size+'px">' + '<path fill="' + fillColor + '" d="' + icon + '"/>' + '</svg>';
            }else{
                html = '<svg viewBox="0 0 35 35">' + '<path fill="' + fillColor + '" d="' + icon + '"/>' + '</svg>';
            }

            return html;
        }

        if( attrs.res ){
            element.html( path(RES.common.svg[attrs.res ], colorFIll, size) );
        }else{
            element.html( path(attrs.d, colorFIll, size) );
        }
    }

    return { link: link, restrict: 'E' };
});

angular.module('rugelach-cookie-wrap', [])

    .service('rugelach', function(){

        return {
            setCookie: function (key, value, path, expir) {

                //keyless therefore no cookie to store
                if(!key) {
                    return;
                }

                // no given path? sit it as root
                if (!path) {
                    path = "/";
                }

                //expiration 1 year later if not defined
                //or if not defined correctly
                if (!expir || !angular.isDate(expir)) {
                    expir = new Date();
                    expir.setDate(expir.getDate() + 365);
                }

                //set date to utc string
                expir = expir.toUTCString();

                document.cookie =
                    key + '="' + value + '";' +
                        ' path=' + path + ';' +
                        ' expires=' + expir;
            },

            getCookie: function(key) {
                var cookie_ar = document.cookie.split(';');

                for(var i = 0 ; i < cookie_ar.length ; i++) {
                    var cookie = cookie_ar[i].trim();
                    if(cookie.indexOf(key) === 0){
                        return cookie.substring(key.length + 2, cookie.length - 1);
                    }
                }

                return undefined;
            },

            clearCookie: function(key, path) {
                var date = new Date();
                date.setDate(date.getDate() -1);
                document.cookie =
                    key + '=;path=' +
                    path + ';expires=' + date;
            }
        };
    })
;
Rugelach-Cookie-Wrapper
=======================

A more customizable angular cookie wrapper

At Indicative, we found the $cookieStore subpar and restricting (only to session cookies).  We've made this cookie wrapper to make cookies easy.


Integrating
===========
To begin, download the rugelach.js file.  Inject the 'rugelach-cookie-wrap' module into your app's module.  Wherever you need to use rugelach, inject the 'rugelach' service.  Like so:

	app.module('mapp', ['rugelach-cookie-wrap'])
		.controller('mycontroller', ['rugelach', function (rugelach){
		//call rugelach here.
		}])
	;

Setting Cookies
---------------
Setting a cookie is easy.  All you need to do is call `rugelach.setCookie(key, value, path(optional), expir(optional/date));` where the following parameters are:

* key: String - The key of the cookie key-value pair
* value: String - The value of the cookie key-value pair
* path: [Optional] String - The path to store the cookie on, if not defined store cookies on root path ('/').
* expir: [Optional] Date - Expiration date, if not defined or incorrectly defined, sets to a year from creation.

The following will work:

	rugelach.setCookie("type", "chocolateChip");
	
	rugelach.setCookie("type", "sugar", "/favoritecookies");
	
	rugelach.setCookie("type", "oatmeal", "/healthycookies", new Date());
	

Retrieving Cookies
-------------------
To retrieve a cookie call `rugelach.getCookie("mykey");` It will return either the value or undefined (if that key exprired or is unable to be found);

Clearing Cookies
----------------
To clear a cookie call `rugelach.getCookie("mykey", "mypath");`.  If you did not define a path, or set the path to the root, you can call `rugelach.getCookie("mykey");` instead.

Testing
-------
There is also a rugelach.spec.js included in the src files. Set this up with your karma runner to test simple setting and clearing cookies. Otherwise, continue to test your own code to make sure rugelach is working for you!


Email: jackie@indicative.com for further needs.

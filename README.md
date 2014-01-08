Rugelach-Cookie-Wrapper
=======================

A more customizable angular cookie wrapper

At Indicative, we found the $cookieStore subpar and restricting (only to session cookies).  We've made this cookie wrapper to make cookies easy.


Integrating
===========
To begin, download the rugelach.js file.  Inject the 'rugelach' module into your app's module.  Wherever you need to use rugelach, inject the 'rugelach' service.  Like so:

	app.module('mapp', ['rugelach'])
		.controller('mycontroller', ['rugelach', function (rugelach){
		//call rugelach here.
		}])
	;

Setting Cookies
---------------
Setting a cookie is easy.  All you need to do is call `rugelach.setCookie(key, value, [path], [expir]);` where the following parameters are:

* key: String - The key of the cookie key-value pair
* value: String - The value of the cookie key-value pair
* path: [Optional] String - The path to store the cookie on, if not defined store cookies on root path ('/').
* expir: [Optional] Date - Expiration date, if not defined or incorrectly defined, becomes a session cookie.

The following will work:

	rugelach.setCookie("type", "chocolateChip");
	
	rugelach.setCookie("type", "sugar", "/favoritecookies");
	
	rugelach.setCookie("type", "oatmeal", "/healthycookies", new Date());
	

Retrieving Cookies
-------------------
To retrieve a cookie call `rugelach.getCookie("mykey");` It will return either the value or undefined (if that key expired or is unable to be found);

Clearing Cookies
----------------
To clear a cookie call `rugelach.clearCookie("mykey", "mypath");`.  If you did not define a path, or set the path to the root, you can call `rugelach.clearCookie("mykey");` instead.

Testing
-------
There is also a rugelach.spec.js included in the src files. Set this up with your karma runner to test simple setting and clearing cookies. Otherwise, continue to test your own code to make sure rugelach is working for you!


Email: jackie@indicative.com for further needs.

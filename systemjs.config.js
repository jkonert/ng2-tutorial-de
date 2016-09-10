/**
 * SystemJS configuration for AngularJS2 Tutorial DE
 */
(function () {
    System.config({
        defaultJSExtensions: false,
        paths: {
            '@angular/*': 'node_modules/@angular/*'
        },
        map: {
            app        : 'app',
            'rxjs'       : 'node_modules/rxjs',
            'angular2-in-memory-web-api' : 'node_modules/angular2-in-memory-web-api'
        },
        packages: {
            'app'                              : {main: 'main.js'},
            'rxjs'                             : {main: 'index.js'},
            '@angular/core'                    : {main: 'index.js'},
            '@angular/http'                    : {main: 'index.js'},
            '@angular/router'                  : {main: 'index.js'},
            '@angular/router-deprecated'       : {main: 'index.js'},
            '@angular/common'                  : {main: 'index.js'},
            '@angular/compiler'                : {main: 'index.js'},
            '@angular/platform-browser'        : {main: 'index.js'},
            '@angular/platform-browser-dynamic': {main: 'index.js'},
            'angular2-in-memory-web-api'       : {main: 'index.js'}
        }
    });
})();

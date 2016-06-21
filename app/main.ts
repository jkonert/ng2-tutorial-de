/**
 * A bootstrapper for the browser loading app.component
 * @author Johannes Konert
 */
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { provide }    from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './services/in-memory-data/in-memory-data.service.ts';
import {AppComponent} from './components/app/app.component.ts';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: InMemoryDataService })     // in-mem server data
]);


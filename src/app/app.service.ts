import { Injectable } from '@angular/core';
import { HttpClientBase } from 'projects/ng-utils/src/public_api';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AppService extends HttpClientBase {
    constructor(
        private http: HttpClient) {
        super(http, environment.apiBaseUrl);
    }

    /**
     * Example
     */
    getExamples(): Observable<any[]> {
        return this.invoke('GET', 'api/exaples', {});
    }

}

import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

/**
 * Base abstract class for HTTP service
 */
export abstract class HttpClientBase {

    /**
     * Http base class contructor
     * @param httpClient Http client
     * @param apiBaseUrl Api base url
     */
    constructor(
        public httpClient: HttpClient,
        public apiBaseUrl: string) {
    }

    /**
     * Starts an HTTP invoke on remote service
     * @param method Method
     * @param partialUrl Partial url
     * @param body Body of request
     * @param responseType Response type
     * @returns observable response
     */
    protected invoke<TResponse>(method: string, partialUrl: string, body: object, responseType: any = null): Observable<TResponse> {

        /** Create observable source */
        const observableSource = new Subject<TResponse>();

        /** Declare observable */
        const observable: Observable<any> = observableSource.asObservable();

        /** Compose full url */
        const fullUrl = this.apiBaseUrl + partialUrl;

        /** Compose options */
        const options = {
            body: !body ? null : JSON.stringify(body),
            responseType: responseType || 'json'
        };

        /** Invoke remote method */
        this.httpClient.request(method, fullUrl, options).subscribe(

            /** Success
             * @param response response any
             */
            (response: any) => {
                /** Convert data to target type */
                const data: TResponse = response;

                /** Apply error on observable and complete */
                observableSource.next(data);
                observableSource.complete();
            },

            /** Error
             * @param error error
             */
            (error: any) => {

                /** Apply error on observable and complete */
                observableSource.error(error);
                observableSource.complete();
            }
        );

        /** Returns observable */
        return observable;
    }
}

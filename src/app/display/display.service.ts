import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DisplayService {

    private displayUrl = 'https://api.imgur.com/3/account/EmmmaG/images/0';

    constructor(private http: Http) {}

    getdata(): Promise<any[]> {
        let accessToken = '1914e1723a1084bbd906592fb7f79f253f94a9e0';
        let headers = new Headers({'Authorization': 'Bearer '+accessToken});
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.displayUrl, options)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg =  error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }


}
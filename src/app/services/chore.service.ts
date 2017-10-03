import { Injectable } from '@angular/core';
import { Chore } from '../shared/chore'
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class ChoreService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHTTPMsgService) { }


    getChores(): Observable<Chore[]> {
      return this.http.get(baseURL)
                      .map(res => { return this.processHTTPMsgService.extractData(res); });
    }
}

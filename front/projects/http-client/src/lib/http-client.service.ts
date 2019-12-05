import { Injectable } from '@angular/core';
import uuidv4 from 'uuid/v4';

@Injectable({ providedIn: 'root' })
export class HttpClientService {

  constructor() {
  }

  public async get(url: string) {
    const options = {
      method: 'GET',
      headers: {
        'X-Correlation-Id': uuidv4()
      }
    };

    const response = await fetch(url, options);
    const json = await response.json();

    return json;
  }
}

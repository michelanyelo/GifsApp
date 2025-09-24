import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@envs/environment';
import giphy from '../interfaces/giphy';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);

  constructor() {
    this.loadTredingGifs();
  }

  loadTredingGifs() {
    this.http.get<giphy>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20
      }
    });
  }
}

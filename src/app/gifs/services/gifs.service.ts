import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@envs/environment';
import {GiphyResponse} from '../interfaces/giphyItem';
import {Gif} from '../interfaces/gif.interface';
import {GifMapper} from '../mapper/gif.mapper';
import {map, Observable, tap} from 'rxjs';

const GIF_KEY = 'gifs';
const loadFromToLocalStorage = () => {
    const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
    return JSON.parse(gifsFromLocalStorage);

};

@Injectable({
    providedIn: 'root'
})
export class GifsService {
    private http = inject(HttpClient);

    trendingGifs = signal<Gif[]>([]);
    trendingGifsLoading = signal(true);
    searchHistory = signal<Record<string, Gif[]>>(loadFromToLocalStorage());
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

    constructor() {
        this.loadTredingGifs();
    }

    saveGifsToLocalStorage = effect(() => {
        const historyString = JSON.stringify(this.searchHistory());
        localStorage.setItem('gifs', historyString);
    });

    loadTredingGifs() {
        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20
            }
        }).subscribe((resp) => {
            const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
            this.trendingGifs.set(gifs);
            this.trendingGifsLoading.set(false);
        });
    }

    searchGifs(query: string): Observable<Gif[]> {
        return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20,
                q: query
            }
        }).pipe(
            map(({data}) =>
                data
            ),
            map((items) =>
                GifMapper.mapGiphyItemsToGifArray(items)
            ),
            tap((items) => {
                this.searchHistory.update((history) => ({
                    ...history,
                    [query.toLowerCase()]: items,
                }));
            })
        );
    }

    getHistoryGifs(query: string): Gif[] {
        return this.searchHistory()[query] ?? [];
    }
}



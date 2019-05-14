import { Injectable } from '@angular/core';
import { IRestaurant } from './restaurant.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class RestaurantService {

    private restaurantURL = 'http://localhost:8100/restaurants';

    constructor(private http: HttpClient) {}
    getRestaurantList(): Observable<IRestaurant[]> {
        return this.http.get<IRestaurant[]>(this.restaurantURL);
    }

    getRestaurantDetails(id): Observable<IRestaurant[]> {
        return this.http.get<IRestaurant[]>(`${this.restaurantURL}?productId=${id}`);
    }

}

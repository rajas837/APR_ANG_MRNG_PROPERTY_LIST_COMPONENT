import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from './property.model';
import { Observable } from 'rxjs';

@Injectable()
export class PropertyService {
    private propertyURL = 'http://localhost:8200/prop';
    constructor(private http: HttpClient) { }
    getPropertyList(): Observable<IProperty[]> {
        return this.http.get<IProperty[]>(this.propertyURL);
    }
}

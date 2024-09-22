import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherServicesService {

  constructor(private http: HttpClient) { }

  getWeatherByCity(city:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseurl+'/city/'+city,
    {
      headers : new HttpHeaders()
      .set(environment.XRapidAPIHostHeader , environment.XRapidAPIHostValue)
      .set(environment.ApiKeyHeader, environment.ApiKeyValue)
    });
  }
}

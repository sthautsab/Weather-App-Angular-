import { Component, OnInit } from '@angular/core';
import { WeatherServicesService } from './services/weatherservices.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather';
  weatherData?:WeatherData;
  cityName:string ="Kathmandu";
  constructor(private weatherService: WeatherServicesService){}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  getWeatherData(cityName:string){
    this.weatherService.getWeatherByCity(cityName).subscribe({
      next:(response) => {
        this.weatherData = response;
        console.log(response)}
    }
    );
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  autoResize(input : any){
    input.style.width = 'auto';

    input.style.width = input.scrollWidth + 'px';
  }

fToC(fahrenheit : number) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  return fToCel;
} 
}


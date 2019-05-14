import { Component, OnInit } from '@angular/core';
import { IRestaurant } from './restaurant.model';
import { RestaurantService } from './restaurant.service'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public restaurantList: IRestaurant[];
  public imageWidth: string;
  constructor(private restaurantService: RestaurantService) { 
    this.imageWidth = '380';
  }

  ngOnInit(): void {
    this.restaurantService.getRestaurantList()
      .subscribe((data) => {this.restaurantList = data;
      });
  }
}

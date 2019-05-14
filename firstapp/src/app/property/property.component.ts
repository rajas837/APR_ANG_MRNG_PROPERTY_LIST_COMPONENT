import { Component, OnInit } from '@angular/core';
import { PropertyService } from './property.service'
import { IProperty } from './property.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  public properties: IProperty[];
  public imageWidth: number;
  constructor(private propertyService: PropertyService) {
    this.imageWidth = 420;
   }

  ngOnInit(): void {
    this.propertyService.getPropertyList()
      .subscribe((data) => {this.properties = data;
      });
  }

}

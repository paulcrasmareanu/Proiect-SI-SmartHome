import { Component, OnInit } from '@angular/core';
import {SmartHomeServiceService} from '../services/smart-home-service.service';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {
  baseUrlBedroom = 'http://172.20.10.5:5000/view-house/bedroom';
  ledSwitch: any;
  isTurned: boolean;
  temperature: any;
  humidity: any;
  isToggle: boolean;
  constructor(private smartHomeService: SmartHomeServiceService) {
    setInterval(() => { this.getData(); }, 5000);
   }

  ngOnInit() {

    this.getData();
  }

  togglePannel() {
    this.isToggle = !this.isToggle;
  }

onClick() {
this.isTurned = !this.isTurned;
if (this.isTurned) {
  this.ledSwitch = {
    'led': '1'
  };

} else if (!this.isTurned) {
  this.ledSwitch = {
    'led': '0'
  };

}
this.smartHomeService.sendLedData(this.ledSwitch, this.baseUrlBedroom);
}

getData() {
  this.smartHomeService.giveData(this.baseUrlBedroom).subscribe(data  => {
    this.temperature = data['temperature'];
    this.humidity = data['humidity'];
    });

}
}

import { Component, OnInit } from '@angular/core';
import {SmartHomeServiceService} from '../services/smart-home-service.service';

@Component({
  selector: 'app-livingroom',
  templateUrl: './livingroom.component.html',
  styleUrls: ['./livingroom.component.css']
})
export class LivingroomComponent implements OnInit {
  baseUrlLivingRoom = 'http://172.20.10.5:5000/view-house/living-room';
  ledSwitch: any;
  isTurned: boolean;
  temperature: any;
  humidity: any;
  isToggle: boolean;

  constructor(private smartHomeService: SmartHomeServiceService) {
    setInterval(() => { this.getData(); }, 5000);
   }

  ngOnInit() {
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
    }
    if (!this.isTurned) {
      this.ledSwitch = {
        'led': '0'
      };
    }
      this.smartHomeService.sendLedData(this.ledSwitch, this.baseUrlLivingRoom);
    }

    getData() {
      this.smartHomeService.giveData(this.baseUrlLivingRoom).subscribe(data  => {
        this.temperature = data['temperature'];
        this.humidity = data['humidity'];
        });
    }

}

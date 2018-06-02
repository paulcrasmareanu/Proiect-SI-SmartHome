import { Component, OnInit } from '@angular/core';
import {SmartHomeServiceService} from '../services/smart-home-service.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})

export class KitchenComponent implements OnInit {
  baseUrlKitchen = 'http://172.20.10.5:5000/view-house/kitchen';
  ledSwitch: any;
  isLightTurned: boolean;
  isToggle: boolean;
  temperature: any;
  humidity: any;
  checkGas: any;

  constructor(private smartHomeService: SmartHomeServiceService) { 
    setInterval(() => { this.getData();
    console.log(this.checkGas);
    }, 3000);
  }

  ngOnInit() {
    this.getData();
  }

  togglePannel() {
    this.isToggle = !this.isToggle;
  }

  checkStatusGas() {
   if (this.checkGas === true) {
      return 'Warning! Gas detected!';
    }
    return 'None';
  }

  onClick()  {
    this.isLightTurned = !this.isLightTurned;
    if (this.isLightTurned) {
      this.ledSwitch = {
        'led': '1'
      };
    }
    if (!this.isLightTurned) {
      this.ledSwitch = {
        'led': '0'
      };
    }
      this.smartHomeService.sendLedData(this.ledSwitch, this.baseUrlKitchen);
    }

  getData() {
    this.smartHomeService.giveData(this.baseUrlKitchen).subscribe(data  => {
      this.temperature = data['temperature'];
      this.humidity = data['humidity'];
      this.checkGas = data ['gas'];
      });
  }

}

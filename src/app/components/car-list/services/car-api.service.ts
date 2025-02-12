import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CARS } from 'src/app/model/mock-cars';
import { MessageService } from './message/message.service';


@Injectable({
  providedIn: 'root'
})
export class CarApiService {


  constructor(private messageService: MessageService) { }

  getCars(): Observable<Car[]> {
    const cars = of(CARS );
    this.messageService.add('ciao, sono l\'car service')
    return cars;
  }

}

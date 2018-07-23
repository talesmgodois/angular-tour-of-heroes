import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(private messageService:MessageService) { }

    getHeroes():Observable<Hero[]>{
        this.messageService.add('hero service: fetched heroes');
        return of(HEROES);
    }
}

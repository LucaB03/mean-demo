import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  constructor() { }

  async greet() : Promise<string> {
    //const data = await fetch('http://api:3000/greeting');
    const data = await fetch('http://localhost:3000/greeting');
    return await data.text() ?? [];
  }
}

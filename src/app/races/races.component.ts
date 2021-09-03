import { Component, OnInit } from '@angular/core';

import { RaceModel } from '../models/race.model';
import { RaceService } from '../race.service';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  races: Array<RaceModel> = [];

  displayOpt: string = "black";

  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
    // this.races = this.raceService.list(); // ancienne version
    this.raceService.list().subscribe(
      racesFromService => (this.races = racesFromService)
    );
  }

  color(): void {
    if("black" == this.displayOpt){
      this.displayOpt = "red";
    } else {
      this.displayOpt = "black";
    }
  }
}

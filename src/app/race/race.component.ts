import { Component, OnInit, Input } from '@angular/core';

import { RaceModel } from '../models/race.model';

@Component({
  selector: 'pr-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  // se retouve dans la balise selector et est affecter
  @Input() raceModel: RaceModel;

  constructor() { }

  ngOnInit(): void {
  }

}
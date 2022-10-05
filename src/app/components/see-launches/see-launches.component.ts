import { Component, OnInit } from '@angular/core';
import { SpaceXApiService } from 'src/app/services/space-xapi.service';
import { Launch } from "../../models/launch";

@Component({
  selector: 'app-see-launches',
  templateUrl: './see-launches.component.html',
  styleUrls: ['./see-launches.component.css']
})
export class SeeLaunchesComponent implements OnInit {

  constructor(
    private spacexApiServ: SpaceXApiService
  ) { }

  launches: Launch[] = []

  ngOnInit(): void {
    this.getAllCapsule();
  }

  getAllCapsule(): void {
    this.spacexApiServ.getAllLaunches()
    .subscribe((response) => {
      this.launches = response;
    })
  }

}

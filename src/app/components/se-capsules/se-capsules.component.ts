import { Capsule } from './../../models/capsule';
import { SpaceXApiService } from './../../services/space-xapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-se-capsules',
  templateUrl: './se-capsules.component.html',
  styleUrls: ['./se-capsules.component.css']
})
export class SeCapsulesComponent implements OnInit {

  constructor(
    private spacexApiService: SpaceXApiService
  ) { }

  capsules: Capsule[] = []

  ngOnInit(): void {
    this.getAllCapsule();
  }

  getAllCapsule(): void {
    this.spacexApiService.getAllCapsule()
    .subscribe({
      next: (data) => this.capsules = data,
      error: (error) => console.error(error)
    })
  }

}

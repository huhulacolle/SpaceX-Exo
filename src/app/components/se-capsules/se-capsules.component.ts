import { Capsule } from './../../models/capsule';
import { SpaceXApiService } from './../../services/space-xapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-se-capsules',
  templateUrl: './se-capsules.component.html',
  styleUrls: ['./se-capsules.component.css']
})
export class SeCapsulesComponent implements OnInit {

  constructor(
    private spacexApiService: SpaceXApiService,
    private route : ActivatedRoute,
  ) { }

  capsules: Capsule[] = []

  ngOnInit(): void {
    const id: string | undefined = this.route.snapshot.params["id"];
    if (id == undefined) {
      this.getAllCapsule();
    }
    else {
      this.getDetailCaps(id as string);
    }

  }

  getAllCapsule(): void {
    this.spacexApiService.getAllCapsule()
    .subscribe({
      next: (data) => this.capsules = data,
      error: (error) => console.error(error)
    })
  }

  getDetailCaps(id: string): void {
    this.spacexApiService.getDetailCaps(id)
    .subscribe({
      next: (data) => this.capsules.push(data),
      error: (error) => console.error(error)
    })
  }

}

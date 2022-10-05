import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailCaps } from 'src/app/models/detail-caps';
import { SpaceXApiService } from 'src/app/services/space-xapi.service';

@Component({
  selector: 'app-detail-caps',
  templateUrl: './detail-caps.component.html',
  styleUrls: ['./detail-caps.component.css']
})
export class DetailCapsComponent implements OnInit {

  constructor(
    private spacexApiService: SpaceXApiService,
    private route : ActivatedRoute,

    ) { }
  capsule!: DetailCaps;
  ngOnInit(): void {
    this.getdetailcaps(this.route.snapshot.params["id"]);
  }

  getdetailcaps(id:string) {
    this.spacexApiService.getdetailcaps(id)
    .subscribe(
      (data) => {
        this.capsule = data;
        console.log(this.capsule);
      }
    )

  }

}

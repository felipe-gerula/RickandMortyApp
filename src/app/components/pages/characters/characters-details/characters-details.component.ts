import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/shared/interfaces/character.interface';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/shared/services/character.service';
import {Location} from "@angular/common";
import {take} from "rxjs/operators";
import { TrackHttpError } from 'src/app/shared/models/trackHttpError';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  character$ : Observable<Character | TrackHttpError>;

  constructor(private route : ActivatedRoute , private characterSvc : CharacterService, private location : Location) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id = params["id"];
      this.character$ = this.characterSvc.getDetails(id);
    });
  }

  onGoBack():void{
    this.location.back();
  }
  
}

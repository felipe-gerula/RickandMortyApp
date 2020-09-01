import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {RouterModule } from "@angular/router";
import {CharactersDetailsComponent} from "./characters-details/characters-details.component";
import {CharacterListComponent} from "./character-list/character-list.component";
import {CharacterComponent} from "./character.component";

const myComponents = [CharactersDetailsComponent,CharacterListComponent,CharacterComponent];

@NgModule({
  declarations: [...myComponents],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports: [...myComponents]
})
export class CharactersModule { }

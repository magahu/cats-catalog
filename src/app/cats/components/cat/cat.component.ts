import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Breed } from 'src/app/models/breed-response.models';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  @Input() breed: Breed = {
    weight : {imperial : '', metric: ''},
    id : '',
    name : '',
    cfa_url: '',
    vetstreet_url: '',
    vcahospitals_url: '',
    temperament: '',
    origin: '',
    country_codes: '',
    country_code: '',
    description: '',
    life_span: '',
    indoor: '',
    lap:  0,
    alt_names: '',
    adaptability:  0,
    affection_level:  0,
    child_friendly:  0,
    dog_friendly:  0,
    energy_level:  0,
    grooming:  0,
    health_issues:  0,
    intelligence:  0,
    shedding_level:  0,
    social_needs:  0,
    stranger_friendly:  0,
    vocalisation:  0,
    experimental:  0,
    hairless:  0,
    natural:  0,
    rare:  0,
    rex:  0,
    suppressed_tail:  0,
    short_legs:  0,
    wikipedia_url: '',
    hypoallergenic:  0,
    reference_image_id: '',
    image : {id : '', width : 0, height : 0, url : ''}
  }

  @Output() catId= new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  sendBreedId(id: string){
    this.catId.emit(id);
  }


}

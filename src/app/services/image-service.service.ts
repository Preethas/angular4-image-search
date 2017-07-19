import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ImageServiceService {
  private query:string;
  private API_URL:string = environment.PIXABAY_IMAGE_URL;
  private API_KEY:string = environment.PIXABAY_IMAGE_KEY;
  private URL:string = this.API_URL + this.API_KEY + '&q=';
  private perPage : string = "&per_page=10";

  constructor(private _http:Http){}

  getImage(query){
    return this._http.get(this.URL + query + this.perPage).map(res => res.json());
  }

}

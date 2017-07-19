import { Component, OnInit } from '@angular/core';
import {ImageServiceService} from '../../services/image-service.service';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  providers:[ImageServiceService]
})
export class ImageListComponent implements OnInit {
  search = "London";
  images: any[];
  searching:boolean = false;
  imagesFound:boolean = false;

  constructor(private _imageService:ImageServiceService,public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.searchImages();
  }

  handleSuccess(data){
    this.snackBar.open('Searching for', this.search, {
      duration: 2000,
    });
    this.imagesFound = true;
    this.images = data.hits;
  }

  handleError(error){
    console.log(error);
  }

  searchImages(){
    this.searching = true;
    return this._imageService.getImage(this.search).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }

}

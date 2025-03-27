import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImgService } from '../../../service/img.service';
import { Image } from '../../../../models/image.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-img-container',
  imports: [CommonModule],
  templateUrl: './img-container.component.html',
  styleUrl: './img-container.component.css'
})
export class ImgContainerComponent {
  @Input() images!:Image[];
  @Output() reloadImgs= new EventEmitter<void>;
Image: any;

  

  constructor(private imgService:ImgService){}


  delateImage(id:number){
    this.imgService.deleteImageByID(id)
    this.reloadImgs.emit()
  }


}

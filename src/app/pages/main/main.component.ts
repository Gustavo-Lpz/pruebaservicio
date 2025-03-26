import { Component } from '@angular/core';
import { AddButtonComponent } from "./component/add-button/add-button.component";
import { ImgContainerComponent } from "./component/img-container/img-container.component";
import { NewimageFormComponent } from "./component/newimage-form/newimage-form.component";
import { ImgService } from '../service/img.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-main',
  imports: [AddButtonComponent, ImgContainerComponent, NewimageFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  ngOnIni() {
throw new Error('Method not implemented.');
}
  newImageModalId:number=1;

  imgArray:Image[]=[];

  constructor(private imgService:ImgService){}

  ngOnInit(): void {
    this.imgArray = this.imgService.getImages();
  }

}

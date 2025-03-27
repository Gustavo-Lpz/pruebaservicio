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

  newImageModalId:number=1; //las imagenes se enumeran desde el 1

  imgArray:Image[]=[]; //arreglo donde guardar las imagenes

  constructor(private imgService:ImgService){} // inyecta el uso del servicio

  ngOnInit(): void {
    this.imgArray = this.imgService.getImages(); //obtener imagenes del servicio
  }

}

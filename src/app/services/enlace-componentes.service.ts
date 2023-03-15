import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnlaceComponentesService {
  @Output() enlace : EventEmitter<any> = new EventEmitter();
  constructor() { }
}

import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EnlaceComponentesService } from 'src/app/services/enlace-componentes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  public showSidebar : boolean = false;
  texto = 'Fundamentación Teórica. La Física es la ciencia que estudia las propiedades de la materia, radiación y energía en todas sus formas, con base en el Método Científico, utilizando un lenguaje matemático. Estudia las estructuras observables microscópicas, mesoscópicas y macroscópicas.';
  currentHighlighted: HTMLElement;

  constructor(
    private enlaceComponentesService : EnlaceComponentesService
  ){}
  
  ngOnInit(): void {
    this.enlaceComponentesService.enlace.subscribe(res => { this.showSidebar = res.open});
  }
  

  speak() {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(this.texto);
    //utterance.rate = 1.5; // velocidad de habla más rápida que la normal (1.0)
    //utterance.pitch = 2.0; // tono de voz más agudo
    //utterance.volume = 0.5; // volumen más bajo que el máximo (1.0)
    const voices = synth.getVoices();
    console.log(voices);
    //const voice = voices.find((v) => v.name === 'Microsoft Raul - Spanish (Mexico)');
    const voice = voices.find((v) => v.name === 'Microsoft Sabina - Spanish (Mexico)');
    //const voice = voices.find((v) => v.name === 'Microsoft Sabina Desktop - Spanish (Mexico)');
    utterance.voice = voice;

    // Se cancela la reproducción actual y se eliminan todos los oyentes de eventos
    synth.cancel();

    synth.speak(utterance);

  }

  pause() {
    window.speechSynthesis.pause();
  }

  resume() {
    window.speechSynthesis.resume();
  }


  highlight(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = 'yellow';
    this.currentHighlighted = target;
  }

  removeHighlight(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '';
  }

  talk(event: MouseEvent) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = this.currentHighlighted.innerText;
    window.speechSynthesis.speak(utterance);
  }
}

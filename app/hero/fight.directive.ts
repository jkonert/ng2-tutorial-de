import {Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core';

@Directive({
    selector: '[fightDirective]'
})

export class FightDirective {

    @Input('fightDirective') mode: string;

    @HostListener('click', ['$event']) onClick() {
        this.highlight(this.mode);
        // this.fightsound(); // not working properly
    }

    /**
     *  Directive highlighting elements
     * @param el
     * @param renderer
     */
    constructor(private el: ElementRef, private renderer: Renderer) {

    }

    private highlight(fightmode: string) {
        if (fightmode === 'defence') {
            this.renderer.setElementClass(this.el.nativeElement, 'defence', true);
            this.renderer.setElementClass(this.el.nativeElement, 'fight', false);
        } else {
            this.renderer.setElementClass(this.el.nativeElement, 'defence', false);
            this.renderer.setElementClass(this.el.nativeElement, 'fight', true);
        }
    }

    private fightsound() {
        var sounds = ["http://soundbible.com/mp3/Smack-SoundBible.com-1427823671.mp3",
            "http://soundbible.com/mp3/Realistic_Punch-Mark_DiAngelo-1609462330.mp3",
            "http://soundbible.com/mp3/Slap-SoundMaster13-49669815.mp3"];
        var audio = new Audio(),
            index = Math.floor(Math.random() * (sounds.length)),
            thisSound = sounds[index];
        audio.src = thisSound;
        audio.load();
        audio.play();
    }
}



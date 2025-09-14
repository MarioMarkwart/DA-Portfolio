import {
    Component,
    ViewChild,
    ViewChildren,
    ElementRef,
    QueryList,
    AfterViewInit,
} from '@angular/core';
import { SingleFeedbackComponent } from './single-feedback/single-feedback.component';

@Component({
    standalone: true,
    selector: 'app-testimonials',
    imports: [SingleFeedbackComponent],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements AfterViewInit {
    @ViewChild('carousel') carousel!: ElementRef;
    @ViewChildren('card', { read: ElementRef }) cards!: QueryList<ElementRef>;

    activeIndex = 0;

    testimonials = [
        {
            author: 'John Doe',
            relation: 'Former Colleague',
            text: 'This is a great service! Highly recommend.',
        },
        {
            author: 'Lukas M.',
            relation: 'Team Partner',
            text: "Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
        },
        {
            author: 'J. Schmitt',
            relation: 'Frontend Developer',
            text: 'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
        },
    ];

    ngAfterViewInit() {
        this.scrollToActive();
    }

    prev() {
        this.activeIndex =
            this.activeIndex === 0
                ? this.testimonials.length - 1
                : this.activeIndex - 1;
        this.scrollToActive();
    }

    next() {
        this.activeIndex =
            this.activeIndex === this.testimonials.length - 1
                ? 0
                : this.activeIndex + 1;
        this.scrollToActive();
    }

    scrollToActive() {
        const container = this.carousel.nativeElement;
        const cardList = this.cards.toArray();
        const card = cardList[this.activeIndex];

        if (container && card) {
            const containerRect = container.getBoundingClientRect();
            const cardRect = card.nativeElement.getBoundingClientRect();
            const offset =
                cardRect.left -
                containerRect.left -
                container.offsetWidth / 2 +
                cardRect.width / 2;

            container.scrollBy({ left: offset, behavior: 'smooth' });
        }
    }
}

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
			author: 'John Doe and his really long name',
			relation: 'Former Colleague',
			text: 'This is a great service! Highly recommend.',
		},
		{
			author: 'Lukas M.',
			relation: 'Team Partner',
			text: 'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
		},
		{
			author: 'J. Schmitt',
			relation: 'Frontend Developer',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa qui cumque laboriosam aut hic sequi veritatis dicta est saepe rerum molestias dolores sit, quae fugiat eum, a doloremque repudiandae? Tempore asperiores iste dolorem temporibus! Aliquid nisi architecto doloremque eligendi nemo repellat. Atque laboriosam odit ratione iusto iure amet accusamus ipsum quis? Rerum sapiente quaerat nemo, dolorum amet maxime, voluptate, optio dolore accusantium impedit adipisci inventore enim quam odio ab numquam. Dignissimos veniam aliquam repudiandae consectetur optio vero, corrupti quos inventore accusamus facilis ab? Non molestias optio corrupti incidunt consectetur? Quaerat incidunt neque doloribus. Tempora voluptate qui, repellat quisquam nesciunt ipsa quibusdam impedit quasi eligendi perferendis sunt doloribus nulla? Mollitia ipsum eius doloribus id eum voluptas aliquid neque suscipit culpa odit? Optio repellat laborum, consequatur vel delectus doloribus ratione eligendi repudiandae eveniet corporis, tenetur est consequuntur veritatis dolorem consectetur, iste assumenda atque nobis nesciunt autem iusto. Recusandae totam at fugit quae, ullam quo facilis minima temporibus itaque quibusdam iusto suscipit magnam vero libero molestiae repellendus. Beatae quia, est corporis suscipit libero laudantium ad consequuntur asperiores fugiat recusandae tempora repudiandae assumenda aspernatur quos sed dolorum, eveniet aut, iure doloribus ea. Mollitia expedita et eum explicabo provident fugit laborum voluptate odio ad beatae nisi accusamus omnis fuga, molestiae doloremque ullam sed temporibus, harum voluptatibus assumenda totam. Fuga ratione in aspernatur voluptatem unde tempora quae? Vel pariatur libero, hic incidunt itaque explicabo deserunt provident dolorem odio nemo ea impedit corrupti. Cumque tempore nihil repudiandae dolorum architecto? Rem exercitationem dolor, ullam ratione corporis quidem, obcaecati nulla beatae sequi, non blanditiis at unde! Cumque mollitia saepe itaque, magni deserunt blanditiis ullam magnam placeat sint ipsam. Natus dolore numquam quidem vero minima doloribus, incidunt unde quas dolor? Illum veritatis aperiam laudantium. Nam eaque dolore facilis excepturi repellendus deleniti sequi ullam exercitationem voluptas quidem modi suscipit dolor recusandae alias rerum vel atque, praesentium eius totam cumque mollitia. Itaque iure tempora repellendus est obcaecati illo rem sed corporis expedita ratione fugiat architecto nesciunt aperiam, soluta eaque ducimus iste reprehenderit error quidem accusamus asperiores. Tempora itaque impedit, nobis perferendis natus quos voluptas placeat doloremque id officia minus asperiores voluptate maxime quae nostrum earum rem non quibusdam exercitationem laboriosam! Delectus placeat libero, illum deserunt quas, iure dolores saepe doloremque autem cum consequatur eum laborum corrupti quibusdam deleniti eveniet minus esse nesciunt fuga excepturi voluptatibus minima sequi? Commodi explicabo voluptas illo cupiditate eos asperiores alias quibusdam, sunt nisi et inventore repellendus accusantium rerum quasi numquam voluptatem ipsam! Dolorum incidunt dolores sit reiciendis animi assumenda non quia eaque reprehenderit, repellendus tempore cumque odit autem repudiandae eius unde. Libero quas beatae assumenda, odio, doloribus enim, atque delectus excepturi dignissimos non aperiam necessitatibus cupiditate. Maxime quasi accusamus inventore, enim quis, magnam dignissimos nam temporibus nobis incidunt commodi. Est, amet culpa, maxime quas tenetur aut possimus sequi ea repudiandae ullam autem magni iusto. Doloribus, iure nemo, debitis quaerat excepturi eveniet laboriosam non explicabo eum in corporis saepe tempore asperiores, quisquam repellat recusandae consequuntur! Repellendus debitis nemo facilis, eligendi fugit pariatur tempora excepturi quis, aperiam ad autem?lLukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
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

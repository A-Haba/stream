// place files you want to import through the `$lib` alias in this folder.
export interface IEvent {
	type: EventType;
	payload?: {
		[key: string]: unknown;
	};
}

type EventType = string;

export class EventQue {
	que: IEvent[];

	constructor(que: IEvent[] = []) {
		this.que = que;
	}

	push(e: IEvent) {
		this.que.push(e);
		return new EventQue(this.que);
	}

	get(): IEvent | undefined {
		if (this.que.length === 0) {
			return undefined;
		}
		const [first, ...others] = this.que;
		this.que = others;
		return first;
	}
}

import type { EventQue } from '$lib';

export interface Store {
	parameters: {
		title: string;
		message: string;
	};
	eventQue: EventQue;
}

export interface Action {
	type: string;
	payload: {
		[key: string]: unknown;
	};
}

export type Reducer = (state: Store, action: Action) => Store;

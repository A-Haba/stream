import { EventQue, type IEvent } from '$lib';
import type { Reducer, Store } from './types';

export const initStore: Store = {
	parameters: {
		title: '',
		message: ''
	},
	eventQue: new EventQue()
};

export const reducer: Reducer = (state, action) => {
	console.log(`accept action: ${action.type}`);
	console.log(action.payload);
	switch (action.type) {
		case 'setParam': {
			const newStore = { ...state, parameters: { ...state.parameters, ...action.payload } };
			localStorage.setItem('title', newStore.parameters.title);
			localStorage.setItem('message', newStore.parameters.message);
			return newStore;
		}
		case 'pushEvent':
			if (typeof action.payload['type'] === 'string') {
				return { ...state, eventQue: state.eventQue.push(action.payload as any as IEvent) };
			}
			return state;
		default:
			return state;
	}
};

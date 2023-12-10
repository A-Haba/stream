import { derived, writable } from 'svelte/store';
import type { Action, Reducer, Store } from './types';
import { initStore, reducer } from './reducer';

const createStore = (initStore: Store, reducer: Reducer) => {
	const { set, subscribe, update } = writable<Store>(initStore);

	const dispatch = (action: Action) => {
		update((state) => reducer(state, action));
	};

	const dispatchMessage = (meessage: string) => {
		dispatch(parseMessage(meessage));
	};

	return {
		set,
		subscribe,
		dispatch,
		dispatchMessage
	};
};

export const store = createStore(initStore, reducer);

export const eventStore = derived(store, (store) => store.eventQue);

const noop = {
	type: 'noop',
	payload: {}
};

export const parseMessage = (message: string): Action => {
	try {
		const parsed = JSON.parse(message);
		if (typeof parsed['type'] === 'string' && typeof parsed['payload'] === 'object') {
			return parsed;
		} else {
			return noop;
		}
	} catch {
		return noop;
	}
};

export const setStorageValue = (dispatch: (action: Action) => void) => {
	const title = localStorage.getItem('title');
	const message = localStorage.getItem('message');

	dispatch({
		type: 'setParam',
		payload: {
			title: title ?? '',
			message: message ?? ''
		}
	});
};

import { createEffect, createEvent, createStore, sample } from 'effector';
import { API_URL } from '../shared/constants';
import { ListItem } from '../shared/types';

//* stores
const $inputValue = createStore('');
const $list = createStore<ListItem[]>([]);

//* events
const inputValueChanged = createEvent<string>();
const homeMounted = createEvent();

//* effects

const fetchListFx = createEffect<void, ListItem[], Error>(async () => {
  const res = await fetch(API_URL);
  return res.json();
});

//* handlers

sample({
  clock: [homeMounted],
  target: fetchListFx,
});

$inputValue.on(inputValueChanged, (_, value) => value);
$list.on(fetchListFx.doneData, (_, data) => data);

//* export stores
export { $inputValue, $list };

//* export events
export { inputValueChanged, homeMounted };

export default {};

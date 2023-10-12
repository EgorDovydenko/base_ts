import {bookSelectorStore} from '../../store/bookSelector';
import style from './BookSelector.module.scss';
import {observer} from 'mobx-react-lite';

export const BookSelector = observer(() => {

	const onClickCountry = (country: string) => {
		bookSelectorStore.setCountry(country);
	};

	const onClickGenre = (genre: string) => {
		bookSelectorStore.setGenre(genre);
	};

	console.log('qweqweqwe');

	return (
		<div className={style.bookSelector}>
			<button onClick={() => onClickCountry('belarus')}>Country Belarus</button>
			<button onClick={() => onClickCountry('russia')}>Country Russia</button>
			<button onClick={() => onClickGenre('history')}>Genre History</button>
			<button onClick={() => onClickGenre('fantasy')}>Genre Fantasy</button>

			<p>Country: {bookSelectorStore.country}</p>
			<p>Genre: {bookSelectorStore.genre}</p>
		</div>
	);
});
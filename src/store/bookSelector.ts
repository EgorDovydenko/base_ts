import { makeAutoObservable  } from 'mobx';

const store = {
	country: '',
	genre: '',
};

export const bookSelectorStore = makeAutoObservable({
	...store,
	setCountry(country: string) {
		this.country = country;
	},
	setGenre(genre: string) {
		this.genre = genre;
	},
});
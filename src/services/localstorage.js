const key = 'foreis';

export default {

	set(value) {
		const previousValue = JSON.parse(localStorage.getItem(key)) || {};
		const newValue = Object.assign(previousValue, value);
		localStorage.setItem(key, JSON.stringify(newValue));
	},

	get() {
		return JSON.parse(localStorage.getItem(key)) || {};
	}

};
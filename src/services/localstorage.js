const key = 'foreis';

export default {

	set(value) {
		const previousValue = JSON.parse(localStorage.getItem(key)) || {};
		const masterValue = Object.assign(previousValue, value);
		localStorage.setItem(key, JSON.stringify(masterValue));
	},

	get() {
		return JSON.parse(localStorage.getItem(key)) || {};
	}

};
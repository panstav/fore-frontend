const masterKey = 'foreis';

export default {

	set(key, value) {
		const previousValue = JSON.parse(localStorage.getItem(masterKey)) || {};
		const newValue = Object.assign(previousValue, { [key]: value });
		localStorage.setItem(masterKey, JSON.stringify(newValue));
	},

	get(key, fallback = {}) {
		return JSON.parse(localStorage.getItem(masterKey))[key] || fallback;
	}

};
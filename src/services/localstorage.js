// a master key is used to store all fore data in localstorage
const masterKey = 'foreis';

export default { get, set };

function get(key, fallback = {}) {
	if (!key) throw new Error('key is required');
	if (key.includes('.')) throw new Error('dot notation is not supported');
	
	return JSON.parse(localStorage.getItem(masterKey))[key] || fallback;
}

function set(key, value) {
	if (!key) throw new Error('key is required');
	if (!value) throw new Error('value is required');
	if (key.includes('.')) throw new Error('dot notation is not supported');

	const previousValue = get(key);
	const newValue = Object.assign(previousValue, { [key]: value });
	localStorage.setItem(masterKey, JSON.stringify(newValue));
}
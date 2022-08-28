// a master key is used to store all fore data in localstorage
const masterKey = 'foreis';

export default { get, set, unset };

function get(key, fallback) {
	if (!key) throw new Error('key is required');
	if (key.includes('.')) throw new Error('dot notation is not supported');

	return JSON.parse(localStorage.getItem(masterKey))[key] || fallback;
}

function set(key, value) {
	if (typeof key !== 'string') throw new Error('key must be a string');
	if (!value) throw new Error('value is required');
	if (key.includes('.')) throw new Error('dot notation is not supported');

	const previousMasterValue = get(key, {});
	const newMasterValue = Object.assign(previousMasterValue, { [key]: value });
	localStorage.setItem(masterKey, JSON.stringify(newMasterValue));
}

function unset(key) {
	if (!key) throw new Error('key is required');
	if (key.includes('.')) throw new Error('dot notation is not supported');

	const currentValue = get(key, {});
	delete currentValue[key];
	localStorage.setItem(masterKey, JSON.stringify(currentValue));
}
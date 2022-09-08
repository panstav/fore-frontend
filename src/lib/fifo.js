export default function fifo(array, item, { max, compare = () => false }) {
	const index = compare ? array.findIndex(compare) : array.indexOf(item);
	if (index >= 0) array.splice(index, 1);
	array.unshift(item);
	if (max && array.length > max) array.pop();
}
import get from 'lodash.get';

export default function tillMutate(props) {
	props = typeof props === 'string' ? [props] : props;
	return (prev, next) => props.every((pathToProp) => get(prev, pathToProp) === get(next, pathToProp));
}
import get from 'lodash.get';

export default function tillMutate(props) {
	const ensuredPropsArray = typeof props === 'string' ? [props] : props;
	return (prev, next) => ensuredPropsArray.every((pathToProp) => get(prev, pathToProp) === get(next, pathToProp));
}
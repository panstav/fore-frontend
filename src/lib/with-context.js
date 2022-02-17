import { useContext } from 'preact/compat';

export default function withContext({ context, map, component: Component }) {
	return function ContextifiedComponent(props) {
		const contextProps = map(useContext(context));
		return <Component {...contextProps} {...props} />;
	};
}

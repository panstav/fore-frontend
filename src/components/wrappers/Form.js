import { useCallback } from 'preact/compat';

export default function Form({ ref, action, children, ...props }) {

	const formAction = useCallback((event) => {
		event.preventDefault();
		action(event);
	}, [action]);

	return <form ref={ref} {...props} onSubmit={formAction}>
		{children}
	</form>;

}
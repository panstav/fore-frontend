import { useCallback, useState } from 'preact/compat';

export default function useBooleanState(initialState) {
	const [state, setState] = useState(!!initialState);
	const toggle = useCallback((bool = state) => setState(!!bool), [state]);
	return [state, () => toggle(true), () => toggle(false), toggle];
}
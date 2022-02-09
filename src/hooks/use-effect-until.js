import { useEffect } from 'preact/compat';

export default function useEffectUntil(effectCallback, dependencies, all) {
	useEffect(() => {
		if (!dependencies[all ? 'every' : 'some']((dep) => !!dep)) effectCallback();
	}, dependencies);
}
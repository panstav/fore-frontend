import { useEffect } from "preact/hooks";

export default function useOnce(fn) {
	useEffect(fn, []);
}
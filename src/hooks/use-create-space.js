import { useContext } from "preact/hooks";
import { useLocation } from "wouter-preact";

import { ModalContext } from "contexts";
import { store } from "config/Providers/Store";

import { createSpace } from "actions";

export default function useCreateSpace () {

	const { showAddSpaceModal } = useContext(ModalContext);
	const [, setLocation] = useLocation();

	return () => showAddSpaceModal({
		onSubmit: (data) => {
			store.action(createSpace)({
				space: data,
				onSuccess: ({ id }) => setLocation(`/space/${id}`)
			});
		}
	});

}
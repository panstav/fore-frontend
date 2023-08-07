import { useContext } from "preact/hooks";
import { useLocation } from "wouter-preact";

import { store } from "config/Providers/Store";
import { ModalContext } from "contexts";
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
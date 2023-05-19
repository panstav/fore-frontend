import useCreateSpace from "hooks/use-create-space";

import Component from "./EmptyState";

export default function HomeEmptyState({ firstName }) {

	const handleCreateSpace = useCreateSpace();

	const props = {
		firstName,
		createSpace: handleCreateSpace
	};

	return Component(props);
}
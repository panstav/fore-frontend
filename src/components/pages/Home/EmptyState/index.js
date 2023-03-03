import useCreateSpace from "hooks/use-create-space";

import Component from "./EmptyState";

export default function HomeEmptyState () {

	const handleCreateSpace = useCreateSpace();

	const props = {
		createSpace: handleCreateSpace
	};

	return Component(props);
}
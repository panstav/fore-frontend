import { useCallback, useState } from 'preact/compat';
import { connect } from "unistore/preact";

import debounce from 'lib/debounce';

import actions from './actions';

import Component from "./SearchBar";

export default connect(null, actions)(SearchBar);

function SearchBar({ searchClaimsOfUser, clearSearchResults, className }) {

	const [isLoading, setIsLoading] = useState(false);

	const onChange = useCallback(debounce(onSearch, (500)), [setIsLoading]);

	const props = {
		className,
		onChange,
		isLoading
	};

	return Component(props);

	function onSearch (event) {
		const keywords = event.target.value;
		clearSearchResults();
		setIsLoading(true);
		searchClaimsOfUser(keywords)
			.then(() => setIsLoading(false));
	}

}
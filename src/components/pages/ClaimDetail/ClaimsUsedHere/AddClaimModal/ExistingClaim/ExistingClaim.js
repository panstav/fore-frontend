import { Fragment } from "preact";
import { ContextTitle } from "wrappers/Modal";

import SearchBar from './SearchBar';

export default function ExistingClaim({ claimLists }) {
	return <>
		<SearchBar />
		{claimLists.map(({ title, claims, searchRelated, isSearchingKeywords }) => {
			return <Fragment key={title}>
				<ClaimsList {...{ title, searchRelated, isSearchingKeywords }} className={`mt-${searchRelated ? 3 : 5}`}>{claims}</ClaimsList>
			</Fragment>
		})}
	</>;
}

function ClaimsList({ title, searchRelated, searchKeywords, className, children }) {
	// avoid rendering empty lists, except for the search results
	if (!children.length && (!searchRelated || !searchKeywords)) return null;

	return <div {...{ className }}>
		<ContextTitle>{title}</ContextTitle>
		{children.length
			? <ul className="buttons has-addons is-vertical">
				{children.map(({ id, content, invalid }) => {
					return <li key={id} disabled={invalid} className="button p-0 is-fullwidth" style={{ height: 'auto' }}>
						<button disabled={invalid} className="has-text-left p-3 reset" style={{ width: '100%', height: '100%', whiteSpace: 'normal', cursor: invalid ? 'not-allowed' : 'pointer' }} data-claim-id={id} data-claim-content={content}>{content}</button>
					</li>;
				})}
			</ul>
			: <div>No results for {searchKeywords}</div>}
	</div>;
}
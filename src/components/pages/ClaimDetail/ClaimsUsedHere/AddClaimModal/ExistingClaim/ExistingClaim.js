import { Fragment } from "preact";
import { ContextTitle } from "wrappers/Modal";

import SearchBar from './SearchBar';

export default function ExistingClaim({ claimLists }) {
	return <>
		<SearchBar />
		{claimLists.map(({ title, claims, searchRelated }) => {
			return <Fragment key={title}>
				<Render if={claims.length}>
					<ClaimsList {...{ title }} className={`mt-${searchRelated ? 3 : 5}`}>{claims}</ClaimsList>
				</Render>
			</Fragment>
		})}
	</>;
}

function ClaimsList({ title, className, children }) {
	return <div {...{ className }}>
		<ContextTitle>{title}</ContextTitle>
		<ul className="buttons has-addons is-vertical">
			{children.map(({ id, content, alreadyUsedHere }) => {
				return <li key={id} disabled={alreadyUsedHere} className="button p-0 is-fullwidth" style={{ height: 'auto' }}>
					<button className="has-text-left p-3 reset is-clickable" style={{ width: '100%', height: '100%', whiteSpace: 'normal' }} data-claim-id={id} data-claim-content={content}>{content}</button>
				</li>;
			})}
		</ul>
	</div>;
}

function Render ({ if: condition, children }) {
	return condition ? children : null;
}
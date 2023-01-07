import { Link } from "wouter-preact";

import { Logo } from "elements/Icon";

export function NEW_CLAIM({ newClaimId, isAnonymous, spaceId, createdAt}) {
	return <Notification icon={Logo} url={`/claim/${newClaimId}`} createdAt={createdAt}>
		New{isAnonymous ? ` ${spaceId === 'public' ? 'public ' : ''}anonymous ` : ' '}Claim
	</Notification>;
}

function Notification({ icon: Icon, url, createdAt, children }) {
	return <Link to={url} className="is-flex is-justify-content-space-between is-align-items-start p-2">
		<div className="is-flex is-align-items-start">
			<Icon className="is-flex-shrink-0 ml-1 mr-2" />
			<Content>{children}</Content>
		</div>
		<span className="icon-text mr-1">{createdAt}</span>
	</Link>;
}

function Content({ children }) {
	return <p className="icon-text">
		{children}
	</p>;
}
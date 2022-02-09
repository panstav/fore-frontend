import { useContext, useEffect, useRef } from 'preact/compat';
import { useLocation } from 'wouter-preact';

import classnames from 'classnames';

import Modal from 'wrappers/Modal';
import Section from 'wrappers/Section';

import { ClaimDetailContext } from 'contexts';

import ClaimsUsedHere from './ClaimsUsedHere';

export default function ClaimDetail({ usedInModalProps, showUsedIn }) {
	const { content, usedIn, author, createdAtTimeAgo } = useContext(ClaimDetailContext);
	return <>
		<Section noSidePadding={true}>
			<div className="levem is-align-items-flex-start">
				<UsedIn onClick={showUsedIn('support')} how="support" times={usedIn.support.length} className="has-text-success"/>
				<UsedIn onClick={showUsedIn('opposition')} how="opposition" times={usedIn.opposition.length} className="has-text-danger"/>
			</div>
		</Section>

		<Section withTopMargin={true}>
			<div style={{ lineHeight: "1.5" }} className="title is-1 mb-3">{content}</div>
			<div className="level is-mobile">
				<div className="has-text-grey-light" style="width: 5ch; min-width: 5ch;">{createdAtTimeAgo}</div>
				<div className="is-flex-grow-1 level is-justify-content-start is-mobile m-0">
					<span>By</span>
					<img width={40} height={40} className="mx-2 is-round" src={author.profileImageUrl} alt={author.name}/>
					<span>{author.name}</span>
				</div>
			</div>
		</Section>

		<ClaimsUsedHere/>

		<Modal {...usedInModalProps} render={({ claims, hideModal }) => {
			return <div className="boxes">
				{claims.map(({ id, content }) => <Link key={id} onClick={hideModal} href={`/claim/${id}`}>
					<div className="box levem is-clickable">
						<div>{content}</div>
					</div>
				</Link>)}
			</div>;
		}}/>

	</>;
}

function Link({ href, onClick, children, ...props }) {

	const [/*location*/, setLocation] = useLocation();

	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) ref.current.addEventListener('click', (event) => {
			event.preventDefault();
			setLocation(href);
			onClick();
		});
	}, []);

	return <a href={href} ref={ref} {...props}>
		{children}
	</a>;
}

function UsedIn({ how, className, times, onClick }) {
	const stringClasses = classnames('has-text-weight-bold', className);
	return <button onClick={onClick} className="is-align-items-baseline is-borderless is-clickable is-size-7 is-flex-grow-1 is-justify-content-center levem px-2 py-4">
		<div>In <span className={stringClasses}>{how}</span> of</div>
		<div className="has-background-white is-align-items-center is-flex is-justify-content-center is-round ml-3 has-text-dark" style="width: 4ch; height: 4ch;">{times}</div>
	</button>;
}
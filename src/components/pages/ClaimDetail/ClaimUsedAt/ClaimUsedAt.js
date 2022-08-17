import { useEffect, useRef } from 'preact/compat';
import { useLocation } from 'wouter-preact';

import classnames from 'classnames';

import Modal from 'wrappers/Modal';

export default function ClaimUsedAt({ usedAt, showUsedAt, usedAtModalProps }) {

	return <>

		<div className="levem is-align-items-flex-start">
			<UsedIn onClick={showUsedAt('support')} label="Supporting" times={usedAt.support.length} className="has-text-success" />
			<UsedIn onClick={showUsedAt('opposition')} label="Opposing" times={usedAt.opposition.length} className="has-text-danger" />
		</div>

		<Modal {...usedAtModalProps} render={({ claims, hideModal }) => {
			return <div className="boxes">
				{claims.map(({ id, content }) => <Link key={id} onClick={hideModal} href={`/claim/${id}`}>
					<div className="box levem is-clickable">
						<div>{content}</div>
					</div>
				</Link>)}
			</div>;
		}} />

	</>;

}

function UsedIn({ label, className, times, onClick }) {
	const stringClasses = classnames('has-text-weight-bold', className);
	return <button onClick={onClick} className="is-align-items-baseline is-borderless is-clickable is-size-7 is-flex-grow-1 is-justify-content-center levem px-2 py-4">
		<div className={stringClasses}>{label}</div>
		<div className="has-background-white is-align-items-center is-flex is-justify-content-center is-round ml-3 has-text-dark" style="width: 4ch; height: 4ch;">{times}</div>
	</button>;
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
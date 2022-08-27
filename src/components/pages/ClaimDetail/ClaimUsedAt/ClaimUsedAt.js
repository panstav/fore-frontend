import { useEffect, useRef } from 'preact/compat';
import { useLocation } from 'wouter-preact';

import classnames from 'classnames';

import Modal from 'wrappers/Modal';

export default function ClaimUsedAt({ usedAt, showUsedAt, usedAtModalProps }) {

	return <>

		<div className="buttons has-addons">
			<UsedIn onClick={showUsedAt('support')} label="Supporting" times={usedAt.support.length} className="has-text-success" />
			<UsedIn onClick={showUsedAt('opposition')} label="Opposing" times={usedAt.opposition.length} className="has-text-danger" />
		</div>

		<Modal {...usedAtModalProps} render={({ claims, hideModal }) => {
			return <div className="boxes">
				{claims.map(({ id, content }) => <Link key={id} onClick={hideModal} href={`/claim/${id}`}>
					<div className="box levem is-clickable p-3">
						<div>{content}</div>
					</div>
				</Link>)}
			</div>;
		}} />

	</>;

}

function UsedIn({ label, className, times, onClick }) {

	const counterWidth = calcDigitsWidth(times) + 'ch';
	const classes = classnames('button is-flex is-align-items-center is-size-7 px-2 py-3 is-clickable', className);

	return <button onClick={onClick} className={classes} style={{ width: '50%' }}>
		<div className="has-text-weight-bold">{label}</div>
		<div className="has-background-white-ter is-align-items-center is-flex is-justify-content-center is-round ml-3 has-text-dark" style={{ width: counterWidth, height: '3ch' }}>{times}</div>
	</button>;

	function calcDigitsWidth(num) {
		return num.toString().length + (num.toString().length === 1 ? 2 : 1);
	}

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
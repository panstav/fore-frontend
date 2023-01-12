import classNames from 'classnames';

export { default as NEW_CLAIM } from './NEW_CLAIM';
export { default as NEW_CHILD_CLAIM } from './NEW_CHILD_CLAIM';
export { default as NEW_USER } from './NEW_USER';
export { default as NEW_VOTE } from './NEW_VOTE';

export function trimClaimContent (content = '') {
	return content.length > 60 ? `${content.slice(0, 60)}...` : content;
}

export const directedVars = {
	support: { color: 'success' },
	opposition: { color: 'danger' }
};

export function SO({ children: direction }) {
	const { color } = directedVars[direction];
	return <span className={`has-text-${color}-dark`}>
		{direction}
	</span>;
}

export function IconInIcon({ outer: Outer, inner: Inner, className: classes, style, innerIconWrapperStyle }) {
	const className = classNames('is-inline-block is-relative', classes);

	return <div {...{ className, style }}>
		<Outer />
		<div className="has-background-white" style={{ width: '0.75rem', height: '0.75rem', bottom: '0.2rem', right: '-0.25rem', position: 'absolute', borderRadius: '100%', lineHeight: 1, textAlign: 'center', ...innerIconWrapperStyle }}>
			<Inner style={{ width: '100%', height: '100%', borderRadius: '100%' }} />
		</div>
	</div>;
}
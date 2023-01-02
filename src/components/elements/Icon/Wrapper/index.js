import classNames from 'classnames';

import Component from './Wrapper';

// icon wrapper
export default function SVGWrapper({ className, ...props }) {

	// prep cursor:pointer className
	const clickableClass = 'onClick' in props ? 'is-clickable' : '';

	const passedProps = {
		className: classNames('icon', clickableClass, className),
		...props
	};

	if (['onFocus', 'onBlur'].some((attribute) => attribute in props)) passedProps.tabIndex = '0';

	return Component(passedProps);
}
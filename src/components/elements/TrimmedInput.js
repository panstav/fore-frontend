import { useFormContext, useWatch } from 'react-hook-form';
import classnames from 'classnames';

export default function TrimmedInput({ id, name, type, maxLength, defaultValue = '', className: classes, inputClasses, placeholder }) {

	const { register, control } = useFormContext();

	const content = useWatch({ control, name, defaultValue });

	const Input = type === 'textarea' ? 'textarea' : 'input';

	const className = classnames('is-relative', classes);
	const inputClassNames = classnames(Input, inputClasses);
	const inputStyles = type === 'textarea' ? { height: '12em', resize: 'none' } : {};
	const counterClasses = classnames(content.length >= maxLength ? 'has-text-danger' : '');

	return <div {...{ className }}>
		<Input id={id} {...register(name, { required: true, maxLength, value: defaultValue })} className={inputClassNames} style={inputStyles} placeholder={placeholder} />
		<span className={counterClasses} style="position: absolute; bottom: 0.2em; right: 1em">{content.length}/{maxLength}</span>
	</div>;
}
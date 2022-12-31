import { useFormContext, useWatch } from 'react-hook-form';
import classnames from 'classnames';

const maxCharacters = 240;

export default function AddClaimBody({ copiedContent = '', className: classes }) {

	const { register, control } = useFormContext();

	const content = useWatch({
		control,
		name: 'content', // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
		defaultValue: copiedContent // default value before the render
	});

	const className = classnames('is-relative', classes);
	const counterClasses = classnames(content.length >= maxCharacters ? 'has-text-danger' : '');

	return <div {...{ className }}>
		<textarea {...register('content', { required: true, maxLength: maxCharacters, value: copiedContent })} className="textarea pb-5" style="height: 12em; resize: none;"/>
		<span className={counterClasses} style="position: absolute; bottom: 0.2em; right: 1em">{content.length}/{maxCharacters}</span>
	</div>;
}
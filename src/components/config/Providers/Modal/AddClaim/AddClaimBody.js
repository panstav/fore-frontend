import { useFormContext, useWatch } from 'react-hook-form';
import classnames from 'classnames';

const maxCharacters = 200;

export default function AddClaimBody() {
	const { register, control } = useFormContext();

	const content = useWatch({
		control,
		name: 'content', // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
		defaultValue: '' // default value before the render
	});

	const counterClasses = classnames(content.length >= maxCharacters ? 'has-text-danger' : '');

	return <div className="is-relative">
		<textarea {...register('content', { required: true, maxLength: maxCharacters })} className="textarea pb-5" style="height: 12em; resize: none;"/>
		<span className={counterClasses} style="position: absolute; bottom: 0.2em; right: 1em">{content.length}/{maxCharacters}</span>
	</div>;
}
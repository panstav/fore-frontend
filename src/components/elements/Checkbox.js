import { Controller } from 'react-hook-form';

export default function Checkbox({ name, control, className, defaultValue }) {
	return <Controller control={control} name={name} defaultValue={defaultValue} render={({ field: { onChange, onBlur, value, name, ref } }) => {
		return <input className={className} type="checkbox" name={name} ref={ref} onBlur={onBlur} onChange={onChange} checked={value}/>;
	}}/>;
}
import { useEffect, useState } from 'preact/hooks';
import { useFormContext } from 'react-hook-form';

import dateFormat from "dateformat";

const defaultStartTime = '20:00';
const defaultQuarterLengthMinutes = 20;

export default function DebateSpaceSetup () {
	const { register } = useFormContext();

	return <div className="box">

		<div className="block">
			<label for="startTime" className='label'>Event start time</label>
			<input id="startTime" type="time" {...register('startTime', { required: true, value: defaultStartTime })} className='input' />
			<p className="help">
				<CurrentTime />
			</p>
		</div>

		<div className="block">
			<label for="quarterLength" className='label'>Quarter (¼) length, in minutes</label>
			<input id="quarterLength" type="number" {...register('quarterLength', { required: true, value: defaultQuarterLengthMinutes, valueAsNumber: true })} className='input' />
			<p className="help">
				<EventLength />
			</p>
		</div>

		<button className="button is-primary">Save</button>

	</div>;
}

function EventLength () {
	const { watch } = useFormContext();

	const totalLengthInMinutes = watch('quarterLength', defaultQuarterLengthMinutes) * 4;
	if (!totalLengthInMinutes) return null;

	const endTime = dateFormat(new Date(new Date(`2000-01-01T${watch('startTime', defaultStartTime)}`).getTime() + totalLengthInMinutes * 60 * 1000), "HH:MM");

	const totalLengthInHours = Math.floor(totalLengthInMinutes / 60);
	// return total length in hours and minutes and an endTime that is the startTime plus totalLengthInMinutes
	return <>
		Event length: {totalLengthInHours > 0 ? `${totalLengthInHours} hours and ` : ''}{totalLengthInMinutes % 60} minutes.
		<br />
		Event end time: {endTime}
	</>;
}

function addMinutesToStartTime (startTime, minutes) {

}

function CurrentTime () {

	const getFormattedCurrentTime = () => dateFormat(new Date(), "HH:MM");

	const [currentTime, setCurrentTime] = useState(getFormattedCurrentTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(getFormattedCurrentTime());
		}, 59 * 1000);

		return () => clearInterval(interval);
	}, []);

	return <>Current time: {currentTime}</>;
}
import { useEffect, useState } from "preact/hooks";

export default function Loader({ label }) {
	return <>
		<div className="pageloader" />
		{label && <div className="pageloader-label has-text-centered mt-5" style={{ width: '100%' }}>
			{label}
			<TickingPeriods />
		</div>}
	</>;
}

function TickingPeriods() {

	const [periods, setPeriods] = useState([true, false, false]);

	useEffect(() => {
		const interval = setInterval(() => {
			setPeriods(periods => {
				if (!periods[1]) return [true, true, false];
				if (!periods[2]) return [true, true, true];
				return [true, false, false];
			});
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return <>
		{periods.map((isDot, index) => {
			return <span key={index} style={{ visibility: isDot ? 'visible' : 'hidden' }}>.</span>;
		})}
	</>;
}
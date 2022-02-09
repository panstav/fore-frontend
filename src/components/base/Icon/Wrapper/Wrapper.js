export default function SVGWrapper({ children, size = 24, svgProps = { style: {} }, ...props }) {
	return <div {...props}>
		<svg {...svgProps} style={{ width: '100%', ...svgProps.style }} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${size} ${size}`}>
			{children}
		</svg>
	</div>;
}
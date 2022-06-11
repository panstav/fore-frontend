export default function SVGWrapper({ children, size = 24, sizeX = size, sizeY = size, isFullWidth, svgProps = { style: {} }, ...props }) {

	if (isFullWidth) {
		return <svg {...props} {...svgProps} style={{ width: '100%', height: 'auto', ...svgProps.style }} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${sizeX} ${sizeY}`}>
			{children}
		</svg>;
	}

	return <div {...props}>
		<svg {...svgProps} style={{ width: '100%', ...svgProps.style }} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${sizeX} ${sizeY}`}>
			{children}
		</svg>
	</div>;

}
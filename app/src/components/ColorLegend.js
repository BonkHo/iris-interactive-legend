import React from "react";

const ColorLegend = ({
	colorScale,
	legendSpacing = 20,
	legendCircleRadius = 10,
	legendTextOffset = 20,
	onHover,
	hoveredValue,
}) =>
	colorScale.domain().map((domainValue, i) => (
		<g
			transform={`translate(0, ${i * legendSpacing})`}
			onMouseEnter={() => onHover(domainValue)}
			onMouseOut={() => onHover(null)}
			opacity={hoveredValue && domainValue !== hoveredValue ? 0.2 : 1}
		>
			<circle fill={colorScale(domainValue)} r={legendCircleRadius} />
			<text className="legend-text" x={legendTextOffset} dy=".32em">
				{domainValue}
			</text>
		</g>
	));
export default ColorLegend;

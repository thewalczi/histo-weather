import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import * as d3 from "d3";

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

export const Canvas = ({ data }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = CANVAS_WIDTH;
		canvas.height = CANVAS_HEIGHT;
		const ctx = canvas.getContext("2d");

		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		const xScale = d3.scaleBand().range([0, CANVAS_WIDTH]).padding(0.2);

		const yScale = d3.scaleLinear().range([CANVAS_HEIGHT, 0]);

		if (data) {
			xScale.domain(data.daily.temperature_2m_max);
			yScale.domain([0, d3.max(data.daily.temperature_2m_max)]);

			data.daily.temperature_2m_max.forEach((d, i) => {
				ctx.fillStyle = "crimson";
				ctx.fillRect(
					xScale(d),
					yScale(d),
					xScale.bandwidth(),
					CANVAS_HEIGHT - yScale(d)
				);
			});
		}
	}, [data]);

	useEffect(() => {}, [data]);
	return <canvas ref={canvasRef} />;
};

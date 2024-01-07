import {useEffect, useRef} from "react";
import * as d3 from "d3";

function TextArc() {
    // State (état, données)
    const svgRef = useRef(null);
    // Comportement
    useEffect(() => {
        const width = 200
        const height = 160
        //Create the SVG
        const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .attr('overflow', 'visible')
        .attr('display', 'block')

//Transition from the original arc path to a new arc path
        svg.selectAll("path")
        .transition().duration(4000).delay(1000)
        .attr("d", "M 37,120 A10,10.5 0 0,1 163,120");

        svg.selectAll("text")
        .transition(8000).duration(5000).delay(3000)
        .attr("style", "fill: url(#linear-gradient)")
    }, []);

// affichage (render)
    return (
        <svg ref={svgRef} style={{ fontSize: "1.7em",fontWeight: "bold"}}>
            <g>
                <linearGradient id="linear-gradient">
                    <stop offset="0%" stopColor="#0240f9" stopOpacity="100%" />
                    <stop offset="30%" stopColor="#0b0979" stopOpacity="100%" />
                    <stop offset="100%" stopColor="#ff0000" stopOpacity="100%" />
                </linearGradient>
                <linearGradient id="linear-gradient-two">
                    <stop offset="0%" stopColor="#ff0000" stopOpacity="100%" />
                    <stop offset="50%" stopColor="#0b0979" stopOpacity="100%" />
                    <stop offset="100%" stopColor="#0240f9" stopOpacity="100%" />
                </linearGradient>
                <path id="wavy" d="M 0,110, A10,0 0 0,1 200,110" style={{fill: "none", stroke: "none"}}></path>
                <text style={{fill: 'url(#linear-gradient-two)'}}>
                    <textPath href="#wavy" startOffset="50%" style={{whiteSpace: "pre", textShadow: 'rgb(27 24 28 / 68%) -1px 1px 1px' }}> DÉFI-DELF </textPath>
                </text>
            </g>
        </svg>
    );
}

export default TextArc;

import {useEffect, useRef} from "react";
import * as d3 from "d3";

function TextArc() {
    // State (état, données)
    const svgRef = useRef(null);
    // Comportement
    useEffect(() => {
        const width = 150
        const height = 150
        //Create the SVG
        const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .attr('overflow', 'visible')
        .attr('display', 'block')

//Transition from the original arc path to a new arc path
        svg.selectAll("path")
        .transition().duration(4000).delay(1000)
        .attr("d", "M 30,90 A10,10.5 0 0,1 120,90");
    }, []);

// affichage (render)
    return (
        <svg ref={svgRef} style={{ fontSize: "1.2em",fontWeight: "bold"}}>
            <g>
                <linearGradient id="linear-gradient">
                    <stop offset="0%" stopColor="#0240f9" stopOpacity="100%" />
                    <stop offset="30%" stopColor="#0b0979" stopOpacity="100%" />
                    <stop offset="100%" stopColor="#ff0000" stopOpacity="100%" />
                </linearGradient>
                <path id="wavy" d="M 0,140, A10,0 0 0,1 150,140" style={{fill: "none", stroke: "none"}}></path>
                <text>
                    <textPath href="#wavy" startOffset="50%" style={{whiteSpace: "pre"}}> DÉFI-DELF </textPath>
                </text>
            </g>
        </svg>
    );
}

export default TextArc;

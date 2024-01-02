import {useEffect, useRef} from "react";
import * as d3 from "d3";

function TextArc() {
    // State (état, données)
    const svgRef = useRef(null);
    // Comportement
    useEffect(() => {
        const width = 300
        const height = 200
        //Create the SVG
        const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .attr('overflow', 'visible')
        .attr('display', 'block')

//Transition from the original arc path to a new arc path
//         svg.selectAll("path")
//         .transition().duration(4000).delay(1000)
//         .attr("d", "M 0,200 A80,80 0 0,1 300,200");
    }, []);

// affichage (render)
    return (
        <svg ref={svgRef}>
            <g style={{textAnchor: "middle", fill: "url(#linear-gradient)", filter: "drop-shadow(-2px 0 1px #000000cc)" , fontSize: '3.5em'}}>
                <linearGradient id="linear-gradient">
                    <stop offset="0%" stopColor="#0240f9" stopOpacity="100%" />
                    <stop offset="30%" stopColor="#0b0979" stopOpacity="100%" />
                    <stop offset="100%" stopColor="#ff0000" stopOpacity="100%" />
                </linearGradient>
                <path id="wavy" d="M 0,180, A 100,0 0 0,1 300,180" style={{fill: 'transparent', stroke: 'transparent'}}></path>
                <text textLength="90%">
                    <textPath href="#wavy" id="text-svg" startOffset="50%" >DÉFI-DELF </textPath>
                </text>
            </g>
        </svg>
    );
}

export default TextArc;

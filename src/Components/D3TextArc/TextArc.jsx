import {useEffect, useRef} from "react";
import * as d3 from "d3";

function TextArc() {
    // State (état, données)
    const svgRef = useRef(null);
    // Comportement
    useEffect(() => {
        const width = 400
        const height = 300
        //Create the SVG
        const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height)

//Transition from the original arc path to a new arc path
        svg.selectAll("path")
        .transition().duration(2000).delay(2000)
        .attr("d", "M75,300 A 125,125 0 0,1 325,300");
    }, []);

// affichage (render)
    return (
            <svg ref={svgRef}>
              <g>
                <linearGradient id="linear-gradient">
                <stop offset="0%" stopColor="#0240f9" stopOpacity="100%" />
                <stop offset="30%" stopColor="#0b0979" stopOpacity="100%" />
                <stop offset="100%" stopColor="#ff0000" stopOpacity="100%" />
                </linearGradient>
                <path id="wavy" d="M 0,300, A 100,0 0 0,1 400,300" style={{fill: 'none', stroke: 'none'}}></path>
                <text>
                  <textPath href="#wavy" startOffset="50%" style={{textAnchor: "middle", fontSize: "64px", fill: "url(#linear-gradient)", filter: "drop-shadow(-2px 2px 3px rgba(0,0,0,0.7)"}}>
                      DÉFI-DELF
                  </textPath>
                </text>
              </g>
            </svg>
    );
}

export default TextArc;

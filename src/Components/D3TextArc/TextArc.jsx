import {useEffect, useRef} from "react";
import * as d3 from "d3";

function TextArc() {
    // State (état, données)
    const svgRef = useRef(null);
    // Comportement
    useEffect(() => {
        const width = 200
        const height = 200
        const margin = {top: 0, right: 20, bottom: 0, left: 20}
        //Create the SVG
        const svg = d3.select(svgRef.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height)
        .attr('overflow', 'visible')
        .attr('display', 'block')

//Transition from the original arc path to a new arc path
        svg.selectAll("path")
        .transition().duration(4000).delay(1000)
        .attr("d", "M 0,117 A 110,110 0 0,1 200,117");
    }, []);

// affichage (render)
    return (
        <div style={{width: "200px", height: "300px"}}>
            <svg ref={svgRef}>
                <g>
                    <linearGradient id="linear-gradient">
                        <stop offset="0%" stopColor="#0240f9" stopOpacity="100%" />
                        <stop offset="30%" stopColor="#0b0979" stopOpacity="100%" />
                        <stop offset="100%" stopColor="#ff0000" stopOpacity="100%" />
                    </linearGradient>
                    <path id="wavy" d="M -20,200, A 100,0 0 0,1 220,200" style={{fill: 'none', stroke: 'blue', fontSize: '3.5em'}}></path>
                    <text>
                        <textPath href="#wavy" id="text-svg" startOffset="50%" style={{textAnchor: "middle", fill: "url(#linear-gradient)", filter: "drop-shadow(-2px 0 1px rgba(0,0,0,0.8)" , fontSize: '3.5em', padding: '10px'}}>
                            DÉFI-DELF
                        </textPath>
                    </text>
                </g>
            </svg>
        </div>

    );
}

export default TextArc;

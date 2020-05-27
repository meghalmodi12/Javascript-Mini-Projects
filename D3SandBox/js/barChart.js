let dataSet = [10, 12, 8, 3, 4, 9, 0, 7];
let svgHeight= 200, svgWidth = 500, barSpacing = 5;
let totalBarWidth = (svgWidth/dataSet.length);
let barWidth = totalBarWidth - barSpacing;

let svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

/* Scaling */
let scale = d3.scaleLinear()
              .domain([0, d3.max(dataSet)])
              .range([0, svgHeight]);

let barChart = svg.selectAll('rect')
                  .data(dataSet)
                  .enter()
                  .append('rect')
                  .attr('y', function(d){
                    return svgHeight - scale(d);
                  })
                  .attr('height', function(d){
                    return scale(d);
                  })
                  .attr('width', barWidth)
                  .attr('transform', function(d, i){
                    let translate = [totalBarWidth * i, 0];
                    return `translate(${translate})`;
                  });
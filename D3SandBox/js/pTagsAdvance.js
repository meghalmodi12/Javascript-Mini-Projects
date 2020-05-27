let dataSet = [1, 2, 3, 4, 5];

d3.selectAll('p')
  .data(dataSet)
  .enter()
  .append('p')
  .text(function(d) {
    return 'Hello World ' + d;
  });
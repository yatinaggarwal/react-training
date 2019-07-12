// Complete the function signature below such that the function may be called with any config
// objects (null and undefined are not allowed as inputs). If any of the four keys are missing,
// substitute their default values. The default values are the same as in the example configuration
// object.

let config = {
    chartType : 0,
    bullColor : 'green',
    bearColor : 'red',
    days : 30
};

function drawChart( data, {
    chartType = 0,
    bullColor = 'green',
    bearColor = 'red',
    days = 30} = {} ) {
    // do not implement the function body

    console.log( chartType, bullColor, bearColor, days );
};

drawChart([], {chartType : 0, bullColor : 'green'});
drawChart([], {});
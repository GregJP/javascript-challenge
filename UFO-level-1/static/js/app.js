// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

var filterTable = d3.select("#ufo-table")

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    filteredData.forEach(function(filterAppend) {
        var row = filterTable.append("tr");
        Object.entries(filterAppend).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
});}
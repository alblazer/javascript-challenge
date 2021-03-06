// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody")

function tables(data){
    tbody.html("");
    data.forEach((row) => {
        var rows = tbody.append("tr");
        Object.values(row).forEach((val) =>{
            var cell = rows.append("td");
            cell.text(val);
        }) 
    })
}

function handleClick(){
    d3.event.preventDefault();

    var date = d3.select("#datetime").property("value");
    var filterData = tableData;

    if(date) {
        filterData = filterData.filter(row => row.datetime === date);
    }
    tables(filterData);
}

d3.selectAll("#filter-btn").on('click', handleClick);

tables(tableData);

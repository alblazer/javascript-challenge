// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody")
// Create the original table
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
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Filter results based on their date
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    // Edit the table so only that filtered data appears
    if(date) {
        filterData = filterData.filter(row => row.datetime === date);
    }
    tables(filterData);
}

d3.selectAll("#filter-btn").on('click', handleClick);

tables(tableData);

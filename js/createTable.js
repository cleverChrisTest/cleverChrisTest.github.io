export function createTable(arr) {
    function createHeader(data) {
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');

        Object.keys(data).forEach(propertyName => {
            let info = document.createTextNode(propertyName.charAt(0).toUpperCase() + propertyName.slice(1));
            let tableHead = document.createElement('th');
            tableHead.appendChild(info);
            tr.appendChild(tableHead);
        });
        thead.appendChild(tr);

        return thead;
    }

    function createBody(arrObj) {
        let tbody = document.createElement('tbody');

        arrObj.forEach(item => {
            let tr = document.createElement('tr');
            Object.values(item).forEach(value => {
                tr.appendChild(createTableData(value));
                tr.setAttribute("row_id", item.id);
            });
            tbody.appendChild(tr);
        });
        return tbody;
    }

    function createTableData(value) {
        let info = document.createTextNode(value);
        let tableData = document.createElement('td');
        tableData.appendChild(info);
        return tableData;
    }

    let table = document.createElement('table');

    table.appendChild(createHeader(arr[0]));

    table.appendChild(createBody(arr));

    return table;
}
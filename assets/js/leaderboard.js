document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        if (event.target.tagName === 'TH') {
            // 获取点击的TH元素
            var th = event.target;
            var table = th.closest('table'); // 找到TH所在的表格
            if (table.classList.contains('no-js')) {
                return; // 如果有 no-js 类，则不执行任何操作
            }
            var columnIndex = Array.prototype.indexOf.call(th.parentNode.children, th); // 确定点击的是哪一列
            if (columnIndex === 0) { // 假设第一列是用来还原的
                restoreOriginalOrder(table);
            } else {
                sortTable(table, columnIndex);
            }
        }
    });

    // 存储所有表格的原始顺序
    var tables = document.getElementsByTagName('table');
    for (var i = 0; i < tables.length; i++) {
        tables[i].setAttribute('data-original', tables[i].innerHTML);
    }
});

function sortTable(table, columnIndex) {
    var rows = Array.from(table.getElementsByTagName('TR'));
    var tbody = table.getElementsByTagName('tbody')[0];
    var dir = table.getAttribute('data-sort-dir') === 'asc' ? 'desc' : 'asc';
    table.setAttribute('data-sort-dir', dir);

    // Sorting logic here (simplified)
    rows = rows.slice(1); // Remove header
    var noSortRow = rows.filter(row => row.classList.contains('no-sort'))[0]; // 找到不排序的行
    rows.sort(function(a, b) {
        var aText = a.cells[columnIndex].textContent;
        var bText = b.cells[columnIndex].textContent;
        return dir === 'asc' ? aText.localeCompare(bText, undefined, {numeric: true}) : bText.localeCompare(aText, undefined, {numeric: true});
    });

    if (noSortRow) {
        rows.push(noSortRow); // 将不排序的行放回到排序后的数组末尾
    }

    // Reattach rows to tbody
    for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }
    updateArrows(table, columnIndex, dir);
}

function updateArrows(table, columnIndex, direction) {
    // Update arrows based on direction
    var headers = table.getElementsByTagName('TH');
    Array.prototype.forEach.call(headers, function(th) {
        th.querySelector('.arrow').textContent = ''; // Clear arrows
    });
    headers[columnIndex].querySelector('.arrow').textContent = direction === 'asc' ? "▲" : "▼"; // Add arrow to the current column
}

function restoreOriginalOrder(table) {
    // Restore original order from stored HTML
    table.innerHTML = table.getAttribute('data-original');
}

document.addEventListener('DOMContentLoaded', function() {

    // Default to showing the first table
    showTable('average');

    // Table data
    const models = ['Uni-SMART', 'O1-preview', 'O1-mini', 'GPT-4o', 'GPT-4', 'GPT-3.5', 'Moonshot', 'Claude3', 'Doubao', 'Gemini', 'Llama3.1', 'Qwen2.5', 'Mixtral'];
    const averageData = [
        {'Biology': 0.768, 'Chemistry': 0.686, 'Material': 0.639, 'Medicine': 0.641, 'Average': 0.684},
        {'Biology': 0.780, 'Chemistry': 0.716, 'Material': 0.616, 'Medicine': 0.514, 'Average': 0.656},
        {'Biology': 0.732, 'Chemistry': 0.671, 'Material': 0.639, 'Medicine': 0.408, 'Average': 0.613},
        {'Biology': 0.689, 'Chemistry': 0.680, 'Material': 0.620, 'Medicine': 0.458, 'Average': 0.612},
        {'Biology': 0.686, 'Chemistry': 0.608, 'Material': 0.566, 'Medicine': 0.420, 'Average': 0.570},
        {'Biology': 0.554, 'Chemistry': 0.373, 'Material': 0.370, 'Medicine': 0.318, 'Average': 0.404},
        {'Biology': 0.672, 'Chemistry': 0.580, 'Material': 0.599, 'Medicine': 0.341, 'Average': 0.548},
        {'Biology': 0.654, 'Chemistry': 0.377, 'Material': 0.432, 'Medicine': 0.388, 'Average': 0.463},
        {'Biology': 0.676, 'Chemistry': 0.490, 'Material': 0.520, 'Medicine': 0.386, 'Average': 0.518},
        {'Biology': 0.702, 'Chemistry': 0.621, 'Material': 0.608, 'Medicine': 0.454, 'Average': 0.596},
        {'Biology': 0.694, 'Chemistry': 0.625, 'Material': 0.592, 'Medicine': 0.374, 'Average': 0.571},
        {'Biology': 0.672, 'Chemistry': 0.637, 'Material': 0.594, 'Medicine': 0.378, 'Average': 0.570},
        {'Biology': 0.631, 'Chemistry': 0.444, 'Material': 0.459, 'Medicine': 0.352, 'Average': 0.471}
    ];
    const biologyData = [
        {'Mmlu Pro Biology': 0.876, 'Biology Chart QA': 0.693, 'Chemical Entities Recognition': 0.865, 'Compound Disease Recognition': 0.744, 'Disease Entities Recognition': 0.820, 'Gene Disease Function': 0.611},
        {'Mmlu Pro Biology': 0.901, 'Biology Chart QA': 0.653, 'Chemical Entities Recognition': 0.862, 'Compound Disease Recognition': 0.745, 'Disease Entities Recognition': 0.831, 'Gene Disease Function': 0.687},
        {'Mmlu Pro Biology': 0.856, 'Biology Chart QA': 0.588, 'Chemical Entities Recognition': 0.860, 'Compound Disease Recognition': 0.725, 'Disease Entities Recognition': 0.817, 'Gene Disease Function': 0.548},
        {'Mmlu Pro Biology': 0.874, 'Biology Chart QA': 0.558, 'Chemical Entities Recognition': 0.795, 'Compound Disease Recognition': 0.733, 'Disease Entities Recognition': 0.763, 'Gene Disease Function': 0.410},
        {'Mmlu Pro Biology': 0.845, 'Biology Chart QA': 0.442, 'Chemical Entities Recognition': 0.817, 'Compound Disease Recognition': 0.753, 'Disease Entities Recognition': 0.670, 'Gene Disease Function': 0.587},
        {'Mmlu Pro Biology': 0.650, 'Biology Chart QA': 0.312, 'Chemical Entities Recognition': 0.649, 'Compound Disease Recognition': 0.636, 'Disease Entities Recognition': 0.688, 'Gene Disease Function': 0.391},
        {'Mmlu Pro Biology': 0.755, 'Biology Chart QA': 0.518, 'Chemical Entities Recognition': 0.821, 'Compound Disease Recognition': 0.745, 'Disease Entities Recognition': 0.654, 'Gene Disease Function': 0.538},
        {'Mmlu Pro Biology': 0.781, 'Biology Chart QA': 0.402, 'Chemical Entities Recognition': 0.815, 'Compound Disease Recognition': 0.737, 'Disease Entities Recognition': 0.684, 'Gene Disease Function': 0.506},
        {'Mmlu Pro Biology': 0.770, 'Biology Chart QA': 0.523, 'Chemical Entities Recognition': 0.749, 'Compound Disease Recognition': 0.733, 'Disease Entities Recognition': 0.742, 'Gene Disease Function': 0.539},
        {'Mmlu Pro Biology': 0.842, 'Biology Chart QA': 0.548, 'Chemical Entities Recognition': 0.745, 'Compound Disease Recognition': 0.751, 'Disease Entities Recognition': 0.767, 'Gene Disease Function': 0.558},
        {'Mmlu Pro Biology': 0.815, 'Biology Chart QA': 0.477, 'Chemical Entities Recognition': 0.836, 'Compound Disease Recognition': 0.768, 'Disease Entities Recognition': 0.793, 'Gene Disease Function': 0.474},
        {'Mmlu Pro Biology': 0.840, 'Biology Chart QA': 0.487, 'Chemical Entities Recognition': 0.764, 'Compound Disease Recognition': 0.712, 'Disease Entities Recognition': 0.793, 'Gene Disease Function': 0.438},
        {'Mmlu Pro Biology': 0.743, 'Biology Chart QA': 0.422, 'Chemical Entities Recognition': 0.707, 'Compound Disease Recognition': 0.757, 'Disease Entities Recognition': 0.737, 'Gene Disease Function': 0.418}
    ];
    const chemistryData = [
        {'Mmlu Pro Chemistry': 0.865, 'Electrolyte Table QA': 0.920, 'Oled Property Extraction': 0.263, 'Polymer Chart QA': 1.000, 'Polymer Composition QA': 0.976, 'Polymer Property Extraction': 0.555, 'Solubility Extraction': 0.434, 'Reactant QA': 0.569, 'Reaction Mechanism QA': 0.591},
        {'Mmlu Pro Chemistry': 0.868, 'Electrolyte Table QA': 0.925, 'Oled Property Extraction': 0.394, 'Polymer Chart QA': 1.000, 'Polymer Composition QA': 0.986, 'Polymer Property Extraction': 0.606, 'Solubility Extraction': 0.427, 'Reactant QA': 0.559, 'Reaction Mechanism QA': 0.682},
        {'Mmlu Pro Chemistry': 0.788, 'Electrolyte Table QA': 0.839, 'Oled Property Extraction': 0.338, 'Polymer Chart QA': 0.867, 'Polymer Composition QA': 0.986, 'Polymer Property Extraction': 0.537, 'Solubility Extraction': 0.442, 'Reactant QA': 0.559, 'Reaction Mechanism QA': 0.682},
        {'Mmlu Pro Chemistry': 0.745, 'Electrolyte Table QA': 0.855, 'Oled Property Extraction': 0.438, 'Polymer Chart QA': 0.867, 'Polymer Composition QA': 0.938, 'Polymer Property Extraction': 0.759, 'Solubility Extraction': 0.444, 'Reactant QA': 0.487, 'Reaction Mechanism QA': 0.591},
        {'Mmlu Pro Chemistry': 0.621, 'Electrolyte Table QA': 0.810, 'Oled Property Extraction': 0.455, 'Polymer Chart QA': 0.733, 'Polymer Composition QA': 0.947, 'Polymer Property Extraction': 0.758, 'Solubility Extraction': 0.431, 'Reactant QA': 0.441, 'Reaction Mechanism QA': 0.273},
        {'Mmlu Pro Chemistry': 0.303, 'Electrolyte Table QA': 0.305, 'Oled Property Extraction': 0.280, 'Polymer Chart QA': 0.667, 'Polymer Composition QA': 0.330, 'Polymer Property Extraction': 0.562, 'Solubility Extraction': 0.408, 'Reactant QA': 0.272, 'Reaction Mechanism QA': 0.227},
        {'Mmlu Pro Chemistry': 0.428, 'Electrolyte Table QA': 0.765, 'Oled Property Extraction': 0.160, 'Polymer Chart QA': 0.800, 'Polymer Composition QA': 0.971, 'Polymer Property Extraction': 0.736, 'Solubility Extraction': 0.445, 'Reactant QA': 0.415, 'Reaction Mechanism QA': 0.500},
        {'Mmlu Pro Chemistry': 0.496, 'Electrolyte Table QA': 0.435, 'Oled Property Extraction': 0.055, 'Polymer Chart QA': 0.467, 'Polymer Composition QA': 0.555, 'Polymer Property Extraction': 0.634, 'Solubility Extraction': 0.375, 'Reactant QA': 0.241, 'Reaction Mechanism QA': 0.136},
        {'Mmlu Pro Chemistry': 0.446, 'Electrolyte Table QA': 0.745, 'Oled Property Extraction': 0.413, 'Polymer Chart QA': 0.400, 'Polymer Composition QA': 0.804, 'Polymer Property Extraction': 0.508, 'Solubility Extraction': 0.409, 'Reactant QA': 0.272, 'Reaction Mechanism QA': 0.409},
        {'Mmlu Pro Chemistry': 0.683, 'Electrolyte Table QA': 0.765, 'Oled Property Extraction': 0.419, 'Polymer Chart QA': 0.733, 'Polymer Composition QA': 0.947, 'Polymer Property Extraction': 0.580, 'Solubility Extraction': 0.440, 'Reactant QA': 0.344, 'Reaction Mechanism QA': 0.682},
        {'Mmlu Pro Chemistry': 0.676, 'Electrolyte Table QA': 0.755, 'Oled Property Extraction': 0.563, 'Polymer Chart QA': 0.800, 'Polymer Composition QA': 0.852, 'Polymer Property Extraction': 0.690, 'Solubility Extraction': 0.447, 'Reactant QA': 0.385, 'Reaction Mechanism QA': 0.455},
        {'Mmlu Pro Chemistry': 0.723, 'Electrolyte Table QA': 0.785, 'Oled Property Extraction': 0.499, 'Polymer Chart QA': 0.800, 'Polymer Composition QA': 0.914, 'Polymer Property Extraction': 0.692, 'Solubility Extraction': 0.437, 'Reactant QA': 0.379, 'Reaction Mechanism QA': 0.500},
        {'Mmlu Pro Chemistry': 0.501, 'Electrolyte Table QA': 0.455, 'Oled Property Extraction': 0.355, 'Polymer Chart QA': 0.800, 'Polymer Composition QA': 0.493, 'Polymer Property Extraction': 0.573, 'Solubility Extraction': 0.314, 'Reactant QA': 0.231, 'Reaction Mechanism QA': 0.273}
    ];
    const materialData = [
        {'Material QA': 0.806, 'Alloy Chart QA': 0.733, 'Composition Extraction': 0.472, 'Temperature QA': 0.836, 'Sample Differentiation': 0.363, 'Treatment Sequence': 0.624},
        {'Material QA': 0.821, 'Alloy Chart QA': 0.533, 'Composition Extraction': 0.488, 'Temperature QA': 0.836, 'Sample Differentiation': 0.392, 'Treatment Sequence': 0.624},
        {'Material QA': 0.730, 'Alloy Chart QA': 0.600, 'Composition Extraction': 0.347, 'Temperature QA': 0.865, 'Sample Differentiation': 0.646, 'Treatment Sequence': 0.644},
        {'Material QA': 0.768, 'Alloy Chart QA': 0.467, 'Composition Extraction': 0.462, 'Temperature QA': 0.807, 'Sample Differentiation': 0.624, 'Treatment Sequence': 0.594},
        {'Material QA': 0.722, 'Alloy Chart QA': 0.200, 'Composition Extraction': 0.467, 'Temperature QA': 0.734, 'Sample Differentiation': 0.595, 'Treatment Sequence': 0.678},
        {'Material QA': 0.521, 'Alloy Chart QA': 0.400, 'Composition Extraction': 0.189, 'Temperature QA': 0.295, 'Sample Differentiation': 0.329, 'Treatment Sequence': 0.485},
        {'Material QA': 0.620, 'Alloy Chart QA': 0.333, 'Composition Extraction': 0.423, 'Temperature QA': 0.845, 'Sample Differentiation': 0.688, 'Treatment Sequence': 0.683},
        {'Material QA': 0.620, 'Alloy Chart QA': 0.467, 'Composition Extraction': 0.427, 'Temperature QA': 0.353, 'Sample Differentiation': 0.245, 'Treatment Sequence': 0.480},
        {'Material QA': 0.669, 'Alloy Chart QA': 0.533, 'Composition Extraction': 0.398, 'Temperature QA': 0.488, 'Sample Differentiation': 0.376, 'Treatment Sequence': 0.658},
        {'Material QA': 0.722, 'Alloy Chart QA': 0.600, 'Composition Extraction': 0.389, 'Temperature QA': 0.715, 'Sample Differentiation': 0.586, 'Treatment Sequence': 0.634},
        {'Material QA': 0.738, 'Alloy Chart QA': 0.467, 'Composition Extraction': 0.457, 'Temperature QA': 0.652, 'Sample Differentiation': 0.624, 'Treatment Sequence': 0.614},
        {'Material QA': 0.719, 'Alloy Chart QA': 0.533, 'Composition Extraction': 0.430, 'Temperature QA': 0.647, 'Sample Differentiation': 0.578, 'Treatment Sequence': 0.658},
        {'Material QA': 0.631, 'Alloy Chart QA': 0.467, 'Composition Extraction': 0.177, 'Temperature QA': 0.382, 'Sample Differentiation': 0.426, 'Treatment Sequence': 0.673}
    ];
    const medicineData = [
        {'Mmlu Pro Health': 0.787, 'Affinity Extraction': 0.398, 'Drug Chart QA': 0.733, 'Tag to Molecule': 0.405, 'Markush to Molecule': 0.603, 'Mol In Document': 0.920},
        {'Mmlu Pro Health': 0.784, 'Affinity Extraction': 0.068, 'Drug Chart QA': 0.600, 'Tag to Molecule': 0.127, 'Markush to Molecule': 0.662, 'Mol In Document': 0.840},
        {'Mmlu Pro Health': 0.702, 'Affinity Extraction': 0.045, 'Drug Chart QA': 0.467, 'Tag to Molecule': 0.102, 'Markush to Molecule': 0.533, 'Mol In Document': 0.600},
        {'Mmlu Pro Health': 0.763, 'Affinity Extraction': 0.101, 'Drug Chart QA': 0.467, 'Tag to Molecule': 0.229, 'Markush to Molecule': 0.585, 'Mol In Document': 0.600},
        {'Mmlu Pro Health': 0.715, 'Affinity Extraction': 0.076, 'Drug Chart QA': 0.333, 'Tag to Molecule': 0.092, 'Markush to Molecule': 0.684, 'Mol In Document': 0.620},
        {'Mmlu Pro Health': 0.531, 'Affinity Extraction': 0.055, 'Drug Chart QA': 0.333, 'Tag to Molecule': 0.023, 'Markush to Molecule': 0.523, 'Mol In Document': 0.440},
        {'Mmlu Pro Health': 0.644, 'Affinity Extraction': 0.063, 'Drug Chart QA': 0.333, 'Tag to Molecule': 0.133, 'Markush to Molecule': 0.391, 'Mol In Document': 0.480},
        {'Mmlu Pro Health': 0.614, 'Affinity Extraction': 0.045, 'Drug Chart QA': 0.467, 'Tag to Molecule': 0.061, 'Markush to Molecule': 0.503, 'Mol In Document': 0.640},
        {'Mmlu Pro Health': 0.605, 'Affinity Extraction': 0.081, 'Drug Chart QA': 0.400, 'Tag to Molecule': 0.105, 'Markush to Molecule': 0.565, 'Mol In Document': 0.560},
        {'Mmlu Pro Health': 0.663, 'Affinity Extraction': 0.052, 'Drug Chart QA': 0.533, 'Tag to Molecule': 0.211, 'Markush to Molecule': 0.683, 'Mol In Document': 0.580},
        {'Mmlu Pro Health': 0.710, 'Affinity Extraction': 0.047, 'Drug Chart QA': 0.400, 'Tag to Molecule': 0.143, 'Markush to Molecule': 0.425, 'Mol In Document': 0.520},
        {'Mmlu Pro Health': 0.685, 'Affinity Extraction': 0.071, 'Drug Chart QA': 0.333, 'Tag to Molecule': 0.136, 'Markush to Molecule': 0.443, 'Mol In Document': 0.600},
        {'Mmlu Pro Health': 0.603, 'Affinity Extraction': 0.049, 'Drug Chart QA': 0.400, 'Tag to Molecule': 0.021, 'Markush to Molecule': 0.576, 'Mol In Document': 0.460}
    ];

    // Generate table content
    generateTable('average', models, averageData, ['Biology', 'Chemistry', 'Material', 'Medicine', 'Average']);
    generateTable('biology', models, biologyData, ['Mmlu Pro Biology', 'Biology Chart QA', 'Chemical Entities Recognition', 'Compound Disease Recognition', 'Disease Entities Recognition', 'Gene Disease Function']);
    generateTable('chemistry', models, chemistryData, ['Mmlu Pro Chemistry', 'Electrolyte Table QA', 'Oled Property Extraction', 'Polymer Chart QA', 'Polymer Composition QA', 'Polymer Property Extraction', 'Solubility Extraction', 'Reactant QA', 'Reaction Mechanism QA']);
    generateTable('material', models, materialData, ['Material QA', 'Alloy Chart QA', 'Composition Extraction', 'Temperature QA', 'Sample Differentiation', 'Treatment Sequence']);
    generateTable('medicine', models, medicineData, ['Mmlu Pro Health', 'Affinity Extraction', 'Drug Chart QA', 'Tag to Molecule', 'Markush to Molecule', 'Molecule in Document']);

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

function showTable(tableId) {
    var tables = document.getElementsByClassName('table-container');
    for (var i = 0; i < tables.length; i++) {
        tables[i].classList.remove('active');
    }
    if (tableId) {
        document.getElementById(tableId).classList.add('active');
    }
}

function toggleColumn(columnClass) {
    var elements = document.getElementsByClassName(columnClass);
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.display === 'none') {
            elements[i].style.display = '';
        } else {
            elements[i].style.display = 'none';
        }
    }
}

function generateTable(tableId, models, data, columns) {
    // Generate checkboxes
    const tab = document.getElementById(`${tableId}Tab`);
    columns.forEach(column => {
        const container = document.createElement('div');
        container.classList.add('checkbox-container');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${column.replace(/\s+/g, '_')}`;
        checkbox.checked = true;
        checkbox.onclick = () => toggleColumn(`${column.replace(/\s+/g, '_')}`);
        const label = document.createElement('label');
        label.htmlFor = `${column.replace(/\s+/g, '_')}`;
        label.textContent = column;
        container.appendChild(checkbox);
        container.appendChild(label);
        tab.appendChild(container);
    });

    // Generate table body
    const tbody = document.getElementById(`${tableId}Body`);
    tbody.innerHTML = ''; // Clear previous table rows if any
    models.forEach((model, index) => {
        const row = document.createElement('tr');
        const modelCell = document.createElement('td');
        modelCell.textContent = model;
        row.appendChild(modelCell);
        columns.forEach(column => {
            const cell = document.createElement('td');
            cell.classList.add(`${column.replace(/\s+/g, '_')}`);
            const value = data[index][column];
            cell.textContent = typeof value === 'number' ? value.toFixed(3) : value;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
}

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
    headers[columnIndex].querySelector('.arrow').textContent = direction === 'asc' ? '▲' : '▼'; // Add arrow to the current column
}

function restoreOriginalOrder(table) {
    // Restore original order from stored HTML
    table.innerHTML = table.getAttribute('data-original');
}

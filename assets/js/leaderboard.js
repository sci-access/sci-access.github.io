document.addEventListener('DOMContentLoaded', function() {

    // Default to showing the first table
    showTable('fundamentalScience');

    // Table data
    const models = ['GPT4o-PyPDF', 'GPT4-PyPDF', 'GPT3.5-PypDF', 'Moonshot', 'Deepseek-PyPDF', 'Claude3-opus-PyPDF', 'Doubao-pro-128k-PyPDF', 'Gemini-1.5-pro-PyPDF', 'Llama3-70b-PyPDF', 'Qwen1.5-110b-PyPDF', 'Command R+-PyPDF'];
    const fundamentalScienceData = [
        {'MMLU (science)': 0.846, 'CMMLU (science)': 0.785, 'Xiezhi-Ch (science)': 0.736, 'Xiezhi-En (science)': 0.699},
        {'MMLU (science)': 0.769, 'CMMLU (science)': 0.646, 'Xiezhi-Ch (science)': 0.708, 'Xiezhi-En (science)': 0.670},
        {'MMLU (science)': 0.614, 'CMMLU (science)': 0.432, 'Xiezhi-Ch (science)': 0.690, 'Xiezhi-En (science)': 0.641},
        {'MMLU (science)': 0.774, 'CMMLU (science)': 0.728, 'Xiezhi-Ch (science)': 0.732, 'Xiezhi-En (science)': 0.679},
        {'MMLU (science)': 0.738, 'CMMLU (science)': 0.768, 'Xiezhi-Ch (science)': 0.726, 'Xiezhi-En (science)': 0.665},
        {'MMLU (science)': 0.771, 'CMMLU (science)': 0.631, 'Xiezhi-Ch (science)': 0.706, 'Xiezhi-En (science)': 0.658},
        {'MMLU (science)': 0.712, 'CMMLU (science)': 0.833, 'Xiezhi-Ch (science)': 0.706, 'Xiezhi-En (science)': 0.650},
        {'MMLU (science)': 0.790, 'CMMLU (science)': 0.736, 'Xiezhi-Ch (science)': 0.723, 'Xiezhi-En (science)': 0.654},
        {'MMLU (science)': 0.757, 'CMMLU (science)': 0.658, 'Xiezhi-Ch (science)': 0.736, 'Xiezhi-En (science)': 0.683},
        {'MMLU (science)': 0.739, 'CMMLU (science)': 0.848, 'Xiezhi-Ch (science)': 0.736, 'Xiezhi-En (science)': 0.679},
        {'MMLU (science)': 0.643, 'CMMLU (science)': 0.455, 'Xiezhi-Ch (science)': 0.672, 'Xiezhi-En (science)': 0.632}
    ];
    const alloyMaterialsData = [
        {'Alloy Chart QA': 0.533, 'Composition Extraction': 0.484, 'Temperature Extraction': 0.884, 'Sample Differentiation': 0.511, 'Treatment Sequence': 0.745},
        {'Alloy Chart QA': 0.600, 'Composition Extraction': 0.458, 'Temperature Extraction': 0.855, 'Sample Differentiation': 0.591, 'Treatment Sequence': 0.725},
        {'Alloy Chart QA': 0.333, 'Composition Extraction': 0.112, 'Temperature Extraction': 0.729, 'Sample Differentiation': 0.169, 'Treatment Sequence': 0.461},
        {'Alloy Chart QA': 0.333, 'Composition Extraction': 0.127, 'Temperature Extraction': 0.889, 'Sample Differentiation': 0.679, 'Treatment Sequence': 0.755},
        {'Alloy Chart QA': 0.333, 'Composition Extraction': 0.389, 'Temperature Extraction': 0.754, 'Sample Differentiation': 0.616, 'Treatment Sequence': 0.686},
        {'Alloy Chart QA': 0.400, 'Composition Extraction': 0.495, 'Temperature Extraction': 0.865, 'Sample Differentiation': 0.586, 'Treatment Sequence': 0.745},
        {'Alloy Chart QA': 0.467, 'Composition Extraction': 0.304, 'Temperature Extraction': 0.700, 'Sample Differentiation': 0.316, 'Treatment Sequence': 0.745},
        {'Alloy Chart QA': 0.533, 'Composition Extraction': 0.359, 'Temperature Extraction': 0.865, 'Sample Differentiation': 0.688, 'Treatment Sequence': 0.706},
        {'Alloy Chart QA': 0.467, 'Composition Extraction': 0.212, 'Temperature Extraction': 0.604, 'Sample Differentiation': 0.376, 'Treatment Sequence': 0.539},
        {'Alloy Chart QA': 0.467, 'Composition Extraction': 0.181, 'Temperature Extraction': 0.715, 'Sample Differentiation': 0.473, 'Treatment Sequence': 0.618},
        {'Alloy Chart QA': 0.200, 'Composition Extraction': 0.128, 'Temperature Extraction': 0.546, 'Sample Differentiation': 0.228, 'Treatment Sequence': 0.588}
    ];
    const biomedicineData = [
        {'Biology Chart QA': 0.580, 'Chemical Entities Recognition': 0.911, 'Disease Entities Recognition': 0.822, 'Compound Eisease Recognition': 0.743, 'Gene Disease Function': 0.945, 'Gene Disease Regulation': 0.913},
        {'Biology Chart QA': 0.480, 'Chemical Entities Recognition': 0.919, 'Disease Entities Recognition': 0.866, 'Compound Eisease Recognition': 0.758, 'Gene Disease Function': 0.927, 'Gene Disease Regulation': 0.921},
        {'Biology Chart QA': 0.390, 'Chemical Entities Recognition': 0.928, 'Disease Entities Recognition': 0.873, 'Compound Eisease Recognition': 0.718, 'Gene Disease Function': 0.896, 'Gene Disease Regulation': 0.937},
        {'Biology Chart QA': 0.545, 'Chemical Entities Recognition': 0.903, 'Disease Entities Recognition': 0.785, 'Compound Eisease Recognition': 0.773, 'Gene Disease Function': 0.845, 'Gene Disease Regulation': 0.957},
        {'Biology Chart QA': 0.545, 'Chemical Entities Recognition': 0.934, 'Disease Entities Recognition': 0.841, 'Compound Eisease Recognition': 0.731, 'Gene Disease Function': 0.830, 'Gene Disease Regulation': 0.943},
        {'Biology Chart QA': 0.505, 'Chemical Entities Recognition': 0.898, 'Disease Entities Recognition': 0.771, 'Compound Eisease Recognition': 0.763, 'Gene Disease Function': 0.931, 'Gene Disease Regulation': 0.941},
        {'Biology Chart QA': 0.480, 'Chemical Entities Recognition': 0.912, 'Disease Entities Recognition': 0.807, 'Compound Eisease Recognition': 0.741, 'Gene Disease Function': 0.840, 'Gene Disease Regulation': 0.918},
        {'Biology Chart QA': 0.556, 'Chemical Entities Recognition': 0.834, 'Disease Entities Recognition': 0.795, 'Compound Eisease Recognition': 0.727, 'Gene Disease Function': 0.868, 'Gene Disease Regulation': 0.883},
        {'Biology Chart QA': 0.520, 'Chemical Entities Recognition': 0.867, 'Disease Entities Recognition': 0.787, 'Compound Eisease Recognition': 0.788, 'Gene Disease Function': 0.892, 'Gene Disease Regulation': 0.959},
        {'Biology Chart QA': 0.550, 'Chemical Entities Recognition': 0.931, 'Disease Entities Recognition': 0.795, 'Compound Eisease Recognition': 0.751, 'Gene Disease Function': 0.893, 'Gene Disease Regulation': 0.940},
        {'Biology Chart QA': 0.535, 'Chemical Entities Recognition': 0.878, 'Disease Entities Recognition': 0.651, 'Compound Eisease Recognition': 0.735, 'Gene Disease Function': 0.935, 'Gene Disease Regulation': 0.934}
    ];
    const drugDiscoveryData = [
        {'Affinity Extraction': 0.072, 'Drug Chart QA': 0.333, 'Tag to Molecule': 0.040, 'Markush to Molecule': 0.339, 'Molecule in Document': 0.580, 'Reaction QA': 0.705, 'Research Targets Identification': 0.721},
        {'Affinity Extraction': 0.042, 'Drug Chart QA': 0.400, 'Tag to Molecule': 0.022, 'Markush to Molecule': 0.394, 'Molecule in Document': 0.700, 'Reaction QA': 0.674, 'Research Targets Identification': 0.791},
        {'Affinity Extraction': 0.025, 'Drug Chart QA': 0.067, 'Tag to Molecule': 0.000, 'Markush to Molecule': 0.322, 'Molecule in Document': 0.500, 'Reaction QA': 0.442, 'Research Targets Identification': 0.526},
        {'Affinity Extraction': 0.040, 'Drug Chart QA': 0.400, 'Tag to Molecule': 0.016, 'Markush to Molecule': 0.504, 'Molecule in Document': 0.460, 'Reaction QA': 0.253, 'Research Targets Identification': 0.607},
        {'Affinity Extraction': 0.017, 'Drug Chart QA': 0.400, 'Tag to Molecule': 0.014, 'Markush to Molecule': 0.256, 'Molecule in Document': 0.460, 'Reaction QA': 0.368, 'Research Targets Identification': 0.687},
        {'Affinity Extraction': 0.097, 'Drug Chart QA': 0.200, 'Tag to Molecule': 0.035, 'Markush to Molecule': 0.675, 'Molecule in Document': 0.480, 'Reaction QA': 0.663, 'Research Targets Identification': 0.794},
        {'Affinity Extraction': 0.050, 'Drug Chart QA': 0.533, 'Tag to Molecule': 0.094, 'Markush to Molecule': 0.100, 'Molecule in Document': 0.560, 'Reaction QA': 0.442, 'Research Targets Identification': 0.622},
        {'Affinity Extraction': 0.054, 'Drug Chart QA': 0.467, 'Tag to Molecule': 0.139, 'Markush to Molecule': 0.192, 'Molecule in Document': 0.520, 'Reaction QA': 0.442, 'Research Targets Identification': 0.825},
        {'Affinity Extraction': 0.064, 'Drug Chart QA': 0.400, 'Tag to Molecule': 0.034, 'Markush to Molecule': 0.367, 'Molecule in Document': 0.680, 'Reaction QA': 0.611, 'Research Targets Identification': 0.600},
        {'Affinity Extraction': 0.027, 'Drug Chart QA': 0.533, 'Tag to Molecule': 0.022, 'Markush to Molecule': 0.370, 'Molecule in Document': 0.620, 'Reaction QA': 0.295, 'Research Targets Identification': 0.771},
        {'Affinity Extraction': 0.043, 'Drug Chart QA': 0.533, 'Tag to Molecule': 0.031, 'Markush to Molecule': 0.077, 'Molecule in Document': 0.460, 'Reaction QA': 0.316, 'Research Targets Identification': 0.485}
    ];
    const organicMaterialsData = [
        {'Electrolyte Table QA': 0.940, 'OLED Property Extraction': 0.336, 'Polymer Chart QA': 0.800, 'Polymer Composition QA': 0.945, 'Polymer Property Extraction': 0.692, 'Solubility Extraction': 0.479, 'Reaction Mechanism QA': 0.545},
        {'Electrolyte Table QA': 0.790, 'OLED Property Extraction': 0.406, 'Polymer Chart QA': 0.667, 'Polymer Composition QA': 0.945, 'Polymer Property Extraction': 0.681, 'Solubility Extraction': 0.440, 'Reaction Mechanism QA': 0.636},
        {'Electrolyte Table QA': 0.370, 'OLED Property Extraction': 0.201, 'Polymer Chart QA': 0.400, 'Polymer Composition QA': 0.853, 'Polymer Property Extraction': 0.329, 'Solubility Extraction': 0.410, 'Reaction Mechanism QA': 0.455},
        {'Electrolyte Table QA': 0.670, 'OLED Property Extraction': 0.037, 'Polymer Chart QA': 0.800, 'Polymer Composition QA': 0.844, 'Polymer Property Extraction': 0.705, 'Solubility Extraction': 0.363, 'Reaction Mechanism QA': 0.545},
        {'Electrolyte Table QA': 0.720, 'OLED Property Extraction': 0.292, 'Polymer Chart QA': 0.733, 'Polymer Composition QA': 0.881, 'Polymer Property Extraction': 0.652, 'Solubility Extraction': 0.432, 'Reaction Mechanism QA': 0.545},
        {'Electrolyte Table QA': 0.870, 'OLED Property Extraction': 0.477, 'Polymer Chart QA': 0.467, 'Polymer Composition QA': 0.881, 'Polymer Property Extraction': 0.629, 'Solubility Extraction': 0.426, 'Reaction Mechanism QA': 0.455},
        {'Electrolyte Table QA': 0.710, 'OLED Property Extraction': 0.259, 'Polymer Chart QA': 0.867, 'Polymer Composition QA': 0.927, 'Polymer Property Extraction': 0.514, 'Solubility Extraction': 0.371, 'Reaction Mechanism QA': 0.636},
        {'Electrolyte Table QA': 0.920, 'OLED Property Extraction': 0.055, 'Polymer Chart QA': 0.733, 'Polymer Composition QA': 0.890, 'Polymer Property Extraction': 0.655, 'Solubility Extraction': 0.435, 'Reaction Mechanism QA': 0.636},
        {'Electrolyte Table QA': 0.460, 'OLED Property Extraction': 0.263, 'Polymer Chart QA': 0.867, 'Polymer Composition QA': 0.734, 'Polymer Property Extraction': 0.536, 'Solubility Extraction': 0.399, 'Reaction Mechanism QA': 0.500},
        {'Electrolyte Table QA': 0.620, 'OLED Property Extraction': 0.085, 'Polymer Chart QA': 0.667, 'Polymer Composition QA': 0.872, 'Polymer Property Extraction': 0.153, 'Solubility Extraction': 0.303, 'Reaction Mechanism QA': 0.364},
        {'Electrolyte Table QA': 0.450, 'OLED Property Extraction': 0.234, 'Polymer Chart QA': 0.800, 'Polymer Composition QA': 0.679, 'Polymer Property Extraction': 0.171, 'Solubility Extraction': 0.351, 'Reaction Mechanism QA': 0.591}
    ];

    // Generate table content
    generateTable('fundamentalScience', models, fundamentalScienceData, ['MMLU (science)', 'CMMLU (science)', 'Xiezhi-Ch (science)', 'Xiezhi-En (science)']);
    generateTable('alloyMaterials', models, alloyMaterialsData, ['Alloy Chart QA', 'Composition Extraction', 'Temperature Extraction', 'Sample Differentiation', 'Treatment Sequence']);
    generateTable('biomedicine', models, biomedicineData, ['Biology Chart QA', 'Chemical Entities Recognition', 'Disease Entities Recognition', 'Compound Eisease Recognition', 'Gene Disease Function', 'Gene Disease Regulation']);
    generateTable('drugDiscovery', models, drugDiscoveryData, ['Affinity Extraction', 'Drug Chart QA', 'Tag to Molecule', 'Markush to Molecule', 'Molecule in Document', 'Reaction QA', 'Research Targets Identification']);
    generateTable('organicMaterials', models, organicMaterialsData, ['Electrolyte Table QA', 'OLED Property Extraction', 'Polymer Chart QA', 'Polymer Composition QA', 'Polymer Property Extraction', 'Solubility Extraction', 'Reaction Mechanism QA']);

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
        if (elements[i].style.display === "none") {
            elements[i].style.display = "";
        } else {
            elements[i].style.display = "none";
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
    models.forEach((model, index) => {
        const row = document.createElement('tr');
        const modelCell = document.createElement('td');
        modelCell.textContent = model;
        row.appendChild(modelCell);
        columns.forEach(column => {
            const cell = document.createElement('td');
            cell.classList.add(`${column.replace(/\s+/g, '_')}`);
            cell.textContent = data[index][column];
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
    headers[columnIndex].querySelector('.arrow').textContent = direction === 'asc' ? "▲" : "▼"; // Add arrow to the current column
}

function restoreOriginalOrder(table) {
    // Restore original order from stored HTML
    table.innerHTML = table.getAttribute('data-original');
}

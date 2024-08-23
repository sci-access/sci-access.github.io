document.addEventListener('DOMContentLoaded', function() {

    // Default to showing the first table
    showTable('overallAverage');

    // Table data
    const models = ['Uni-SMART', 'GPT-4o', 'GPT-4', 'GPT-3.5', 'Moonshot', 'Claude3', 'Doubao', 'Gemini', 'Ernie4', 'Llama3', 'Deepseek', 'Qwen2', 'Command R+'];
    const overallAverageData = [
        {'Fundamental Science': 0.765, 'Alloy Materials': 0.734, 'Biomedicine': 0.836, 'Drug Discovery': 0.569, 'Organic Materials': 0.726, 'Overall Average': 0.726},
        {'Fundamental Science': 0.765, 'Alloy Materials': 0.631, 'Biomedicine': 0.658, 'Drug Discovery': 0.441, 'Organic Materials': 0.677, 'Overall Average': 0.634},
        {'Fundamental Science': 0.709, 'Alloy Materials': 0.646, 'Biomedicine': 0.764, 'Drug Discovery': 0.466, 'Organic Materials': 0.652, 'Overall Average': 0.647},
        {'Fundamental Science': 0.602, 'Alloy Materials': 0.361, 'Biomedicine': 0.585, 'Drug Discovery': 0.284, 'Organic Materials': 0.431, 'Overall Average': 0.453},
        {'Fundamental Science': 0.727, 'Alloy Materials': 0.557, 'Biomedicine': 0.539, 'Drug Discovery': 0.320, 'Organic Materials': 0.566, 'Overall Average': 0.542},
        {'Fundamental Science': 0.711, 'Alloy Materials': 0.618, 'Biomedicine': 0.779, 'Drug Discovery': 0.416, 'Organic Materials': 0.601, 'Overall Average': 0.625},
        {'Fundamental Science': 0.737, 'Alloy Materials': 0.506, 'Biomedicine': 0.754, 'Drug Discovery': 0.362, 'Organic Materials': 0.612, 'Overall Average': 0.594},
        {'Fundamental Science': 0.725, 'Alloy Materials': 0.620, 'Biomedicine': 0.712, 'Drug Discovery': 0.381, 'Organic Materials': 0.633, 'Overall Average': 0.614},
        {'Fundamental Science': 0.609, 'Alloy Materials': 0.299, 'Biomedicine': 0.763, 'Drug Discovery': 0.218, 'Organic Materials': 0.295, 'Overall Average': 0.437},
        {'Fundamental Science': 0.709, 'Alloy Materials': 0.440, 'Biomedicine': 0.740, 'Drug Discovery': 0.410, 'Organic Materials': 0.537, 'Overall Average': 0.559},
        {'Fundamental Science': 0.735, 'Alloy Materials': 0.656, 'Biomedicine': 0.757, 'Drug Discovery': 0.356, 'Organic Materials': 0.608, 'Overall Average': 0.582},
        {'Fundamental Science': 0.773, 'Alloy Materials': 0.567, 'Biomedicine': 0.793, 'Drug Discovery': 0.306, 'Organic Materials': 0.644, 'Overall Average': 0.616},
        {'Fundamental Science': 0.603, 'Alloy Materials': 0.338, 'Biomedicine': 0.705, 'Drug Discovery': 0.314, 'Organic Materials': 0.468, 'Overall Average': 0.486}
    ];
    const fundamentalScienceData = [
        {'MMLU (science)': 0.839, 'CMMLU (science)': 0.785, 'Xiezhi-Ch (science)': 0.736, 'Xiezhi-En (science)': 0.701},
        {'MMLU (science)': 0.839, 'CMMLU (science)': 0.785, 'Xiezhi-Ch (science)': 0.736, 'Xiezhi-En (science)': 0.701},
        {'MMLU (science)': 0.783, 'CMMLU (science)': 0.644, 'Xiezhi-Ch (science)': 0.724, 'Xiezhi-En (science)': 0.683},
        {'MMLU (science)': 0.629, 'CMMLU (science)': 0.438, 'Xiezhi-Ch (science)': 0.696, 'Xiezhi-En (science)': 0.644},
        {'MMLU (science)': 0.774, 'CMMLU (science)': 0.723, 'Xiezhi-Ch (science)': 0.734, 'Xiezhi-En (science)': 0.677},
        {'MMLU (science)': 0.795, 'CMMLU (science)': 0.643, 'Xiezhi-Ch (science)': 0.731, 'Xiezhi-En (science)': 0.673},
        {'MMLU (science)': 0.720, 'CMMLU (science)': 0.841, 'Xiezhi-Ch (science)': 0.720, 'Xiezhi-En (science)': 0.667},
        {'MMLU (science)': 0.799, 'CMMLU (science)': 0.731, 'Xiezhi-Ch (science)': 0.716, 'Xiezhi-En (science)': 0.652},
        {'MMLU (science)': 0.598, 'CMMLU (science)': 0.566, 'Xiezhi-Ch (science)': 0.636, 'Xiezhi-En (science)': 0.634},
        {'MMLU (science)': 0.766, 'CMMLU (science)': 0.651, 'Xiezhi-Ch (science)': 0.731, 'Xiezhi-En (science)': 0.687},
        {'MMLU (science)': 0.737, 'CMMLU (science)': 0.769, 'Xiezhi-Ch (science)': 0.748, 'Xiezhi-En (science)': 0.685},
        {'MMLU (science)': 0.782, 'CMMLU (science)': 0.870, 'Xiezhi-Ch (science)': 0.746, 'Xiezhi-En (science)': 0.692},
        {'MMLU (science)': 0.647, 'CMMLU (science)': 0.448, 'Xiezhi-Ch (science)': 0.683, 'Xiezhi-En (science)': 0.634}
    ];
    const alloyMaterialsData = [
        {'Alloy Chart QA': 0.933, 'Composition Extraction': 0.511, 'Temperature Extraction': 0.879, 'Sample Differentiation': 0.603, 'Treatment Sequence': 0.745},
        {'Alloy Chart QA': 0.533, 'Composition Extraction': 0.484, 'Temperature Extraction': 0.884, 'Sample Differentiation': 0.511, 'Treatment Sequence': 0.745},
        {'Alloy Chart QA': 0.600, 'Composition Extraction': 0.458, 'Temperature Extraction': 0.855, 'Sample Differentiation': 0.591, 'Treatment Sequence': 0.725},
        {'Alloy Chart QA': 0.333, 'Composition Extraction': 0.112, 'Temperature Extraction': 0.729, 'Sample Differentiation': 0.169, 'Treatment Sequence': 0.461},
        {'Alloy Chart QA': 0.333, 'Composition Extraction': 0.127, 'Temperature Extraction': 0.889, 'Sample Differentiation': 0.679, 'Treatment Sequence': 0.755},
        {'Alloy Chart QA': 0.400, 'Composition Extraction': 0.495, 'Temperature Extraction': 0.865, 'Sample Differentiation': 0.586, 'Treatment Sequence': 0.745},
        {'Alloy Chart QA': 0.467, 'Composition Extraction': 0.304, 'Temperature Extraction': 0.700, 'Sample Differentiation': 0.316, 'Treatment Sequence': 0.745},
        {'Alloy Chart QA': 0.667, 'Composition Extraction': 0.239, 'Temperature Extraction': 0.841, 'Sample Differentiation': 0.658, 'Treatment Sequence': 0.696},
        {'Alloy Chart QA': 0.200, 'Composition Extraction': 0.169, 'Temperature Extraction': 0.343, 'Sample Differentiation': 0.253, 'Treatment Sequence': 0.529},
        {'Alloy Chart QA': 0.467, 'Composition Extraction': 0.212, 'Temperature Extraction': 0.604, 'Sample Differentiation': 0.376, 'Treatment Sequence': 0.539},
        {'Alloy Chart QA': 0.333, 'Composition Extraction': 0.389, 'Temperature Extraction': 0.754, 'Sample Differentiation': 0.616, 'Treatment Sequence': 0.686},
        {'Alloy Chart QA': 0.400, 'Composition Extraction': 0.423, 'Temperature Extraction': 0.797, 'Sample Differentiation': 0.557, 'Treatment Sequence': 0.657},
        {'Alloy Chart QA': 0.200, 'Composition Extraction': 0.128, 'Temperature Extraction': 0.546, 'Sample Differentiation': 0.228, 'Treatment Sequence': 0.588}
    ];
    const biomedicineData = [
        {'Biology Chart QA': 0.616, 'Chemical Entities Recognition': 0.916, 'Disease Entities Recognition': 0.849, 'Compound Disease Recognition': 0.750, 'Gene Disease Function': 0.945, 'Gene Disease Regulation': 0.939},
        {'Biology Chart QA': 0.580, 'Chemical Entities Recognition': 0.454, 'Disease Entities Recognition': 0.279, 'Compound Disease Recognition': 0.755, 'Gene Disease Function': 0.931, 'Gene Disease Regulation': 0.949},
        {'Biology Chart QA': 0.480, 'Chemical Entities Recognition': 0.665, 'Disease Entities Recognition': 0.765, 'Compound Disease Recognition': 0.786, 'Gene Disease Function': 0.974, 'Gene Disease Regulation': 0.914},
        {'Biology Chart QA': 0.390, 'Chemical Entities Recognition': 0.540, 'Disease Entities Recognition': 0.153, 'Compound Disease Recognition': 0.733, 'Gene Disease Function': 0.864, 'Gene Disease Regulation': 0.832},
        {'Biology Chart QA': 0.545, 'Chemical Entities Recognition': 0.201, 'Disease Entities Recognition': 0.000, 'Compound Disease Recognition': 0.770, 'Gene Disease Function': 0.771, 'Gene Disease Regulation': 0.944},
        {'Biology Chart QA': 0.505, 'Chemical Entities Recognition': 0.844, 'Disease Entities Recognition': 0.653, 'Compound Disease Recognition': 0.788, 'Gene Disease Function': 0.944, 'Gene Disease Regulation': 0.939},
        {'Biology Chart QA': 0.480, 'Chemical Entities Recognition': 0.911, 'Disease Entities Recognition': 0.675, 'Compound Disease Recognition': 0.771, 'Gene Disease Function': 0.779, 'Gene Disease Regulation': 0.910},
        {'Biology Chart QA': 0.616, 'Chemical Entities Recognition': 0.678, 'Disease Entities Recognition': 0.437, 'Compound Disease Recognition': 0.733, 'Gene Disease Function': 0.954, 'Gene Disease Regulation': 0.856},
        {'Biology Chart QA': 0.475, 'Chemical Entities Recognition': 0.884, 'Disease Entities Recognition': 0.703, 'Compound Disease Recognition': 0.705, 'Gene Disease Function': 0.850, 'Gene Disease Regulation': 0.960},
        {'Biology Chart QA': 0.520, 'Chemical Entities Recognition': 0.400, 'Disease Entities Recognition': 0.526, 'Compound Disease Recognition': 0.794, 'Gene Disease Function': 0.996, 'Gene Disease Regulation': 0.971},
        {'Biology Chart QA': 0.545, 'Chemical Entities Recognition': 0.536, 'Disease Entities Recognition': 0.331, 'Compound Disease Recognition': 0.757, 'Gene Disease Function': 0.819, 'Gene Disease Regulation': 0.952},
        {'Biology Chart QA': 0.515, 'Chemical Entities Recognition': 0.832, 'Disease Entities Recognition': 0.722, 'Compound Disease Recognition': 0.794, 'Gene Disease Function': 0.930, 'Gene Disease Regulation': 0.963},
        {'Biology Chart QA': 0.535, 'Chemical Entities Recognition': 0.850, 'Disease Entities Recognition': 0.258, 'Compound Disease Recognition': 0.764, 'Gene Disease Function': 0.884, 'Gene Disease Regulation': 0.936}
    ]
    const drugDiscoveryData = [
        {'Affinity Extraction': 0.200, 'Drug Chart QA': 0.600, 'Tag to Molecule': 0.188, 'Markush to Molecule': 0.686, 'Molecule in Document': 0.720, 'Reaction QA': 0.768, 'Research Targets Identification': 0.823},
        {'Affinity Extraction': 0.072, 'Drug Chart QA': 0.333, 'Tag to Molecule': 0.040, 'Markush to Molecule': 0.634, 'Molecule in Document': 0.580, 'Reaction QA': 0.705, 'Research Targets Identification': 0.721},
        {'Affinity Extraction': 0.042, 'Drug Chart QA': 0.400, 'Tag to Molecule': 0.022, 'Markush to Molecule': 0.632, 'Molecule in Document': 0.700, 'Reaction QA': 0.674, 'Research Targets Identification': 0.791},
        {'Affinity Extraction': 0.025, 'Drug Chart QA': 0.067, 'Tag to Molecule': 0.000, 'Markush to Molecule': 0.429, 'Molecule in Document': 0.500, 'Reaction QA': 0.442, 'Research Targets Identification': 0.526},
        {'Affinity Extraction': 0.040, 'Drug Chart QA': 0.400, 'Tag to Molecule': 0.016, 'Markush to Molecule': 0.462, 'Molecule in Document': 0.460, 'Reaction QA': 0.253, 'Research Targets Identification': 0.607},
        {'Affinity Extraction': 0.097, 'Drug Chart QA': 0.200, 'Tag to Molecule': 0.035, 'Markush to Molecule': 0.644, 'Molecule in Document': 0.480, 'Reaction QA': 0.663, 'Research Targets Identification': 0.794},
        {'Affinity Extraction': 0.050, 'Drug Chart QA': 0.533, 'Tag to Molecule': 0.094, 'Markush to Molecule': 0.217, 'Molecule in Document': 0.560, 'Reaction QA': 0.442, 'Research Targets Identification': 0.622},
        {'Affinity Extraction': 0.054, 'Drug Chart QA': 0.467, 'Tag to Molecule': 0.139, 'Markush to Molecule': 0.218, 'Molecule in Document': 0.520, 'Reaction QA': 0.442, 'Research Targets Identification': 0.825},
        {'Affinity Extraction': 0.059, 'Drug Chart QA': 0.200, 'Tag to Molecule': 0.000, 'Markush to Molecule': 0.000, 'Molecule in Document': 0.360, 'Reaction QA': 0.242, 'Research Targets Identification': 0.665},
        {'Affinity Extraction': 0.064, 'Drug Chart QA': 0.400, 'Tag to Molecule': 0.034, 'Markush to Molecule': 0.478, 'Molecule in Document': 0.680, 'Reaction QA': 0.611, 'Research Targets Identification': 0.600},
        {'Affinity Extraction': 0.017, 'Drug Chart QA': 0.400, 'Tag to Molecule': 0.014, 'Markush to Molecule': 0.543, 'Molecule in Document': 0.460, 'Reaction QA': 0.368, 'Research Targets Identification': 0.687},
        {'Affinity Extraction': 0.075, 'Drug Chart QA': 0.400, 'Tag to Molecule': 0.000, 'Markush to Molecule': 0.358, 'Molecule in Document': 0.460, 'Reaction QA': 0.442, 'Research Targets Identification': 0.410},
        {'Affinity Extraction': 0.043, 'Drug Chart QA': 0.533, 'Tag to Molecule': 0.031, 'Markush to Molecule': 0.332, 'Molecule in Document': 0.460, 'Reaction QA': 0.316, 'Research Targets Identification': 0.485}
    ];
    const organicMaterialsData = [
        {'Electrolyte Table QA': 0.850, 'OLED Property Extraction': 0.490, 'Polymer Chart QA': 0.933, 'Polymer Composition QA': 0.954, 'Polymer Property Extraction': 0.705, 'Solubility Extraction': 0.468, 'Reaction Mechanism QA': 0.682},
        {'Electrolyte Table QA': 0.940, 'OLED Property Extraction': 0.336, 'Polymer Chart QA': 0.800, 'Polymer Composition QA': 0.945, 'Polymer Property Extraction': 0.692, 'Solubility Extraction': 0.479, 'Reaction Mechanism QA': 0.545},
        {'Electrolyte Table QA': 0.790, 'OLED Property Extraction': 0.406, 'Polymer Chart QA': 0.667, 'Polymer Composition QA': 0.945, 'Polymer Property Extraction': 0.681, 'Solubility Extraction': 0.440, 'Reaction Mechanism QA': 0.636},
        {'Electrolyte Table QA': 0.370, 'OLED Property Extraction': 0.201, 'Polymer Chart QA': 0.400, 'Polymer Composition QA': 0.853, 'Polymer Property Extraction': 0.329, 'Solubility Extraction': 0.410, 'Reaction Mechanism QA': 0.455},
        {'Electrolyte Table QA': 0.670, 'OLED Property Extraction': 0.037, 'Polymer Chart QA': 0.800, 'Polymer Composition QA': 0.844, 'Polymer Property Extraction': 0.705, 'Solubility Extraction': 0.363, 'Reaction Mechanism QA': 0.545},
        {'Electrolyte Table QA': 0.870, 'OLED Property Extraction': 0.477, 'Polymer Chart QA': 0.467, 'Polymer Composition QA': 0.881, 'Polymer Property Extraction': 0.629, 'Solubility Extraction': 0.426, 'Reaction Mechanism QA': 0.455},
        {'Electrolyte Table QA': 0.710, 'OLED Property Extraction': 0.259, 'Polymer Chart QA': 0.867, 'Polymer Composition QA': 0.927, 'Polymer Property Extraction': 0.514, 'Solubility Extraction': 0.371, 'Reaction Mechanism QA': 0.636},
        {'Electrolyte Table QA': 0.880, 'OLED Property Extraction': 0.093, 'Polymer Chart QA': 0.800, 'Polymer Composition QA': 0.927, 'Polymer Property Extraction': 0.606, 'Solubility Extraction': 0.397, 'Reaction Mechanism QA': 0.727},
        {'Electrolyte Table QA': 0.410, 'OLED Property Extraction': 0.180, 'Polymer Chart QA': 0.000, 'Polymer Composition QA': 0.450, 'Polymer Property Extraction': 0.406, 'Solubility Extraction': 0.347, 'Reaction Mechanism QA': 0.273},
        {'Electrolyte Table QA': 0.460, 'OLED Property Extraction': 0.263, 'Polymer Chart QA': 0.867, 'Polymer Composition QA': 0.734, 'Polymer Property Extraction': 0.536, 'Solubility Extraction': 0.399, 'Reaction Mechanism QA': 0.500},
        {'Electrolyte Table QA': 0.720, 'OLED Property Extraction': 0.292, 'Polymer Chart QA': 0.733, 'Polymer Composition QA': 0.881, 'Polymer Property Extraction': 0.652, 'Solubility Extraction': 0.432, 'Reaction Mechanism QA': 0.545},
        {'Electrolyte Table QA': 0.620, 'OLED Property Extraction': 0.392, 'Polymer Chart QA': 0.933, 'Polymer Composition QA': 0.936, 'Polymer Property Extraction': 0.636, 'Solubility Extraction': 0.400, 'Reaction Mechanism QA': 0.591},
        {'Electrolyte Table QA': 0.450, 'OLED Property Extraction': 0.234, 'Polymer Chart QA': 0.800, 'Polymer Composition QA': 0.679, 'Polymer Property Extraction': 0.171, 'Solubility Extraction': 0.351, 'Reaction Mechanism QA': 0.591}
    ];

    // Generate table content
    generateTable('overallAverage', models, overallAverageData, ['Fundamental Science', 'Alloy Materials', 'Biomedicine', 'Drug Discovery', 'Organic Materials', 'Overall Average']);
    generateTable('fundamentalScience', models, fundamentalScienceData, ['MMLU (science)', 'CMMLU (science)', 'Xiezhi-Ch (science)', 'Xiezhi-En (science)']);
    generateTable('alloyMaterials', models, alloyMaterialsData, ['Alloy Chart QA', 'Composition Extraction', 'Temperature Extraction', 'Sample Differentiation', 'Treatment Sequence']);
    generateTable('biomedicine', models, biomedicineData, ['Biology Chart QA', 'Chemical Entities Recognition', 'Disease Entities Recognition', 'Compound Disease Recognition', 'Gene Disease Function', 'Gene Disease Regulation']);
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

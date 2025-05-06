let myChart;
const chartCanvasId = 'chartCanvas';

function init(data) {
    console.log('init called');
    const indexData = parseCSVData(data);
    const uniqueIndexNames = [...new Set(indexData.map(item => item["\"index_name\""]))];
    populateIndexList(uniqueIndexNames, indexData);

    const searchInput = document.getElementById('index-search');
    const companyList = document.getElementById('company-list');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const listItems = companyList.querySelectorAll('li');

        listItems.forEach(item => {
            const indexName = item.textContent.toLowerCase();
            if (indexName.includes(searchTerm)) {
                item.style.display = ''; // Show the list item
            } else {
                item.style.display = 'none'; // Hide the list item
            }
        });
    });

    // Initial chart render (optional)
    const initialIndex = uniqueIndexNames[0];
    if (initialIndex) {
        const initialData = indexData.filter(item => item["\"index_name\""] === initialIndex);
        const chartCanvas = document.getElementById(chartCanvasId);
        if (chartCanvas) {
            renderChart(initialIndex.replace(/"/g, ''), initialData, chartCanvas);
        }
    }
    console.log('Data from fetchData:', indexData.slice(0, 2));
}

function renderChart(indexName, data, chartCanvas) {
    console.log('renderChart called for:', indexName, 'with data:', data.slice(0, 2));
    data.sort((a, b) => new Date(a["\"index_date\""]) - new Date(b["\"index_date\""]));
    const dates = data.map(item => item["\"index_date\""]);
    const rawClosingValues = data.map(item => item["\"closing_index_value\""]);
    console.log('Raw Closing Values (first 5):', rawClosingValues.slice(0, 5));
    const closingValues = rawClosingValues.map(value => parseFloat(value.replace(/"/g, '')));
    console.log('Chart Closing Values (after parseFloat, first 5):', closingValues.slice(0, 5));
    console.log('Chart Dates:', dates.slice(0, 5));

    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(chartCanvas, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: indexName + ' Closing Value',
                data: closingValues,
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false
                }
            },
            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                        mode: 'xy',
                    },
                    zoom: {
                        wheel: {
                            enabled: true, // Re-enable mouse wheel zoom
                        },
                        pinch: {
                            enabled: true, // Re-enable pinch zoom
                        },
                        mode: 'xy',
                    }
                }
            }
        }
    });
    console.log('Chart rendered for:', indexName);
}

function handleIndexClick(event, allData) {
    const indexName = event.target.textContent;
    console.log('handleIndexClick called for:', indexName);
    const filteredData = allData.filter(item => item["\"index_name\""] === `"${indexName}"`);
    console.log('Filtered data for', indexName, ':', filteredData.slice(0, 2));
    const chartCanvas = document.getElementById(chartCanvasId);
    renderChart(indexName, filteredData, chartCanvas);
}

function populateIndexList(indices, allData) {
    const companyList = document.getElementById('company-list');
    indices.forEach(index => {
        const listItem = document.createElement('li');
        listItem.textContent = index.replace(/"/g, '');
        listItem.addEventListener('click', (event) => handleIndexClick(event, allData));
        companyList.appendChild(listItem);
    });
}

function parseCSVData(csvText) {
    const lines = csvText.trim().split('\n');
    if (lines.length < 2) return [];
    const headers = lines[0].split(',');
    console.log('Headers:', headers);
    const data = [];
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        if (values.length === headers.length) {
            const entry = {};
            // Process each value based on the header
            for (let j = 0; j < headers.length; j++) {
                entry[headers[j].trim()] = values[j].trim();
            }
            data.push(entry);
        }
    }
    console.log('Parsed Data:', data.slice(0, 2));
    return data;
}

async function fetchData() {
    console.log('Fetching dump.csv...');
    try {
        const response = await fetch('dump.csv');
        console.log('Fetch response:', response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvData = await response.text();
        console.log('CSV Data:', csvData.substring(0, 150) + '...');
        const numLines = csvData.split('\n').length;
        console.log('Number of lines:', numLines);
        return csvData;
    } catch (error) {
        console.error('Error fetching CSV:', error);
        return null;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOMContentLoaded event fired!');
    const csvData = await fetchData();
    if (csvData) {
        init(csvData);
    }
});

console.log('Script.js is running!');
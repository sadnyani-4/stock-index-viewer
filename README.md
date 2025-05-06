# Stock Index Viewer

A simple web page that displays stock index data fetched from a `dump.csv` file. Users can view charts of different stock indices and interact with them using zoom and pan features. A search functionality is also included to easily find specific stock indices.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sadnyani-4/stock-index-viewer.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd stock-index-viewer
    ```
3.  **Run a local HTTP server:** You can use Python's built-in `http.server` (or `SimpleHTTPServer` for older Python versions):
    ```bash
    python -m http.server 8000
    ```
    or
    ```bash
    python -m SimpleHTTPServer 8000
    ```
4.  **Open in your browser:** Open your web browser and go to `http://localhost:8000`.

## Features

- **Responsive Layout:** Adapts to different screen sizes (desktop, tablet, mobile).
- **Interactive Charts:** Displays stock index performance using Chart.js.
- **Zoom and Pan:** Allows users to zoom in and pan on the charts for detailed exploration (using `chartjs-plugin-zoom`).
- **Search Functionality:** Enables users to quickly search and filter the list of stock indices.

## Bonus Opportunity - Relation to stockCharts

The added features, such as interactive zoom/pan and the search functionality, align with the spirit of enhancing user interaction and data exploration, which is likely a goal of the `stockCharts` open-source project. While not directly integrated, these additions demonstrate an understanding of how to go beyond basic requirements to provide a more useful and engaging user experience for visualizing financial data.

## Libraries Used

- [Chart.js](https://www.chartjs.org/): For rendering the line charts.
- [chartjs-plugin-zoom](https://www.npmjs.com/package/chartjs-plugin-zoom): For enabling zoom and pan functionality on the charts.

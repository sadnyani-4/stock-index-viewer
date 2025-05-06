# Stock Index Viewer

[View the live demo here](https://sadnyani-4.github.io/stock-index-viewer/)

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

As part of exploring the bonus opportunity, I reviewed the [learnscriptingorg/stockCharts](https://github.com/learnscriptingorg/stockCharts) open-source project. It's evident that `stockCharts` is a more feature-rich library focused on providing advanced tools for financial data visualization.

While this submission utilizes Chart.js for the core charting functionality due to the initial scope and ease of integration for this task, the added features like interactive zoom/pan and the search functionality for indices were implemented with the spirit of enhancing user interaction and data exploration – concepts that align with the likely goals of a project like `stockCharts`. These additions aim to provide a more dynamic and user-friendly experience beyond the basic charting requirement.

Future enhancements could involve exploring the integration of libraries like `stockCharts` to leverage its more specialized financial charting capabilities.

## Libraries Used

- [Chart.js](https://www.chartjs.org/): For rendering the line charts.
- [chartjs-plugin-zoom](https://www.npmjs.com/package/chartjs-plugin-zoom): For enabling zoom and pan functionality on the charts.

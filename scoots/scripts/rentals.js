// Rental
document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Fetch rental data from JSON file
        const response = await fetch('data/rentals.json');
        const data = await response.json();
        displayRentalsTable(data.rentals);
    } catch (error) {
        console.error('Error fetching rental data:', error);
    }

    // Function to display rentals in a table
    async function displayRentalsTable(rentals) {
        const rentalsTable = document.getElementById('rentals-table');

        // Create a table element
        const table = document.createElement('table');
        table.classList.add('rentals-table');

        // Create table header
        const headerRow1 = document.createElement('tr');
        headerRow1.innerHTML = `
            <th rowspan="2">Type</th>
            <th rowspan="2">Capacity</th>
            <th colspan="2">Reservation</th>
            <th colspan="2">Walk-In</th>
        `;
        const headerRow2 = document.createElement('tr');
        headerRow2.innerHTML = `
            <th>Half Day</th>
            <th>Full Day</th>
            <th>Half Day</th>
            <th>Full Day</th>
        `;

        table.appendChild(headerRow1);
        table.appendChild(headerRow2);

        // Populate the table with rental data
        rentals.forEach(rental => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${rental.type}</td>
                <td>${rental.capacity}</td>
                <td>$${rental.reservation.halfDay}</td>
                <td>$${rental.reservation.fullDay}</td>
                <td>$${rental.walkIn.halfDay}</td>
                <td>$${rental.walkIn.fullDay}</td>
            `;
            table.appendChild(row);
        });

        // Append the table to the rentalsTable div
        rentalsTable.appendChild(table);
    }
});
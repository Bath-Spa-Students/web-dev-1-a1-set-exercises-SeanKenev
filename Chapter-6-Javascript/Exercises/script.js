document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    const costPerLiterInput = document.getElementById('costPerLiter');
    const litersInput = document.getElementById('liters');
    const totalCostDisplay = document.getElementById('totalCost');

    calculateButton.addEventListener('click', function() {
        // Get values from inputs
        const costPerLiter = parseFloat(costPerLiterInput.value);
        const liters = parseFloat(litersInput.value);

        // Calculate total cost
        const totalCost = costPerLiter * liters;

        // Display total cost
        totalCostDisplay.textContent = `Total cost: $${totalCost.toFixed(2)}`;
    });
});

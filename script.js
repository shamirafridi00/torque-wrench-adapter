// script.js
function calculateAdapterTorque() {
    const wrenchLength = parseFloat(document.getElementById('wrenchLength').value);
    const adapterLength = parseFloat(document.getElementById('adapterLength').value);
    const torqueValue = parseFloat(document.getElementById('torqueValue').value);
    const desiredTorque = parseFloat(document.getElementById('desiredTorque').value);

    const wrenchLengthUnit = document.getElementById('wrenchLengthUnit').value;
    const adapterLengthUnit = document.getElementById('adapterLengthUnit').value;
    const torqueValueUnit = document.getElementById('torqueValueUnit').value;
    const desiredTorqueUnit = document.getElementById('desiredTorqueUnit').value;

    // Convert units to common units (e.g., inches and ft-lbs)
    let wrenchLengthInches = wrenchLength;
    if (wrenchLengthUnit === 'cm') {
        wrenchLengthInches = wrenchLength / 2.54;
    }

    let adapterLengthInches = adapterLength;
    if (adapterLengthUnit === 'cm') {
        adapterLengthInches = adapterLength / 2.54;
    }

    let torqueValueFtLbs = torqueValue;
    let desiredTorqueFtLbs = desiredTorque;
    if (torqueValueUnit === 'Nm') {
        torqueValueFtLbs = torqueValue * 0.73756;
    }
    if (desiredTorqueUnit === 'Nm') {
        desiredTorqueFtLbs = desiredTorque * 0.73756;
    }

    if (isNaN(wrenchLengthInches) || isNaN(adapterLengthInches) || isNaN(torqueValueFtLbs) || isNaN(desiredTorqueFtLbs)) {
        alert('Please enter valid numbers.');
        return;
    }

    const appliedTorque = (torqueValueFtLbs * (wrenchLengthInches + adapterLengthInches)) / wrenchLengthInches;
    document.getElementById('adapterTorque').textContent = appliedTorque.toFixed(2);

    // Update result unit
    const resultUnit = desiredTorqueUnit === 'Nm' ? 'Nm' : 'ft-lbs';
    document.getElementById('resultUnit').textContent = resultUnit;
}

// Reset button functionality is handled by the form reset attribute
document.getElementById('torqueForm').addEventListener('reset', function() {
    document.getElementById('adapterTorque').textContent = '0.00';
    document.getElementById('resultUnit').textContent = 'ft-lbs';
});

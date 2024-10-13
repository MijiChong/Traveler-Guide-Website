document.addEventListener('DOMContentLoaded', function() {
    const sliders = [
        { id: 'activities', min: 40, max: 550 },
        { id: 'food', min: 40, max: 500 },
        { id: 'accommodation', min: 40, max: 1000 }
    ];

    sliders.forEach(slider => {
        const input = document.getElementById(`${slider.id}-slider`);
        const display = document.getElementById(`${slider.id}-slider-value`);
        
        input.addEventListener('input', function() {
            display.textContent = 'MYR ' + input.value;
            const percentage = ((input.value - input.min) / (input.max - input.min)) * 100;
            input.style.setProperty('--percent', percentage + '%');
        });
        // Initial update for the gradient
        input.dispatchEvent(new Event('input'));
    });

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            console.log('Selected state:', this.id);
            // Add functionality to update other parts of the page or send to server
        });
    });

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log('Preference changed:', this.value, 'is now', this.checked);
            // Add functionality to update based on preferences
        });
    });
});
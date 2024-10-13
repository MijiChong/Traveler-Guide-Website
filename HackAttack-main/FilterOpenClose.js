document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.side-panel-toggle');
    const wrapper = document.querySelector(".wrapper"); // Ensure the wrapper class is correct

    toggleButton.addEventListener('click', function() {
        wrapper.classList.toggle('side-panel-open');
    });
});
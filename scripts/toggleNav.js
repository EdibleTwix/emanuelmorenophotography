document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    const content = document.querySelector('.content');

    if (sidebar && toggleButton && content) {
        toggleButton.textContent = '⏵';

        toggleButton.addEventListener('click', function () {
            sidebar.classList.toggle('open');
            sidebar.classList.toggle('closed');

            if (sidebar.classList.contains('open')) {
                toggleButton.textContent = '⏴';
                sidebar.style.left = '0';
                toggleButton.style.left = '220px';
                content.style.marginLeft = '0px';
                content.style.width = '100%';
            } else {
                toggleButton.textContent = '⏵';
                sidebar.style.left = '-220px';
                toggleButton.style.left = '0';
                content.style.marginLeft = '0';
                content.style.width = '100%';
            }
        });
    }
});

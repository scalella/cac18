document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('a[data-confirm="true"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const userConfirmed = confirm('NOOOO!!! ¿Como te vas a ir de una red social a otra?!!!');
            if (userConfirmed) {
                window.location.href = this.href; 
            }
        });
    });
});

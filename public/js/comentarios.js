document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();

            const name = form.querySelector('input[name="name"]').value;
            const comment = form.querySelector('input[name="comment"]').value;

            const commentSection = form.previousElementSibling;
            commentSection.innerHTML += `<strong>${name}:</strong> ${comment}<br>`;

            form.reset();
        });
    });
});

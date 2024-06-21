document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        { img: "./public/img/CODE1.png", usuario: "CODEGRAM", descripcion: "Bienvenidos a CODE/GRAM" },
        { img: "./public/img/_P3_MVRKQBqyoPJSWp3vPA.png", usuario: "Mal identado", descripcion: "#MiSetupParaProgramar" },
        { img: "./public/img/una-persona-de-espalda--programando-en-js (1).png", usuario: "Chabon", descripcion: "#MiSetupParaProgramar" },
        { img: "./public/img/jefe conejo.png", usuario: "JEFE CONEJO", descripcion: "Me olvide el where!!!!" },
        { img: "./public/img/una-persona-de-espalda--programando-en-js.png", usuario: "USUARIO", descripcion: "#MiSetupParaProgramar" },
        { img: "./public/img/S1fPvNXwTqW3GcibGasFkg.png", usuario: "Mi mama es una ia", descripcion: "#MiSetupParaProgramar" },
        { img: "./public/img/d_irmJAtSQenoErrpXOeqA.png", usuario: "Estafado x la chica del brunch", descripcion: "#MiSetupParaProgramar" },
        { img: "./public/img/dragones de gehena.png", usuario: "Don Dragon", descripcion: "Me compre una motito con mi primer sueldo de programador" },
        { img: "./public/img/sXcHnVU3QgiyeSG_zV2IKw.png", usuario: "el rubio vikingo", descripcion: "#MiSetupParaProgramar" },
        { img: "./public/img/a-rocker-with-a-beard--tattoos-and-a-mohawk-coding.png", usuario: "El tyn0", descripcion: "Paseando por ciudad vscode" },
        { img: "./public/img/codigo-html-de-una-pagina-web.png", usuario: "Hendrix", descripcion: "learning to code, foxies" }
    ];

    const postContainer = document.getElementById('post-container');

    if (postContainer) {
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post-feed');

            postDiv.innerHTML = `
                <img src="${post.img}" alt="Post de ${post.usuario}">
                <h2>${post.usuario}</h2>
                <p>${post.descripcion}</p>
                <p class="comments"></p>
                <form class="comment-form">
                    <input type="text" name="name" placeholder="Tu nombre" required>
                    <input type="text" name="comment" placeholder="Tu comentario" required>
                    <button type="submit">Enviar</button>
                </form>
            `;

            postContainer.appendChild(postDiv);
        });
    } else {
        console.error('Contenedor de posts no encontrado');
    }

    initCommentForms();
});

function initCommentForms() {
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
}

const modal = document.getElementById("unicefight-modal");

const galleryImage = document.getElementById("gallery-image");
const currentImageText = document.getElementById("current-image");
const thumbnailsContainer = document.getElementById("gallery-thumbnails");

const nextButton = document.getElementById("next-image");
const prevButton = document.getElementById("prev-image");

const modalTitle =
    document.getElementById("modal-title");

const totalImages =
    document.getElementById("total-images");

const modalDescription =
    document.getElementById("modal-description");

const modalTitulo = document.getElementById("modal-titulo");

const modalRole =
    document.getElementById("modal-role");

const modalTechnologies =
    document.getElementById("modal-technologies");

const developmentSection =
    document.getElementById("development-section");

const modalGithub =
    document.getElementById("modal-github");

const modalDemo =
    document.getElementById("modal-demo");

const projects = {

    unicefight: {

        title: "UniceFight",

        images: [
            "assets/images/menu.png",
            "assets/images/fase1.png",
            "assets/images/fase2.png",
            "assets/images/fase3.png",
            "assets/images/fase4.png",
            "assets/images/fase5.png"
        ],

        description: `O UniceFight é um jogo de luta feito puramente em JavaScript e a API HTML5 Canvas, responsável pela renderização de todos os elementos gráficos, animações, cenários e interface do jogo. O projeto foi desenvolvido em equipe como projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas.`,

        role: `Atuei como programador, sendo responsável pelo desenvolvimento da lógica do jogo. Também atuei como líder do meu grupo, sendo responsável pela organização geral do projeto.`,

        technologies: [
            "JavaScript",
            "HTML5 Canvas",
            "HTML5",
            "CSS3"
        ],

        github: "https://github.com/Pedro312777/UniceFight",

        demo: "https://pedro312777.github.io/UniceFight/",

        hasDevelopment: true

    },

    fruitsystem: {

    title: "FruitSystem",

    images: [
        "assets/images/login.png",
        "assets/images/dashboard.png",
        "assets/images/novoproduto.jpeg",
        "assets/images/estoque.jpeg",
        "assets/images/cadfornecedor.jpeg",
        "assets/images/listafornecedores.jpeg",
        "assets/images/venda.jpeg",
        

    ],

    description: `O sistema FruitSystem foi desenvolvido para uma empresa real do setor de HortiFrut chamada Paraiso das Frutas, visando ajudá-la na gestão do seu negócio, a plataforma integra: sistema de vendas, fornecedores, compras e estoque em um só lugar. O projeto foi desenvolvido em equipe como projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas.`,

    role: `Atuei como programador Front-End no desenvolvimento das telas de cadastro, listagem e informações de fornecedores, contribuindo para a construção da interface e das funcionalidades do sistema.`,

    technologies: [
        "React Native",
        "Expo",
        "JavaScript"
    ],

    github: "LINK_DO_REPOSITORIO",

    demo: null,

    hasDevelopment: false

},

    buy: {

        title: "Buy",

        images: [
            "assets/images/cadastro.png",
            "assets/images/home.png",
            "assets/images/favoritos.png",
            "assets/images/carrinho.png",
            "assets/images/pedidos.png"
        ],

        description: `O Buy é uma plataforma web de compra e venda de produtos feita para consumidores e comerciantes de uma determinada região. O Buy possibilita aos consumidores encontrar os produtos que desejam em lojas perto da sua casa e comparar os preços antes da  compra, para os comerciantes o Buy possibilita a aportunidade de divulgarem suas lojas e seus produtos. O projeto foi desenvolvido em equipe como projeto acadêmico da matéria "Metologia Ágil Scrum" durante o curso de Análise e Desenvolvimento de Sistemas.`,

        role: `Atuei no desenvolvimento do front-end das páginas de Carrinho, Pedidos e Favoritos, contribuindo para a criação das interfaces e da experiência de navegação dessas funcionalidades.`,

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript"
        ],

        github: "https://github.com/Pedro312777/BUY",

        demo: null,

        hasDevelopment: false

    },

    listadetarefas: {

        title: "Lista de tarefas",

        images: [
            "assets/images/listavazia.png",
            "assets/images/formulario.png",
            "assets/images/tarefado.png",
            "assets/images/tarefamd.png",
            "assets/images/tarefaconcluida.png",
            "assets/images/editartarefa.png",
            "assets/images/tarefaeditada.png",
            "assets/images/formresponsivo.png"
        ],

        description: `Programa web de gerenciamento de tarefas do dia desenvolvido com HTML5, CSS3 e JavaScript, permitindo criar, editar, excluir e concluir tarefas, com suporte a horários e descrições. O sistema utiliza LocalStorage para persistência dos dados e possui uma interface dinâmica para gerenciamento das tarefas e interação com o formulário.`,

        role: `Projeto desenvolvido com objetivo de aprimorar minhas habilidades em HTML5, CSS3 e JavaScript, colocando em prática conceitos de desenvolvimento web, manipulação do DOM, e armazenamento de dados utilizando LocalStorage, desenvolvendo uma aplicação funcional e responsivo`,

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript"
        ],

        github: "https://github.com/Pedro312777/Lista-de-tarefas",

        demo: null,

        hasDevelopment: false

    }

};

let currentProject;
let currentImage = 0;
let images = [];

function openProjectModal(projectName) {

    currentProject = projects[projectName];

    images = currentProject.images;

    currentImage = 0;

    modal.style.display = "flex";

    modalTitle.textContent =
        currentProject.title;

    modalDescription.textContent =
        currentProject.description;

    modalRole.textContent =
        currentProject.role;

    if(projectName === "listadetarefas"){
        modalTitulo.textContent = "Objetivo do projeto:";
    }
    else{
        modalTitulo.textContent = "Meu Papel:";
    }

    totalImages.textContent =
        images.length;

    modalGithub.href =
        currentProject.github;

    modalTechnologies.innerHTML = "";

    currentProject.technologies.forEach(technology => {

        const span =
            document.createElement("span");

        span.textContent =
            technology;

        modalTechnologies.appendChild(span);

    });

    if (currentProject.hasDevelopment) {

        developmentSection.style.display =
            "block";

    } else {

        developmentSection.style.display =
            "none";

    }

    if (currentProject.demo) {

        modalDemo.style.display =
            "inline-flex";

        modalDemo.href =
            currentProject.demo;

    } else {

        modalDemo.style.display =
            "none";

    }

    galleryImage.src =
        images[currentImage];

    currentImageText.textContent =
        currentImage + 1;

    createThumbnails();

    updateActiveThumbnail();

}

function createThumbnails() {

    thumbnailsContainer.innerHTML = "";

    images.forEach((image, index) => {

        const thumbnail = document.createElement("img");

        thumbnail.src = image;

        thumbnail.alt = `Miniatura da imagem ${index + 1}`;

        thumbnail.addEventListener("click", () => {

            currentImage = index;

            galleryImage.src = images[currentImage];

            currentImageText.textContent = currentImage + 1;

            updateActiveThumbnail();

        });

        thumbnailsContainer.appendChild(thumbnail);

    });

}

nextButton.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    galleryImage.src = images[currentImage];

    currentImageText.textContent = currentImage + 1;

    updateActiveThumbnail();

});

prevButton.addEventListener("click", () => {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    galleryImage.src = images[currentImage];

    currentImageText.textContent = currentImage + 1;

    updateActiveThumbnail();

});

function updateActiveThumbnail() {

    const thumbnails =
        thumbnailsContainer.querySelectorAll("img");

    thumbnails.forEach((thumbnail, index) => {

        thumbnail.classList.toggle(
            "active",
            index === currentImage
        );

    });

}

document
    .getElementById("close-unicefight")
    .addEventListener("click", () => {

        modal.style.display = "none";

    });
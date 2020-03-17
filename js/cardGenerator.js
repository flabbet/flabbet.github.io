const projectsDiv = document.querySelector("#projectsContainer");

generateCards(projects);

function generateCards(projects){
    for (let i = 0; i < projects.length; i++) {
        projectsDiv.appendChild(generateCard(projects[i]));     
    }
}

function generateCard(project){
    let card = document.createElement("div");
    card.setAttribute("class", "card withWidth");

    card.innerHTML = `
    <div class="project-card">
    <a href="${project.link}" target="_blank">
        ${project.projectName}
    </a>

    <div class="project-card-body">
        ${project.description}
        <div class="project-card-technologies">
            ${generateProjectTechnologies(project.technologies)}
            <br />
            <div class="project-lang">
                <span class="dot" style="background-color: ${project.langColor}"></span>
                <span>${project.lang}</span>
            </div>
            <a href="${project.link}" target="_blank">
                <div class="project-link">
                    <img src="images/${project.image === undefined ? "GitHub-Mark.png": project.image}" />
                </div>
            </a>
        </div>
    </div>
</div>
    `   
    return card;
}

function generateProjectTechnologies(technologies){
    let output = "";
    technologies.forEach(technology => {
        output +=`<div class="project-card-technology" style="color: ${technology.fontColor}; background-color: ${technology.color}">
        ${technology.name}
    </div>`;        
    });
    return output;
}
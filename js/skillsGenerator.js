const languagesContainer = document.querySelectorAll(".skillCol-items")[0];
const technolgoiesContainer = document.querySelectorAll(".skillCol-items")[1];
const otherContainer = document.querySelectorAll(".skillCol-items")[2];

generateSkillCategory(skills.languages, languagesContainer);
generateSkillCategory(skills.technologies, technolgoiesContainer);
generateSkillCategory(skills.other, otherContainer);

function generateSkillCategory(skills, container){
    skills.forEach(skill => {
        let elem = document.createElement("div");
        elem.setAttribute("class", "skillCol-item");
        elem.innerHTML = skill;
        container.appendChild(elem);
    });
}
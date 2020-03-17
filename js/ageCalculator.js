const ageSpan = document.querySelector("#ageSpan");
ageSpan.innerHTML = calculateAge();

function calculateAge(){
    const date1 = new Date();
    const date2 = new Date('03/24/2003');
    const diffTime = Math.abs(date2 - date1);
    const diffYears = Math.trunc(Math.ceil(diffTime / (1000 * 3600 * 24)) / 365);
    return diffYears;
}
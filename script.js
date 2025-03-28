function filterProjects() {
    const input = document.getElementById('search-bar');
    const filter = input.value.toLowerCase();
    const projects = document.getElementById('projects-section').getElementsByClassName('project');

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        const name = project.getAttribute('data-name').toLowerCase();
        if (name.indexOf(filter) > -1) {
            project.style.display = "";
        } else {
            project.style.display = "none";
        }
    }
}

function scrollToSearch() {
    const searchContainer = document.getElementById('search-container');
    searchContainer.scrollIntoView({ behavior: 'smooth' });
}

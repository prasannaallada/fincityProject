document.addEventListener('DOMContentLoaded', function() {
    // Navigation Button Click Event Listeners
    document.querySelector('a[href="#about"]').addEventListener('click', scrollToSection);
    document.querySelector('a[href="#projects"]').addEventListener('click', scrollToSection);
    document.querySelector('a[href="#contact"]').addEventListener('click', scrollToSection);

    // Project Button Click Event Listener
    document.getElementById('projectButton').addEventListener('click', toggleProjectForm);

    // Add Project Button Click Event Listener
    document.getElementById('addProject').addEventListener('click', addProject);
});

function scrollToSection(event) {
    event.preventDefault();
    const targetSection = document.querySelector(event.target.getAttribute('href'));
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function toggleProjectForm() {
    const projectForm = document.getElementById('projectForm');
    projectForm.style.display = projectForm.style.display === 'none' ? 'block' : 'none';
}

function addProject() {
    // Add logic to collect project details and append to Projects View section
    const projectName = prompt('Enter Project Name:');
    const projectDescription = prompt('Enter Project Description:');

    const projectView = document.getElementById('projectsView');
    const projectElement = document.createElement('div');
    projectElement.innerHTML = `<h3>${projectName}</h3><p>${projectDescription}</p>`;
    projectView.appendChild(projectElement);
}
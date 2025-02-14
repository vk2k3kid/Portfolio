// Function to toggle the About Me section visibility
function toggleAbout() {
    // Get the About section and other sections
    const aboutSection = document.getElementById('about');
    const otherSections = document.querySelectorAll('.content-section');

    // First, hide all sections
    otherSections.forEach(section => section.classList.remove('active'));

    // Toggle the active class for About section
    aboutSection.classList.toggle('active');

    // Scroll to the About section
    if (aboutSection.classList.contains('active')) {
        window.scrollTo({
            top: aboutSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.content-section');
    const targetSection = document.getElementById(sectionId);

    // Hide all sections first
    sections.forEach(section => section.classList.remove('active'));

    // Make the target section visible and apply the fade-in effect
    targetSection.classList.add('active');

    // Scroll to the section
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
}

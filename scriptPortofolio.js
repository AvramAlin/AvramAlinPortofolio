document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("startButton").addEventListener("click", function() {
        document.getElementById("aboutMe").scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("aboutmeNav").addEventListener("click", function() {
        document.getElementById("aboutMe").scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("educationNav").addEventListener("click", function() {
        document.getElementById("education").scrollIntoView({ behavior: 'smooth' });
    });
});


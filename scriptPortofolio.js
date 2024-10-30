

    document.getElementById("aboutmeNav").addEventListener("click", function() {
        document.getElementById("aboutMe").scrollIntoView({ behavior: 'smooth' });
    });



    document.getElementById("educationNav").addEventListener("click", function() {
        document.getElementById("education").scrollIntoView({ behavior: 'smooth' });
    });


document.getElementById("downloadCV").addEventListener("click",function(){
    const link = document.createElement("a");
    link.href = "AvramAlinResumeGit.pdf";
    link.download = "AvramAlinResume.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
});


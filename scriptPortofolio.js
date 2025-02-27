document.getElementById("aboutmeNav").addEventListener("click", function () {
  document.getElementById("aboutMe").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("educationNav").addEventListener("click", function () {
  document.getElementById("education").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("experienceNav").addEventListener("click", function () {
  document
    .getElementById("experienceCert")
    .scrollIntoView({ behavior: "smooth" });
});
document.getElementById("projectsNav").addEventListener("click", function () {
  document
    .getElementById("personalProjects")
    .scrollIntoView({ behavior: "smooth" });
});
document.getElementById("hobbiesNav").addEventListener("click", function () {
  document.getElementById("hobbiesId").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("skillsNav").addEventListener("click", function () {
  document.getElementById("skillsId").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("downloadCV").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "./AvramAlinResumeReact.pdf";
  link.download = "AvramAlinResumeDownload.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
});

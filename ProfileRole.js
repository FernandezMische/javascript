UpdateNameBtn.addEventListener("click", function () {
  const newName = prompt("Enter new name:");
  const UpdateName = document.getElementById("profileName");
  if (newName) {
    UpdateName.textContent = newName;
  }
});

UpdateRoleBtn.addEventListener("click", function () {
  const newRole = prompt("Enter new role:");
  const UpdateRole = document.getElementById("profileRole");
  if (newRole) {
    UpdateRole.textContent = newRole;
  }
});

ToggleStatusBtn.addEventListener("click", function () {
  const cardBG = document.getElementById("profileCard");
  const currentColour = cardBG.style.backgroundColor;

  if (currentColour === "white" || currentColour === "rgb(255, 255, 255)") {
    cardBG.style.backgroundColor = "rgba(200, 202, 255, 1)";
  } else {
    cardBG.style.backgroundColor = "white";
  }
});

ChangeImageBtn.addEventListener("click", function () {
  const newImg = prompt("drop new image:");
  if (newImg != null && newImg != "") {
    const imgElement = document.getElementById("profileImg");
    imgElement.src = newImg;
  }
});

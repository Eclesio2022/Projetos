function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substiuir a img
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
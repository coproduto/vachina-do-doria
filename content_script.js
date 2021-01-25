const elems = document.querySelectorAll(
  'h1, h2, h3, h4, h5, h6, p, li, td, caption, span, a'
)

elems.forEach((elem) => {
  elem.innerHTML = elem.innerHTML.replace(/coronavac/i, 'Vachina do Dória')
  elem.innerHTML = elem.innerHTML.replace(/vacina do brasil/i, 'Vachina do Dória')
})

function filtrarPaginas(){
  var input, filtro, ul, li, a, valor;
  input = document.getElementById('buscar');
  filtro = input.value.toLowerCase();
  ul = document.getElementById('lista');
  li = ul.getElementsByTagName('li');

  for (var i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    valor = a.textContent || a.innerText;
    if (valor.toLowerCase().indexOf(filtro) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}

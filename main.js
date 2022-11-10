// let items = [
//   {
//     nombre: "Zapatillas",
//     descripcion: "Estas zapatillas son de trekking y son impermeables",
//     precio: "100000",
//     imagen:
//       "https://images.unsplash.com/photo-1582898967731-b5834427fd66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     nombre: "Poleron",
//     descripcion: "Este poleron blanco térmico manga larga es 100% algodon",
//     precio: "40000",
//     imagen:
//       "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
//   },
//   {
//     nombre: "Pantalon",
//     descripcion: "Este pantalon es deportivo",
//     precio: "59990",
//     imagen:
//       "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
//   },
// ]

const items = JSON.parse(localStorage.getItem("items"))

const listaArticulos = document.getElementById("lista-articulos")

pintarItems(items)

function pintarItem(producto) {
  const card = document.createElement("div")
  card.classList.add("card", "m-3")
  card.style.width = "18rem"
  card.innerHTML = `<img src="${producto.imagen}"
                    class="card-img-top"
                    alt="Imagen de zapatilla"
                    />
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">
                        ${producto.descripcion}
                        </p>
                        <p class="card-text">$ ${producto.precio}</p>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">Agregar al carrito</a>
                        </div>
                    </div>`

  listaArticulos.appendChild(card)
}

function pintarItems(productos) {
  listaArticulos.innerHTML = ""
  productos.forEach(pintarItem)
}

const btnSearch = document.getElementById("btn-search")
const inputSearch = document.querySelector("#input-search")

btnSearch.addEventListener("click", (e) => {
  e.preventDefault()
  const productos = items.filter((item) => {
    return item.nombre.toLowerCase().includes(inputSearch.value.toLowerCase())
  })

  pintarItems(productos)
})

const btnForm = document.querySelector("#btn-form")

btnForm.addEventListener("click", (e) => {
  e.preventDefault()
  const nombreInput = document.querySelector("#nombre")
  const descripcionInput = document.querySelector("#descripcion")
  const precioInput = document.querySelector("#precio")
  const imagenInput = document.querySelector("#imagen")

  if (
    !nombreInput.value ||
    !descripcionInput.value ||
    !precioInput.value ||
    !imagenInput.value
  ) {
    alert("Hay un campo vacío")
    return
  }

  items.push({
    nombre: nombreInput.value,
    descripcion: descripcionInput.value,
    precio: precioInput.value,
    imagen: imagenInput.value,
  })

  nombreInput.value = ""
  descripcionInput.value = ""
  precioInput.value = ""
  imagenInput.value = ""

  pintarItems(items)
  localStorage.setItem("items", JSON.stringify(items))
})

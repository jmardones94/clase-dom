const items = [
  {
    nombre: "Zapatillas",
    descripcion: "Estas zapatillas son de trekking y son impermeables",
    precio: "100000",
    imagen:
      "https://images.unsplash.com/photo-1582898967731-b5834427fd66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    nombre: "Poleron",
    descripcion: "Este poleron blanco térmico manga larga es 100% algodon",
    precio: "40000",
    imagen:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
  },
  {
    nombre: "Pantalon",
    descripcion: "Este pantalon es deportivo",
    precio: "59990",
    imagen:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
]

const listaArticulos = document.getElementById("lista-articulos")

items.forEach((item) => {
  agregarProducto(item)
})

function agregarProducto(producto) {
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

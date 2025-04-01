# Práctica 4 - API REST Tienda de Relojes

## Endpoints del API

| Método HTTP | Ruta                     | Cuerpo (JSON)                  | Descripción                                               | Respuestas esperadas              |
|-------------|--------------------------|--------------------------------|------------------------------------------------------------|-----------------------------------|
| **GET**     | `/api/marcas`           | -                              | Obtiene una lista con todas las marcas.                   | `200 OK`                          |
| **GET**     | `/api/marcas/{id}`      | -                              | Devuelve los datos de una marca específica por ID.         | `200 OK`, `404 Not Found`         |
| **POST**    | `/api/marcas`           | `ModeloMarca`                  | Crea una nueva marca con los datos proporcionados.         | `201 Created`                     |
| **PUT**     | `/api/marcas/{id}`      | `ModeloMarca`                  | Actualiza una marca existente con el ID indicado.          | `200 OK`, `404 Not Found`         |
| **DELETE**  | `/api/marcas/{id}`      | -                              | Elimina una marca con el ID indicado.                      | `204 No Content`, `404 Not Found` |

---

## Ejemplo:
{
  "id": "Patek",
  "tipo": "Clasico",
  "precioAprox": 8500.0,
  "descripcion": "El lujo en un reloj. Una de las marcas más reconocidas mundialmente."
}

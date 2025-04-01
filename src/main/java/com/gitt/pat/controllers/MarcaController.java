package com.gitt.pat.controllers;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/marcas")
public class MarcaController {

    private final Map<String, ModeloMarca> marcas = new HashMap<>();
    public MarcaController() {
        marcas.put("Patek", new ModeloMarca("Patek", "Clasico", 8500.0, "El lujo en un reloj. Una de las marcas más reconocidas mundialmente."));
        marcas.put("Apple", new ModeloMarca("Apple", "Inteligente", 400.0, "Tu teléfono en tu muñeca con todas las aplicaciones, resistencia y funcionalidad."));
        marcas.put("Richard", new ModeloMarca("Richard", "Deportivo", 635000.0, "Comodidad e ingeniería de primera, ¡por algo lo lleva Nadal!"));

    }


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ModeloMarca crear(@RequestBody ModeloMarca nuevaMarca) {
        marcas.put(nuevaMarca.id(), nuevaMarca);
        return nuevaMarca;
    }

    @GetMapping("/{id}")
    public ModeloMarca leer(@PathVariable String id) {
        return marcas.get(id);
    }

    @PutMapping("/{id}")
    public ModeloMarca actualizar(@PathVariable String id, @RequestBody ModeloMarca marcaActualizada) {
        if (!marcas.containsKey(id)) {
            return null;
        }
        marcas.put(id, marcaActualizada);
        return marcaActualizada;
    }

    @DeleteMapping("/{id}")
    public void borrar(@PathVariable String id) {
        marcas.remove(id);
    }

    @GetMapping
    public Collection<ModeloMarca> listar() {
        return marcas.values();
    }

}

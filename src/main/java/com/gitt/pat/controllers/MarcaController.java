package com.gitt.pat.controllers;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/marcas")
public class MarcaController {

    private final Map<String, ModeloMarca> marcas = new HashMap<>();

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
}

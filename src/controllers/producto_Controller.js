import mongoose from 'mongoose';
import Producto  from '../models/Producto.js';

const listarProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        console.error("Error al listar productos:", error);
        res.status(500).json({ error: 'Error al listar productos' });
    }
};

const editarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { marca, labrado, caracteristicas, alto, ancho, rin, costo } = req.body;

        // Validar los datos antes de la actualización

        const productoActualizado = await Producto.findOneAndUpdate(
            { _id: id },
            { marca, labrado, caracteristicas, alto, ancho, rin, costo },
            { new: true }
        );

        if (!productoActualizado) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.status(200).json(productoActualizado);
    } catch (error) {
        console.error("Error al editar producto:", error);
        res.status(500).json({ error: 'Error al editar producto' });
    }
};

const añadirProducto = async (req, res) => {
    try {
        
        // Elimina el campo _id antes de insertar
        delete req.body._id;

        // No proporcionar _id manualmente para que MongoDB lo asigne automáticamente
        const producto = await Producto.create(req.body);

        res.status(200).json({ msg: `Registro exitoso del Producto ${producto._id}`, producto });
    } catch (error) {
        console.log("Error al añadir producto:", error);

        res.status(500).json({ error: 'Error al añadir producto' });
    }
};


export { listarProductos, editarProducto, añadirProducto };


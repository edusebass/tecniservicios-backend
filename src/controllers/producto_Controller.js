import Producto  from '../models/Producto.js';

const listarProductos = async (req,res)=>{
    const productos = await Producto.find().select("-_id")

    res.status(200).json(productos)
}

const editarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { marca, labrado, caracteristicas, alto, ancho, rin, costo } = req.body;

        // Puedes validar los datos antes de actualizar el producto

        const productoActualizado = await Producto.findOneAndUpdate(
            { key: id },
            { marca, labrado, caracteristicas, alto, ancho, rin, costo },
            { new: true }
        );

        if (!productoActualizado) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.status(200).json(productoActualizado);
    } catch (error) {
        console.log("Error al editar producto:", error);
        res.status(500).json({ error: 'Error al editar producto' });
    }
};



export { listarProductos, editarProducto }
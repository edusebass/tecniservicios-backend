import mongoose from 'mongoose'

const productoSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true,
    },
    labrado: {
        type: String,
        required: true,
    },
    caracteristicas: {
        type: String,
        required: true,
    },
    alto: {
        type: Number,
        required: true,
    },
    ancho: {
        type: Number,
        required: true,
    },
    rin: {
        type: Number,
        required: true,
    },
    costo: {
        type: Number,
        required: true,
    },
    pvp: {
        type: Number,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    linkimg: {
        type: String,
        required: true,
    },
});

const Producto = mongoose.model('producto', productoSchema);


export default Producto;

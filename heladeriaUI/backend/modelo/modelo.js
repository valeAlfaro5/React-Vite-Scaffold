import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  sku: { type: Number, required: true },
  sirve: { 
    type: String, 
    required: true, 
    enum: ['galleta waffle', 'vaso'] 
  },
}, { timestamps: true });

export default mongoose.model('Inventory', inventorySchema, 'inventory');

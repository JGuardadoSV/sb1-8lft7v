import React, { useState, useEffect } from 'react'
import { Barcode, DollarSign, Package, Tag } from 'lucide-react'

interface ProductFormProps {
  scannedBarcode: string
}

const ProductForm: React.FC<ProductFormProps> = ({ scannedBarcode }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio1: '',
    precio2: '',
    costo: '',
    existencias: '',
    marca: '',
    codigodebarra: '',
  })

  useEffect(() => {
    if (scannedBarcode) {
      setFormData(prev => ({ ...prev, codigodebarra: scannedBarcode }))
    }
  }, [scannedBarcode])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Producto registrado:', formData)
    // Aquí puedes agregar la lógica para enviar los datos a tu backend
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Package className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="Nombre del producto"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="precio1" className="block text-sm font-medium text-gray-700">Precio 1</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              name="precio1"
              id="precio1"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
              value={formData.precio1}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="precio2" className="block text-sm font-medium text-gray-700">Precio 2</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              name="precio2"
              id="precio2"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
              value={formData.precio2}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="costo" className="block text-sm font-medium text-gray-700">Costo</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            name="costo"
            id="costo"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="0.00"
            value={formData.costo}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="existencias" className="block text-sm font-medium text-gray-700">Existencias</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Package className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            name="existencias"
            id="existencias"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="0"
            value={formData.existencias}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="marca" className="block text-sm font-medium text-gray-700">Marca</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Tag className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="marca"
            id="marca"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="Marca del producto"
            value={formData.marca}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="codigodebarra" className="block text-sm font-medium text-gray-700">Código de Barras</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Barcode className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="codigodebarra"
            id="codigodebarra"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="Código de barras"
            value={formData.codigodebarra}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Registrar Producto
        </button>
      </div>
    </form>
  )
}

export default ProductForm
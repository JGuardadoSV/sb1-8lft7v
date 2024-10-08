import React, { useState } from 'react'
import { Barcode, Package } from 'lucide-react'
import ProductForm from './components/ProductForm'
import BarcodeScanner from './components/BarcodeScanner'

function App() {
  const [scannedBarcode, setScannedBarcode] = useState('')

  const handleBarcodeScanned = (barcode: string) => {
    setScannedBarcode(barcode)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <Package className="w-10 h-10 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Registro de Productos</h1>
        </div>
        <BarcodeScanner onBarcodeScanned={handleBarcodeScanned} />
        <ProductForm scannedBarcode={scannedBarcode} />
      </div>
    </div>
  )
}

export default App
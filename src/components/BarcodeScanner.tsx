import React, { useState } from 'react'
import { Barcode } from 'lucide-react'

interface BarcodeScannerProps {
  onBarcodeScanned: (barcode: string) => void
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onBarcodeScanned }) => {
  const [barcode, setBarcode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onBarcodeScanned(barcode)
    setBarcode('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Barcode className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="Escanear código de barras"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Escanear
        </button>
      </div>
    </form>
  )
}

export default BarcodeScanner
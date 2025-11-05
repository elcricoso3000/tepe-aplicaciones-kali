import { Shield } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black/40 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">Kali Linux</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Offensive Security. Desarrollado para profesionales de seguridad.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
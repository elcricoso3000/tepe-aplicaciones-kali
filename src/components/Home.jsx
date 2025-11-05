import React, { useState } from 'react'
import { Terminal, Shield, Lock, Search, Code, Wifi, Database, Eye } from 'lucide-react'
import Footer from './Footer'

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(null)

  const features = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "600+ Tools",
      description: "Herramientas de penetration testing preinstaladas"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Testing",
      description: "Plataforma completa para auditorías de seguridad"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Open Source",
      description: "Basado en Debian, completamente gratuito"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Wireless Attacks",
      description: "Herramientas avanzadas para análisis de redes"
    }
  ]

  const tools = [
    { name: "Metasploit", category: "Exploitation" },
    { name: "Nmap", category: "Network Scanner" },
    { name: "Wireshark", category: "Packet Analysis" },
    { name: "Burp Suite", category: "Web Security" },
    { name: "John the Ripper", category: "Password Cracking" },
    { name: "Aircrack-ng", category: "Wireless Security" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-blue-500/30 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-10 h-10 text-blue-400" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Kali Linux
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition">Home</a>
              <a href="#" className="hover:text-blue-400 transition">Tools</a>
              <a href="#" className="hover:text-blue-400 transition">Documentation</a>
              <a href="#" className="hover:text-blue-400 transition">Download</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
            <span className="text-blue-300 text-sm font-semibold">La distribución líder en Penetration Testing</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Penetration Testing y
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Ethical Hacking
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            La distribución de Linux más avanzada para profesionales de seguridad informática, 
            ethical hackers y equipos de red team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition transform hover:scale-105 shadow-lg shadow-blue-500/50">
              Download Kali
            </button>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold text-lg transition border border-gray-600">
              Ver Documentación
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">¿Por qué Kali Linux?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeFeature === index
                  ? 'bg-blue-600/20 border-blue-400 transform scale-105'
                  : 'bg-gray-800/40 border-gray-700 hover:border-blue-500/50'
              }`}
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-8 h-8 text-green-400" />
            <h3 className="text-3xl font-bold">Herramientas Destacadas</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-green-500/50 transition group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-green-400 transition">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-gray-500">{tool.category}</p>
                  </div>
                  <Code className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Preview */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-gray-400 ml-4">root@kali:~</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-green-400">┌──(root㉿kali)-[~]</div>
              <div className="text-green-400">└─# <span className="text-white">nmap -sV -A target.com</span></div>
              <div className="text-blue-400 mt-2">Starting Nmap 7.94...</div>
              <div className="text-gray-400">Scanning target.com [1000 ports]</div>
              <div className="text-yellow-400 mt-2">PORT    STATE SERVICE VERSION</div>
              <div className="text-gray-300">22/tcp  open  ssh     OpenSSH 8.9</div>
              <div className="text-gray-300">80/tcp  open  http    Apache 2.4.52</div>
              <div className="text-gray-300">443/tcp open  https   nginx 1.22.0</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer /> 
    </div>
  )
}

export default Home
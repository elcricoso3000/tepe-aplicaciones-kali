import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './styles/general.css';
import './styles/navbar.css';
import { useEffect, useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import SobreNosotros from './components/SobreNosotros';
import Respuesta from './components/Respuesta';
import PaginaNo from './components/PaginaNo';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey });

const object = {
  model: 'gemini-2.5-flash',
  contents: 'Hablar de Kali Linux',
  config: {
    systemInstruction:
      'Vos sos un experto en informatica que solo responde preguntas sobre Kali Linux. Cualquier otra pregunta es insultada.',
  },
};

function App() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchAI = async () => {
      const response = await ai.models.generateContentStream(object);

      for await (const chunk of response) {
        setContent((x) => x + chunk.text);
      }
    };
    fetchAI();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path="/respuesta" element={<Respuesta content={content} />} />
          <Route path="*" element={<PaginaNo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

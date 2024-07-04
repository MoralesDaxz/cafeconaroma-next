import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;

    // Define la ruta al archivo JSON
    const filePath = path.join(process.cwd(), 'src/data/db-orders.json');

    try {
      // Escribe los datos en el archivo JSON
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
      res.status(200).json({ message: 'Datos guardados con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al guardar los datos', error });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
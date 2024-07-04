import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;

    // Define la ruta al archivo JSON
    const filePath = path.join(process.cwd(), 'src/data/db-orders.json');

    try {
      // Lee el archivo JSON existente
      const fileData = fs.readFileSync(filePath, 'utf-8');
      const json = JSON.parse(fileData);

      // Agrega la nueva orden a las existentes
      json.orders.push(data);

      // Escribe los datos en el archivo JSON
      fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf-8');
      res.status(200).json({ message: 'Datos guardados con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al guardar los datos', error });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}

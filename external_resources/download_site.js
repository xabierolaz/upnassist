import scrape from 'website-scraper';
import path from 'path';
import { fileURLToPath } from 'url';

// Recrear __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  urls: ['https://programming-25.mooc.fi/part-1/1-getting-started'],
  directory: path.resolve(__dirname, 'mooc-website'),
  recursive: true,
  maxDepth: 3, 
  urlFilter: function(url) {
    return url.includes('programming-25.mooc.fi');
  },
  sources: [
    {selector: 'img', attr: 'src'},
    {selector: 'link[rel="stylesheet"]', attr: 'href'},
    {selector: 'script', attr: 'src'}
  ],
  request: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  }
};

console.log('Iniciando descarga del sitio web (esto puede tardar unos minutos)...');
try {
    await scrape(options);
    console.log('Sitio web descargado exitosamente en la carpeta "external_resources/mooc-website".');
} catch (err) {
    console.error('Error durante la descarga:', err);
}
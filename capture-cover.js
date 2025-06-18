import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureLinkedInCover() {
    console.log('🚀 Iniciando captura da capa do LinkedIn...');
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();
        
        // Definir viewport para as dimensões da capa do LinkedIn (1584x396)
        await page.setViewport({
            width: 1584,
            height: 396,
            deviceScaleFactor: 2 // Para melhor qualidade
        });
        
        // Carregar o arquivo HTML local
        const htmlPath = path.join(__dirname, 'linkedin-cover.html');
        await page.goto(`file://${htmlPath}`, {
            waitUntil: 'networkidle0'
        });
        
        // Esperar 2 segundos para animações carregarem
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Capturar screenshot
        const screenshotPath = path.join(__dirname, 'linkedin-cover.png');
        await page.screenshot({
            path: screenshotPath,
            type: 'png',
            fullPage: false
        });
        
        console.log('✅ Capa do LinkedIn capturada com sucesso!');
        console.log(`📁 Arquivo salvo em: ${screenshotPath}`);
        console.log('📏 Dimensões: 1584x396 pixels (formato LinkedIn)');
        
    } catch (error) {
        console.error('❌ Erro ao capturar a imagem:', error);
    } finally {
        await browser.close();
    }
}

// Executar o script
captureLinkedInCover();

export { captureLinkedInCover }; 
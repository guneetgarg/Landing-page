const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
    console.log('🚀 Starting build process for all workspaces...');

    // 1. Build all workspaces
    execSync('npm run build --workspaces', { stdio: 'inherit' });

    console.log('📂 Preparing final dist directory...');

    // 2. Ensure dist directory exists
    const distPath = path.join(__dirname, 'dist');
    if (!fs.existsSync(distPath)) {
        fs.mkdirSync(distPath);
    }

    // 3. Copy root index.html to dist
    const sourceIndex = path.join(__dirname, 'index.html');
    const destIndex = path.join(distPath, 'index.html');

    if (fs.existsSync(sourceIndex)) {
        fs.copyFileSync(sourceIndex, destIndex);
        console.log('✅ Root index.html copied to dist/');
    } else {
        console.warn('⚠️ Warning: root index.html not found!');
    }

    console.log('✨ Build completed successfully!');
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}

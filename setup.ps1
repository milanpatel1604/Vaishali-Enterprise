# Vaishali Enterprise - Quick Setup Script

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Vaishali Enterprise - Quick Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
$nodeVersion = node --version 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Node.js $nodeVersion is installed" -ForegroundColor Green
} else {
    Write-Host "✗ Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Check if MongoDB is accessible
Write-Host "Checking MongoDB..." -ForegroundColor Yellow
$mongoRunning = $false
$mongoCheck = Get-Process mongod -ErrorAction SilentlyContinue
if ($mongoCheck) {
    Write-Host "✓ MongoDB is running" -ForegroundColor Green
    $mongoRunning = $true
} else {
    Write-Host "⚠ MongoDB is not running" -ForegroundColor Yellow
    Write-Host "Please start MongoDB before running the application" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Installing Dependencies" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Install root dependencies
Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to install backend dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Backend dependencies installed" -ForegroundColor Green

# Install client dependencies
Write-Host ""
Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
Set-Location client
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to install frontend dependencies" -ForegroundColor Red
    Set-Location ..
    exit 1
}
Write-Host "✓ Frontend dependencies installed" -ForegroundColor Green
Set-Location ..

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host ""
if (-not $mongoRunning) {
    Write-Host "1. Start MongoDB:" -ForegroundColor White
    Write-Host "   - Option A: Start as a service (if installed)" -ForegroundColor Gray
    Write-Host "   - Option B: Run 'mongod' in a separate terminal" -ForegroundColor Gray
    Write-Host "   - Option C: Use MongoDB Atlas (cloud)" -ForegroundColor Gray
    Write-Host ""
}
Write-Host "2. Start the application:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Open your browser:" -ForegroundColor White
Write-Host "   http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "For detailed instructions, see SETUP_GUIDE.md" -ForegroundColor Gray
Write-Host ""
Write-Host "Happy coding! 🚀" -ForegroundColor Green

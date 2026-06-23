@echo off
echo ============================================
echo  Deep Learning Intuition — Windows Builder
echo ============================================
echo.

:: Check Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js not found. Download from https://nodejs.org
    pause
    exit /b 1
)
echo [OK] Node.js found: 
node --version

:: Install dependencies
echo.
echo [1/3] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] npm install failed
    pause
    exit /b 1
)

:: Check app/index.html exists
if not exist "app\index.html" (
    echo [ERROR] app\index.html not found!
    echo         Copy your index.html into the app\ folder first.
    pause
    exit /b 1
)

:: Build
echo.
echo [2/3] Building Windows installer (this takes 2-5 minutes)...
call npm run build:win
if %errorlevel% neq 0 (
    echo [ERROR] Build failed. See output above.
    pause
    exit /b 1
)

echo.
echo [3/3] === BUILD COMPLETE ===
echo.
echo Output files in dist\:
dir dist\ /b
echo.
echo Share "Deep Learning Intuition Setup 1.0.0.exe" with students.
echo They just double-click it — no MATLAB, no runtime, nothing else needed.
echo.
pause

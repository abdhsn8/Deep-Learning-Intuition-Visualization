#!/usr/bin/env bash
set -e

echo "============================================"
echo " Deep Learning Intuition — App Builder"
echo "============================================"
echo

# Detect platform
PLATFORM=$(uname -s)
case "$PLATFORM" in
  Darwin) TARGET="mac" ; LABEL="macOS (.dmg)" ;;
  Linux)  TARGET="linux" ; LABEL="Linux (.AppImage + .deb)" ;;
  *)      echo "[ERROR] Unknown platform: $PLATFORM" ; exit 1 ;;
esac

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js not found. Install from https://nodejs.org"
    exit 1
fi
echo "[OK] Node.js: $(node --version)"

# Check app/index.html
if [ ! -f "app/index.html" ]; then
    echo "[ERROR] app/index.html not found!"
    echo "        Copy your index.html into the app/ folder first."
    exit 1
fi

echo
echo "[1/3] Installing dependencies..."
npm install

echo
echo "[2/3] Building for $LABEL (this takes 2-5 minutes)..."
npm run build:$TARGET

echo
echo "[3/3] === BUILD COMPLETE ==="
echo
echo "Output files in dist/:"
ls -lh dist/ 2>/dev/null || echo "(check dist/ folder)"
echo
if [ "$TARGET" = "mac" ]; then
    echo "Share the .dmg file with students."
    echo "macOS: drag the app to Applications, then double-click."
else
    echo "Share the .AppImage file with students."
    echo "Linux: chmod +x *.AppImage, then double-click or ./run it."
fi
echo
echo "Students need NOTHING else — no MATLAB, no runtime, no license."

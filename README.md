# Deep Learning Intuition 🧠✨

An interactive, high-fidelity desktop visualizer designed to build a deep, mathematical, and visual understanding of modern deep learning architectures. From classical CNNs to Generative AI models, this app runs locally as a self-contained desktop application.

**Students need no setup, no Python/MATLAB dependencies, and no configurations. Just download, click, and explore.**

---

## 🎨 Interactive Visualizer Modules

The application features interactive controls, mathematical equations, and real-time visualization canvas plots for:

1. **CNN Foundations**: Explore 2D Cross-Correlation with custom kernel types (Sobel-X/Y, Laplacian, Sharpen, Emboss, Gaussian Blur), adjustable strides, padding, and see receptive field growth alongside parameter comparisons to Fully Connected layers.
2. **CNN Architectures & ResNets**: Visualize skip connections in ResNet blocks, compare gradient flow (vanishing gradients in plain CNN vs. highway in ResNet), inspect smooth vs. chaotic loss landscapes, and contrast benchmark models (LeNet, AlexNet, VGG, ResNet, DenseNet, MobileNet).
3. **RNN / LSTM / Attention**: Compare gradient decay across steps, visualize real-time LSTM gate activations (Forget, Input, and Output gates), observe cell state highways, and interact with a Bahdanau Attention alignment matrix.
4. **Transformers**: Dive into Scaled Dot-Product Attention ($QK^T / \sqrt{d_k}$), see Multi-Head Attention mapping, visualize Positional Encodings, and view token-to-patch attention patterns.
5. **Variational Autoencoders (VAEs)**: Visualize the prior vs. posterior distribution, inspect the 3D KL Divergence loss surface, see the Reparameterization Trick ($z = \mu + \sigma \odot \epsilon$) in action, and adjust the ELBO trade-off parameter $\beta$.
6. **GANs & Normalizing Flows**: Compare Jensen-Shannon Divergence (JSD) vs. Wasserstein Distance ($W_1$), visualize training step dynamics, witness Mode Collapse, and view density transformations in Normalizing Flows.
7. **Diffusion Models (DDPM/DDIM)**: Visualize the forward diffusion process (adding noise), the reverse denoising process, compare Linear vs. Cosine noise schedules, and experiment with DDIM deterministic sampling vs. DDPM stochastic sampling.

---

## 📦 Download & Installation

The application is built for Windows, macOS, and Linux.

### Windows (Recommended)
1. Download `Deep Learning Intuition Setup 1.0.0.exe` from the Releases / Artifacts page.
2. Double-click to run the installer.
3. Launch the app directly from your Start Menu or Desktop.
*(A portable standalone `Deep Learning Intuition 1.0.0.exe` is also available and does not require installation).*

### macOS
1. Download `Deep Learning Intuition-1.0.0.dmg`.
2. Open the DMG and drag the app to your `/Applications` directory.
3. **First-time Open**: Right-click the app in applications and select **Open** to bypass macOS gatekeeper warnings.

### Linux
1. Download `Deep Learning Intuition-1.0.0.AppImage`.
2. Right-click the file → **Properties** → **Permissions** → Check **"Allow executing file as program"**.
3. Double-click to run (no installer needed).

---

## 🛠️ Developer Setup & Local Building

To build the installers yourself from source, follow the instructions below.

### Prerequisites
* **Node.js (LTS version)**: Install from [nodejs.org](https://nodejs.org).

### Step 1: Install Dependencies
Open your terminal in the root of the project directory and run:
```bash
npm install
```

### Step 2: Build the Installer
Run the build script corresponding to your operating system:

* **Windows**:
  ```bash
  npm run build:win
  ```
  *(Or double-click the `build-windows.bat` helper script)*

* **macOS**:
  ```bash
  npm run build:mac
  ```

* **Linux**:
  ```bash
  npm run build:linux
  ```

Output installers will be generated under the `dist/` directory.

---

## 🚀 Automated Builds via GitHub Actions

This repository is configured with a CI/CD build pipeline under `.github/workflows/build.yml`. Every time you push code to this repository:
1. **GitHub Cloud Runners** spin up environments for Windows, macOS, and Linux.
2. The code is tested, dependencies are compiled, and installer packages are built.
3. The resulting installers are uploaded as **build artifacts** directly in your GitHub Actions run page.

This allows you to easily distribute Windows, macOS, and Linux installers without needing multiple computer setups.

---

## 🤝 Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file to learn how to set up your local development environment and submit Pull Requests.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


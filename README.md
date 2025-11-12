# Smart Image Compression Expert

A professional, browser-based image compression tool that uses intelligent algorithms to reduce image file sizes while maintaining optimal quality. All processing happens locally in your browser - no uploads to servers, ensuring complete privacy.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)
![Vite](https://img.shields.io/badge/Vite-6.0.1-purple.svg)

## ✨ Features

- **Smart Compression Algorithm** - Advanced compression technology that intelligently reduces file size
- **Multiple Format Support** - Compress JPEG, PNG, and WebP images
- **Quality Control** - Adjustable quality settings from minimum file size to best quality
- **Precise Size Control** - Set target file sizes with iterative compression
- **Real-time Preview** - Side-by-side comparison of original and compressed images
- **Lightning Fast** - Optimized algorithms for quick compression
- **Privacy Protected** - 100% local processing, no server uploads
- **Completely Free** - No registration required, no hidden costs
- **Modern UI** - Clean, intuitive interface built with Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd image-compressor-pro
```

2. Install dependencies:
```bash
pnpm install
```

### Running the Development Server

```bash
pnpm dev
```

The application will start at `http://localhost:5173`

### Building for Production

```bash
pnpm build
```

The production-ready files will be generated in the `dist` directory.

### Preview Production Build

```bash
pnpm preview
```

## 📖 How to Use

1. **Upload Image**
   - Drag and drop an image file onto the upload area
   - Or click to select a file from your computer
   - Supports JPEG, PNG, and WebP formats (max 10MB)

2. **Configure Settings**
   - **Target File Size** (Optional): Enter a desired output size (e.g., 1.5MB, 500KB)
   - **Image Quality**: Adjust the quality slider (10% = smallest file, 100% = best quality)
   - **Output Format**: Choose between JPEG, PNG, or WebP

3. **Start Compression**
   - Click "Start Compression" to begin
   - Watch the real-time progress bar

4. **View Results**
   - See detailed compression statistics
   - Compare original vs compressed images side-by-side
   - Download your compressed image

## 🎯 Supported Formats

| Format | Description | Best For |
|--------|-------------|----------|
| **JPEG** | Smallest file sizes, lossy compression | Photos, complex images |
| **PNG** | Lossless compression with transparency support | Icons, graphics with transparency |
| **WebP** | Modern format with high compression rates | All-purpose, best compression |

**Maximum file size:** 10MB

## 🛠️ Tech Stack

- **React 18.3.1** - UI framework
- **TypeScript 5.6.2** - Type-safe JavaScript
- **Vite 6.0.1** - Build tool and dev server
- **Tailwind CSS 3.4.16** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **browser-image-compression** - Client-side image compression library
- **Lucide React** - Beautiful icons

## 🔒 Privacy

This tool processes all images locally in your browser. Your images are:
- ✅ Never uploaded to any server
- ✅ Never stored or logged
- ✅ Completely private and secure

All compression happens on your device using JavaScript Web Workers for optimal performance.

## 📝 Usage Examples

### Basic Compression
Simply upload an image and click "Start Compression" to reduce file size while maintaining good quality.

### Target Size Compression
If you need a specific file size (e.g., for email attachments):
1. Enter the target size in the input field (e.g., "1MB")
2. The tool will iteratively adjust quality to match your target

### Format Conversion
Switch between JPEG, PNG, and WebP formats:
- Use **WebP** for maximum compression
- Use **PNG** for images with transparency
- Use **JPEG** for best compatibility

## 🎨 Key Components

- **Header** - Application title and feature highlights
- **ImageUploader** - Drag-and-drop file upload interface
- **CompressionSettings** - Quality, format, and size controls
- **CompressionResult** - Results display with comparison view
- **CompressionStats** - Detailed statistics (ratio, savings, final size)
- **DownloadButton** - Download compressed image with "_compressed" suffix
- **ProgressBar** - Real-time compression progress
- **Footer** - Information about features, privacy, and formats

## 📊 Compression Statistics

After compression, you can view:
- **Compression Ratio** - Percentage of original size
- **Size Reduction** - Total bytes saved
- **Final Size** - Optimized file size
- **Space Saved** - Percentage reduction

## 🧪 Development

### Code Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ImageUploader.tsx
│   ├── CompressionSettings.tsx
│   ├── CompressionResult.tsx
│   ├── CompressionStats.tsx
│   ├── ImagePreview.tsx
│   ├── DownloadButton.tsx
│   └── ProgressBar.tsx
├── utils/              # Utility functions
│   ├── formatters.ts   # File size and number formatting
│   └── imageCompression.ts  # Core compression logic
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm preview  # Preview production build
pnpm lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Compression powered by [browser-image-compression](https://github.com/Donaldcwl/browser-image-compression)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ Gravirei**

© 2025 Smart Image Compression Expert. All rights reserved.

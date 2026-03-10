# One Word

A simple flashcard study app for learning vocabulary and terminology. Upload your own word lists or use premade sets to study one word at a time in random order.

## Features

- **Drag & Drop Upload**: Upload your own text files containing word lists
- **Random Order**: Words are displayed in random order
- **Clean Interface**: Minimalist design

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/brofar/one-word.git
cd one-word
```

2. Install dependencies:

**Using npm:**
```bash
npm install
```

**Using yarn:**
```bash
yarn install
```

3. Run the development server:

**Using npm:**
```bash
npm run dev
```

**Using yarn:**
```bash
yarn dev
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

### Building for Production

**Using npm:**
```bash
npm run build
```

**Using yarn:**
```bash
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

**Using npm:**
```bash
npm run preview
```

**Using yarn:**
```bash
yarn preview
```

### File Format

Your text file should contain one word or term per line:

```
mitochondria
nucleus
cytoplasm
membrane
ribosomes
```

- Format: Plain text (.txt)
- Empty lines will be automatically removed
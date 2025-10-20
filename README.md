# Century Calculator CLI 🚀
  
An elegant command-line interface tool that makes year-to-century conversions intuitive and enjoyable. Built with TypeScript and modern CLI tools for a seamless user experience.

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

- 🔄 Convert years to centuries with proper ordinal suffixes (1st, 2nd, 3rd, etc.)
- 📅 Calculate year ranges for any given century
- 📊 Generate detailed tables showing year-to-century mappings
- 🎨 Beautiful ASCII art title and interactive CLI interface
- ⚡ Real-time calculations with elegant loading animations
- 🎯 Type-safe implementation with TypeScript

## 🛠️ Installation

```bash

# Clone the repository
git clone https://github.com/yourusername/century-calc.git


# Navigate to project directory
cd century-calc


# Install dependencies
npm install


# Build the project
npm run build

```

## 🎮 Usage

Launch the interactive mode:

```bash

npm start

```

### Available Operations

1. **Calculate century from year**
   - Input any year (e.g., 1999)
   - Get the corresponding century (e.g., "20th century")
2. **Calculate year range from century**
   - Input a century number (e.g., 21)
   - Get the year range (e.g., "2001-2100")
3. **Generate century-year table**
   - Specify the maximum year and step interval
   - Get a formatted table showing year-to-century mappings

## 💻 Development

```bash

# Run in development mode with hot-reload
npm run dev

  
# Run tests
npm test

  
# Build for production
npm run build

```
  
## 🏗️ Project Structure

```bash

century-calc/

├── src/
│   ├── index.ts         # Main application entry
│   └── utils/
│       ├── calculator.ts # Core calculation logic
│       └── types.ts      # TypeScript type definitions
├── dist/                # Compiled JavaScript output
└── package.json         # Project configuration

```

## 🔧 Technical Details

- **TypeScript**: Strict type checking and modern JavaScript features
- **Interactive CLI**: Built with Inquirer.js for smooth user interaction
- **Visual Feedback**: Loading spinners and colored output using Ora and Chalk
- **ASCII Art**: Beautiful CLI title using Figlet

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Dependencies

- `inquirer`: Interactive command line interface
- `ora`: Elegant terminal spinners
- `chalk`: Terminal string styling
- `figlet`: ASCII art text generator

## 🙏 Acknowledgments

Special thanks to all the open-source projects that made this possible:

- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- [Ora](https://github.com/sindresorhus/ora)
- [Chalk](https://github.com/chalk/chalk)
- [Figlet](https://github.com/patorjk/figlet.js)
  
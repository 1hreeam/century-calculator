# Century Calculator CLI

A sleek command-line interface tool for converting between years and centuries with an elegant, user-friendly experience.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![Node.js](https://img.shields.io/badge/Node.js-14%2B-green)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)

## 🚀 Features

- Convert any year to its corresponding century with proper ordinal suffixes
- Calculate year ranges for any given century
- Generate comprehensive tables showing year-to-century mappings
- Beautiful CLI interface with loading spinners and colored output
- Written in TypeScript for type safety and modern development experience

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/1hreeam/century-calculator.git

# Navigate to the project directory
cd century-calculator

# Install dependencies
npm install

# Build the project
npm run build

# Link the package globally (optional)
npm link
```

## 🔨 Usage

### Calculate Century from Year

```bash
century-calculator cent <year>
```

Example:
```bash
$ century-calculator cent 1999
21st century
```

### Calculate Year Range from Century

```bash
century-calculator year <century>
```

Example:
```bash
$ century-calculator year 21
2001-2100
```

### Generate Comprehensive Table

```bash
century-calculator printall <step> <max-year>
```

Example:
```bash
$ century-calculator printall 100 500
┌─────────┬─────────┬──────────────────┐
│ (index) │  year   │     century      │
├─────────┼─────────┼──────────────────┤
│    0    │    1    │   1st century    │
│    1    │   101   │   2nd century    │
│    2    │   201   │   3rd century    │
│    3    │   301   │   4th century    │
│    4    │   401   │   5th century    │
└─────────┴─────────┴──────────────────┘
```

## 🛠️ Commands

| Command | Description | Arguments |
|---------|-------------|-----------|
| `cent` | Calculate century from year | `<year>`: Year to convert |
| `year` | Calculate year range from century | `<century>`: Century to convert |
| `printall` | Generate table of centuries | `<step>`: Interval between years<br>`<n>`: Maximum year to calculate |

## 🔄 Development

```bash
# Run in development mode with hot reload
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Start production build
npm start
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/1hreeam/century-calculator/issues).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✨ Credits

Built with:
- [Commander.js](https://github.com/tj/commander.js/) - CLI framework
- [Chalk](https://github.com/chalk/chalk) - Terminal styling
- [Ora](https://github.com/sindresorhus/ora) - Elegant terminal spinners

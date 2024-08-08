# AI Recommendations Project

## Project Description
This project is a demonstration of a system that uses local artificial intelligence to recommend songs to users. Recommendations are based on the songs the user frequently listens to.

## Installation
### Prerequisites
1. **Node.js**: Install the stable version to handle the necessary packages.
2. **Git**: Required to clone the repository.

### Installation Steps
1. **Clone the Repository**
   - Open Git Bash and run:
     ```bash
     git clone https://github.com/AngelGab006/Proyecto-Recomendaciones-IA.git
     cd Proyecto-Recomendaciones-IA
     ```

2. **Set Up the Project**
   - Initialize npm and set up Vite:
     ```bash
     npm init -y
     npm install vite@latest
     npm install @mlc-ai/web-llm
     ```

3. **Start the Server**
   - Run the following command to start the server:
     ```bash
     npm run dev
     ```

## Usage
- Once the project is running, use the URL provided by the console (example: `http://localhost:5173/`).
- This will open the project's user interface, where you can test the demo.
- Enter your name and favorite songs separated by commas in the appropriate fields.
- Alternatively, you can use it from this link: https://proyecto-recomendaciones-ia-ten.vercel.app/.

## Tip
If you experience slowness on your PC due to this demo, it is advisable to modify the GPU usage. Go to `src -> JS -> IA.js` and adjust the `max_gpu_memory_fraction` parameter to a value between 0 and 1:
```javascript
{ max_gpu_memory_fraction: 0.75 }
```

## Contributions
If you want to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes and commit them (git commit -m 'Add new feature').
4. Push your changes to your branch (git push origin feature/new-feature).
5. Open a Pull Request.

## License
This project is under the MIT License. For more details, see the `LICENSE` file.

# Proyecto Recomendaciones IA

## Descripción del Proyecto
Este proyecto es una demostración de un sistema que utiliza inteligencia artificial local para recomendar canciones a los usuarios. Las recomendaciones se basan en las canciones que el usuario escucha frecuentemente.

## Instalación
### Requisitos Previos
1. **Node.js**: Instala la versión estable para manejar los paquetes necesarios.
2. **Git**: Necesario para clonar el repositorio.

### Pasos de Instalación
1. **Clonar el Repositorio**
   - Abre Git Bash y ejecuta:
     ```bash
     git clone https://github.com/AngelGab006/Proyecto-Recomendaciones-IA.git
     cd Proyecto-Recomendaciones-IA
     ```

2. **Configurar el Proyecto**
   - Inicializa npm y configura Vite:
     ```bash
     npm init -y
     npm install vite@latest
     npm install @mlc-ai/web-llm
     ```

3. **Iniciar el Servidor**
   - Ejecuta el siguiente comando para levantar el servidor:
     ```bash
     npm run dev
     ```

## Uso
- Una vez iniciado el proyecto, utiliza la URL proporcionada por la consola (ejemplo: `http://localhost:5173/`).
- Esto abrirá la interfaz de usuario del proyecto, donde podrás probar la demo.
- Introduce tu nombre y las canciones favoritas separadas por comas en los campos correspondientes.

## Consejo
Si experimentas lentitud en tu PC a causa de esta demo, es recomendable modificar el uso de la GPU. Dirígete a `src -> JS -> IA.js` y ajusta el parámetro `max_gpu_memory_fraction` a un valor entre 0 y 1:
```javascript
{ max_gpu_memory_fraction: 0.75 }
```

## Contribuciones
Si deseas contribuir al proyecto, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y commitea (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube los cambios a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo `LICENSE`.

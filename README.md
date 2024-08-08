# Proyecto-Recomendaciones-IA

## Descripción del Proyecto: 
Este proyecto, es una demo, para la oferta de un sistema el cual permite a traves de el uso de una IA, local, dar recomendaciones a los usuarios de canciones, basado en las canciones que el usuario escucha comunmente.
## Instalación:
#### Para instalar el proyecto seguiremos los siguientes pasos:
### 1- Instalar herramientas necesarrias
Deberemos instalar **node js**, en su version estable, para asi instalar y ejecutar los paquetes necesarios.
Ademas necesitaremos de instalar **git**, para poder clonar el repositorio.
### 2- Clonar repositorio
- En git bash ejecutaremos el siguiente comando:
```bash
  git clone https://github.com/AngelGab006/Proyecto-Recomendaciones-IA.git
  cd Proyecto-Recomendaciones-IA
```
- Luego inicializaremos npm, o puede usar tambien el empaquetador que guste, el cual soporte vite:
```bash
  npm init -y
  npm install vite@latest
  npm install @mlc-ai/web-llm
```
- Ahora por ultimo ejecutaremos el siguiente comando para levantar nuestro servidor:
```bash
  npm run dev
```
### 3- Uso:
- Despues de tener el proyecto levantado usar la url que nos muestra la consola (ejemplo: http://localhost:5173/).
- En este nos abrira la UI del proyecto, en la cual podemos testear la demo.
- entramos los valores correspondientes en los inputs, en el primero nuestro nombre, y en el segundo los nombres de nuestras canciones favoritas separada por comas.
### 4- Consejo:
- En caso de que estes sufriendo de lentitud en tu pc a causa de esta demo, es recomendable ir a -> src -> JS -> IA.js, y cambiar el parametro de uso de gpu en un valor entre 0 y 1
```javascript
  { max_gpu_memory_fraction: 0.75 }
``` 

---
title: Agentes IA
description: Una guía completa para entender y trabajar con agentes en Masscer.
---

Los agentes son una herramienta poderosa dentro del ecosistema de inteligencia artificial. Representan modelos de IA configurados para realizar tareas específicas o resolver problemas en diversos contextos. En Masscer, puedes interactuar con uno o varios agentes de manera simultánea, permitiéndote evaluar modelos, personalizarlos y adaptarlos a tus necesidades.

Esta guía te ayudará a entender qué son los agentes, cómo crearlos y personalizarlos, y cómo utilizar múltiples agentes para maximizar el potencial de tus evaluaciones y resultados.

---

## ¿Qué es un agente?

Un **agente** es una instancia de un modelo de inteligencia artificial configurada para realizar acciones específicas basadas en las instrucciones o datos que recibe. Los agentes pueden ser tan simples como un modelo de lenguaje que responde preguntas, o tan complejos como un sistema autónomo que toma decisiones en tiempo real.

### Características principales de un agente:
- **Autonomía**: Los agentes pueden ejecutar tareas sin intervención humana directa una vez configurados.
- **Personalización**: Puedes adaptar un agente a casos de uso específicos mediante ajustes en sus parámetros, datos de entrenamiento o instrucciones.
- **Interacción**: Los agentes pueden interactuar con los usuarios a través de texto, voz u otros medios.
- **Evaluación**: En Masscer, puedes comparar múltiples agentes para evaluar su rendimiento y elegir el más adecuado para tu tarea.

---

## Cómo crear y personalizar un agente

Crear y personalizar un agente en Masscer es un proceso intuitivo que permite adaptar modelos de IA a tus necesidades específicas. Puedes partir de un modelo base y ajustarlo según los requisitos de tu proyecto.

### Pasos para crear un agente:
1. **Accede a la sección de Agents**: En el chat, haz click en **Agents**. Luego, se abrirá una ventana donde verás un agente predeterminado.
2. **Crea un nuevo agente**: Para crear un nuevo agente, haz clic en el botón **+**.
3. **Configura el agente**:
   - **Elige el modelo**: Selecciona el modelo de IA que mejor se adapte a la tarea que deseas realizar (por ejemplo, GPT para generación de texto o Flux para generación de imágenes).
   - **Asigna un nombre**: Introduce un nombre para identificar al agente.
   - **Define el prompt**: Escribe el prompt que guiará al agente en su tarea. Si necesitas más información sobre cómo redactar un prompt, consulta la sección de [Prompting](/es/capabilities/prompting#cómo-escribir-un-prompt-para-generación-de-texto)
   - **Configura las opciones avanzadas**: Ajusta los siguientes parámetros según tus necesidades:
     - **Frequency Penalty**: Controla la penalización para palabras repetidas. Valor predeterminado: `0`.
     - **Max Tokens**: Especifica el número máximo de tokens que el modelo puede generar. Valor predeterminado: `4000`.
     - **Presence Penalty**: Penaliza la aparición de nuevas ideas en comparación con el texto generado previamente. Valor predeterminado: `0`.
     - **Temperature**: Controla la aleatoriedad de las respuestas. Valores más bajos (`0.2`) producen respuestas más deterministas, mientras que valores más altos (`0.7`) generan respuestas más creativas. Valor predeterminado: `0.7`.
     - **Top P**: Ajusta la probabilidad acumulativa para filtrar las respuestas generadas. Valor predeterminado: `1`.
4. **Prueba y ajusta**: Una vez que el agente esté configurado, interactúa con él para evaluar su desempeño. Realiza ajustes en los parámetros o en el prompt si es necesario para optimizar los resultados.


### Ejemplo de creación de un agente personalizado:
- **Caso de uso**: Un agente para atención al cliente.
- **Instrucciones iniciales**: "Actúa como un asistente de soporte técnico para una empresa de software. Responde de manera educada y profesional."
- **Parámetros**: Ajusta la temperatura a un valor bajo (por ejemplo, 0.3) para respuestas más precisas y menos creativas.

---

## Interactuando con múltiples agentes en Masscer

Una de las características más destacadas de Masscer es la capacidad de interactuar con varios agentes simultáneamente. Esto es especialmente útil si deseas comparar modelos o realizar evaluaciones entre diferentes configuraciones.

### Beneficios de usar múltiples agentes:
- **Evaluación comparativa**: Puedes probar varios modelos o configuraciones al mismo tiempo para identificar cuál produce los mejores resultados.
- **Colaboración entre agentes**: En casos más complejos, varios agentes pueden trabajar juntos para resolver tareas divididas en subprocesos.
- **Ahorro de tiempo**: En lugar de probar modelos de forma secuencial, puedes obtener resultados de diferentes agentes en paralelo.

### Ejemplo práctico:
Supongamos que quieres evaluar dos modelos de lenguaje, GPT y un modelo personalizado, para responder preguntas médicas:
1. Crea un agente para cada modelo.
2. Proporciona la misma pregunta a ambos agentes.
3. Compara las respuestas para determinar cuál es más precisa, confiable o adecuada a tus necesidades.

---

## Mejores prácticas para trabajar con agentes

Aquí tienes algunas recomendaciones para aprovechar al máximo el uso de agentes en Masscer:

1. **Define claramente los objetivos**: Antes de crear un agente, asegúrate de tener una idea clara de lo que necesitas que haga.
2. **Itera constantemente**: Evalúa el rendimiento del agente y realiza ajustes para mejorar su precisión y relevancia.
3. **Usa datos relevantes**: Si estás personalizando un agente, asegúrate de incluir datos específicos y de calidad.
4. **Evalúa con múltiples agentes**: Siempre que sea posible, compara varios agentes para asegurarte de que estás utilizando el modelo más adecuado.
5. **Aprovecha las herramientas de Masscer**: Masscer ofrece una interfaz intuitiva y herramientas avanzadas para gestionar, evaluar y personalizar agentes.
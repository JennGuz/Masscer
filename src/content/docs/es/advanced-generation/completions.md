---
title: Completions en Masscer
description: Aprende qué son los completions, cómo funcionan, sus beneficios y cómo generarlos a partir de documentos y conversaciones en Masscer.
---

Las completions son una de las funciones clave en los modelos de lenguaje de inteligencia artificial. Permiten generar texto de manera automática y coherente a partir de una entrada inicial (prompt). Son utilizadas en múltiples aplicaciones, desde generación de contenido hasta asistentes virtuales.

---

## ¿Qué es una Completion?

Una **completion** es la continuación de un texto generada por un modelo de lenguaje en función de un contexto dado. El modelo analiza el prompt de entrada y predice la mejor secuencia de palabras para completar la respuesta de manera lógica y coherente.

Ejemplo de uso:

**Entrada (prompt):**  
*"El sol se pone en el horizonte y los pájaros empiezan a..."*  

**Salida (completion generada):**  
*"cantar suavemente mientras la brisa nocturna refresca el ambiente."*

---

## ¿Cómo funciona una Completion?

El proceso de generación de texto a través de completions sigue varios pasos:

1. **Entrada del usuario (Prompt)**: Se proporciona un texto inicial que define el contexto.  
2. **Análisis del modelo**: El modelo de IA evalúa patrones lingüísticos y probabilidades de palabras.  
3. **Generación de salida**: La IA predice y genera la continuación más probable o creativa según los parámetros definidos.  
4. **Entrega del resultado**: Se muestra la completion generada al usuario.  

Algunos parámetros clave que afectan el comportamiento de una completion incluyen:

- **Temperature**: Controla la aleatoriedad de la respuesta (valores bajos = más predecible, valores altos = más creativo).  
- **Max tokens**: Define la cantidad máxima de palabras o caracteres generados.  
- **Top-p (nucleus sampling)**: Ajusta la selección de palabras basándose en probabilidades acumuladas.  
- **Frequency penalty**: Reduce la repetición de palabras en la respuesta. 

---

## Parámetros de los Completions

Al generar completions, puedes configurar ciertos parámetros para optimizar los resultados:

- **Número de Completions a Generar:** Determina cuántas respuestas diferentes se crearán. Un mayor número de completions ofrece más variedad, mientras que un número menor se centra en opciones más específicas.
- **Selección de Agentes:** Permite definir qué agentes de IA utilizarán los completions generados, asegurando que cada uno esté entrenado para contextos específicos.

---

## Generación de Completions a partir de Documentos

Para generar completions desde documentos en Masscer, sigue estos pasos:

1. **Sube el Documento:** En el chat, haz clic en el ícono de documento y selecciona el archivo que deseas utilizar.
2. **Accede al Sidebar:** Dirígete al menú lateral y haz clic en "Documentos".
3. **Selecciona el Documento:** Verás el documento subido. Haz clic en "Opciones" y luego en "Entrenar con este documento".
4. **Configura el Proceso:** Define el número de completions a generar según tus necesidades.
5. **Genera Completions:** Haz clic en "Generate" para iniciar el proceso.

> **Importancia de definir el número de completions:** Esto te permite controlar la variedad de respuestas generadas. Si necesitas explorar múltiples enfoques, genera más completions. Si buscas respuestas más precisas, opta por un número menor.

---

## Generación de Completions a partir de Conversaciones

Para crear completions basados en conversaciones previas:

1. **Accede al Sidebar:** Haz clic en "Conversaciones" en el menú lateral.
2. **Selecciona la Conversación:** Busca la conversación relevante y haz clic en "Opciones".
3. **Entrena con la Conversación:** Selecciona "Entrenar" para iniciar el proceso.
4. **Configura y Genera:** Al igual que con los documentos, elige el número de completions a generar y haz clic en "Generate".

---

## Objetivo de una Completion

El objetivo de una **completion** es generar respuestas coherentes, relevantes y contextualizadas basadas en un prompt o una fuente de información. En Masscer, las completions permiten:

- **Mejorar la comunicación**: Generar respuestas naturales y fluidas en conversaciones automatizadas.  
- **Facilitar el análisis de información**: Extraer insights y sintetizar datos de documentos y conversaciones.  
- **Optimizar la creación de contenido**: Redactar textos para blogs, redes sociales y documentación técnica con mayor rapidez y precisión.  
- **Automatizar tareas repetitivas**: Agilizar procesos en áreas como atención al cliente, educación y generación de reportes.  

Masscer proporciona herramientas avanzadas para personalizar la generación de completions, asegurando que las respuestas generadas sean precisas, útiles y adaptadas a cada contexto específico.
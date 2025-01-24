---
title: AI Agents
description: A comprehensive guide to understanding and working with agents in Masscer.
---

Agents are a powerful tool within the artificial intelligence ecosystem. They represent AI models configured to perform specific tasks or solve problems in various contexts. In Masscer, you can interact with one or multiple agents simultaneously, allowing you to evaluate models, customize them, and adapt them to your needs.

This guide will help you understand what agents are, how to create and customize them, and how to use multiple agents to maximize the potential of your evaluations and results.

---

## What is an agent?

An **agent** is an instance of an artificial intelligence model configured to perform specific actions based on the instructions or data it receives. Agents can be as simple as a language model answering questions or as complex as an autonomous system making real-time decisions.

### Key features of an agent:
- **Autonomy**: Agents can execute tasks without direct human intervention once configured.
- **Customization**: You can adapt an agent to specific use cases by adjusting its parameters, training data, or instructions.
- **Interaction**: Agents can interact with users through text, voice, or other means.
- **Evaluation**: In Masscer, you can compare multiple agents to assess their performance and choose the one best suited to your task.

---

## How to create and customize an agent

Creating and customizing an agent in Masscer is an intuitive process that allows you to adapt AI models to your specific needs. You can start with a base model and adjust it according to your project requirements.

### Steps to create an agent:
1. **Access the Agents section**: In the chat, click on **Agents**. A window will open where you’ll see a default agent.
2. **Create a new agent**: To create a new agent, click the **+** button.
3. **Configure the agent**:
   - **Choose the model**: Select the AI model best suited for the task you want to perform (e.g., GPT for text generation or Flux for image generation).
   - **Assign a name**: Give the agent a name to identify it.
   - **Define the prompt**: Write the prompt that will guide the agent in its task. If you need more information on how to write a prompt, check the [Prompting section](/capabilities/prompting#how-to-write-a-prompt-for-text-generation).
   - **Configure advanced options**: Adjust the following parameters according to your needs:
     - **Frequency Penalty**: Controls the penalty for repeated words. Default value: `0`.
     - **Max Tokens**: Specifies the maximum number of tokens the model can generate. Default value: `4000`.
     - **Presence Penalty**: Penalizes the appearance of new ideas compared to previously generated text. Default value: `0`.
     - **Temperature**: Controls the randomness of responses. Lower values (`0.2`) produce more deterministic responses, while higher values (`0.7`) generate more creative responses. Default value: `0.7`.
     - **Top P**: Adjusts the cumulative probability to filter generated responses. Default value: `1`.
4. **Test and adjust**: Once the agent is configured, interact with it to evaluate its performance. Make adjustments to the parameters or prompt as needed to optimize results.

### Example of creating a customized agent:
- **Use case**: A customer support agent.
- **Initial instructions**: "Act as a technical support assistant for a software company. Respond politely and professionally."
- **Parameters**: Set the temperature to a low value (e.g., 0.3) for more precise and less creative responses.

---

## Interacting with multiple agents in Masscer

One of the most notable features of Masscer is the ability to interact with multiple agents simultaneously. This is especially useful if you want to compare models or evaluate different configurations.

### Benefits of using multiple agents:
- **Comparative evaluation**: You can test various models or configurations at the same time to identify which produces the best results.
- **Collaboration between agents**: In more complex cases, multiple agents can work together to solve tasks divided into subprocesses.
- **Time-saving**: Instead of testing models sequentially, you can get results from different agents in parallel.

### Practical example:
Suppose you want to evaluate two language models, GPT and a custom model, to answer medical questions:
1. Create an agent for each model.
2. Provide the same question to both agents.
3. Compare the responses to determine which one is more accurate, reliable, or suitable for your needs.

---

## Best practices for working with agents

Here are some recommendations to make the most out of using agents in Masscer:

1. **Clearly define your objectives**: Before creating an agent, make sure you have a clear idea of what you need it to do.
2. **Iterate constantly**: Evaluate the agent's performance and make adjustments to improve its accuracy and relevance.
3. **Use relevant data**: If you're customizing an agent, make sure to include specific and high-quality data.
4. **Evaluate with multiple agents**: Whenever possible, compare multiple agents to ensure you're using the most suitable model.
5. **Leverage Masscer's tools**: Masscer offers an intuitive interface and advanced tools to manage, evaluate, and customize agents.

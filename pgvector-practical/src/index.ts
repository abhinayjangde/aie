// import ollama from 'ollama'

// const response = await ollama.chat({
//   model: 'deepseek-r1:1.5b',
//   messages: [{ role: 'user', content: 'Explain quantum computing in simple terms.' }],
//   stream: true,
// })

// for await (const part of response) {
//   process.stdout.write(part.message.content);
// }

import ollama from 'ollama'

const single = await ollama.embed({
  model: 'embeddinggemma:latest',
  input: 'hello',
})

console.log(single.embeddings) // vector

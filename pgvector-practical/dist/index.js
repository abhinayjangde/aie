import ollama from 'ollama';
const response = await ollama.chat({
    model: 'deepseek-r1:1.5b',
    messages: [{ role: 'user', content: 'hello' }],
});
console.log(response.message.content);
//# sourceMappingURL=index.js.map
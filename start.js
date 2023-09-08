const concurrently = require('concurrently');

// Defina os comandos para iniciar o backend e o frontend
const commands = [
  { command: 'npm start --prefix backend', name: 'backend', prefixColor: 'blue' },
  { command: 'npm start --prefix frontend', name: 'frontend', prefixColor: 'green' },
];

async function startServers() {
  try {
    await concurrently(commands, {
      prefix: 'name',
      killOthers: ['failure', 'success'],
    });
  } catch (error) {
    console.error('Erro ao iniciar os projetos:', error);
  }
}

startServers();

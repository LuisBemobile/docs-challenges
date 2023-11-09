const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = {
  todo: [],
  doing: [],
  done: [],
};

function showTasks() {
  console.log('Todo:');
  tasks.todo.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
  console.log('Doing:');
  tasks.doing.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
  console.log('Done:');
  tasks.done.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
  return;
}

function insertTask(state, task) {
  takFormatted = task.replace(/,\s*/g, ' ');
  tasks[state].push(takFormatted);
  console.log(`Task added to ${state}: ${takFormatted}`);
}

function moveTask(fromState, toState, taskIndex) {
  if (tasks[fromState][taskIndex]) {
    const task = tasks[fromState][taskIndex];
    tasks[fromState].splice(taskIndex, 1);
    tasks[toState].push(task);
    console.log(`Task ${task} moved from ${fromState} to ${toState} `);
  } else {
    console.log(`Task not found `);
  }
}

rl.on('line', (input) => {
  const commands = ['show', 'insert', 'move', 'quit'];
  const [command, ...args] = input.trim().split(' ');

  if (commands.includes(command)) {
    if (command === 'show') {
      showTasks();
    } else if (command === 'insert') {
      const state = args[0];
      console.log(args);
      const task = args.slice(1).join(' ');
      insertTask(state, task);
    } else if (command === 'move') {
      const [fromState, toState, taskIndex] = args;
      moveTask(fromState, toState, Number(taskIndex) - 1);
    } else if (command === 'quit') {
      rl.close();
    }
  } else {
    console.log('Command not found');
  }

  rl.prompt();
});

console.log('Status: todo, doing, done');

console.log('Comandos:');
console.log('- show: para exibir as tarefas');
console.log(
  '- insert [status] [tarefa]: para adicionar uma tarefa a um estado'
);
console.log(
  '- move [status origem] [status destino] [index tarefa]: para mover uma tarefa de um estado para outro'
);
console.log('- quit: para sair do aplicativo');
rl.prompt();

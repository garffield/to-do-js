class Tarefa {
    constructor(element) {
        this.element = element;
        this.input = element.querySelector('input');
        this.statusTarefa = ['default', 'feito', 'incompleto', 'nao-feito'];
        this.statusAtual = 0;
    }

    alterarStatus() {
        this.statusAtual = (this.statusAtual + 1) % this.statusTarefa.length;
        this.input.value = this.statusTarefa[this.statusAtual];
        this.element.classList.remove(...this.statusTarefa);
        this.element.classList.add(this.statusTarefa[this.statusAtual]);
    }
}

class TarefaController {
    constructor(tarefaElement) {
        this.tarefa = new Tarefa(tarefaElement);
        this.tarefa.element.querySelector('.btnTarefa').addEventListener('click', () => {
            this.tarefa.alterarStatus();
        });
    }
}


const tarefa = document.querySelector('.tarefa');
const tarefaController = new TarefaController(tarefa);
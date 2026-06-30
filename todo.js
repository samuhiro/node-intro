import * as fs from "fs";

const percorsoFile = "./todos.json";

function loadFile() {
    if (fs.existsSync(percorsoFile)) {
        const contenuto = fs.readFileSync(percorsoFile, "utf-8");
        const data = JSON.parse(contenuto);
        // Convert old format (array of strings) to new format (array of objects)
        return data.map(item => typeof item === 'string' ? { text: item, done: false } : item);
    }

    return [];
}

function saveFile(lista) {
    const contenuto = JSON.stringify(lista, null, 2);
    fs.writeFileSync(percorsoFile, contenuto, "utf-8");
}

const lista = loadFile();

const comando = process.argv[2];
const testo = process.argv.slice(3).join(" ");

function showToDoList() {
    if (lista.length === 0) {
        console.log("La tua lista To-Do è vuota.");
        console.log("Scrivi 'add' seguito dal testo per aggiungere un nuovo elemento.");
        return;
    }
    console.log("La tua lista To-Do:");
    lista.forEach((elemento, indice) => {
        const marker = elemento.done ? "[x]" : "[ ]";
        console.log(indice + 1 + ". " + marker + " " + elemento.text);
    })
}

function addToToDoList() {
    if (!testo) {
        console.log("Devi scrivere un testo da aggiungere. Usa 'help' per vedere come.");
        return;
    }
    lista.push({ text: testo, done: false });
    saveFile(lista);
    console.log("Aggiunto:", testo);
    console.log("Lista aggiornata:"); showToDoList();
}

function removeFromToDoList() {
    const indice = Number(process.argv[3]);

    if (!indice) {
        console.log("Devi specificare l'indice da rimuovere. Usa 'help' per vedere come.");
        return;
    }

    if (indice < 1 || indice > lista.length) {
        console.log("Indice non valido.");
        return;
    }

    const removed = lista.splice(indice - 1, 1)[0];
    saveFile(lista);
    console.log("Rimosso l'elemento numero:", indice, "-", removed.text);
    console.log("Lista aggiornata:"); showToDoList();
}

function completeTask() {
    const indice = Number(process.argv[3]);

    if (!indice) {
        console.log("Devi specificare l'indice da completare. Usa 'help' per vedere come.");
        return;
    }

    if (indice < 1 || indice > lista.length) {
        console.log("Indice non valido.");
        return;
    }

    lista[indice - 1].done = true;
    saveFile(lista);
    console.log("Completato l'elemento numero:", indice, "-", lista[indice - 1].text);
    console.log("Lista aggiornata:");
    showToDoList();
}

function clearToDoList() {
    lista.splice(0, lista.length);
    saveFile(lista);
    console.log("Lista svuotata.");
}

function showHelpCommands() {
    console.log("Comandi disponibili:");
    console.log("\nlist - Mostra la lista di cose da fare");
    console.log("\nadd - Aggiunge una nuova cosa da fare. \n    Deve essergli passato del testo come argomento.\n    Ad es. node todo.js add \"Studiare node\"");
    console.log("\nremove - Rimuovi un elemento dalla lista. \n    Deve essergli passato l\'indice dell\'elemento da rimuovere.\n    Ad es. node todo.js rimuovi 1");
    console.log("\ndone - Completa un elemento dalla lista. \n    Deve essergli passato l\'indice dell\'elemento da completare.\n    Ad es. node todo.js done 1");
    console.log("\nclear - Svuota la lista");
    console.log("\nhelp - Mostra questa guida");
}

function main() {
    if (!comando) {
        showToDoList();
        return;
    }
    switch (comando) {
        case "list":
            showToDoList();
            break;
        case "add":
            addToToDoList();
            break;
        case "remove":
            removeFromToDoList();
            break;
        case "done":
            completeTask();
            break;
        case "clear":
            clearToDoList();
            break;
        case "help":
            showHelpCommands();
            break;
        default:
            console.log("Comando non riconosciuto. Usa 'help' per vedere i comandi disponibili.");
    }
}

main();
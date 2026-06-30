import * as fs from "fs";

const percorsoFile = "./todos.json";

function loadFile() {
    if (fs.existsSync(percorsoFile)) {
        const contenuto = fs.readFileSync(percorsoFile, "utf-8");
        return JSON.parse(contenuto);
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
        console.log(indice + 1, "-", elemento);

    })
}

function addToToDoList() {
    if (!testo) {
        console.log("Devi scrivere un testo da aggiungere. Usa 'help' per vedere come.");
        return;
    }
    lista.push(testo);
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

    lista.splice(indice - 1, 1);
    saveFile(lista);
    console.log("Rimosso l'elemento numero:", indice);
    console.log("Lista aggiornata:"); showToDoList();
}

function showHelpCommands() {
    console.log("Comandi disponibili:");
    console.log("\nlist - Mostra la lista di cose da fare");
    console.log("\nadd - Aggiunge una nuova cosa da fare. \n    Deve essergli passato del testo come argomento.\n    Ad es. node todo.js add \"Studiare node\"");
    console.log("\nremove - Rimuovi un elemento dalla lista. \n    Deve essergli passato l\'indice dell\'elemento da rimuovere.\n    Ad es. node todo.js rimuovi 1");
    console.log("\nhelp - Mostra questa guida");

}

function main() {
    if (comando === "list") {
        showToDoList();
    }
    else if (comando === "add") {
        addToToDoList();
    }
    else if (comando === "help") {
        showHelpCommands();
    }
    else if (comando === "remove") {
        removeFromToDoList();
    }
    else {
        console.log("Comando non riconosciuto. Usa 'help' per vedere i comandi disponibili.");
    }
}

main();
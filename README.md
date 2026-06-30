# Node.js Introduction Exercise

> **Esercizio didattico di Node.js** sviluppato durante il corso **Web Development** di **Boolean**

## 📌 Descrizione del Progetto

Questo progetto rappresenta il mio primo approccio pratico con **Node.js**, realizzato con l'obiettivo di comprendere i fondamentali dello sviluppo lato server e delle applicazioni CLI (Command Line Interface) in JavaScript.

Si tratta di una raccolta di esercizi che dimostrano le basi di Node.js: gestione dei moduli, interazione con il file system, manipolazione di dati JSON e creazione di tool da riga di comando.

## 🎯 Obiettivi Didattici

L'esercizio nasce con questi obiettivi principali:

- **Comprendere l'ambiente Node.js** e le differenze con JavaScript nel browser
- **Imparare a lavorare con i moduli nativi** di Node.js (fs, process, ecc.)
- **Sviluppare applicazioni CLI** che interagiscono con l'utente tramite terminale
- **Gestire file JSON** per la persistenza dei dati
- **Utilizzare process.argv** per ricevere input da riga di comando
- **Applicare i concetti di modulo ES6** (import/export) in Node.js

## 📂 Struttura del Progetto

```
node-intro/
├── app.js          # Esercizio di saluto basato sull'ora
├── todo.js         # Applicazione CLI To-Do List completa
├── todos.json      # File di persistenza per la To-Do List
├── package.json    # Configurazione del progetto Node.js
└── node_modules/   # Dipendenze del progetto
```

## 🚀 Esercizi Implementati

### 1. App di Saluto (`app.js`)

Un semplice script che saluta l'utente in base all'ora del giorno:

```bash
node app.js 8    # Output: Buongiorno!
node app.js 15   # Output: Buonasera!
node app.js 22   # Output: Buonanotte!
```

**Cosa imparato:**
- Uso di `process.argv` per leggere argomenti da riga di comando
- Logica condizionale in Node.js
- Esecuzione di script JavaScript al di fuori del browser

### 2. To-Do List CLI (`todo.js`)

Una completa applicazione da terminale per gestire una lista di cose da fare con persistenza su file JSON.

**Comandi disponibili:**

| Comando | Descrizione | Esempio |
|---------|-------------|---------|
| `list` | Mostra tutti i task | `node todo.js list` |
| `add` | Aggiunge un nuovo task | `node todo.js add "Comprare il latte"` |
| `remove` | Rimuove un task per indice | `node todo.js remove 1` |
| `help` | Mostra la guida | `node todo.js help` |

**Cosa imparato:**
- Lavorare con il modulo **`fs`** (File System) per leggere e scrivere file
- Parsing e serializzazione di dati **JSON**
- Gestione degli argomenti da riga di comando
- Creazione di un'interfaccia a riga di comando interattiva
- Persistenza dei dati senza database

## 🛠 Tecnologie e Strumenti Utilizzati

- **Node.js** - Runtime JavaScript per eseguire codice server-side
- **ES Modules** - Sintassi moderna `import/export` per i moduli
- **Modulo fs** - Per operazioni sul file system
- **Modulo process** - Per interagire con il processo Node.js e gli argomenti CLI
- **JSON** - Formato per la persistenza dei dati
- **pnpm** - Package manager utilizzato per la gestione delle dipendenze

## 💡 Competenze Acquisite

Attraverso questo esercizio ho sviluppato le seguenti competenze:

1. **Configurazione di un progetto Node.js** (inizializzazione, package.json)
2. **Esecuzione di script** tramite terminale
3. **Lettura e scrittura di file** tramite il modulo fs
4. **Gestione dei dati** in formato JSON
5. **Sviluppo di tool CLI** con input utente
6. **Debugging** di applicazioni Node.js
7. **Gestione delle dipendenze** tramite package manager

## 🎓 Contesto Formativo

Questo progetto è stato sviluppato durante il percorso **Web Development** di **Boolean**.

## 🚀 Come Eseguire il Progetto

### Prerequisiti

- Node.js installato (versione 18 o superiore consigliata)
- Terminale (PowerShell, CMD, Bash, ecc.)

### Installazione

```bash
# Clonare il repository o navigare nella cartella
cd path/to/node-intro

# Installare le dipendenze (opzionale, questo progetto ne ha poche)
npm install
# o
pnpm install
```

### Esecuzione

```bash
# Eseguire l'app di saluto
node app.js 10

# Utilizzare la To-Do List
node todo.js list
node todo.js add "Nuovo compito"
node todo.js remove 1
node todo.js help
```
> **Progetto realizzato con passione per imparare e crescere come sviluppatore.**

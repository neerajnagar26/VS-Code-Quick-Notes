
# VS Code Quick Notes

A lightweight VS Code extension I created to make note-taking easier while coding.

## What it does
- Adds a command **Quick Notes: Add Note** to the Command Palette.
- Lets you quickly type a note and automatically saves it into a `NOTES.md` file inside the workspace.
- Keeps all TODOs and ideas in one place without leaving the editor.

## Why I built it
When working on experiments or coding tasks, I often needed a fast way to jot down notes or reminders.  
Instead of switching to another app, this extension lets me capture them directly in VS Code.

## Features
- Simple command available in the Command Palette.  
- Notes are appended as bullet points to `NOTES.md`.  
- Automatically opens the file after writing so you can review or edit.  

## Usage
1. Open a folder in VS Code.  
2. Open the **Command Palette** (`Cmd+Shift+P` on Mac / `Ctrl+Shift+P` on Windows/Linux).  
3. Run **Quick Notes: Add Note**.  
4. Type your note → it appears in `NOTES.md`.  

---

## Installation & Running

### Option 1: Run in Development Mode
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/vscode-quick-notes.git
   cd vscode-quick-notes


2. Install dependencies:

   ```bash
   npm install
   ```
3. Compile the extension:

   ```bash
   npm run compile
   ```
4. Press **F5** (or **Fn+F5** on Mac) in VS Code → this opens a new window called **Extension Development Host**.
5. In that window, open any folder and run **Quick Notes: Add Note** from the Command Palette.

### Option 2: Package & Install as `.vsix`

1. Build a package:

   ```bash
   npx @vscode/vsce package
   ```

   This creates a file like `vscode-quick-notes-0.0.1.vsix`.
2. In VS Code, go to Extensions panel → `…` menu → **Install from VSIX…**.
3. Select the `.vsix` file → the extension is installed locally.

---

## Tech Stack

* **TypeScript**
* **VS Code Extension API** (Command API, InputBox, FileSystem API)

---

This extension was built as a small productivity helper and also gave me hands-on experience with **VS Code Extension APIs** (commands, input box, and file system).

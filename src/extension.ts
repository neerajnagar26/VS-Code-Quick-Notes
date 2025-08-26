import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('quicknotes.addNote', async () => {
    const note = await vscode.window.showInputBox({ prompt: 'Enter your note' });
    if (!note) return;

    const ws = vscode.workspace.workspaceFolders?.[0];
    if (!ws) {
      vscode.window.showErrorMessage('Open a folder/workspace first to save NOTES.md');
      return;
    }

    const notesUri = vscode.Uri.joinPath(ws.uri, 'NOTES.md');

    let current = '';
    try {
      const buf = await vscode.workspace.fs.readFile(notesUri);
      current = Buffer.from(buf).toString('utf8');
    } catch { /* file may not exist yet */ }

    const needsNl = current.length > 0 && !current.endsWith('\n');
    const updated = current + (needsNl ? '\n' : '') + `- ${note}\n`;
    await vscode.workspace.fs.writeFile(notesUri, Buffer.from(updated, 'utf8'));

    const doc = await vscode.workspace.openTextDocument(notesUri);
    await vscode.window.showTextDocument(doc);
    vscode.window.showInformationMessage('Note added to NOTES.md');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}

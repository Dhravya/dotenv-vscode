const vscode = require('vscode');
const settings = require('./settings');

const run = function () {
  // Retrieve custom file associations from settings.json
  const customAssociations = vscode.workspace.getConfiguration().get('dotenv.files.associations');

  // Populate default file associations
  settings.populateFileAssociations();

  // Merge custom file associations with default ones
  const fileAssociations = vscode.workspace.getConfiguration('files');
  for (const [pattern, language] of Object.entries(customAssociations)) {
    fileAssociations.update('associations', { ...fileAssociations.get('associations'), [pattern]: language }, vscode.ConfigurationTarget.Global);
  }

  return true;
}

module.exports.run = run;

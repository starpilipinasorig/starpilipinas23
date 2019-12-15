/**
 * @file getConfiguration file that contains a fucntion that gathers all the user settings.
 *
 * @author Jose Gracia Berenguer
 * @since 1.8.1.
 * @link https://github.com/Josee9988/MinifyAll repository.
 * @link https://github.com/Josee9988/MinifyAll/issues issues and enhancements.
 */

const vscode = require('vscode');


/**
 * Summary: The function getUserSettings gathers all settings from the user and returns them.
 *
 * @return {Object} with all the settings.
 */
function getUserSettings() {
    const conf = vscode.workspace.getConfiguration('MinifyAll');
    return {
        hexDisabled: conf.get('disableHexadecimalShortener'),
        statusDisabled: conf.get('disableStatusbarInformation'),
        priority: conf.get('statusbarPriority'),
        alignment: conf.get('statusbarAlignment'),
        disableHtml: conf.get('disableHtml'),
        disableCss: conf.get('disableCss'),
        disableScss: conf.get('disableScss'),
        disableLess: conf.get('disableLess'),
        disableSass: conf.get('disableSass'),
        disableJson: conf.get('disableJson'),
        disableJsonc: conf.get('disableJsonc'),
        disableMessages: conf.get('disableMessages'),
        minifyOnSave: conf.get('minifyOnSave'),
        minifyOnSaveToNewFile: conf.get('minifyOnSaveToNewFIle'),
        prefix: conf.get('PrefixOfNewMinifiedFiles'),
        disableJavascript: conf.get('disableJavascript'),
        disableJavascriptReact: conf.get('disableJavascriptReact'),
        disableTypescript: conf.get('disableTypescript'),
        openMinifiedDocument: conf.get('openMinifiedDocument'),
    }
}

exports.getUserSettings = getUserSettings;
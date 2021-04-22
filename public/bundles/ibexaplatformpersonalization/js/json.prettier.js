const CLASS_JSON_KEY = 'ez-json ez-json__key';
const CLASS_JSON_VALUE = 'ez-json ez-json__value';
const CLASS_JSON_STRING = 'ez-json ez-json__string';
const REGEXP_JSON_LINE = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;

export class JsonPrettier {  
    construct() {
        this.jsonString= '{}';
    }
    
    set jsonContent(json) {
        if (typeof json !== 'string') {
            json = JSON.stringify(json, null, 3)
        }

        this.jsonString = json;
    }

    replaceCallback(match, indent, key, value, closing) {
        let jsonRow = indent || '';
        const jsonRowClosing = closing || '';

        if (key) {
            const jsonKey = key.replace(/[": ]/g, '');
            const jsonKeyRow = `<span class="${CLASS_JSON_KEY}">${jsonKey}</span>:`;

            jsonRow += jsonKeyRow;
        }

        if (value) {
            const jsonValueClass = value[0] === '"' ? CLASS_JSON_STRING : CLASS_JSON_VALUE;
            const jsonValueRow = `<span class="${jsonValueClass}">${value}</span>`;

            jsonRow += jsonValueRow;
        }

        return jsonRow + jsonRowClosing;
    }

    getFormattedJson() {
        return this.jsonString
            .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(REGEXP_JSON_LINE, this.replaceCallback);
    }
}

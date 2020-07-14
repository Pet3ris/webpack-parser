
require('normalize.css/normalize.css');
require('./styles/index.scss');
const Parser = require('@solidity-parser/parser');

document.addEventListener("DOMContentLoaded", () => {

    const pluginsTriggerElement = document.getElementById('plugins-trigger');
    const pluginsElement = document.getElementById('plugins');

    const pluginsVisibleClass = "splash-overview-plugins__list--visible";

    pluginsTriggerElement.onclick = () => {
        pluginsElement.classList.toggle(pluginsVisibleClass);
    }

    console.log(1);
    console.log(Parser.parse("import \"File1\";"));
});

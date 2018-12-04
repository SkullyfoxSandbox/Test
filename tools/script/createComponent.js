(async function(){
    const prompt = require('prompt');
    const fs = require('fs');
    const path = require('path');
    const colors = require('colors');
    const { promisify } = require('util');
    const write = promisify(fs.writeFile);
    const mkdir = promisify(fs.mkdir);
    const read = promisify(fs.readFile);
    const TemplateJSX = require('./../template/TemplateJSX.js');
    const TemplateStyle = require('./../template/TemplateStyle.js');

    function setup(){
        const schema = {
            properties: {
                component_name: {
                    default: 'newComponent'
                },
            }
        }

        const SRC_PATH = path.join(__dirname, './../../src');
        const WEBPACK_PATH = path.join(__dirname, './../../config/webpack');

        console.log('Veuillez renseigner le nom du composant :'.cyan);
        prompt.start();

        prompt.get(schema, async (err, result) => {

            let name = result.component_name;

            const validationSchema = {
                properties: {
                    confirm: {
                        pattern: /^[On]/,
                        description: "Êtes vous sûr(e) ? (O/n)".cyan,
                        default: "O",
                        message: "Désolé, je n'ai pas compris. Êtes vous sûr(e) ? (O/n)".cyan,
                    }
                }
            }


            prompt.start();
            prompt.get(validationSchema, async (arr, result) => {
                if (result.confirm === "O"){
                    await mkdir(path.join(SRC_PATH, `components/${name}`));
                    await write(path.join(SRC_PATH, `components/${name}/${name}.jsx`), TemplateJSX(name));
                    await write(path.join(SRC_PATH, `components/${name}/${name}.sass`), TemplateStyle(name, "Component"));
                    console.log(`
                                  \rLe composant ${name} a été généré avec succès avec :\n
                                  \r    - Un fichier ${name}.jsx qui sera le composant,\n
                                  \r    - Un fichier ${name}.sass qui sera importé dans le JSX et qui servira au style propre au component.\n\n
                                  \rLe composant ${name} sera à importer dans la page souhaité.
                      `.green);
                } else {
                    setup();
                }
            })
        });
    }

    setup();
})()

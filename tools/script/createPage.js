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
                page_name: {
                    default: 'newPage'
                },
            }
        }

        const SRC_PATH = path.join(__dirname, './../../src');
        const WEBPACK_PATH = path.join(__dirname, './../../config/webpack');

        console.log('Veuillez renseigner le nom de la page :'.cyan);
        prompt.start();

        prompt.get(schema, async (err, result) => {

            let name = result.page_name.charAt(0).toUpperCase()+result.page_name.slice(1);

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

            const app_file = (await read(path.join(SRC_PATH, 'App.jsx')))
            .toString()
            .split("\n");

            console.log(app_file);

            let newImport = app_file.find(line => line === 'import Home from \'./pages/Home/Home.jsx\';\r') + `\n\rimport ${name} from \'./pages/${name}/${name}.jsx\';\r`;
            app_file[app_file.findIndex(line => line === 'import Home from \'./pages/Home/Home.jsx\';\r')] = newImport;

            let newRoute = app_file
              .find(line => line === '              <Route path="/" exact="true" component={Home} />\r') + `\n\r              <Route path="/${name}" exact="true" component={${name}} />\r`;
            app_file[app_file.findIndex(line => line === '              <Route path="/" exact="true" component={Home} />\r')] = newRoute;



            prompt.start();
            prompt.get(validationSchema, async (arr, result) => {
                if (result.confirm === "O"){
                    await mkdir(path.join(SRC_PATH, `pages/${name}`));
                    await write(path.join(SRC_PATH, `pages/${name}/${name}.jsx`), TemplateJSX(name));
                    await write(path.join(SRC_PATH, `pages/${name}/${name}.sass`), TemplateStyle(name, "Page"));
                    await write(path.join(SRC_PATH, 'App.jsx'), app_file.join('\n'));
                    console.log(`\
                                  \rLa page ${name} a été généré avec succès avec :\n
                                  \r    - Un fichier ${name}.jsx qui sera la page,\n
                                  \r    - Un fichier ${name}.sass qui sera importé dans le JSX et qui servira au style propre au component.\n\n
                                  \r Une route associé à cette page était ajouté dans le fichier App.jsx\
                      `.green);
                } else {
                    setup();
                }
            })
        });
    }

    setup();
})()

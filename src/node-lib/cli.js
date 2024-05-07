import getFile from './index.js'
import chalk from 'chalk'
import fs from 'fs'
import listValidated from './http-validation.js'

const path = process.argv

async function printList(valid, result, identifier = '') {
    if (valid) {
        console.log(
            chalk.yellow('lista validada'),
            chalk.black.bgGreen(identifier),
            await listValidated(result))
    } else {
        console.log(
            chalk.yellow('lista de links'),
            chalk.black.bgGreen(identifier),
            result)
    }
}

async function processText(argument) {
    const path = argument[2]
    const valid = argument[3] === '--valid'

    try {
        fs.lstatSync(path)
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log('arquivo ou diretório não existe')
            return
        }
    }

    if (fs.lstatSync(path).isFile()) {
        const result = await getFile(argument[2])
        printList(valid, result)
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path)
        files.forEach(async (fileName) => {
            const lista = await getFile(`${path}/${fileName}`)
            printList(valid, lista, fileName)
        })
    }
}

processText(path)
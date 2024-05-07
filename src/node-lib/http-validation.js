function extractLinks(arrLinks) {
    return arrLinks.map((objectLink) => Object.values(objectLink).join())
}

async function checkStatus(listURLs) {
    const arrStatus = await Promise
        .all(
            listURLs.map(async (url) => {
                try {
                    const response = await fetch(url)
                    return response.status
                } catch (erro) {
                    return handlesErrors(erro)
                }
            })
        )
    return arrStatus
}

function handlesErrors(erro) {
    if (erro.cause.code === 'ENOTFOUND') {
        return 'link não encontrado'
    } else {
        return 'ocorreu algum erro'
    }
}

export default async function listValidated(listOfLinks) {
    const links = extractLinks(listOfLinks)
    const status = await checkStatus(links)

    return listOfLinks.map((object, index) => ({
        ...object,
        status: status[index]
    }))
}
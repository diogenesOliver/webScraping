const { default: axios } = require('axios')
const axio = require('axios')
const cheerio = require('cheerio')

const PAGE_URL = "https://pt.wikipedia.org/wiki/Oscar_de_melhor_filme"

async function getMovies() {
    const { data } = await axios.get(PAGE_URL)
    const $ = cheerio.load(data)

    const listOfMovies = []
    $('.wikitable tbody tr').each((i, element) => {
        const name = $(element).find('td[style*="background:#FAEB86"]').last().text().replace("\n", "")
        if (name !== '') {
            const year = $(element).find('td[style*="background:#FAEB86"]').first().prev('td').text().slice(-5).replace("\n", "")
            movie = { name, year }
            listOfMovies.push(movie)

            console.log(listOfMovies)
        }

    })
}

getMovies()
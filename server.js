const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 1978
const toTitleCase = require('@gouch/to-title-case')

app.use(cors())

const discography = {
//studio albums
    'three imaginary boys':{
        'released': '1979',
        'album category': 'studio',
        'label': 'Fiction',
    },

    'seventeen seconds':{
        'released': '1980',
        'album category': 'studio',
        'label': 'Fiction',
    },

    'faith':{
        'released': '1981',
        'album category': 'studio',
        'label': 'Fiction',
    },

    'pornography':{
        'released': '1982',
        'album category': 'studio',
        'label': 'Fiction',
    },

    'the top':{
        'released': '1984',
        'album category': 'studio',
        'label': 'Fiction',
    },

    'the head on the door':{
        'released': '1985',
        'album category': 'studio',
        'label': 'Fiction',
    },

    'kiss me, kiss me, kiss me':{
        'released': '1987',
        'album category': 'studio',
        'label': 'Fiction',
    },

    'disintegration':{
        'released': '1989',
        'album category': 'studio',
        'label': 'Fiction',
    },

    'wish':{
        'released': '1992',
        'album category': 'studio',
        'label': 'Fiction',
    },

    'wild mood swings':{
        'released': '1996',
        'album category': 'studio',
        'label': 'Fiction',
    },

    'bloodflowers':{
        'released': '2000',
        'album category': 'studio',
        'label': 'Fiction',
    },

    'the cure':{
        'released': '2004',
        'album category': 'studio',
        'label': 'Geffen',
    },

    '4:13 dream':{
        'released': '2008',
        'album category': 'studio',
        'label': 'Geffen',
    },

//live albums
    'the cure live':{
        'released': '1984',
        'album category': 'live',
        'label': 'Fiction'
    },

    'entreat':{
        'released': '1991',
        'album category': 'live',
        'label': 'Fiction',
    },

    'show':{
        'released': '1993',
        'album category': 'live',
        'label': 'Fiction',
    },

    'paris':{
        'released': '1993',
        'album category': 'live',
        'label': 'Fiction',
    },

    'bestival live 2011':{
        'released': '2011',
        'album category': 'live',
        'label': 'Sunday Best',
    },

    '40 live':{
        'released': '2019',
        'album category': 'live',
        'label': 'Universal Music Group',
    },

//compilations
    "boys don't cry":{
        'released': '1980',
        'album category': 'compilation',
        'label': 'Fiction',
    },

    'happily ever after':{
        'released': '1981',
        'album category': 'compilation',
        'label': 'A&M',
    },

    'japanese whispers':{
        'released': '1983',
        'album category': 'compilation',
        'label': 'Fiction',
    },

    'standing on a beach':{
        'released': '1986',
        'album category': 'compilation',
        'label': 'Fiction',
    },

    'mixed up':{
        'released': '1990',
        'album category': 'compilation',
        'label': 'Fiction',
    },

    'galore':{
        'released': '1997',
        'album category': 'compilation',
        'label': 'Fiction',
    },

    'greatest hits':{
        'released': '2001',
        'album category': 'compilation',
        'label': 'Fiction',
    },

    'join the dots':{
        'released': '2004',
        'album category': 'compilation',
        'label': 'Fiction',
    },

    'torn down':{
        'released': '2018',
        'album category': 'compilation',
        'label': 'data not available',
    },

//extended play
    'a single':{
        'released': '1982',
        'album category': 'extended play',
        'label': 'Fiction',
    },

    'the walk':{
        'released': '1983',
        'album category': 'extended play',
        'label': 'Sire',
    },

    'half an octopuss & quadpus':{
        'released': '1986',
        'album category': 'extended play',
        'label': 'Fiction',
    },

    'the peel sessions':{
        'released': '1988',
        'album category': 'extended play',
        'label': 'Strange Fruit',
    },

    'integration':{
        'released': '1990',
        'album category': 'extended play',
        'label': 'Elektra',
    },

    'lost wishes':{
        'released': '1993',
        'album category': 'extended play',
        'label': 'Fiction',
    },

    'five swing live':{
        'released': '1987',
        'album category': 'extended play',
        'label': 'Fiction',
    },

    'festival 2005':{
        'released': '2006',
        'album category': 'extended play',
        'label': 'Geffen',
    },

    'hypnogogic states':{
        'released': '2008',
        'album category': 'extended play',
        'label': 'Geffen',
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response)=>{
    response.json(discography)
})

app.get('/api/:album', (request, response) => {
    const album = request.params.album.toLowerCase()
    if (discography[album]){
        response.json(discography[album])
    }
    else {
        response.json(discography['Album not found'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT} and everything is cold now.`)
})
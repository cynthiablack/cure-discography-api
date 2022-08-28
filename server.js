const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 1978

app.use(cors())

const discography = {
//studio albums
    'three imaginary boys':{
        'released': '1979',
        'category': 'studio',
        'label': 'Fiction',
    },

    'seventeen seconds':{
        'released': '1980',
        'category': 'studio',
        'label': 'Fiction',
    },

    'faith':{
        'released': '1981',
        'category': 'studio',
        'label': 'Fiction',
    },

    'pornography':{
        'released': '1982',
        'category': 'studio',
        'label': 'Fiction',
    },

    'the top':{
        'released': '1984',
        'category': 'studio',
        'label': 'Fiction',
    },

    'the head on the door':{
        'title': 'The Head on the Door',
        'released': '1985',
        'category': 'studio',
        'label': 'Fiction',
    },

    'kiss me, kiss me, kiss me':{
        'released': '1987',
        'category': 'studio',
        'label': 'Fiction',
    },

    'disintegration':{
        'released': '1989',
        'category': 'studio',
        'label': 'Fiction',
    },

    'wish':{
        'released': '1992',
        'category': 'studio',
        'label': 'Fiction',
    },

    'wild mood swings':{
        'released': '1996',
        'album category': 'studio',
        'label': 'Fiction',
    },

    'bloodflowers':{
        'released': '2000',
        'category': 'studio',
        'label': 'Fiction',
    },

    'the cure':{
        'released': '2004',
        'category': 'studio',
        'label': 'Geffen',
    },

    '4:13 dream':{
        'released': '2008',
        'category': 'studio',
        'label': 'Geffen',
    },

//live albums
    'the cure live':{
        'released': '1984',
        'category': 'live',
        'label': 'Fiction'
    },

    'entreat':{
        'released': '1991',
        'category': 'live',
        'label': 'Fiction',
    },

    'show':{
        'released': '1993',
        'category': 'live',
        'label': 'Fiction',
    },

    'paris':{
        'released': '1993',
        'category': 'live',
        'label': 'Fiction',
    },

    'bestival live 2011':{
        'released': '2011',
        'category': 'live',
        'label': 'Sunday Best',
    },

    '40 live':{
        'released': '2019',
        'category': 'live',
        'label': 'Universal Music Group',
    },

//compilations
    "boys don't cry":{
        'released': '1980',
        'category': 'compilation',
        'label': 'Fiction',
    },

    'happily ever after':{
        'released': '1981',
        'category': 'compilation',
        'label': 'A&M',
    },

    'japanese whispers':{
        'released': '1983',
        'category': 'compilation',
        'label': 'Fiction',
    },

    'standing on a beach':{
        'title': 'Standing on a Beach',
        'released': '1986',
        'category': 'compilation',
        'label': 'Fiction',
    },

    'mixed up':{
        'released': '1990',
        'album category': 'compilation',
        'label': 'Fiction',
    },

    'galore':{
        'released': '1997',
        'category': 'compilation',
        'label': 'Fiction',
    },

    'greatest hits':{
        'released': '2001',
        'category': 'compilation',
        'label': 'Fiction',
    },

    'join the dots':{
        'title': 'Join the Dots',
        'released': '2004',
        'category': 'compilation',
        'label': 'Fiction',
    },

    'torn down':{
        'released': '2018',
        'category': 'compilation',
        'label': 'data not available',
    },

//extended play
    'a single':{
        'released': '1982',
        'category': 'extended play',
        'label': 'Fiction',
    },

    'the walk':{
        'released': '1983',
        'category': 'extended play',
        'label': 'Sire',
    },

    'half an octopuss & quadpus':{
        'title': 'Half an Octopuss & Quadpus',
        'released': '1986',
        'category': 'extended play',
        'label': 'Fiction',
    },

    'the peel sessions':{
        'released': '1988',
        'category': 'extended play',
        'label': 'Strange Fruit',
    },

    'integration':{
        'released': '1990',
        'category': 'extended play',
        'label': 'Elektra',
    },

    'lost wishes':{
        'released': '1993',
        'category': 'extended play',
        'label': 'Fiction',
    },

    'five swing live':{
        'released': '1987',
        'category': 'extended play',
        'label': 'Fiction',
    },

    'festival 2005':{
        'released': '2006',
        'category': 'extended play',
        'label': 'Geffen',
    },

    'hypnogogic states':{
        'released': '2008',
        'category': 'extended play',
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
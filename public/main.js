//require('@gouch/to-title-case')

document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const album = document.querySelector('input').value
    try{
        const response = await fetch('https://cure-discography.herokuapp.com/api/${album}')
        const data = await response.json()
        console.log(data)

        let albumTitle = document.querySelector('#album').value
        console.log(albumTitle)

        let category = document.querySelector('#category').value
        console.log(category)

        let year = document.querySelector('#year').value
        console.log(year)

        let label = document.querySelector('#label').value
        console.log(label)

        //let label = document.getElementById('label').innerText;
        //label = document.getElementById('label') = `Label: ${label}`
        //document.getElementById('label');

        //.innerText = `Label: ${data.label}`
    }
    catch(error){
        console.log(error)
    }
    }
//require('@gouch/to-title-case')

document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const album = document.querySelector('input').value
    try{
        const response = await fetch('https://cure-discography.herokuapp.com/api/${album}')
        const data = await response.json()

        console.log(data)
        document.querySelector('#label').innerText = `Label: ${data.label}`
    }catch(error){
        console.log(error)
    }
    }
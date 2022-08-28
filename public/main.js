document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    let album = document.querySelector('input').value;
    try {
        const response = await fetch('https://cure-discography.herokuapp.com/api/${album}');
        const data = await response.json()
        console.log(data)
    }
    catch(error) {
        console.log(error)
    }
}
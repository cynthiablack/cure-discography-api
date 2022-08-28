document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const album = document.querySelector('input').value;
    try {
        const response = await fetch(`https://cure-discography.herokuapp.com/api/${album}`);
        const data = await response.json()
        console.log(data)

        if (data.title) {
            document.getElementById('album').innerText = data.title;
        }
        else {
            document.getElementById('album').innerText = album;
        }

        document.getElementById('category').innerText = data.category;
        document.getElementById('year').innerText = data.released;
        document.getElementById('label').innerText = data.label;

    }
    catch(error) {
        console.log(error)
    }
}
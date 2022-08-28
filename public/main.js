document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const album = document.querySelector('input').value;
    try {
        const response = await fetch(`https://cure-discography.herokuapp.com/api/${album}`);
        const data = await response.json()
        console.log(data)

        document.getElementById('album').innerText = album;


    }
    catch(error) {
        console.log(error)
    }
}

/*
                <li id="album" class="capitalize"></li>
                <li id="category"></li>
                <li id="year"></li>
                <li id="label" class="capitalize"></li>
*/
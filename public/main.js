//require('@gouch/to-title-case')

/* THIS DOESN'T WORK?
document.querySelector('button').addEventListener('click', run)

function run() {
  const album = document.querySelector('#album').value
  const category = document.querySelector('#category').value
  const year = document.querySelector('#year').value
  const label = document.querySelector('#label').value

  document.querySelector('#results').innerText = 
    `album: ${album}
     category: ${category}
     year: ${year}
     label: ${label}`
}
*/


/*
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

        let labelValue = document.querySelector('#label').value
        //label = document.querySelector('#label').innerText = labelValue
        console.log(label)

        //let label = document.getElementById('label').innerText;
        //label = document.getElementById('label') = `Label: ${label}`
        //document.getElementById('label');
        //   document.querySelector('#placeToYell').innerText = yellText

        //.innerText = `Label: ${data.label}`
    }
    catch(error){
        console.log(error)
    }
    }
*/
    /*
document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

  //Add what you should be doing - conditionals go here

  // document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
*/
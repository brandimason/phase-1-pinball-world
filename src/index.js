//fetch request

fetch("http://localhost:3000/games")
    .then(res => res.json())
    .then(data => {
        buildNavBar(data)
        showDetails(data[0])
        handleForm()
    })


let currentGame


function buildNavBar(gameData){
    // console.log(gameData)
    let nav = document.querySelector('.game-list')
    gameData.forEach(game => {
        let navItem = document.createElement("h5");
        navItem.textContent = `${game.name} (${game.manufacturer_name})`
        nav.appendChild(navItem)
        navItem.addEventListener('click', ()=>{
            showDetails(game)
        })
    });
}


function showDetails(gameData){
    currentGame = gameData
    const detailImage = document.querySelector('#detail-image')
    detailImage.src = gameData.image

    const detailTitle = document.querySelector('#detail-title')
    detailTitle.textContent = gameData.name

    const highScore = document.querySelector('#detail-high-score')
    highScore.textContent = gameData.high_score 

}

function handleForm(){
    let form = document.querySelector('#high-score-form')
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        
        currentGame.high_score = event.target["score-input"].value;

        

        showDetails(currentGame)
        //referring back to the function
        form.reset()
        //resets the form so nothing is inside the box once submit it clicked
    })
}


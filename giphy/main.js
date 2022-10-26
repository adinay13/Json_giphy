function sendApiReq() {
    let userInput = document.getElementById('input').value
    console.log(userInput)
    let giphyApiKey = 'kmEQRqc1cwcBxfJWKMYxgJAYoD8J9kxl'
    let giphyURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`
    fetch(giphyURL).then(function (data) {
        return data.json()
    })
        .then(function (json) {
            console.log(json.data[0].images.fixed_height.url)
            let imgPath = json.data[0].images.fixed_height.url
            let img = document.createElement("img")
            img.setAttribute("src", imgPath)
            document.body.appendChild(img)
        })

}
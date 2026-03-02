function generateHome () {
    const content = document.querySelector("#content")
    content.innerHTML = ""
    const header = document.createElement("h1")
    header.textContent = "Dracula's Goulash"
    const review = document.createElement("div")
    const quote =document.createElement("div")
    quote.textContent = "Goulash was fine, but the atmosphere was a bit eery"
    const quoter = document.createElement("div")
    quoter.textContent = " Dmitri from Russia"
    review.append(quote,quoter)
    const hours = document.createElement("div")
    const hoursHeader = document.createElement("h2")
    hoursHeader.textContent = "Hours:"
    const hoursText = document.createElement("div")
    hoursText.textContent = "from dusk till dawn"
    hours.append(hoursHeader,hoursText)
    const location = document.createElement("div")
    const locationHeader = document.createElement("h2")
    locationHeader.textContent = "Location:"
    const locationText = document.createElement("div")
    locationText.textContent = "Transylvannia, and some other places"
    location.append(locationHeader,locationText)
    content.append(header,review,hours,location)
}

export {generateHome}
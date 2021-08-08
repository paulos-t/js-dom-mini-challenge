/***** Deliverable 1 *****/
const header = document.querySelector('h1#header')
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'blue'


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const profile = document.querySelector('div#profile')
profile.querySelector('img').src = traveler.photo
profile.querySelector('img').alt = traveler.name
profile.querySelector('h2').textContent = traveler.name
profile.querySelector('em').textContent = traveler.nickname


/***** Deliverable 4 *****/
function createSighting(sighting) {
    const animalSighting = document.createElement('li')
    animalSighting.dataset.id = sighting.id
    let desc = document.createElement('p')
    desc.textContent = sighting.description
    let photo = document.createElement('img')
    photo.src = sighting.photo
    photo.alt = sighting.species
    let link = document.createElement('a')
    link.href = sighting.link
    link.textContent = `Here's a video about the ${sighting.species} species!`
    animalSighting.append(desc, photo, link)
    return animalSighting
}

traveler.animalSightings.forEach(elt => {
    document.querySelector('ul#animals').appendChild(createSighting(elt))
})


/***** Deliverable 5 *****/
document.querySelector("ul#animals li[data-id='3']").remove()
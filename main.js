const $ = document.querySelector.bind(document)

const gemAlert = $('#gemAlert')
const priceText = $('#price')
const resultText = $('#result')
const itemSelect = $('#item')
const gemSelect = $('#gem')

let selectedGem = ''
let selectedItem = ''
let price = 0
let gemsNeeded = 1

const elements = {
    ruby: 'fire',
    sapphire: 'frost',
    quartz: 'lightning',
    emerald: 'acid',
    skull: 'necrotic',
    dragonfang: 'magical piercing'
}

const damage = {
    elemental: '1d6',
    dragonfang: '1d8'
}

function alertGems(needed) {
    if (needed == 1) {
        gemAlert.innerHTML=`1 gem is needed for this recipe.`
    }
    else {
        gemAlert.innerHTML=`${needed} gems of the same type are needed for this recipe.`
    }
}

function setResult(itemText) {
    
    resultText.innerHTML=""
}

itemSelect.addEventListener('change', () => {
    let value = itemSelect.value
    console.log(value)
    let result = ''
    switch (value) {
        case 'Melee Weapon':
            gemsNeeded = 1
            price = 200
            break
        case 'Shield':
            gemsNeeded = 3
            price = 2000
            break
        case 'Body Armor':
            gemsNeeded = 5
            console.log('bodymassage')
            price = 5000
            break
    }
    console.log(gemsNeeded)
    alertGems(gemsNeeded)
    setResult()
})

gemSelect.addEventListener('change', (e) => {
    let value = gemSelect.value.toLowerCase()
    let damageType = elements[`${value}`]
    alertGems(gemsNeeded)
    setResult(damageType)
})
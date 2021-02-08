const generatorButtonElement = document.querySelector('[data-generator-button]')
const teamNameElement = document.querySelector('[data-team-name]')
const possibleNameLists = [
    [
        'Awesome',
        'Super',
        'Neglectic',
        'Intense',
        'Dark',
        'Unbelievably',
        'Dumb-ish',
        'Smart-ish',
        'Clumsy',
    ],
    [
        'Honey',
        'Tea',
        'Swimming',
        'Running',
        'Sleeping',
        'Derpy',
        'Awkward',
        'Muscular',
        'Fast',
        'Crawling',
    ],
    [
        'Dogs',
        'Dragons',
        'Bees',
        'Cats',
        'Bunnies',
        'Kooks',
        'Teammates',
        'Drinkers',
        'Fish',
        'Unicorns',
        'Llamas',
        'Alpacas',
        'Cups',
        'Forks',
        'Socks',
        'Elephants',
        'Fleas',
        'Worms'
    ]
]

generatorButtonElement.addEventListener('click', () => {
    showRandomTeamName(
        generateTeamName(possibleNameLists),
        teamNameElement
    )
})

function showRandomTeamName(teamName, targetElement) {
    targetElement.textContent = teamName
}

function generateTeamName(lists) {
    return lists
        .map(list => {
            const randomIndex = getRandomIndex(list)
            const randomName = list[randomIndex]

            return randomName
        })
        .join(' ')
}

function getRandomIndex(list) {
    return Math.floor(Math.random() * list.length)
}
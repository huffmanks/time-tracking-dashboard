const data = [
    {
        title: 'Work',
        timeframes: {
            daily: {
                current: 5,
                previous: 7,
            },
            weekly: {
                current: 32,
                previous: 36,
            },
            monthly: {
                current: 103,
                previous: 128,
            },
        },
    },
    {
        title: 'Play',
        timeframes: {
            daily: {
                current: 1,
                previous: 2,
            },
            weekly: {
                current: 10,
                previous: 8,
            },
            monthly: {
                current: 23,
                previous: 29,
            },
        },
    },
    {
        title: 'Study',
        timeframes: {
            daily: {
                current: 0,
                previous: 1,
            },
            weekly: {
                current: 4,
                previous: 7,
            },
            monthly: {
                current: 13,
                previous: 19,
            },
        },
    },
    {
        title: 'Exercise',
        timeframes: {
            daily: {
                current: 1,
                previous: 1,
            },
            weekly: {
                current: 4,
                previous: 5,
            },
            monthly: {
                current: 11,
                previous: 18,
            },
        },
    },
    {
        title: 'Social',
        timeframes: {
            daily: {
                current: 1,
                previous: 3,
            },
            weekly: {
                current: 5,
                previous: 10,
            },
            monthly: {
                current: 21,
                previous: 23,
            },
        },
    },
    {
        title: 'Self Care',
        timeframes: {
            daily: {
                current: 0,
                previous: 1,
            },
            weekly: {
                current: 2,
                previous: 2,
            },
            monthly: {
                current: 7,
                previous: 11,
            },
        },
    },
]

const currentTime = Array.from(document.querySelectorAll('[data-time="1"]'))
const previousFrame = Array.from(document.querySelectorAll('[data-time="2"]'))
const previousTime = Array.from(document.querySelectorAll('[data-time="3"]'))

const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')

window.addEventListener('DOMContentLoaded', () => {
    updateDaily()
    console.log('DOM fully loaded and parsed')
    daily.addEventListener('click', () => {
        updateDaily()
    })
    weekly.addEventListener('click', () => {
        updateWeekly()
    })
    monthly.addEventListener('click', () => {
        updateMonthly()
    })
})

const updateDaily = () => {
    data.forEach((item, i) => {
        currentTime[i].innerHTML = item.timeframes.daily.current
        previousFrame[i].innerHTML = 'Daily'
        previousTime[i].innerHTML = item.timeframes.daily.previous
    })
    daily.classList.add('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')
}

const updateWeekly = () => {
    data.forEach((item, i) => {
        currentTime[i].innerHTML = item.timeframes.weekly.current
        previousFrame[i].innerHTML = 'Weekly'
        previousTime[i].innerHTML = item.timeframes.weekly.previous
    })
    daily.classList.remove('active')
    weekly.classList.add('active')
    monthly.classList.remove('active')
}

const updateMonthly = () => {
    data.forEach((item, i) => {
        currentTime[i].innerHTML = item.timeframes.monthly.current
        previousFrame[i].innerHTML = 'Monthly'
        previousTime[i].innerHTML = item.timeframes.monthly.previous
    })
    daily.classList.remove('active')
    weekly.classList.remove('active')
    monthly.classList.add('active')
}

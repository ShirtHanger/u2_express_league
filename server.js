
const express = require('express') 
const PORT = process.env.PORT || 3001
const cors = require('cors')

const app = express() 
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

/* 
===============
ARRAYS
=================
 */

/* Team data */

/* Player data */

const greenBadgers = [
    {
        name: 'Khenan',
        
        sport: 'Tennis',
        team: 'Green Badgers',
        age: 21,
        heightIN: 70,
        weightLBS: 170,
        gender: 'male',
        country: 'Jamaica'
    },
]
const cornShotSquad = [
    {
        name: 'Khenan',
        
        sport: 'Tennis',
        team: 'Corn Shot Squad',
        age: 21,
        heightIN: 70,
        weightLBS: 170,
        gender: 'male',
        country: 'Jamaica'
    },
]
const hornetSwarm = [
    {
        name: 'Khenan',
        
        sport: 'Tennis',
        team: 'Hornet Swarm',
        age: 21,
        heightIN: 70,
        weightLBS: 170,
        gender: 'male',
        country: 'Jamaica'
    },
]

const jumpingSkunks = [
    {
        name: 'Khenan',
        
        sport: 'Soccer',
        team: 'Jumping Skunks',
        age: 21,
        heightIN: 70,
        weightLBS: 170,
        gender: 'male',
        country: 'Jamaica'
    },
]
const springingSnakes = [
    {
        name: 'Khenan',
        
        sport: 'Soccer',
        team: 'Springing Snakes',
        age: 21,
        heightIN: 70,
        weightLBS: 170,
        gender: 'male',
        country: 'Jamaica'
    },
]
const purpleEchidnas = [
    {
        name: 'Khenan',
        
        sport: 'Soccer',
        team: 'Purple Echidnas',
        age: 21,
        heightIN: 70,
        weightLBS: 170,
        gender: 'male',
        country: 'Jamaica'
    },
]

const terribleYokai = [
    {
        name: 'Khenan',
        
        sport: 'Sumo',
        team: 'Terrible Yokai',
        age: 21,
        heightIN: 70,
        weightLBS: 170,
        gender: 'male',
        country: 'Jamaica'
    },
]
const ironBulls = [
    {
        name: 'Khenan',
        
        sport: 'Sumo',
        team: 'Iron Bulls',
        age: 21,
        heightIN: 70,
        weightLBS: 170,
        gender: 'male',
        country: 'Jamaica'
    },
]
const cloudedNinja = [
    {
        name: 'Khenan',
        
        sport: 'Sumo',
        team: 'Clouded Ninja',
        age: 21,
        heightIN: 70,
        weightLBS: 170,
        gender: 'male',
        country: 'Jamaica'
    },
]

const tennisTeams = [
    {
        team: 'Green Badgers',
        yearFounded: 1978,
        sport: 'Tennis',
        wins: 4,
        losses: 8,
        teamID: 1,
        players: greenBadgers
    },
    {
        team: 'Corn Shot Squad',
        yearFounded: 1991,
        sport: 'Tennis',
        wins: 7,
        losses: 3,
        teamID: 2,
        players: cornShotSquad
    },
    {
        team: 'Hornet Swarm',
        yearFounded: 1960,
        sport: 'Tennis',
        wins: 9,
        losses: 0,
        teamID: 3,
        players: hornetSwarm
    }
]
const soccerTeams = [
    {
        team: 'Jumping Skunks',
        yearFounded: 2005,
        sport: 'Soccer',
        wins: 21,
        losses: 7,
        teamID: 1,
        players: jumpingSkunks
    },
    {
        team: 'Springing Snakes',
        yearFounded: 2010,
        sport: 'Soccer',
        wins: 21,
        losses: 0,
        teamID: 1,
        players: springingSnakes
    },
    {
        team: 'Purple Echidnas',
        yearFounded: 1999,
        sport: 'Soccer',
        wins: 8,
        losses: 0,
        teamID: 1,
        players: purpleEchidnas
    },
]
const sumoTeams = [
    {
        team: 'Terrible Yokai',
        yearFounded: 1989,
        sport: 'Sumo',
        wins: 15,
        losses: 9,
        teamID: 1,
        players: terribleYokai
    },
    {
        team: 'Iron Bulls',
        yearFounded: 1940,
        sport: 'Sumo',
        wins: 253,
        losses: 87,
        teamID: 1,
        players: ironBulls
    },
    {
        team: 'Clouded Ninja',
        yearFounded: 1911,
        sport: 'Sumo',
        wins: 70,
        losses: 13,
        teamID: 1,
        players: cloudedNinja
    },
]

const allPlayers = [
                ... greenBadgers, ... cornShotSquad, ...hornetSwarm, 
                ...jumpingSkunks, ...springingSnakes, ...purpleEchidnas,
                ...terribleYokai, ...ironBulls, ...cloudedNinja
                ]

const allTeams = [... tennisTeams, ... soccerTeams, ...sumoTeams]

/* LANDING PAGES */

app.get('/', (req, res)=> { // request and response arguements
    res.send('Welcome to sportsball league!!')
})

app.get('/tennis', (req, res)=> { // request and response arguements
    res.send(tennisTeams)
})

app.get('/soccer', (req, res)=> { // request and response arguements
    res.send(soccerTeams)
})

app.get('/sumo', (req, res)=> { // request and response arguements
    res.send(sumoTeams)
})

app.get('/all%20players', (req, res)=> { // request and response arguements
    res.send(allPlayers)
})


app.get('/all%20teams', (req, res)=> { // request and response arguements
    res.send(allTeams)
})


/* Tennis */

app.get('/tennis/Green%20badgers', (req, res)=> { // request and response arguements
    res.send(greenBadgers)
})

app.get('/tennis/Corn%20Shot%20Squad', (req, res)=> { // request and response arguements
    res.send(cornShotSquad)
})

app.get('/tennis/Hornet%20Swarm', (req, res)=> { // request and response arguements
    res.send(hornetSwarm)
})


/* Soccer */


app.get('/soccer/Jumping%20Skunks', (req, res)=> { // request and response arguements
    res.send(jumpingSkunks)
})
app.get('/soccer/Springing%20Snakes', (req, res)=> { // request and response arguements
    res.send(springingSnakes)
})
app.get('/soccer/Purple%20Echidnas', (req, res)=> { // request and response arguements
    res.send(purpleEchidnas)
})

/* Sumo */

app.get('/sumo/Terrible%20Yokai', (req, res)=> { // request and response arguements
    res.send(terribleYokai)
})
app.get('/sumo/Iron%20Bulls', (req, res)=> { // request and response arguements
    res.send(ironBulls)
})
app.get('/sumo/Clouded%20Ninja', (req, res)=> { // request and response arguements
    res.send(cloudedNinja)
})


app.get('/*', (req, res)=> {
    res.send({
       error: '404 team not found'
    })
})
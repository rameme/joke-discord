/*
    create global objects and tokens to connect to discord
*/
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;

/*
    start the joke bot 
*/
bot.on('start', ()=>{
    console.log('beep beep beep!');
})

/*
    read in local joke files and store jokes in an array 
*/
const fs = require('fs');
let mamaJokes = fs.readFileSync('yomama-jokes.txt').toString().split("\n");
let computerJokes = fs.readFileSync('computer-jokes.txt').toString().split("\n");
let insults = fs.readFileSync('insults.txt').toString().split("\n");

/*
    checks for joke commands, if found, tell a joke
*/
bot.on('message', msg=>{
    // send a yo mama joke 
    let joke;
    if(msg.content === "yo-mama"){
        joke = Math.floor(Math.random() * 1041);
        msg.reply(mamaJokes[joke]);
    }
    // send a computer joke
    else if(msg.content === "computer-joke"){
        joke = Math.floor(Math.random() * 170);
        msg.reply(computerJokes[joke]);
    } 
    // send a insult
    else if(msg.content === "insult"){
        joke = Math.floor(Math.random() * 351);
        msg.reply(insults[joke]);
    }
})

/*
    log in our bot
*/
bot.login(token);
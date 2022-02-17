import minimist from 'minimist'
import { flipACoin } from './modules/coin.mjs'
var argv = minimist(process.argv.slice(2))
var name = 'call'
const call = argv[name] || 1
if (call == 1) {
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
}
if (call == 'heads') {
    console.log(flipACoin(call))
}
if (call == 'tails') {
    console.log(flipACoin(call))
}
console.log("Usage: node guess-flip.js --call=[heads|tails]")

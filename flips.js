import minimist from 'minimist'
var argv = minimist(process.argv.slice(2))
//console.log(argv)
import {coinFlips, countFlips} from "./modules/coin.mjs"
var name = 'number'
const num = argv[name] || 1
let arr = coinFlips(num)
console.log(arr)
console.log(countFlips(arr))
const name = "hitesh"
const repoCount = 50

console.log(name + " " + repoCount + " Value");
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

console.log("****************op2*******")
const gameName = new String('Shivangi')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('g'))

const a = gameName.substring(0,4)
console.log(a)
//no neg value allowed for substring

const b= gameName.slice(-8,4)
console.log(b)

const x = "   shiv     "
console.log(x.trim())
console.log(x.trimStart())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

const poi = "xyz-ujki-dfgty"
console.log(poi.split('-'));


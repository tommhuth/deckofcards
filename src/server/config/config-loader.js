import nconf from "nconf"
import fs from "fs" 

const defaults = JSON.parse(fs.readFileSync(__dirname + "/default.json"))
 
nconf.argv().env().defaults(defaults)

export default nconf.get()
export const cleanConfig = {}

for (let key in nconf.get()) {
    if (defaults.hasOwnProperty(key) && key != "type" && nconf.get(key) != "literal") {
        cleanConfig[key] = nconf.get(key)
    }
}

import { start, stop } from "../src/server/server"

before(() => {
    return start()
})

after(() => {
    return stop()
})

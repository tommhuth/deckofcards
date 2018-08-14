import supertest from "supertest"
import { app } from "../../src/server/server"

suite("App route: /")

test("Should get start page", (done) => {
    supertest(app)
        .get("/")
        .expect("Content-Length", "272") 
        .expect(200)
        .end(done)
})

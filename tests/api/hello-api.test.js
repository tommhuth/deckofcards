import { expect } from "chai"
import supertest from "supertest"
import { app } from "../../src/server/server"

suite("API: /api/hello")

test("Should get hello message", (done) => {
    supertest(app)
        .get("/api/hello")
        .expect(200)
        .expect(res => {
            expect(res.body.message).to.equal("Hai")
        })
        .end(done)
})

import { expect, test } from "@oclif/test"

import cmd from "../src"

describe("hello world", () => {
    test.stdout()
    .do(() => cmd.run([]))
    .it("runs cmd", ctx => {
        expect(ctx.stdout).to.contain("hello")
    })

    test.stdout()
    .do(() => cmd.run(["-u"]))
    .it("runs uppercase cmd", ctx => {
        expect(ctx.stdout).to.contain("HELLO")
    })
})
import { Command, Flags } from "@oclif/core";

function getMessage(uppercase = false) {
    const msg = "hello world"
    if (uppercase) {
        return msg.toUpperCase()
    }
    return msg
} 

class MyCommand extends Command {
    static flags = {
        uppercase: Flags.boolean({char: "u", description: "Changes output to uppercase"})
    }

    static description = "Says hello world"

    async run(): Promise<void> {
        const { flags } = await this.parse(MyCommand)

        this.log(getMessage(flags.uppercase))
    }
}

export const getHelloMessage = (uppercase: boolean) => getMessage(uppercase)

export default MyCommand

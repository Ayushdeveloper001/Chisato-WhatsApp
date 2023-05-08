import { BaseCommand, Command, Message } from '../../Structures'

@Command('repo', {
    description: 'Repo of the bot',
    category: 'general',
    usage: 'repo',
    aliases: ['script'],
    exp: 25,
    cooldown: 5
})
export default class extends BaseCommand {
    public override execute = async ({ sender, reply }: Message): Promise<void> =>
        void (await reply(`Hello! this bot's script or repo is currently private. So, if you wanna ask anything about this bot then please contact wa.me/16468338933* ${sender.username}*`))
}

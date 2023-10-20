const {SlashCommand} = require('slash-create');

const zenisms = [
    "Slow is smooth, smooth is fast. -US Navy SEALs saying",
    "Play is the highest form of research. -Albert Einstein",
    "It's not what you look at that matters, it's what you see. -Henry David Thoreau",
    "You hit what you aim at and if you aim at nothing you will hit it every time. -Zig Ziglar",
    "Bad weather always looks worse through a window. -Tom Lehrer",
    "To breakthrough your performance, you've got to breakthrough your psychology. -Jensen Siaw"
]

module.exports = class ZenCommand extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: 'zen',
            description: 'Quotes from "The Zen of Disc Golf"',
            guildIDs: ['1123355082155622502']
        });
        this.filePath = __filename;
    }

    async run(ctx) {
        return `${zenisms[Math.random()]}`;
    }
};

import { Command } from 'commander'
import { century } from './utils/commands.js'
const program = new Command()

program
    .name('century-calculator')
    .description('CLI tool to calculate a century based on a date')
    .version('0.0.1')

program.command('cent')
    .description('Calculate the century based on the input year')
    .argument('<year>', 'Year to calculate the century')
    .action((year: string) => {
        century(Number(year))
    })

program.parse()
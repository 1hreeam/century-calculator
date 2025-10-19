import { Command } from 'commander'
import { calculate } from './calculator.js'

const program = new Command()

program
    .name('century-calculator')
    .description('CLI tool to calculate a century based on a date')
    .version('0.0.1')

program.command('calc')
    .description('Calculate the century based on the input year')
    .argument('<year>', 'Year to calculate the century')
    .action((year: string) => {
        const century = calculate(Number(year))
        console.log(century);
    })

program.parse()
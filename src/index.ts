import { Command } from 'commander'
import { century, printall, year } from './utils/commands.js'
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

program.command('printall')
    .description('Return all the centuries (staring from 1 AD)')
    .argument('<step>', 'Step in between the years')
    .argument('<n>', "The furthest year to calculate")
    .action((step: string, n:string) => {
        printall(Number(step), Number(n))
    })

program.command('year')
    .description('Calculate the years based on the input century')
    .argument('<century>', 'Input century')
    .action((century: string) => {
        year(Number(century))
    })

program.parse()
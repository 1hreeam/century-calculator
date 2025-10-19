import { Command } from 'commander'
import { calculate } from './calculator.js'
import ora, { spinners } from 'ora'

const program = new Command()

const spinnerConfig = {
    text: 'Loading',
    color: 'white',
}

program
    .name('century-calculator')
    .description('CLI tool to calculate a century based on a date')
    .version('0.0.1')

program.command('calc')
    .description('Calculate the century based on the input year')
    .argument('<year>', 'Year to calculate the century')
    .action((year: string) => {
        const spinner = ora('Calculating').start()

        setTimeout(() => {
            const century = calculate(Number(year))
            spinner.succeed('Calculation done')
            console.log(century);
        }, 1000)
    })

program.parse()
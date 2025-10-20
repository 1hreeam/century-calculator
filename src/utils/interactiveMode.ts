import { calculateCentury, calculateYear } from "./calculator.js";
import type { PrintAllResult } from "./types.js";
import ora from "ora";
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";

const actionsOptions: string[] = [
    "Calculate century from year",
    "Calculate year range from century",
    "Print a century-year table",
    "Exit"
]

const delay = 800

export async function interactiveMode() {

    console.log(
        await figlet.text('century-calc', {
            font: 'ANSI Shadow',
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 150,
            whitespaceBreak: true,
        })
    );

    promptOptions()

}

async function promptOptions() {
    const promptGetAction = await inquirer.prompt([
        {
            type: 'list', 
            name: 'action', 
            message: 'What do you want to do?', 
            choices: [...actionsOptions]
        }
    ])

    switch (promptGetAction.action) {
        case actionsOptions[0]:
            centuryFunc()
            break
        case actionsOptions[1]:
            yearFunc()
            break
        case actionsOptions[2]:
            printallFunc()
            break
        case actionsOptions[3]:
            exitFunc()
            break
    }
}

async function centuryFunc() {

    const answer = await inquirer.prompt([
        { type: 'input', name: 'year', "message": 'Year:' }
    ])

    const century = calculateCentury(Number(answer.year))
    const spinner = ora('Calculating...').start()

    await new Promise(r => setTimeout(r, delay))
    spinner.succeed('Calculations done')
    spinner.start('Preparing the data...')

    await new Promise(r => setTimeout(r, delay))
    spinner.succeed('Data is ready')
    console.log('\n');

    console.log(
        chalk.yellow(century)
    )
    console.log('\n');

    await new Promise(r => setTimeout(r, delay))
    promptOptions()
}

async function yearFunc() {

    const answer = await inquirer.prompt([
        { type: 'input', name: 'century', "message": 'Century:' }
    ])

    const years = calculateYear(Number(answer.century))
    const spinner = ora('Calculating...').start()

    await new Promise(r => setTimeout(r, delay))
    spinner.succeed('Calculations done')
    spinner.start('Preparing the data...')

    await new Promise(r => setTimeout(r, delay))
    spinner.succeed('Data is ready')
    console.log('\n');

    console.log(
        chalk.yellow(years)
    )
    console.log('\n');
    
    await new Promise(r => setTimeout(r, delay))
    promptOptions()   
}

async function printallFunc() {

    const answer = await inquirer.prompt([
        { type: 'input', name: 'n', "message": 'Furthest year:' },
        { type: 'input', name: 'step', "message": 'Step:' },
    ])

    const spinner = ora('Calculating...').start()

    const results: PrintAllResult[] = []
    for (let i = 1; i <= Number(answer.n); i += Number(answer.step)) {
        results.push({
            year: i,
            century: calculateCentury(i)
        })
    }

    await new Promise(r => setTimeout(r, delay))
    spinner.succeed('Calculations done')
    spinner.start('Preparing the data...')

    await new Promise(r => setTimeout(r, delay))
    spinner.succeed('Data is ready')
    console.log('\n');

    console.table(results)
    console.log('\n');
    
    await new Promise(r => setTimeout(r, delay))
    promptOptions()
}

async function exitFunc() {
    const spinner = ora('Exiting...').start()

    await new Promise(r => setTimeout(r, delay + 500)) // adding 500 just for fun
    spinner.succeed('Done')
}

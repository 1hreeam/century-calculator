import ora from "ora";
import chalk from "chalk";

import { calculateCentury, calculateYear } from "../utils/calculator.js";
import type { PrintAllResult } from "./types.js";

// Functions
export async function century(year: number) {
    const spinner = ora('Calculating...').start()

    await new Promise(r => setTimeout(r, 1000))
    const century = calculateCentury(Number(year))
    spinner.succeed('Calculation done')
    console.log(chalk.yellow(century));
}

export async function printall(step: number, n: number) {
    const spinner = ora('Calculating...').start()

    const results: PrintAllResult[] = []
    for (let i = 1; i <= n; i += step) {
        results.push({
            year: i,
            century: calculateCentury(i)
        })
    }

    await new Promise(r => setTimeout(r, 1000))
    spinner.succeed('Calculation done')
    spinner.start('Getting data...')

    await new Promise(r => setTimeout(r, 1000))
    spinner.succeed('Data is ready')
    console.table(results)
}

export async function year(century: number) {
    const spinner = ora('Calculating...').start()

    await new Promise(r => setTimeout(r, 1000))
    const years = calculateYear(century)
    spinner.succeed('Calculations complete')
    console.log(years);
}
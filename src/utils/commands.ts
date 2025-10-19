import ora from "ora";
import chalk from "chalk";

import { calculate } from "../utils/calculator.js";
import type { PrintAllResult } from "./types.js";

// Functions
export function century(year: number) {
    const spinner = ora('Calculating...').start()

    setTimeout(() => {
        const century = calculate(Number(year))
        spinner.succeed('Calculation done')
        console.log(chalk.yellow(century));
    }, 1000)
}

export async function printall(step: number, n: number) {
    const spinner = ora('Calculating...').start()

    const results: PrintAllResult[] = []
    for (let i = 1; i <= n; i += step) {
        results.push({
            year: i,
            century: calculate(i)
        })
    }

    await new Promise(resolve => setTimeout(resolve, 1000))
    spinner.succeed('Calculation done')
    spinner.start('Getting data...')

    await new Promise(resolve => setTimeout(resolve, 1000))
    spinner.succeed('Data is ready')
    console.table(results)
}
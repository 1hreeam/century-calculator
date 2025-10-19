import ora from "ora";
import { calculate } from "../utils/calculator.js";

export function century(year: number) {
    const spinner = ora('Calculating').start()

    setTimeout(() => {
        const century = calculate(Number(year))
        spinner.succeed('Calculation done')
        console.log(century);
    }, 1000)
}
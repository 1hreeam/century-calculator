export function calculate(num: number): string {
    if (num === 0) {
        return `1${getLastDigitSuffix(1)} century`
    }

    const century = Math.ceil(num / 100)
    const suffix = getLastDigitSuffix(century)

    return `${century}${suffix} century`
}

function getLastDigitSuffix(num: number): string {
    const lastDigit = num % 10
    const lastTwoDigits = num % 100

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return 'th'
    }

    switch (lastDigit) {
        case 1: return 'st'
        case 2: return 'nd'
        case 3: return 'rd'
        default: return 'th'
    }
}
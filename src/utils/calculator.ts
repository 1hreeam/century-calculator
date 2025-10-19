export function calculateCentury(num: number): string {
    if (num === 0) {
        return `1${getLastDigitSuffix(1)} century`
    }

    const century = Math.ceil(num / 100)
    const suffix = getLastDigitSuffix(century)

    return `${century}${suffix} century`
}

export function calculateYear(num: number): string {
    const endYear = num * 100
    const startYear = endYear - 99

    return `${startYear}-${endYear}`
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

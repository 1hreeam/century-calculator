const foo = (num) => {
    if (num === 0) {
        return `1${getLastDigSuffix(1)} century`
    }

    const century = Math.ceil(num / 100)
    const suffix = getLastDigSuffix(century)

    return `${century}${suffix} century`
}

const getLastDigSuffix = (num) => {

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

const main = (step, n) => {
    const results = []
    for (let i = 0; i < n; i += step) {
        results.push({
            year: i,
            century: foo(i)
        })
    }
    
    console.table(results)
}

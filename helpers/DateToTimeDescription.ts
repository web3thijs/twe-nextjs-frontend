const dateToTimeDescription = (date: string): string => {
    const now: number = Date.now();
    const inputDate: Date = new Date(date);
    const inputTime: number = inputDate.getTime();
    const diff: number = now - inputTime;

    // calculate the number of seconds, minutes, hours, days, months, and years in the difference
    const seconds: number = Math.floor(diff / 1000);
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const days: number = Math.floor(hours / 24);
    const months: number = Math.floor(days / 30);
    const years: number = Math.floor(months / 12);


    // return a relative time string based on the difference
    switch (true) {
        case years > 1:
            return `${years} jaar geleden`;
        case years === 1:
            return `een jaar geleden`;
        case months > 1:
            return `${months} maanden geleden`;
        case months === 1:
            return `een maand geleden`;
        case days > 1:
            return `${days} dagen geleden`;
        case days === 1:
            return `een dag geleden`;
        case hours > 1:
            return `${hours} uur geleden`;
        case hours === 1:
            return `een uur geleden`;
        case minutes > 1:
            return `${minutes} minuten geleden`;
        case minutes === 1:
            return `een minuut geleden`;
        default:
            return `${seconds} seconden geleden`;
    }
}

export default dateToTimeDescription
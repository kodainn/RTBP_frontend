

export const isRequired = (value: string): boolean => {
    if(value.length === 0) {
        return false;
    }

    return true;
}


export const isWithinInputRange = (value: string, maxLength: number): boolean => {
    if(value.length > maxLength) {
        return false;
    }

    return true;
}


export const isDate = (value: string): boolean => {
    const dateValue = new Date(value);

    return !isNaN(dateValue.getTime());
}


export const isTimeFormat = (value: string): boolean => {
    const timeRegex = /^\d{2}:\d{2}$/;
    return timeRegex.test(value);
}
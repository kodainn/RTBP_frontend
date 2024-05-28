

export const isRequired = (value: string): boolean => {
    if(value.length === 0) {
        return false;
    }

    return true;
}


export const isWithinInputRange = (value: string, maxLength: number): boolean => {
    if(value.length === 0) return true;
    if(value.length > maxLength) {
        return false;
    }

    return true;
}


export const isDate = (value: string): boolean => {
    if(value.length === 0) return true;
    const dateValue = new Date(value);

    return !isNaN(dateValue.getTime());
}


export const isTimeFormat = (value: string): boolean => {
    if(value.length === 0) return true;

    const timeRegex = /^\d{2}:\d{2}$/;
    return timeRegex.test(value);
}


export const isEmail = (value: string): boolean => {
    if(value.length === 0) return true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
}


export const isPassword = (value: string): boolean => {
    if(value.length === 0) return true;
    const passwordRegex = /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/;
    return passwordRegex.test(value);
}
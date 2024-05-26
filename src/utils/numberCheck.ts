export const isNumber = (number :any): boolean => {
    if(!(typeof number === "string" || typeof number === "number")) {
        console.log(1);
        return false;
    }

    if(typeof number === "number") {
        console.log(2);
        return true;
    }
    if(number[0] === "0") {
        console.log(3);
        return false;
    }

    return !isNaN(Number(number));
}

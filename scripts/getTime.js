export function getTime() {
    let date = new Date;
    let time = date.toLocaleTimeString("en-au").split("").slice(0, 4).join("");
    let twelveHour = date.toLocaleTimeString("en-au").split("").slice(8).join("").toUpperCase();
    return `${time} ${twelveHour}`;
}

export function getDate() {
    let date = new Date;
    return date.toLocaleDateString();
}
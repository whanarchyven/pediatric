export default function compareDates(d1: {
    date: string,
    online: number,
    offline: number,
}[]) {
    for (let i = 0; i < d1.length - 1; i++) {
        let temp = d1[i].date.split('.')
        let temp1 = temp[1] + '/' + temp[0] + '/' + temp[2]

        let date1 = new Date(temp1).getTime();
        let date2 = new Date().getTime();
        if (date1 <= date2) {
            return d1[i];
        }
    }
}
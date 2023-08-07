export default function concatStr(str:string,splitter:number){
    return str.split(' ').slice(0,splitter).join(' ')+' ...'
}
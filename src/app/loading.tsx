export default function Loading() {
    return <div className={'h-screen w-screen flex items-center justify-center green-gradient'}>
        <img className={'w-20 aspect-square animate-spin'} src={'/loading.svg'}/>
    </div>
}
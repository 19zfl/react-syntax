export default function TodoList() {
    const name = "Zeng"
    const now = new Date()
    function dateFormate(time) {
        return "现在时间是：" + time
    }
    return (
        <>
            <h1>{name}’s TodoList</h1>
            <h1>{dateFormate(now)}</h1>
        </>
    )
}
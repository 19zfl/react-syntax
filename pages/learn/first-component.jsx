export default function FirstComponent() {
    return (
        <div>
            <img
                src="/assets/react-icon.png"
                alt="React"
                title="React"
            />
            <FirstTemplate />
            <FirstTemplate />
            <FirstTemplate />
        </div>
    )
}

function FirstTemplate() {
    return (
        <span>React18</span>
    )
}
import Profile, {Gallery} from "./Profile";

export default function ImportAndExport() {
    return (
        <div>
            <div>
                <h2>间接调用</h2>
                <Profile />
            </div>
            <div>
                <h2>直接调用</h2>
                <Gallery />
            </div>
        </div>
    )
}
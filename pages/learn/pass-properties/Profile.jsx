import Avatar from "./Avatar";

function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default function Profile() {
    return (
        <Card>
            <Avatar
                person={{name: 'Lin Lanying', imageId: '1bX5QH61'}}
                size={100}
            />
            <Avatar
                person={{name: 'Uzimaki Boruto', imageId: '1bX5QH62'}}
                size={100}
            />
            <Avatar
                person={{name: 'Pain', imageId: '1bX5QH63'}}
                size={100}
            />
        </Card>
    )
}
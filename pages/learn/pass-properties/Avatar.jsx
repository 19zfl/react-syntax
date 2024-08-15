import {getImageInfo} from "./util";

export default function Avatar({person, size}) {
    return (
        <>
            <img
                className="avatar"
                src={getImageInfo(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        </>
    )
}
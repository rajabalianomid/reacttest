import { IDuck } from "./Demo";

interface Props {
    duck: IDuck;
}
function dockItem(props: Props) {
    return (
        <div>
            <span>{props.duck.name}</span>
            <button onClick={() => props.duck.makeSound(props.duck.name + " : new sound")}>Voice</button>
        </div>
    );
}

export default dockItem


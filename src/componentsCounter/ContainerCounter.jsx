import ViewCounter from "./ViewCounter/ViewCounter";
import ButtonCounter from "./ButtonCounter/ButtonCounter";

const ContainerCounter = () => {
    return (
        <div className="container-counter">
            <ViewCounter />
            <ButtonCounter />
        </div>
    );
};

export default ContainerCounter;

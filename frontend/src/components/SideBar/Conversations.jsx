import SingleChat from "./SingleChat";

const Conversations = () => {
    return (
        <div className="py-2 flex flex-col overflow-auto ">
            <SingleChat />
            <SingleChat />
            <SingleChat />
        </div>
    );
}

export default Conversations;
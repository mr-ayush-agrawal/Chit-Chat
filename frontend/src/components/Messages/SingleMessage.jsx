const SingleMessage = () => {
    return <>
        <div className="chat chat-end ">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        src="https://avatar.iran.liara.run/public/boy?username=Ayush"
                        alt="User DP Avatar"
                    />
                </div>
            </div>
            <div className="chat-bubble text-white bg-blue-500">
                Hii! What's Up? This Is Ayush
            </div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                19:42
            </div>
            
        </div>
    </>;
}

export default SingleMessage
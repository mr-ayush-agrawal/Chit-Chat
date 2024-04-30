import SearchInp from "./Search_Inputs";
import Conversations from "./Conversations"
import LogoutButton from "./Logout_button";

const Sidebar = () => {
    return (
        <div className="border-r border-slate-500 p-4 flex flex-col">
            <SearchInp />
            <div className="divider px-3"></div>
            <Conversations />
            <LogoutButton />
        </div>
    );
}

export default Sidebar
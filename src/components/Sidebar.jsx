import ChevronLeftIcon from "../assets/icons/chevron-left.svg?react";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../util/sidebar";

function Sidebar({ open, toggleSidebar }) {
  return (
    <>
      {open ? (
        <div className="h-screen w-60 sticky top-0 overflow-y-hidden flex flex-col pb-4 border-r border-r-gray">
          <div className="h-16 w-ful"></div>
          <ul className={"mt-2 sidebar-nav"}>
            {sidebarLinks.map((link, index) => {
              return (
                <li key={link.id}>
                  <div className={index == sidebarLinks.length - 1 ? "h-px w-full bg-slate-200" : "hidden"}></div>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? "active text-indigo bg-light-indigo" : "") + " py-3 px-4"}>
                    <div className="flex items-center gap-2 font-semibold text-sm">
                      <link.icon />
                      <span className={"duration-300 transition-all"}>{link.title}</span>
                    </div>
                  </NavLink>
                  {link?.children.length > 0 ? (
                    link.children.map(item => {
                      return (
                        <NavLink
                          to={item.path}
                          key={item.id}
                          className={({ isActive }) => (isActive ? "active text-indigo bg-light-indigo" : "") + " py-2 px-4"}>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-5 h-5"></div>
                            {item.title}
                          </div>
                        </NavLink>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </li>
              );
            })}
          </ul>
          <div onClick={toggleSidebar} className="mt-auto py-2 px-4 font-semibold flex gap-2 items-center cursor-pointer">
            <ChevronLeftIcon />
            Collapse
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Sidebar;

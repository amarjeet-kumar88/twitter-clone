import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { BiSolidHomeCircle } from "react-icons/bi";
import { title } from "process";
import { IoSearch } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { AiOutlineMinusSquare } from "react-icons/ai";
import FeedCard from "@/components/FeedCard"


interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[]= [
  {
    title: "Home",
    icon: <BiSolidHomeCircle />
  },
  {
    title: "Explore",
    icon: <IoSearch />
  },
  {
    title: "Notifications",
    icon: <BsBell />
  },
  {
    title: "Messages",
    icon: <BsEnvelope />
  },
  {
    title: "Grok",
    icon: <AiOutlineMinusSquare />
  },
  {
    title: "Lists",
    icon: <LiaClipboardListSolid />
  },
  {
    title: "Profile",
    icon: <FaRegUser />
  },
  {
    title: "More",
    icon: <CiCircleMore />
  }
]

export default function Home() {
  return (
    <div>
    <div className="grid grid-cols-12 h-screen w-screen px-24">
      <div className="col-span-3 pt-1 px-4">
        <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-3 cursor-pointer transition-all">
          <RiTwitterXLine />
        </div>
        <div className="mt-1 text-xl pr-4">
          <ul>
            {sidebarMenuItems.map((item) => (
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer" key={item.title}>
                <span className="text-3xl">{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 pr-3">
          <button className="bg-[#1D9BF0] text-lg font-semibold rounded-full w-full py-3 px-2">Post</button>
          </div>
        </div>
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-600 h-screen overflow-scroll">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-3"></div>
    </div>
   </div>
  );
}

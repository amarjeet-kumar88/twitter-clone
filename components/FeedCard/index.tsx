import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { GoUpload } from "react-icons/go";

const FeedCard: React.FC = () => {
    return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-1">
                <Image src="https://avatars.githubusercontent.com/u/96529212?v=4" alt="user-image" height={50} width={50}/>
            </div>
            <div className="col-span-11">
                <h5>Amarjeet Chauhan</h5>
                <p>
                    The Ministry of Home Affairs (MHA) has decided that the Free Movement Regime (FMR) between India and Myanmar be scrapped to ensure the internal security of the country and to maintain       
                </p>
            <div className="flex justify-between text-xl mt-5 items-center p-2 w-[90%]">
                <div>
                <BiMessageRounded />
                </div>
                <div>
                    <BiRepost />
                </div>
                <div>
                    <CiHeart/>
                </div>
                <div>
                    <GoUpload/>
                </div>
            </div>
            </div>
            
        </div>
    </div>
)}

export default FeedCard
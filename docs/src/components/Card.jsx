import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import {motion} from 'framer-motion'

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={.1} dragTransition={{bounceStiffness: 300, bounceDamping: 30}} className="relative flex-shrink-0 w-55 h-70 rounded-[45px] bg-zinc-900/90 text-white p-5 overflow-hidden">
      <LuFileSpreadsheet />
      <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoCloseSharp />
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor ==="blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;

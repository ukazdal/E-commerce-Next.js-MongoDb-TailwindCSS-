"use client";
import { useState } from "react";

interface Tab {
  title: string;
  content: React.ReactNode;
  link: string;
}

interface TabsProps {
  data: Tab[];
  isVertical?: boolean;
  titleWidth?: string;
  contentWidth?: string;
  className?: string;
  sticky?: boolean;
}

const Tabs: React.FC<TabsProps> = ({
  data,
  isVertical = true,
  titleWidth = "20%",
  contentWidth = "80%",
  className,
  sticky = false, // Default  false
}) => {
  const [activeTab, setActiveTab] = useState<string>(data[0]?.link);

  return (
    <div className={`w-full ${isVertical ? "flex-col" : "flex "}`}>
      {/* Tab Title */}
      <div
        className={`${
          isVertical
            ? "flex flex-row overflow-x-auto scrollBar whitespace-nowrap"
            : "flex flex-col items-start pr-2" // isVertical=false gönderirsek başlıklar alt alta sıralanır
        } ${isVertical ? "" : "border-b border-gray-300 "} ${
          sticky ? "sticky top-20 bg-white z-30" : ""
        }`} // Sticky
        style={isVertical ? {} : { width: titleWidth }} // isVertical=true olduğunda titleWidth geçersiz
      >
        {data.map((tab) => (
          <button
            key={tab.link}
            className={`px-2 py-2 text-sm font-medium rounded ${
              activeTab === tab.link
                ? "border border-blue-500 text-blue-500 w-full" // Aktif sekme
                : "text-gray-500 border border-gray-200 w-full md:hover:border-blue-500 md:hover:text-blue-500 duration-300"
            } ${
              isVertical
                ? "text-center mx-2" // Başlık üstte ise class alanı
                : "text-start last:border-b-0" // Başlık solda ise class alanı
            }`}
            onClick={() => setActiveTab(tab.link)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab İçerikleri */}
      <div
        className={`mt-4 ${isVertical ? "" : "ml-4"} ${className}`}
        style={isVertical ? {} : { width: contentWidth }} // isVertical olduğunda contentWidth geçersiz
      >
        {data.map((tab) => (
          <div
            key={tab.link}
            className={`${activeTab === tab.link ? "block" : "hidden"} px-2`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

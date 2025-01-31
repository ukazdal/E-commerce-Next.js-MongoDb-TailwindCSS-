"use client";
import React from "react";

const Category = () => {
  const categoryList = [
    { id: 1, name: "Category 1", link: "/" },
    { id: 2, name: "Category 2", link: "/" },
    { id: 3, name: "Category 3", link: "/" },
    { id: 4, name: "Category 4", link: "/" },
    { id: 5, name: "Category 5", link: "/" },
    { id: 6, name: "Category 6", link: "/" },
    { id: 7, name: "Category 7", link: "/" },
    { id: 8, name: "Category 8", link: "/" },
    { id: 9, name: "Category 9", link: "/" },
  ];
  return (
    <div className="bg-gray-200 p-4">
      <ul className="flex items-center justify-center gap-2 lg:gap-10 overflow-x-auto">
        {categoryList.map((category, index) => (
          <li key={index}>
            <a
              className="flex whitespace-nowrap border border-transparet p-2 lg:hover:border-gray-400 lg:hover:bg-gray-300 rounded-md text-gray-700 duration-300 min-x-[100px] text-center"
              href={category.link}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

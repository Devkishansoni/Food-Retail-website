import React, { useState } from "react";

export default function Grocery() {
  const data = [
    {
      id: 1,
      name: "Sugar",
      img: "https://pngimg.com/d/sugar_PNG32.png",
      price: 40,
      Qun: 1,
    },
    {
      id: 2,
      name: "Jaggery",
      img: "https://www.shutterstock.com/image-photo/block-indian-jiggery-isolated-on-260nw-443048431.jpg",
      price: 62,
      Qun: 1,
    },
    {
      id: 3,
      name: "Olive-oil",
      img: "https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg",
      price: 110,
      Qun: 1,
    },
    {
      id: 4,
      name: "Cumin Seed",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDqUaRD6uf4rv6-kNcYOuZX-OBd5-QOY9T0JytexS5RX6DDTQOlPQSI4wtqOm05rfE2c&usqp=CAU",
      price: 350,
      Qun: 1,
    },
    {
      id: 5,
      name: "Pink Salt",
      img: "https://img.freepik.com/premium-photo/himalayan-pink-salt-wooden-scoop-isolated-white-background-himalayan-pink-salt-crystals_157837-2189.jpg",
      price: 180,
      Qun: 1,
    },
    {
      id: 6,
      name: "Turmeric",
      img: "https://www.forestessentialsindia.com/blog/wp-content/uploads/2020/02/Turmeric.png",
      price: 340,
      Qun: 1,
    },
    {
      id: 7,
      name: "Desi Ghee",
      img: "https://5.imimg.com/data5/SELLER/Default/2024/1/380229235/UO/PE/BI/44397253/ghee-jpg-500x500.jpg",
      price: 580,
      Qun: 1,
    },
    {
      id: 8,
      name: "Tide",
      img: "https://ik.imagekit.io/wlfr/wellness/images/products/281673-1.jpg/tr:w-3840,dpr-1,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-webp,q-80,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end",
      price: 85,
      Qun: 1,
    },
    {
      id: 9,
      name: "Almonds",
      img: "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/whole-almond-coorg-almond-buy-online.20220910001647.webp",
      price: 1300,
      Qun: 1,
    },

    {
      id: 10,
      name: "Cashew",
      img: "https://www.pepperhub.in/wp-content/uploads/2021/03/Cashew-Nut-500g-pack-Pepperhub.webp",
      price: 1100,
      Qun: 1,
    },
  ];

  return (
    <>
      <div className="w-full h-fit bg-white border border-3 border-zinc-600 px-4 py-4">
        <h1 className="text-5xl font-serif pt-11 text-center text-blue-600 font-bold">
         Our Grocery Product Details.
        </h1>
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          {/* Product Details */}
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[210px] h-[250px] mb-3 py-2 text-center p-4 border border-3 border-[black] rounded-md shadow-2xl mt-3"
            >
              <img src={item.img} className="w-[140px]" alt={item.name} />
              <h1 className="text-black text-xl font-semibold pt-2">
                {item.name}
              </h1>
              <div className="text-center">
                <div>
                  <h1 className="fa-solid fa-rupee-sign text-black text-start font-bold text-xl">
                    .:-
                    <span className="text-blue-600 pl-1 text-[12px]">
                      {item.price}
                      <span className="text-red-700 pl-1 font-bold text-[8px]">
                        per Kg.
                      </span>
                    </span>
                  </h1>
                  <div className="flex flex-row">
                    <h1 className="text-black pl-5 text-start font-semibold">
                      Qun.:-
                      <span className="text-blue-600">
                        {item.Qun}
                        <span className="text-purple-950 pl-1 font-bold text-[10px]">
                          Kg.
                        </span>
                      </span>
                    </h1>
                    <div className="bg-gray-200 text-center w-[25px] h-[25px] ml-2 border border-1 border-[#403535] rounded-sm shadow-2xl">
                      <i className="fa-solid fa-plus text-black text-xs font-bold"></i>
                    </div>
                    <div className="bg-gray-200 text-center w-[25px] h-[25px] ml-2 border border-1 border-[#403535] rounded-sm shadow-2xl">
                      <i className="fa-solid fa-minus text-black text-xs font-bold"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import React from 'react'

export default function Cloth() {
    const data = [
        {
          id: 1,
          name: "T-Shirt",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6CpNu6IVeynQ-mtDoFUJcbtXhuivqaT3Mg&usqp=CAU",
          price: 899,
          Qun: 3,
        },
        {
          id: 2,
          name: "Shirt",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQn7OjU5_UfBnmDhJ4kczFN549hfSKy1kKOhu6dkyaTjxvioSPyCnDgOK15v4wNH4DBA&usqp=CAU",
          price: 1399,
          Qun: 3,
        },
        {
          id: 3,
          name: "Jeans Pant",
          img: "https://assets-global.website-files.com/64f4928a87a8d9a39966a5c3/6515b83d0b64630356bd4e33_denim.png",
          price: 1699,
          Qun: 4,
        },
        {
          id: 4,
          name: "Formal Pant",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3jDf_52mBRQdjwrhTVmCFYYllxJfEw3Nrg&usqp=CAU",
          price: 2699,
          Qun: 6,
        },
        {
          id: 5,
          name: "Belt",
          img: "https://5.imimg.com/data5/KT/NW/MY-17707488/peter-england-navy-belt-500x500.png",
          price: 798,
          Qun: 1,
        },
        {
          id: 6,
          name: "Nike Shoes",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfBWjrV6wHNiIzcactqSrP5DnCQBG9jH6gw&usqp=CAU",
          price: 2999,
          Qun: 1,
        },
        {
          id: 7,
          name: "Coat Pant",
          img: "https://5.imimg.com/data5/IOS/Default/2022/2/IJ/DG/TC/145964990/product-jpeg-1000x1000.png",
          price: 5999,
          Qun: 1,
        },
        {
          id: 8,
          name: "Wallet",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzrHOTfZlDYLg43th4NIfMGNGqkkweUz0cQ&usqp=CAU",
          price: 599,
          Qun: 1,
        },
        {
          id: 9,
          name: "Sun-glass",
          img: "https://www.mittaloptics.com/wp-content/uploads/2023/12/2-25-2.png",
          price: 697,
          Qun: 1,
        },
    
        {
          id: 10,
          name: "Blanket",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSazTwI5WDyKgmoVdF10suv0ATuddd_gXbnYA&usqp=CAU",
          price: 1999,
          Qun: 1,
        }
      ];
  return (
      <>
          <div className="w-full h-fit px-4 py-4 bg-white border border-3 border-zinc-600">
        <h1 className="text-5xl font-serif pt-11 text-center text-purple-800 font-bold">
         Our Clothes Product Details.
        </h1>
        <div className="flex flex-wrap gap-3 justify-center mt-8 px-3 py-3">
          {/* Product Details */}
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[210px] h-[280px] mb-3 py-2 text-center p-4 border border-3 border-[black] rounded-md shadow-2xl mt-3"
            >
              <img src={item.img} className="w-[115px]" alt={item.name} />
              <h1 className="text-black text-xl font-semibold pt-2">
                {item.name}
              </h1>
              <div className="text-center">
                <div>
                  <h1 className="fa-solid fa-rupee-sign text-black text-start font-bold text-xl">
                    .:-
                    <span className="text-blue-600 pl-1 text-[12px]">
                      {item.price}
                    </span>
                  </h1>
                  <div className="flex flex-row">
                    <h1 className="text-black pl-5 text-start font-semibold">
                      Qun.:-
                      <span className="text-blue-600">
                        {item.Qun}
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
  )
}

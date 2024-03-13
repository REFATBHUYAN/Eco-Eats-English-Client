import React from "react";

const reasons1 = [
  "The trunk of the Chuijhal tree is called the tree Chuijhal. In the local language it is called Khari Chui.",
  "Ghach Chuijhal usually does not melt during cooking, so remains whole.",
  "For its nutty flavor and staying whole while cooking without melting, tree chew tops the list of favorites for those who enjoy chewy flavor.",
  "Gach Chui Jhal is commonly used for cooking large quantities of meat together, khichuri, chatpati, halim, chickpea roast and delicious pickles.",
  "Plants are moderately to strongly salty depending on the type of mother plant.",
];

const reasons2 = [
  "The root of the plant and the thick or moderately thick part adjacent to the root is called the root.",
  "Due to the low fiber content of this chuizhal, it melts in cooking and brings out the gravy flavor.",
  "Comparatively low-salt and melt-in-the-cook, this chewy jhal is also quite tasty and tops everyone's list of favourites.",
  "Etto Chuijhal is used in any kind of roast curry including meat, broth curry, fish broth, fish roast.",
  "Medium-sized Eto Chuizha generally have high weld intensity.",
];

const Difference = () => {
  return (
    <div id="difference" className="my-28 w-full">
      <h1 className="text-3xl font-bold text-center text-green-500 mb-12">
      Differences in ChuiJhal
      </h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="mb-4 lg:mb-0">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <img
              className="lg:w-72 md:hidden block w-full rounded-lg aspect-auto"
              src="/media/product/product-gach-chui.jpg"
              alt=""
            />
            <img
              className="md:w-72 md:h-72 lg:h-full hidden md:block w-full rounded-lg aspect-auto mt-4"
              src="/media/diff/diff-gach-chui.jpg"
              alt=""
            />
            <h1 className="font-semibold md:hidden block text-slate-600 text-xl text-center lg:text-right">
            The tree ChuiJhal
            </h1>
            <div className="lg:w-80 w-full">
              <h1 className="font-semibold hidden md:block text-slate-600 text-xl text-left md:text-right mb-4">The tree ChuiJhal</h1>
              {reasons1.map((reason) => (
                <div className="text-left md:text-right py-2 border-t text-slate-400 border-slate-200">
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <img
              className="lg:w-72 md:hidden block w-full rounded-lg aspect-auto "
              src="/media/product/product-eto-chui.jpg"
              alt=""
            />
            <h1 className="font-semibold md:hidden block text-slate-600 text-xl text-center">Atu ChuiJhal</h1>
            <div className="lg:w-80 w-full">
              <h1 className="font-semibold hidden md:block text-slate-600 text-xl text-left mb-4">Atu ChuiJhal</h1>
              {reasons2.map((reason) => (
                <div className="text-left py-2 border-t text-slate-400 border-slate-200">
                  {reason}

                </div>
              ))}
            </div>
            <img
              className="md:w-72 md:h-72 lg:h-full hidden md:block w-full rounded-lg aspect-auto mt-4"
              src="/media/diff/diff-eto-chui.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;

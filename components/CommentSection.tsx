import React from "react";

function CommentSection() {
  return (
    <div className=" shadow-lg rounded-2xl ">
      <div className="flex mx-auto items-center justify-center mt-20">
        <form
          className="w-full bg-slate-50"
          action="https://formspree.io/f/xleyobpp"
          method="POST"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-2xl mt-0 mb-2 text-gray-800/70">
              Enjoyed reading this? Share your views with me :)
            </h2>
            <div className="w-full md:w-full px-4 pt-3 pb-2 mb-2 mt-2 ml-2 mr-2">
              <textarea
                className="bg-white hover:bg-slate-50 rounded-lg border border-cyan-600/40 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700/40 focus:outline-none focus:bg-white text-gray-700/60"
                name="body"
                placeholder="Type Your Comment"
                required
                defaultValue={""}
              />
              <input
                type="email"
                name="email_address"
                placeholder="Email address"
                required
                className="bg-white text-gray-700/60 font-medium py-2 px-4 border border-cyan-600/40 rounded-lg tracking-wide hover:bg-slate-50 mt-3 placeholder-gray-700/40 focus:outline-none focus:bg-white w-[25vw]"
              ></input>
            </div>
            <div className="w-full md:w-full flex items-start px-3">
              <div className="flex items-start w-1/2 text-white px-2 mr-auto"></div>
              <div className="-mr-1">
                <button
                  type="submit"
                  className="px-5 py-3 text-base cursor-pointer font-semibold text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br flex items-center rounded-2xl m-2 mr-4
                  text-center"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentSection;

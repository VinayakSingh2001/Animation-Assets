import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-black px-40 py-40">

        {/* First DIVE */}
        <div className="flex items-center justify-center gap-5 py-5">
          <div
            className="relative overflow-hidden bg-black h-[300px] border border-neutral-800 w-[500px] flex flex-col rounded-xl"
            style={{ perspective: "1000px" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="p-5">
              <h1 className="text-xl text-white font-bold">Breakpoints</h1>
              <p className="text-sm text-neutral-400">
                Visually design layouts that adapt to any size.
              </p>
              <p className="text-yellow-500 py-5">
                Learn more{" "}
                <span>
                  <ArrowRight size={15} className="inline-flex" />
                </span>{" "}
              </p>
            </div>
            <div
              className={`absolute top-0 left-1/2 bg-neutral-900 rounded-xl border border-neutral-600 h-full w-full transform -translate-x-1/2 mx-40 my-20 ${isHovered ? "scale-105" : ""
                }`}
              style={{ transition: "transform 0.3s ease" }}
            >
              <img
                src="https://framerusercontent.com/images/xWCpo6102mRYh1sLnr76Wco814.jpg?scale-down-to=1024"
                alt=""
                className="object-cover h-full w-full rounded-xl"
              />
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div
              className="relative overflow-hidden bg-black h-[300px] border border-neutral-800 w-[500px] flex flex-col rounded-xl"
              style={{ perspective: "1000px" }}
            >

              <div className="p-5">
                <h1 className="text-xl text-white font-bold">Breakpoints</h1>
                <p className="text-sm text-neutral-400">
                  Visually design layouts that adapt to any size.
                </p>
                <p className="text-yellow-500 py-5">
                  Learn more{" "}
                  <span>
                    <ArrowRight size={15} className="inline-flex" />
                  </span>{" "}
                </p>
              </div>
              <div className="absolute top-0 left-1/2 bg-neutral-900 rounded-xl border border-neutral-600 h-full w-full transform -translate-x-1/2 mx-40 my-20">
                <img
                  src="https://framerusercontent.com/images/kiaTwJc7MqVX3U46SXdAIMP8s.jpg?scale-down-to=1024"
                  alt=""
                  className="object-cover h-full w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 py-5">
          <div className="relative overflow-hidden bg-black border border-neutral-800  h-[300px] w-[500px] flex justify-center rounded-xl">
            {/* <!-- Inner div --> */}
            <div className="absolute left-1/2 border border-neutral-700 h-full w-full transform -translate-x-1/2 mx-10 mt-10 rounded-xl">

              <img src="https://framerusercontent.com/images/6npFieVH7g34JUotN6hSO56hNu4.jpg?scale-down-to=1024" alt="" className="h-full w-full object-cover rounded-xl" />
            </div>

          </div>
          <div className="relative overflow-hidden bg-black border border-neutral-800 rounded-xl h-[300px] w-[500px] ">
            <div className="p-5">
              <h1 className="text-xl text-white font-bold">Design stunning sites on a familiar canvas.</h1>
              <p className="text-neutral-400 text-sm">Add effects with a few clicks and capture your audience’s attention.</p>
            </div>
            {/* <!-- Inner div --> */}
            <div className="absolute bottom-0 h-60 mx-20 w-4/5 transform translate-y-10 -translate-x-10 rounded-xl border border-neutral-700 hover:scale-110 transition-transform duration-300 ">
              <img src="https://framerusercontent.com/images/9XeDYmasOuYqhhTFFlEm2JClxs.jpg?scale-down-to=2048" alt="" className="h-full w-full object-cover rounded-xl " />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 py-5">
          <div className="relative overflow-hidden border border-neutral-700 h-[300px] w-[500px] flex justify-center rounded-xl">
            <video src="https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/large_2x.mp4" className="absolute top-0 left-0 h-full w-full object-cover" autoPlay muted loop></video>
          </div>

          <div className="relative overflow-hidden bg-black h-[300px] w-[500px] rounded-xl border border-neutral-800">
            {/* <!-- Inner div --> */}
            <div className="absolute left-0 bottom-0 border-[4px] border-neutral-700 h-60 w-2/3 transform translate-x-[-25%] translate-y-10 rounded-xl overflow-hidden">
              <img src="https://framerusercontent.com/images/tGEvQAqZENTUXWmbVz0Sjygu7YM.jpg?scale-down-to=2048" alt="" className="object-cover h-full w-full rounded-xl" />
            </div>
            <div className="absolute bottom-0 h-2/3 mx-20 w-4/5 border-[4px] border-neutral-500 rounded-xl transform translate-y-10 overflow-hidden">
              <img src="https://framerusercontent.com/images/LCcJKkuDVFSbmVunaldfsFIOyio.jpg?scale-down-to=1024" alt="" className="object-cover h-full w-full rounded-xl" />
            </div>
          </div>

        </div>

        <div className="flex items-center justify-center gap-5 py-5">
          <div className="relative overflow-hidden bg-green-300 h-[300px] w-[500px] flex justify-center">
            {/* <!-- Inner div --> */}
            <div className=" absolute left-1/2  bg-pink-400 h-full w-full transform -translate-x-1/2 mx-10 mt-10"></div>
          </div>
          <div className="relative overflow-hidden bg-green-300 h-[300px] w-[500px] flex justify-center">
            {/* <!-- Inner div --> */}
            <div className="absolute bottom-0 bg-pink-400 h-60 mx-20 w-4/5 transform translate-y-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}

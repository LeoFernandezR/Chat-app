import React from "react"

import ChatSVG from "../assets/svg/chat.svg"
interface Props {}

const Home: React.FC<Props> = ({}) => {
  return (
    <main className="flex flex-col justify-between items-center">
      <div className="pt-12 flex flex-col gap-4 justify-center">
        <h1 className="text-5xl font-bold text-center">
          <span className="text-pink-400">Welcome</span> to the chat app
        </h1>
        <p className="font-light text-lg text-center">
          Connect with your friends or make new ones through this web chat app <br />
        </p>
      </div>
      <div className="w-96 py-14">
        <img alt="" className="w-full" src={ChatSVG} />
      </div>
    </main>
  )
}

export default Home

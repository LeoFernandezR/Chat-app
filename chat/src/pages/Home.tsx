import React from "react"
import {Link} from "react-router-dom"

import ChatSVG from "../assets/svg/chat.svg"
import useAuthContext from "../hooks/useAuthContext"
interface Props {}

const Home: React.FC<Props> = ({}) => {
  const {user} = useAuthContext()

  return (
    <main className="flex flex-1 items-center justify-center">
      <article className="flex flex-1  justify-center">
        <section className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-2 justify-center py-4">
            <h1 className="text-6xl font-bold text-center">
              <span className="text-pink-400">Welcome</span> to the chat app
            </h1>
            <p className="font-light text-lg text-center">
              Connect with your friends or make new ones through this web chat app <br />
            </p>
          </div>
          <div className="max-w-md w-full">
            <img alt="" className="w-full" src={ChatSVG} />
          </div>
          {user && (
            <Link
              className="block px-4 py-2 mt-8 bg-pink-400 rounded-md text-lg hover:bg-pink-500 transition-colors duration-300 ease-in"
              to="/chat"
            >
              Go to Chatter
            </Link>
          )}
        </section>
      </article>
    </main>
  )
}

export default Home

import React from "react"
import {Link} from "react-router-dom"

import ChatSVG from "../../assets/svg/chat.svg"
import useAuthContext from "../../hooks/useAuthContext"
interface Props {}

export const Home: React.FC<Props> = ({}) => {
  const {user} = useAuthContext()

  return (
    <main className="flex flex-1 items-center justify-center flex-col gap-8">
      <article className="flex items-center justify-between">
        <section className="flex flex-col gap-4 justify-between items-center">
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
        </section>
      </article>
      {user && (
        <div className="relative max-w-md w-full text-center">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 blur" />
          <Link
            className="relative block px-4 py-2 shadow-lg from-pink-500 via-purple-500 to-indigo-500 bg-gradient-to-r rounded-md text-2xl font-bold w-full group transition-all duration-300 ease-in"
            to="/chat"
          >
            <div className="absolute bg-red-500 w-full inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in" />
            <span className="relative">Go to Chatter!</span>
          </Link>
        </div>
      )}
    </main>
  )
}

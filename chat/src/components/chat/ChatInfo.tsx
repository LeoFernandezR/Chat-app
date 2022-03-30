import React, {MutableRefObject, useLayoutEffect, useRef} from "react"

import useAuthContext from "../../hooks/useAuthContext"

import {Room} from "./Chat"

interface Props {
  room: Room
  inputChatRef: MutableRefObject<HTMLFormElement | null>
}

const ChatInfo: React.FC<Props> = ({room, inputChatRef}) => {
  const chatRef = useRef<HTMLDivElement | null>(null)
  const headerChatRef = useRef<HTMLDivElement | null>(null)
  const {user} = useAuthContext()

  const maxHeightChat =
    window.innerHeight -
    ((inputChatRef.current?.offsetHeight ?? 0) + (headerChatRef.current?.offsetHeight ?? 0))

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      if (!chatRef.current || !headerChatRef.current || !inputChatRef.current) return

      chatRef.current.style.maxHeight = `${
        window.innerHeight -
        (headerChatRef.current.offsetHeight + inputChatRef.current.offsetHeight)
      }px`
    })
  }, [inputChatRef])

  return (
    <article className="flex flex-1 flex-col">
      <section
        ref={headerChatRef}
        className="w-full p-4 flex items-center text-xl border-b-2 border-b-pink-400/50"
      >
        <h1 className="font-bold border-r-2 border-r-pink-400/50 pr-4 mr-4"># {room.name}</h1>
        <p className="text-sm font-light">{room.description}</p>
      </section>
      <section
        ref={chatRef}
        className="flex-1 overflow-y-auto scroll-smooth"
        style={{
          maxHeight: maxHeightChat,
        }}
      >
        {room.messages.map((message) => (
          <div key={message.timestamp} className="px-6 py-2 text-sm">
            <h1 className="text-base font-medium text-pink-300">{message.username}</h1>
            <p>{message.value}</p>
          </div>
        ))}
      </section>
    </article>
  )
}

export default ChatInfo

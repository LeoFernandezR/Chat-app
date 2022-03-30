import {Icon} from "@iconify/react"
import React, {forwardRef, ForwardRefRenderFunction} from "react"

interface Props {
  handleMessageSend: (e: React.FormEvent<HTMLFormElement>) => void
  messageInput: string
  handleMessageInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MessageInput: ForwardRefRenderFunction<HTMLFormElement, Props> = (
  {handleMessageSend, handleMessageInput, messageInput},
  ref,
) => {
  return (
    <form
      ref={ref}
      className="w-full py-4 px-6 flex gap-3 items-center justify-between"
      onSubmit={handleMessageSend}
    >
      <input
        className="flex-1 rounded-md py-1 px-2 bg-stone-700/30 text-white font-lights placeholder:text-white/70 outline-none focus:ring focus:ring-pink-400 transition-all ease-in duration-300"
        type="text"
        value={messageInput}
        onChange={handleMessageInput}
      />
      <button
        className="w-8 h-8 text-pink-400 hover:text-pink-500 transition ease-in duration-200s"
        type="submit"
      >
        <Icon className="w-full h-full" icon="fluent:send-16-filled" />
      </button>
    </form>
  )
}

export default forwardRef(MessageInput)

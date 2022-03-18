import React from "react"
import {Icon} from "@iconify/react"

import ChatterLogo from "../../assets/logo/logo.png"
import useAuthContext from "../../hooks/useAuthContext"

interface Props {
  rooms: string[]
  openNewRoomModal: VoidFunction
}

const ChatAside: React.FC<Props> = ({rooms, openNewRoomModal}) => {
  const {user} = useAuthContext()

  return (
    <aside className="flex flex-col flex-[0.15] min-w-fit shadow-xl">
      <div className="flex-1 p-4">
        <header className="flex items-stretch justify-center mb-6">
          <div className="w-10 mr-1">
            <img className="w-full" src={ChatterLogo} />
          </div>
          <h1 className="text-3xl font-medium">Chatter </h1>
        </header>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h3 className="text-xl font-medium">Chat Rooms </h3>
            <button className="inline text-right" onClick={openNewRoomModal}>
              <Icon icon="fluent:add-12-filled" inline={true} />
            </button>
          </div>
          <ul className="pl-3 flex flex-col gap-1 overflow-y-auto max-h-[48.5rem]">
            {rooms.map((room) => (
              <li key={room}># {room}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 gap-4">
        <h4 className="text-lg">
          Hello <span className="font-bold">{user?.username}</span> 👋
        </h4>
        <button className="text-2xl transition-color hover:text-pink-400 duration-300 ease-in">
          <Icon className="inline" icon="tabler:logout" inline={true} />
        </button>
      </div>
    </aside>
  )
}

export default ChatAside

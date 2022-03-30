import React, {useLayoutEffect} from "react"
import {Icon} from "@iconify/react"
import {useRef} from "react"

import ChatterLogo from "../../assets/logo/logo.png"
import useAuthContext from "../../hooks/useAuthContext"

import {Room} from "./Chat"

interface Props {
  rooms: Room[]
  openNewRoomModal: VoidFunction
  handleRoomSelect: (room: Room) => void
}

const ChatAside: React.FC<Props> = ({rooms, openNewRoomModal, handleRoomSelect}) => {
  const {user, logout} = useAuthContext()
  const headerRef = useRef<HTMLDivElement | null>(null)
  const userMenuRef = useRef<HTMLDivElement | null>(null)
  const roomListRef = useRef<HTMLUListElement | null>(null)

  const headerHeight = headerRef.current?.offsetHeight ?? 0
  const userMenuHeight = userMenuRef.current?.offsetHeight ?? 0

  const maxRoomList = window.innerHeight - (headerHeight + userMenuHeight)

  useLayoutEffect(() => {
    if (!roomListRef.current) return

    window.addEventListener("resize", () => {
      if (!roomListRef.current || !headerRef.current || !userMenuRef.current) {
        return
      }

      roomListRef.current.style.maxHeight = `${
        window.innerHeight - (headerRef.current.offsetHeight + userMenuRef.current.offsetHeight)
      }px`
    })
  }, [])

  return (
    <>
      <div className="flex-1">
        <header ref={headerRef} className="flex flex-col gap-2 px-4 pt-4 pb-2">
          <div className="flex justify-center">
            <div className="w-10 mr-1">
              <img className="w-full" src={ChatterLogo} />
            </div>
            <h1 className="text-3xl font-medium">Chatter </h1>
          </div>
          <div className="flex justify-between ">
            <h3 className="text-xl font-medium">Chat Rooms </h3>
            <button className="inline text-right" onClick={openNewRoomModal}>
              <Icon icon="fluent:add-12-filled" inline={true} />
            </button>
          </div>
        </header>

        <ul
          ref={roomListRef}
          className="flex flex-col gap-1 overflow-y-auto px-4"
          style={{maxHeight: maxRoomList}}
        >
          {rooms.map((room) => (
            <li key={room.id} className="cursor-pointer" onClick={() => handleRoomSelect(room)}>
              # {room.name}
            </li>
          ))}
        </ul>
      </div>
      <div ref={userMenuRef} className="flex justify-between items-center p-4 gap-4">
        <h4 className="text-lg">
          Hello <span className="font-bold">{user?.username}</span> 👋
        </h4>
        <button
          className="text-2xl transition-color hover:text-pink-400 duration-300 ease-in"
          onClick={logout}
        >
          <Icon className="inline" icon="tabler:logout" inline={true} />
        </button>
      </div>
    </>
  )
}

export default ChatAside

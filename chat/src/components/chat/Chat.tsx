import React, {useRef, useState} from "react"

import useAuthContext from "../../hooks/useAuthContext"

import ChatAside from "./ChatAside"
import ChatInfo from "./ChatInfo"
import MessageInput from "./MessageInput"
import NewRoomModal from "./NewRoomModal"

interface Message {
  value: string
  username?: string
  timestamp: number
}

export interface Room {
  id: number
  name: string
  description?: string
  messages: Message[]
}

interface Props {}

export const Chat: React.FC<Props> = ({}) => {
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: Date.now(),
      name: "Welcome",
      description: "Welcome to chatter, relax and be nice! 🤟",
      messages: [{timestamp: Date.now(), value: "Welcome to Chatter!", username: "Chatter"}],
    },
  ])
  const [selectedRoom, setSelectedRoom] = useState<Room>(rooms[0])
  const [messageInput, setMessageInput] = useState<Message["value"]>("")

  const {user} = useAuthContext()

  const [showNewRoomModal, setShowNewRoomModal] = useState(false)

  const inputChatRef = useRef<HTMLFormElement | null>(null)

  const handleMessageSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!messageInput) {
      return
    }
    const newMessage: Message = {
      username: user?.username,
      timestamp: Date.now(),
      value: messageInput,
    }

    setSelectedRoom((room) => {
      return {
        ...room,
        messages: [...room.messages, newMessage],
      }
    })

    setRooms((prevRooms) => {
      return prevRooms.map((room) => {
        if (room.id === selectedRoom.id) {
          return {...room, messages: [...room.messages, newMessage]}
        }

        return room
      })
    })
    setMessageInput("")
  }

  const handleMessageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(e.target.value)
  }

  const selectRoom = (room: Room) => {
    setSelectedRoom(room)

    if (selectedRoom.id !== room.id) {
      setMessageInput("")
    }
  }

  const addNewRoom = ({roomName, roomDescription}: {roomName: string; roomDescription: string}) => {
    if (!roomName) return

    const newRoom: Room = {
      id: Date.now(),
      name: roomName,
      description: roomDescription ? roomDescription : "",
      messages: [],
    }

    setRooms((prevRooms) => [...prevRooms, newRoom])
    closeNewRoomModal()
  }

  const closeNewRoomModal = () => setShowNewRoomModal(false)

  const openNewRoomModal = () => setShowNewRoomModal(true)

  return (
    <>
      <div className="flex min-h-screen h-screen max-h-screen from-pink-500 via-purple-500 to-indigo-500 bg-gradient-to-br text-white">
        <aside className="flex flex-col flex-[0.15] min-w-fit border-r-2 border-r-pink-400/50">
          <ChatAside
            handleRoomSelect={selectRoom}
            openNewRoomModal={openNewRoomModal}
            rooms={rooms}
          />
        </aside>

        <main className="flex-[0.85] flex flex-col">
          <ChatInfo inputChatRef={inputChatRef} room={selectedRoom} />
          <MessageInput
            ref={inputChatRef}
            handleMessageInput={handleMessageInput}
            handleMessageSend={handleMessageSend}
            messageInput={messageInput}
          />
        </main>
      </div>
      <NewRoomModal
        addNewRoom={addNewRoom}
        closeNewRoomModal={closeNewRoomModal}
        showNewRoomModal={showNewRoomModal}
      />
    </>
  )
}

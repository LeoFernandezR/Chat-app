import React, {useState} from "react"

import ChatAside from "./ChatAside"
import NewRoomModal from "./NewRoomModal"

interface Props {}

export const Chat: React.FC<Props> = ({}) => {
  const [rooms, setRooms] = useState(Array(0).fill("lorem ipsum"))
  const [showNewRoomModal, setShowNewRoomModal] = useState(false)

  const addNewRoom = (newRoom: string) => {
    setRooms((prevRooms) => [...prevRooms, newRoom])
    closeNewRoomModal()
  }

  const closeNewRoomModal = () => setShowNewRoomModal(false)

  const openNewRoomModal = () => setShowNewRoomModal(true)

  return (
    <>
      <div className="flex min-h-screen from-pink-500 via-purple-500 to-indigo-500 bg-gradient-to-br text-white">
        <ChatAside openNewRoomModal={openNewRoomModal} rooms={rooms} />
        <div className="flex-[0.85] flex flex-col">
          <div className="flex-[0.90]">messages</div>
          <div className="w-full flex-[0.10] p-4">sendmessage</div>
        </div>
      </div>
      <NewRoomModal
        addNewRoom={addNewRoom}
        closeNewRoomModal={closeNewRoomModal}
        showNewRoomModal={showNewRoomModal}
      />
    </>
  )
}

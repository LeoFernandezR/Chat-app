import React, {useEffect, useRef, useState} from "react"

import TextField from "../commons/form/TextField"
interface Props {
  showNewRoomModal: boolean
  addNewRoom: (newRoom: string) => void
  closeNewRoomModal: VoidFunction
}

const NewRoomModal: React.FC<Props> = ({showNewRoomModal, addNewRoom, closeNewRoomModal}) => {
  const [roomName, setRoomName] = useState("")
  const [hideModal, setHideModal] = useState(false)

  const background = useRef<HTMLDivElement>(null)

  // const clickOutsideModal = (e: MouseEvent) => {
  //   if (!modal.current?.contains(e.target as Node)) {
  //     console.log("here")
  //     closeNewRoomModal()
  //   }
  // }

  const handleRoomCreation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addNewRoom(roomName)
  }

  useEffect(() => {
    if (showNewRoomModal === false) {
      setTimeout(() => {
        return setHideModal(true)
      }, 300)

      return
    }
    setHideModal(false)
  }, [showNewRoomModal])

  useEffect(() => {
    console.log({showNewRoomModal, hideModal})
  }, [showNewRoomModal, hideModal])

  return (
    <>
      <div
        className={`
        ${showNewRoomModal ? "opacity-100" : "opacity-0"} ${
          hideModal && "hidden"
        } block absolute min-h-screen w-full h-full bg-black/70 inset-0 flex justify-center items-center text-white transition-all duration-300 ease-in`}
        onClick={closeNewRoomModal}
      >
        <div
          className={`bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 max-w-lg w-full p-6 rounded-md`}
        >
          <form className="flex flex-col gap-4" onSubmit={handleRoomCreation}>
            <h1 className="text-3xl text-center">Create new room</h1>
            <TextField
              placeholder="Room name"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
            <nav>
              <ul className="flex justify-between gap-4">
                <li className="w-full">
                  <button
                    className="w-full px-4 py-2 text-lg text-center bg-teal-400 rounded-md hover:bg-teal-500 transition-color duration-300 ease-in font-medium"
                    type="submit"
                  >
                    Create
                  </button>
                </li>
                <li className="w-full">
                  <button
                    className="w-full px-4 py-2 text-lg text-center bg-rose-500 rounded-md hover:bg-rose-600 transition-color duration-300 ease-in font-medium"
                    type="button"
                    onClick={closeNewRoomModal}
                  >
                    Cancel
                  </button>
                </li>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewRoomModal

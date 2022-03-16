import React, {useState} from "react"
interface Props {}

export const Chat: React.FC<Props> = ({}) => {
  const [rooms, setRooms] = useState(Array(7).fill("lorem ipsum"))

  return (
    <div className="min-h-screen from-pink-500 via-purple-500 to-indigo-500 bg-gradient-to-br">
      <aside className="p-4 flex flex-col gap-2 border-r flex-[0.15] min-w-fit">
        <h1 className="text-lg">Chat Rooms </h1>
        <ul className="">
          {rooms.map((room) => (
            <li key={room}># {room}</li>
          ))}
        </ul>
      </aside>
      <div className="flex-[0.85]" />
    </div>
  )
}

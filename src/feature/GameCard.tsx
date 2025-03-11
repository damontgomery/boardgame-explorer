import { GameCard as GameCardComponent } from "@/components/GameCard/GameCard"
import { BoardGame } from "@/lib/boardGameApi/data-access/boardGameApi"
import Image from "next/image"
import { ImageProp } from "./htmlElementTypes"

export const GameCard = ({
  game
}: {
  game: BoardGame
}) => <GameCardComponent
    name={game.name}
    coverImage={game.coverImage}
    status={game.status}
    players={game.players}
    rulesLink={game.rulesLink}
    description={game.description}
    Image={Image as ImageProp}
  />

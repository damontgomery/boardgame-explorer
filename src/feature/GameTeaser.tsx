import { GameTeaser as GameTeaserComponent } from "@/components/GameTeaser/GameTeaser"
import { BoardGame } from "@/lib/boardGameApi/data-access/boardGameApi"
import Image from "next/image"
import Link from "next/link"
import { ImageProp, LinkProp } from "./htmlElementTypes"

export const GameTeaser = ({
  game
}: {
  game: BoardGame
}) => <GameTeaserComponent
  id={game.id}
  name={game.name}
  players={game.players}
  coverImage={game.coverImage}
  rulesLink={game.rulesLink}
  status={game.status}
  Image={Image as ImageProp}
  Link={Link as LinkProp}
/>

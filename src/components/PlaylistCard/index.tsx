import Image from "next/image"
import { Queue } from "phosphor-react"
import { MouseEvent } from "react"
import { PlayButton } from "../PlayButton"
import { EmptyThumbnail, PlaylistCardContainer } from "./styles"

interface PlaylistCardProps {
    path: string
    thumbnailUrl: string
    thumbnailAlt?: string
    name: string
    episodesCount: number
}

export function PlaylistCard({ path, thumbnailUrl, thumbnailAlt = "", name, episodesCount }: PlaylistCardProps) {
    function handleClick(e: MouseEvent) {
        e.preventDefault()

        alert('playlist')
    }

   return (
    <PlaylistCardContainer href={`/playlist/${path}`}>
        <div className="thumbnail-container">
            {thumbnailUrl ? (
                <Image 
                    src={thumbnailUrl}
                    alt={thumbnailAlt}
                    width={600}
                    height={600}
                />
            ) : (
                <EmptyThumbnail>
                    <Queue size={46} weight="fill" />
                </EmptyThumbnail>
            )}

            <div className="layer">
                <span>
                    {episodesCount} <br />
                    {episodesCount !== 1 ? 'Episódios' : 'Episódio'}
                </span>

                <div className="button-container">
                    <PlayButton onClick={handleClick} />
                </div>
            </div>
        </div>

        <h3 title={name}>{name}</h3>
    </PlaylistCardContainer>
   )
}
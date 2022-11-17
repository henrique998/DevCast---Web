import Image from "next/image"
import { MouseEvent } from "react"
import { PlayButton } from "../PlayButton"
import { PlaylistCardContainer } from "./styles"

interface PlaylistCardProps {
    path: string
    thumbnailUrl: string
    thumbnailAlt?: string
    name: string
}

export function PlaylistCard({ path, thumbnailUrl, thumbnailAlt = "", name }: PlaylistCardProps) {
    function handleClick(e: MouseEvent) {
        e.preventDefault()

        alert('playlist')
    }

   return (
    <PlaylistCardContainer href={path}>
        <div className="thumbnail-container">
            <Image 
                src={thumbnailUrl}
                alt={thumbnailAlt}
                width={600}
                height={600}
            />

            <div className="layer">
                <span>
                    31 <br />
                    Episódios
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
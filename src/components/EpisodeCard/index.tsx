import Image from "next/image";
import { MouseEvent } from "react";
import { PlayButton } from "../PlayButton";
import { DurationBadge, EpisodeCardContainer } from "./styles";

interface EpisodeCardProps {
    path: string
    imageUrl: string
    imageAlt?: string
    title: string
    duration: string
    members: string
    publishedAt: string
}

export function EpisodeCard({ 
    path, 
    imageUrl, 
    imageAlt = "", 
    title, 
    duration,
    members, 
    publishedAt 
}: EpisodeCardProps) {
    
    function handleClick(e: MouseEvent) {
        e.preventDefault()

        alert('hello world')
    }

   return (
    <EpisodeCardContainer href={path}>
        <div className="thumbnail-container">
            <Image 
                src={imageUrl}
                alt={imageAlt}
                width={600}
                height={600}
            />

            <DurationBadge>
                <span>{duration}</span>
            </DurationBadge>

            <div className="button-container">
                <PlayButton 
                    onClick={handleClick} 
                />
            </div>
        </div>

        <h3 title={title}>{title}</h3>

        <div className="info-container">
            <span title={members}>{members}</span>

            <div className="bullet" />

            <time title={publishedAt}>{publishedAt}</time>
        </div>
    </EpisodeCardContainer>
   )
}
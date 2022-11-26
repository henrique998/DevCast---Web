import Image from "next/image";
import { Queue } from "phosphor-react";
import { ComponentProps } from "react";
import { EmptyPlaylistMiniCard, PlaylistMiniCardContainer } from "./styles";

interface PlaylistMiniCardProps extends ComponentProps<typeof PlaylistMiniCardContainer> {
    thumbnail?: string
    title: string
}

export function PlaylistMiniCard({ thumbnail, title, ...rest }: PlaylistMiniCardProps) {
   return (
    <PlaylistMiniCardContainer {...rest}>
        {thumbnail ? (
            <Image 
                src={thumbnail}
                alt={title}
                width={150}
                height={150}
            /> 
        ) : (
            <EmptyPlaylistMiniCard>
                <Queue size={14} weight="fill" />
            </EmptyPlaylistMiniCard>
        )}   

        <h3 title={title}>{title}</h3>
    </PlaylistMiniCardContainer>
   )
}
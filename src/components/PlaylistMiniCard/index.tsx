import Image from "next/image";
import { ComponentProps } from "react";
import { PlaylistMiniCardContainer } from "./styles";

interface PlaylistMiniCardProps extends ComponentProps<typeof PlaylistMiniCardContainer> {
    thumbnail: string
    title: string
}

export function PlaylistMiniCard({ thumbnail, title, ...rest }: PlaylistMiniCardProps) {
   return (
    <PlaylistMiniCardContainer {...rest}>
        <Image 
            src={thumbnail}
            alt={title}
            width={150}
            height={150}
        />    

        <h3 title={title}>{title}</h3>
    </PlaylistMiniCardContainer>
   )
}
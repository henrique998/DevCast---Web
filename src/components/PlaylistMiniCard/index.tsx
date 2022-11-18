import Image from "next/image";
import { ComponentProps } from "react";
import { PlaylistMiniCardContainer } from "./styles";

interface PlaylistMiniCardProps extends ComponentProps<typeof PlaylistMiniCardContainer> {}

export function PlaylistMiniCard({ ...rest }: PlaylistMiniCardProps) {
   return (
    <PlaylistMiniCardContainer {...rest}>
        <Image 
            src="/card-image.png"
            alt=""
            width={150}
            height={150}
        />    

        <h3 title="HTML e Css">HTML e Css</h3>
    </PlaylistMiniCardContainer>
   )
}
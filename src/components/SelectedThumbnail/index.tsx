import Image from "next/image"
import { TrashSimple } from "phosphor-react"
import { SelectedThumbnailContainer } from "./styles"

interface SelectedThumbnailProps {
    thumbnailUrl: string
    onDelete: () => void
}

export function SelectedThumbnail({ thumbnailUrl, onDelete }: SelectedThumbnailProps) {
   return (
    <SelectedThumbnailContainer>
        <Image 
            src={thumbnailUrl}
            alt="imagem de preview da playlist"
            width={378}
            height={378}
        />

        <button
            onClick={onDelete}
        >
            <TrashSimple 
                size={20} 
                weight="fill" 
            />
        </button>
    </SelectedThumbnailContainer>  
   )
}
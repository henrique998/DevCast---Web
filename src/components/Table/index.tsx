import Image from "next/image";
import Link from "next/link";
import { HandsClapping } from "phosphor-react";
import { usePlayer } from "../../contexts/PlayerContext";
import { PlayButton } from "../PlayButton";
import { TableContainer } from "./styles";

type TableRowData = {
    id: string
    thumbnail: string
    title: string
    slug: string
    members: string
    publishedAt: string
    duration: number
    url: string
    aplauses: number
}

interface TableProps {
    episodes: TableRowData[]
}    

export function Table({ episodes }: TableProps) {
   const { play } = usePlayer()

   return (
    <TableContainer cellSpacing={0}>
        <thead>
            <th>Episódio</th>
            <th>Integrantes</th>
            <th>Data</th>
            <th>Duração</th>
            <th>Aplausos</th>
            <th></th>
        </thead>
        {episodes?.map(episode => (
            <tr key={episode.id}>
                <td>
                    <Image 
                        src={episode.thumbnail}
                        alt={`thumbnail do episódio - ${episode.title}`}
                        width={120}
                        height={120}
                    /> 

                    <Link href={`/episode/${episode.slug}`} title={episode.title}>
                        {episode.title}
                    </Link>
                </td>

                <td>
                    <span title={episode.members}>{episode.members}</span>
                </td>

                <td>
                    <time title={episode.publishedAt}>
                        {episode.publishedAt}
                    </time>
                </td>

                <td>
                    <span title={episode.duration.toString()}>
                        {episode.duration}
                    </span>
                </td>

                <td>
                    <HandsClapping size={24} weight="fill" /> 
                    <span title={episode.aplauses.toString()}>{episode.aplauses}</span>
                </td>

                <td>
                    <PlayButton 
                        variant="outlined" 
                        onClick={() => play(episode)}
                    />
                </td>
            </tr>
        ))}
    </TableContainer>
   )
}
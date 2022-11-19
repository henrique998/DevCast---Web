import Image from "next/image";
import Link from "next/link";
import { HandsClapping } from "phosphor-react";
import { PlayButton } from "../PlayButton";
import { TableContainer } from "./styles";

type TableRowData = {
    id: string
    imageAndTitle: {
        imgUrl: string
        title: string
    }
    slug: string
    members: string
    publishedAt: string
    duration: string
    aplauses: number
}

interface TableProps {
    episodes: TableRowData[]
}    

export function Table({ episodes }: TableProps) {
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
        {episodes.map(episode => (
            <tr key={episode.id}>
                <td>
                    <Image 
                        src={episode.imageAndTitle.imgUrl}
                        alt={`thumbnail do episódio - ${episode.imageAndTitle.title}`}
                        width={120}
                        height={120}
                    /> 

                    <Link href={`/episode/${episode.slug}`} title={episode.imageAndTitle.title}>
                        {episode.imageAndTitle.title}
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
                    <span title={episode.duration}>
                        {episode.duration}
                    </span>
                </td>

                <td>
                    <HandsClapping size={24} weight="fill" /> 
                    <span title={episode.aplauses.toString()}>{episode.aplauses}</span>
                </td>

                <td>
                    <PlayButton variant="outlined" />
                </td>
            </tr>
        ))}
    </TableContainer>
   )
}
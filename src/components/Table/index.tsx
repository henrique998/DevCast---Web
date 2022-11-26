import Image from "next/image";
import Link from "next/link";
import { HandsClapping } from "phosphor-react";
import { useContextSelector } from "use-context-selector";
import { PlayerContext, PlayerEpisode } from "../../contexts/PlayerContext";
import { LastEpisode } from "../../pages/home";
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
    durationAsString: string
    url: string
    aplauses: number
}

interface TableProps {
    lastEpisodes: LastEpisode[]
    tableEpisodes: TableRowData[]
    episodesList: PlayerEpisode[] 
}    

export function Table({ lastEpisodes, tableEpisodes, episodesList }: TableProps) {
    const playList = useContextSelector(PlayerContext, ctx => {
        return ctx.playList
    }) 

   return (
    <TableContainer cellSpacing={0}>
        <thead>
            <tr>
                <th>Episódio</th>
                <th>Integrantes</th>
                <th>Data</th>
                <th>Duração</th>
                <th>Aplausos</th>
                <th></th>
            </tr>
        </thead>
        
        <tbody>
            {tableEpisodes?.map((episode, index) => (
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
                            onClick={() => playList(episodesList, index + lastEpisodes.length)}
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    </TableContainer>
   )
}
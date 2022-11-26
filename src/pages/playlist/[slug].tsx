import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"
import Image from "next/image"
import Link from "next/link"
import { HandsClapping } from "phosphor-react"
import { PlayButton } from "../../components/PlayButton"
import { usePlayer } from "../../contexts/PlayerContext"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { setupApiClient } from "../../services/api"
import { Banner, EpisodesTableContainer, PlaylistContainer, PlaylistWrapper, TableContainer } from "../../styles/pages/playlist"
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString"
import { withSSRPrivate } from "../../utils/withSSRPrivate"

type Episode = {
  id: string
  thumbnail: string
  title: string
  members: string
  publishedAt: string
  duration: number
  slug: string
  url: string
  aplauses: number
}

type PlaylistData = {
  name: string
	description: string
	episodesCount: number
  episodes: Episode[]
}

type SerialiazedPlaylist = {
  name: string
	description: string
	episodesCountText: string
  episodes: {
    id: string
    thumbnail: string
    title: string
    members: string
    publishedAt: string
    duration: number
    durationAsString: string
    slug: string
    url: string
    aplauses: number
  }[]
}

interface PlaylistProps {
  playlistData: SerialiazedPlaylist
}

function Playlist({ playlistData }: PlaylistProps) {
  const { playList } = usePlayer()

  return (
    <DefaultLayout>
      <PlaylistContainer>
        <PlaylistWrapper>
          <Banner>
            <div className="texts-container">
              <h1>{playlistData?.name}</h1>

              <p>{playlistData?.description}</p>

              <strong>{playlistData?.episodesCountText}</strong>
            </div>

            <Image 
              src="/white-logo.svg"
              alt=""
              width={354}
              height={96}
            />

            <div className="image-container" />
          </Banner>

          <EpisodesTableContainer>              
            <TableContainer cellSpacing={0}>
              <thead>
                  <th>Episódio</th>
                  <th>Integrantes</th>
                  <th>Data</th>
                  <th>Duração</th>
                  <th>Aplausos</th>
                  <th></th>
              </thead>
              {playlistData?.episodes.map((episode, index) => (
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
                      onClick={() => playList(playlistData?.episodes, index)}
                    />
                  </td>
                </tr>
              ))}
            </TableContainer>
          </EpisodesTableContainer>
        </PlaylistWrapper>
      </PlaylistContainer>
    </DefaultLayout>
  )
}

export default Playlist

export const getServerSideProps = withSSRPrivate(async ctx => {
  const slug = ctx.params.slug

  const apiClient = setupApiClient(ctx)

  const response = await apiClient.get<PlaylistData>(`/playlists/${slug}`)

  const playlistData: SerialiazedPlaylist = {
    name: response.data.name,
    description: response.data.description ? response.data.description : 'Aproveite agora mesmo a sua playlist',
    episodesCountText: response.data.episodesCount !== 1 
      ? `${response.data.episodesCount} episódios disponíveis` 
      : `${response.data.episodesCount} episódio disponível`,
    episodes: response.data.episodes.map(episode => {
      return {
        id: episode.id,
        thumbnail: episode.thumbnail,
        title: episode.title,
        members: episode.members,
        publishedAt: format(parseISO(episode.publishedAt), 'd MMM yy', {
          locale: ptBR
        }),
        duration: (episode.duration),
        durationAsString: convertDurationToTimeString(episode.duration),
        slug: episode.slug,
        url: episode.url,
        aplauses: episode.aplauses
      }
    })
  }

  return {
    props: {
      playlistData
    }
  }
})
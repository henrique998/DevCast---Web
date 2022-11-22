import Image from "next/image"
import { Table } from "../../components/Table"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { setupApiClient } from "../../services/api"
import { Banner, EpisodesTableContainer, PlaylistContainer, PlaylistWrapper } from "../../styles/pages/playlist"
import { tableData } from "../../utils/table.data"
import { withSSRPrivate } from "../../utils/withSSRPrivate"

type Episode = {
  id: string
  thumbnail: string
  title: string
  members: string
  publishedAt: string
  duration: number
  slug: string
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
    imageAndTitle: {
      imgUrl: string;
      title: string;
    }
    members: string
    publishedAt: string
    duration: string
    slug: string
    aplauses: number
  }[]
}

interface PlaylistProps {
  playlist: SerialiazedPlaylist
}

function Playlist({ playlist }: PlaylistProps) {
  return (
    <DefaultLayout>
      <PlaylistContainer>
        <PlaylistWrapper>
          <Banner>
              <div className="texts-container">
                  <h1>{playlist?.name}</h1>

                  <p>{playlist?.description}</p>

                  <strong>{playlist?.episodesCountText}</strong>
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
            <Table episodes={playlist.episodes} />
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

  const playlist: SerialiazedPlaylist = {
    name: response.data.name,
    description: response.data.description ? response.data.description : 'Aproveite agora mesmo a sua playlist',
    episodesCountText: response.data.episodesCount !== 1 
      ? `${response.data.episodesCount} episódios disponíveis` 
      : `${response.data.episodesCount} episódio disponível`,
    episodes: response.data.episodes.map(episode => {
      return {
        id: episode.id,
        imageAndTitle: {
          imgUrl: episode.thumbnail,
          title: episode.title,
        },
        members: episode.members,
        publishedAt: episode.publishedAt,
        duration: episode.duration.toString(),
        slug: episode.slug,
        aplauses: episode.aplauses
      }
    })
  }

  return {
    props: {
      playlist
    }
  }
})
import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"
import Image from "next/image"
import { CalendarBlank, Clock, HandsClapping, Info, Play, Users } from "phosphor-react"
import { PlayButton } from "../../components/PlayButton"
import { Player } from "../../components/Player"
import { useAuth } from "../../contexts/AuthContext"
import { usePlayer } from "../../contexts/PlayerContext"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { setupApiClient } from "../../services/api"
import { EpisodeContainer, EpisodeHeading, EpisodeWrapper, MobilePlayButton, MobilePlayButtonContainer } from "../../styles/pages/episode"
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString"
import { withSSRPrivate } from "../../utils/withSSRPrivate"

type IResponse = {
    id: string
    thumbnail: string
    title: string
    description: string
    members: string
    publishedAt: string
    duration: number,
    audioUrl: string
    aplauses: number
}

type Episode = {
    id: string
    thumbnail: string
    title: string
    description: string
    members: string
    publishedAt: string
    duration: number,
    durationAsString: string,
    audioUrl: string
    aplauses: number
}

interface EpisodeProps {
    episode: Episode
}

function Episode({ episode }: EpisodeProps) {
    const { play } = usePlayer()
    const { account } = useAuth()

  return (
    <DefaultLayout>
      <EpisodeContainer>
        <EpisodeWrapper>
            <Image 
                src={episode?.thumbnail}
                alt=""
                width={930}
                height={300}
            />

            <EpisodeHeading>
                <div className="title-container">
                    <h1>{episode?.title}</h1>

                    <PlayButton 
                        variant="outlined" 
                        label="Tocar" 
                        onClick={() => play({
                            id: episode.id,
                            title: episode.title,
                            thumbnail: episode.thumbnail,
                            members: episode.members,
                            duration: episode.duration,
                            url: episode.audioUrl,
                            accountId: account?.id
                        })}
                    />
                </div>

                <div className="infos-container">
                    <div className="info">
                        <Users size={24} weight="fill" />

                        <span>{episode?.members}</span>
                    </div>

                    <div className="bullet" />

                    <div className="info">
                        <CalendarBlank size={24} weight="fill" />

                        <span>{episode?.publishedAt}</span>
                    </div>

                    <div className="bullet" />

                    <div className="info">
                        <Clock size={24} weight="fill" />

                        <span>{episode?.durationAsString}</span>
                    </div>

                    <div className="bullet" />

                    <div className="info">
                        <HandsClapping size={24} weight="fill" />

                        <span>{episode?.aplauses}</span>
                    </div>
                </div>
            </EpisodeHeading>

            <div 
                className="content" 
                dangerouslySetInnerHTML={{ __html: episode?.description }}
            />

            <MobilePlayButtonContainer isEpisodePlaying={false}>
                <MobilePlayButton>
                    <Play size={24} weight="fill" />
                </MobilePlayButton>
            </MobilePlayButtonContainer>
        </EpisodeWrapper>
      </EpisodeContainer>
    </DefaultLayout>
  )
}

export default Episode

export const getServerSideProps = withSSRPrivate(async ctx => {
    const slug = ctx.params.slug
    
    const apiClient = setupApiClient(ctx)

    const { data } = await apiClient.get<IResponse>(`/episodes/${slug}`)

    const episode: Episode = {
        id: data.id,
        thumbnail: data.thumbnail,
        title: data.title,
        members: data.members,
        publishedAt: format(parseISO(data.publishedAt), 'd MMM yy', {
            locale: ptBR
        }),
        duration: data.duration,
        durationAsString: convertDurationToTimeString(data.duration),
        aplauses: data.aplauses,
        description: data.description,
        audioUrl: data.audioUrl,
    }

    return {
        props: {
            episode
        }
    }
})
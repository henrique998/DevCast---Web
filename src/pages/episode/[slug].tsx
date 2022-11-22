import Image from "next/image"
import { CalendarBlank, Clock, HandsClapping, Info, Play, Users } from "phosphor-react"
import { PlayButton } from "../../components/PlayButton"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { setupApiClient } from "../../services/api"
import { EpisodeContainer, EpisodeHeading, EpisodeWrapper, MobilePlayButton, MobilePlayButtonContainer } from "../../styles/pages/episode"
import { withSSRPrivate } from "../../utils/withSSRPrivate"

type Episode = {
    thumbnail: string
    title: string
    description: string
    members: string
    publishedAt: string
    duration: number,
    audioUrl: string
    aplauses: number
}

interface EpisodeProps {
    episode: Episode
}

function Episode({ episode }: EpisodeProps) {
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

                    <PlayButton variant="outlined" label="Tocar" />
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

                        <span>{episode?.duration}</span>
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

    const response = await apiClient.get<Episode>(`/episodes/${slug}`)

    return {
        props: {
            episode: response.data
        }
    }
})
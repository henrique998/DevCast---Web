import Image from "next/image"
import { CalendarBlank, Clock, HandsClapping, Info, Play, Users } from "phosphor-react"
import { PlayButton } from "../../components/PlayButton"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { EpisodeContainer, EpisodeHeading, EpisodeWrapper, MobilePlayButton, MobilePlayButtonContainer } from "../../styles/pages/episode"

function Episode() {
  return (
    <DefaultLayout>
      <EpisodeContainer>
        <EpisodeWrapper>
            <Image 
                src="/card-image.png"
                alt=""
                width={930}
                height={300}
            />

            <EpisodeHeading>
                <div className="title-container">
                    <h1>Como começar na programação em 2021 do jeito certo</h1>

                    <PlayButton variant="outlined" label="Tocar" />
                </div>

                <div className="infos-container">
                    <div className="info">
                        <Users size={24} weight="fill" />

                        <span>Diego e Richard</span>
                    </div>

                    <div className="bullet" />

                    <div className="info">
                        <CalendarBlank size={24} weight="fill" />

                        <span>8 Jan 21</span>
                    </div>

                    <div className="bullet" />

                    <div className="info">
                        <Clock size={24} weight="fill" />

                        <span>35:40</span>
                    </div>

                    <div className="bullet" />

                    <div className="info">
                        <HandsClapping size={24} weight="fill" />

                        <span>32</span>
                    </div>
                </div>
            </EpisodeHeading>

            <p className="content">
                Nesse episódio do Faladev, Diego Fernandes se reúne com João Pedro Schmitz, Bruno Lemos e Diego Haz, 
                para discutir sobre a importância da contribuição open source e quais desafios circulam na comunidade. 

                A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. 
                Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação. 
                O Faladev é um podcast original Rocketseat.
            </p>

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

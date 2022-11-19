import Image from "next/image"
import { Table } from "../../components/Table"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { Banner, EpisodesTableContainer, PlaylistContainer, PlaylistWrapper } from "../../styles/pages/playlist"
import { tableData } from "../../utils/table.data"

function Playlist() {
  return (
    <DefaultLayout>
      <PlaylistContainer>
        <PlaylistWrapper>
            <Banner>
                <div className="texts-container">
                    <h1>HTML e Css</h1>

                    <p>Aproveite agora mesmo a sua playlist</p>

                    <strong>3 episódios disponíveis</strong>
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
              <Table episodes={tableData} />
            </EpisodesTableContainer>
        </PlaylistWrapper>
      </PlaylistContainer>
    </DefaultLayout>
  )
}

export default Playlist

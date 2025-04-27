import { MainLayout } from "../MainLayout"
import { CardList } from "../CardList"
import { Pod } from "../Pod"
import cardData from '../../data/csscade.data';

export default function Tips() {
  // Sample Podbean embed code - replace with your actual embed code
  const podcastEmbedCode = `<iframe title="State! ep. 1" allowtransparency="true" height="150" width="100%" style="border: none; min-width: min(100%, 430px);height:150px;" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=rvy82-187e2f8-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Verdana&skin=f6f6f6&font-color=auto&logo_link=episode_page&btn-skin=fb0584" loading="lazy"></iframe>`

  return (
    <MainLayout heroImage="/images/comics-hero.jpg" title="The Csscade">
      <CardList imageList={cardData} />
      <Pod embedCode={podcastEmbedCode} />
    </MainLayout>
  )
}

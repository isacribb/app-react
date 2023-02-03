import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";
import ListItem2 from "./components/ListItem2";

const gamesListData = [
  {
    url: "http://www.saopaulofc.net/",
    imageUrl:
      "https://seeklogo.com/images/S/Sao_Paulo_Futebol_Clube-logo-F291AB0A19-seeklogo.com.png",
    alt: "Escudo SPFC"
  },
  {
    url: "https://www.realmadrid.com/pt",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png",
    alt: "Escudo Real Madrid"
  },
  {
    url: "https://www.manutd.com/",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
    alt: "Escudo do Man. United"
  },
  {
    url: "https://www.nba.com/celtics",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/pt/f/f5/Boston_Celtics.png",
    alt: "Escudo do Boston Celtics"
  }
];

const channelListData = [
  {
    url: "https://www.hbomax.com/br/pt",
    imageUrl: "https://static.poder360.com.br/2021/05/hbo-max-26mai2021.jpg",
    alt: "Imagem do HBO Max"
  },
  {
    url: "https://www.espn.com.br/",
    imageUrl:
      "https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png",
    alt: "Imagem da ESPN"
  },
  {
    url: "https://www.starplus.com/pt-br",
    imageUrl:
      "https://static-assets.bamgrid.com/product/starplus/images/share-default.d72cf588f6d06cba22171f5ae44289d3.png",
    alt: "Imagemd de Cellbit"
  },
  {
    url: "https://premiere.globo.com/?origemId=2935",
    imageUrl:
      "https://esporteemidia.com/wp-content/uploads/2016/10/sportv-premiere.jpg",
    alt: "Imagem do Premiere"
  },
  {
    url:
      "https://esporteclube.uol.com.br/estadio-tnt-sports?gclid=CjwKCAiAuOieBhAIEiwAgjCvcp--IeIF2bi_-5Kzaby5iMPgnj6h0u-03Znj9Uh_fzFZIu7miX6O8RoCDcgQAvD_BwE#rmcl",
    imageUrl:
      "https://tntsports.com.br/__export/1610853422418/sites/esporteinterativo/img/2021/01/17/whatsapp_image_2021-01-16_at_20_26_54_2_crop1610853421942.jpeg",
    alt: "Imagem do TNT"
  },
  {
    url: "https://www.hbomax.com/br/pt",
    imageUrl:
      "https://logodownload.org/wp-content/uploads/2018/10/fox-sports-logo-0.png",
    alt: "Imagem do HBO Max"
  }
];

export default function App() {
  return (
    <div className="App">
      {/*header*/}
      <Header />
      {/*main*/}
      <main>
        <Section title="Times" subtitle="Times que torço e acompanho!">
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Canais e plataformas"
          subtitle="Canais e plataformas que são transmitidos!"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem2
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
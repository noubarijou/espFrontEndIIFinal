import { useEffect, useState } from "react";
import { AssinarImage, CloseButton as Close } from "../../assets";
import { obterNoticias } from "./fakeRest";
import { formatTime, formatTitle } from "./formatter";
import { NewsCards } from "./NewsCards";
import { RegularModal } from "./RegularModal";
import { PremiumModal } from "./PremiumModal";

import { INews } from "./types";
import * as S from "./styled"

const Noticias = () => {
  const [noticias, setNoticias] = useState<INews[]>([]);
  const [modal, setModal] = useState<INews | null>(null);

  const obterInformacoes = async () => {
    const resposta = await obterNoticias();

    const data = resposta.map((noticia) => {

      return {
        id: noticia.id,
        titulo: formatTitle(noticia.titulo),
        description: noticia.description,
        date: `Faz ${formatTime(noticia.date)} minutos`,
        premium: noticia.premium,
        image: noticia.image,
        shortDescription: noticia.description.substring(0, 100),
      };
    });

    setNoticias(data);
  };

  useEffect(() => {
    obterInformacoes();
  }, []);

  return (
    <S.ContainerNoticias>
      <S.TituloNoticias>Noticias dos Simpsons</S.TituloNoticias>
      <S.ListaNoticias>
        {noticias.map((noticia) => (
          <NewsCards
            key={noticia.id}
            image={noticia.image}
            title={noticia.titulo}
            date={noticia.date}
            shortDescription={noticia.Shortdescription}
            setModal={() => setModal(noticia)}
          />
        ))}
        {modal ? (
          modal.premium ? (
            <PremiumModal
              setModal={() => setModal(null)}
              close={Close}
              signUpImage={AssinarImage}
            />
          ) : (
            <RegularModal
              setModal={() => setModal(null)}
              close={Close}
              image={modal.image}
              title={modal.titulo}
              description={modal.description}
            />
          )
        ) : null}
      </S.ListaNoticias>
    </S.ContainerNoticias>
  );
};

export default Noticias;

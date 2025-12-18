import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {

    return (
        <>
            <Heading>
                Blog do Leonardo
                <button><TimerIcon /></button>
            </Heading>
            <p>
                Olá, meu nome é Leonardo Paulino, seja muito bem-vindo
                ao
                meu blog pessoal! Aqui compartilho meus estudos,
                experiências e ideias sobre tecnologia, sempre em
                formato de
                artigos diretos e práticos.
                Fique à vontade para explorar o conteúdo e acompanhar
                minha
                evolução como desenvolvedor.
                Para saber mais sobre mim, clique aqui.
                Quer aprender como hospedei este blog usando GitHub
                Pages?
                Clique <a>aqui</a>.
                Dicas e sugestões são bem-vindos! Deixe seu comentário
                no meu
                <a
                    href="https://www.linkedin.com/in/leonardo-silva-paulino-6b3412191/"
                    target="_blank">LinkedIn</a>
            </p>
        </>
    );
}

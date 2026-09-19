// Marcador determinístico: o critério 5 do ensaio (#2022) confere o CORPO da
// resposta, não o status — `health-check.ts` aceita qualquer status como vivo.
const MARKER = 'uqbitz-example-react-vite-v1';
const BUILT_AT = new Date().toISOString();

export default function Home() {
  return (
    <>
      <h1>React 19 + Vite, publicado pela CLI</h1>
      <p>
        Esta página é o ensaio de publicação estática da UQBITZ: repositório
        vinculado com <code>uqbitz git link</code>, comandos de build gravados
        com <code>uqbitz projects set</code> e publicação com{' '}
        <code>uqbitz deploy</code>.
      </p>
      <dl>
        <dt>Marcador</dt><dd data-uqbitz-marker>{MARKER}</dd>
        <dt>Framework</dt><dd>react-vite</dd>
        <dt>Modo</dt><dd>estático (dist/)</dd>
        <dt>Build</dt><dd>{BUILT_AT}</dd>
      </dl>
    </>
  );
}

# Workflow Padrão: Setup e Deploy de Novas LPs de Prospecção

Este documento descreve o fluxo de trabalho exato de ponta a ponta para pegar este template base e gerar rapidamente uma nova Landing Page de alta conversão para um novo lead.

## Passo 1: Duplicação do Projeto (Setup Inicial)
1. Crie uma cópia/fork deste projeto base no AI Studio (ou faça um clone do repositório se estiver usando git local).
2. Nomeie o novo projeto com o nome do lead para facilitar a organização (ex: `LP Prospect - Clinica Sorriso`).

## Passo 2: Configuração das Variáveis de Ambiente (.env)
A LP precisa de chaves seguras para Analytics e Notificações que não devem ir no código direto.
1. Localize ou crie o arquivo `.env` (baseado no `.env.example`).
2. Preencha as credenciais:
   ```env
   # Notificações de Formulário (se houver captação ativa)
   VITE_WEB3FORMS_ACCESS_KEY="sua_chave_do_web3forms"
   
   # Analytics de Comportamento e Sessão
   VITE_POSTHOG_KEY="sua_chave_do_projeto_no_posthog"
   VITE_POSTHOG_HOST="https://us.i.posthog.com"
   ```

## Passo 3: Adaptação de Dados e Conteúdo (`src/data.ts`)
Toda a inteligência e conteúdo da página está centralizada em **um único arquivo**.

> 💡 **ATALHO COM A IA (Altamente Recomendado)**:  
> Você **PODE e DEVE** enviar os links do **Google Maps** e do **Instagram** do lead no chat. Basta pedir algo como: *"Agente, leia estes links (Maps, Instagram e/ou Site) e adapte esta LP para o lead"*. O agente irá acessar as fontes, identificar o nicho, criar uma copy focada, puxar fotos e já popular as seções de Serviços, Depoimentos e FAQ automaticamente para você em instantes!

Caso prefira (ou precise) fazer um ajuste manual ou revisão final:
1. Abra o arquivo `src/data.ts`.
2. Verifique ou substitua as informações coletadas para o lead:
   - **`seo`**: Atualize o nome que vai aparecer na aba do mapa e a descrição curta. *(Lembre-se: O SEO é trocado automaticamente graças ao hook `useSEO` e os metadados para envio no WhatsApp já vão puxar essa configuração)*.
   - **`contact`**: Coloque o número do WhatsApp correto do lead. A `FloatingWhatsApp` reage a isso automaticamente.
   - **`hero`**: Ajuste a Promessa Principal (Headline) para algo irresistível ao nicho do prospect.
   - **`about`, `services`, `space`, `gallery`, `pricing`, `faq`, `testimonials`**: Preencha as seções com textos voltados à realidade e dores do negócio do lead.
   - **Imagens**: Atualize as URLs das imagens com fotos reais do local (pegas no Maps/Instagram) ou use bancos de imagens de alta qualidade que representem o espaço.

## Passo 4: Identidade Visual (Cores)
O template base usa um tom Dourado/Areia (ex: `#B68D5D`) e fundos da paleta `slate`. Para conectar com a marca do lead:
*(Nota: Se você enviou o Instagram/Site no Passo 3, nós já devemos ter ajustado a cor de destaque para você!)*

Se precisar ajustar na mão:
1. Encontre a cor primária da marca do prospect (via site, logo ou instagram).
2. Substitua as ocorrências da cor hexadecimal na base do projeto (especialmente em `src/data.ts` se houver cores configuradas lá, ou nas classes do Tailwind ao longo dos componentes).
3. Se quiser alterar a cor de fundo dos botões principais, procure por `bg-[#B68D5D]` ou `bg-slate-900` e troque pela cor principal da nova marca.

## Passo 5: Geração de URL Personalizada (O "Efeito Uau")
Nunca envie o link "puro". Use o parâmetro que ativa o **DemoBanner** para dar o sentimento de exclusividade.
1. Pegue a URL final de visualização.
2. Adicione ao final da URL: `?lead=NOME_DO_NEGÓCIO`
3. *Exemplo:* `https://seu-app-deployado.com/?lead=Clínica%20Sorriso`
4. Isso fará o topo da página dizer: *"DEMONSTRAÇÃO EXCLUSIVA, criada para Clínica Sorriso"*.

## Passo 6: Deploy no GitHub e Cloudflare (Subdomínio)
1. **Exportação**: Exporte o código do projeto para um novo repositório no seu GitHub.
2. **DNS no Cloudflare**: Acesse o painel do Cloudflare (onde o domínio `unicain.com.br` está gerenciado) e crie um novo registro **CNAME** apontando o subdomínio do lead (ex: `clinicasorriso`) para o servidor do GitHub Pages (geralmente `seu-usuario.github.io`).
3. **GitHub Pages + Custom Domain**: No repositório do GitHub, vá na aba *Settings* > *Pages*. Configure o deploy da aplicação (seja exportando a branch `main`/pasta `dist` ou via GitHub Actions para Vite). Depois, na seção **Custom domain**, insira o subdomínio completo (ex: `clinicasorriso.unicain.com.br`), clique em *Save* e aguarde a plataforma emitir o certificado SSL/HTTPS.

## Passo 7: Teste, Disparo e Follow-up
1. **Teste**: Acesse a URL do subdomínio criado (ex: `https://clinicasorriso.unicain.com.br`). Abra o painel do seu **PostHog** e confirme se a sua sessão apareceu ao vivo na aba "Live Events" ou "Recordings".
2. **Disparo**: Mande a mensagem de prospecção fria incluindo a URL oficial que você criou com o parâmetro `?lead=`. 
   *(Ex: `https://clinicasorriso.unicain.com.br/?lead=Clínica%20Sorriso`)*
3. **Follow-up**: Monitore no PostHog quando o lead abrir a página. As métricas de *scroll* até 70% ou cliques nas seções de Preços indicarão o pico de interesse, que é o gatilho perfeito para você disparar a segunda mensagem no WhatsApp.

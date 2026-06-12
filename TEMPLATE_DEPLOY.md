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

## Passo 4: Troca de Imagens e Tamanhos Recomendados
As imagens são fundamentais para dar a cara do negócio na Landing Page. Todas elas estão referenciadas no arquivo `src/data.ts`.

**Tamanhos e Formatos Recomendados:**
- **Logo (`logoUrl`)**: Quadrado ou Horizontal. Use com fundo transparente (PNG ou WebP).
- **Banner Inicial (`heroImageUrl`)**: Retangular / Paisagem (ex: 1920x1080 px) ou Quadrado de alta resolução. O layout se adapta bem.
- **Foto do Profissional (`aboutImageUrl`)**: Retrato (Vertical) ou Quadrado (ex: 800x1000 px ou 800x800). A imagem será cortada para caber perfeitamente no container.
- **Estrutura / Espaço (`spaceImage1`, `spaceImage2`, `spaceImage3`)**: Idealmente Quadrado ou Paisagem (ex: 800x800 px ou 1080x768). O layout vai cortar automaticamente em um formato quadrado perfeito (`aspect-square`).
- **Galeria (`galleryImage1Url` a `galleryImage4Url`)**:
  - Imagens 1 e 4: Ideais em formato Retangular/Paisagem (ex: 16:9 ou 2:1, como 1920x1080px). No layout de desktop elas ficam mais compridas para dar um efeito dinâmico.
  - Imagens 2 e 3: Ideais em formato Quadrado (1:1, ex: 1080x1080px). Ficam como "blocos" menores centralizados.
  *Nota: O layout usa imagens que preenchem (object-cover), então formatos levemente diferentes serão cortados automaticamente para caber sem amassar.*

Existem duas formas de colocar as imagens do lead:
1. **Via URL Direta (Recomendado e mais rápido)**: Copie o link de uma imagem do Instagram ou do Google Maps do lead e cole na propriedade correspondente em `src/data.ts` (ex: `imageUrl: 'https://exemplo.com/foto.jpg'`).
2. **Via Upload (Para fotos locais)**: Faça o upload do arquivo da imagem arrastando-o para a pasta `/public` do projeto. Depois, em `src/data.ts`, referencie apenas o nome do arquivo com uma barra na frente (ex: `imageUrl: '/fachada.jpg'`).
3. **Via Google Drive (Útil para compartilhar arquivos)**: Se a imagem estiver no Google Drive, certifique-se de que o acesso está como "Qualquer pessoa com o link". Pegue o link de compartilhamento (ex: `https://drive.google.com/file/d/SEU_ID_AQUI/view?usp=sharing`). No arquivo `src/data.ts`, você precisa alterar o formato do link para baixar a imagem diretamente, mudando `/file/d/ID/view...` para `/uc?export=view&id=ID` (ex: `imageUrl: 'https://drive.google.com/uc?export=view&id=SEU_ID_AQUI'`).

**Onde as imagens ficam no `src/data.ts`:**
- **`lpData.theme.logoUrl`**: O Logotipo principal da clínica/negócio (fica no topo).
- **`lpData.hero.imageUrl`**: A imagem grande de destaque, que fica no topo ao lado do título (Hero).
- **`lpData.about.imageUrl`**: A foto do profissional ou da equipe na seção "Sobre Nós".
- **`lpData.gallery.items[...].thumbnailUrl`**: As 4 fotos menores que compõem a seção "Galeria / Benefícios".
- **`lpData.space.images[...].url`**: As 3 imagens principais da seção "Conheça o Espaço / Estrutura".

## Passo 5: Identidade Visual (Cores)
O template base usa um tom Dourado/Areia (ex: `#B68D5D`) e fundos da paleta `slate`. Para conectar com a marca do lead:
*(Nota: Se você enviou o Instagram/Site no Passo 3, nós já devemos ter ajustado a cor de destaque para você!)*

Se precisar ajustar na mão:
1. Encontre a cor primária da marca do prospect (via site, logo ou instagram).
2. Substitua as ocorrências da cor hexadecimal na base do projeto (especialmente em `src/data.ts` se houver cores configuradas lá, ou nas classes do Tailwind ao longo dos componentes).
3. Se quiser alterar a cor de fundo dos botões principais, procure por `bg-[#B68D5D]` ou `bg-slate-900` e troque pela cor principal da nova marca.

## Passo 5: Geração de URL Personalizada (O "Efeito Uau") e Integração com Planilha (Nível 2)
Para ganhar escala (gerar diversas LPs sem duplicar o código), utilizamos a infraestrutura de **Google Sheets (CSV)**.

**Como funciona a Automação por Planilha (Nível 2):**
1. Crie uma planilha no Google Sheets com as seguintes colunas (exatamente com estes nomes na primeira linha):
   `leadId`, `name`, `primaryColor`, `secondaryColor`, `backgroundColor`, `textColor`, `logoUrl`, `heroImageUrl`, `instagramUrl`, `instagramHandle`, `googleMapsLink`, `address`, `workingHours`, `whatsappNumber`, `whatsappMessage`, `role`, `aboutImageUrl`, `bio`, `aboutCredential1`, `aboutCredential2`, `aboutCredential3`, `headline`, `subheadline`, `testimonial1Name`, `testimonial1Text`, `testimonial2Name`, `testimonial2Text`, `testimonial3Name`, `testimonial3Text`, `service1Title`, `service1Desc`, `service2Title`, `service2Desc`, `service3Title`, `service3Desc`, `service4Title`, `service4Desc`, `spaceTitle`, `spaceSubtitle`, `spaceDescription`, `spaceImage1`, `spaceImage2`, `spaceImage3`, `galleryImage1Url`, `galleryImage1Caption`, `galleryImage2Url`, `galleryImage2Caption`, `galleryImage3Url`, `galleryImage3Caption`, `galleryImage4Url`, `galleryImage4Caption`, `faq1Question`, `faq1Answer`, `faq2Question`, `faq2Answer`, `faq3Question`, `faq3Answer`.
2. Preencha uma linha para cada lead. A coluna `leadId` deve ser o identificador único na URL (ex: `clinica_sorriso`).
3. No Google Sheets, vá em **Arquivo > Compartilhar > Publicar na Web**. Escolha a aba da sua planilha e mude o formato para **Valores separados por vírgula (.csv)**. Clique em Publicar e copie o link gerado.
4. Volte para o projeto e cole esse link no arquivo `.env` na variável `VITE_GOOGLE_SHEET_CSV_URL`.
5. Agora, apenas enviando o link com o parâmetro `?lead=clinica_sorriso`, a LP automaticamente buscará os dados da planilha e substituirá as cores, imagens, endereço e links específicos deste lead (mantendo o resto do layout e textos padrão do *Ateliê do Movimento* como base).

**Aviso:** O DemoBanner continuará usando o parâmetro `?lead=` para imprimir o título (ex: *"DEMONSTRAÇÃO EXCLUSIVA, criada para clinica_sorriso"*).

## Passo 6: Deploy no GitHub e Cloudflare (Subdomínio)
1. **Exportação**: Exporte o código do projeto para um novo repositório no seu GitHub.
2. **Visibilidade do Repositório**: Certifique-se de que o repositório no GitHub está como **Public** (Público). Repositórios privados, dependendo do plano, não permitem o uso gratuito do GitHub Pages. Para alterar, vá em *Settings* > *General* > *Change repository visibility* no final da página.
3. **Configuração de Build and Deployment**: No repositório, vá em *Settings* > *Pages*. Em **Build and deployment**, na opção **Source**, selecione **GitHub Actions**. Isso ativará o workflow que compila a aplicação (`deploy.yml`).
4. **DNS no Cloudflare**: Acesse o painel do Cloudflare (onde o domínio `unicain.com.br` está gerenciado) e crie um novo registro **CNAME** apontando o subdomínio do lead (ex: `clinicasorriso`) para o servidor do GitHub Pages (geralmente `seu-usuario.github.io`).
5. **GitHub Pages + Custom Domain**: Ainda na aba *Settings* > *Pages* do GitHub, após selecionar GitHub Actions e ele rodar com sucesso, desça até a opção **Custom domain**. Insira o subdomínio completo (ex: `clinicasorriso.unicain.com.br`), clique em *Save* e aguarde a plataforma emitir o certificado SSL/HTTPS.

## Passo 7: Teste, Disparo e Follow-up
1. **Teste**: Acesse a URL do subdomínio criado (ex: `https://clinicasorriso.unicain.com.br`). Abra o painel do seu **PostHog** e confirme se a sua sessão apareceu ao vivo na aba "Live Events" ou "Recordings".
2. **Disparo**: Mande a mensagem de prospecção fria incluindo a URL oficial que você criou com o parâmetro `?lead=`. 
   *(Ex: `https://clinicasorriso.unicain.com.br/?lead=Clínica%20Sorriso`)*
3. **Follow-up**: Monitore no PostHog quando o lead abrir a página. As métricas de *scroll* até 70% ou cliques nas seções de Preços indicarão o pico de interesse, que é o gatilho perfeito para você disparar a segunda mensagem no WhatsApp.

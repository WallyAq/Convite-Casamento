# Convite de Maria Bianca e Enderson

Convite personalizado em JavaScript puro, HTML e CSS, com layout baseado na página 2 do convite publicado por Studio Thaís Rhicci. As fotos fornecidas estão na pasta `assets`: os originais HEIC foram preservados e as versões JPEG são usadas no convite para compatibilidade com os navegadores.

## Abrir

Abra `index.html` diretamente no navegador ou execute:

```sh
npm start
```

Depois acesse `http://127.0.0.1:4173`. Não é necessário instalar dependências.

## Personalizar

Edite o objeto `convite` no início de `script.js`: nomes, pais, data, horário, endereço e links. Os estilos estão em `style.css`. O convite se adapta à largura da tela, até 1080 px. Em telas de até 600 px, os blocos acompanham a altura do conteúdo, com margens laterais de 24 px e botões de pelo menos 48 px de altura; em telas maiores, o layout mantém as proporções da referência.

Os botões de localização da igreja e do sítio abrem o Google Maps com buscas pelos nomes e endereços fornecidos nas imagens. A igreja é o Mosteiro de São Bento, na Rua Maria Ferreira dos Santos, 324, São Bento, Fortaleza/CE. O sítio é a Chácara Encanto das Anas, na Rua Paisagística, 530, Paupina/Messejana, Fortaleza/CE. Os botões de presença e presentes exibem uma orientação para falar com os noivos. Para conectá-los ao WhatsApp, formulário ou lista real, preencha `links.confirmacao` e `links.presentes` com as URLs completas.

O casamento está marcado para `18 / 03 / 2027`, quinta-feira, às `18H`. Os nomes completos dos noivos e o monograma foram personalizados. Os quatro nomes dos pais estão como `xxxxx`.

A música `assets/Eu e Minha Casa_spotdown.org.mp3` usa um único elemento de áudio, em repetição, com volume inicial de 35%. Há uma única tentativa automática ao abrir a página, desde o começo. Se o navegador bloquear, use o botão discreto de música; outros cliques no convite não iniciam o áudio. O botão indica os estados de reprodução, pausa, carregamento e erro.

Ao perder foco, ficar oculta ou sair da página (`blur`, `visibilitychange` e `pagehide`), a música pausa, inclusive se uma solicitação de reprodução ainda estiver pendente. Voltar à página não retoma o áudio. O botão permite continuar do mesmo ponto, inclusive ao voltar pelo histórico quando o navegador preserva a página.

Os elementos existentes recebem revelações suaves durante a rolagem por `IntersectionObserver`, com entrada sequencial dos nomes e dos botões. O monograma tem um movimento discreto, e botões e diálogos têm transições leves. As animações preservam as medidas e o layout; `prefers-reduced-motion` desativa os movimentos e mantém todo o conteúdo visível. Não há bibliotecas adicionais.

## Validação da experiência

Verificado no Chromium com o áudio real: autoplay permitido e bloqueado, uma única tentativa inicial, ativação e pausa pelo botão, ausência de reprodução ao clicar no convite, preservação do tempo e retomada manual. Foram simulados `blur`, `visibilitychange`, `pagehide` e o retorno por `pageshow`, inclusive com uma solicitação de reprodução ainda pendente. Nenhum desses retornos reinicia o áudio automaticamente.

As medidas do layout foram comparadas com a versão anterior em 320, 390, 600 e 1080 px, sem diferenças. Também foram conferidos revelações na rolagem, ausência de rolagem horizontal, diálogos, links, preferência de movimento reduzido no carregamento e durante o uso, e conteúdo visível quando `IntersectionObserver` não está disponível. O bloqueio físico da tela e a troca de aplicativos em aparelhos Android/iOS ainda precisam de verificação em dispositivo real; os eventos correspondentes foram simulados no navegador.


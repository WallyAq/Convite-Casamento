# Convite de Maria Bianca e Enderson

Convite personalizado em JavaScript puro, HTML e CSS, com layout baseado na página 2 do convite publicado por Studio Thaís Rhicci. As fotos fornecidas estão na pasta `assets`: os originais HEIC foram preservados e as versões JPEG são usadas no convite para compatibilidade com os navegadores.

## Abrir

Abra `index.html` diretamente no navegador ou execute:

```sh
npm start
```

Depois acesse `http://127.0.0.1:4173`. Não é necessário instalar dependências.

## Personalizar

Edite o objeto `convite` no início de `script.js`: nomes, pais, data, horário, endereço e links. Os estilos estão em `style.css`. O convite mantém as proporções da referência e se adapta à largura da tela, até 1080 px.

Os botões de localização da igreja e do sítio abrem o Google Maps com buscas pelos nomes e endereços fornecidos nas imagens. A igreja é o Mosteiro de São Bento, na Rua Maria Ferreira dos Santos, 324, São Bento, Fortaleza/CE. O sítio é a Chácara Encanto das Anas, na Rua Paisagística, 530, Paupina/Messejana, Fortaleza/CE. Os botões de presença e presentes exibem uma orientação para falar com os noivos. Para conectá-los ao WhatsApp, formulário ou lista real, preencha `links.confirmacao` e `links.presentes` com as URLs completas.

O casamento está marcado para `18 / 03 / 2027`, quinta-feira, às `18H`. Os nomes completos dos noivos e o monograma foram personalizados. Os quatro nomes dos pais estão como `xxxxx`.

A música `assets/Eu e Minha Casa_spotdown.org.mp3` toca em segundo plano, em repetição, com volume inicial de 35%, sem botão na página. A reprodução começa automaticamente quando o navegador permite; quando exige interação, a música começa no primeiro toque, clique ou uso de Enter/espaço no convite.


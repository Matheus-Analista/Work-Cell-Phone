# Work Cell Phone — Landing Page (demo)

Site de demonstração para a Work Cell Phone (assistência técnica de celulares, Luziânia - GO), feito para prospecção comercial.

Um único arquivo `index.html` (HTML + CSS + JS inline, sem dependências externas além do Google Fonts). Totalmente responsivo, do celular ao desktop.

## Publicar no GitHub Pages

1. Suba este repositório no GitHub (`index.html` já está na raiz, é o que o Pages procura).
2. Vá em **Settings → Pages**.
3. Em "Source", selecione a branch `main` e a pasta `/root`.
4. Salve. Em 1-2 minutos o link fica no ar, algo como `https://seu-usuario.github.io/nome-do-repo/`.

## Antes de mandar pro cliente — checklist

- [ ] Trocar o número de WhatsApp: abra `index.html`, procure por `WHATSAPP_NUMBER` no `<script>` no fim do arquivo, e troque `"5561XXXXXXXXX"` pelo número real (só dígitos, formato `55DDDNUMERO`). Um único lugar alimenta todos os botões do site.
- [ ] Confirmar o endereço completo das duas unidades (JK/Serrinha e Mandu) — hoje aparece `[CONFIRMAR ENDEREÇO COMPLETO]` na seção "Unidades".
- [ ] Confirmar o horário de funcionamento de cada unidade — hoje aparece `[CONFIRMAR HORÁRIO DE FUNCIONAMENTO]`.
- [ ] Confirmar/linkar Instagram e Facebook oficiais no rodapé — hoje são placeholders.
- [ ] (Opcional) Trocar o link "Avaliar no Google" pelo link real de avaliação do perfil no Google Maps.

## Estrutura

- Header fixo com navegação e CTA de WhatsApp
- Hero com identidade preto/dourado e animação sutil de "trilha de circuito"
- Serviços (troca de tela, placa, carga, bateria, acessórios)
- Como funciona (3 passos)
- Duas unidades com botão de WhatsApp cada
- CTA final + rodapé

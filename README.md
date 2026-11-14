# 🧪 DILUTE LAB

Calculadora de diluição para químicos, feita com HTML, CSS, JavaScript e TypeScript.

> ⚠️ **Projeto em desenvolvimento.** Esta é uma versão inicial, publicada para acompanhar a evolução do projeto.

## O que já funciona

- Cálculo de diluição a partir do volume final (0,5 mL ou 1,0 mL) e do fator de diluição (X2 a X100)
- Resultado com o volume de amostra e de solvente (em µL) e o volume final

**Como o cálculo é feito:** o fator X indica o total de partes. Ex.: X5 = 1 parte de amostra + 4 partes de solvente.

- Volume de amostra = volume final ÷ fator
- Volume de solvente = volume final − volume de amostra

Exemplo: volume final de 1 mL com fator X10 → 100 µL de amostra + 900 µL de solvente.

## Em desenvolvimento

- [ ] Botão "Modo bancada"
- [ ] Seções "Como preparar" e "Cálculo" (visualização e explicação passo a passo)
- [ ] Opção "Outro" para volume final e fator personalizados (ainda não funciona)
- [ ] Formatação e arredondamento dos resultados
- [ ] Alerta dinâmico para volumes muito pequenos
- [ ] Assistente de IA para auxiliar químicos e tirar dúvidas técnicas

## Assistente de IA (planejado)

A ideia é integrar um assistente de IA que ajude químicos com dúvidas técnicas sobre diluições e preparo de soluções. As respostas serão de apoio e deverão sempre ser conferidas antes do uso em laboratório.

## Como rodar

1. Clone o repositório:
   `git clone https://github.com/rafaellarosasilvacelio-hue/dilute-lab.git`
2. Abra a pasta no VS Code e execute com a extensão **Live Server**.
   (Abrir o `index.html` direto no navegador pode impedir o carregamento do JavaScript.)

## Aviso

Ferramenta de apoio e de estudo. Confira os resultados antes de utilizá-los em laboratório.

## Autor

Rafaella Rosa — estudante de Análise e Desenvolvimento de Sistemas.

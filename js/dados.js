// Dados da linha Durabem. Editar aqui para mudar banners, produtos, cores e textos.

const P = 'assets/produtos/';
const MET = (a, b) => `linear-gradient(135deg, ${a} 0%, ${b} 45%, ${a} 70%, ${b} 100%)`;

window.DURABEM = {
  slides: [
    { img: 'assets/banners/obra.jpg', alt: 'A força que sua obra exige, a confiança que sua loja precisa. A linha completa para profissionais e lojistas que não aceitam menos que a perfeição.' },
    { img: 'assets/banners/alicate.jpg', alt: 'Engenharia de Ponta e Alta Precisão. Alicate amperímetro Durabem.' },
    { img: 'assets/banners/solda.jpg', alt: 'Solda Forte, Acabamento Limpo. Eletrodos Durabem.' },
    { img: 'assets/banners/bomba.jpg', alt: 'Força Silenciosa para a Água Perfeita. Bomba d’água periférica Durabem.' },
  ],

  // FISPQ e Ficha Técnica por id de produto. Caminho do PDF (ex.: 'assets/fispq/espuma.pdf').
  // Vazio = o botão leva para a seção Contato.
  docs: {
    'espuma': { fispq: '', ficha: '' },
    'pu40': { fispq: '', ficha: '' },
    'silicone-cartucho': { fispq: '', ficha: '' },
    'silicone-bisnaga': { fispq: '', ficha: '' },
    'supercola': { fispq: '', ficha: '' },
    'lub': { fispq: '', ficha: '' },
    'spray': { fispq: '', ficha: '' },
  },

  produtos: [
    { id: 'espuma', img: P + 'espuma.png', tag: 'Adesivo de poliuretano', nome: 'Espuma Expansiva', attrs: ['Expande até 3x', 'Isolamento acústico', 'Isolamento elétrico', 'Montagem de batentes'], emb: 'Uso geral · 500 ml / 320 g' },
    { id: 'pu40', img: P + 'pu40.png', tag: 'Adesivo de construção', nome: 'PU40 Premium', attrs: ['Resistente aos raios UV', 'Vedação contra ar e água', 'Anti fungo', 'Pode ser pintado'], emb: 'Branco · 380 g' },
    { id: 'silicone-cartucho', img: P + 'silicone-cartucho.png', tag: 'Adesivo de silicone', nome: 'Silicone Acético Uso Geral', attrs: ['Alta flexibilidade', 'Vedação contra ar e água', 'Anti fungo', '-50 °C a +150 °C'], emb: 'Branco · cartucho 300 ml / 240 g' },
    { id: 'silicone-bisnaga', img: P + 'silicone-bisnaga.png', tag: 'Adesivo de silicone', nome: 'Silicone Uso Geral Bisnaga', attrs: ['Alta flexibilidade', 'Vedação contra ar e água', 'Anti fungo', '-50 °C a +150 °C'], emb: 'Bisnaga 50 g' },
    { id: 'supercola', img: P + 'supercola.png', tag: 'Adesivo instantâneo', nome: 'Adesivo Instantâneo', attrs: ['Viscosidade média', 'Secagem rápida', 'Resistente a quente e frio', 'Forte adesão'], emb: 'Bisnaga 20 g' },
    { id: 'lub', img: P + 'lubrificante.png', tag: 'Óleo desengripante e lubrificante', nome: 'Dura Lub', attrs: ['Protege', 'Lubrifica', 'Anticorrosivo', 'Expulsa umidade'], emb: '300 ml / 180 g' },
  ],

  // Linha Spray Premium: [nome, amostra (cor ou gradiente), arquivo da lata em assets/produtos]
  spray: {
    geral: { nome: 'Uso Geral', cores: [
      ['Amarelo', '#F2C200', 'spray-amarelo'], ['Laranja', '#EE7A1A', 'spray-laranja'], ['Vermelho', '#C8102E', 'spray-vermelho'], ['Violeta', '#6B3A8E', 'spray-violeta'],
      ['Verde', '#2E9A47', 'spray-verde'], ['Marrom', '#6B3E23', 'spray-marrom'], ['Branco Fosco', '#EEEDE7', 'spray-branco-fosco'], ['Preto Fosco', '#262626', 'spray-preto-fosco'],
      ['Preto Brilho', '#0A0A0A', 'spray-preto-brilho'], ['Verniz Incolor Brilho', 'linear-gradient(135deg, #f3ead2, #d9c9a0)', 'spray-verniz'],
    ] },
    met: { nome: 'Metálico', prefixo: 'Metálico · ', cores: [
      ['Dourado', MET('#a8822a', '#f0d77c'), 'spray-dourado'],
      ['Azul', MET('#1d4f8f', '#6a9ad6'), 'spray-met-azul'],
      ['Vermelho', MET('#8a1020', '#e04a5a'), 'spray-met-vermelho'],
    ] },
  },

  // Fotos dos tiles e posts: preencher `img` quando houver foto. Vazio = placeholder.
  tiles: [
    { nome: 'Ferramentas', img: '', ph: 'Foto: ferramentas em uso' },
    { nome: 'Chaves', img: '', ph: 'Foto: jogo de chaves' },
    { nome: 'Acessórios', img: '', ph: 'Foto: alicates e acessórios' },
  ],

  categorias: ['Abrasivos', 'Adesivos, lubrificantes, tintas e impermeabilizantes', 'Limpeza', 'Cuidados automotivos', 'Equipamentos e acessórios para pintura', 'Ferramentas de corte', 'Ferramentas manuais', 'Construção civil', 'Elétrica e iluminação', 'Jardim e pulverização', 'Ferragens', 'Fitas', 'Fixadores', 'Medição', 'EPI e segurança', 'Solda'],

  // Textos dos posts vieram do design como provisórios (repetem os destaques).
  posts: [
    { img: '', ph: 'Foto: parafusos cabeça hexagonal', titulo: 'Nova linha de Parafusos com cabeça hexagonal', texto: 'Não deixe a temperatura subir sem ter onde se refrescar. Para garantir água limpa, cristalina e em movimento o verão inteiro, você precisa de um equipamento que aguente o ritmo.' },
    { img: '', ph: 'Foto: pregos de aço', titulo: 'Pregos de aço, seu reforço na obra.', texto: 'Na Durabem, entendemos que o sucesso do seu comércio de material de construção depende de produtos que combinam giro rápido e satisfação do cliente.' },
    { img: '', ph: 'Foto: eletrodos e solda', titulo: 'Eletrodos Durabem', texto: 'Não deixe sua obra parar por falta de acessórios de qualidade. As Brocas Durabem são fabricadas com materiais de alta resistência, garantindo que você tenha em mãos um produto que suporta altas temperaturas e o impacto constante do dia a dia profissional.' },
  ],
};

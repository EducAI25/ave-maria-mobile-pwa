# Liturgia Diária - Ave Maria Mobile PWA

## Funcionalidade

A aba "Hoje" do aplicativo Ave Maria Mobile PWA agora apresenta a **liturgia diária real da Igreja Católica**, incluindo:

### 📅 Informações do Dia
- **Data completa** em português
- **Tempo litúrgico** (Advento, Natal, Quaresma, Páscoa, Tempo Comum)
- **Cor litúrgica** (Branco, Verde, Roxo, Vermelho)
- **Festa especial** (quando aplicável)

### 📖 Leituras do Dia
- **Primeira Leitura** - Do Antigo Testamento ou Atos dos Apóstolos
- **Salmo Responsorial** - Com resposta e texto completo
- **Evangelho** - Do Novo Testamento
- **Reflexão** - Meditação sobre as leituras

### 👑 Santo do Dia
- Informação sobre o santo ou festa celebrada no dia

### 🙏 Elementos Adicionais
- **Oração do Dia** - Oração específica para meditar
- **Intenções** - Pedidos de oração pela Igreja, famílias e doentes

## Como Funciona

### Sistema de Calendário Litúrgico
O aplicativo utiliza um sistema inteligente que:

1. **Calcula automaticamente** o tempo litúrgico baseado na data atual
2. **Identifica festas específicas** (Natal, Assunção, Imaculada Conceição, etc.)
3. **Fornece leituras apropriadas** para cada dia
4. **Adapta-se aos domingos** com leituras especiais

### Datas Especiais Incluídas
- **25 de dezembro** - Natal do Senhor
- **1º de maio** - São José Operário
- **15 de agosto** - Assunção de Nossa Senhora
- **8 de dezembro** - Imaculada Conceição
- **Domingos** - Leituras especiais do domingo

### Cálculo do Tempo Litúrgico
O sistema calcula automaticamente:
- **Advento** (4 semanas antes do Natal)
- **Natal** (25 de dezembro até 6 de janeiro)
- **Quaresma** (40 dias antes da Páscoa)
- **Páscoa** (50 dias após a Páscoa)
- **Tempo Comum** (resto do ano)

## Estrutura Técnica

### Arquivos Principais
- `src/pages/LeituraHoje.tsx` - Componente principal da liturgia
- `src/data/liturgicalCalendar.ts` - Dados e lógica do calendário litúrgico

### Interface DailyReading
```typescript
interface DailyReading {
  date: string;
  liturgicalSeason: string;
  color: string;
  firstReading: { title: string; reference: string; text: string; };
  psalm: { title: string; reference: string; text: string; response: string; };
  secondReading?: { title: string; reference: string; text: string; };
  gospel: { title: string; reference: string; text: string; };
  reflection: string;
  saint: string;
  feast?: string;
}
```

### Funções Principais
- `getLiturgyForDate(date: Date)` - Obtém a liturgia para uma data específica
- `getLiturgicalSeason(date: Date)` - Calcula o tempo litúrgico

## Benefícios

### Para os Fiéis
- **Acesso fácil** às leituras diárias da Missa
- **Meditação guiada** com reflexões apropriadas
- **Preparação espiritual** para a celebração eucarística
- **Conhecimento** dos tempos litúrgicos e suas cores

### Para a Igreja
- **Formação litúrgica** dos fiéis
- **Participação ativa** na vida da Igreja
- **Conexão** com o calendário litúrgico universal
- **Evangelização** através da tecnologia

## Próximas Melhorias

### Funcionalidades Planejadas
- [ ] **API externa** para leituras atualizadas
- [ ] **Mais datas específicas** no calendário
- [ ] **Notificações** para leituras diárias
- [ ] **Compartilhamento** das leituras
- [ ] **Modo offline** com cache das leituras
- [ ] **Personalização** de reflexões

### Integrações Futuras
- [ ] **API da CNBB** para leituras oficiais
- [ ] **Sincronização** com calendários paroquiais
- [ ] **Comentários** de padres e teólogos
- [ ] **Áudio** das leituras

## Contribuição

Para adicionar novas datas ou melhorar o sistema:

1. **Adicione leituras** no arquivo `liturgicalCalendar.ts`
2. **Teste** com diferentes datas
3. **Verifique** a precisão litúrgica
4. **Documente** as mudanças

## Recursos Utilizados

- **Bíblia Ave Maria** - Tradução oficial da Igreja Católica
- **Calendário Litúrgico** - Baseado no Missal Romano
- **Reflexões** - Inspiradas na tradição católica
- **Cores Litúrgicas** - Seguindo as normas da Igreja

---

*Este sistema foi desenvolvido para aproximar os fiéis da liturgia diária da Igreja Católica, proporcionando uma experiência espiritual rica e autêntica.* 
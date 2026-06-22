"use client"

import {
  Brain,
  Sparkle,
  Bone,
  Lightbulb,
  Heart,
  House,
  Users,
} from "@phosphor-icons/react"
import { ServiceBlock } from "@/components/servicos/service-block"

const SERVICES = [
  {
    icon: Brain,
    title: "Reabilitação neurológica",
    subtitle: "Cuidado para recuperar funcionalidade e ampliar participação",
    body: [
      "A reabilitação neurológica é indicada para adultos e idosos que apresentam alterações causadas por condições neurológicas e percebem impacto na rotina, no movimento, na cognição ou na independência.",
      "O atendimento busca favorecer estratégias práticas para que a pessoa tenha mais autonomia nas atividades do cotidiano, com intervenções alinhadas à sua realidade e ao seu nível funcional.",
    ],
  },
  {
    icon: Sparkle,
    title: "Reabilitação pós-AVC",
    subtitle: "Apoio terapêutico para reconstruir rotina e independência",
    body: [
      "Após um AVC, a vida cotidiana costuma exigir novas formas de fazer tarefas, organizar o tempo e lidar com limitações. A Terapia Ocupacional atua justamente nessa reconstrução.",
      "O objetivo é ajudar a pessoa a recuperar funções, adaptar atividades, fortalecer segurança e retomar participação de forma possível e progressiva.",
    ],
  },
  {
    icon: Bone,
    title: "Reabilitação ortopédica",
    subtitle: "Adaptação, retomada e mais conforto no dia a dia",
    body: [
      "A reabilitação ortopédica é indicada quando dores, limitações físicas ou perdas funcionais afetam o desempenho ocupacional e a realização de tarefas básicas.",
      "O atendimento trabalha para reduzir o impacto dessas mudanças na rotina, encontrar estratégias mais funcionais e apoiar o retorno às atividades com mais segurança.",
    ],
  },
  {
    icon: Lightbulb,
    title: "Estimulação cognitiva",
    subtitle: "Manter e fortalecer funções importantes para a vida prática",
    body: [
      "A estimulação cognitiva é voltada a atenção, memória, organização, raciocínio e outras habilidades que sustentam a autonomia e a participação no cotidiano.",
      "Esse trabalho é especialmente importante em contextos de envelhecimento, quadros demenciais ou mudanças cognitivas que começam a interferir na rotina.",
    ],
  },
  {
    icon: Heart,
    title: "Saúde mental",
    subtitle: "Organizar a rotina e sustentar o bem-estar emocional",
    body: [
      "Quando a saúde mental interfere na vida prática, na disposição ou na capacidade de manter uma rotina estável, a Terapia Ocupacional pode ser um suporte importante.",
      "O atendimento ajuda a reorganizar atividades, construir estratégias de participação e criar condições mais favoráveis para viver o dia a dia com mais equilíbrio.",
    ],
  },
  {
    icon: House,
    title: "Atendimento domiciliar",
    subtitle: "Cuidado no ambiente real da vida da pessoa",
    body: [
      "O atendimento domiciliar é indicado quando a presença no domicílio favorece melhor compreensão da rotina, da mobilidade, da funcionalidade e dos desafios concretos da pessoa.",
      "Esse formato permite um olhar mais preciso para a realidade do paciente e facilita intervenções mais conectadas ao cotidiano.",
    ],
  },
  {
    icon: Users,
    title: "Orientação para familiares e cuidadores",
    subtitle: "Apoio para quem cuida também se sentir seguro",
    body: [
      "O cuidado muitas vezes envolve família e cuidadores, que precisam de direção prática para lidar com a rotina, estimular autonomia e oferecer apoio de forma mais organizada.",
      "Quando necessário, o atendimento inclui orientações claras e objetivas para ajudar nesse processo.",
    ],
  },
]

export function ServicosGrid() {
  return (
    <section className="py-16 px-6 bg-background" aria-label="Serviços oferecidos">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SERVICES.map((service, i) => (
          <ServiceBlock key={service.title} {...service} index={i} />
        ))}
      </div>
    </section>
  )
}

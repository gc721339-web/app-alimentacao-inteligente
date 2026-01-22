"use client"

import { useState } from "react"
import { Sparkles, Heart, Droplets, Apple, Moon, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function NutritionTips() {
  const [likedTips, setLikedTips] = useState<number[]>([])

  const categories = [
    { id: "basico", label: "Básico", icon: Apple },
    { id: "hidratacao", label: "Hidratação", icon: Droplets },
    { id: "sono", label: "Sono", icon: Moon },
    { id: "habitos", label: "Hábitos", icon: TrendingUp },
  ]

  const tips = {
    basico: [
      {
        id: 1,
        title: "Coma devagar e mastigue bem",
        description: "Mastigar bem os alimentos ajuda na digestão e te faz sentir satisfeito mais rápido. Tente fazer pelo menos 20 mastigadas por garfada!",
        icon: "🍽️",
        benefit: "Melhora a digestão e evita comer demais"
      },
      {
        id: 2,
        title: "Metade do prato de vegetais",
        description: "Uma dica simples: tente preencher metade do seu prato com vegetais coloridos. Quanto mais cores, mais nutrientes!",
        icon: "🥗",
        benefit: "Mais vitaminas e fibras na sua alimentação"
      },
      {
        id: 3,
        title: "Não pule o café da manhã",
        description: "O café da manhã dá energia para começar o dia. Não precisa ser elaborado - uma fruta com aveia já é ótimo!",
        icon: "☕",
        benefit: "Mais energia e foco durante o dia"
      },
      {
        id: 4,
        title: "Proteína em todas as refeições",
        description: "Inclua uma fonte de proteína (ovos, frango, peixe, feijão) em cada refeição. Ela te mantém saciado por mais tempo.",
        icon: "🥚",
        benefit: "Menos fome entre as refeições"
      }
    ],
    hidratacao: [
      {
        id: 5,
        title: "Beba água ao acordar",
        description: "Comece o dia com um copo de água. Seu corpo passou horas sem líquido durante o sono!",
        icon: "💧",
        benefit: "Ativa o metabolismo e hidrata"
      },
      {
        id: 6,
        title: "Tenha uma garrafinha sempre por perto",
        description: "Deixe uma garrafa de água na sua mesa ou bolsa. Ver a água te lembra de beber!",
        icon: "🚰",
        benefit: "Facilita manter a hidratação"
      },
      {
        id: 7,
        title: "Chás e água saborizada contam",
        description: "Não gosta de água pura? Adicione rodelas de limão, hortelã ou faça chás gelados sem açúcar.",
        icon: "🍋",
        benefit: "Torna a hidratação mais gostosa"
      },
      {
        id: 8,
        title: "Xixi clarinho é bom sinal",
        description: "A cor da urina indica hidratação. Quanto mais clara, melhor! Amarelo escuro significa que precisa beber mais água.",
        icon: "✨",
        benefit: "Indicador fácil de hidratação"
      }
    ],
    sono: [
      {
        id: 9,
        title: "Jantar leve e cedo",
        description: "Evite refeições pesadas perto da hora de dormir. Tente jantar pelo menos 2 horas antes de deitar.",
        icon: "🌙",
        benefit: "Melhora a qualidade do sono"
      },
      {
        id: 10,
        title: "Evite cafeína à tarde",
        description: "Café, chá preto e refrigerantes têm cafeína. Evite depois das 16h para não atrapalhar o sono.",
        icon: "☕",
        benefit: "Facilita adormecer à noite"
      },
      {
        id: 11,
        title: "Chá calmante antes de dormir",
        description: "Camomila, erva-cidreira ou melissa são ótimos para relaxar. Tome morno, sem açúcar.",
        icon: "🍵",
        benefit: "Relaxa e prepara para o sono"
      }
    ],
    habitos: [
      {
        id: 12,
        title: "Faça um lanche saudável entre refeições",
        description: "Frutas, castanhas ou iogurte natural são ótimas opções. Evita aquela fome exagerada na próxima refeição.",
        icon: "🍎",
        benefit: "Mantém energia constante"
      },
      {
        id: 13,
        title: "Cozinhe em casa sempre que possível",
        description: "Comida caseira é mais saudável e econômica. Comece com receitas simples e rápidas!",
        icon: "👨‍🍳",
        benefit: "Mais controle sobre ingredientes"
      },
      {
        id: 14,
        title: "Leia os rótulos dos alimentos",
        description: "Olhe a lista de ingredientes. Se tiver muitos nomes estranhos, provavelmente é muito processado.",
        icon: "🏷️",
        benefit: "Escolhas mais conscientes"
      },
      {
        id: 15,
        title: "Coma sem distrações",
        description: "Desligue a TV e o celular durante as refeições. Preste atenção no que está comendo e aproveite!",
        icon: "📵",
        benefit: "Maior satisfação e menos exageros"
      },
      {
        id: 16,
        title: "Planeje suas refeições",
        description: "Reserve um tempo no fim de semana para planejar o que vai comer. Evita decisões de última hora e fast food.",
        icon: "📝",
        benefit: "Economia de tempo e dinheiro"
      }
    ]
  }

  const handleLikeTip = (tipId: number) => {
    setLikedTips(prev =>
      prev.includes(tipId) ? prev.filter(id => id !== tipId) : [...prev, tipId]
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500 p-3 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Dicas de Nutrição e Hábitos</h2>
            <p className="text-gray-600">
              Informações simples e práticas para você comer melhor e viver com mais saúde! 💚
            </p>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <p className="text-3xl font-bold text-purple-600">{Object.values(tips).flat().length}</p>
          <p className="text-sm text-gray-600 mt-1">Dicas disponíveis</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl font-bold text-pink-600">{likedTips.length}</p>
          <p className="text-sm text-gray-600 mt-1">Dicas salvas</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl font-bold text-emerald-600">4</p>
          <p className="text-sm text-gray-600 mt-1">Categorias</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl font-bold text-orange-600">100%</p>
          <p className="text-sm text-gray-600 mt-1">Sem frescura</p>
        </Card>
      </div>

      {/* Tips Tabs */}
      <Tabs defaultValue="basico" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-white/80 backdrop-blur-sm border border-purple-100 p-1">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id}
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
            >
              <cat.icon className="w-4 h-4 mr-2" />
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="space-y-4">
            {tips[cat.id as keyof typeof tips].map((tip) => (
              <Card
                key={tip.id}
                className="p-6 hover:shadow-lg transition-all border-purple-100"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{tip.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-800">{tip.title}</h3>
                      <button
                        onClick={() => handleLikeTip(tip.id)}
                        className={`transition-colors ${
                          likedTips.includes(tip.id)
                            ? "text-pink-500"
                            : "text-gray-300 hover:text-pink-400"
                        }`}
                      >
                        <Heart
                          className="w-6 h-6"
                          fill={likedTips.includes(tip.id) ? "currentColor" : "none"}
                        />
                      </button>
                    </div>
                    <p className="text-gray-700 mb-3">{tip.description}</p>
                    <Badge className="bg-emerald-100 text-emerald-700">
                      ✓ {tip.benefit}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      {/* Motivation Card */}
      <Card className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🌟</span>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Lembre-se:</h3>
            <p className="text-gray-700 mb-2">
              Pequenas mudanças fazem grande diferença! Não precisa fazer tudo de uma vez.
            </p>
            <p className="text-gray-700">
              Escolha 1 ou 2 dicas para começar e vá incorporando aos poucos. Você consegue! 💪
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Trophy, Target, CheckCircle2, Circle, Flame, Droplets, Utensils } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface Challenge {
  id: string
  title: string
  description: string
  duration: string
  icon: string
  goal: number
  current: number
  active: boolean
  completed: boolean
  reward: string
}

export default function Challenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: "water",
      title: "7 Dias Bebendo Mais Água",
      description: "Beba pelo menos 2 litros de água por dia durante uma semana",
      duration: "7 dias",
      icon: "💧",
      goal: 7,
      current: 0,
      active: false,
      completed: false,
      reward: "Pele mais bonita e mais energia!"
    },
    {
      id: "homemade",
      title: "3 Refeições Caseiras na Semana",
      description: "Cozinhe em casa pelo menos 3 vezes esta semana",
      duration: "7 dias",
      icon: "👨‍🍳",
      goal: 3,
      current: 0,
      active: false,
      completed: false,
      reward: "Economia e saúde em dobro!"
    },
    {
      id: "breakfast",
      title: "Café da Manhã Todos os Dias",
      description: "Não pule o café da manhã durante 5 dias seguidos",
      duration: "5 dias",
      icon: "☕",
      goal: 5,
      current: 0,
      active: false,
      completed: false,
      reward: "Mais disposição pela manhã!"
    },
    {
      id: "veggies",
      title: "Vegetais em Todas as Refeições",
      description: "Inclua pelo menos um vegetal em cada refeição por 3 dias",
      duration: "3 dias",
      icon: "🥗",
      goal: 9,
      current: 0,
      active: false,
      completed: false,
      reward: "Mais vitaminas e nutrientes!"
    },
    {
      id: "snacks",
      title: "Lanches Saudáveis",
      description: "Substitua lanches processados por frutas ou castanhas por 5 dias",
      duration: "5 dias",
      icon: "🍎",
      goal: 5,
      current: 0,
      active: false,
      completed: false,
      reward: "Menos açúcar, mais saúde!"
    },
    {
      id: "mindful",
      title: "Comer Sem Distrações",
      description: "Faça suas refeições sem TV ou celular por 4 dias",
      duration: "4 dias",
      icon: "🧘",
      goal: 4,
      current: 0,
      active: false,
      completed: false,
      reward: "Mais consciência alimentar!"
    }
  ])

  const handleStartChallenge = (id: string) => {
    setChallenges(challenges.map(c =>
      c.id === id ? { ...c, active: true, current: 0 } : c
    ))
  }

  const handleProgressChallenge = (id: string) => {
    setChallenges(challenges.map(c => {
      if (c.id === id && c.active) {
        const newCurrent = c.current + 1
        return {
          ...c,
          current: newCurrent,
          completed: newCurrent >= c.goal,
          active: newCurrent < c.goal
        }
      }
      return c
    }))
  }

  const handleResetChallenge = (id: string) => {
    setChallenges(challenges.map(c =>
      c.id === id ? { ...c, active: false, current: 0, completed: false } : c
    ))
  }

  const activeChallenges = challenges.filter(c => c.active)
  const completedChallenges = challenges.filter(c => c.completed)
  const availableChallenges = challenges.filter(c => !c.active && !c.completed)

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
        <div className="flex items-start gap-4">
          <div className="bg-orange-500 p-3 rounded-xl">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Desafios Saudáveis</h2>
            <p className="text-gray-600">
              Pequenos desafios para criar hábitos incríveis! Escolha um e vamos juntos nessa! 🚀
            </p>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-5">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{activeChallenges.length}</p>
              <p className="text-sm text-gray-600">Em andamento</p>
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Trophy className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{completedChallenges.length}</p>
              <p className="text-sm text-gray-600">Completados</p>
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Flame className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{availableChallenges.length}</p>
              <p className="text-sm text-gray-600">Disponíveis</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Active Challenges */}
      {activeChallenges.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Desafios Ativos</h3>
          </div>

          {activeChallenges.map((challenge) => (
            <Card key={challenge.id} className="p-6 border-blue-200 bg-blue-50/50">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{challenge.icon}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{challenge.title}</h4>
                      <p className="text-sm text-gray-600">{challenge.description}</p>
                    </div>
                    <Badge className="bg-blue-500 text-white">
                      {challenge.duration}
                    </Badge>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        Progresso: {challenge.current}/{challenge.goal}
                      </span>
                      <span className="text-sm text-gray-600">
                        {Math.round((challenge.current / challenge.goal) * 100)}%
                      </span>
                    </div>
                    <Progress value={(challenge.current / challenge.goal) * 100} className="h-3" />
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      onClick={() => handleProgressChallenge(challenge.id)}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Marcar Progresso
                    </Button>
                    <Button
                      onClick={() => handleResetChallenge(challenge.id)}
                      variant="outline"
                      className="border-gray-300"
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-sm text-gray-700">
                  🎁 <strong>Recompensa:</strong> {challenge.reward}
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Completed Challenges */}
      {completedChallenges.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-green-600" />
            <h3 className="text-xl font-bold text-gray-800">Desafios Completados</h3>
          </div>

          {completedChallenges.map((challenge) => (
            <Card key={challenge.id} className="p-6 border-green-200 bg-green-50/50">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{challenge.icon}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{challenge.title}</h4>
                      <p className="text-sm text-gray-600">{challenge.description}</p>
                    </div>
                    <Badge className="bg-green-500 text-white">
                      <Trophy className="w-3 h-3 mr-1" />
                      Completo!
                    </Badge>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-green-200 mt-3">
                    <p className="text-sm text-green-700">
                      🎉 <strong>Parabéns!</strong> Você conquistou: {challenge.reward}
                    </p>
                  </div>

                  <Button
                    onClick={() => handleResetChallenge(challenge.id)}
                    variant="outline"
                    className="mt-3 border-green-300 hover:bg-green-50"
                    size="sm"
                  >
                    Fazer Novamente
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Available Challenges */}
      {availableChallenges.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-600" />
            <h3 className="text-xl font-bold text-gray-800">Desafios Disponíveis</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableChallenges.map((challenge) => (
              <Card key={challenge.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{challenge.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-800">{challenge.title}</h4>
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        {challenge.duration}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                      <p className="text-sm text-orange-800">
                        🎁 {challenge.reward}
                      </p>
                    </div>
                    <Button
                      onClick={() => handleStartChallenge(challenge.id)}
                      className="w-full bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white"
                    >
                      Começar Desafio
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Motivation */}
      <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💪</span>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Você está indo muito bem!</h3>
            <p className="text-gray-700 mb-2">
              Cada pequeno passo conta. Os desafios são uma forma divertida de criar hábitos saudáveis que vão durar para sempre.
            </p>
            <p className="text-gray-700">
              Não desanime se falhar um dia - o importante é continuar tentando! 🌟
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

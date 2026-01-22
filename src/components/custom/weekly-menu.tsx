"use client"

import { useState } from "react"
import { Calendar, Sparkles, Loader2, RefreshCw, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WeeklyMenu() {
  const [loading, setLoading] = useState(false)
  const [menu, setMenu] = useState<any>(null)

  const weekDays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

  const handleGenerateMenu = async () => {
    setLoading(true)
    
    // Simular chamada de API
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const sampleMenu = {
      segunda: {
        almoco: { name: "Arroz integral com frango e brócolis", time: "30 min", cost: "R$ 15" },
        jantar: { name: "Omelete de legumes com salada", time: "20 min", cost: "R$ 10" }
      },
      terca: {
        almoco: { name: "Macarrão integral ao molho de tomate com almôndegas", time: "35 min", cost: "R$ 18" },
        jantar: { name: "Sopa de legumes com torradas", time: "25 min", cost: "R$ 12" }
      },
      quarta: {
        almoco: { name: "Peixe grelhado com purê de batata-doce", time: "30 min", cost: "R$ 20" },
        jantar: { name: "Sanduíche natural com suco verde", time: "10 min", cost: "R$ 8" }
      },
      quinta: {
        almoco: { name: "Feijão tropeiro com couve refogada", time: "40 min", cost: "R$ 14" },
        jantar: { name: "Salada Caesar com frango grelhado", time: "20 min", cost: "R$ 16" }
      },
      sexta: {
        almoco: { name: "Risoto de cogumelos com salada verde", time: "35 min", cost: "R$ 22" },
        jantar: { name: "Pizza caseira de vegetais", time: "30 min", cost: "R$ 15" }
      },
      sabado: {
        almoco: { name: "Feijoada light com arroz e laranja", time: "45 min", cost: "R$ 25" },
        jantar: { name: "Wrap de frango com guacamole", time: "15 min", cost: "R$ 12" }
      },
      domingo: {
        almoco: { name: "Lasanha de berinjela com salada", time: "50 min", cost: "R$ 20" },
        jantar: { name: "Creme de abóbora com torradas", time: "25 min", cost: "R$ 10" }
      }
    }
    
    setMenu(sampleMenu)
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
        <div className="flex items-start gap-4">
          <div className="bg-emerald-500 p-3 rounded-xl">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Cardápio Semanal Personalizado</h2>
            <p className="text-gray-600">
              Deixa comigo! Vou montar um cardápio completo pensando no seu perfil, orçamento e tempo disponível 📅
            </p>
          </div>
        </div>
      </Card>

      {/* Generate Button */}
      {!menu && (
        <Card className="p-8 text-center">
          <div className="max-w-md mx-auto">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-emerald-500" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Pronto para planejar sua semana?
            </h3>
            <p className="text-gray-600 mb-6">
              Vou criar um cardápio balanceado, variado e dentro do seu orçamento. Você vai economizar tempo e dinheiro!
            </p>
            <Button
              onClick={handleGenerateMenu}
              disabled={loading}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Criando seu cardápio...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Gerar Cardápio Semanal
                </>
              )}
            </Button>
          </div>
        </Card>
      )}

      {/* Menu Display */}
      {menu && (
        <>
          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleGenerateMenu}
              variant="outline"
              className="border-emerald-200 hover:bg-emerald-50"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Gerar Novo Cardápio
            </Button>
            <Button
              variant="outline"
              className="border-emerald-200 hover:bg-emerald-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Baixar Lista de Compras
            </Button>
          </div>

          {/* Weekly Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {weekDays.map((day, index) => {
              const dayKey = day.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
              const dayMenu = menu[dayKey]
              
              return (
                <Card key={index} className="p-5 hover:shadow-lg transition-shadow border-emerald-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">{day}</h3>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                      Dia {index + 1}
                    </Badge>
                  </div>

                  {/* Almoço */}
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🍽️</span>
                      <span className="text-sm font-semibold text-gray-600">Almoço</span>
                    </div>
                    <p className="text-sm text-gray-800 font-medium mb-2">{dayMenu.almoco.name}</p>
                    <div className="flex gap-2 text-xs">
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        {dayMenu.almoco.time}
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {dayMenu.almoco.cost}
                      </Badge>
                    </div>
                  </div>

                  {/* Jantar */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🌙</span>
                      <span className="text-sm font-semibold text-gray-600">Jantar</span>
                    </div>
                    <p className="text-sm text-gray-800 font-medium mb-2">{dayMenu.jantar.name}</p>
                    <div className="flex gap-2 text-xs">
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        {dayMenu.jantar.time}
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {dayMenu.jantar.cost}
                      </Badge>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Summary */}
          <Card className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
            <h3 className="font-semibold text-gray-800 mb-3">Resumo da Semana</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Custo Total Estimado</p>
                <p className="text-2xl font-bold text-emerald-600">R$ 217</p>
                <p className="text-xs text-gray-500 mt-1">Média de R$ 15,50/refeição</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Tempo Total de Preparo</p>
                <p className="text-2xl font-bold text-orange-600">7h 30min</p>
                <p className="text-xs text-gray-500 mt-1">Média de 32min/refeição</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Variedade</p>
                <p className="text-2xl font-bold text-teal-600">14 receitas</p>
                <p className="text-xs text-gray-500 mt-1">Todas diferentes!</p>
              </div>
            </div>
          </Card>

          {/* Tips */}
          <Card className="p-6 bg-amber-50 border-amber-200">
            <div className="flex gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Dicas para aproveitar melhor:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Faça a lista de compras no domingo e economize tempo durante a semana</li>
                  <li>• Prepare ingredientes básicos (arroz, feijão) em maior quantidade</li>
                  <li>• Congele porções extras para dias mais corridos</li>
                  <li>• Use sobras do almoço para criar novos pratos no jantar</li>
                </ul>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  )
}

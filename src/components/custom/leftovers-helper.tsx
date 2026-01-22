"use client"

import { useState } from "react"
import { Leaf, Plus, X, Sparkles, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function LeftoversHelper() {
  const [leftovers, setLeftovers] = useState<string[]>([])
  const [newLeftover, setNewLeftover] = useState("")
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState<any[]>([])

  const handleAddLeftover = () => {
    if (newLeftover.trim() && !leftovers.includes(newLeftover.trim())) {
      setLeftovers([...leftovers, newLeftover.trim()])
      setNewLeftover("")
    }
  }

  const handleRemoveLeftover = (item: string) => {
    setLeftovers(leftovers.filter(l => l !== item))
  }

  const handleGetSuggestions = async () => {
    if (leftovers.length === 0) return
    
    setLoading(true)
    
    // Simular chamada de API
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const sampleSuggestions = [
      {
        name: "Arroz de Forno Cremoso",
        time: "25 min",
        difficulty: "Fácil",
        ingredients: leftovers.slice(0, 3),
        description: "Transforme sobras em um prato delicioso! Misture tudo com queijo e leve ao forno.",
        tip: "Adicione ervas frescas para dar um toque especial"
      },
      {
        name: "Torta Salgada Rápida",
        time: "30 min",
        difficulty: "Médio",
        ingredients: leftovers.slice(0, 2),
        description: "Use massa pronta e recheie com suas sobras. Perfeito para o jantar!",
        tip: "Congele fatias individuais para refeições futuras"
      },
      {
        name: "Salada Completa",
        time: "10 min",
        difficulty: "Muito Fácil",
        ingredients: leftovers,
        description: "Combine todas as sobras com folhas verdes e um molho caseiro.",
        tip: "Adicione sementes ou castanhas para mais crocância"
      }
    ]
    
    setSuggestions(sampleSuggestions)
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-r from-teal-50 to-green-50 border-teal-200">
        <div className="flex items-start gap-4">
          <div className="bg-teal-500 p-3 rounded-xl">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Aproveitamento de Sobras</h2>
            <p className="text-gray-600">
              Vamos evitar desperdício! Me conta o que sobrou na geladeira e eu te ajudo a criar algo incrível 🌱
            </p>
          </div>
        </div>
      </Card>

      {/* Add Leftovers */}
      <Card className="p-6">
        <h3 className="font-semibold text-gray-800 mb-4">O que você tem na geladeira?</h3>
        
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Ex: arroz, frango, legumes..."
            value={newLeftover}
            onChange={(e) => setNewLeftover(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddLeftover()}
            className="border-teal-200 focus:border-teal-500"
          />
          <Button
            onClick={handleAddLeftover}
            className="bg-teal-500 hover:bg-teal-600 text-white"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        {/* Leftovers List */}
        {leftovers.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm text-gray-600">Ingredientes adicionados:</p>
            <div className="flex flex-wrap gap-2">
              {leftovers.map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-teal-100 text-teal-700 px-3 py-1.5 text-sm"
                >
                  {item}
                  <button
                    onClick={() => handleRemoveLeftover(item)}
                    className="ml-2 hover:text-teal-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>

            <Button
              onClick={handleGetSuggestions}
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-500 to-green-600 hover:from-teal-600 hover:to-green-700 text-white mt-4"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Criando receitas...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Me sugira receitas!
                </>
              )}
            </Button>
          </div>
        )}

        {leftovers.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Leaf className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Adicione os ingredientes que você tem disponível</p>
          </div>
        )}
      </Card>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800">Receitas Sugeridas</h3>
            <Badge className="bg-green-100 text-green-700">
              {suggestions.length} opções
            </Badge>
          </div>

          {suggestions.map((suggestion, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-teal-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">{suggestion.name}</h4>
                  <div className="flex gap-2 text-sm">
                    <Badge variant="outline" className="text-orange-600 border-orange-200">
                      {suggestion.time}
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {suggestion.difficulty}
                    </Badge>
                  </div>
                </div>
                <span className="text-3xl">♻️</span>
              </div>

              <p className="text-gray-700 mb-4">{suggestion.description}</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Usando suas sobras:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestion.ingredients.map((ing: string, i: number) => (
                    <Badge key={i} variant="secondary" className="bg-teal-50 text-teal-700">
                      {ing}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-sm text-amber-800">
                  💡 <strong>Dica:</strong> {suggestion.tip}
                </p>
              </div>
            </Card>
          ))}

          {/* Impact Card */}
          <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Impacto Positivo 🌍</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Ao aproveitar suas sobras, você está:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Economizando dinheiro (até R$ 200/mês)</li>
                  <li>✓ Reduzindo desperdício de alimentos</li>
                  <li>✓ Ajudando o meio ambiente</li>
                  <li>✓ Sendo mais criativo na cozinha</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Tips */}
      {suggestions.length === 0 && leftovers.length === 0 && (
        <Card className="p-6 bg-blue-50 border-blue-200">
          <h4 className="font-semibold text-gray-800 mb-3">Dicas para evitar desperdício:</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2">
              <span>🥡</span>
              <span>Guarde sobras em potes transparentes para não esquecer delas</span>
            </li>
            <li className="flex gap-2">
              <span>📅</span>
              <span>Cole etiquetas com a data de preparo</span>
            </li>
            <li className="flex gap-2">
              <span>❄️</span>
              <span>Congele porções individuais para refeições rápidas</span>
            </li>
            <li className="flex gap-2">
              <span>🔄</span>
              <span>Use o método FIFO: primeiro que entra, primeiro que sai</span>
            </li>
          </ul>
        </Card>
      )}
    </div>
  )
}

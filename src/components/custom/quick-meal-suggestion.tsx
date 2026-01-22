"use client"

import { useState } from "react"
import { Clock, Sparkles, ChefHat, DollarSign, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function QuickMealSuggestion() {
  const [mealTime, setMealTime] = useState("almoco")
  const [loading, setLoading] = useState(false)
  const [suggestion, setSuggestion] = useState<any>(null)

  const mealTimes = [
    { id: "cafe", label: "Café da Manhã", icon: "☕" },
    { id: "almoco", label: "Almoço", icon: "🍽️" },
    { id: "lanche", label: "Lanche", icon: "🥪" },
    { id: "jantar", label: "Jantar", icon: "🌙" },
  ]

  const handleGetSuggestion = async () => {
    setLoading(true)
    
    // Simular chamada de API
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const suggestions = {
      cafe: {
        name: "Omelete com Aveia e Frutas",
        time: "15 min",
        cost: "R$ 8",
        difficulty: "Fácil",
        ingredients: ["2 ovos", "2 colheres de aveia", "1 banana", "Mel a gosto"],
        steps: [
          "Bata os ovos com a aveia",
          "Aqueça uma frigideira antiaderente",
          "Despeje a mistura e cozinhe por 3 minutos de cada lado",
          "Sirva com banana fatiada e mel"
        ],
        benefits: "Rico em proteínas e fibras, te dá energia para o dia todo!",
        tips: "Você pode adicionar canela para dar um sabor especial 😊"
      },
      almoco: {
        name: "Frango Grelhado com Salada Colorida",
        time: "25 min",
        cost: "R$ 15",
        difficulty: "Fácil",
        ingredients: ["1 peito de frango", "Alface", "Tomate", "Cenoura", "Azeite", "Limão"],
        steps: [
          "Tempere o frango com sal, alho e limão",
          "Grelhe o frango por 12 minutos (6 min cada lado)",
          "Enquanto isso, lave e corte os vegetais",
          "Monte a salada e tempere com azeite e limão"
        ],
        benefits: "Refeição completa e balanceada, com proteínas e vitaminas!",
        tips: "Dica: Faça 2 peitos de uma vez e guarde um para amanhã 👍"
      },
      lanche: {
        name: "Smoothie Verde Energético",
        time: "5 min",
        cost: "R$ 6",
        difficulty: "Muito Fácil",
        ingredients: ["1 banana", "1 maçã", "Folhas de espinafre", "200ml de água", "1 colher de mel"],
        steps: [
          "Coloque todos os ingredientes no liquidificador",
          "Bata por 1 minuto até ficar homogêneo",
          "Sirva gelado"
        ],
        benefits: "Cheio de vitaminas e minerais, perfeito para dar aquela energia!",
        tips: "Congele a banana antes para ficar mais cremoso 🍌"
      },
      jantar: {
        name: "Sopa de Legumes com Macarrão",
        time: "30 min",
        cost: "R$ 12",
        difficulty: "Fácil",
        ingredients: ["Cenoura", "Batata", "Abobrinha", "Macarrão", "Caldo de legumes", "Temperos"],
        steps: [
          "Corte todos os legumes em cubos pequenos",
          "Refogue com alho e cebola",
          "Adicione água e o caldo de legumes",
          "Cozinhe por 15 minutos e adicione o macarrão",
          "Cozinhe mais 10 minutos"
        ],
        benefits: "Leve, nutritiva e reconfortante. Perfeita para uma noite tranquila!",
        tips: "Faça uma quantidade maior e congele porções para a semana 💚"
      }
    }

    setSuggestion(suggestions[mealTime as keyof typeof suggestions])
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
        <div className="flex items-start gap-4">
          <div className="bg-orange-500 p-3 rounded-xl">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">O que posso comer agora?</h2>
            <p className="text-gray-600">
              Me conta qual é o momento do dia e eu te sugiro algo delicioso e prático! 😋
            </p>
          </div>
        </div>
      </Card>

      {/* Meal Time Selection */}
      <Card className="p-6">
        <Label className="text-lg font-semibold mb-4 block">Qual refeição você quer fazer?</Label>
        <RadioGroup value={mealTime} onValueChange={setMealTime} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mealTimes.map((time) => (
            <div key={time.id}>
              <RadioGroupItem value={time.id} id={time.id} className="peer sr-only" />
              <Label
                htmlFor={time.id}
                className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-emerald-300 peer-data-[state=checked]:border-emerald-500 peer-data-[state=checked]:bg-emerald-50 transition-all"
              >
                <span className="text-3xl mb-2">{time.icon}</span>
                <span className="text-sm font-medium text-center">{time.label}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button
          onClick={handleGetSuggestion}
          disabled={loading}
          className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
          size="lg"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Preparando sua sugestão...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              Me sugira algo!
            </>
          )}
        </Button>
      </Card>

      {/* Suggestion Result */}
      {suggestion && (
        <Card className="p-6 border-emerald-200 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{suggestion.name}</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  <Clock className="w-3 h-3 mr-1" />
                  {suggestion.time}
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  <DollarSign className="w-3 h-3 mr-1" />
                  {suggestion.cost}
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  {suggestion.difficulty}
                </Badge>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
            <p className="text-emerald-800">
              <strong>Por que essa receita?</strong> {suggestion.benefits}
            </p>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Ingredientes:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {suggestion.ingredients.map((ingredient: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Modo de preparo:</h4>
            <ol className="space-y-3">
              {suggestion.steps.map((step: string, index: number) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tips */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800">
              💡 {suggestion.tips}
            </p>
          </div>
        </Card>
      )}
    </div>
  )
}

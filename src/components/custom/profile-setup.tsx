"use client"

import { useState } from "react"
import { ChefHat, User, DollarSign, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface ProfileSetupProps {
  onComplete: (name: string) => void
}

export default function ProfileSetup({ onComplete }: ProfileSetupProps) {
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [budget, setBudget] = useState("medio")
  const [timeAvailable, setTimeAvailable] = useState("30min")
  const [restrictions, setRestrictions] = useState<string[]>([])

  const restrictionOptions = [
    { id: "vegetariano", label: "Vegetariano" },
    { id: "vegano", label: "Vegano" },
    { id: "lactose", label: "Intolerância à lactose" },
    { id: "gluten", label: "Intolerância ao glúten" },
    { id: "lowcarb", label: "Dieta Low Carb" },
    { id: "diabetes", label: "Diabetes" },
  ]

  const handleRestrictionToggle = (id: string) => {
    setRestrictions(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    )
  }

  const handleComplete = () => {
    if (name.trim()) {
      // Salvar preferências no localStorage
      localStorage.setItem("nutriassist_profile", JSON.stringify({
        name,
        budget,
        timeAvailable,
        restrictions
      }))
      onComplete(name)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 shadow-2xl border-emerald-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
            Bem-vindo ao NutriAssist!
          </h1>
          <p className="text-gray-600">
            Vamos conhecer você melhor para criar sugestões personalizadas
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all ${
                s <= step ? "w-16 bg-emerald-500" : "w-8 bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Step 1: Nome */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-12 h-12 mx-auto mb-3 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Como posso te chamar?</h2>
              <p className="text-gray-600">Vamos começar pelo básico!</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Seu nome</Label>
              <Input
                id="name"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg border-emerald-200 focus:border-emerald-500"
              />
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!name.trim()}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
              size="lg"
            >
              Continuar
            </Button>
          </div>
        )}

        {/* Step 2: Orçamento e Tempo */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <DollarSign className="w-10 h-10 text-emerald-600" />
                <Clock className="w-10 h-10 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Seu estilo de vida</h2>
              <p className="text-gray-600">Quanto tempo e dinheiro você tem disponível?</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-base font-semibold mb-3 block">Orçamento para alimentação</Label>
                <RadioGroup value={budget} onValueChange={setBudget}>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors">
                    <RadioGroupItem value="economico" id="economico" />
                    <Label htmlFor="economico" className="flex-1 cursor-pointer">
                      Econômico - Até R$ 15 por refeição
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors">
                    <RadioGroupItem value="medio" id="medio" />
                    <Label htmlFor="medio" className="flex-1 cursor-pointer">
                      Médio - R$ 15 a R$ 30 por refeição
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors">
                    <RadioGroupItem value="flexivel" id="flexivel" />
                    <Label htmlFor="flexivel" className="flex-1 cursor-pointer">
                      Flexível - Acima de R$ 30 por refeição
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">Tempo disponível para cozinhar</Label>
                <RadioGroup value={timeAvailable} onValueChange={setTimeAvailable}>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors">
                    <RadioGroupItem value="15min" id="15min" />
                    <Label htmlFor="15min" className="flex-1 cursor-pointer">
                      Até 15 minutos - Super rápido
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors">
                    <RadioGroupItem value="30min" id="30min" />
                    <Label htmlFor="30min" className="flex-1 cursor-pointer">
                      Até 30 minutos - Prático
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors">
                    <RadioGroupItem value="60min" id="60min" />
                    <Label htmlFor="60min" className="flex-1 cursor-pointer">
                      Até 1 hora - Tenho tempo
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1 border-emerald-200"
                size="lg"
              >
                Voltar
              </Button>
              <Button
                onClick={() => setStep(3)}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                size="lg"
              >
                Continuar
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Restrições */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <AlertCircle className="w-12 h-12 mx-auto mb-3 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Restrições alimentares</h2>
              <p className="text-gray-600">Selecione se você tem alguma restrição (opcional)</p>
            </div>

            <div className="space-y-3">
              {restrictionOptions.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors"
                >
                  <Checkbox
                    id={option.id}
                    checked={restrictions.includes(option.id)}
                    onCheckedChange={() => handleRestrictionToggle(option.id)}
                  />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-sm text-emerald-800">
                💡 <strong>Dica:</strong> Você pode alterar essas informações a qualquer momento no seu perfil!
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(2)}
                variant="outline"
                className="flex-1 border-emerald-200"
                size="lg"
              >
                Voltar
              </Button>
              <Button
                onClick={handleComplete}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                size="lg"
              >
                Começar! 🎉
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

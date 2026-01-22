"use client"

import { useState } from "react"
import { Utensils, Clock, Sparkles, ChefHat, Leaf, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import QuickMealSuggestion from "@/components/custom/quick-meal-suggestion"
import WeeklyMenu from "@/components/custom/weekly-menu"
import LeftoversHelper from "@/components/custom/leftovers-helper"
import ProfileSetup from "@/components/custom/profile-setup"
import NutritionTips from "@/components/custom/nutrition-tips"
import Challenges from "@/components/custom/challenges"

export default function Home() {
  const [hasProfile, setHasProfile] = useState(false)
  const [userName, setUserName] = useState("")

  if (!hasProfile) {
    return (
      <ProfileSetup 
        onComplete={(name) => {
          setUserName(name)
          setHasProfile(true)
        }} 
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  NutriAssist
                </h1>
                <p className="text-sm text-gray-600">Olá, {userName}! 👋</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setHasProfile(false)}
              className="border-emerald-200 hover:bg-emerald-50"
            >
              Editar Perfil
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Welcome Message */}
        <div className="mb-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-start gap-4">
            <Sparkles className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Que tal comer bem hoje?</h2>
              <p className="text-emerald-50">
                Estou aqui para te ajudar a fazer escolhas saudáveis e práticas. Vamos juntos nessa jornada! 🌱
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 hover:shadow-lg transition-shadow border-emerald-100 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Refeição Rápida</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Sugestões prontas em minutos baseadas no que você tem
            </p>
            <div className="text-2xl font-bold text-orange-600">15-30 min</div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-emerald-100 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Utensils className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Cardápio Semanal</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Planejamento inteligente para toda semana
            </p>
            <div className="text-2xl font-bold text-emerald-600">7 dias</div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-emerald-100 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-teal-100 p-2 rounded-lg">
                <Leaf className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Zero Desperdício</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Aproveite sobras e economize dinheiro
            </p>
            <div className="text-2xl font-bold text-teal-600">Eco-friendly</div>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="agora" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white/80 backdrop-blur-sm border border-emerald-100 p-1">
            <TabsTrigger value="agora" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Clock className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">O que comer</span>
              <span className="sm:hidden">Agora</span>
            </TabsTrigger>
            <TabsTrigger value="semanal" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Utensils className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Cardápio</span>
              <span className="sm:hidden">Semana</span>
            </TabsTrigger>
            <TabsTrigger value="sobras" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Leaf className="w-4 h-4 mr-2" />
              Sobras
            </TabsTrigger>
            <TabsTrigger value="dicas" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Sparkles className="w-4 h-4 mr-2" />
              Dicas
            </TabsTrigger>
            <TabsTrigger value="desafios" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <TrendingUp className="w-4 h-4 mr-2" />
              Desafios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agora" className="space-y-6">
            <QuickMealSuggestion />
          </TabsContent>

          <TabsContent value="semanal" className="space-y-6">
            <WeeklyMenu />
          </TabsContent>

          <TabsContent value="sobras" className="space-y-6">
            <LeftoversHelper />
          </TabsContent>

          <TabsContent value="dicas" className="space-y-6">
            <NutritionTips />
          </TabsContent>

          <TabsContent value="desafios" className="space-y-6">
            <Challenges />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-emerald-100 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          <p>NutriAssist - Seu assistente alimentar pessoal 🌱</p>
          <p className="mt-1 text-xs text-gray-500">Coma bem, viva melhor!</p>
        </div>
      </footer>
    </div>
  )
}

import { Button } from "./ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
      {/* Параллакс эффект */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Вы арендуете облачные серверы, я собираю из них готовый VPN-сервис
          </h2>

          <p className="text-base md:text-lg mb-6 opacity-90">
            После настройки у вас будет собственная VPN-инфраструктура, которая работает на ваших облачных серверах и управляется через Telegram
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base px-8 py-6">
              <MessageCircle className="mr-2 w-5 h-5" />
              Обсудить запуск
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
              Узнать больше
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

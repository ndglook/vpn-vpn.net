import { Button } from "./ui/button";
import { Shield, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-16 md:py-24">
      {/* Фотофон с параллаксом */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-6 border border-blue-100 dark:border-blue-800">
            <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-blue-700 dark:text-blue-300">Приватный VPN на ваших серверах</span>
          </div>

          <h1 className="text-4xl md:text-6xl mb-6">
            Свой VPN-сервис под ключ на ваших серверах
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Настрою приватный VPN-сервис на двух облачных серверах: один в России, второй за границей.
            Полная настройка VPN, маршрутизации, firewall, Telegram-бота.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 py-6">
              Запустить свой VPN
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6">
              Узнать подробнее
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

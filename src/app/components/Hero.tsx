import { Button } from "./ui/button";
import { Scissors } from "lucide-react";

export function Hero() {
  const tearOffText = "Telegram";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Объявление на столбе */}
          <div className="relative bg-white dark:bg-gray-800 border-4 border-black dark:border-gray-600 p-6 md:p-8 shadow-2xl transform rotate-[-0.5deg]">
            {/* Кнопки/гвозди по углам */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full shadow-md"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full shadow-md"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full shadow-md"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full shadow-md"></div>

            {/* Заголовок объявления */}
            <div className="text-center mb-6 border-b-2 border-dashed border-gray-400 pb-6">
              <div className="inline-block px-3 py-1 bg-red-500 text-white font-bold text-xs mb-3 transform -rotate-2">
                СРОЧНО!
              </div>
              <h1 className="text-2xl md:text-4xl font-black uppercase leading-tight mb-3" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                НАСТРОЮ ВАШ<br />VPN-СЕРВИС<br />ПОД КЛЮЧ
              </h1>
              <div className="text-sm md:text-base font-bold">
                ⭐ На ваших серверах ⭐
              </div>
            </div>

            {/* Основной текст */}
            <div className="space-y-3 mb-6 text-sm md:text-base">
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                <span>Два облачных сервера: один в России, второй за границей</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                <span>Полная настройка: VPN, маршрутизация, firewall</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                <span>Telegram-бот для управления пользователями</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                <span>Вы становитесь администратором</span>
              </div>
            </div>

            {/* Цена */}
            <div className="text-center mb-6 p-4 bg-yellow-100 dark:bg-yellow-900 border-2 border-yellow-400 dark:border-yellow-600 transform -rotate-1">
              <div className="text-xs md:text-sm text-muted-foreground mb-1">Стоимость серверов</div>
              <div className="text-xl md:text-2xl font-black">1-1.5 тыс ₽/мес</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-2 mb-1">Моя работа</div>
              <div className="text-2xl md:text-3xl font-black text-red-600 dark:text-red-400">от 5 тыс ₽/мес</div>
            </div>

            <div className="text-center mb-6">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 text-base md:text-lg">
                💬 Обсудить запуск
              </Button>
            </div>

            {/* Отрывные листочки */}
            <div className="border-t-2 border-dashed border-gray-400 pt-4">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Scissors className="w-4 h-4 text-gray-500" />
                <span className="text-xs text-gray-500 uppercase font-bold">Отрывайте!</span>
                <Scissors className="w-4 h-4 text-gray-500" />
              </div>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-dashed border-gray-400 px-2 py-3 text-center transform hover:translate-y-1 transition-transform cursor-pointer"
                  >
                    <div className="text-[10px] font-bold writing-mode-vertical transform rotate-180">
                      {tearOffText}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Тень от объявления на столбе */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-600/20 transform translate-x-2 translate-y-2 -z-10 blur-sm"></div>
        </div>
      </div>
    </section>
  );
}

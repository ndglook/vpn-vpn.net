import { Server, Wrench, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function Pricing() {
  return (
    <section className="py-12 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 dark:bg-gradient-to-br dark:from-yellow-950 dark:via-orange-950 dark:to-red-950 relative overflow-hidden">
      {/* Декоративные монеты */}
      <div className="absolute top-10 left-20 text-6xl opacity-10">💰</div>
      <div className="absolute bottom-10 right-20 text-6xl opacity-10">💵</div>
      <div className="absolute top-1/2 left-1/4 text-4xl opacity-10">💳</div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3">Стоимость</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Прозрачные цены без скрытых платежей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Стоимость серверов */}
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Облачные серверы</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-3xl mb-1">1–1.5 тыс ₽</div>
                <div className="text-sm text-muted-foreground">в месяц за оба сервера</div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Один облачный сервер в России</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Один облачный сервер за границей</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Вы выбираете провайдера и оплачиваете напрямую</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Стоимость услуг */}
          <Card className="border-2 border-blue-500 dark:border-blue-400 hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 dark:bg-blue-500 text-white rounded-full text-sm">
              Работа специалиста
            </div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Настройка и поддержка</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-3xl mb-1">от 5 тыс ₽</div>
                <div className="text-sm text-muted-foreground">в месяц</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Полная настройка VPN-сервиса</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Настройка Telegram-бота</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Техническая поддержка</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Обновления и мониторинг</span>
                </li>
              </ul>
              <Button className="w-full">
                Обсудить запуск
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-3xl mx-auto">
          Итого: от 6–6.5 тыс ₽ в месяц за полностью готовый приватный VPN-сервис на ваших серверах
        </p>
      </div>
    </section>
  );
}

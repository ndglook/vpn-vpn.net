import { Check } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  "Готовый приватный VPN-сервис на ваших серверах",
  "Telegram-бота для пользователей и администратора",
  "Управление пользователями без входа на сервер",
  "Подключения для iPhone, Android, Windows, macOS и Linux",
  "Разные варианты подключения: ручная настройка и приложения",
  "Настройку маршрутизации РФ / не РФ",
  "Возможность ограничивать доступ к интернету, офисным ресурсам, RDP и локальным сетям",
  "Возможность подключить офис, квартиру или отдельную локальную сеть к вашему VPN-сервису"
];

export function Features() {
  return (
    <section className="py-12 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3">Что вы получаете</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Полностью готовый к работе VPN-сервис с удобным управлением
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      </section>
  );
}

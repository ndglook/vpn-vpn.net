import { MessageCircle, User, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const userFeatures = [
  "Выбор устройства: iPhone, Android, Windows, macOS или Linux",
  "Понятные инструкции для настройки",
  "Автоматическая выдача конфигов, QR-кодов и файлов настроек"
];

const adminFeatures = [
  "Добавление и удаление пользователей",
  "Изменение доступов и управление группами",
  "Рассылка сообщений пользователям"
];

export function TelegramBot() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4 border border-blue-100 dark:border-blue-800">
            <MessageCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-blue-700 dark:text-blue-300">Управление через Telegram</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-3">Telegram-бот</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Простое управление VPN прямо из Telegram
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3>Для пользователей</h3>
              </div>
              <ul className="space-y-3">
                {userFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3>Для администраторов</h3>
              </div>
              <ul className="space-y-3">
                {adminFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

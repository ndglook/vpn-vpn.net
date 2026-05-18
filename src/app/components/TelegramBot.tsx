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
    <section className="py-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white relative overflow-hidden">
      {/* Декоративная сетка */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <MessageCircle className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Управление через Telegram</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-3 text-white">Telegram-бот</h2>
          <p className="text-base text-white/90 max-w-2xl mx-auto">
            Простое управление VPN прямо из Telegram
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
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

          <Card className="border-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
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

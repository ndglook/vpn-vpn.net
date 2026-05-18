import { ArrowRight, Wifi } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function VPNScheme() {
  return (
    <section className="py-12 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 dark:bg-gradient-to-br dark:from-purple-950 dark:via-gray-900 dark:to-orange-950 relative overflow-hidden">
      {/* Параллакс декор */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-300 dark:bg-yellow-600 rounded-full filter blur-2xl opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-300 dark:bg-pink-600 rounded-full filter blur-2xl opacity-40"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3">Как это работает</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Автоматическое разделение трафика: РФ напрямую, остальное через VPN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Обычные устройства */}
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="mb-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full mb-3">
                  <span className="text-2xl">📱</span>
                  <span className="font-medium text-blue-700 dark:text-blue-400">Телефон, компьютер, дом</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg flex-1">
                    <div className="text-2xl mb-2">📱💻🏠</div>
                    <div className="text-sm font-medium">Устройство</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg flex-1">
                    <div className="text-2xl mb-2">🇷🇺</div>
                    <div className="text-sm font-medium">Сервер РФ</div>
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Сервер автоматически разделяет:
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-500">
                    <div className="text-xl mb-1">🇷🇺</div>
                    <div className="text-xs font-medium text-green-700 dark:text-green-400">РФ сайты</div>
                    <div className="text-[10px] text-muted-foreground">напрямую</div>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg border-2 border-purple-500">
                    <div className="text-xl mb-1">🌍</div>
                    <div className="text-xs font-medium text-purple-700 dark:text-purple-400">Не-РФ</div>
                    <div className="text-[10px] text-muted-foreground">через VPN</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* MikroTik */}
          <Card className="border-2 border-green-500 dark:border-green-400">
            <CardContent className="pt-6">
              <div className="mb-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full mb-3">
                  <Wifi className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="font-medium text-green-700 dark:text-green-400">MikroTik роутер (умный)</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="text-3xl mb-2"><Wifi className="w-8 h-8 mx-auto text-green-600 dark:text-green-400" /></div>
                  <div className="text-sm font-medium">Офис / Квартира</div>
                  <div className="text-xs text-muted-foreground">Сам определяет РФ/не-РФ</div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Роутер сам маршрутизирует:
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 p-3 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-500">
                      <div className="text-xl mb-1">🇷🇺</div>
                      <div className="text-xs font-medium text-green-700 dark:text-green-400">РФ сайты</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div className="flex-1 text-xs text-green-600 dark:text-green-400 font-medium">
                      Напрямую без VPN
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 p-3 bg-purple-50 dark:bg-purple-950 rounded-lg border-2 border-purple-500">
                      <div className="text-xl mb-1">🌍</div>
                      <div className="text-xs font-medium text-purple-700 dark:text-purple-400">Не-РФ</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <div className="flex-1 text-xs text-purple-600 dark:text-purple-400 font-medium">
                      Через VPN сервер
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Простое пояснение */}
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-center">
            <span className="font-bold">Просто:</span> Российские сайты открываются напрямую и быстро. Заблокированные сайты автоматически через VPN.
          </p>
        </div>
      </div>
    </section>
  );
}

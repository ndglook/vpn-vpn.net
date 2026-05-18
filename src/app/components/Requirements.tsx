import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const requirements = [
  "Арендовать два облачных сервера: один в РФ, второй за границей",
  "Передать доступы для настройки",
  "Если нужно подключить офис или квартиру — сообщить, какой роутер или устройство стоит на месте"
];

export function Requirements() {
  return (
    <section className="py-12 bg-gradient-to-br from-lime-100 to-green-100 dark:bg-gradient-to-br dark:from-lime-950 dark:to-green-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3">Что нужно от вас</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Минимальные действия с вашей стороны
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-2">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg">{requirement}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-center">
                После настройки вы получаете <span className="text-blue-700 dark:text-blue-400">готовый VPN-сервис</span> и <span className="text-blue-700 dark:text-blue-400">админ-доступ в Telegram-боте</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

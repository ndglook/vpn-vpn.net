import { Server, Users, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const steps = [
  {
    icon: Server,
    title: "Вы арендуете два облачных сервера",
    description: "Один в РФ, второй не в РФ"
  },
  {
    icon: Users,
    title: "Пользователи подключаются к российскому серверу",
    description: "Для них это обычное подключение к серверу внутри России, а не прямое подключение к зарубежному VPN"
  },
  {
    icon: Zap,
    title: "Маршрутизация происходит внутри инфраструктуры",
    description: "Российский сервер уже сам передает нужный трафик на зарубежный сервер"
  }
];

export function HowItWorks() {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3">Как это работает</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Простая и надежная схема работы вашего приватного VPN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                    <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h3 className="mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

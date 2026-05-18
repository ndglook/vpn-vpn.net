import { Lock, Users, Settings, Building2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const benefits = [
  {
    icon: Lock,
    title: "Полный контроль",
    description: "Вы контролируете свои серверы и решаете, кому давать доступ. Нет общей публичной инфраструктуры с чужими пользователями."
  },
  {
    icon: Settings,
    title: "Гибкие настройки",
    description: "Настройте правила под вашу задачу: кому интернет, кому офис, кому RDP, кому только локальные ресурсы."
  },
  {
    icon: Users,
    title: "Простое использование",
    description: "Пользователь не разбирается в настройках. Он просто заходит в бота и получает готовую инструкцию."
  },
  {
    icon: Building2,
    title: "Подключение сетей",
    description: "Можно подключить не только одного пользователя, но и целую сеть: офис, квартиру, склад или удаленную площадку."
  }
];

export function Benefits() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3">Почему это удобнее обычного VPN</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Приватный VPN дает вам возможности, недоступные в публичных сервисах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

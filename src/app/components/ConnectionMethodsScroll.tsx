import { Settings, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const methods = [
  {
    category: "Ручная настройка",
    icon: Settings,
    protocols: ["IKEv2", "L2TP", "SSTP"],
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
    description: "Настройка встроенными средствами системы"
  },
  {
    category: "Через приложения",
    icon: Smartphone,
    protocols: ["OpenVPN", "WireGuard", "SSTP Client"],
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    description: "Установка специальных приложений"
  },
  {
    category: "Корпоративный",
    icon: Settings,
    protocols: ["MikroTik", "Cisco", "Офисный роутер"],
    color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    description: "Для офисов и локальных сетей"
  }
];

export function ConnectionMethodsScroll() {
  return (
    <section className="py-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3 text-white">Варианты подключения</h2>
          <p className="text-base text-white/90 max-w-2xl mx-auto">
            Множество способов подключения для любых устройств
          </p>
        </div>

        {/* Горизонтальный скролл */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-6 min-w-max md:justify-center">
            {methods.map((method, index) => (
              <Card key={index} className="w-80 flex-shrink-0 border-2 border-white/20 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-foreground">{method.category}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {method.protocols.map((protocol, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                        {protocol}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <p className="text-center text-white/80 mt-8 max-w-3xl mx-auto text-sm">
          💡 SSTP Client может быть отдельным приложением, подготовленным под ваш сервис
        </p>
      </div>
    </section>
  );
}

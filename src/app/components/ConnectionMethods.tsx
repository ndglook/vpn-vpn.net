import { Shield, Key, Lock, Network, Wifi, Settings } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const protocols = [
  {
    name: "IKEv2",
    icon: Shield,
    color: "bg-blue-500",
    description: "Встроенный в iOS, macOS, Windows"
  },
  {
    name: "L2TP",
    icon: Key,
    color: "bg-green-500",
    description: "Стандартный протокол"
  },
  {
    name: "SSTP",
    icon: Lock,
    color: "bg-purple-500",
    description: "Безопасный туннель"
  },
  {
    name: "OpenVPN",
    icon: Network,
    color: "bg-orange-500",
    description: "Через приложение"
  },
  {
    name: "WireGuard",
    icon: Wifi,
    color: "bg-cyan-500",
    description: "Современный протокол"
  },
  {
    name: "SSTP Client",
    icon: Settings,
    color: "bg-indigo-500",
    description: "Ваше приложение"
  }
];

export function ConnectionMethods() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Фотофон */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3">Варианты подключения</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Поддержка всех популярных VPN протоколов
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {protocols.map((protocol, index) => (
            <Card key={index} className="border hover:shadow-lg transition-all group">
              <CardContent className="pt-6 text-center">
                <div className={`w-16 h-16 ${protocol.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <protocol.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{protocol.name}</h3>
                <p className="text-xs text-muted-foreground">{protocol.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 max-w-3xl mx-auto">
          <p className="text-sm text-center">
            💡 <span className="font-medium">SSTP Client</span> может быть отдельным брендированным приложением, подготовленным под ваш сервис
          </p>
        </div>
      </div>
    </section>
  );
}

import { Settings, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const methods = [
  {
    category: "Ручная настройка",
    icon: Settings,
    protocols: ["IKEv2", "L2TP", "SSTP"],
    color: "bg-purple-100 text-purple-700"
  },
  {
    category: "Через приложения",
    icon: Smartphone,
    protocols: ["OpenVPN", "WireGuard", "SSTP Client"],
    color: "bg-blue-100 text-blue-700"
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
            Множество способов подключения для любых устройств
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {methods.map((method, index) => (
            <Card key={index} className="border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{method.category}</CardTitle>
                </div>
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

        <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
          SSTP Client может быть отдельным приложением, подготовленным командой под ваш сервис
        </p>
      </div>
    </section>
  );
}

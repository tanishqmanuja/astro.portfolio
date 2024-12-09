import AngularIcon from "@/icons/angular.svg";
import ArduinoIcon from "@/icons/arduino.svg";
import AxiosIcon from "@/icons/axios.svg";
import BearIcon from "@/icons/bear.svg";
import BunIcon from "@/icons/bun.svg";
import CplusplusIcon from "@/icons/c-plus-plus.svg";
import CapacitorIcon from "@/icons/capacitor.svg";
import DrizzleIcon from "@/icons/drizzle.svg";
import ElysiaIcon from "@/icons/elysia.svg";
import EspressifIcon from "@/icons/espressif.svg";
import GoIcon from "@/icons/go.svg";
import IonicIcon from "@/icons/ionic.svg";
import MatterIcon from "@/icons/matter.svg";
import NodeIcon from "@/icons/node-js.svg";
import PackageIcon from "@/icons/package.svg";
import PdfIcon from "@/icons/pdf.svg";
import ReactIcon from "@/icons/react.svg";
import RxjsIcon from "@/icons/rxjs.svg";
import ViteIcon from "@/icons/vite.svg";
import ZodIcon from "@/icons/zod.svg";

export const STACK_LINK_MAP: Record<string, string> = {
  react: "https://react.dev/",
  astro: "https://astro.build/",
  angular: "https://angular.dev/",
  ionic: "https://ionicframework.com/",
  capacitor: "https://capacitorjs.com/",
  pdfmake: "https://pdfmake.org/",
  node: "https://nodejs.org/en/",
  bun: "https://bun.sh/",
  cheerio: "https://cheerio.js.org/",
  elysia: "https://elysiajs.com/",
  zustand: "https://zustand.docs.pmnd.rs/",
  arduino: "https://www.arduino.cc/",
  go: "https://go.dev/",
  rxjs: "https://rxjs.dev/",
  axios: "https://axios-http.com/",
  vite: "https://vitejs.dev/",
  drizzle: "https://orm.drizzle.team/",
  zod: "https://zod.dev/",
  matter: "https://csa-iot.org/all-solutions/matter/",
  espressif: "https://www.espressif.com/",
  esp32: "https://www.espressif.com/en/products/socs/esp32",
  "c++": "https://isocpp.org/",
};

export type IconComponent = typeof ReactIcon;
export const STACK_ICON_MAP: Record<string, IconComponent> = {
  react: ReactIcon,
  angular: AngularIcon,
  ionic: IonicIcon,
  capacitor: CapacitorIcon,
  pdfmake: PdfIcon,
  elysia: ElysiaIcon,
  node: NodeIcon,
  bun: BunIcon,
  zustand: BearIcon,
  arduino: ArduinoIcon,
  go: GoIcon,
  rxjs: RxjsIcon,
  axios: AxiosIcon,
  vite: ViteIcon,
  drizzle: DrizzleIcon,
  cheerio: PackageIcon,
  zod: ZodIcon,
  matter: MatterIcon,
  espressif: EspressifIcon,
  esp32: EspressifIcon,
  "c++": CplusplusIcon,
};

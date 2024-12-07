import ReactIcon from "@/icons/react.svg";
import AngularIcon from "@/icons/angular.svg";
import IonicIcon from "@/icons/ionic.svg";
import CapacitorIcon from "@/icons/capacitor.svg";
import NodeIcon from "@/icons/node-js.svg";
import PdfIcon from "@/icons/pdf.svg";
import BunIcon from "@/icons/bun.svg";
import ElysiaIcon from "@/icons/elysia.svg";
import BearIcon from "@/icons/bear.svg";
import ArduinoIcon from "@/icons/arduino.svg";
import GoIcon from "@/icons/go.svg";
import CplusplusIcon from "@/icons/c-plus-plus.svg";
import RxjsIcon from "@/icons/rxjs.svg";
import AxiosIcon from "@/icons/axios.svg";
import ViteIcon from "@/icons/vite.svg";
import HttpIcon from "@/icons/http.svg";
import InternetIcon from "@/icons/internet.svg";

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
  "c++": CplusplusIcon,
};

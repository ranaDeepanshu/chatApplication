import "../styles/global.css";
import React from "react";

import {
  Client as Styletron,
  hydrateType,
  Server,
} from "styletron-engine-atomic";
import {
  DebugEngine,
  Provider as StyletronProvider,
  useStyletron,
} from "styletron-react";

import type { AppProps /*, AppContext */ } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const isServer = typeof window === "undefined";
  const engine = isServer
    ? new Server()
    : new Styletron({
        hydrate: document.getElementsByClassName(
          "_styletron_hydrate_"
        ) as hydrateType,
      });

  const debug =
    process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

  return (
    <StyletronProvider value={engine} debug={debug}>
      <Component {...pageProps} />
    </StyletronProvider>
  );
}

import React from "react";

type AetherWatermarkProps = {
  /**
   * "overlay"  → cola no rodapé (o <footer> pai precisa de `relative`)
   * "floating" → flutua fixo no canto da viewport, acima de tudo
   */
  placement?: "overlay" | "floating";
  /** Canto horizontal quando em overlay/floating */
  align?: "left" | "center" | "right";
  /** Cor do texto e da logo. Use "#fff" em rodapés escuros. */
  color?: string;
  className?: string;
};

const WHATSAPP_NUMBER = "558597429291";
const WHATSAPP_MESSAGE =
  "Olá! Vi a experiência desse site e gostaria de solicitar um orçamento com a The Aether Lab.";

export function AetherWatermark({
  placement = "overlay",
  align = "right",
  color = "#0066ff",
  className = "",
}: AetherWatermarkProps) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  const alignX =
    align === "left"
      ? "left-4 sm:left-6"
      : align === "right"
      ? "right-4 sm:right-6"
      : "left-1/2 -translate-x-1/2";

  const position =
    placement === "floating"
      ? `fixed bottom-4 sm:bottom-6 ${alignX} z-50`
      : `absolute bottom-3 sm:bottom-4 ${alignX} z-20`;

  return (
    // pointer-events-none no wrapper: a marca d'água nunca bloqueia cliques do rodapé
    <div className={`${position} pointer-events-none ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Site desenvolvido pela The Aether Lab — falar no WhatsApp"
        style={{ color }}
        className={[
          "pointer-events-auto group inline-flex items-center gap-1.5",
          // fundo transparente de verdade, sem caixa branca
          "bg-transparent opacity-55 hover:opacity-100 focus-visible:opacity-100",
          "transition-opacity duration-300 motion-reduce:transition-none",
          "rounded-full px-2 py-1",
          "outline-none focus-visible:ring-2 focus-visible:ring-current/40",
        ].join(" ")}
      >
        

        {/*
          A logo vira uma "máscara": ela assume a cor do link (currentColor),
          então a mesma marca d'água funciona em rodapé claro ou escuro.
          Se preferir a logo com as cores originais, troque este bloco pelo
          <img src="/images/logo-blue.svg" ... /> comentado abaixo.
        */}
        <span
          aria-hidden="true"
          className="h-4 w-auto"
          style={{
            display: "block",
            width: "1.25rem",
            height: "1rem",
            backgroundColor: "currentColor",
            WebkitMaskImage: "url(/images/logo-blue.svg)",
            maskImage: "url(/images/logo-blue.svg)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
         {/* <img src="/images/logo-blue.svg" alt="" className="h-4 w-auto object-contain" />  */}

        <span className="text-[11px] font-semibold tracking-wide leading-none">
          The Aether Lab
        </span>
      </a>
    </div>
  );
}

/*
USO

1) Sobreposta no rodapé (o pai precisa de `relative`):

   <footer className="relative ...">
     ...conteúdo do rodapé...
     <AetherWatermark />
   </footer>

2) Rodapé escuro:

   <AetherWatermark color="#ffffff" />

3) Flutuando fixa na tela, fora do rodapé:

   <AetherWatermark placement="floating" align="right" />

Ajustes rápidos:
- Discrição: mude `opacity-55` (ex.: opacity-40 para bem sutil).
- Tamanho: `text-[11px]` e a `width/height` da máscara da logo.
- Se a logo sumir com a máscara, o SVG provavelmente usa <image> ou stroke
  sem fill — nesse caso use a versão <img> comentada.
*/

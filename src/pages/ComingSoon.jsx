import React from "react";
import { Cog, Sparkles } from "lucide-react";

export const ComingSoon = () => {
  const meta = {
    icon: Cog,
    label: "This Page",
    description: "Something amazing is being built here. Check back soon!",
    color: "#14b8a6",
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
  };

  const Icon = meta.icon;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] overflow-hidden select-none">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(${meta.color}80 1px, transparent 1px), linear-gradient(90deg, ${meta.color}80 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg px-6 gap-8">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: meta.color, animationDuration: "2.5s" }}
          />
          <div
            className="absolute -inset-3 rounded-full opacity-10"
            style={{ backgroundColor: meta.color }}
          />
          <div
            className="relative w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${meta.color}33, ${meta.color}11)`,
              border: `1.5px solid ${meta.color}44`,
              boxShadow: `0 0 40px ${meta.color}33, 0 20px 60px ${meta.color}22`,
            }}
          >
            <Icon className="w-12 h-12" style={{ color: meta.color }} />
          </div>
        </div>

        <div
          className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            backgroundColor: `${meta.color}18`,
            border: `1px solid ${meta.color}33`,
            color: meta.color,
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Coming Soon
        </div>
      </div>
    </div>
  );
};

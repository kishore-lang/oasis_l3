import React from "react";

export default function BrandIcon() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl">🍕</span>
      <div className="leading-none">
        <p className="font-extrabold text-primary text-xl">Pizzeria</p>
        <p className="text-sm text-foreground/70">Delivery</p>
      </div>
    </div>
  );
}
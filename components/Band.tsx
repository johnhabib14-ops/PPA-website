import type { ElementType, ReactNode } from "react";

type BandProps = {
  children: ReactNode;
  /** Background tone for the full-bleed band. */
  tone?: "default" | "alt" | "surface" | "navy";
  /** Wrapper element (defaults to section). */
  as?: ElementType;
  id?: string;
  className?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
  /** Constrain inner content to a narrower reading width. */
  narrow?: boolean;
};

export function Band({
  children,
  tone = "default",
  as,
  id,
  className,
  narrow,
  ...rest
}: BandProps) {
  const Tag = (as ?? "section") as ElementType;
  const classes = ["band", `band--${tone}`, className].filter(Boolean).join(" ");
  return (
    <Tag id={id} className={classes} {...rest}>
      <div className={`band__inner${narrow ? " band__inner--narrow" : ""}`}>{children}</div>
    </Tag>
  );
}

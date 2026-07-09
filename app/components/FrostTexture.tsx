/* Lavender silk texture layer for light sections. Rendered as an image
   because Turbopack dev drops CSS rules with url() asset references. */
export default function FrostTexture() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/media/frost-texture.webp"
      alt=""
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
    />
  );
}

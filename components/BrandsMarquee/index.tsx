import { BRANDS } from "@/constants";
import styles from "./styles.module.css";
import Image from "next/image";

interface Props {
  options?: "brands" | "clients";
  images?: string[];
}

export default function BrandsMarquee({
  options = "brands",
  images = BRANDS,
}: Readonly<Props>) {
  return (
    <div className={styles.marquee}>
      {/* Single track — CSS animation handles the infinite loop via
          two identical children inside the track so we don't duplicate
          the full <Image> tree. We use lightweight <img> tags instead
          of next/image since these are small brand logos. */}
      <div className={styles.track} aria-hidden="false">
        {images.map((brand) => (
          <div key={brand} className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/img/${options}/${brand}.png`}
              alt={`Marca ${brand}`}
              className={styles.images}
              width={180}
              height={90}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
      {/* Duplicate track for seamless CSS loop — uses aria-hidden
          so screen readers don't read duplicates */}
      <div className={styles.track} aria-hidden="true">
        {images.map((brand) => (
          <div key={brand} className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/img/${options}/${brand}.png`}
              alt=""
              className={styles.images}
              width={180}
              height={90}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

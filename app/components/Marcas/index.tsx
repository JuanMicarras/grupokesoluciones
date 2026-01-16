import { BRANDS } from "@/constants";
import styles from "./styles.module.css";
import Image from "next/image";

interface Props {
  options?: 'marcas' | 'clientes';
  images?: string[];
}

export default function BrandsMarquee({options = 'marcas', images = BRANDS}: Readonly<Props>) {
  const loop = [...images, ...images];

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {loop.map((brand, i) => (
          <div key={`${brand}-${i}`} className={styles.item}>
            <Image
              src={`/img/${options}/${brand}.png`}
              alt={`Marca ${brand}`}
              className={styles.images}
              width={120}
              height={120}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
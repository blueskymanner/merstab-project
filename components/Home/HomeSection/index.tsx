import Link from 'next/link'
import { forwardRef } from 'react'
import styles from './index.module.css'

const HomeSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="home" className={styles.homeSection} ref={ref}>
      {/* <DynamicBackgroundNoSSR></DynamicBackgroundNoSSR> */}
      <div className="container">
        <div className={styles.startEarningRow}>
          <div className={styles.startEarningSection}>
            <div className={styles.earnYieldHeader}>
              <span className={styles.gardientYieldHeader}>
                Liquidity Protocol <br />
              </span>
              For DeFi Derivatives
            </div>
            <p>Provide liquidity to perps, futures and options</p>
            <Link href="/overview">
              <a>
                <button className={styles.yieldButton}>START STAKING</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
})

export default HomeSection

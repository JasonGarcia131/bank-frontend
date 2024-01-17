import {card} from '../assets';
import styles, {layout} from '../styles';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>
          in a few easy steps.
        </h2> 
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugiat perspiciatis expedita numquam ipsam ab reiciendis tempore asperiores recusandae adipisci. Cumque nihil neque ducimus animi voluptates perferendis porro totam assumenda?</p>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}><img src={card} alt="card" className='w-[100%] h-[100%]'/></div>
    </section>
  )
}

export default CardDeal
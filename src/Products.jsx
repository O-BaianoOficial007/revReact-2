import s from './Products.module.css'
import { Card } from './components/card'
import { Menu } from './components/menu'

function Products() {
    return (
        <>
            <Menu />
            <section className={s.wrapProducts}>
                <Card />
            </section>
        </>
    )
}

export default Products

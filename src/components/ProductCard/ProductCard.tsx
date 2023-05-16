import productImg from 'assets/images/product-image.svg'
import classes from './ProductWrapper.module.scss'
import {Button} from 'components/Button/Button';
import {RadioButton} from 'components/RadioButton/RadioButton';
import {MockDataType} from 'MockData/MockData';


export const ProductCard = ({name, price, info, color}: Partial<MockDataType>) => {
    return (
        <div className={classes.product_wrapper}>
            <img src={productImg} alt={'product-img'}/>
            <div className={classes.info_block}>
                <div className={classes.product_main_info}>
                    <p className={classes.price}>{`${price}$`}</p>
                    <div className={classes.product_description}>
                        <p className={classes.title}>{name}</p>
                        <p className={classes.description}>{info}</p>
                    </div>
                </div>
                <div className={classes.color_block}>
                    <p className={classes.color_text}>Choose your colour</p>
                    <div className={classes.radio_button_block}>
                        {color?.map((el) => {
                            return <RadioButton key={el.id} color={el.color}/>
                        })}
                    </div>
                </div>
                <div className={classes.button_block}>
                    <Button title={'Add to card'} className={classes.add_button}/>
                    <Button title={'Buy now'} className={classes.buy_button}/>
                </div>
                <p className={classes.link}>Read reviews</p>
            </div>
        </div>
    )
}
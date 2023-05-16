import classes from './RadioButton.module.scss'

type RadioButtonPropsType = {
    color: string
}

export const RadioButton = ({color}: RadioButtonPropsType) => {
    return (
        <>
            <label className={classes.label}>
                <input className={classes.input_radio} type={'radio'} name={'name1'}/>
                <span className={classes.span} style={{background: color}}/>
            </label>
        </>
    )
}
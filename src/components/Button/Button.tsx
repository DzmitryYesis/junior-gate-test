type ButtonPropsType = {
    title: string,
    className: string
}

export const Button = ({title, className}: ButtonPropsType) => {
    return (
        <button className={className}>
            {title}
        </button>
    )
}
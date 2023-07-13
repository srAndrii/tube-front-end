import { IButton } from './Button.interface'
import styles from './Button.module.scss'
import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

export const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}
export default Button

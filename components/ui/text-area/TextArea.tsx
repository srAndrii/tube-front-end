import { ITextArea } from './TextArea.interface'
import styles from './TextArea.module.scss'
import { forwardRef } from 'react'

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ error, style, ...rest }, ref) => {
		return (
			<div className={styles['editor']} style={style}>
				<textarea ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

TextArea.displayName = 'TextArea'
export default TextArea

'use client'

import stylesIcon from '../icons-right/IconsRight.module.scss'
import styles from './AuthForm.module.scss'
import { IAuthFields } from './auth-form.interface'
import { useOutside } from '@/hooks/useOutside'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

export const AuthForm: FC = () => {
	const { isShow, ref, setIsShow } = useOutside(false)
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		// if (type ==='login')
		// 	else if (type==='register')
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			<button
				className={stylesIcon.button}
				onClick={() => setIsShow(!isShow)}
			>
				<FaUserCircle fill='#A4A4A4' />
			</button>
			{isShow && (
				<form
					className={styles.form}
					onSubmit={handleSubmit(onSubmit)}
				></form>
			)}
		</div>
	)
}
export default AuthForm
